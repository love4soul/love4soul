/**
 * @returns {{orderType: {buy: string, sell: string, pendingBuy: string, pendingSell: string}, addOrder: addOrder, removeOrder: removeOrder, restoreLayout: restoreLayout, saveLayout: saveLayout, restoreDrawingsFromApp: restoreDrawingsFromApp, restoreDrawings: restoreDrawings, saveDrawings: saveDrawings}}
 * @constructor
 */
var EGlobalTrade4you = function() {
    // Set FALSE for mobile devices
    var browserDebug = false;

    var orderType = {
        buy: 'buy',
        sell: 'sell',
        pendingBuy: 'pending-buy',
        pendingSell: 'pending-sell'
    };

    var order = {
        type: {
            buy: 'buy',
            sell: 'sell',
            pendingBuy: 'pending-buy',
            pendingSell: 'pending-sell'
        },
        typeText: {
            buy: 'BUY',
            sell: 'SELL',
            'pending-buy': 'PENDING BUY',
            'pending-sell': 'PENDING SELL'
        },
        params: {
            lineLabel: {
                font: '6pt "Roboto Condensed", sans-serif'
            },
            line: {
                pattern: 'dashed',
                lineWidth: 1
            }
        },
        active: []
    };

    var sendIOSRequest = function(action, data, dataId, serialize) {
        if (isAndroid()) {
            return;
        }

        var request = '';

        if (data != null) {
            data = (serialize ? JSON.stringify(data) : data);
            request = '?' + dataId + '=' + data;
        }

        var url = 'ios://' + action + request;

        if (browserDebug) {
            console.log(url);
        } else {
            window.location.href = url;
        }
    };

    var isAndroid = function() {
        var ua = navigator.userAgent;
        return ua.indexOf('Android') > -1;
    };

    var drawingInjection = function() {
        if (stxx.chart.dataSet.length) {
            var activeOrdersLength = order.active.length;
            var x, y, txt, context, lineLabel;

            var panel = stxx.chart.panel;

            for (var i = 0; i < activeOrdersLength; i++) {
                var orderColor = order.active[i].color;
                var orderPrice = order.active[i].price;
                var orderType = order.active[i].type;
                var orderAmount = order.active[i].amount;

                x = stxx.pixelFromDate(stxx.chart.dataSet[stxx.chart.dataSet.length - 1].Date, stxx.chart);
                y = stxx.pixelFromPrice(orderPrice, panel);

                stxx.plotLine(x, x + 1, y, y, orderColor, 'horizontal', stxx.chart.context, true, order.params.line);

                txt = orderPrice;

                if (panel.chart.transformFunc) {
                    txt = panel.chart.transformFunc(stxx, panel.chart, txt);
                }

                if (panel.yAxis.priceFormatter) {
                    txt = panel.yAxis.priceFormatter(stxx, panel, txt);
                } else {
                    txt = stxx.formatYAxisPrice(txt, panel);
                }

                stxx.createYAxisLabel(panel, txt, y, orderColor);

                lineLabel = order.typeText[orderType] + ' ' + orderAmount;
                context = stxx.chart.context;
                context.font = order.params.lineLabel.font;
                context.fillStyle = orderColor;
                context.fillText(lineLabel, panel.width - 12 - context.measureText(lineLabel).width, y - 4);
            }
        }
    };

    var overwriteDefaultFunctions = function() {

        STX.UI.Prototypes.TFC.initialize = function() {
            var count = 3;
            var hasError = false;

            var self = this;

            function acc(err) {
                if (err) {
                    console.log(err);
                    hasError = true;
                }
                count--;
                if (!count) {
                    if (!hasError) {
                        self.start();
                    }
                }
            }

            STX.loadStylesheet("plugins/tfc/stx-tfc.css", acc);
            STX.loadScript("plugins/tfc/stx-tfc.js", acc);
            STX.loadUI("t4y/plugins/tfc/stx-tfc.html", acc);
        };

        STX.UI.Layout.prototype.setPeriodicity = function(node, periodicity, interval) {
            var self = this;
            if (self.context.loader) {
                self.context.loader.show();
            }
            self.context.stx.setPeriodicityV2(periodicity, interval, function() {
                if (self.context.loader) self.context.loader.hide();
            });

            if (!isAndroid()) {
                sendIOSRequest('period', 'p', periodicity * interval, false);
            }
        };

        STX.UI.Prototypes.TFC.start = function() {
            var $cqSidePanelSelector = $("cq-side-panel");
            $(".stx-trade-panel").appendTo($cqSidePanelSelector);
            var stx = this.context.stx;

            stx.account = new STX.Account.Demo();
            var tfcConfig = {
                stx: stx,
                account: stx.account
            };
            stx.tfc = new STX.TFC(tfcConfig);

            var self = this;

            $(".stx-trade-nav").addClass("active");
            $(".stx-trade-info").removeClass("active");
            $cqSidePanelSelector[0].resizeMyself();

            stx.tfc.selectSymbol = function(symbol) {
                symbol = symbol.toUpperCase();
                self.context.changeSymbol({symbol: symbol});
            };

            STX.TFC.prototype.confirmOrder = function(order) {
                sendIOSRequest('makeOrder', 'data', order, true);
            };
        };

        STX.UI.Prototypes.Scroll.resize = function() {
            var node = $(this);
            if (typeof(node.attr("cq-no-resize")) != "undefined") return;
            if (typeof(node.attr("cq-no-maximize")) != "undefined") this.noMaximize = true;
            var position = node.offset();
            var context = this.context;
            var reduceMenuHeight = context ? context.params.reduceMenuHeight : 0;
            var winHeight = $(window).height();
            if (!winHeight) return;
            var height = winHeight - position.top - reduceMenuHeight;

            // If there are subsequent siblings that have a fixed height then make room for them
            var nextAll = node.nextAll();
            for (var i = 0; i < nextAll.length; i++) {
                var sibling = $(nextAll[i]);
                if (!sibling.is(":visible")) continue; // skip hidden siblings
                height -= sibling.height();
            }
            height = height + 40;
            if (!this.noMaximize) node.css({"height": height + "px"});
            node.css({"max-height": height + "px"});
            if (this.iscroll) this.iscroll.refresh();
        };

        STX.QuoteFeed.MyFeed = function() {
        };

        STX.QuoteFeed.MyFeed.stxInheritsFrom(STX.QuoteFeed);

        STX.QuoteFeed.MyFeed.prototype.fetch = function(params, cb) {
            if (params.startDate) {
                cb({
                    quotes: []
                });
            } else {
                if (params.endDate) {
                    sendIOSRequest('loadmore', null);
                    loadMoreCallback = cb;
                } else {
                    cb({
                        quotes: [],
                        moreAvailable: true
                    });
                }
            }
        };

        stxx.attachQuoteFeed(new STX.QuoteFeed.MyFeed(), {
            refreshInterval: 60
        });

        STXChart.prototype.prepend("touchstart", function(event) {
            $('.ciq-dropdowns .stxMenuActive').removeClass('stxMenuActive');
            return false;
        });

        stxx.callbacks.layout = saveLayout;
        stxx.callbacks.symbolChange = saveLayout;
        stxx.callbacks.drawing = saveDrawings;
    };

    var displayOrientationFix = function() {
        if ($(window).width() > $(window).height()) {
            $('body').removeClass('portrait').addClass('landscape');
        } else {
            $('body').removeClass('landscape').addClass('portrait');
        }
    };

    /**
     * @param {int|string} id
     */
    var removeOrder = function(id) {
        var activeOrdersLength = order.active.length;

        for (var i = 0; i < activeOrdersLength; i++) {
            if (order.active[i].id == id) {
                order.active.splice(i, 1);
                stxx.draw();
                return;
            }
        }
    };

    /**
     * @param {int|string} id
     * @param {number} price
     * @param {string} type
     * @param {number} amount
     */
    var addOrder = function(id, price, type, amount) {
        var color;

        switch (type) {
            case orderType.buy:
                color = '#68a31a';
                break;

            case orderType.sell:
                color = '#c7245a';
                break;

            case orderType.pendingBuy:
            case orderType.pendingSell:
                color = '#ec6606';
                break;

            default:
                console.log('Incorrect order type "' + type + '"');
                return;
        }

        order.active.push({
            id: id,
            price: price,
            type: type,
            color: color,
            amount: amount
        });

        stxx.draw();
    };

    var restoreLayout = function(json) {
        if (json == null) {
            return;
        }

        stxx.importLayout(JSON.parse(json));
    };

    var saveLayout = function(obj) {
        var layout = JSON.stringify(obj.stx.exportLayout(true));

        STX.localStorageSetItem("myChartLayout", layout);

        sendIOSRequest('savelayout', layout, 'l', false);
    };

    var restoreDrawingsFromApp = function(data) {
        if (data == null) {
            return;
        }

        if (data) {
            stxx.reconstructDrawings(data);
            stxx.draw();
        }
    };

    var restoreDrawings = function(stx, symbol) {
        var memory = STX.localStorage.getItem(symbol);

        if (memory !== null) {
            var parsed = JSON.parse(memory);
            if (parsed) {
                stx.reconstructDrawings(parsed);
                stx.draw();
            }
        }
    };

    var saveDrawings = function(obj) {
        var drawings = obj.stx.serializeDrawings();

        if (drawings.length === 0) {
            STX.localStorage.removeItem(obj.symbol);
        } else {
            STX.localStorageSetItem(obj.symbol, JSON.stringify(drawings));
        }

        sendIOSRequest('saveDrawings', obj.symbol, 'l', false);
    };

    var init = function() {
        overwriteDefaultFunctions();
        displayOrientationFix();
        STXChart.prototype.append("draw", drawingInjection);
    };

    init();

    return {
        'orderType': orderType,
        'addOrder': addOrder,
        'removeOrder': removeOrder,
        'restoreLayout': restoreLayout,
        'saveLayout': saveLayout,
        'restoreDrawingsFromApp': restoreDrawingsFromApp,
        'restoreDrawings': restoreDrawings,
        'saveDrawings': saveDrawings
    };
};
