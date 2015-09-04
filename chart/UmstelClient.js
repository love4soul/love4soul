var umstelJS = {};
umstelJS.getFromIndexedDB = function(l, k) {
    return l.get(k);
};
umstelJS.putToIndexedDB = function(l, k, v) {
    return l.put(v, k);
};
umstelJS.deleteFromIndexedDB = function(l, k) {
    return l.delete(k);
};
umstelJS.continueIndexedDBCursor = function(c) {
    c.continue();
};
umstelJS.initAPI = function() {
    umstelAPI = umstelJS.api;
};
if (Array.isArray == null) Array.isArray = function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
};
umstelJS.api = null;
umstelJS.loaded = false;
umstelJS.window = window;
umstelJS.document = document;
umstelJS.navigator = navigator;
umstelJS.ignoreVersion = true;
umstelJS.initialVersion = null;
umstelJS.version = null;
umstelJS.versionRequested = false;
umstelJS.requestedFiles = [];
umstelJS.requestedStyles = [];
umstelJS.versionUpdateCallback = [];
umstelJS.failedAjax = false;
umstelJS.reconnectTimeout = 1000;
umstelJS.longReconnectCount = 10;
umstelJS.longReconnectTimeout = 15000;
umstelJS.locales = !(typeof locales === 'undefined') && (locales != null && Array.isArray(locales)) ? JSON.parse(JSON.stringify(locales)) : [];
umstelJS.pluginGuids = !(typeof pluginGuids === 'undefined') && (pluginGuids != null && Array.isArray(pluginGuids)) ? JSON.parse(JSON.stringify(pluginGuids)) : [];
umstelJS.preloadFiles = !(typeof preloadFiles === 'undefined') && (preloadFiles != null && Array.isArray(preloadFiles)) ? JSON.parse(JSON.stringify(preloadFiles)) : [];
umstelJS.preloadPlugins = !(typeof preloadPlugins === 'undefined') && (preloadPlugins != null && Array.isArray(preloadPlugins)) ? JSON.parse(JSON.stringify(preloadPlugins)) : [];
umstelJS.preloadStyles = !(typeof preloadStyles === 'undefined') && (preloadStyles != null && Array.isArray(preloadStyles)) ? JSON.parse(JSON.stringify(preloadStyles)) : [];
umstelJS.terminalProperties = !(typeof terminalProperties === 'undefined') && terminalProperties != null ? JSON.parse(JSON.stringify(terminalProperties)) : {};
umstelJS.pluginPaths = !(typeof pluginPaths === 'undefined') && pluginPaths != null ? JSON.parse(JSON.stringify(pluginPaths)) : {};
umstelJS.apiReady = function() {
    var b = this;
    if (b.chartCallsBefore != null) {
        for (var c = 0; c < b.chartCallsBefore.length; c++) {
            var d = b.chartCallsBefore[c];
            var e = b.apiCreateChart(d.element);
            var f = d.iface.onload;
            if (f != null && typeof f == 'function') {
                try {
                    f(e)
                } catch (a) {
                    console.error(a)
                }
            }
            d.iface.chart = e;
            d.iface.loaded = true
        }
        b.chartCallsBefore = null
    }
};
umstelJS.loadAPI = function(c) {
    var d = this;
    c.createChart = function(a) {
        if (d.apiCreateChart != null) {
            return d.apiCreateChart(a)
        } else {
            if (d.chartCallsBefore == null) {
                d.chartCallsBefore = []
            }
            var b = {
                loaded: false,
                onload: null
            };
            d.chartCallsBefore.push({
                element: a,
                iface: b
            });
            return b
        }
    };
    umstelJS.loadAPI = null
};
umstelAPI = null;
umstelJS.ready = function() {
    var b = this;
    b.loaded = true;
    b.api.loaded = true;
    var c = b.api.onload;
    if (c != null && typeof c == 'function') {
        try {
            c()
        } catch (a) {
            console.error(a)
        }
    }
};
umstelJS.prepareAPI = function() {
    var a = this;
    a.api = {
        loaded: false,
        onload: null
    };
    if (a.loadAPI != null) {
        a.loadAPI(a.api)
    }
    a.prepareAPI = null
};
umstelJS.prepareAPI();
umstelJS.loadStyle = function(c) {
    var d = this;

    function e() {
        var a = '.loader, .UmstelWidget {' + 'display: block;' + 'width: 60px;' + 'height: 60px;' + 'position: relative;' + 'border-top-color: transparent;' + 'border-radius: 100%;' + '-webkit-animation: spin 1s infinite linear;' + '-moz-animation: spin 1s infinite linear;' + '-ms-animation: spin 1s infinite linear;' + '-o-animation: spin 1s infinite linear;' + 'animation: spin 1s infinite linear;' + 'background: url(http://services.iresearchfx.com/UmstelClient/images/loaders/loader.png?v=1) center center no-repeat;' + '}' + '@-webkit-keyframes spin {' + 'to { -webkit-transform: rotate(360deg); }' + '}' + '@-moz-keyframes spin {' + 'to { -moz-transform: rotate(360deg); }' + '}' + '@-ms-keyframes spin {' + 'to { -ms-transform: rotate(360deg); }' + '}' + '@-o-keyframes spin {' + 'to { -o-transform: rotate(360deg); }' + '}' + '@keyframes spin {' + 'to { transform: rotate(360deg); }' + '}';
        var b = d.document.createElement('style');
        b.appendChild(d.document.createTextNode(a));
        d.document.body.appendChild(b)
    }
    if (d.document.body != null) {
        e()
    } else {
        setTimeout(function() {
            d.loadStyle(c)
        }, 50)
    }
};
umstelJS.loadStyle();
umstelJS.findDomain = function() {
    var a = this;
    if (a.domain != null) {
        return a.domain
    } else {
        var b = a.document.location.host;
        b = btoa(b);
        b = b.replace(' ', '');
        b = b.replace('=', '');
        b = b.replace('/', '');
        b = b.replace('\\', '');
        b = b.replace('%', '');
        b = b.replace('&', '');
        b = b.replace('?', '');
        b = b.replace('@', '');
        a.domain = b;
        return b
    }
};
umstelJS.findBaseUrl = function() {
    var e = this;
    if (e.base != null) {
        return e.base
    } else {
        function f(a) {
            var b = a.lastIndexOf('#');
            if (b == -1) {
                b = a.length
            }
            var c = a.indexOf('?');
            if (c == -1) {
                c = a.length
            }
            var d = a.lastIndexOf('/', Math.min(c, b));
            return d >= 0 ? a.substring(0, d + 1) : ''
        }

        function g(a) {
            if (a.match(/^\w+:\/\//)) {} else {
                var b = umstelJS.document.createElement('img');
                b.src = a + 'clear.cache.gif';
                a = f(b.src)
            }
            return a
        }

        function h() {
            var a = umstelJS.document.getElementsByTagName('script');
            for (var b = 0; b < a.length; ++b) {
                if (a[b].src.indexOf('UmstelClient.js') != -1) {
                    return f(a[b].src)
                }
            }
            return ''
        }

        function i() {
            var a = umstelJS.document.location;
            return a.href == a.protocol + '//' + a.host + a.pathname + a.search + a.hash
        }
        var j = h();
        if (j == '' && i()) {
            j = f(umstelJS.document.location.href)
        } else {
            j = j + 'UmstelClient/'
        }
        j = g(j);
        e.base = j;
        return j
    }
};
umstelJS.showVersionError = function(b) {
    var c = this;

    function d() {
        pageStyle = '.ums-unsupportedBrowser {' + 'font-family: arial;' + 'text-align: center;' + 'position: relative;' + 'top: 45%;' + 'width: 97%;' + '}';
        var a = c.document.createElement('style');
        a.appendChild(c.document.createTextNode(pageStyle));
        c.document.body.appendChild(a)
    }
    if (c.document.readyState == 'complete') {
        d();
        var e = c.document.getElementsByClassName('UmstelWidget');
        for (var f = 0; f < e.length; f++) {
            var g = e.item(f);
            g.style.background = 'white';
            g.innerHTML = '<div class="ums-unsupportedBrowser">' + b + '<\/div>'
        }
        var e = c.document.getElementsByClassName('UmstelTerminal');
        for (var f = 0; f < e.length; f++) {
            var g = e.item(f);
            g.style.background = 'white';
            g.innerHTML = '<div class="ums-unsupportedBrowser">' + b + '<\/div>'
        }
    } else {
        setTimeout(function() {
            c.showVersionError(b)
        }, 50)
    }
};
umstelJS.checkForCapability = function() {
    if (this.isMSIE() && this.getMSIEVersion() == 10) {
        var a = this.document.createElement('link');
        a.rel = 'stylesheet';
        a.href = 'ie10.css';
        this.document.head.appendChild(a)
    }
    if (!this.checkForCapabilityMajor()) {
        this.showVersionError('Unsupported browser, please consider upgrading your browser');
        return false
    } else {
        return true
    }
};
umstelJS.checkForCapabilityMajor = function() {
    return this.checkForStorage() && (this.checkForWebsockets() && (this.checkForCanvas() && (!this.isSafari() || this.getSafariVersion() >= 6)))
};
umstelJS.checkForCapabilityMinor = function() {
    return this.checkFoBrowser() && this.checkFoBrowserVersion()
};
umstelJS.checkFoBrowser = function() {
    if (this.isMSIE() || (this.isChrome() || (this.isFirefox() || (this.isSafari() || this.isSafariMobile())))) return true;
    else return false
};
umstelJS.checkFoBrowserVersion = function() {
    if (this.isMSIE()) {
        var a = this.getMSIEVersion();
        return a >= 10
    } else if (this.isChrome()) {
        var a = this.getChromeVersion();
        return a >= 30
    } else if (this.isFirefox()) {
        var a = this.getFirefoxVersion();
        return a >= 25
    } else if (this.isSafari()) {
        var a = this.getSafariVersion();
        return a >= 6
    } else if (this.isSafariMobile()) {
        var a = this.getSafariMobileVersion();
        return a >= 6
    } else {
        return false
    }
};
umstelJS.checkForStorage = function() {
    return this.checkForIndexedDB() || this.checkForWebSQL()
};
umstelJS.checkForWebsockets = function() {
    return WebSocket != null && WebSocket != 'undefined'
};
umstelJS.checkForCanvas = function() {
    var b = null;
    try {
        b = this.document.createElement('canvas').getContext('2d')
    } catch (a) {
        return false
    }
    if (b != null) {
        if (typeof b.fillText == 'function') return true
    }
    return false
};
umstelJS.checkForIndexedDB = function() {
    if (this.window.indexedDB != null && this.window.indexedDB != 'undefined') {
        return typeof this.window.indexedDB.open == 'function'
    } else {
        return false
    }
};
umstelJS.checkForWebSQL = function() {
    if (this.window.openDatabase != null && this.window.openDatabase != 'undefined') return true;
    else return false
};
umstelJS.isMSIE = function() {
    var a = this.getUserAgent();
    if (a.indexOf('MSIE') > -1) {
        return true
    } else {
        if (a.indexOf('Trident') > -1) {
            return true
        } else {
            return false
        }
    }
};
umstelJS.isWebkit = function() {
    var a = this.getUserAgent();
    var b = new RegExp('AppleWebKit/[0-9]+.[0-9]+', 'igm');
    if (b.test(a)) {
        return true
    } else {
        return false
    }
};
umstelJS.isChrome = function() {
    var a = this.getUserAgent();
    var b = new RegExp('Chrome/[0-9]+.[0-9]+.[0-9]+.[0-9]+ Safari/[0-9]+.[0-9]+$', 'igm');
    if (b.test(a)) {
        return true
    } else {
        return false
    }
};
umstelJS.isFirefox = function() {
    var a = this.getUserAgent();
    var b = new RegExp('Gecko/[0-9]+ FireFox/[0-9]+.[0-9]+(.[0-9])?$', 'igm');
    if (b.test(a)) {
        return true
    } else {
        return false
    }
};
umstelJS.isSafari = function() {
    var a = this.getUserAgent();
    if (a.indexOf('Android') > -1) {
        return false;
    }
    if (a.indexOf('Safari/') > -1 && (a.indexOf('Version/') > -1 && a.indexOf('Mobile/') == -1)) {
        return true
    } else {
        return false
    }
};
umstelJS.isSafariMobile = function() {
    var a = this.getUserAgent();
    if (a.indexOf('Android') > -1) {
        return false;
    }
    if (a.indexOf('Safari/') > -1 && (a.indexOf('Version/') > -1 && a.indexOf('Mobile/') > -1)) {
        return true
    } else {
        return false
    }
};
umstelJS.getMSIEVersion = function() {
    if (!this.isMSIE()) return null;
    var a = this.getUserAgent();
    if (a.indexOf('MSIE') > -1) {
        a = a.substring(a.indexOf('MSIE') + 5, a.indexOf(';', a.indexOf('MSIE') + 6))
    } else {
        if (a.indexOf('Trident') > -1) {
            a = a.substring(a.indexOf('rv') + 3, a.indexOf(')', a.indexOf('rv') + 4))
        } else {
            return null
        }
    }
    return parseInt(a)
};
umstelJS.getChromeVersion = function() {
    if (!this.isChrome()) return null;
    var a = this.getUserAgent();
    a = a.substring(a.indexOf('Chrome/') + 7, a.indexOf(' ', a.indexOf('Chrome/') + 7));
    return parseInt(a)
};
umstelJS.getFirefoxVersion = function() {
    if (!this.isFirefox()) return null;
    var a = this.getUserAgent();
    a = a.substring(a.indexOf('Firefox/') + 8);
    return parseInt(a)
};
umstelJS.getSafariVersion = function() {
    if (!this.isSafari()) return null;
    var a = this.getUserAgent();
    a = a.substring(a.indexOf('Version/') + 8, a.indexOf(' ', a.indexOf('Version/') + 8));
    return parseInt(a)
};
umstelJS.getSafariMobileVersion = function() {
    if (!this.isSafariMobile()) return null;
    var a = this.getUserAgent();
    a = a.substring(a.indexOf('Version/') + 8, a.indexOf(' ', a.indexOf('Version/') + 8));
    return parseInt(a)
};
umstelJS.getUserAgent = function() {
    return this.navigator.userAgent
};
umstelJS.loadFile = function(i, j, k) {
    var l = this;
    var m = 1;
    var n = 2;
    var o = 3;
    var p = 4;
    var q = 0;

    function r() {
        l.initialVersion = window.localStorage.getItem('GV');
        if (l.initialVersion == null || l.initialVersion == '') {
            l.initialVersion = 0;
            l.ignoreVersion = true
        } else {
            l.ignoreVersion = window.localStorage.getItem('GVI');
            if (l.ignoreVersion == null || l.ignoreVersion == '') {
                l.ignoreVersion = true
            } else {
                l.ignoreVersion = l.ignoreVersion == '1'
            }
        }
    }

    function s(e, f) {
        if (e == null) e = false;
        if (!e) {
            l.version = null;
            l.versionRequested = true
        }
        var g = H('../version?t=' + (new Date).getTime());
        var h = l.initialVersion;
        F(g, function(a, b) {
            if (e) {
                if (a == 200) {
                    var c = parseInt(b);
                    if (f != null) {
                        f(h, c)
                    }
                } else {
                    if (f != null) {
                        f(h, h)
                    }
                }
            } else {
                if (a == 200) {
                    var d = parseInt(b);
                    l.version = d;
                    l.initialVersion = d;
                    l.ignoreVersion = h == 0;
                    window.localStorage.setItem('GV', d);
                    window.localStorage.setItem('GVI', l.ignoreVersion ? '1' : '0');
                    if (h == 0 || h == d) {
                        C()
                    } else {
                        D()
                    }
                    v()
                } else {
                    l.version = h;
                    C();
                    v()
                }
                if (f != null) {
                    f(h, l.version)
                }
            }
        })
    }

    function t(d) {
        d.sent = true;
        var e = l.initialVersion;
        var f = G(d.name, e);
        F(f, function(a, b) {
            if (!d.dropped) {
                if (a == 0) {
                    d.retry++;
                    l.failedAjax = true;
                    var c = d.retry < l.longReconnectCount ? l.reconnectTimeout : l.longReconnectTimeout;
                    setTimeout(function() {
                        t(d)
                    }, c)
                } else {
                    d.ready = true;
                    d.code = a;
                    d.data = b;
                    if (l.version != null) {
                        B(d)
                    }
                }
            }
        })
    }

    function u(b) {
        if (l.version != null) {
            if (l.document.head != null) {
                if (b.status != q) return;
                var c = G(b.name, l.version);
                c = c + (c.indexOf('?') >= 0 ? '&' : '?') + 'o=' + l.findDomain() + '&r=' + b.retry;
                var d = l.document.createElement('link');
                d.href = c;
                d.rel = 'stylesheet';
                d.type = 'text/css';
                b.status = m;
                w(b);
                d.onabort = function() {
                    b.status = p;
                    A(b);
                    b.statusCallbacks = []
                };
                d.onload = function() {
                    b.status = n;
                    A(b);
                    b.statusCallbacks = []
                };
                d.onerror = function() {
                    b.retry++;
                    b.status = q;
                    l.document.head.removeChild(d);
                    if (b.retry < 100) {
                        var a = b.retry < l.longReconnectCount ? l.reconnectTimeout : l.longReconnectTimeout;
                        setTimeout(function() {
                            u(b)
                        }, a)
                    } else {
                        b.status = o;
                        A(b);
                        b.statusCallbacks = []
                    }
                };
                l.document.head.appendChild(d)
            } else {
                setTimeout(function() {
                    u(b)
                }, 50)
            }
        }
    }

    function v() {
        for (var a = 0; a < l.requestedStyles.length; a++) {
            K = l.requestedStyles[a];
            if (K != null && K.status == q) {
                u(K)
            }
        }
    }

    function w(b) {
        var c = b.statusCallbacks;
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e != null) {
                try {
                    e(b.status)
                } catch (a) {}
            }
        }
    }

    function A(b) {
        var c = b.statusCallbacks;
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e != null) {
                try {
                    e(b.status)
                } catch (a) {}
            }
        }
        b.statusCallbacks = []
    }

    function B(b) {
        var c = b.readyCallbacks;
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e != null) {
                try {
                    e(b.code, b.data)
                } catch (a) {}
            }
        }
        b.readyCallbacks = []
    }

    function C() {
        for (var a = 0; a < l.requestedFiles.length; a++) {
            L = l.requestedFiles[a];
            if (L != null && L.ready) {
                B(L)
            }
        }
    }

    function D() {
        var a = l.requestedFiles;
        l.requestedFiles = [];
        var b;
        for (var c = 0; c < a.length; c++) {
            b = a[c];
            if (b != null) {
                b.dropped = true;
                if (!b.ready) {
                    var d = b.readyCallbacks;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        if (f != null) {
                            l.loadFile(b.name, f)
                        }
                    }
                }
            }
        }
    }

    function F(b, c) {
        var d = b;
        d = d + (d.indexOf('?') >= 0 ? '&' : '?') + 'o=' + l.findDomain();
        try {
            var e = new XMLHttpRequest;
            var f = false;
            e.ontimeout = function() {
                if (!f) {
                    f = true;
                    if (c != null) {
                        c(0, null)
                    }
                }
                e = null
            };
            e.onerror = function() {
                if (!f) {
                    f = true;
                    if (b.indexOf('file://') == 0) {
                        if (c != null) {
                            c(404, null)
                        }
                    } else {
                        if (c != null) {
                            c(e.status, null)
                        }
                    }
                }
            };
            e.onabort = function() {
                if (!f) {
                    f = true;
                    if (c != null) {
                        c(-1, null)
                    }
                }
            };
            e.onload = function() {
                if (!f) {
                    f = true;
                    if (b.indexOf('file://') == 0) {
                        if (e.responseText != '') {
                            if (c != null) {
                                c(200, e.responseText)
                            }
                        } else {
                            if (c != null) {
                                c(404, null)
                            }
                        }
                    } else {
                        if (c != null) {
                            c(e.status, e.responseText)
                        }
                    }
                }
                e = null
            };
            e.open('GET', d, true);
            e.send()
        } catch (a) {
            console.log("error loading file '" + d + "':" + a.message);
            if (c != null) {
                c(0, null)
            }
        }
    }

    function G(a, b) {
        if (!l.ignoreVersion) {
            return a + (a.indexOf('?') > -1 ? '&' : '?') + 'v=' + b
        } else {
            return a
        }
    }

    function H(a) {
        if (a.indexOf('file://') == 0 || (a.indexOf('http://') == 0 || a.indexOf('https://') == 0)) {
            return a
        } else {
            if (a[0] == '/') {
                a = a.substring(1)
            }
            var b = l.findBaseUrl();
            a = b + a;
            return a
        }
    }

    function I(a) {
        var b;
        for (var c = 0; c < l.requestedFiles.length; c++) {
            b = l.requestedFiles[c];
            if (b != null && b.name == a) {
                return b
            }
        }
        return null
    }

    function J(a) {
        var b;
        for (var c = 0; c < l.requestedStyles.length; c++) {
            b = l.requestedStyles[c];
            if (b != null && b.name == a) {
                return b
            }
        }
        return null
    }
    if (k == null) {
        k = false
    }
    if (l.initialVersion == null) {
        r()
    }
    if (!l.versionRequested) {
        s()
    }
    if (i == 'VERSION') {
        s(true, j)
    } else {
        i = H(i);
        if (k) {
            var K = J(i);
            if (K != null) {
                if (K.status == q) {
                    K.statusCallbacks.push(j)
                } else if (K.status == m) {
                    if (j != null) {
                        j(m)
                    }
                    K.statusCallbacks.push(j)
                } else {
                    if (j != null) {
                        j(m)
                    }
                    if (K.status == n) {
                        if (j != null) {
                            j(n)
                        }
                    } else if (K.status == o) {
                        if (j != null) {
                            j(o)
                        }
                    }
                }
            } else {
                K = {
                    retry: 0,
                    name: i,
                    status: q,
                    statusCallbacks: [j]
                };
                l.requestedStyles.push(K);
                u(K)
            }
        } else {
            var L = I(i);
            if (L != null) {
                if (L.ready) {
                    if (j != null) {
                        try {
                            j(L.code, L.data)
                        } catch (a) {}
                    }
                } else {
                    if (j != null) {
                        L.readyCallbacks.push(j)
                    }
                }
            } else {
                L = {
                    retry: 0,
                    data: null,
                    code: null,
                    sent: false,
                    ready: false,
                    dropped: false,
                    name: i,
                    readyCallbacks: [j]
                };
                l.requestedFiles.push(L);
                t(L)
            }
        }
    }
};
umstelJS.loadPreloadFiles = function() {
    var b = this;
    if (b.preloadFiles != null && Array.isArray(b.preloadFiles)) {
        b.preloadFiles.forEach(function(a) {
            b.loadFile(a, null, false, false)
        })
    }
    if (b.preloadStyles != null && Array.isArray(b.preloadStyles)) {
        b.preloadStyles.forEach(function(a) {
            b.loadFile(a, null, true, false)
        })
    }
};
umstelJS.loadPluginDefinitions = function() {
    var c = this;
    if (c.pluginGuids != null && Array.isArray(c.pluginGuids)) {
        c.pluginGuids.forEach(function(a) {
            var b = c.pluginPaths[a];
            if (b != null) {
                b = b.trim();
                c.loadFile(b + a + '.json', null, false, true)
            } else {
                c.loadFile('../plugins/' + a + '/' + a + '.json', null, false, false)
            }
        })
    }
};
umstelJS.load = function(k, l, m, n) {
    var o = this;

    function p(b, c, d, e) {
        var f = b.contentWindow;
        var g = false;
        try {
            f.gwtOnLoad(null, c, d);
            g = true
        } catch (a) {
            if (e != null) {
                e(a)
            }
        }
        if (g) {
            if (e != null) {
                e()
            }
        }
    }

    function q(a, b, c, d, e, f) {
        var g = window;
        var h = function() {
            g.removeEventListener('DOMContentLoaded', h);
            r(a, b, c, d, e, f);
            h = null
        };
        g.addEventListener('DOMContentLoaded', h)
    }

    function r(d, e, f, g, h, i) {
        if (o.document.body == null) {
            q(d, e, f, g, h, i)
        } else {
            var j = o.document.createElement('iframe');
            j.id = d;
            j.style.cssText = 'position:absolute;width:0;height:0;border:none';
            h = '//@ sourceURL=' + g + '\n' + h;
            j.onload = function() {
                var a = j.contentWindow;
                var b = a.document;
                var c = b.createElement('script');
                c.type = 'text/javascript';
                c.text = h;
                if (e) {
                    a.__umstelJS = o
                }
                b.body.appendChild(c);
                a.navigator = o.navigator;
                p(j, d, f, i);
                j.onload = null;
                j.onerror = null;
                j = null
            };
            o.document.body.appendChild(j)
        }
    }
    var s = 'gecko1_8.js';
    if (o.isMSIE() && o.getMSIEVersion() == 11) {
        s = 'ie11.js'
    } else if (o.isMSIE()) {
        s = 'ie10.js'
    } else if (o.isChrome() || (o.isSafari() || (o.isSafariMobile() || o.isWebkit()))) {
        s = 'safari.js'
    }
    s = l + s;
    if (n == null) {
        n = false
    }
    o.loadFile(s, function(a, b) {
        if (a == 200) {
            r(k, n, l, s, b, m)
        } else if (a == -1) {
            m({
                name: 'Canceled'
            })
        } else {
            m({
                name: 'DownloadError',
                message: 'Failed to download module: http code ' + a
            })
        }
    })
};
umstelJS.loadPreloadPlugins = function() {
    var c = this;
    var d = 'gecko1_8.js';
    if (umstelJS.isMSIE() && umstelJS.getMSIEVersion() == 11) {
        d = 'ie11.js'
    } else if (umstelJS.isMSIE()) {
        d = 'ie10.js'
    } else if (umstelJS.isChrome() || (umstelJS.isSafari() || (umstelJS.isSafariMobile() || umstelJS.isWebkit()))) {
        d = 'safari.js'
    }
    if (this.preloadPlugins != null && Array.isArray(this.preloadPlugins)) {
        this.preloadPlugins.forEach(function(a) {
            var b = c.pluginPaths[a];
            if (b != null) {
                b = b.trim();
                c.loadFile(b + d)
            } else {
                c.loadFile('../plugins/' + a + '/' + d)
            }
        })
    }
};
umstelJS.preloadStyles.push('UmstelClient.css');
if (umstelJS.checkForCapability()) {
    function M() {
        var b = umstelJS;
        b.load('UmstelClient', umstelJS.findBaseUrl(), function(a) {
            if (a != null) {
                b.showVersionError(a.message)
            }
        }, true);
        b.initAPI();
        b.loadPreloadFiles();
        b.loadPluginDefinitions();
        b.loadPreloadPlugins()
    }
    M()
}
umstelJS = null;
