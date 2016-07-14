

STXChart.prototype.prepend("touchstart", function(event) {
    $('.ciq-dropdowns .stxMenuActive').removeClass('stxMenuActive');

    //return true; //when you want to break out of the rest of the function
    return false; //when you want to continue into the function
});

/*
 *   Overrides default functions
 */

/* stxUI.js */
STX.UI.Prototypes.TFC.start = function() {
    $(".stx-trade-panel").appendTo($("cq-side-panel"));
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
    $("cq-side-panel")[0].resizeMyself();

    stx.tfc.selectSymbol = function(symbol) {
        symbol = symbol.toUpperCase();
        self.context.changeSymbol({symbol: symbol});
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
