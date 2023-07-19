webpackJsonp([0], [function(t, e, n) {
    (function(t) {
        function e(t) {
            return /^(GET|HEAD|OPTIONS|TRACE)$/.test(t)
        }
        var s = n(5),
            a = n(6),
            o = (n(8), n(9)),
            r = n(10);
        n(11),
        n(12),
        n(13);
        var c = n(16);
        n(17),
        n(19),
        n(20),
        n(21);
        var i = n(22),
            l = n(23),
            p = n(24),
            u = n(83),
            d = n(85),
            h = n(87),
            f = n(91);
        o(),
        window.app.isRetina = !1,
        l.initialize(),
        window.console || (window.console = {}),
        window.console.log || (window.console.log = function() {}),
        app.settings.isDesktop || (t.Velocity.defaults.duration = 0),
        t(function() {
            app.settings.isDesktop || c.attach(document.body)
        }),
        app.cache = {},
        window.app.vent = a.extend({}, s.Events),
        window.app.utils = i,
        window.app.state = {
            view: null,
            prevView: null,
            subView: null,
            popupOpened: !1
        },
        window.app.els = {
            $window: t(window),
            $html: t("html"),
            $body: t("body"),
            $htmlBody: t("html,body"),
            $content: t(".Content")
        },
        app.els.$body.on("click", ".u-Route", function(e) {
            if (!app.els.$body.hasClass("Custom404Page")) {
                var n = (s.history.getFragment(), t(e.currentTarget).attr("href") || t(e.target).closest("a").attr("href"));
                window.app.fastNavigate = t(e.currentTarget).hasClass("fast-navigate"),
                window.app.zoomNavigate = t(e.currentTarget).hasClass("zoom-navigate"),
                app.settings.isMobile && (window.app.zoomNavigate = !1),
                e.preventDefault(),
                s.history.navigate(n, {
                    trigger: "true"
                })
            }
        }),
        app.views = {
            footer: new d,
            topNav: new h,
            topNavPopup: new f
        },
        t.ajaxSetup({
            beforeSend: function(t, n) {
                if (!e(n.type) && !this.crossDomain) {
                    var s = r.get("csrftoken");
                    t.setRequestHeader("X-CSRFToken", s)
                }
            }
        }),
        new u,
        app.router = new p,
        app.router.start()
    }).call(e, n(4))
  }, , , , , , , , , function(t, e) {
    /*! npm.im/object-fit-images */
    "use strict";
    function n(t) {
        for (var e, n = getComputedStyle(t).fontFamily, s = {}; null !== (e = i.exec(n));)
            s[e[1]] = e[2];
        return s
    }
    function s(t, e) {
        if (!t[c].parsingSrcset) {
            var s = n(t);
            if (s["object-fit"] = s["object-fit"] || "fill", !t[c].s) {
                if ("fill" === s["object-fit"])
                    return;
                if (!t[c].skipTest && p && !s["object-position"])
                    return
            }
            var o = t[c].ios7src || t.currentSrc || t.src;
            if (e)
                o = e;
            else if (t.srcset && !d && window.picturefill) {
                var r = window.picturefill._;
                t[c].parsingSrcset = !0,
                t[r.ns] && t[r.ns].evaled || r.fillImg(t, {
                    reselect: !0
                }),
                t[r.ns].curSrc || (t[r.ns].supported = !1, r.fillImg(t, {
                    reselect: !0
                })),
                delete t[c].parsingSrcset,
                o = t[r.ns].curSrc || o
            }
            if (t[c].s)
                t[c].s = o,
                e && (t[c].srcAttr = e);
            else {
                t[c] = {
                    s: o,
                    srcAttr: e || h.call(t, "src"),
                    srcsetAttr: t.srcset
                },
                t.src = c;
                try {
                    t.srcset && (t.srcset = "", Object.defineProperty(t, "srcset", {
                        value: t[c].srcsetAttr
                    })),
                    a(t)
                } catch (e) {
                    t[c].ios7src = o
                }
            }
            t.style.backgroundImage = 'url("' + o + '")',
            t.style.backgroundPosition = s["object-position"] || "center",
            t.style.backgroundRepeat = "no-repeat",
            /scale-down/.test(s["object-fit"]) ? (t[c].i || (t[c].i = new Image, t[c].i.src = o), function e() {
                return t[c].i.naturalWidth ? void (t[c].i.naturalWidth > t.width || t[c].i.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto") : void setTimeout(e, 100)
            }()) : t.style.backgroundSize = s["object-fit"].replace("none", "auto").replace("fill", "100% 100%")
        }
    }
    function a(t) {
        var e = {
            get: function() {
                return t[c].s
            },
            set: function(e) {
                return delete t[c].i, s(t, e), e
            }
        };
        Object.defineProperty(t, "src", e),
        Object.defineProperty(t, "currentSrc", {
            get: e.get
        })
    }
    function o() {
        u || (HTMLImageElement.prototype.getAttribute = function(t) {
            return !this[c] || "src" !== t && "srcset" !== t ? h.call(this, t) : this[c][t + "Attr"]
        }, HTMLImageElement.prototype.setAttribute = function(t, e) {
            !this[c] || "src" !== t && "srcset" !== t ? f.call(this, t, e) : this["src" === t ? "src" : t + "Attr"] = String(e)
        })
    }
    function r(t, e) {
        var n = !v && !t;
        if (e = e || {}, t = t || "img", u && !e.skipTest)
            return !1;
        "string" == typeof t ? t = document.querySelectorAll("img") : "length" in t || (t = [t]);
        for (var a = 0; a < t.length; a++)
            t[a][c] = t[a][c] || e,
            s(t[a]);
        n && (document.body.addEventListener("load", function(t) {
            "IMG" === t.target.tagName && r(t.target, {
                skipTest: e.skipTest
            })
        }, !0), v = !0, t = "img"),
        e.watchMQ && window.addEventListener("resize", r.bind(null, t, {
            skipTest: e.skipTest
        }))
    }
    var c = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        i = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
        l = new Image,
        p = "object-fit" in l.style,
        u = "object-position" in l.style,
        d = "string" == typeof l.currentSrc,
        h = l.getAttribute,
        f = l.setAttribute,
        v = !1;
    r.supportsObjectFit = p,
    r.supportsObjectPosition = u,
    o(),
    t.exports = r
  }, function(t, e, n) {
    var s,
        a;
    !function(o) {
        var r = !1;
        if (s = o, a = "function" == typeof s ? s.call(e, n, e, t) : s, !(void 0 !== a && (t.exports = a)), r = !0, t.exports = o(), r = !0, !r) {
            var c = window.Cookies,
                i = window.Cookies = o();
            i.noConflict = function() {
                return window.Cookies = c, i
            }
        }
    }(function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var n = arguments[t];
                for (var s in n)
                    e[s] = n[s]
            }
            return e
        }
        function e(n) {
            function s(e, a, o) {
                var r;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (o = t({
                            path: "/"
                        }, s.defaults, o), "number" == typeof o.expires) {
                            var c = new Date;
                            c.setMilliseconds(c.getMilliseconds() + 864e5 * o.expires),
                            o.expires = c
                        }
                        o.expires = o.expires ? o.expires.toUTCString() : "";
                        try {
                            r = JSON.stringify(a),
                            /^[\{\[]/.test(r) && (a = r)
                        } catch (t) {}
                        a = n.write ? n.write(a, e) : encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        e = encodeURIComponent(String(e)),
                        e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                        e = e.replace(/[\(\)]/g, escape);
                        var i = "";
                        for (var l in o)
                            o[l] && (i += "; " + l, o[l] !== !0 && (i += "=" + o[l]));
                        return document.cookie = e + "=" + a + i
                    }
                    e || (r = {});
                    for (var p = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < p.length; d++) {
                        var h = p[d].split("="),
                            f = h.slice(1).join("=");
                        this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                        try {
                            var v = h[0].replace(u, decodeURIComponent);
                            if (f = n.read ? n.read(f, v) : n(f, v) || f.replace(u, decodeURIComponent), this.json)
                                try {
                                    f = JSON.parse(f)
                                } catch (t) {}
                            if (e === v) {
                                r = f;
                                break
                            }
                            e || (r[v] = f)
                        } catch (t) {}
                    }
                    return r
                }
            }
            return s.set = s, s.get = function(t) {
                return s.call(s, t)
            }, s.getJSON = function() {
                return s.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, s.defaults = {}, s.remove = function(e, n) {
                s(e, "", t(n, {
                    expires: -1
                }))
            }, s.withConverter = e, s
        }
        return e(function() {})
    })
  }, function(t, e, n) {
    var s,
        a; /*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
    /*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
    !function(t) {
        "use strict";
        function e(t) {
            var e = t.length,
                s = n.type(t);
            return "function" !== s && !n.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === s || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        if (!t.jQuery) {
            var n = function(t, e) {
                return new n.fn.init(t, e)
            };
            n.isWindow = function(t) {
                return t && t === t.window
            },
            n.type = function(t) {
                return t ? "object" == typeof t || "function" == typeof t ? a[r.call(t)] || "object" : typeof t : t + ""
            },
            n.isArray = Array.isArray || function(t) {
                return "array" === n.type(t)
            },
            n.isPlainObject = function(t) {
                var e;
                if (!t || "object" !== n.type(t) || t.nodeType || n.isWindow(t))
                    return !1;
                try {
                    if (t.constructor && !o.call(t, "constructor") && !o.call(t.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (t) {
                    return !1
                }
                for (e in t)
                    ;
                return void 0 === e || o.call(t, e)
            },
            n.each = function(t, n, s) {
                var a = 0,
                    o = t.length,
                    r = e(t);
                if (s) {
                    if (r)
                        for (; a < o && !1 !== n.apply(t[a], s); a++)
                            ;
                    else
                        for (a in t)
                            if (t.hasOwnProperty(a) && !1 === n.apply(t[a], s))
                                break
                } else if (r)
                    for (; a < o && !1 !== n.call(t[a], a, t[a]); a++)
                        ;
                else
                    for (a in t)
                        if (t.hasOwnProperty(a) && !1 === n.call(t[a], a, t[a]))
                            break;
                return t
            },
            n.data = function(t, e, a) {
                if (void 0 === a) {
                    var o = t[n.expando],
                        r = o && s[o];
                    if (void 0 === e)
                        return r;
                    if (r && e in r)
                        return r[e]
                } else if (void 0 !== e) {
                    var c = t[n.expando] || (t[n.expando] = ++n.uuid);
                    return s[c] = s[c] || {}, s[c][e] = a, a
                }
            },
            n.removeData = function(t, e) {
                var a = t[n.expando],
                    o = a && s[a];
                o && (e ? n.each(e, function(t, e) {
                    delete o[e]
                }) : delete s[a])
            },
            n.extend = function() {
                var t,
                    e,
                    s,
                    a,
                    o,
                    r,
                    c = arguments[0] || {},
                    i = 1,
                    l = arguments.length,
                    p = !1;
                for ("boolean" == typeof c && (p = c, c = arguments[i] || {}, i++), "object" != typeof c && "function" !== n.type(c) && (c = {}), i === l && (c = this, i--); i < l; i++)
                    if (o = arguments[i])
                        for (a in o)
                            o.hasOwnProperty(a) && (t = c[a], s = o[a], c !== s && (p && s && (n.isPlainObject(s) || (e = n.isArray(s))) ? (e ? (e = !1, r = t && n.isArray(t) ? t : []) : r = t && n.isPlainObject(t) ? t : {}, c[a] = n.extend(p, r, s)) : void 0 !== s && (c[a] = s)));
                return c
            },
            n.queue = function(t, s, a) {
                if (t) {
                    s = (s || "fx") + "queue";
                    var o = n.data(t, s);
                    return a ? (!o || n.isArray(a) ? o = n.data(t, s, function(t, n) {
                        var s = n || [];
                        return t && (e(Object(t)) ? function(t, e) {
                            for (var n = +e.length, s = 0, a = t.length; s < n;)
                                t[a++] = e[s++];
                            if (n !== n)
                                for (; void 0 !== e[s];)
                                    t[a++] = e[s++];
                            t.length = a
                        }(s, "string" == typeof t ? [t] : t) : [].push.call(s, t)), s
                    }(a)) : o.push(a), o) : o || []
                }
            },
            n.dequeue = function(t, e) {
                n.each(t.nodeType ? [t] : t, function(t, s) {
                    e = e || "fx";
                    var a = n.queue(s, e),
                        o = a.shift();
                    "inprogress" === o && (o = a.shift()),
                    o && ("fx" === e && a.unshift("inprogress"), o.call(s, function() {
                        n.dequeue(s, e)
                    }))
                })
            },
            n.fn = n.prototype = {
                init: function(t) {
                    if (t.nodeType)
                        return this[0] = t, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    var t = this[0],
                        e = function(t) {
                            for (var e = t.offsetParent; e && "html" !== e.nodeName.toLowerCase() && e.style && "static" === e.style.position.toLowerCase();)
                                e = e.offsetParent;
                            return e || document
                        }(t),
                        s = this.offset(),
                        a = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(e).offset();
                    return s.top -= parseFloat(t.style.marginTop) || 0, s.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: s.top - a.top,
                        left: s.left - a.left
                    }
                }
            };
            var s = {};
            n.expando = "velocity" + (new Date).getTime(),
            n.uuid = 0;
            for (var a = {}, o = a.hasOwnProperty, r = a.toString, c = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < c.length; i++)
                a["[object " + c[i] + "]"] = c[i].toLowerCase();
            n.fn.init.prototype = n.fn,
            t.Velocity = {
                Utilities: n
            }
        }
    }(window),
    function(o) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = o() : (s = o, a = "function" == typeof s ? s.call(e, n, e, t) : s, !(void 0 !== a && (t.exports = a)))
    }(function() {
        "use strict";
        return function(t, e, n, s) {
            function a(t) {
                for (var e = -1, n = t ? t.length : 0, s = []; ++e < n;) {
                    var a = t[e];
                    a && s.push(a)
                }
                return s
            }
            function o(t) {
                return b.isWrapped(t) ? t = w.call(t) : b.isNode(t) && (t = [t]), t
            }
            function r(t) {
                var e = f.data(t, "velocity");
                return null === e ? s : e
            }
            function c(t, e) {
                var n = r(t);
                n && n.delayTimer && !n.delayPaused && (n.delayRemaining = n.delay - e + n.delayBegin, n.delayPaused = !0, clearTimeout(n.delayTimer.setTimeout))
            }
            function i(t, e) {
                var n = r(t);
                n && n.delayTimer && n.delayPaused && (n.delayPaused = !1, n.delayTimer.setTimeout = setTimeout(n.delayTimer.next, n.delayRemaining))
            }
            function l(t) {
                return function(e) {
                    return Math.round(e * t) * (1 / t)
                }
            }
            function p(t, n, s, a) {
                function o(t, e) {
                    return 1 - 3 * e + 3 * t
                }
                function r(t, e) {
                    return 3 * e - 6 * t
                }
                function c(t) {
                    return 3 * t
                }
                function i(t, e, n) {
                    return ((o(e, n) * t + r(e, n)) * t + c(e)) * t
                }
                function l(t, e, n) {
                    return 3 * o(e, n) * t * t + 2 * r(e, n) * t + c(e)
                }
                function p(e, n) {
                    for (var a = 0; a < v; ++a) {
                        var o = l(n, t, s);
                        if (0 === o)
                            return n;
                        n -= (i(n, t, s) - e) / o
                    }
                    return n
                }
                function u() {
                    for (var e = 0; e < y; ++e)
                        x[e] = i(e * b, t, s)
                }
                function d(e, n, a) {
                    var o,
                        r,
                        c = 0;
                    do r = n + (a - n) / 2,
                    o = i(r, t, s) - e,
                    o > 0 ? a = r : n = r;
                    while (Math.abs(o) > g && ++c < w);
                    return r
                }
                function h(e) {
                    for (var n = 0, a = 1, o = y - 1; a !== o && x[a] <= e; ++a)
                        n += b;
                    --a;
                    var r = (e - x[a]) / (x[a + 1] - x[a]),
                        c = n + r * b,
                        i = l(c, t, s);
                    return i >= m ? p(e, c) : 0 === i ? c : d(e, n, n + b)
                }
                function f() {
                    P = !0,
                    t === n && s === a || u()
                }
                var v = 4,
                    m = .001,
                    g = 1e-7,
                    w = 10,
                    y = 11,
                    b = 1 / (y - 1),
                    k = "Float32Array" in e;
                if (4 !== arguments.length)
                    return !1;
                for (var M = 0; M < 4; ++M)
                    if ("number" != typeof arguments[M] || isNaN(arguments[M]) || !isFinite(arguments[M]))
                        return !1;
                t = Math.min(t, 1),
                s = Math.min(s, 1),
                t = Math.max(t, 0),
                s = Math.max(s, 0);
                var x = k ? new Float32Array(y) : new Array(y),
                    P = !1,
                    j = function(e) {
                        return P || f(), t === n && s === a ? e : 0 === e ? 0 : 1 === e ? 1 : i(h(e), n, a)
                    };
                j.getControlPoints = function() {
                    return [{
                        x: t,
                        y: n
                    }, {
                        x: s,
                        y: a
                    }]
                };
                var S = "generateBezier(" + [t, n, s, a] + ")";
                return j.toString = function() {
                    return S
                }, j
            }
            function u(t, e) {
                var n = t;
                return b.isString(t) ? P.Easings[t] || (n = !1) : n = b.isArray(t) && 1 === t.length ? l.apply(null, t) : b.isArray(t) && 2 === t.length ? j.apply(null, t.concat([e])) : !(!b.isArray(t) || 4 !== t.length) && p.apply(null, t), !1 === n && (n = P.Easings[P.defaults.easing] ? P.defaults.easing : x), n
            }
            function d(t) {
                if (t) {
                    var e = P.timestamp && !0 !== t ? t : g.now(),
                        n = P.State.calls.length;
                    n > 1e4 && (P.State.calls = a(P.State.calls), n = P.State.calls.length);
                    for (var o = 0; o < n; o++)
                        if (P.State.calls[o]) {
                            var c = P.State.calls[o],
                                i = c[0],
                                l = c[2],
                                p = c[3],
                                u = !p,
                                m = null,
                                w = c[5],
                                y = c[6];
                            if (p || (p = P.State.calls[o][3] = e - 16), w) {
                                if (!0 !== w.resume)
                                    continue;
                                p = c[3] = Math.round(e - y - 16),
                                c[5] = null
                            }
                            y = c[6] = e - p;
                            for (var k = Math.min(y / l.duration, 1), M = 0, x = i.length; M < x; M++) {
                                var j = i[M],
                                    I = j.element;
                                if (r(I)) {
                                    var T = !1;
                                    if (l.display !== s && null !== l.display && "none" !== l.display) {
                                        if ("flex" === l.display) {
                                            var C = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            f.each(C, function(t, e) {
                                                S.setPropertyValue(I, "display", e)
                                            })
                                        }
                                        S.setPropertyValue(I, "display", l.display)
                                    }
                                    l.visibility !== s && "hidden" !== l.visibility && S.setPropertyValue(I, "visibility", l.visibility);
                                    for (var E in j)
                                        if (j.hasOwnProperty(E) && "element" !== E) {
                                            var O,
                                                N = j[E],
                                                V = b.isString(N.easing) ? P.Easings[N.easing] : N.easing;
                                            if (b.isString(N.pattern)) {
                                                var F = 1 === k ? function(t, e, n) {
                                                    var s = N.endValue[e];
                                                    return n ? Math.round(s) : s
                                                } : function(t, e, n) {
                                                    var s = N.startValue[e],
                                                        a = N.endValue[e] - s,
                                                        o = s + a * V(k, l, a);
                                                    return n ? Math.round(o) : o
                                                };
                                                O = N.pattern.replace(/{(\d+)(!)?}/g, F)
                                            } else if (1 === k)
                                                O = N.endValue;
                                            else {
                                                var $ = N.endValue - N.startValue;
                                                O = N.startValue + $ * V(k, l, $)
                                            }
                                            if (!u && O === N.currentValue)
                                                continue;
                                            if (N.currentValue = O, "tween" === E)
                                                m = O;
                                            else {
                                                var A;
                                                if (S.Hooks.registered[E]) {
                                                    A = S.Hooks.getRoot(E);
                                                    var D = r(I).rootPropertyValueCache[A];
                                                    D && (N.rootPropertyValue = D)
                                                }
                                                var H = S.setPropertyValue(I, E, N.currentValue + (v < 9 && 0 === parseFloat(O) ? "" : N.unitType), N.rootPropertyValue, N.scrollData);
                                                S.Hooks.registered[E] && (S.Normalizations.registered[A] ? r(I).rootPropertyValueCache[A] = S.Normalizations.registered[A]("extract", null, H[1]) : r(I).rootPropertyValueCache[A] = H[1]),
                                                "transform" === H[0] && (T = !0)
                                            }
                                        }
                                    l.mobileHA && r(I).transformCache.translate3d === s && (r(I).transformCache.translate3d = "(0px, 0px, 0px)", T = !0),
                                    T && S.flushTransformCache(I)
                                }
                            }
                            l.display !== s && "none" !== l.display && (P.State.calls[o][2].display = !1),
                            l.visibility !== s && "hidden" !== l.visibility && (P.State.calls[o][2].visibility = !1),
                            l.progress && l.progress.call(c[1], c[1], k, Math.max(0, p + l.duration - e), p, m),
                            1 === k && h(o)
                        }
                }
                P.State.isTicking && L(d)
            }
            function h(t, e) {
                if (!P.State.calls[t])
                    return !1;
                for (var n = P.State.calls[t][0], a = P.State.calls[t][1], o = P.State.calls[t][2], c = P.State.calls[t][4], i = !1, l = 0, p = n.length; l < p; l++) {
                    var u = n[l].element;
                    e || o.loop || ("none" === o.display && S.setPropertyValue(u, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(u, "visibility", o.visibility));
                    var d = r(u);
                    if (!0 !== o.loop && (f.queue(u)[1] === s || !/\.velocityQueueEntryFlag/i.test(f.queue(u)[1])) && d) {
                        d.isAnimating = !1,
                        d.rootPropertyValueCache = {};
                        var h = !1;
                        f.each(S.Lists.transforms3D, function(t, e) {
                            var n = /^scale/.test(e) ? 1 : 0,
                                a = d.transformCache[e];
                            d.transformCache[e] !== s && new RegExp("^\\(" + n + "[^.]").test(a) && (h = !0, delete d.transformCache[e])
                        }),
                        o.mobileHA && (h = !0, delete d.transformCache.translate3d),
                        h && S.flushTransformCache(u),
                        S.Values.removeClass(u, "velocity-animating")
                    }
                    if (!e && o.complete && !o.loop && l === p - 1)
                        try {
                            o.complete.call(a, a)
                        } catch (t) {
                            setTimeout(function() {
                                throw t
                            }, 1)
                        }
                    c && !0 !== o.loop && c(a),
                    d && !0 === o.loop && !e && (f.each(d.tweensContainer, function(t, e) {
                        if (/^rotate/.test(t) && (parseFloat(e.startValue) - parseFloat(e.endValue)) % 360 == 0) {
                            var n = e.startValue;
                            e.startValue = e.endValue,
                            e.endValue = n
                        }
                        /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                    }), P(u, "reverse", {
                        loop: !0,
                        delay: o.delay
                    })),
                    !1 !== o.queue && f.dequeue(u, o.queue)
                }
                P.State.calls[t] = !1;
                for (var v = 0, m = P.State.calls.length; v < m; v++)
                    if (!1 !== P.State.calls[v]) {
                        i = !0;
                        break
                    }
                !1 === i && (P.State.isTicking = !1, delete P.State.calls, P.State.calls = [])
            }
            var f,
                v = function() {
                    if (n.documentMode)
                        return n.documentMode;
                    for (var t = 7; t > 4; t--) {
                        var e = n.createElement("div");
                        if (e.innerHTML = "<!--[if IE " + t + "]><span></span><![endif]-->", e.getElementsByTagName("span").length)
                            return e = null, t
                    }
                    return s
                }(),
                m = function() {
                    var t = 0;
                    return e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(e) {
                            var n,
                                s = (new Date).getTime();
                            return n = Math.max(0, 16 - (s - t)), t = s + n, setTimeout(function() {
                                e(s + n)
                            }, n)
                        }
                }(),
                g = function() {
                    var t = e.performance || {};
                    if ("function" != typeof t.now) {
                        var n = t.timing && t.timing.navigationStart ? t.timing.navigationStart : (new Date).getTime();
                        t.now = function() {
                            return (new Date).getTime() - n
                        }
                    }
                    return t
                }(),
                w = function() {
                    var t = Array.prototype.slice;
                    try {
                        return t.call(n.documentElement), t
                    } catch (e) {
                        return function(e, n) {
                            var s = this.length;
                            if ("number" != typeof e && (e = 0), "number" != typeof n && (n = s), this.slice)
                                return t.call(this, e, n);
                            var a,
                                o = [],
                                r = e >= 0 ? e : Math.max(0, s + e),
                                c = n < 0 ? s + n : Math.min(n, s),
                                i = c - r;
                            if (i > 0)
                                if (o = new Array(i), this.charAt)
                                    for (a = 0; a < i; a++)
                                        o[a] = this.charAt(r + a);
                                else
                                    for (a = 0; a < i; a++)
                                        o[a] = this[r + a];
                            return o
                        }
                    }
                }(),
                y = function() {
                    return Array.prototype.includes ? function(t, e) {
                        return t.includes(e)
                    } : Array.prototype.indexOf ? function(t, e) {
                        return t.indexOf(e) >= 0
                    } : function(t, e) {
                        for (var n = 0; n < t.length; n++)
                            if (t[n] === e)
                                return !0;
                        return !1
                    }
                },
                b = {
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    },
                    isFunction: function(t) {
                        return "[object Function]" === Object.prototype.toString.call(t)
                    },
                    isNode: function(t) {
                        return t && t.nodeType
                    },
                    isWrapped: function(t) {
                        return t && t !== e && b.isNumber(t.length) && !b.isString(t) && !b.isFunction(t) && !b.isNode(t) && (0 === t.length || b.isNode(t[0]))
                    },
                    isSVG: function(t) {
                        return e.SVGElement && t instanceof e.SVGElement
                    },
                    isEmptyObject: function(t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e))
                                return !1;
                        return !0
                    }
                },
                k = !1;
            if (t.fn && t.fn.jquery ? (f = t, k = !0) : f = e.Velocity.Utilities, v <= 8 && !k)
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (v <= 7)
                return void (jQuery.fn.velocity = jQuery.fn.animate);
            var M = 400,
                x = "swing",
                P = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e.navigator.userAgent),
                        isAndroid: /Android/i.test(e.navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(e.navigator.userAgent),
                        isChrome: e.chrome,
                        isFirefox: /Firefox/i.test(e.navigator.userAgent),
                        prefixElement: n.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: [],
                        delayedElements: {
                            count: 0
                        }
                    },
                    CSS: {},
                    Utilities: f,
                    Redirects: {},
                    Easings: {},
                    Promise: e.Promise,
                    defaults: {
                        queue: "",
                        duration: M,
                        easing: x,
                        begin: s,
                        complete: s,
                        progress: s,
                        display: s,
                        visibility: s,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0,
                        promiseRejectEmpty: !0
                    },
                    init: function(t) {
                        f.data(t, "velocity", {
                            isSVG: b.isSVG(t),
                            isAnimating: !1,
                            computedStyle: null,
                            tweensContainer: null,
                            rootPropertyValueCache: {},
                            transformCache: {}
                        })
                    },
                    hook: null,
                    mock: !1,
                    version: {
                        major: 1,
                        minor: 5,
                        patch: 2
                    },
                    debug: !1,
                    timestamp: !0,
                    pauseAll: function(t) {
                        var e = (new Date).getTime();
                        f.each(P.State.calls, function(e, n) {
                            if (n) {
                                if (t !== s && (n[2].queue !== t || !1 === n[2].queue))
                                    return !0;
                                n[5] = {
                                    resume: !1
                                }
                            }
                        }),
                        f.each(P.State.delayedElements, function(t, n) {
                            n && c(n, e)
                        })
                    },
                    resumeAll: function(t) {
                        var e = (new Date).getTime();
                        f.each(P.State.calls, function(e, n) {
                            if (n) {
                                if (t !== s && (n[2].queue !== t || !1 === n[2].queue))
                                    return !0;
                                n[5] && (n[5].resume = !0)
                            }
                        }),
                        f.each(P.State.delayedElements, function(t, n) {
                            n && i(n, e)
                        })
                    }
                };
            e.pageYOffset !== s ? (P.State.scrollAnchor = e, P.State.scrollPropertyLeft = "pageXOffset", P.State.scrollPropertyTop = "pageYOffset") : (P.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, P.State.scrollPropertyLeft = "scrollLeft", P.State.scrollPropertyTop = "scrollTop");
            var j = function() {
                function t(t) {
                    return -t.tension * t.x - t.friction * t.v
                }
                function e(e, n, s) {
                    var a = {
                        x: e.x + s.dx * n,
                        v: e.v + s.dv * n,
                        tension: e.tension,
                        friction: e.friction
                    };
                    return {
                        dx: a.v,
                        dv: t(a)
                    }
                }
                function n(n, s) {
                    var a = {
                            dx: n.v,
                            dv: t(n)
                        },
                        o = e(n, .5 * s, a),
                        r = e(n, .5 * s, o),
                        c = e(n, s, r),
                        i = 1 / 6 * (a.dx + 2 * (o.dx + r.dx) + c.dx),
                        l = 1 / 6 * (a.dv + 2 * (o.dv + r.dv) + c.dv);
                    return n.x = n.x + i * s, n.v = n.v + l * s, n
                }
                return function t(e, s, a) {
                    var o,
                        r,
                        c,
                        i = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        l = [0],
                        p = 0;
                    for (e = parseFloat(e) || 500, s = parseFloat(s) || 20, a = a || null, i.tension = e, i.friction = s, o = null !== a, o ? (p = t(e, s), r = p / a * .016) : r = .016; c = n(c || i, r), l.push(1 + c.x), p += 16, Math.abs(c.x) > 1e-4 && Math.abs(c.v) > 1e-4;)
                        ;
                    return o ? function(t) {
                        return l[t * (l.length - 1) | 0]
                    } : p
                }
            }();
            P.Easings = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                spring: function(t) {
                    return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                }
            },
            f.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(t, e) {
                P.Easings[e[0]] = p.apply(null, e[1])
            });
            var S = P.CSS = {
                RegEx: {
                    isHex: /^#([A-f\d]{3}){1,2}$/i,
                    valueUnwrap: /^[A-z]+\((.*)\)$/i,
                    wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                    valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                },
                Lists: {
                    colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                    transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                    transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
                    units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
                    colorNames: {
                        aliceblue: "240,248,255",
                        antiquewhite: "250,235,215",
                        aquamarine: "127,255,212",
                        aqua: "0,255,255",
                        azure: "240,255,255",
                        beige: "245,245,220",
                        bisque: "255,228,196",
                        black: "0,0,0",
                        blanchedalmond: "255,235,205",
                        blueviolet: "138,43,226",
                        blue: "0,0,255",
                        brown: "165,42,42",
                        burlywood: "222,184,135",
                        cadetblue: "95,158,160",
                        chartreuse: "127,255,0",
                        chocolate: "210,105,30",
                        coral: "255,127,80",
                        cornflowerblue: "100,149,237",
                        cornsilk: "255,248,220",
                        crimson: "220,20,60",
                        cyan: "0,255,255",
                        darkblue: "0,0,139",
                        darkcyan: "0,139,139",
                        darkgoldenrod: "184,134,11",
                        darkgray: "169,169,169",
                        darkgrey: "169,169,169",
                        darkgreen: "0,100,0",
                        darkkhaki: "189,183,107",
                        darkmagenta: "139,0,139",
                        darkolivegreen: "85,107,47",
                        darkorange: "255,140,0",
                        darkorchid: "153,50,204",
                        darkred: "139,0,0",
                        darksalmon: "233,150,122",
                        darkseagreen: "143,188,143",
                        darkslateblue: "72,61,139",
                        darkslategray: "47,79,79",
                        darkturquoise: "0,206,209",
                        darkviolet: "148,0,211",
                        deeppink: "255,20,147",
                        deepskyblue: "0,191,255",
                        dimgray: "105,105,105",
                        dimgrey: "105,105,105",
                        dodgerblue: "30,144,255",
                        firebrick: "178,34,34",
                        floralwhite: "255,250,240",
                        forestgreen: "34,139,34",
                        fuchsia: "255,0,255",
                        gainsboro: "220,220,220",
                        ghostwhite: "248,248,255",
                        gold: "255,215,0",
                        goldenrod: "218,165,32",
                        gray: "128,128,128",
                        grey: "128,128,128",
                        greenyellow: "173,255,47",
                        green: "0,128,0",
                        honeydew: "240,255,240",
                        hotpink: "255,105,180",
                        indianred: "205,92,92",
                        indigo: "75,0,130",
                        ivory: "255,255,240",
                        khaki: "240,230,140",
                        lavenderblush: "255,240,245",
                        lavender: "230,230,250",
                        lawngreen: "124,252,0",
                        lemonchiffon: "255,250,205",
                        lightblue: "173,216,230",
                        lightcoral: "240,128,128",
                        lightcyan: "224,255,255",
                        lightgoldenrodyellow: "250,250,210",
                        lightgray: "211,211,211",
                        lightgrey: "211,211,211",
                        lightgreen: "144,238,144",
                        lightpink: "255,182,193",
                        lightsalmon: "255,160,122",
                        lightseagreen: "32,178,170",
                        lightskyblue: "135,206,250",
                        lightslategray: "119,136,153",
                        lightsteelblue: "176,196,222",
                        lightyellow: "255,255,224",
                        limegreen: "50,205,50",
                        lime: "0,255,0",
                        linen: "250,240,230",
                        magenta: "255,0,255",
                        maroon: "128,0,0",
                        mediumaquamarine: "102,205,170",
                        mediumblue: "0,0,205",
                        mediumorchid: "186,85,211",
                        mediumpurple: "147,112,219",
                        mediumseagreen: "60,179,113",
                        mediumslateblue: "123,104,238",
                        mediumspringgreen: "0,250,154",
                        mediumturquoise: "72,209,204",
                        mediumvioletred: "199,21,133",
                        midnightblue: "25,25,112",
                        mintcream: "245,255,250",
                        mistyrose: "255,228,225",
                        moccasin: "255,228,181",
                        navajowhite: "255,222,173",
                        navy: "0,0,128",
                        oldlace: "253,245,230",
                        olivedrab: "107,142,35",
                        olive: "128,128,0",
                        orangered: "255,69,0",
                        orange: "255,165,0",
                        orchid: "218,112,214",
                        palegoldenrod: "238,232,170",
                        palegreen: "152,251,152",
                        paleturquoise: "175,238,238",
                        palevioletred: "219,112,147",
                        papayawhip: "255,239,213",
                        peachpuff: "255,218,185",
                        peru: "205,133,63",
                        pink: "255,192,203",
                        plum: "221,160,221",
                        powderblue: "176,224,230",
                        purple: "128,0,128",
                        red: "255,0,0",
                        rosybrown: "188,143,143",
                        royalblue: "65,105,225",
                        saddlebrown: "139,69,19",
                        salmon: "250,128,114",
                        sandybrown: "244,164,96",
                        seagreen: "46,139,87",
                        seashell: "255,245,238",
                        sienna: "160,82,45",
                        silver: "192,192,192",
                        skyblue: "135,206,235",
                        slateblue: "106,90,205",
                        slategray: "112,128,144",
                        snow: "255,250,250",
                        springgreen: "0,255,127",
                        steelblue: "70,130,180",
                        tan: "210,180,140",
                        teal: "0,128,128",
                        thistle: "216,191,216",
                        tomato: "255,99,71",
                        turquoise: "64,224,208",
                        violet: "238,130,238",
                        wheat: "245,222,179",
                        whitesmoke: "245,245,245",
                        white: "255,255,255",
                        yellowgreen: "154,205,50",
                        yellow: "255,255,0"
                    }
                },
                Hooks: {
                    templates: {
                        textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                        boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                        clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                        backgroundPosition: ["X Y", "0% 0%"],
                        transformOrigin: ["X Y Z", "50% 50% 0px"],
                        perspectiveOrigin: ["X Y", "50% 50%"]
                    },
                    registered: {},
                    register: function() {
                        for (var t = 0; t < S.Lists.colors.length; t++) {
                            var e = "color" === S.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                            S.Hooks.templates[S.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                        }
                        var n,
                            s,
                            a;
                        if (v)
                            for (n in S.Hooks.templates)
                                if (S.Hooks.templates.hasOwnProperty(n)) {
                                    s = S.Hooks.templates[n],
                                    a = s[0].split(" ");
                                    var o = s[1].match(S.RegEx.valueSplit);
                                    "Color" === a[0] && (a.push(a.shift()), o.push(o.shift()), S.Hooks.templates[n] = [a.join(" "), o.join(" ")])
                                }
                        for (n in S.Hooks.templates)
                            if (S.Hooks.templates.hasOwnProperty(n)) {
                                s = S.Hooks.templates[n],
                                a = s[0].split(" ");
                                for (var r in a)
                                    if (a.hasOwnProperty(r)) {
                                        var c = n + a[r],
                                            i = r;
                                        S.Hooks.registered[c] = [n, i]
                                    }
                            }
                    },
                    getRoot: function(t) {
                        var e = S.Hooks.registered[t];
                        return e ? e[0] : t
                    },
                    getUnit: function(t, e) {
                        var n = (t.substr(e || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
                        return n && y(S.Lists.units, n) ? n : ""
                    },
                    fixColors: function(t) {
                        return t.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function(t, e, n) {
                            return S.Lists.colorNames.hasOwnProperty(n) ? (e || "rgba(") + S.Lists.colorNames[n] + (e ? "" : ",1)") : e + n
                        })
                    },
                    cleanRootPropertyValue: function(t, e) {
                        return S.RegEx.valueUnwrap.test(e) && (e = e.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(e) && (e = S.Hooks.templates[t][1]), e
                    },
                    extractValue: function(t, e) {
                        var n = S.Hooks.registered[t];
                        if (n) {
                            var s = n[0],
                                a = n[1];
                            return e = S.Hooks.cleanRootPropertyValue(s, e), e.toString().match(S.RegEx.valueSplit)[a]
                        }
                        return e
                    },
                    injectValue: function(t, e, n) {
                        var s = S.Hooks.registered[t];
                        if (s) {
                            var a,
                                o = s[0],
                                r = s[1];
                            return n = S.Hooks.cleanRootPropertyValue(o, n), a = n.toString().match(S.RegEx.valueSplit), a[r] = e, a.join(" ")
                        }
                        return n
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(t, e, n) {
                            switch (t) {
                            case "name":
                                return "clip";
                            case "extract":
                                var s;
                                return S.RegEx.wrappedValueAlreadyExtracted.test(n) ? s = n : (s = n.toString().match(S.RegEx.valueUnwrap), s = s ? s[1].replace(/,(\s+)?/g, " ") : n), s;
                            case "inject":
                                return "rect(" + n + ")"
                            }
                        },
                        blur: function(t, e, n) {
                            switch (t) {
                            case "name":
                                return P.State.isFirefox ? "filter" : "-webkit-filter";
                            case "extract":
                                var s = parseFloat(n);
                                if (!s && 0 !== s) {
                                    var a = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    s = a ? a[1] : 0
                                }
                                return s;
                            case "inject":
                                return parseFloat(n) ? "blur(" + n + ")" : "none"
                            }
                        },
                        opacity: function(t, e, n) {
                            if (v <= 8)
                                switch (t) {
                                case "name":
                                    return "filter";
                                case "extract":
                                    var s = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                    return n = s ? s[1] / 100 : 1;
                                case "inject":
                                    return e.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                }
                            else
                                switch (t) {
                                case "name":
                                    return "opacity";
                                case "extract":
                                case "inject":
                                    return n
                                }
                        }
                    },
                    register: function() {
                        function t(t, e, n) {
                            if ("border-box" === S.getPropertyValue(e, "boxSizing").toString().toLowerCase() === (n || !1)) {
                                var s,
                                    a,
                                    o = 0,
                                    r = "width" === t ? ["Left", "Right"] : ["Top", "Bottom"],
                                    c = ["padding" + r[0], "padding" + r[1], "border" + r[0] + "Width", "border" + r[1] + "Width"];
                                for (s = 0; s < c.length; s++)
                                    a = parseFloat(S.getPropertyValue(e, c[s])),
                                    isNaN(a) || (o += a);
                                return n ? -o : o
                            }
                            return 0
                        }
                        function e(e, n) {
                            return function(s, a, o) {
                                switch (s) {
                                case "name":
                                    return e;
                                case "extract":
                                    return parseFloat(o) + t(e, a, n);
                                case "inject":
                                    return parseFloat(o) - t(e, a, n) + "px"
                                }
                            }
                        }
                        v && !(v > 9) || P.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));
                        for (var n = 0; n < S.Lists.transformsBase.length; n++)
                            !function() {
                                var t = S.Lists.transformsBase[n];
                                S.Normalizations.registered[t] = function(e, n, a) {
                                    switch (e) {
                                    case "name":
                                        return "transform";
                                    case "extract":
                                        return r(n) === s || r(n).transformCache[t] === s ? /^scale/i.test(t) ? 1 : 0 : r(n).transformCache[t].replace(/[()]/g, "");
                                    case "inject":
                                        var o = !1;
                                        switch (t.substr(0, t.length - 1)) {
                                        case "translate":
                                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                            break;
                                        case "scal":
                                        case "scale":
                                            P.State.isAndroid && r(n).transformCache[t] === s && a < 1 && (a = 1),
                                            o = !/(\d)$/i.test(a);
                                            break;
                                        case "skew":
                                        case "rotate":
                                            o = !/(deg|\d)$/i.test(a)
                                        }
                                        return o || (r(n).transformCache[t] = "(" + a + ")"), r(n).transformCache[t]
                                    }
                                }
                            }();
                        for (var a = 0; a < S.Lists.colors.length; a++)
                            !function() {
                                var t = S.Lists.colors[a];
                                S.Normalizations.registered[t] = function(e, n, a) {
                                    switch (e) {
                                    case "name":
                                        return t;
                                    case "extract":
                                        var o;
                                        if (S.RegEx.wrappedValueAlreadyExtracted.test(a))
                                            o = a;
                                        else {
                                            var r,
                                                c = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                            /^[A-z]+$/i.test(a) ? r = c[a] !== s ? c[a] : c.black : S.RegEx.isHex.test(a) ? r = "rgb(" + S.Values.hexToRgb(a).join(" ") + ")" : /^rgba?\(/i.test(a) || (r = c.black),
                                            o = (r || a).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                        }
                                        return (!v || v > 8) && 3 === o.split(" ").length && (o += " 1"), o;
                                    case "inject":
                                        return /^rgb/.test(a) ? a : (v <= 8 ? 4 === a.split(" ").length && (a = a.split(/\s+/).slice(0, 3).join(" ")) : 3 === a.split(" ").length && (a += " 1"), (v <= 8 ? "rgb" : "rgba") + "(" + a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")")
                                    }
                                }
                            }();
                        S.Normalizations.registered.innerWidth = e("width", !0),
                        S.Normalizations.registered.innerHeight = e("height", !0),
                        S.Normalizations.registered.outerWidth = e("width"),
                        S.Normalizations.registered.outerHeight = e("height")
                    }
                },
                Names: {
                    camelCase: function(t) {
                        return t.replace(/-(\w)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    SVGAttribute: function(t) {
                        var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (v || P.State.isAndroid && !P.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                    },
                    prefixCheck: function(t) {
                        if (P.State.prefixMatches[t])
                            return [P.State.prefixMatches[t], !0];
                        for (var e = ["", "Webkit", "Moz", "ms", "O"], n = 0, s = e.length; n < s; n++) {
                            var a;
                            if (a = 0 === n ? t : e[n] + t.replace(/^\w/, function(t) {
                                return t.toUpperCase()
                            }), b.isString(P.State.prefixElement.style[a]))
                                return P.State.prefixMatches[t] = a, [a, !0]
                        }
                        return [t, !1]
                    }
                },
                Values: {
                    hexToRgb: function(t) {
                        var e,
                            n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return t = t.replace(n, function(t, e, n, s) {
                            return e + e + n + n + s + s
                        }), e = s.exec(t), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(t) {
                        return !t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                    },
                    getUnitType: function(t) {
                        return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                    },
                    getDisplayType: function(t) {
                        var e = t && t.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                    },
                    addClass: function(t, e) {
                        if (t)
                            if (t.classList)
                                t.classList.add(e);
                            else if (b.isString(t.className))
                                t.className += (t.className.length ? " " : "") + e;
                            else {
                                var n = t.getAttribute(v <= 7 ? "className" : "class") || "";
                                t.setAttribute("class", n + (n ? " " : "") + e)
                            }
                    },
                    removeClass: function(t, e) {
                        if (t)
                            if (t.classList)
                                t.classList.remove(e);
                            else if (b.isString(t.className))
                                t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ");
                            else {
                                var n = t.getAttribute(v <= 7 ? "className" : "class") || "";
                                t.setAttribute("class", n.replace(new RegExp("(^|s)" + e.split(" ").join("|") + "(s|$)", "gi"), " "))
                            }
                    }
                },
                getPropertyValue: function(t, n, a, o) {
                    function c(t, n) {
                        var a = 0;
                        if (v <= 8)
                            a = f.css(t, n);
                        else {
                            var i = !1;
                            /^(width|height)$/.test(n) && 0 === S.getPropertyValue(t, "display") && (i = !0, S.setPropertyValue(t, "display", S.Values.getDisplayType(t)));
                            var l = function() {
                                i && S.setPropertyValue(t, "display", "none")
                            };
                            if (!o) {
                                if ("height" === n && "border-box" !== S.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var p = t.offsetHeight - (parseFloat(S.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(t, "paddingBottom")) || 0);
                                    return l(), p
                                }
                                if ("width" === n && "border-box" !== S.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                    var u = t.offsetWidth - (parseFloat(S.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(t, "paddingRight")) || 0);
                                    return l(), u
                                }
                            }
                            var d;
                            d = r(t) === s ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null),
                            "borderColor" === n && (n = "borderTopColor"),
                            a = 9 === v && "filter" === n ? d.getPropertyValue(n) : d[n],
                            "" !== a && null !== a || (a = t.style[n]),
                            l()
                        }
                        if ("auto" === a && /^(top|right|bottom|left)$/i.test(n)) {
                            var h = c(t, "position");
                            ("fixed" === h || "absolute" === h && /top|left/i.test(n)) && (a = f(t).position()[n] + "px")
                        }
                        return a
                    }
                    var i;
                    if (S.Hooks.registered[n]) {
                        var l = n,
                            p = S.Hooks.getRoot(l);
                        a === s && (a = S.getPropertyValue(t, S.Names.prefixCheck(p)[0])),
                        S.Normalizations.registered[p] && (a = S.Normalizations.registered[p]("extract", t, a)),
                        i = S.Hooks.extractValue(l, a)
                    } else if (S.Normalizations.registered[n]) {
                        var u,
                            d;
                        u = S.Normalizations.registered[n]("name", t),
                        "transform" !== u && (d = c(t, S.Names.prefixCheck(u)[0]), S.Values.isCSSNullValue(d) && S.Hooks.templates[n] && (d = S.Hooks.templates[n][1])),
                        i = S.Normalizations.registered[n]("extract", t, d)
                    }
                    if (!/^[\d-]/.test(i)) {
                        var h = r(t);
                        if (h && h.isSVG && S.Names.SVGAttribute(n))
                            if (/^(height|width)$/i.test(n))
                                try {
                                    i = t.getBBox()[n]
                                } catch (t) {
                                    i = 0
                                }
                            else
                                i = t.getAttribute(n);
                        else
                            i = c(t, S.Names.prefixCheck(n)[0])
                    }
                    return S.Values.isCSSNullValue(i) && (i = 0), P.debug >= 2 && console.log("Get " + n + ": " + i), i
                },
                setPropertyValue: function(t, n, s, a, o) {
                    var c = n;
                    if ("scroll" === n)
                        o.container ? o.container["scroll" + o.direction] = s : "Left" === o.direction ? e.scrollTo(s, o.alternateValue) : e.scrollTo(o.alternateValue, s);
                    else if (S.Normalizations.registered[n] && "transform" === S.Normalizations.registered[n]("name", t))
                        S.Normalizations.registered[n]("inject", t, s),
                        c = "transform",
                        s = r(t).transformCache[n];
                    else {
                        if (S.Hooks.registered[n]) {
                            var i = n,
                                l = S.Hooks.getRoot(n);
                            a = a || S.getPropertyValue(t, l),
                            s = S.Hooks.injectValue(i, s, a),
                            n = l
                        }
                        if (S.Normalizations.registered[n] && (s = S.Normalizations.registered[n]("inject", t, s), n = S.Normalizations.registered[n]("name", t)), c = S.Names.prefixCheck(n)[0], v <= 8)
                            try {
                                t.style[c] = s
                            } catch (t) {
                                P.debug && console.log("Browser does not support [" + s + "] for [" + c + "]")
                            }
                        else {
                            var p = r(t);
                            p && p.isSVG && S.Names.SVGAttribute(n) ? t.setAttribute(n, s) : t.style[c] = s
                        }
                        P.debug >= 2 && console.log("Set " + n + " (" + c + "): " + s)
                    }
                    return [c, s]
                },
                flushTransformCache: function(t) {
                    var e = "",
                        n = r(t);
                    if ((v || P.State.isAndroid && !P.State.isChrome) && n && n.isSVG) {
                        var s = function(e) {
                                return parseFloat(S.getPropertyValue(t, e))
                            },
                            a = {
                                translate: [s("translateX"), s("translateY")],
                                skewX: [s("skewX")],
                                skewY: [s("skewY")],
                                scale: 1 !== s("scale") ? [s("scale"), s("scale")] : [s("scaleX"), s("scaleY")],
                                rotate: [s("rotateZ"), 0, 0]
                            };
                        f.each(r(t).transformCache, function(t) {
                            /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"),
                            a[t] && (e += t + "(" + a[t].join(" ") + ") ", delete a[t])
                        })
                    } else {
                        var o,
                            c;
                        f.each(r(t).transformCache, function(n) {
                            return o = r(t).transformCache[n], "transformPerspective" === n ? (c = o, !0) : (9 === v && "rotateZ" === n && (n = "rotate"), void (e += n + o + " "))
                        }),
                        c && (e = "perspective" + c + " " + e)
                    }
                    S.setPropertyValue(t, "transform", e)
                }
            };
            S.Hooks.register(),
            S.Normalizations.register(),
            P.hook = function(t, e, n) {
                var a;
                return t = o(t), f.each(t, function(t, o) {
                    if (r(o) === s && P.init(o), n === s)
                        a === s && (a = S.getPropertyValue(o, e));
                    else {
                        var c = S.setPropertyValue(o, e, n);
                        "transform" === c[0] && P.CSS.flushTransformCache(o),
                        a = c
                    }
                }), a
            };
            var I = function() {
                function t() {
                    return p ? j.promise || null : v
                }
                function a(t, a) {
                    function o(o) {
                        var p,
                            h;
                        if (i.begin && 0 === T)
                            try {
                                i.begin.call(g, g)
                            } catch (t) {
                                setTimeout(function() {
                                    throw t
                                }, 1)
                            }
                        if ("scroll" === O) {
                            var v,
                                m,
                                M,
                                x = /^x$/i.test(i.axis) ? "Left" : "Top",
                                I = parseFloat(i.offset) || 0;
                            i.container ? b.isWrapped(i.container) || b.isNode(i.container) ? (i.container = i.container[0] || i.container, v = i.container["scroll" + x], M = v + f(t).position()[x.toLowerCase()] + I) : i.container = null : (v = P.State.scrollAnchor[P.State["scrollProperty" + x]], m = P.State.scrollAnchor[P.State["scrollProperty" + ("Left" === x ? "Top" : "Left")]], M = f(t).offset()[x.toLowerCase()] + I),
                            l = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: v,
                                    currentValue: v,
                                    endValue: M,
                                    unitType: "",
                                    easing: i.easing,
                                    scrollData: {
                                        container: i.container,
                                        direction: x,
                                        alternateValue: m
                                    }
                                },
                                element: t
                            },
                            P.debug && console.log("tweensContainer (scroll): ", l.scroll, t)
                        } else if ("reverse" === O) {
                            if (!(p = r(t)))
                                return;
                            if (!p.tweensContainer)
                                return void f.dequeue(t, i.queue);
                            "none" === p.opts.display && (p.opts.display = "auto"),
                            "hidden" === p.opts.visibility && (p.opts.visibility = "visible"),
                            p.opts.loop = !1,
                            p.opts.begin = null,
                            p.opts.complete = null,
                            k.easing || delete i.easing,
                            k.duration || delete i.duration,
                            i = f.extend({}, p.opts, i),
                            h = f.extend(!0, {}, p ? p.tweensContainer : null);
                            for (var C in h)
                                if (h.hasOwnProperty(C) && "element" !== C) {
                                    var E = h[C].startValue;
                                    h[C].startValue = h[C].currentValue = h[C].endValue,
                                    h[C].endValue = E,
                                    b.isEmptyObject(k) || (h[C].easing = i.easing),
                                    P.debug && console.log("reverse tweensContainer (" + C + "): " + JSON.stringify(h[C]), t)
                                }
                            l = h
                        } else if ("start" === O) {
                            p = r(t),
                            p && p.tweensContainer && !0 === p.isAnimating && (h = p.tweensContainer);
                            var N = function(a, o) {
                                var r,
                                    u = S.Hooks.getRoot(a),
                                    d = !1,
                                    v = o[0],
                                    m = o[1],
                                    g = o[2];
                                if (!(p && p.isSVG || "tween" === u || !1 !== S.Names.prefixCheck(u)[1] || S.Normalizations.registered[u] !== s))
                                    return void (P.debug && console.log("Skipping [" + u + "] due to a lack of browser support."));
                                (i.display !== s && null !== i.display && "none" !== i.display || i.visibility !== s && "hidden" !== i.visibility) && /opacity|filter/.test(a) && !g && 0 !== v && (g = 0),
                                i._cacheValues && h && h[a] ? (g === s && (g = h[a].endValue + h[a].unitType), d = p.rootPropertyValueCache[u]) : S.Hooks.registered[a] ? g === s ? (d = S.getPropertyValue(t, u), g = S.getPropertyValue(t, a, d)) : d = S.Hooks.templates[u][1] : g === s && (g = S.getPropertyValue(t, a));
                                var w,
                                    y,
                                    k,
                                    M = !1,
                                    x = function(t, e) {
                                        var n,
                                            s;
                                        return s = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                            return n = t, ""
                                        }), n || (n = S.Values.getUnitType(t)), [s, n]
                                    };
                                if (g !== v && b.isString(g) && b.isString(v)) {
                                    r = "";
                                    var j = 0,
                                        I = 0,
                                        L = [],
                                        T = [],
                                        C = 0,
                                        E = 0,
                                        O = 0;
                                    for (g = S.Hooks.fixColors(g), v = S.Hooks.fixColors(v); j < g.length && I < v.length;) {
                                        var N = g[j],
                                            V = v[I];
                                        if (/[\d\.-]/.test(N) && /[\d\.-]/.test(V)) {
                                            for (var F = N, $ = V, A = ".", H = "."; ++j < g.length;) {
                                                if ((N = g[j]) === A)
                                                    A = "..";
                                                else if (!/\d/.test(N))
                                                    break;
                                                F += N
                                            }
                                            for (; ++I < v.length;) {
                                                if ((V = v[I]) === H)
                                                    H = "..";
                                                else if (!/\d/.test(V))
                                                    break;
                                                $ += V
                                            }
                                            var R = S.Hooks.getUnit(g, j),
                                                W = S.Hooks.getUnit(v, I);
                                            if (j += R.length, I += W.length, R === W)
                                                F === $ ? r += F + R : (r += "{" + L.length + (E ? "!" : "") + "}" + R, L.push(parseFloat(F)), T.push(parseFloat($)));
                                            else {
                                                var z = parseFloat(F),
                                                    B = parseFloat($);
                                                r += (C < 5 ? "calc" : "") + "(" + (z ? "{" + L.length + (E ? "!" : "") + "}" : "0") + R + " + " + (B ? "{" + (L.length + (z ? 1 : 0)) + (E ? "!" : "") + "}" : "0") + W + ")",
                                                z && (L.push(z), T.push(0)),
                                                B && (L.push(0), T.push(B))
                                            }
                                        } else {
                                            if (N !== V) {
                                                C = 0;
                                                break
                                            }
                                            r += N,
                                            j++,
                                            I++,
                                            0 === C && "c" === N || 1 === C && "a" === N || 2 === C && "l" === N || 3 === C && "c" === N || C >= 4 && "(" === N ? C++ : (C && C < 5 || C >= 4 && ")" === N && --C < 5) && (C = 0),
                                            0 === E && "r" === N || 1 === E && "g" === N || 2 === E && "b" === N || 3 === E && "a" === N || E >= 3 && "(" === N ? (3 === E && "a" === N && (O = 1), E++) : O && "," === N ? ++O > 3 && (E = O = 0) : (O && E < (O ? 5 : 4) || E >= (O ? 4 : 3) && ")" === N && --E < (O ? 5 : 4)) && (E = O = 0)
                                        }
                                    }
                                    j === g.length && I === v.length || (P.debug && console.error('Trying to pattern match mis-matched strings ["' + v + '", "' + g + '"]'), r = s),
                                    r && (L.length ? (P.debug && console.log('Pattern found "' + r + '" -> ', L, T, "[" + g + "," + v + "]"), g = L, v = T, y = k = "") : r = s)
                                }
                                if (r || (w = x(a, g), g = w[0], k = w[1], w = x(a, v), v = w[0].replace(/^([+-\/*])=/, function(t, e) {
                                    return M = e, ""
                                }), y = w[1], g = parseFloat(g) || 0, v = parseFloat(v) || 0, "%" === y && (/^(fontSize|lineHeight)$/.test(a) ? (v /= 100, y = "em") : /^scale/.test(a) ? (v /= 100, y = "") : /(Red|Green|Blue)$/i.test(a) && (v = v / 100 * 255, y = ""))), /[\/*]/.test(M))
                                    y = k;
                                else if (k !== y && 0 !== g)
                                    if (0 === v)
                                        y = k;
                                    else {
                                        c = c || function() {
                                            var s = {
                                                    myParent: t.parentNode || n.body,
                                                    position: S.getPropertyValue(t, "position"),
                                                    fontSize: S.getPropertyValue(t, "fontSize")
                                                },
                                                a = s.position === D.lastPosition && s.myParent === D.lastParent,
                                                o = s.fontSize === D.lastFontSize;
                                            D.lastParent = s.myParent,
                                            D.lastPosition = s.position,
                                            D.lastFontSize = s.fontSize;
                                            var r = {};
                                            if (o && a)
                                                r.emToPx = D.lastEmToPx,
                                                r.percentToPxWidth = D.lastPercentToPxWidth,
                                                r.percentToPxHeight = D.lastPercentToPxHeight;
                                            else {
                                                var c = p && p.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                                P.init(c),
                                                s.myParent.appendChild(c),
                                                f.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                                    P.CSS.setPropertyValue(c, e, "hidden")
                                                }),
                                                P.CSS.setPropertyValue(c, "position", s.position),
                                                P.CSS.setPropertyValue(c, "fontSize", s.fontSize),
                                                P.CSS.setPropertyValue(c, "boxSizing", "content-box"),
                                                f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                                    P.CSS.setPropertyValue(c, e, "100%")
                                                }),
                                                P.CSS.setPropertyValue(c, "paddingLeft", "100em"),
                                                r.percentToPxWidth = D.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(c, "width", null, !0)) || 1) / 100,
                                                r.percentToPxHeight = D.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(c, "height", null, !0)) || 1) / 100,
                                                r.emToPx = D.lastEmToPx = (parseFloat(S.getPropertyValue(c, "paddingLeft")) || 1) / 100,
                                                s.myParent.removeChild(c)
                                            }
                                            return null === D.remToPx && (D.remToPx = parseFloat(S.getPropertyValue(n.body, "fontSize")) || 16), null === D.vwToPx && (D.vwToPx = parseFloat(e.innerWidth) / 100, D.vhToPx = parseFloat(e.innerHeight) / 100), r.remToPx = D.remToPx, r.vwToPx = D.vwToPx, r.vhToPx = D.vhToPx, P.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(r), t), r
                                        }();
                                        var Y = /margin|padding|left|right|width|text|word|letter/i.test(a) || /X$/.test(a) || "x" === a ? "x" : "y";
                                        switch (k) {
                                        case "%":
                                            g *= "x" === Y ? c.percentToPxWidth : c.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            g *= c[k + "ToPx"]
                                        }
                                        switch (y) {
                                        case "%":
                                            g *= 1 / ("x" === Y ? c.percentToPxWidth : c.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            g *= 1 / c[y + "ToPx"]
                                        }
                                    }
                                switch (M) {
                                case "+":
                                    v = g + v;
                                    break;
                                case "-":
                                    v = g - v;
                                    break;
                                case "*":
                                    v *= g;
                                    break;
                                case "/":
                                    v = g / v
                                }
                                l[a] = {
                                    rootPropertyValue: d,
                                    startValue: g,
                                    currentValue: g,
                                    endValue: v,
                                    unitType: y,
                                    easing: m
                                },
                                r && (l[a].pattern = r),
                                P.debug && console.log("tweensContainer (" + a + "): " + JSON.stringify(l[a]), t)
                            };
                            for (var V in w)
                                if (w.hasOwnProperty(V)) {
                                    var F = S.Names.camelCase(V),
                                        $ = function(e, n) {
                                            var s,
                                                o,
                                                r;
                                            return b.isFunction(e) && (e = e.call(t, a, L)), b.isArray(e) ? (s = e[0], !b.isArray(e[1]) && /^[\d-]/.test(e[1]) || b.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? r = e[1] : b.isString(e[1]) && !S.RegEx.isHex.test(e[1]) && P.Easings[e[1]] || b.isArray(e[1]) ? (o = n ? e[1] : u(e[1], i.duration), r = e[2]) : r = e[1] || e[2]) : s = e, n || (o = o || i.easing), b.isFunction(s) && (s = s.call(t, a, L)), b.isFunction(r) && (r = r.call(t, a, L)), [s || 0, o, r]
                                        }(w[V]);
                                    if (y(S.Lists.colors, F)) {
                                        var A = $[0],
                                            R = $[1],
                                            W = $[2];
                                        if (S.RegEx.isHex.test(A)) {
                                            for (var z = ["Red", "Green", "Blue"], B = S.Values.hexToRgb(A), Y = W ? S.Values.hexToRgb(W) : s, X = 0; X < z.length; X++) {
                                                var _ = [B[X]];
                                                R && _.push(R),
                                                Y !== s && _.push(Y[X]),
                                                N(F + z[X], _)
                                            }
                                            continue
                                        }
                                    }
                                    N(F, $)
                                }
                            l.element = t
                        }
                        l.element && (S.Values.addClass(t, "velocity-animating"), H.push(l), p = r(t), p && ("" === i.queue && (p.tweensContainer = l, p.opts = i), p.isAnimating = !0), T === L - 1 ? (P.State.calls.push([H, g, i, null, j.resolver, null, 0]), !1 === P.State.isTicking && (P.State.isTicking = !0, d())) : T++)
                    }
                    var c,
                        i = f.extend({}, P.defaults, k),
                        l = {};
                    switch (r(t) === s && P.init(t), parseFloat(i.delay) && !1 !== i.queue && f.queue(t, i.queue, function(e, n) {
                        if (!0 === n)
                            return !0;
                        P.velocityQueueEntryFlag = !0;
                        var s = P.State.delayedElements.count++;
                        P.State.delayedElements[s] = t;
                        var a = function(t) {
                            return function() {
                                P.State.delayedElements[t] = !1,
                                e()
                            }
                        }(s);
                        r(t).delayBegin = (new Date).getTime(),
                        r(t).delay = parseFloat(i.delay),
                        r(t).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(i.delay)),
                            next: a
                        }
                    }), i.duration.toString().toLowerCase()) {
                    case "fast":
                        i.duration = 200;
                        break;
                    case "normal":
                        i.duration = M;
                        break;
                    case "slow":
                        i.duration = 600;
                        break;
                    default:
                        i.duration = parseFloat(i.duration) || 1
                    }
                    if (!1 !== P.mock && (!0 === P.mock ? i.duration = i.delay = 1 : (i.duration *= parseFloat(P.mock) || 1, i.delay *= parseFloat(P.mock) || 1)), i.easing = u(i.easing, i.duration), i.begin && !b.isFunction(i.begin) && (i.begin = null), i.progress && !b.isFunction(i.progress) && (i.progress = null), i.complete && !b.isFunction(i.complete) && (i.complete = null), i.display !== s && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = P.CSS.Values.getDisplayType(t))), i.visibility !== s && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && P.State.isMobile && !P.State.isGingerbread, !1 === i.queue)
                        if (i.delay) {
                            var p = P.State.delayedElements.count++;
                            P.State.delayedElements[p] = t;
                            var h = function(t) {
                                return function() {
                                    P.State.delayedElements[t] = !1,
                                    o()
                                }
                            }(p);
                            r(t).delayBegin = (new Date).getTime(),
                            r(t).delay = parseFloat(i.delay),
                            r(t).delayTimer = {
                                setTimeout: setTimeout(o, parseFloat(i.delay)),
                                next: h
                            }
                        } else
                            o();
                    else
                        f.queue(t, i.queue, function(t, e) {
                            return !0 === e ? (j.promise && j.resolver(g), !0) : (P.velocityQueueEntryFlag = !0, void o(t))
                        });
                    "" !== i.queue && "fx" !== i.queue || "inprogress" === f.queue(t)[0] || f.dequeue(t)
                }
                var l,
                    p,
                    v,
                    m,
                    g,
                    w,
                    k,
                    x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || b.isString(arguments[0].properties));
                b.isWrapped(this) ? (p = !1, m = 0, g = this, v = this) : (p = !0, m = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]);
                var j = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                if (p && P.Promise && (j.promise = new P.Promise(function(t, e) {
                    j.resolver = t,
                    j.rejecter = e
                })), x ? (w = arguments[0].properties || arguments[0].p, k = arguments[0].options || arguments[0].o) : (w = arguments[m], k = arguments[m + 1]), !(g = o(g)))
                    return void (j.promise && (w && k && !1 === k.promiseRejectEmpty ? j.resolver() : j.rejecter()));
                var L = g.length,
                    T = 0;
                if (!/^(stop|finish|finishAll|pause|resume)$/i.test(w) && !f.isPlainObject(k)) {
                    var C = m + 1;
                    k = {};
                    for (var E = C; E < arguments.length; E++)
                        b.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? b.isString(arguments[E]) || b.isArray(arguments[E]) ? k.easing = arguments[E] : b.isFunction(arguments[E]) && (k.complete = arguments[E]) : k.duration = arguments[E]
                }
                var O;
                switch (w) {
                case "scroll":
                    O = "scroll";
                    break;
                case "reverse":
                    O = "reverse";
                    break;
                case "pause":
                    var N = (new Date).getTime();
                    return f.each(g, function(t, e) {
                        c(e, N)
                    }), f.each(P.State.calls, function(t, e) {
                        var n = !1;
                        e && f.each(e[1], function(t, a) {
                            var o = k === s ? "" : k;
                            return !0 !== o && e[2].queue !== o && (k !== s || !1 !== e[2].queue) || (f.each(g, function(t, s) {
                                    if (s === a)
                                        return e[5] = {
                                            resume: !1
                                        }, n = !0, !1
                                }), !n && void 0)
                        })
                    }), t();
                case "resume":
                    return f.each(g, function(t, e) {
                        i(e, N)
                    }), f.each(P.State.calls, function(t, e) {
                        var n = !1;
                        e && f.each(e[1], function(t, a) {
                            var o = k === s ? "" : k;
                            return !0 !== o && e[2].queue !== o && (k !== s || !1 !== e[2].queue) || !e[5] || (f.each(g, function(t, s) {
                                    if (s === a)
                                        return e[5].resume = !0, n = !0, !1
                                }), !n && void 0)
                        })
                    }), t();
                case "finish":
                case "finishAll":
                case "stop":
                    f.each(g, function(t, e) {
                        r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer),
                        "finishAll" !== w || !0 !== k && !b.isString(k) || (f.each(f.queue(e, b.isString(k) ? k : ""), function(t, e) {
                            b.isFunction(e) && e()
                        }), f.queue(e, b.isString(k) ? k : "", []))
                    });
                    var V = [];
                    return f.each(P.State.calls, function(t, e) {
                        e && f.each(e[1], function(n, a) {
                            var o = k === s ? "" : k;
                            return !0 !== o && e[2].queue !== o && (k !== s || !1 !== e[2].queue) || void f.each(g, function(n, s) {
                                    if (s === a)
                                        if ((!0 === k || b.isString(k)) && (f.each(f.queue(s, b.isString(k) ? k : ""), function(t, e) {
                                            b.isFunction(e) && e(null, !0)
                                        }), f.queue(s, b.isString(k) ? k : "", [])), "stop" === w) {
                                            var c = r(s);
                                            c && c.tweensContainer && (!0 === o || "" === o) && f.each(c.tweensContainer, function(t, e) {
                                                e.endValue = e.currentValue
                                            }),
                                            V.push(t)
                                        } else
                                            "finish" !== w && "finishAll" !== w || (e[2].duration = 1)
                                })
                        })
                    }), "stop" === w && (f.each(V, function(t, e) {
                        h(e, !0)
                    }), j.promise && j.resolver(g)), t();
                default:
                    if (!f.isPlainObject(w) || b.isEmptyObject(w)) {
                        if (b.isString(w) && P.Redirects[w]) {
                            l = f.extend({}, k);
                            var F = l.duration,
                                $ = l.delay || 0;
                            return !0 === l.backwards && (g = f.extend(!0, [], g).reverse()), f.each(g, function(t, e) {
                                parseFloat(l.stagger) ? l.delay = $ + parseFloat(l.stagger) * t : b.isFunction(l.stagger) && (l.delay = $ + l.stagger.call(e, t, L)),
                                l.drag && (l.duration = parseFloat(F) || (/^(callout|transition)/.test(w) ? 1e3 : M), l.duration = Math.max(l.duration * (l.backwards ? 1 - t / L : (t + 1) / L), .75 * l.duration, 200)),
                                P.Redirects[w].call(e, e, l || {}, t, L, g, j.promise ? j : s)
                            }), t()
                        }
                        var A = "Velocity: First argument (" + w + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return j.promise ? j.rejecter(new Error(A)) : e.console && console.log(A), t()
                    }
                    O = "start"
                }
                var D = {
                        lastParent: null,
                        lastPosition: null,
                        lastFontSize: null,
                        lastPercentToPxWidth: null,
                        lastPercentToPxHeight: null,
                        lastEmToPx: null,
                        remToPx: null,
                        vwToPx: null,
                        vhToPx: null
                    },
                    H = [];
                f.each(g, function(t, e) {
                    b.isNode(e) && a(e, t)
                }),
                l = f.extend({}, P.defaults, k),
                l.loop = parseInt(l.loop, 10);
                var R = 2 * l.loop - 1;
                if (l.loop)
                    for (var W = 0; W < R; W++) {
                        var z = {
                            delay: l.delay,
                            progress: l.progress
                        };
                        W === R - 1 && (z.display = l.display, z.visibility = l.visibility, z.complete = l.complete),
                        I(g, "reverse", z)
                    }
                return t()
            };
            P = f.extend(I, P),
            P.animate = I;
            var L = e.requestAnimationFrame || m;
            if (!P.State.isMobile && n.hidden !== s) {
                var T = function() {
                    n.hidden ? (L = function(t) {
                        return setTimeout(function() {
                            t(!0)
                        }, 16)
                    }, d()) : L = e.requestAnimationFrame || m
                };
                T(),
                n.addEventListener("visibilitychange", T)
            }
            return t.Velocity = P, t !== e && (t.fn.velocity = I, t.fn.velocity.defaults = P.defaults), f.each(["Down", "Up"], function(t, e) {
                P.Redirects["slide" + e] = function(t, n, a, o, r, c) {
                    var i = f.extend({}, n),
                        l = i.begin,
                        p = i.complete,
                        u = {},
                        d = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        };
                    i.display === s && (i.display = "Down" === e ? "inline" === P.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"),
                    i.begin = function() {
                        0 === a && l && l.call(r, r);
                        for (var n in d)
                            if (d.hasOwnProperty(n)) {
                                u[n] = t.style[n];
                                var s = S.getPropertyValue(t, n);
                                d[n] = "Down" === e ? [s, 0] : [0, s]
                            }
                        u.overflow = t.style.overflow,
                        t.style.overflow = "hidden"
                    },
                    i.complete = function() {
                        for (var e in u)
                            u.hasOwnProperty(e) && (t.style[e] = u[e]);
                        a === o - 1 && (p && p.call(r, r), c && c.resolver(r))
                    },
                    P(t, d, i)
                }
            }), f.each(["In", "Out"], function(t, e) {
                P.Redirects["fade" + e] = function(t, n, a, o, r, c) {
                    var i = f.extend({}, n),
                        l = i.complete,
                        p = {
                            opacity: "In" === e ? 1 : 0
                        };
                    0 !== a && (i.begin = null),
                    i.complete = a !== o - 1 ? null : function() {
                        l && l.call(r, r),
                        c && c.resolver(r)
                    },
                    i.display === s && (i.display = "In" === e ? "auto" : "none"),
                    P(this, p, i)
                }
            }), P
        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    })
  }, function(t, e, n) {
    !function(e) {
        "use strict";
        t.exports = e()
    }(function() {
        "use strict";
        return function(t, e, n, s) {
            var a = t.Velocity;
            if (!a || !a.Utilities)
                return void (e.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
            var o = a.Utilities,
                r = a.version,
                c = {
                    major: 1,
                    minor: 1,
                    patch: 0
                };
            if (function(t, e) {
                var n = [];
                return !(!t || !e) && (o.each([t, e], function(t, e) {
                        var s = [];
                        o.each(e, function(t, e) {
                            for (; e.toString().length < 5;)
                                e = "0" + e;
                            s.push(e)
                        }),
                        n.push(s.join(""))
                    }), parseFloat(n[0]) > parseFloat(n[1]))
            }(c, r)) {
                var i = "Velocity UI Pack: You need to update Velocity (velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
                throw alert(i), new Error(i)
            }
            a.RegisterEffect = a.RegisterUI = function(t, e) {
                function n(t, e, n, s) {
                    var r,
                        c = 0;
                    o.each(t.nodeType ? [t] : t, function(t, e) {
                        s && (n += t * s),
                        r = e.parentNode;
                        var i = ["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"];
                        "border-box" === a.CSS.getPropertyValue(e, "boxSizing").toString().toLowerCase() && (i = ["height"]),
                        o.each(i, function(t, n) {
                            c += parseFloat(a.CSS.getPropertyValue(e, n))
                        })
                    }),
                    a.animate(r, {
                        height: ("In" === e ? "+" : "-") + "=" + c
                    }, {
                        queue: !1,
                        easing: "ease-in-out",
                        duration: n * ("In" === e ? .6 : 1)
                    })
                }
                return a.Redirects[t] = function(s, r, c, i, l, p, u) {
                    var d = c === i - 1,
                        h = 0;
                    u = u || e.loop,
                    "function" == typeof e.defaultDuration ? e.defaultDuration = e.defaultDuration.call(l, l) : e.defaultDuration = parseFloat(e.defaultDuration);
                    for (var f = 0; f < e.calls.length; f++)
                        "number" == typeof (y = e.calls[f][1]) && (h += y);
                    var v = h >= 1 ? 0 : e.calls.length ? (1 - h) / e.calls.length : 1;
                    for (f = 0; f < e.calls.length; f++) {
                        var m = e.calls[f],
                            g = m[0],
                            w = 1e3,
                            y = m[1],
                            b = m[2] || {},
                            k = {};
                        if (void 0 !== r.duration ? w = r.duration : void 0 !== e.defaultDuration && (w = e.defaultDuration), k.duration = w * ("number" == typeof y ? y : v), k.queue = r.queue || "", k.easing = b.easing || "ease", k.delay = parseFloat(b.delay) || 0, k.loop = !e.loop && b.loop, k._cacheValues = b._cacheValues || !0, 0 === f) {
                            if (k.delay += parseFloat(r.delay) || 0, 0 === c && (k.begin = function() {
                                r.begin && r.begin.call(l, l);
                                var e = t.match(/(In|Out)$/);
                                e && "In" === e[0] && void 0 !== g.opacity && o.each(l.nodeType ? [l] : l, function(t, e) {
                                    a.CSS.setPropertyValue(e, "opacity", 0)
                                }),
                                r.animateParentHeight && e && n(l, e[0], w + k.delay, r.stagger)
                            }), null !== r.display)
                                if (void 0 !== r.display && "none" !== r.display)
                                    k.display = r.display;
                                else if (/In$/.test(t)) {
                                    var M = a.CSS.Values.getDisplayType(s);
                                    k.display = "inline" === M ? "inline-block" : M
                                }
                            r.visibility && "hidden" !== r.visibility && (k.visibility = r.visibility)
                        }
                        if (f === e.calls.length - 1) {
                            var x = function() {
                                void 0 !== r.display && "none" !== r.display || !/Out$/.test(t) || o.each(l.nodeType ? [l] : l, function(t, e) {
                                    a.CSS.setPropertyValue(e, "display", "none")
                                }),
                                r.complete && r.complete.call(l, l),
                                p && p.resolver(l || s)
                            };
                            k.complete = function() {
                                if (u && a.Redirects[t](s, r, c, i, l, p, !0 === u || Math.max(0, u - 1)), e.reset) {
                                    for (var n in e.reset)
                                        if (e.reset.hasOwnProperty(n)) {
                                            var o = e.reset[n];
                                            void 0 !== a.CSS.Hooks.registered[n] || "string" != typeof o && "number" != typeof o || (e.reset[n] = [e.reset[n], e.reset[n]])
                                        }
                                    var h = {
                                        duration: 0,
                                        queue: !1
                                    };
                                    d && (h.complete = x),
                                    a.animate(s, e.reset, h)
                                } else
                                    d && x()
                            },
                            "hidden" === r.visibility && (k.visibility = r.visibility)
                        }
                        a.animate(s, g, k)
                    }
                }, a
            },
            a.RegisterEffect.packagedEffects = {
                "callout.bounce": {
                    defaultDuration: 550,
                    calls: [[{
                        translateY: -30
                    }, .25], [{
                        translateY: 0
                    }, .125], [{
                        translateY: -15
                    }, .125], [{
                        translateY: 0
                    }, .25]]
                },
                "callout.shake": {
                    defaultDuration: 800,
                    calls: [[{
                        translateX: -11
                    }], [{
                        translateX: 11
                    }], [{
                        translateX: -11
                    }], [{
                        translateX: 11
                    }], [{
                        translateX: -11
                    }], [{
                        translateX: 11
                    }], [{
                        translateX: -11
                    }], [{
                        translateX: 0
                    }]]
                },
                "callout.flash": {
                    defaultDuration: 1100,
                    calls: [[{
                        opacity: [0, "easeInOutQuad", 1]
                    }], [{
                        opacity: [1, "easeInOutQuad"]
                    }], [{
                        opacity: [0, "easeInOutQuad"]
                    }], [{
                        opacity: [1, "easeInOutQuad"]
                    }]]
                },
                "callout.pulse": {
                    defaultDuration: 825,
                    calls: [[{
                        scaleX: 1.1,
                        scaleY: 1.1
                    }, .5, {
                        easing: "easeInExpo"
                    }], [{
                        scaleX: 1,
                        scaleY: 1
                    }, .5]]
                },
                "callout.swing": {
                    defaultDuration: 950,
                    calls: [[{
                        rotateZ: 15
                    }], [{
                        rotateZ: -10
                    }], [{
                        rotateZ: 5
                    }], [{
                        rotateZ: -5
                    }], [{
                        rotateZ: 0
                    }]]
                },
                "callout.tada": {
                    defaultDuration: 1e3,
                    calls: [[{
                        scaleX: .9,
                        scaleY: .9,
                        rotateZ: -3
                    }, .1], [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: 3
                    }, .1], [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        rotateZ: -3
                    }, .1], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], [{
                        scaleX: 1,
                        scaleY: 1,
                        rotateZ: 0
                    }, .2]]
                },
                "transition.fadeIn": {
                    defaultDuration: 500,
                    calls: [[{
                        opacity: [1, 0]
                    }]]
                },
                "transition.fadeOut": {
                    defaultDuration: 500,
                    calls: [[{
                        opacity: [0, 1]
                    }]]
                },
                "transition.flipXIn": {
                    defaultDuration: 700,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateY: [0, -55]
                    }]],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipXOut": {
                    defaultDuration: 700,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateY: 55
                    }]],
                    reset: {
                        transformPerspective: 0,
                        rotateY: 0
                    }
                },
                "transition.flipYIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        rotateX: [0, -45]
                    }]],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipYOut": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        rotateX: 25
                    }]],
                    reset: {
                        transformPerspective: 0,
                        rotateX: 0
                    }
                },
                "transition.flipBounceXIn": {
                    defaultDuration: 900,
                    calls: [[{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateY: [-10, 90]
                    }, .5], [{
                        opacity: .8,
                        rotateY: 10
                    }, .25], [{
                        opacity: 1,
                        rotateY: 0
                    }, .25]],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipBounceXOut": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateY: -10
                    }], [{
                        opacity: 0,
                        rotateY: 90
                    }]],
                    reset: {
                        transformPerspective: 0,
                        rotateY: 0
                    }
                },
                "transition.flipBounceYIn": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [.725, 0],
                        transformPerspective: [400, 400],
                        rotateX: [-10, 90]
                    }, .5], [{
                        opacity: .8,
                        rotateX: 10
                    }, .25], [{
                        opacity: 1,
                        rotateX: 0
                    }, .25]],
                    reset: {
                        transformPerspective: 0
                    }
                },
                "transition.flipBounceYOut": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [.9, 1],
                        transformPerspective: [400, 400],
                        rotateX: -15
                    }], [{
                        opacity: 0,
                        rotateX: 90
                    }]],
                    reset: {
                        transformPerspective: 0,
                        rotateX: 0
                    }
                },
                "transition.swoopIn": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [1, 0],
                        transformOriginX: ["100%", "50%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        translateX: [0, -700],
                        translateZ: 0
                    }]],
                    reset: {
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.swoopOut": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "100%"],
                        transformOriginY: ["100%", "100%"],
                        scaleX: 0,
                        scaleY: 0,
                        translateX: -700,
                        translateZ: 0
                    }]],
                    reset: {
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0
                    }
                },
                "transition.whirlIn": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 0],
                        scaleY: [1, 0],
                        rotateY: [0, 160]
                    }, 1, {
                        easing: "easeInOutSine"
                    }]]
                },
                "transition.whirlOut": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [0, "easeInOutQuint", 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 0,
                        scaleY: 0,
                        rotateY: 160
                    }, 1, {
                        easing: "swing"
                    }]],
                    reset: {
                        scaleX: 1,
                        scaleY: 1,
                        rotateY: 0
                    }
                },
                "transition.shrinkIn": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, 1.5],
                        scaleY: [1, 1.5],
                        translateZ: 0
                    }]]
                },
                "transition.shrinkOut": {
                    defaultDuration: 600,
                    calls: [[{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: 1.3,
                        scaleY: 1.3,
                        translateZ: 0
                    }]],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.expandIn": {
                    defaultDuration: 700,
                    calls: [[{
                        opacity: [1, 0],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: [1, .625],
                        scaleY: [1, .625],
                        translateZ: 0
                    }]]
                },
                "transition.expandOut": {
                    defaultDuration: 700,
                    calls: [[{
                        opacity: [0, 1],
                        transformOriginX: ["50%", "50%"],
                        transformOriginY: ["50%", "50%"],
                        scaleX: .5,
                        scaleY: .5,
                        translateZ: 0
                    }]],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.bounceIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        scaleX: [1.05, .3],
                        scaleY: [1.05, .3]
                    }, .35], [{
                        scaleX: .9,
                        scaleY: .9,
                        translateZ: 0
                    }, .2], [{
                        scaleX: 1,
                        scaleY: 1
                    }, .45]]
                },
                "transition.bounceOut": {
                    defaultDuration: 800,
                    calls: [[{
                        scaleX: .95,
                        scaleY: .95
                    }, .35], [{
                        scaleX: 1.1,
                        scaleY: 1.1,
                        translateZ: 0
                    }, .35], [{
                        opacity: [0, 1],
                        scaleX: .3,
                        scaleY: .3
                    }, .3]],
                    reset: {
                        scaleX: 1,
                        scaleY: 1
                    }
                },
                "transition.bounceUpIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        translateY: [-30, 1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }], [{
                        translateY: 10
                    }, .2], [{
                        translateY: 0
                    }, .2]]
                },
                "transition.bounceUpOut": {
                    defaultDuration: 1e3,
                    calls: [[{
                        translateY: 20
                    }, .2], [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: -1e3
                    }, .8]],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.bounceDownIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        translateY: [30, -1e3]
                    }, .6, {
                        easing: "easeOutCirc"
                    }], [{
                        translateY: -10
                    }, .2], [{
                        translateY: 0
                    }, .2]]
                },
                "transition.bounceDownOut": {
                    defaultDuration: 1e3,
                    calls: [[{
                        translateY: -20
                    }, .2], [{
                        opacity: [0, "easeInCirc", 1],
                        translateY: 1e3
                    }, .8]],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.bounceLeftIn": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [1, 0],
                        translateX: [30, -1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }], [{
                        translateX: -10
                    }, .2], [{
                        translateX: 0
                    }, .2]]
                },
                "transition.bounceLeftOut": {
                    defaultDuration: 750,
                    calls: [[{
                        translateX: 30
                    }, .2], [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: -1250
                    }, .8]],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.bounceRightIn": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [1, 0],
                        translateX: [-30, 1250]
                    }, .6, {
                        easing: "easeOutCirc"
                    }], [{
                        translateX: 10
                    }, .2], [{
                        translateX: 0
                    }, .2]]
                },
                "transition.bounceRightOut": {
                    defaultDuration: 750,
                    calls: [[{
                        translateX: -30
                    }, .2], [{
                        opacity: [0, "easeInCirc", 1],
                        translateX: 1250
                    }, .8]],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideUpIn": {
                    defaultDuration: 900,
                    calls: [[{
                        opacity: [1, 0],
                        translateY: [0, 20],
                        translateZ: 0
                    }]]
                },
                "transition.slideUpOut": {
                    defaultDuration: 900,
                    calls: [[{
                        opacity: [0, 1],
                        translateY: -20,
                        translateZ: 0
                    }]],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideDownIn": {
                    defaultDuration: 900,
                    calls: [[{
                        opacity: [1, 0],
                        translateY: [0, -20],
                        translateZ: 0
                    }]]
                },
                "transition.slideDownOut": {
                    defaultDuration: 900,
                    calls: [[{
                        opacity: [0, 1],
                        translateY: 20,
                        translateZ: 0
                    }]],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideLeftIn": {
                    defaultDuration: 1e3,
                    calls: [[{
                        opacity: [1, 0],
                        translateX: [0, -20],
                        translateZ: 0
                    }]]
                },
                "transition.slideLeftOut": {
                    defaultDuration: 1050,
                    calls: [[{
                        opacity: [0, 1],
                        translateX: -20,
                        translateZ: 0
                    }]],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideRightIn": {
                    defaultDuration: 1e3,
                    calls: [[{
                        opacity: [1, 0],
                        translateX: [0, 20],
                        translateZ: 0
                    }]]
                },
                "transition.slideRightOut": {
                    defaultDuration: 1050,
                    calls: [[{
                        opacity: [0, 1],
                        translateX: 20,
                        translateZ: 0
                    }]],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideUpBigIn": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [1, 0],
                        translateY: [0, 75],
                        translateZ: 0
                    }]]
                },
                "transition.slideUpBigOut": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [0, 1],
                        translateY: -75,
                        translateZ: 0
                    }]],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideDownBigIn": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [1, 0],
                        translateY: [0, -75],
                        translateZ: 0
                    }]]
                },
                "transition.slideDownBigOut": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [0, 1],
                        translateY: 75,
                        translateZ: 0
                    }]],
                    reset: {
                        translateY: 0
                    }
                },
                "transition.slideLeftBigIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        translateX: [0, -75],
                        translateZ: 0
                    }]]
                },
                "transition.slideLeftBigOut": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [0, 1],
                        translateX: -75,
                        translateZ: 0
                    }]],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.slideRightBigIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        translateX: [0, 75],
                        translateZ: 0
                    }]]
                },
                "transition.slideRightBigOut": {
                    defaultDuration: 750,
                    calls: [[{
                        opacity: [0, 1],
                        translateX: 75,
                        translateZ: 0
                    }]],
                    reset: {
                        translateX: 0
                    }
                },
                "transition.perspectiveUpIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: [0, -180]
                    }]],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveUpOut": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: ["100%", "100%"],
                        rotateX: -180
                    }]],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateX: 0
                    }
                },
                "transition.perspectiveDownIn": {
                    defaultDuration: 800,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: [0, 180]
                    }]],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveDownOut": {
                    defaultDuration: 850,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [800, 800],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateX: 180
                    }]],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateX: 0
                    }
                },
                "transition.perspectiveLeftIn": {
                    defaultDuration: 950,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: [0, -180]
                    }]],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveLeftOut": {
                    defaultDuration: 950,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: [0, 0],
                        transformOriginY: [0, 0],
                        rotateY: -180
                    }]],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateY: 0
                    }
                },
                "transition.perspectiveRightIn": {
                    defaultDuration: 950,
                    calls: [[{
                        opacity: [1, 0],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: [0, 180]
                    }]],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%"
                    }
                },
                "transition.perspectiveRightOut": {
                    defaultDuration: 950,
                    calls: [[{
                        opacity: [0, 1],
                        transformPerspective: [2e3, 2e3],
                        transformOriginX: ["100%", "100%"],
                        transformOriginY: [0, 0],
                        rotateY: 180
                    }]],
                    reset: {
                        transformPerspective: 0,
                        transformOriginX: "50%",
                        transformOriginY: "50%",
                        rotateY: 0
                    }
                }
            };
            for (var l in a.RegisterEffect.packagedEffects)
                a.RegisterEffect.packagedEffects.hasOwnProperty(l) && a.RegisterEffect(l, a.RegisterEffect.packagedEffects[l]);
            a.RunSequence = function(t) {
                var e = o.extend(!0, [], t);
                e.length > 1 && (o.each(e.reverse(), function(t, n) {
                    var s = e[t + 1];
                    if (s) {
                        var r = n.o || n.options,
                            c = s.o || s.options,
                            i = r && !1 === r.sequenceQueue ? "begin" : "complete",
                            l = c && c[i],
                            p = {};
                        p[i] = function() {
                            var t = s.e || s.elements,
                                e = t.nodeType ? [t] : t;
                            l && l.call(e, e),
                            a(n)
                        },
                        s.o ? s.o = o.extend({}, c, p) : s.options = o.extend({}, c, p)
                    }
                }), e.reverse()),
                a(e[0])
            }
        }(window.jQuery || window.Zepto || window, window, window ? window.document : void 0)
    })
  }, function(t, e, n) {
    (function(t) {
        "use strict";
        "function" != typeof t.Promise && (t.Promise = n(14))
    }).call(e, function() {
        return this
    }())
  }, function(t, e, n) {
    "use strict";
    function s() {}
    function a(t) {
        if ("function" != typeof t)
            throw new TypeError("resolver must be a function");
        this.state = w,
        this.queue = [],
        this.outcome = void 0,
        t !== s && i(this, t)
    }
    function o(t, e, n) {
        this.promise = t,
        "function" == typeof e && (this.onFulfilled = e, this.callFulfilled = this.otherCallFulfilled),
        "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
    }
    function r(t, e, n) {
        f(function() {
            var s;
            try {
                s = e(n)
            } catch (e) {
                return v.reject(t, e)
            }
            s === t ? v.reject(t, new TypeError("Cannot resolve promise with itself")) : v.resolve(t, s)
        })
    }
    function c(t) {
        var e = t && t.then;
        if (t && ("object" == typeof t || "function" == typeof t) && "function" == typeof e)
            return function() {
                e.apply(t, arguments)
            }
    }
    function i(t, e) {
        function n(e) {
            o || (o = !0, v.reject(t, e))
        }
        function s(e) {
            o || (o = !0, v.resolve(t, e))
        }
        function a() {
            e(s, n)
        }
        var o = !1,
            r = l(a);
        "error" === r.status && n(r.value)
    }
    function l(t, e) {
        var n = {};
        try {
            n.value = t(e),
            n.status = "success"
        } catch (t) {
            n.status = "error",
            n.value = t
        }
        return n
    }
    function p(t) {
        return t instanceof this ? t : v.resolve(new this(s), t)
    }
    function u(t) {
        var e = new this(s);
        return v.reject(e, t)
    }
    function d(t) {
        function e(t, e) {
            function s(t) {
                r[e] = t,
                ++c !== a || o || (o = !0, v.resolve(l, r))
            }
            n.resolve(t).then(s, function(t) {
                o || (o = !0, v.reject(l, t))
            })
        }
        var n = this;
        if ("[object Array]" !== Object.prototype.toString.call(t))
            return this.reject(new TypeError("must be an array"));
        var a = t.length,
            o = !1;
        if (!a)
            return this.resolve([]);
        for (var r = new Array(a), c = 0, i = -1, l = new this(s); ++i < a;)
            e(t[i], i);
        return l
    }
    function h(t) {
        function e(t) {
            n.resolve(t).then(function(t) {
                o || (o = !0, v.resolve(c, t))
            }, function(t) {
                o || (o = !0, v.reject(c, t))
            })
        }
        var n = this;
        if ("[object Array]" !== Object.prototype.toString.call(t))
            return this.reject(new TypeError("must be an array"));
        var a = t.length,
            o = !1;
        if (!a)
            return this.resolve([]);
        for (var r = -1, c = new this(s); ++r < a;)
            e(t[r]);
        return c
    }
    var f = n(15),
        v = {},
        m = ["REJECTED"],
        g = ["FULFILLED"],
        w = ["PENDING"];
    t.exports = a,
    a.prototype.finally = function(t) {
        function e(e) {
            function n() {
                return e
            }
            return s.resolve(t()).then(n)
        }
        function n(e) {
            function n() {
                throw e
            }
            return s.resolve(t()).then(n)
        }
        if ("function" != typeof t)
            return this;
        var s = this.constructor;
        return this.then(e, n)
    },
    a.prototype.catch = function(t) {
        return this.then(null, t)
    },
    a.prototype.then = function(t, e) {
        if ("function" != typeof t && this.state === g || "function" != typeof e && this.state === m)
            return this;
        var n = new this.constructor(s);
        if (this.state !== w) {
            var a = this.state === g ? t : e;
            r(n, a, this.outcome)
        } else
            this.queue.push(new o(n, t, e));
        return n
    },
    o.prototype.callFulfilled = function(t) {
        v.resolve(this.promise, t)
    },
    o.prototype.otherCallFulfilled = function(t) {
        r(this.promise, this.onFulfilled, t)
    },
    o.prototype.callRejected = function(t) {
        v.reject(this.promise, t)
    },
    o.prototype.otherCallRejected = function(t) {
        r(this.promise, this.onRejected, t)
    },
    v.resolve = function(t, e) {
        var n = l(c, e);
        if ("error" === n.status)
            return v.reject(t, n.value);
        var s = n.value;
        if (s)
            i(t, s);
        else {
            t.state = g,
            t.outcome = e;
            for (var a = -1, o = t.queue.length; ++a < o;)
                t.queue[a].callFulfilled(e)
        }
        return t
    },
    v.reject = function(t, e) {
        t.state = m,
        t.outcome = e;
        for (var n = -1, s = t.queue.length; ++n < s;)
            t.queue[n].callRejected(e);
        return t
    },
    a.resolve = p,
    a.reject = u,
    a.all = d,
    a.race = h
  }, function(t, e) {
    (function(e) {
        "use strict";
        function n() {
            p = !0;
            for (var t, e, n = u.length; n;) {
                for (e = u, u = [], t = -1; ++t < n;)
                    e[t]();
                n = u.length
            }
            p = !1
        }
        function s(t) {
            1 !== u.push(t) || p || a()
        }
        var a,
            o = e.MutationObserver || e.WebKitMutationObserver;
        if (o) {
            var r = 0,
                c = new o(n),
                i = e.document.createTextNode("");
            c.observe(i, {
                characterData: !0
            }),
            a = function() {
                i.data = r = ++r % 2
            }
        } else if (e.setImmediate || "undefined" == typeof e.MessageChannel)
            a = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
                var t = e.document.createElement("script");
                t.onreadystatechange = function() {
                    n(),
                    t.onreadystatechange = null,
                    t.parentNode.removeChild(t),
                    t = null
                },
                e.document.documentElement.appendChild(t)
            } : function() {
                setTimeout(n, 0)
            };
        else {
            var l = new e.MessageChannel;
            l.port1.onmessage = n,
            a = function() {
                l.port2.postMessage(0)
            }
        }
        var p,
            u = [];
        t.exports = s
    }).call(e, function() {
        return this
    }())
  }, function(t, e, n) {
    var s;
    !function() {
        "use strict"; /**
             * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
             *
             * @codingstandard ftlabs-jsv2
             * @copyright The Financial Times Limited [All Rights Reserved]
             * @license MIT License (see LICENSE.txt)
             */
  
  
  
  
  
  
        function a(t, e) {
            function n(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var s;
            if (e = e || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = e.touchBoundary || 10, this.layer = t, this.tapDelay = e.tapDelay || 200, this.tapTimeout = e.tapTimeout || 700, !a.notNeeded(t)) {
                for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], c = this, i = 0, l = o.length; i < l; i++)
                    c[o[i]] = n(c[o[i]], c);
                r && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)),
                t.addEventListener("click", this.onClick, !0),
                t.addEventListener("touchstart", this.onTouchStart, !1),
                t.addEventListener("touchmove", this.onTouchMove, !1),
                t.addEventListener("touchend", this.onTouchEnd, !1),
                t.addEventListener("touchcancel", this.onTouchCancel, !1),
                Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, s) {
                    var a = Node.prototype.removeEventListener;
                    "click" === e ? a.call(t, e, n.hijacked || n, s) : a.call(t, e, n, s)
                }, t.addEventListener = function(e, n, s) {
                    var a = Node.prototype.addEventListener;
                    "click" === e ? a.call(t, e, n.hijacked || (n.hijacked = function(t) {
                        t.propagationStopped || n(t)
                    }), s) : a.call(t, e, n, s)
                }),
                "function" == typeof t.onclick && (s = t.onclick, t.addEventListener("click", function(t) {
                    s(t)
                }, !1), t.onclick = null)
            }
        }
        var o = navigator.userAgent.indexOf("Windows Phone") >= 0,
            r = navigator.userAgent.indexOf("Android") > 0 && !o,
            c = /iP(ad|hone|od)/.test(navigator.userAgent) && !o,
            i = c && /OS 4_\d(_\d)?/.test(navigator.userAgent),
            l = c && /OS [6-7]_\d/.test(navigator.userAgent),
            p = navigator.userAgent.indexOf("BB10") > 0;
        a.prototype.needsClick = function(t) {
            switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (t.disabled)
                    return !0;
                break;
            case "input":
                if (c && "file" === t.type || t.disabled)
                    return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
            }
            return /\bneedsclick\b/.test(t.className)
        },
        a.prototype.needsFocus = function(t) {
            switch (t.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !r;
            case "input":
                switch (t.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
            }
        },
        a.prototype.sendClick = function(t, e) {
            var n,
                s;
            document.activeElement && document.activeElement !== t && document.activeElement.blur(),
            s = e.changedTouches[0],
            n = document.createEvent("MouseEvents"),
            n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null),
            n.forwardedTouchEvent = !0,
            t.dispatchEvent(n)
        },
        a.prototype.determineEventType = function(t) {
            return r && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
        },
        a.prototype.focus = function(t) {
            var e;
            c && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
        },
        a.prototype.updateScrollParent = function(t) {
            var e,
                n;
            if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
                n = t;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        e = n,
                        t.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            e && (e.fastClickLastScrollTop = e.scrollTop)
        },
        a.prototype.getTargetElementFromEventTarget = function(t) {
            return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
        },
        a.prototype.onTouchStart = function(t) {
            var e,
                n,
                s;
            if (t.targetTouches.length > 1)
                return !0;
            if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], c) {
                if (s = window.getSelection(), s.rangeCount && !s.isCollapsed)
                    return !0;
                if (!i) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier)
                        return t.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier,
                    this.updateScrollParent(e)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
        },
        a.prototype.touchHasMoved = function(t) {
            var e = t.changedTouches[0],
                n = this.touchBoundary;
            return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
        },
        a.prototype.onTouchMove = function(t) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
        },
        a.prototype.findControl = function(t) {
            return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        },
        a.prototype.onTouchEnd = function(t) {
            var e,
                n,
                s,
                a,
                o,
                p = this.targetElement;
            if (!this.trackingClick)
                return !0;
            if (t.timeStamp - this.lastClickTime < this.tapDelay)
                return this.cancelNextClick = !0, !0;
            if (t.timeStamp - this.trackingClickStart > this.tapTimeout)
                return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, l && (o = t.changedTouches[0], p = document.elementFromPoint(o.pageX - window.pageXOffset, o.pageY - window.pageYOffset) || p, p.fastClickScrollParent = this.targetElement.fastClickScrollParent), s = p.tagName.toLowerCase(), "label" === s) {
                if (e = this.findControl(p)) {
                    if (this.focus(p), r)
                        return !1;
                    p = e
                }
            } else if (this.needsFocus(p))
                return t.timeStamp - n > 100 || c && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(p), this.sendClick(p, t), c && "select" === s || (this.targetElement = null, t.preventDefault()), !1);
            return !(!c || i || (a = p.fastClickScrollParent, !a || a.fastClickLastScrollTop === a.scrollTop)) || (this.needsClick(p) || (t.preventDefault(), this.sendClick(p, t)), !1)
        },
        a.prototype.onTouchCancel = function() {
            this.trackingClick = !1,
            this.targetElement = null
        },
        a.prototype.onMouse = function(t) {
            return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
        },
        a.prototype.onClick = function(t) {
            var e;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
        },
        a.prototype.destroy = function() {
            var t = this.layer;
            r && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)),
            t.removeEventListener("click", this.onClick, !0),
            t.removeEventListener("touchstart", this.onTouchStart, !1),
            t.removeEventListener("touchmove", this.onTouchMove, !1),
            t.removeEventListener("touchend", this.onTouchEnd, !1),
            t.removeEventListener("touchcancel", this.onTouchCancel, !1)
        },
        a.notNeeded = function(t) {
            var e,
                n,
                s,
                a;
            if ("undefined" == typeof window.ontouchstart)
                return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!r)
                    return !0;
                if (e = document.querySelector("meta[name=viewport]")) {
                    if (e.content.indexOf("user-scalable=no") !== -1)
                        return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                        return !0
                }
            }
            if (p && (s = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), s[1] >= 10 && s[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
                if (e.content.indexOf("user-scalable=no") !== -1)
                    return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
            return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (a = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(a >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
        },
        a.attach = function(t, e) {
            return new a(t, e)
        },
        s = function() {
            return a
        }.call(e, n, e, t),
        !(void 0 !== s && (t.exports = s))
    }()
  }, function(t, e) {}, , 17, 17, 17, function(t, e, n) {
    (function(e) {
        function n(t) {
            t = t || window.event,
            t.preventDefault && t.preventDefault(),
            t.returnValue = !1
        }
        function s(t) {
            if (o[t.keyCode])
                return n(t), !1
        }
        var a,
            o = {
                37: 1,
                38: 1,
                39: 1,
                40: 1
            };
        t.exports = {
            enableScroll: function() {
                window.removeEventListener && window.removeEventListener("DOMMouseScroll", n, !1),
                window.onmousewheel = document.onmousewheel = null,
                window.onwheel = null,
                window.ontouchmove = null,
                document.onkeydown = null
            },
            disableScroll: function() {
                window.addEventListener && window.addEventListener("DOMMouseScroll", n, !1),
                window.onwheel = n,
                window.onmousewheel = document.onmousewheel = n,
                window.ontouchmove = n,
                document.onkeydown = s
            },
            getTransitionDuration: function(t, n) {
                var s,
                    a = window.getComputedStyle(t, null),
                    o = a.getPropertyValue("-webkit-transition-property") || a.getPropertyValue("transition-property"),
                    r = a.getPropertyValue("-webkit-transition-duration") || a.getPropertyValue("transition-duration");
                if (!r || "none" == r)
                    return 0;
                var c = o.split(","),
                    i = r.split(",");
                for (n = n.toLowerCase(), s = 0; s < c.length; s++) {
                    var l = c[s].toLowerCase();
                    if (l.indexOf(n) != -1 || "all" == e.trim(l))
                        return 1e3 * parseFloat(i[s]) || 0
                }
                return 0
            },
            waitForTransitionEnd: function(t, n, s, a) {
                var o = {
                        transition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        msTransition: "MSTransitionEnd"
                    },
                    r = function() {
                        if (!window.getComputedStyle || !document.documentElement)
                            return "transitionend";
                        var t = window.getComputedStyle(document.documentElement, "");
                        for (var e in o)
                            if (void 0 != t[e])
                                return o[e];
                        return "transitionend"
                    },
                    c = r(),
                    i = function(a) {
                        if (a) {
                            var o = a.originalEvent.propertyName.toLowerCase();
                            if (!e(a.target).is(t))
                                return;
                            if (o.indexOf(n) == -1)
                                return
                        }
                        t.off(c, i),
                        clearTimeout(p),
                        s()
                    },
                    l = function() {
                        t.off(c, i),
                        clearTimeout(p)
                    };
                t.on(c, i);
                var p = setTimeout(i, void 0 == a ? this.getTransitionDuration(t[0], n) + 100 : a);
                return l
            },
            getScrollbarWidth: function() {
                if (void 0 != a)
                    return a;
                var t = document.createElement("div");
                t.style.visibility = "hidden",
                t.style.width = "100px",
                t.style.msOverflowStyle = "scrollbar",
                document.body.appendChild(t);
                var e = t.offsetWidth;
                t.style.overflow = "scroll";
                var n = document.createElement("div");
                n.style.width = "100%",
                t.appendChild(n);
                var s = n.offsetWidth;
                return t.parentNode.removeChild(t), a = e - s
            },
            createEmptyPromise: function() {
                return new Promise(function(t) {
                    t()
                })
            },
            pad: function(t, e, n) {
                return n = n || "0", t += "", t.length >= e ? t : new Array(e - t.length + 1).join(n) + t
            },
            isElementInViewport: function(t) {
                "function" == typeof jQuery && t instanceof jQuery && (t = t[0]);
                var e = t.getBoundingClientRect();
                return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
            },
            animateRolling: function(t) {
                function n() {
                    t.withOpacity && t.$item.css({
                        opacity: "in" == t.tp ? 1 : 0
                    }),
                    t.$item.css({
                        clip: o,
                        transition: t.duration + "ms clip ease-in-out" + (t.withOpacity ? ", " + t.withOpacity + "ms opacity ease-in-out" : "")
                    }),
                    t.$item.attr("data-rolling-animating", "1");
                    var n = function(n) {
                        n && !e(n.target).is(t.$item) || n && "clip" != n.originalEvent.propertyName.toLowerCase() || (t.$item.attr("data-rolling-animating", "0"), t.withOpacity && t.$item.css({
                            opacity: ""
                        }), t.$item.css({
                            clip: "",
                            transition: ""
                        }), "out" == t.tp && (t.visibleClass ? t.$item.removeClass(t.visibleClass) : t.$item.css({
                            display: "none"
                        })), t.$item.off("transitionend.clip-transition"), t.cb && t.cb())
                    };
                    t.duration ? t.$item.on("transitionend.clip-transition", n) : n()
                }
                t.visibleClass ? t.$item.addClass(t.visibleClass) : t.$item.css({
                    display: "block"
                });
                var s,
                    a,
                    o,
                    r = t.$item.outerWidth(),
                    c = t.$item.outerHeight(),
                    i = "rect(0px, " + r + "px, " + c + "px, 0px)";
                "in" == t.tp && ("toright" == t.direction && (s = "rect(0px, 0px, " + c + "px, 0px)"), "toleft" == t.direction && (s = "rect(0px, " + r + "px, " + c + "px, " + r + "px)"), "tobottom" == t.direction && (s = "rect(0px, " + r + "px, 0px, 0px)"), "totop" == t.direction && (s = "rect(" + c + "px, " + r + "px, " + c + "px, 0px)")),
                "out" == t.tp && ("toleft" == t.direction && (s = "rect(0px, 0px, " + c + "px, 0px)"), "toright" == t.direction && (s = "rect(0px, " + r + "px, " + c + "px, " + r + "px)"), "totop" == t.direction && (s = "rect(0px, " + r + "px, 0px, 0px)"), "tobottom" == t.direction && (s = "rect(" + c + "px, " + r + "px, " + c + "px, 0px)")),
                t.fromRect && (s = t.fromRect),
                "in" == t.tp && (a = s, o = i),
                "out" == t.tp && (a = i, o = s),
                "1" == t.$item.attr("data-rolling-animating") ? (t.$item.off("transitionend.clip-transition"), clearTimeout(t.$item.attr("rolling-show-timeout"))) : (t.withOpacity && t.$item.css({
                    opacity: "in" == t.tp ? 0 : 1
                }), t.$item.css({
                    clip: a,
                    transition: ""
                }).outerHeight()),
                "in" == t.tp && t.duration ? t.$item.attr("rolling-show-timeout", setTimeout(n, 17)) : n()
            },
            upperExcludeFirst: function(t) {
                return t.length > 2 && " " == t[1] ? t.substring(0, 2) + t.substring(2).toUpperCase() : t.toUpperCase()
            }
        }
    }).call(e, n(4))
  }, function(t, e) {
    t.exports = {
        initialize: function() {
            var t = this.isHighDensity();
            if (t) {
                window.app.isRetina = !0;
                var e = document.querySelector("html");
                e.className = e.className + " isRetina"
            }
        },
        isHighDensity: function() {
            return window.matchMedia && (window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches) || window.devicePixelRatio && window.devicePixelRatio > 1.3
        }
    }
  }, function(t, e, n) {
    (function(e) {
        var s = n(5),
            a = n(6),
            o = n(25),
            r = n(34),
            c = n(36),
            i = n(51),
            l = n(64),
            p = n(69),
            u = n(73),
            d = n(78),
            h = n(81),
            f = 500;
        t.exports = s.Router.extend({
            routes: {
                "": "index",
                "news(/)": "newsList",
                "news/:url(/)": "news",
                "work(/)": "projectsList",
                "work/:url(/)": "project",
                "info(/)": "info",
                "info/work/:url(/)": "infoProject",
                "info/news/:url(/)": "infoNews",
                "404(/)": "custom_404"
            },
            initialize: function() {
                this.loadShantelleImage()
            },
            loadShantelleImage: function() {
                function t() {
                    if (a++, 2 == a) {
                        o.width = n.naturalWidth,
                        o.height = n.naturalHeight;
                        var t = o.getContext("2d");
                        t.globalCompositeOperation = "source-over",
                        t.drawImage(s, 0, 0),
                        t.globalCompositeOperation = "source-in",
                        t.drawImage(n, 0, 0),
                        app.els.$shantelle.find("canvas, a").css("display", "").end().find(".ShantelleImageThumb").remove(),
                        n.onload = null,
                        s.onload = null
                    }
                }
                if (app.els.$shantelle = e(".ShantelleImage"), !app.settings.isMobile) {
                    var n = new Image,
                        s = new Image,
                        a = 0;
                    n.onload = t,
                    n.src = app.settings.isDesktop ? "media/shantelle.jpg" : "media/shantelle_small.jpg",
                    s.onload = t,
                    s.src = app.settings.isDesktop ? "media/mask24.png" : "media/mask24_small.png";
                    var o = app.els.$shantelle.find("canvas")[0]
                }
            },
            index: function() {
                this.activate(c, {
                    footerLink: "index"
                })
            },
            info: function() {
                this.activate(i, {
                    view: r,
                    viewData: {},
                    footerLink: "info"
                })
            },
            infoProject: function(t) {
                this.activate(i, {
                    view: u,
                    viewData: {
                        url: t,
                        referrer: "info"
                    },
                    footerLink: "info"
                })
            },
            infoNews: function(t) {
                this.activate(i, {
                    view: l,
                    viewData: {
                        url: t,
                        referrer: "info"
                    },
                    footerLink: "info"
                })
            },
            newsList: function() {
                this.activate(p, {
                    view: r,
                    viewData: {},
                    footerLink: "news"
                })
            },
            news: function(t) {
                this.activate(p, {
                    view: l,
                    viewData: {
                        url: t
                    },
                    footerLink: "news"
                })
            },
            projectsList: function() {
                this.activate(d, {
                    view: r,
                    viewData: {},
                    footerLink: "projects"
                })
            },
            project: function(t) {
                this.activate(d, {
                    view: u,
                    viewData: {
                        url: t,
                        referrer: "projects"
                    },
                    footerLink: "projects"
                })
            },
            custom_404: function() {
                this.activate(h)
            },
            activate: function(t, e) {
                return e = e || {}, app.views.footer.setActive(e.footerLink || ""), app.state.view ? (e.fastNavigate = window.app.fastNavigate, window.app.fastNavigate = !1, e.zoomNavigate = window.app.zoomNavigate, window.app.zoomNavigate = !1, app.state.prevView = app.state.view, void (this.isSectionLogic(app.state.prevView, t, e) ? this.activateSectionLogic(e) : this.activateStandardLogic(t, e))) : (e.server = !0, e.inAnimated = !1, app.state.view = new t(e), app.els.$shantelle.attr("data-state", app.state.view.SHANTELLE_PARAMS ? app.state.view.SHANTELLE_PARAMS.state : "none"), void app.state.view.activate())
            },
            activateStandardLogic: function(t, n) {
                var s = a.defaults({
                        server: !1,
                        inAnimated: !0
                    }, n),
                    o = new t(s),
                    r = n.fastNavigate ? 0 : f;
                return Promise.all([app.state.view.playOut({
                    duration: r,
                    zoom: n.zoomNavigate,
                    view: o
                }), o.loadData()]).then(function() {
                    return app.els.$content.css({
                        minHeight: app.els.$content.height()
                    }), app.state.view.deactivate({
                        destroy: !0
                    })
                }).then(function() {
                    app.state.isServer = !1,
                    app.state.view = o,
                    app.state.view.activate(s).then(function() {
                        app.els.$content.css({
                            minHeight: ""
                        }),
                        e(window).scrollTop(0);
                        var t = app.els.$shantelle.css("opacity");
                        return app.els.$shantelle.removeAttr("style").attr("data-state", o.SHANTELLE_PARAMS ? o.SHANTELLE_PARAMS.state : "none").css("opacity", t), app.state.view.playIn({
                            duration: r,
                            zoom: n.zoomNavigate,
                            view: o
                        })
                    })
                })
            },
            activateSectionLogic: function(t) {
                var e = t.view,
                    n = a.omit(t, "view");
                n.server = !1,
                n.inAnimated = !0,
                app.state.view.update(e, n),
                app.state.isServer = !1
            },
            isSectionLogic: function(t, e, n) {
                return app.state.prevView instanceof o && app.state.prevView.constructor === e
            },
            start: function() {
                var t = app.els.$body.hasClass("Custom404Page"),
                    e = history && a.isFunction(history.pushState);
                s.history.start({
                    pushState: e,
                    silent: t
                }),
                t && this.custom_404()
            }
        })
    }).call(e, n(4))
  }, function(t, e, n) {
    var s = n(6),
        a = n(26);
    n(28);
    var o = n(29),
        r = (n(22), n(34), 500);
    t.exports = a.extend({
        template: o,
        collapseSubviewUpdatePlayInOut: !0,
        initialize: function(t) {
            a.prototype.initialize.call(this, t);
            var e = this.options.view;
            this.registerView("view", new e(s.defaults(this.options.viewData, {
                inAnimated: !1,
                server: this.options.server
            }))),
            this.$content = this.$(".Section-content")
        },
        render: function() {
            var t = a.prototype.render.call(this);
            return this.$content = this.$(".Section-content"), t
        },
        viewsRegistration: function() {},
        activate: function() {
            return a.prototype.activate.call(this)
        },
        update: function(t, e) {
            var n = this.getView("view");
            this.options.viewData = e.viewData;
            var a = new t(s.defaults(this.options.viewData, {
                inAnimated: !0,
                server: !1
            }));
            this.registerView("view", a);
            var o = e.fastNavigate ? 0 : r;
            this.collapseSubviewUpdatePlayInOut ? this.loadData().then(function() {
                return a.activate()
            }).then(function() {
                return Promise.all([n.playOut({
                    duration: o,
                    zoom: e.zoomNavigate,
                    view: a
                }), a.playIn({
                    duration: o,
                    zoom: e.zoomNavigate,
                    view: a
                })])
            }).then(function() {
                return n.deactivate({
                    destroy: !0
                })
            }) : Promise.all([n.playOut({
                duration: o,
                zoom: e.zoomNavigate,
                view: a
            }), this.loadData()]).then(function() {
                return n.deactivate({
                    destroy: !0
                })
            }).then(function() {
                return a.activate()
            }).then(function() {
                return a.playIn({
                    duration: o,
                    zoom: e.zoomNavigate,
                    view: a
                })
            })
        },
        deactivate: function(t) {
            return a.prototype.deactivate.call(this, t)
        },
        loadData: function() {
            return Promise.all([a.prototype.loadData.call(this), this.getView("view").loadData()])
        }
    })
  }, function(t, e, n) {
    (function(e) {
        var s = (n(6), n(27));
        n(22);
        t.exports = s.extend({
            type: "",
            title: void 0,
            setTitle: function(t) {
                t = t || this.title,
                void 0 !== t && (document.title = "Shantell Martin" + (t ? e("<div> — " + t + "</div>").text() : ""))
            },
            $parent: function() {
                return app.els.$content
            },
            activate: function(t) {
                return this.setTitle(), s.prototype.activate.call(this, t)
            }
        })
    }).call(e, n(4))
  }, function(t, e, n) {
    (function(e) {
        var s = n(5),
            a = n(6),
            o = n(22);
        t.exports = s.View.extend(a.extend({}, s.Events, {
            initialize: function(t) {
                this.options = t || {},
                this.views = {},
                this.options.server === !1 && this.setElement(e(""))
            },
            isRendered: function() {
                return !!this.$el.length
            },
            $parent: function() {
                return null
            },
            attach: function() {
                var t = this.$parent();
                t && t.append(this.$el)
            },
            renderData: function() {
                return this.data || {}
            },
            render: function() {
                var t = this.renderData();
                t.viewOptions = this.options;
                var n = e(this.template.render(t));
                return this.setElement(n), this.attach(), this
            },
            activate: function() {
                var t = this;
                return this.loadData().then(function() {
                    t.isRendered() && 0 != t.$el.parents("html").length || t.render(),
                    t.viewsRegistration()
                }).then(function() {
                    var e = o.createEmptyPromise();
                    return t.views && (e = Promise.all(a.map(t.views, function(t) {
                        return t.activate()
                    }))), e
                })
            },
            deactivate: function(t) {
                var e = o.createEmptyPromise();
                this.views && (e = Promise.all(a.map(this.views, function(e) {
                    return e.deactivate(t)
                })));
                var n = this;
                return e.then(function() {
                    t.destroy && n.destroy()
                })
            },
            destroy: function() {
                this.undelegateEvents(),
                this.$el.removeData().unbind(),
                this.remove()
            },
            viewsRegistration: function() {},
            registerView: function(t, e) {
                return e.parent = this, this.views[t] = e, e
            },
            addView: function(t) {
                this.views.push(t)
            },
            getView: function(t) {
                return this.views[t]
            },
            destroyView: function(t) {
                this.views[t].destroy(),
                delete this.views[t]
            },
            forceLoadData: function(t) {
                var n = this;
                if (t = t || this.apiUrl) {
                    var s = a.isFunction(t) ? t() : t;
                    return Promise.resolve(e.getJSON(s).then(function(t) {
                        n.data = t
                    }).fail(function() {
                        console.log("Ошибка при загрузке данных.")
                    }))
                }
                return o.createEmptyPromise()
            },
            loadData: function() {
                return this.data ? o.createEmptyPromise() : this.disableCache ? this.forceLoadData(this.apiUrl) : void 0 !== window.app.cache[this.apiUrl] ? (this.data = window.app.cache[this.apiUrl], o.createEmptyPromise()) : this.forceLoadData(this.apiUrl).then(function() {
                    window.app.cache[this.apiUrl] = this.data
                }.bind(this))
            },
            playIn: function() {
                return o.createEmptyPromise()
            },
            playOut: function() {
                return o.createEmptyPromise()
            }
        }))
    }).call(e, n(4))
  }, 17, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/Base.jinja"] = n(32);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Section/Section.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/Base.jinja", !0, "assets/app/front/pages/Section/Section.jinja", !1, function(o, r) {
                        if (o)
                            return void a(o);
                        i = r;
                        for (var l in i.blocks)
                            e.addBlock(l, i.blocks[l]);
                        c += "\n\n",
                        (i ? function(t, e, n, s, a) {
                            a("")
                        } : e.getBlock("content"))(t, e, n, s, function(o, r) {
                            return o ? void a(o) : (c += r, c += "\n", void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function e(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += '\n    <div class="Section">\n        <div class="Section-content">\n            ',
                    e.getBlock("section_content")(t, e, n, s, function(t, e) {
                        return t ? void a(t) : (c += e, c += "\n        </div>\n    </div>\n", void a(null, c))
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function n(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += "\n            ",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                b_content: e,
                b_section_content: n,
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Section/Section.jinja"], o)
  }, function(t, e, n) {
    /*! Browser bundle of nunjucks 2.5.2 (slim, only works with precompiled templates) */
    !function(e, n) {
        t.exports = n()
    }(this, function() {
        return function(t) {
            function e(s) {
                if (n[s])
                    return n[s].exports;
                var a = n[s] = {
                    exports: {},
                    id: s,
                    loaded: !1
                };
                return t[s].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
            }
            var n = {};
            return e.m = t, e.c = n, e.p = "", e(0)
        }([function(t, e, n) {
            "use strict";
            var s = n(1),
                a = n(2),
                o = n(11),
                r = n(3),
                c = n(3);
            t.exports = {},
            t.exports.Environment = a.Environment,
            t.exports.Template = a.Template,
            t.exports.Loader = o,
            t.exports.FileSystemLoader = r.FileSystemLoader,
            t.exports.PrecompiledLoader = r.PrecompiledLoader,
            t.exports.WebLoader = r.WebLoader,
            t.exports.compiler = n(3),
            t.exports.parser = n(3),
            t.exports.lexer = n(3),
            t.exports.runtime = n(8),
            t.exports.lib = s,
            t.exports.nodes = n(3),
            t.exports.installJinjaCompat = n(12);
            var i;
            t.exports.configure = function(t, e) {
                e = e || {},
                s.isObject(t) && (e = t, t = null);
                var n;
                return r.FileSystemLoader ? n = new r.FileSystemLoader(t, {
                    watch: e.watch,
                    noCache: e.noCache
                }) : r.WebLoader && (n = new r.WebLoader(t, {
                    useCache: e.web && e.web.useCache,
                    async: e.web && e.web.async
                })), i = new a.Environment(n, e), e && e.express && i.express(e.express), i
            },
            t.exports.compile = function(e, n, s, a) {
                return i || t.exports.configure(), new t.exports.Template(e, n, s, a)
            },
            t.exports.render = function(e, n, s) {
                return i || t.exports.configure(), i.render(e, n, s)
            },
            t.exports.renderString = function(e, n, s) {
                return i || t.exports.configure(), i.renderString(e, n, s)
            },
            c && (t.exports.precompile = c.precompile, t.exports.precompileString = c.precompileString)
        }, function(t, e) {
            "use strict";
            var n = Array.prototype,
                s = Object.prototype,
                a = {
                    "&": "&amp;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "<": "&lt;",
                    ">": "&gt;"
                },
                o = /[&"'<>]/g,
                r = function(t) {
                    return a[t]
                },
                e = t.exports = {};
            e.prettifyError = function(t, n, s) {
                if (s.Update || (s = new e.TemplateError(s)), s.Update(t), !n) {
                    var a = s;
                    s = new Error(a.message),
                    s.name = a.name
                }
                return s
            },
            e.TemplateError = function(t, e, n) {
                var s = this;
                if (t instanceof Error) {
                    s = t,
                    t = t.name + ": " + t.message;
                    try {
                        s.name = ""
                    } catch (t) {
                        s = this
                    }
                } else
                    Error.captureStackTrace && Error.captureStackTrace(s);
                return s.name = "Template render error", s.message = t, s.lineno = e, s.colno = n, s.firstUpdate = !0, s.Update = function(t) {
                    var e = "(" + (t || "unknown path") + ")";
                    return this.firstUpdate && (this.lineno && this.colno ? e += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (e += " [Line " + this.lineno + "]")), e += "\n ", this.firstUpdate && (e += " "), this.message = e + (this.message || ""), this.firstUpdate = !1, this
                }, s
            },
            e.TemplateError.prototype = Error.prototype,
            e.escape = function(t) {
                return t.replace(o, r)
            },
            e.isFunction = function(t) {
                return "[object Function]" === s.toString.call(t)
            },
            e.isArray = Array.isArray || function(t) {
                return "[object Array]" === s.toString.call(t)
            },
            e.isString = function(t) {
                return "[object String]" === s.toString.call(t)
            },
            e.isObject = function(t) {
                return "[object Object]" === s.toString.call(t)
            },
            e.groupBy = function(t, n) {
                for (var s = {}, a = e.isFunction(n) ? n : function(t) {
                        return t[n]
                    }, o = 0; o < t.length; o++) {
                    var r = t[o],
                        c = a(r, o);
                    (s[c] || (s[c] = [])).push(r)
                }
                return s
            },
            e.toArray = function(t) {
                return Array.prototype.slice.call(t)
            },
            e.without = function(t) {
                var n = [];
                if (!t)
                    return n;
                for (var s = -1, a = t.length, o = e.toArray(arguments).slice(1); ++s < a;)
                    e.indexOf(o, t[s]) === -1 && n.push(t[s]);
                return n
            },
            e.extend = function(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            },
            e.repeat = function(t, e) {
                for (var n = "", s = 0; s < e; s++)
                    n += t;
                return n
            },
            e.each = function(t, e, s) {
                if (null != t)
                    if (n.each && t.each === n.each)
                        t.forEach(e, s);
                    else if (t.length === +t.length)
                        for (var a = 0, o = t.length; a < o; a++)
                            e.call(s, t[a], a, t)
            },
            e.map = function(t, e) {
                var s = [];
                if (null == t)
                    return s;
                if (n.map && t.map === n.map)
                    return t.map(e);
                for (var a = 0; a < t.length; a++)
                    s[s.length] = e(t[a], a);
                return t.length === +t.length && (s.length = t.length), s
            },
            e.asyncIter = function(t, e, n) {
                function s() {
                    a++,
                    a < t.length ? e(t[a], a, s, n) : n()
                }
                var a = -1;
                s()
            },
            e.asyncFor = function(t, n, s) {
                function a() {
                    c++;
                    var e = o[c];
                    c < r ? n(e, t[e], c, r, a) : s()
                }
                var o = e.keys(t),
                    r = o.length,
                    c = -1;
                a()
            },
            e.indexOf = Array.prototype.indexOf ? function(t, e, n) {
                return Array.prototype.indexOf.call(t, e, n)
            } : function(t, e, n) {
                var s = this.length >>> 0;
                for (n = +n || 0, Math.abs(n) === 1 / 0 && (n = 0), n < 0 && (n += s, n < 0 && (n = 0)); n < s; n++)
                    if (t[n] === e)
                        return n;
                return -1
            },
            Array.prototype.map || (Array.prototype.map = function() {
                throw new Error("map is unimplemented for this js engine")
            }),
            e.keys = function(t) {
                if (Object.prototype.keys)
                    return t.keys();
                var e = [];
                for (var n in t)
                    t.hasOwnProperty(n) && e.push(n);
                return e
            },
            e.inOperator = function(t, n) {
                if (e.isArray(n))
                    return e.indexOf(n, t) !== -1;
                if (e.isObject(n))
                    return t in n;
                if (e.isString(n))
                    return n.indexOf(t) !== -1;
                throw new Error('Cannot use "in" operator to search for "' + t + '" in unexpected types.')
            }
        }, function(t, e, n) {
            "use strict";
            function s(t, e, n) {
                r(function() {
                    t(e, n)
                })
            }
            var a,
                o = n(3),
                r = n(4),
                c = n(1),
                i = n(6),
                l = n(3),
                p = n(7),
                u = n(3),
                d = n(8),
                h = n(9),
                f = d.Frame;
            u.PrecompiledLoader = n(10);
            var v = i.extend({
                    init: function(t, e) {
                        e = this.opts = e || {},
                        this.opts.dev = !!e.dev,
                        this.opts.autoescape = null == e.autoescape || e.autoescape,
                        this.opts.throwOnUndefined = !!e.throwOnUndefined,
                        this.opts.trimBlocks = !!e.trimBlocks,
                        this.opts.lstripBlocks = !!e.lstripBlocks,
                        this.loaders = [],
                        t ? this.loaders = c.isArray(t) ? t : [t] : u.FileSystemLoader ? this.loaders = [new u.FileSystemLoader("views")] : u.WebLoader && (this.loaders = [new u.WebLoader("/views")]),
                        window.nunjucksPrecompiled && this.loaders.unshift(new u.PrecompiledLoader(window.nunjucksPrecompiled)),
                        this.initCache(),
                        this.globals = h(),
                        this.filters = {},
                        this.asyncFilters = [],
                        this.extensions = {},
                        this.extensionsList = [];
                        for (var n in p)
                            this.addFilter(n, p[n])
                    },
                    initCache: function() {
                        c.each(this.loaders, function(t) {
                            t.cache = {},
                            "function" == typeof t.on && t.on("update", function(e) {
                                t.cache[e] = null
                            })
                        })
                    },
                    addExtension: function(t, e) {
                        return e._name = t, this.extensions[t] = e, this.extensionsList.push(e), this
                    },
                    removeExtension: function(t) {
                        var e = this.getExtension(t);
                        e && (this.extensionsList = c.without(this.extensionsList, e), delete this.extensions[t])
                    },
                    getExtension: function(t) {
                        return this.extensions[t]
                    },
                    hasExtension: function(t) {
                        return !!this.extensions[t]
                    },
                    addGlobal: function(t, e) {
                        return this.globals[t] = e, this
                    },
                    getGlobal: function(t) {
                        if ("undefined" == typeof this.globals[t])
                            throw new Error("global not found: " + t);
                        return this.globals[t]
                    },
                    addFilter: function(t, e, n) {
                        var s = e;
                        return n && this.asyncFilters.push(t), this.filters[t] = s, this
                    },
                    getFilter: function(t) {
                        if (!this.filters[t])
                            throw new Error("filter not found: " + t);
                        return this.filters[t]
                    },
                    resolveTemplate: function(t, e, n) {
                        var s = !(!t.isRelative || !e) && t.isRelative(n);
                        return s && t.resolve ? t.resolve(e, n) : n
                    },
                    getTemplate: function(t, e, n, s, o) {
                        var r = this,
                            i = null;
                        if (t && t.raw && (t = t.raw), c.isFunction(n) && (o = n, n = null, e = e || !1), c.isFunction(e) && (o = e, e = !1), t instanceof a)
                            i = t;
                        else {
                            if ("string" != typeof t)
                                throw new Error("template names must be a string: " + t);
                            for (var l = 0; l < this.loaders.length; l++) {
                                var p = this.resolveTemplate(this.loaders[l], n, t);
                                if (i = this.loaders[l].cache[p])
                                    break
                            }
                        }
                        if (!i) {
                            var u,
                                d = this,
                                h = function(n, r) {
                                    if (r || n || s || (n = new Error("template not found: " + t)), n) {
                                        if (!o)
                                            throw n;
                                        o(n)
                                    } else {
                                        var c;
                                        r ? (c = new a(r.src, d, r.path, e), r.noCache || (r.loader.cache[t] = c)) : c = new a("", d, "", e),
                                        o ? o(null, c) : u = c
                                    }
                                };
                            return c.asyncIter(this.loaders, function(e, s, a, o) {
                                function c(t, n) {
                                    t ? o(t) : n ? (n.loader = e, o(null, n)) : a()
                                }
                                t = r.resolveTemplate(e, n, t),
                                e.async ? e.getSource(t, c) : c(null, e.getSource(t))
                            }, h), u
                        }
                        return e && i.compile(), o ? void o(null, i) : i
                    },
                    express: function(t) {
                        function e(t, e) {
                            if (this.name = t, this.path = t, this.defaultEngine = e.defaultEngine, this.ext = o.extname(t), !this.ext && !this.defaultEngine)
                                throw new Error("No default engine was specified and no extension was provided.");
                            this.ext || (this.name += this.ext = ("." !== this.defaultEngine[0] ? "." : "") + this.defaultEngine)
                        }
                        var n = this;
                        return e.prototype.render = function(t, e) {
                            n.render(this.name, t, e)
                        }, t.set("view", e), t.set("nunjucksEnv", this), this
                    },
                    render: function(t, e, n) {
                        c.isFunction(e) && (n = e, e = null);
                        var a = null;
                        return this.getTemplate(t, function(t, o) {
                            if (t && n)
                                s(n, t);
                            else {
                                if (t)
                                    throw t;
                                a = o.render(e, n)
                            }
                        }), a
                    },
                    renderString: function(t, e, n, s) {
                        c.isFunction(n) && (s = n, n = {}),
                        n = n || {};
                        var o = new a(t, this, n.path);
                        return o.render(e, s)
                    }
                }),
                m = i.extend({
                    init: function(t, e, n) {
                        this.env = n || new v,
                        this.ctx = {};
                        for (var s in t)
                            t.hasOwnProperty(s) && (this.ctx[s] = t[s]);
                        this.blocks = {},
                        this.exported = [];
                        for (var a in e)
                            this.addBlock(a, e[a])
                    },
                    lookup: function(t) {
                        return t in this.env.globals && !(t in this.ctx) ? this.env.globals[t] : this.ctx[t]
                    },
                    setVariable: function(t, e) {
                        this.ctx[t] = e
                    },
                    getVariables: function() {
                        return this.ctx
                    },
                    addBlock: function(t, e) {
                        return this.blocks[t] = this.blocks[t] || [], this.blocks[t].push(e), this
                    },
                    getBlock: function(t) {
                        if (!this.blocks[t])
                            throw new Error('unknown block "' + t + '"');
                        return this.blocks[t][0]
                    },
                    getSuper: function(t, e, n, s, a, o) {
                        var r = c.indexOf(this.blocks[e] || [], n),
                            i = this.blocks[e][r + 1],
                            l = this;
                        if (r === -1 || !i)
                            throw new Error('no super block available for "' + e + '"');
                        i(t, l, s, a, o)
                    },
                    addExport: function(t) {
                        this.exported.push(t)
                    },
                    getExported: function() {
                        for (var t = {}, e = 0; e < this.exported.length; e++) {
                            var n = this.exported[e];
                            t[n] = this.ctx[n]
                        }
                        return t
                    }
                });
            a = i.extend({
                init: function(t, e, n, s) {
                    if (this.env = e || new v, c.isObject(t))
                        switch (t.type) {
                        case "code":
                            this.tmplProps = t.obj;
                            break;
                        case "string":
                            this.tmplStr = t.obj
                        }
                    else {
                        if (!c.isString(t))
                            throw new Error("src must be a string or an object describing the source");
                        this.tmplStr = t
                    }
                    if (this.path = n, s) {
                        var a = this;
                        try {
                            a._compile()
                        } catch (t) {
                            throw c.prettifyError(this.path, this.env.opts.dev, t)
                        }
                    } else
                        this.compiled = !1
                },
                render: function(t, e, n) {
                    "function" == typeof t ? (n = t, t = {}) : "function" == typeof e && (n = e, e = null);
                    var a = !0;
                    e && (a = !1);
                    var o = this;
                    try {
                        o.compile()
                    } catch (t) {
                        var r = c.prettifyError(this.path, this.env.opts.dev, t);
                        if (n)
                            return s(n, r);
                        throw r
                    }
                    var i = new m(t || {}, o.blocks, o.env),
                        l = e ? e.push(!0) : new f;
                    l.topLevel = !0;
                    var p = null;
                    return o.rootRenderFunc(o.env, i, l || new f, d, function(t, e) {
                        if (t && (t = c.prettifyError(o.path, o.env.opts.dev, t)), n)
                            a ? s(n, t, e) : n(t, e);
                        else {
                            if (t)
                                throw t;
                            p = e
                        }
                    }), p
                },
                getExported: function(t, e, n) {
                    "function" == typeof t && (n = t, t = {}),
                    "function" == typeof e && (n = e, e = null);
                    try {
                        this.compile()
                    } catch (t) {
                        if (n)
                            return n(t);
                        throw t
                    }
                    var s = e ? e.push() : new f;
                    s.topLevel = !0;
                    var a = new m(t || {}, this.blocks, this.env);
                    this.rootRenderFunc(this.env, a, s, d, function(t) {
                        t ? n(t, null) : n(null, a.getExported())
                    })
                },
                compile: function() {
                    this.compiled || this._compile()
                },
                _compile: function() {
                    var t;
                    if (this.tmplProps)
                        t = this.tmplProps;
                    else {
                        var e = l.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts),
                            n = new Function(e);
                        t = n()
                    }
                    this.blocks = this._getBlocks(t),
                    this.rootRenderFunc = t.root,
                    this.compiled = !0
                },
                _getBlocks: function(t) {
                    var e = {};
                    for (var n in t)
                        "b_" === n.slice(0, 2) && (e[n.slice(2)] = t[n]);
                    return e
                }
            }),
            t.exports = {
                Environment: v,
                Template: a
            }
        }, function(t, e) {}, function(t, e, n) {
            "use strict";
            function s() {
                if (i.length)
                    throw i.shift()
            }
            function a(t) {
                var e;
                e = c.length ? c.pop() : new o,
                e.task = t,
                r(e)
            }
            function o() {
                this.task = null
            }
            var r = n(5),
                c = [],
                i = [],
                l = r.makeRequestCallFromTimer(s);
            t.exports = a,
            o.prototype.call = function() {
                try {
                    this.task.call()
                } catch (t) {
                    a.onerror ? a.onerror(t) : (i.push(t), l())
                } finally {
                    this.task = null,
                    c[c.length] = this
                }
            }
        }, function(t, e) {
            (function(e) {
                "use strict";
                function n(t) {
                    c.length || (r(), i = !0),
                    c[c.length] = t
                }
                function s() {
                    for (; l < c.length;) {
                        var t = l;
                        if (l += 1, c[t].call(), l > p) {
                            for (var e = 0, n = c.length - l; e < n; e++)
                                c[e] = c[e + l];
                            c.length -= l,
                            l = 0
                        }
                    }
                    c.length = 0,
                    l = 0,
                    i = !1
                }
                function a(t) {
                    var e = 1,
                        n = new u(t),
                        s = document.createTextNode("");
                    return n.observe(s, {
                        characterData: !0
                    }), function() {
                        e = -e,
                        s.data = e
                    }
                }
                function o(t) {
                    return function() {
                        function e() {
                            clearTimeout(n),
                            clearInterval(s),
                            t()
                        }
                        var n = setTimeout(e, 0),
                            s = setInterval(e, 50)
                    }
                }
                t.exports = n;
                var r,
                    c = [],
                    i = !1,
                    l = 0,
                    p = 1024,
                    u = e.MutationObserver || e.WebKitMutationObserver;
                r = "function" == typeof u ? a(s) : o(s),
                n.requestFlush = r,
                n.makeRequestCallFromTimer = o
            }).call(e, function() {
                return this
            }())
        }, function(t, e) {
            "use strict";
            function n(t, e, s) {
                var a = function() {};
                a.prototype = t.prototype;
                var o = new a,
                    r = /xyz/.test(function() {
                        xyz
                    }) ? /\bparent\b/ : /.*/;
                s = s || {};
                for (var c in s) {
                    var i = s[c],
                        l = o[c];
                    "function" == typeof l && "function" == typeof i && r.test(i) ? o[c] = function(t, e) {
                        return function() {
                            var n = this.parent;
                            this.parent = e;
                            var s = t.apply(this, arguments);
                            return this.parent = n, s
                        }
                    }(i, l) : o[c] = i
                }
                o.typename = e;
                var p = function() {
                    o.init && o.init.apply(this, arguments)
                };
                return p.prototype = o, p.prototype.constructor = p, p.extend = function(t, e) {
                    return "object" == typeof t && (e = t, t = "anonymous"), n(p, t, e)
                }, p
            }
            t.exports = n(Object, "Object", {})
        }, function(t, e, n) {
            "use strict";
            function s(t, e) {
                return null === t || void 0 === t || t === !1 ? e : t
            }
            var a = n(1),
                o = n(8),
                r = {
                    abs: function(t) {
                        return Math.abs(t)
                    },
                    batch: function(t, e, n) {
                        var s,
                            a = [],
                            o = [];
                        for (s = 0; s < t.length; s++)
                            s % e === 0 && o.length && (a.push(o), o = []),
                            o.push(t[s]);
                        if (o.length) {
                            if (n)
                                for (s = o.length; s < e; s++)
                                    o.push(n);
                            a.push(o)
                        }
                        return a
                    },
                    capitalize: function(t) {
                        t = s(t, "");
                        var e = t.toLowerCase();
                        return o.copySafeness(t, e.charAt(0).toUpperCase() + e.slice(1))
                    },
                    center: function(t, e) {
                        if (t = s(t, ""), e = e || 80, t.length >= e)
                            return t;
                        var n = e - t.length,
                            r = a.repeat(" ", n / 2 - n % 2),
                            c = a.repeat(" ", n / 2);
                        return o.copySafeness(t, r + t + c)
                    },
                    default: function(t, e, n) {
                        return n ? t ? t : e : void 0 !== t ? t : e
                    },
                    dictsort: function(t, e, n) {
                        if (!a.isObject(t))
                            throw new a.TemplateError("dictsort filter: val must be an object");
                        var s = [];
                        for (var o in t)
                            s.push([o, t[o]]);
                        var r;
                        if (void 0 === n || "key" === n)
                            r = 0;
                        else {
                            if ("value" !== n)
                                throw new a.TemplateError("dictsort filter: You can only sort by either key or value");
                            r = 1
                        }
                        return s.sort(function(t, n) {
                            var s = t[r],
                                o = n[r];
                            return e || (a.isString(s) && (s = s.toUpperCase()), a.isString(o) && (o = o.toUpperCase())), s > o ? 1 : s === o ? 0 : -1
                        }), s
                    },
                    dump: function(t) {
                        return JSON.stringify(t)
                    },
                    escape: function(t) {
                        return t instanceof o.SafeString ? t : (t = null === t || void 0 === t ? "" : t, o.markSafe(a.escape(t.toString())))
                    },
                    safe: function(t) {
                        return t instanceof o.SafeString ? t : (t = null === t || void 0 === t ? "" : t, o.markSafe(t.toString()))
                    },
                    first: function(t) {
                        return t[0]
                    },
                    groupby: function(t, e) {
                        return a.groupBy(t, e)
                    },
                    indent: function(t, e, n) {
                        if (t = s(t, ""), "" === t)
                            return "";
                        e = e || 4;
                        for (var r = "", c = t.split("\n"), i = a.repeat(" ", e), l = 0; l < c.length; l++)
                            r += 0 !== l || n ? i + c[l] + "\n" : c[l] + "\n";
                        return o.copySafeness(t, r)
                    },
                    join: function(t, e, n) {
                        return e = e || "", n && (t = a.map(t, function(t) {
                            return t[n]
                        })), t.join(e)
                    },
                    last: function(t) {
                        return t[t.length - 1]
                    },
                    length: function(t) {
                        var e = s(t, "");
                        return void 0 !== e ? "function" == typeof Map && e instanceof Map || "function" == typeof Set && e instanceof Set ? e.size : !a.isObject(e) || e instanceof o.SafeString ? e.length : Object.keys(e).length : 0
                    },
                    list: function(t) {
                        if (a.isString(t))
                            return t.split("");
                        if (a.isObject(t)) {
                            var e = [];
                            if (Object.keys)
                                e = Object.keys(t);
                            else
                                for (var n in t)
                                    e.push(n);
                            return a.map(e, function(e) {
                                return {
                                    key: e,
                                    value: t[e]
                                }
                            })
                        }
                        if (a.isArray(t))
                            return t;
                        throw new a.TemplateError("list filter: type not iterable")
                    },
                    lower: function(t) {
                        return t = s(t, ""), t.toLowerCase()
                    },
                    random: function(t) {
                        return t[Math.floor(Math.random() * t.length)]
                    },
                    rejectattr: function(t, e) {
                        return t.filter(function(t) {
                            return !t[e]
                        })
                    },
                    selectattr: function(t, e) {
                        return t.filter(function(t) {
                            return !!t[e]
                        })
                    },
                    replace: function(t, e, n, s) {
                        var a = t;
                        if (e instanceof RegExp)
                            return t.replace(e, n);
                        "undefined" == typeof s && (s = -1);
                        var r = "";
                        if ("number" == typeof e)
                            e += "";
                        else if ("string" != typeof e)
                            return t;
                        if ("number" == typeof t && (t += ""), "string" != typeof t && !(t instanceof o.SafeString))
                            return t;
                        if ("" === e)
                            return r = n + t.split("").join(n) + n, o.copySafeness(t, r);
                        var c = t.indexOf(e);
                        if (0 === s || c === -1)
                            return t;
                        for (var i = 0, l = 0; c > -1 && (s === -1 || l < s);)
                            r += t.substring(i, c) + n,
                            i = c + e.length,
                            l++,
                            c = t.indexOf(e, i);
                        return i < t.length && (r += t.substring(i)), o.copySafeness(a, r)
                    },
                    reverse: function(t) {
                        var e;
                        return e = a.isString(t) ? r.list(t) : a.map(t, function(t) {
                            return t
                        }), e.reverse(), a.isString(t) ? o.copySafeness(t, e.join("")) : e
                    },
                    round: function(t, e, n) {
                        e = e || 0;
                        var s,
                            a = Math.pow(10, e);
                        return s = "ceil" === n ? Math.ceil : "floor" === n ? Math.floor : Math.round, s(t * a) / a
                    },
                    slice: function(t, e, n) {
                        for (var s = Math.floor(t.length / e), a = t.length % e, o = 0, r = [], c = 0; c < e; c++) {
                            var i = o + c * s;
                            c < a && o++;
                            var l = o + (c + 1) * s,
                                p = t.slice(i, l);
                            n && c >= a && p.push(n),
                            r.push(p)
                        }
                        return r
                    },
                    sum: function(t, e, n) {
                        var s = 0;
                        "number" == typeof n && (s += n),
                        e && (t = a.map(t, function(t) {
                            return t[e]
                        }));
                        for (var o = 0; o < t.length; o++)
                            s += t[o];
                        return s
                    },
                    sort: o.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(t, e, n, s) {
                        return t = a.map(t, function(t) {
                            return t
                        }), t.sort(function(t, o) {
                            var r,
                                c;
                            return s ? (r = t[s], c = o[s]) : (r = t, c = o), !n && a.isString(r) && a.isString(c) && (r = r.toLowerCase(), c = c.toLowerCase()), r < c ? e ? 1 : -1 : r > c ? e ? -1 : 1 : 0
                        }), t
                    }),
                    string: function(t) {
                        return o.copySafeness(t, t)
                    },
                    striptags: function(t, e) {
                        t = s(t, ""),
                        e = e || !1;
                        var n = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi,
                            a = r.trim(t.replace(n, "")),
                            c = "";
                        return c = e ? a.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, "\n").replace(/\n\n\n+/g, "\n\n") : a.replace(/\s+/gi, " "), o.copySafeness(t, c)
                    },
                    title: function(t) {
                        t = s(t, "");
                        for (var e = t.split(" "), n = 0; n < e.length; n++)
                            e[n] = r.capitalize(e[n]);
                        return o.copySafeness(t, e.join(" "))
                    },
                    trim: function(t) {
                        return o.copySafeness(t, t.replace(/^\s*|\s*$/g, ""))
                    },
                    truncate: function(t, e, n, a) {
                        var r = t;
                        if (t = s(t, ""), e = e || 255, t.length <= e)
                            return t;
                        if (n)
                            t = t.substring(0, e);
                        else {
                            var c = t.lastIndexOf(" ", e);
                            c === -1 && (c = e),
                            t = t.substring(0, c)
                        }
                        return t += void 0 !== a && null !== a ? a : "...", o.copySafeness(r, t)
                    },
                    upper: function(t) {
                        return t = s(t, ""), t.toUpperCase()
                    },
                    urlencode: function(t) {
                        var e = encodeURIComponent;
                        if (a.isString(t))
                            return e(t);
                        var n;
                        if (a.isArray(t))
                            n = t.map(function(t) {
                                return e(t[0]) + "=" + e(t[1])
                            });
                        else {
                            n = [];
                            for (var s in t)
                                t.hasOwnProperty(s) && n.push(e(s) + "=" + e(t[s]))
                        }
                        return n.join("&")
                    },
                    urlize: function(t, e, n) {
                        isNaN(e) && (e = 1 / 0);
                        var s = n === !0 ? ' rel="nofollow"' : "",
                            a = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/,
                            o = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i,
                            r = /^https?:\/\/.*$/,
                            c = /^www\./,
                            i = /\.(?:org|net|com)(?:\:|\/|$)/,
                            l = t.split(/(\s+)/).filter(function(t) {
                                return t && t.length
                            }).map(function(t) {
                                var n = t.match(a),
                                    l = n && n[1] || t;
                                return r.test(l) ? '<a href="' + l + '"' + s + ">" + l.substr(0, e) + "</a>" : c.test(l) ? '<a href="http://' + l + '"' + s + ">" + l.substr(0, e) + "</a>" : o.test(l) ? '<a href="mailto:' + l + '">' + l + "</a>" : i.test(l) ? '<a href="http://' + l + '"' + s + ">" + l.substr(0, e) + "</a>" : t
                            });
                        return l.join("")
                    },
                    wordcount: function(t) {
                        t = s(t, "");
                        var e = t ? t.match(/\w+/g) : null;
                        return e ? e.length : null
                    },
                    float: function(t, e) {
                        var n = parseFloat(t);
                        return isNaN(n) ? e : n
                    },
                    int: function(t, e) {
                        var n = parseInt(t, 10);
                        return isNaN(n) ? e : n
                    }
                };
            r.d = r.default,
            r.e = r.escape,
            t.exports = r
        }, function(t, e, n) {
            "use strict";
            function s(t, e, n) {
                return function() {
                    var s,
                        a,
                        c = r(arguments),
                        i = o(arguments);
                    if (c > t.length) {
                        s = Array.prototype.slice.call(arguments, 0, t.length);
                        var l = Array.prototype.slice.call(arguments, s.length, c);
                        for (a = 0; a < l.length; a++)
                            a < e.length && (i[e[a]] = l[a]);
                        s.push(i)
                    } else if (c < t.length) {
                        for (s = Array.prototype.slice.call(arguments, 0, c), a = c; a < t.length; a++) {
                            var p = t[a];
                            s.push(i[p]),
                            delete i[p]
                        }
                        s.push(i)
                    } else
                        s = arguments;
                    return n.apply(this, s)
                }
            }
            function a(t) {
                return t.__keywords = !0, t
            }
            function o(t) {
                var e = t.length;
                if (e) {
                    var n = t[e - 1];
                    if (n && n.hasOwnProperty("__keywords"))
                        return n
                }
                return {}
            }
            function r(t) {
                var e = t.length;
                if (0 === e)
                    return 0;
                var n = t[e - 1];
                return n && n.hasOwnProperty("__keywords") ? e - 1 : e
            }
            function c(t) {
                return "string" != typeof t ? t : (this.val = t, void (this.length = t.length))
            }
            function i(t, e) {
                return t instanceof c ? new c(e) : e.toString()
            }
            function l(t) {
                var e = typeof t;
                return "string" === e ? new c(t) : "function" !== e ? t : function() {
                    var e = t.apply(this, arguments);
                    return "string" == typeof e ? new c(e) : e
                }
            }
            function p(t, e) {
                return t = void 0 !== t && null !== t ? t : "", !e || t instanceof c || (t = w.escape(t.toString())), t
            }
            function u(t, e, n) {
                if (null === t || void 0 === t)
                    throw new w.TemplateError("attempted to output null or undefined value", e + 1, n + 1);
                return t
            }
            function d(t, e) {
                return t = t || {}, "function" == typeof t[e] ? function() {
                    return t[e].apply(t, arguments)
                } : t[e]
            }
            function h(t, e, n, s) {
                if (!t)
                    throw new Error("Unable to call `" + e + "`, which is undefined or falsey");
                if ("function" != typeof t)
                    throw new Error("Unable to call `" + e + "`, which is not a function");
                return t.apply(n, s)
            }
            function f(t, e, n) {
                var s = e.lookup(n);
                return void 0 !== s && null !== s ? s : t.lookup(n)
            }
            function v(t, e, n) {
                return t.lineno ? t : new w.TemplateError(t, e, n)
            }
            function m(t, e, n, s) {
                if (w.isArray(t)) {
                    var a = t.length;
                    w.asyncIter(t, function(t, s, o) {
                        switch (e) {
                        case 1:
                            n(t, s, a, o);
                            break;
                        case 2:
                            n(t[0], t[1], s, a, o);
                            break;
                        case 3:
                            n(t[0], t[1], t[2], s, a, o);
                            break;
                        default:
                            t.push(s, o),
                            n.apply(this, t)
                        }
                    }, s)
                } else
                    w.asyncFor(t, function(t, e, s, a, o) {
                        n(t, e, s, a, o)
                    }, s)
            }
            function g(t, e, n, s) {
                function a(t, e) {
                    i++,
                    c[t] = e,
                    i === o && s(null, c.join(""))
                }
                var o,
                    r,
                    c,
                    i = 0;
                if (w.isArray(t))
                    if (o = t.length, c = new Array(o), 0 === o)
                        s(null, "");
                    else
                        for (r = 0; r < t.length; r++) {
                            var l = t[r];
                            switch (e) {
                            case 1:
                                n(l, r, o, a);
                                break;
                            case 2:
                                n(l[0], l[1], r, o, a);
                                break;
                            case 3:
                                n(l[0], l[1], l[2], r, o, a);
                                break;
                            default:
                                l.push(r, a),
                                n.apply(this, l)
                            }
                        }
                else {
                    var p = w.keys(t);
                    if (o = p.length, c = new Array(o), 0 === o)
                        s(null, "");
                    else
                        for (r = 0; r < p.length; r++) {
                            var u = p[r];
                            n(u, t[u], r, o, a)
                        }
                }
            }
            var w = n(1),
                y = n(6),
                b = y.extend({
                    init: function(t, e) {
                        this.variables = {},
                        this.parent = t,
                        this.topLevel = !1,
                        this.isolateWrites = e
                    },
                    set: function(t, e, n) {
                        var s = t.split("."),
                            a = this.variables,
                            o = this;
                        if (n && (o = this.resolve(s[0], !0)))
                            return void o.set(t, e);
                        for (var r = 0; r < s.length - 1; r++) {
                            var c = s[r];
                            a[c] || (a[c] = {}),
                            a = a[c]
                        }
                        a[s[s.length - 1]] = e
                    },
                    get: function(t) {
                        var e = this.variables[t];
                        return void 0 !== e && null !== e ? e : null
                    },
                    lookup: function(t) {
                        var e = this.parent,
                            n = this.variables[t];
                        return void 0 !== n && null !== n ? n : e && e.lookup(t)
                    },
                    resolve: function(t, e) {
                        var n = e && this.isolateWrites ? void 0 : this.parent,
                            s = this.variables[t];
                        return void 0 !== s && null !== s ? this : n && n.resolve(t)
                    },
                    push: function(t) {
                        return new b(this, t)
                    },
                    pop: function() {
                        return this.parent
                    }
                });
            c.prototype = Object.create(String.prototype, {
                length: {
                    writable: !0,
                    configurable: !0,
                    value: 0
                }
            }),
            c.prototype.valueOf = function() {
                return this.val
            },
            c.prototype.toString = function() {
                return this.val
            },
            t.exports = {
                Frame: b,
                makeMacro: s,
                makeKeywordArgs: a,
                numArgs: r,
                suppressValue: p,
                ensureDefined: u,
                memberLookup: d,
                contextOrFrameLookup: f,
                callWrap: h,
                handleError: v,
                isArray: w.isArray,
                keys: w.keys,
                SafeString: c,
                copySafeness: i,
                markSafe: l,
                asyncEach: m,
                asyncAll: g,
                inOperator: w.inOperator
            }
        }, function(t, e) {
            "use strict";
            function n(t) {
                var e = -1;
                return {
                    current: null,
                    reset: function() {
                        e = -1,
                        this.current = null
                    },
                    next: function() {
                        return e++, e >= t.length && (e = 0), this.current = t[e], this.current
                    }
                }
            }
            function s(t) {
                t = t || ",";
                var e = !0;
                return function() {
                    var n = e ? "" : t;
                    return e = !1, n
                }
            }
            function a() {
                return {
                    range: function(t, e, n) {
                        "undefined" == typeof e ? (e = t, t = 0, n = 1) : n || (n = 1);
                        var s,
                            a = [];
                        if (n > 0)
                            for (s = t; s < e; s += n)
                                a.push(s);
                        else
                            for (s = t; s > e; s += n)
                                a.push(s);
                        return a
                    },
                    cycler: function() {
                        return n(Array.prototype.slice.call(arguments))
                    },
                    joiner: function(t) {
                        return s(t)
                    }
                }
            }
            t.exports = a
        }, function(t, e, n) {
            "use strict";
            var s = n(11),
                a = s.extend({
                    init: function(t) {
                        this.precompiled = t || {}
                    },
                    getSource: function(t) {
                        return this.precompiled[t] ? {
                            src: {
                                type: "code",
                                obj: this.precompiled[t]
                            },
                            path: t
                        } : null
                    }
                });
            t.exports = a
        }, function(t, e, n) {
            "use strict";
            var s = n(3),
                a = n(6),
                o = n(1),
                r = a.extend({
                    on: function(t, e) {
                        this.listeners = this.listeners || {},
                        this.listeners[t] = this.listeners[t] || [],
                        this.listeners[t].push(e)
                    },
                    emit: function(t) {
                        var e = Array.prototype.slice.call(arguments, 1);
                        this.listeners && this.listeners[t] && o.each(this.listeners[t], function(t) {
                            t.apply(null, e)
                        })
                    },
                    resolve: function(t, e) {
                        return s.resolve(s.dirname(t), e)
                    },
                    isRelative: function(t) {
                        return 0 === t.indexOf("./") || 0 === t.indexOf("../")
                    }
                });
            t.exports = r
        }, function(t, e) {
            function n() {
                "use strict";
                var t = this.runtime,
                    e = this.lib,
                    n = t.contextOrFrameLookup;
                t.contextOrFrameLookup = function(t, e, s) {
                    var a = n.apply(this, arguments);
                    if (void 0 === a)
                        switch (s) {
                        case "True":
                            return !0;
                        case "False":
                            return !1;
                        case "None":
                            return null
                        }
                    return a
                };
                var s = t.memberLookup,
                    a = {
                        pop: function(t) {
                            if (void 0 === t)
                                return this.pop();
                            if (t >= this.length || t < 0)
                                throw new Error("KeyError");
                            return this.splice(t, 1)
                        },
                        remove: function(t) {
                            for (var e = 0; e < this.length; e++)
                                if (this[e] === t)
                                    return this.splice(e, 1);
                            throw new Error("ValueError")
                        },
                        count: function(t) {
                            for (var e = 0, n = 0; n < this.length; n++)
                                this[n] === t && e++;
                            return e
                        },
                        index: function(t) {
                            var e;
                            if ((e = this.indexOf(t)) === -1)
                                throw new Error("ValueError");
                            return e
                        },
                        find: function(t) {
                            return this.indexOf(t)
                        },
                        insert: function(t, e) {
                            return this.splice(t, 0, e)
                        }
                    },
                    o = {
                        items: function() {
                            var t = [];
                            for (var e in this)
                                t.push([e, this[e]]);
                            return t
                        },
                        values: function() {
                            var t = [];
                            for (var e in this)
                                t.push(this[e]);
                            return t
                        },
                        keys: function() {
                            var t = [];
                            for (var e in this)
                                t.push(e);
                            return t
                        },
                        get: function(t, e) {
                            var n = this[t];
                            return void 0 === n && (n = e), n
                        },
                        has_key: function(t) {
                            return this.hasOwnProperty(t)
                        },
                        pop: function(t, e) {
                            var n = this[t];
                            if (void 0 === n && void 0 !== e)
                                n = e;
                            else {
                                if (void 0 === n)
                                    throw new Error("KeyError");
                                delete this[t]
                            }
                            return n
                        },
                        popitem: function() {
                            for (var t in this) {
                                var e = this[t];
                                return delete this[t], [t, e]
                            }
                            throw new Error("KeyError")
                        },
                        setdefault: function(t, e) {
                            return t in this ? this[t] : (void 0 === e && (e = null), this[t] = e)
                        },
                        update: function(t) {
                            for (var e in t)
                                this[e] = t[e];
                            return null
                        }
                    };
                o.iteritems = o.items,
                o.itervalues = o.values,
                o.iterkeys = o.keys,
                t.memberLookup = function(t, n, r) {
                    return t = t || {}, e.isArray(t) && a.hasOwnProperty(n) ? function() {
                        return a[n].apply(t, arguments)
                    } : e.isObject(t) && o.hasOwnProperty(n) ? function() {
                        return o[n].apply(t, arguments)
                    } : s.apply(this, arguments)
                }
            }
            t.exports = n
        }])
    })
  }, function(t, e, n) {
    var s = n(6);
    t.exports = function(t) {
        t.addGlobal("static", function(t) {
            return "/static/" + t
        }, !0),
        t.addGlobal("hasMod", function(t, e) {
            return s.indexOf(t, e) != -1
        }),
        t.addGlobal("in_array", function(t, e) {
            return s.indexOf(t, e) != -1
        }),
        t.addGlobal("concat", function() {
            var t = [].slice.call(arguments);
            return t.join("")
        }),
        t.addFilter("add", function(t, e) {
            return t + e
        }),
        t.addFilter("pluralize", function(t, e, n) {
            return "undefined" == typeof e && (e = ""), "undefined" == typeof n && (n = "s"), 1 == t ? e : n
        }),
        t.addFilter("next", function(t, e) {
            return t ? t.shift() : e
        }),
        t.addGlobal("isMobile", function() {
            return window.app.settings.isMobile
        }),
        t.addGlobal("isDesktop", function() {
            return window.app.settings.isDesktop
        }),
        t.addGlobal("upperExcludeFirst", function(t) {
            return t.length > 2 && " " == t[1] ? t.substring(0, 2) + t.substring(2).toUpperCase() : t.toUpperCase()
        }),
        t.addGlobal("url", function(t, e) {
            var n = e ? "http://shantellmartin.art/" : "/",
                s = {
                    "sm:index": n + "",
                    "sm:news": n + "news/",
                    "sm:projects": n + "work.html",
                    "sm:info": n + "info/"
                };
            return s[t]
        })
    }
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/Base.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    (i ? function(t, e, n, s, a) {
                        a("")
                    } : e.getBlock("content"))(t, e, n, s, function(o, r) {
                        return o ? void a(o) : (c += r, void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function e(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += "\n",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                b_content: e,
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/Base.jinja"], o)
  }, function(t, e) {
    t.exports = function(t, e, n, s) {
        var a = n.root;
        n.root = function(t, e, n, o, r, c) {
            var i = t.getTemplate;
            t.getTemplate = function(t, e, a, o, r) {
                "function" == typeof e && (r = e = !1);
                var c = function(t) {
                        try {
                            return s[t]
                        } catch (e) {
                            if (n.get("_require"))
                                return n.get("_require")(t);
                            console.warn('Could not load template "%s"', t)
                        }
                    },
                    i = c(t);
                n.set("_require", c),
                e && i.compile(),
                r(null, i)
            },
            a(t, e, n, o, r, function(e, n) {
                t.getTemplate = i,
                c(e, n)
            })
        };
        var o = {
            obj: n,
            type: "code"
        };
        return new t.Template(o, e)
    }
  }, function(t, e, n) {
    var s = n(35);
    n(22);
    t.exports = s.extend({
        isRendered: function() {
            return !0
        },
        attach: function() {},
        render: function() {
            return this
        },
        activate: function(t) {
            return console.log("activate dummy"), this.parent.setTitle(), s.prototype.activate.call(this, t)
        },
        destroy: function() {
            return console.log("destroy dummy"), s.prototype.destroy.call(this)
        },
        deactivate: function(t) {
            return console.log("deactivate dummy"), s.prototype.deactivate.call(this, t)
        }
    })
  }, function(t, e, n) {
    var s = (n(6), n(26));
    t.exports = s.extend({
        $parent: function() {
            return this.parent.$content
        }
    })
  }, function(t, e, n) {
    var s = n(26),
        a = (n(22), n(37)),
        o = n(49);
    n(50),
    t.exports = s.extend({
        title: "",
        template: o,
        el: ".IndexPage",
        SHANTELLE_PARAMS: {
            state: "index"
        },
        renderData: function() {
            return {
                shop: window.app.settings.shop
            }
        },
        render: function() {
            return s.prototype.render.call(this), this.$el.css({
                opacity: 0
            }), this
        },
        activate: function() {
            return console.log("activate index"), s.prototype.activate.call(this)
        },
        viewsRegistration: function() {
            this.registerView("indexIntro", new a)
        },
        playIn: function(t) {
            var e = this;
            return new Promise(function(n) {
                app.settings.isMobile || app.views.topNav.hide(),
                app.els.$shantelle.animate({
                    opacity: 1
                }, t.duration),
                e.$el.animate({
                    opacity: 1
                }, t.duration, function() {
                    app.els.$shantelle.stop(!0, !0),
                    n()
                })
            })
        },
        playOut: function(t) {
            var e = this;
            return new Promise(function(n) {
                t.zoom ? e.views.indexIntro.animateZoom(t, function() {
                    app.settings.isMobile || app.views.topNav.show(),
                    n()
                }) : (app.els.$shantelle.animate({
                    opacity: 0
                }, t.duration), e.$el.animate({
                    opacity: 0
                }, t.duration, function() {
                    app.els.$shantelle.stop(!0, !0),
                    app.settings.isMobile || app.views.topNav.show(),
                    n()
                }))
            })
        },
        destroy: function() {
            return console.log("destroy index"), s.prototype.destroy.call(this)
        },
        deactivate: function(t) {
            return console.log("deactivate index"), s.prototype.deactivate.call(this, t)
        }
    })
  }, function(t, e, n) {
    (function(e) {
        n(38);
        var s = n(27),
            a = n(39),
            o = n(6);
        n(6),
        n(48);
        t.exports = s.extend({
            el: ".IndexIntro",
            template: a,
            events: {
                "mousemove .bg-wrapper": "onMouseMove",
                "touchstart .bg-wrapper": "onTouchStart",
                "touchmove .bg-wrapper": "onTouchMove",
                "touchend .bg-wrapper": "onTouchEnd",
                "mouseenter .shake": "startSVGShake",
                "mouseleave .shake": "stopSVGShake",
                "click .menu-link": "showMenu",
                "click .play-link": "toggleControls",
                "click .controls .close": "closeControls",
                "click .controls .type-wrapper .type-select": "selectType",
                "click .controls .reset": "resetControls"
            },
            initialize: function(t) {
                this.options = t || {},
                s.prototype.initialize.call(this, t),
                o.bindAll(this, "updateSVG", "onMouseMove"),
                this.$bgWrapper = this.$(".bg-wrapper"),
                this.controls = {
                    tp: 1
                },
                e('input[type="range"]').rangeslider({
                    polyfill: !1
                }),
                e('input[type="range"]').each(function(t, n) {
                    this.controls[e(n).attr("name")] = e(n).val() - 0,
                    "speed" == e(n).attr("name") && (this.controls.speed /= 1e3),
                    "decay" == e(n).attr("name") && (this.controls.decay /= 10),
                    e(n).on("input", function(t) {
                        var n = e(t.currentTarget);
                        this.controls[n.attr("name")] = n.val() - 0,
                        "speed" == n.attr("name") && (this.controls.speed /= 1e3),
                        "decay" == n.attr("name") && (this.controls.decay /= 10)
                    }.bind(this))
                }.bind(this)),
                this.loadBGImage(),
                this.effectMultiplier = 0,
                this.effectMultiplierDir = 0
            },
            toggleControls: function() {
                this.$(".controls").toggleClass("hidden")
            },
            closeControls: function() {
                this.$(".controls").addClass("hidden")
            },
            selectType: function(t) {
                var n = e(t.currentTarget);
                n.parent().attr("data-active", n.index() + 1),
                this.controls.tp = n.index() + 1
            },
            resetControls: function() {
                this.$(".controls .type-wrapper").attr("data-active", "1"),
                this.controls.tp = 1,
                e('input[type="range"]').each(function(t, n) {
                    var s = e(n);
                    s.val(s.attr("data-default")).change(),
                    console.log(s, s.val(), s.attr("data-default")),
                    this.controls[s.attr("name")] = s.val() - 0,
                    "speed" == s.attr("name") && (this.controls.speed /= 1e3),
                    "decay" == s.attr("name") && (this.controls.decay /= 10)
                }.bind(this))
            },
            showMenu: function() {
                app.views.topNavPopup.show()
            },
            animateZoom: function(t, e) {
                var n = app.els.$shantelle;
                n.css({
                    transform: "translateX(0)"
                });
                var s = t.view.SHANTELLE_PARAMS,
                    a = n[0].getBoundingClientRect(),
                    o = window.innerWidth,
                    r = {
                        left: a.left + a.width / 2,
                        top: a.top + a.height / 2
                    },
                    c = {
                        left: o * (s.left + s.width / 2),
                        top: o * (s.top + s.height / 2)
                    },
                    i = c.left - r.left,
                    l = c.top - r.top,
                    p = o * s.width / n.width(),
                    u = s.angle;
                n.css({
                    position: "fixed",
                    left: a.left,
                    top: a.top,
                    width: a.width,
                    height: a.height,
                    transform: "rotate(6.2deg)"
                }).outerHeight(),
                this.zoomCenter && this.$(".svg-wrapper .bg").css({
                    "transform-origin": this.zoomCenter.px + "% " + this.zoomCenter.py + "%"
                }),
                this.$(".menu-link, .shake").addClass("fade-out"),
                setTimeout(function() {
                    n.css({
                        transition: t.duration + "ms transform ease-out",
                        transform: "translate(" + i + "px, " + l + "px)  rotate(" + u + "deg) scale(" + p + ")"
                    }),
                    this.$(".svg-wrapper .bg").css({
                        transition: t.duration + "ms all ease-out",
                        opacity: 0,
                        transform: "scale(" + p + ")"
                    }),
                    app.utils.waitForTransitionEnd(this.$(".svg-wrapper .bg"), "transform", function() {
                        e(),
                        setTimeout(function() {
                            this.$(".menu-link, .shake").removeClass("fade-out"),
                            this.$(".svg-wrapper .bg").removeAttr("style")
                        }.bind(this), 200)
                    }.bind(this))
                }.bind(this), 200)
            },
            startSVGShake: function(t) {
                function n() {
                    c++,
                    c % 4 == 0 && o.each(r, function(t, e) {
                        for (var n = [], s = 0; s < t.parts.length; s++) {
                            for (var a = t.parts[s], o = [], r = 0; r < a.data.length >> 1; r++) {
                                var c = a.data[r << 1],
                                    i = a.data[(r << 1) + 1];
                                r == (a.data.length >> 1) - 1 && (c += 3 * Math.random() - 1.5, i += 3 * Math.random() - 1.5),
                                o[o.length] = c,
                                o[o.length] = i
                            }
                            n[n.length] = a.tp + o.join(",")
                        }
                        t.node.setAttribute("d", n.join(""))
                    }),
                    s.data("frame", requestAnimationFrame(n))
                }
                if (app.settings.isDesktop) {
                    var s = e(t.currentTarget).find("svg");
                    if (this.zoomCenter = {
                        px: 100 * (s.position().left + s.width() / 2) / this.$bgWrapper.outerWidth(),
                        py: 100 * (s.position().top + s.height() / 2) / this.$bgWrapper.outerHeight()
                    }, !s.data("paths")) {
                        var a = s.find("path"),
                            r = [];
                        a.each(function(t, e) {
                            path = {
                                node: e,
                                oldD: e.getAttribute("d")
                            };
                            for (var n = e.getPathData(), s = n.length, a = [], o = 0; o < s; o++)
                                a.push({
                                    tp: n[o].type,
                                    data: n[o].values
                                });
                            path.parts = a,
                            r.push(path)
                        }),
                        s.data("paths", r)
                    }
                    n();
                    var r = s.data("paths"),
                        c = 0
                }
            },
            stopSVGShake: function(t) {
                if (app.settings.isDesktop) {
                    var n = e(t.currentTarget).find("svg");
                    cancelAnimationFrame(n.data("frame")),
                    o.each(n.data("paths"), function(t, e) {
                        t.node.setAttribute("d", t.oldD)
                    })
                }
            },
            loadBGImage: function() {
                var t = this.$bgWrapper.find("svg.bg"),
                    e = t.find("path"),
                    n = [];
                e.each(function(t, e) {
                    path = {
                        node: e
                    };
                    var s = e.getBBox();
                    path.x1 = s.x,
                    path.y1 = s.y,
                    path.x2 = s.x + s.width,
                    path.y2 = s.y + s.height,
                    path.cx = s.x + s.width / 2,
                    path.cy = s.y + s.height / 2,
                    path.w = s.width,
                    path.h = s.height,
                    n.push(path)
                }),
                this.paths = n,
                this.relX = -9999,
                this.relY = -9999,
                this.t = 0
            },
            updateSVG: function() {
                if (!app.settings.isMobile) {
                    if (app.settings.isTablet ? (this.effectMultiplier += .05 * this.effectMultiplierDir, this.effectMultiplier = Math.min(Math.max(this.effectMultiplier, 0), 1)) : this.effectMultiplier = 1, this.effectMultiplier > 0) {
                        this.t += this.controls.speed;
                        var t = this.$bgWrapper.width() / 1445,
                            e = Math.round(this.controls.radius / 2 / t) * this.effectMultiplier,
                            n = Math.round(this.relX / t),
                            s = Math.round(this.relY / t),
                            a = this,
                            r = this.t;
                        o.each(this.paths, function(t, o) {
                            if (!(t.x1 > n + e || t.x2 < n - e || t.y1 > s + e || t.y2 < s - e) || t.changed) {
                                var c,
                                    i,
                                    l = !1,
                                    p = t.cx,
                                    u = t.cy;
                                if (t.w < 200 && t.h < 200 && t.w > 0 && t.h > 0) {
                                    var d = Math.pow(Math.pow(p - n, 2) + Math.pow(u - s, 2), .5);
                                    d <= e && (l = !0)
                                }
                                if (l) {
                                    if (!t.normal) {
                                        var h = Math.random() < .5 ? t.h : -t.h,
                                            f = Math.random() < .5 ? t.w : -t.w,
                                            v = Math.pow(Math.pow(h, 2) + Math.pow(f, 2), .5);
                                        t.normal = [h / v, f / v]
                                    }
                                    var m = t.normal,
                                        g = Math.pow((e - d) / e, 6 - a.controls.decay),
                                        w = a.controls.strength * g * Math.cos(r * (1 + o % 30 / 100) + p + u) * a.effectMultiplier,
                                        y = a.controls.strength * g * Math.sin(r * (1 + o % 30 / 100) + p + u) * a.effectMultiplier;
                                    1 == a.controls.tp && (c = w * m[0], i = y * m[1]),
                                    2 == a.controls.tp && (c = w, i = y),
                                    3 == a.controls.tp && (c = w + (n - p) * (e - d) / e, i = y + (s - u) * (e - d) / e),
                                    isNaN(c) && console.log(t)
                                }
                                (l || t.changed) && (t.node.setAttribute("transform", l ? "translate(" + c + ", " + i + ")" : ""), t.changed = l)
                            }
                        })
                    }
                    this.animationFrame = requestAnimationFrame(this.updateSVG)
                }
            },
            onMouseMove: function(t) {
                app.settings.isDesktop && (this.relX = t.pageX, this.relY = t.pageY)
            },
            onTouchStart: function(t) {
                if (app.settings.isTablet) {
                    var e = t.originalEvent.targetTouches[0];
                    this.relX = e.pageX,
                    this.relY = e.pageY,
                    0 == this.effectMultiplier && (this.effectMultiplier = .01, this.effectMultiplierDir = 1)
                }
            },
            onTouchMove: function(t) {
                if (app.settings.isTablet) {
                    var e = t.originalEvent.targetTouches[0];
                    this.relX = e.pageX,
                    this.relY = e.pageY
                }
            },
            onTouchEnd: function(t) {
                app.settings.isTablet && (this.effectMultiplierDir = -1)
            },
            activate: function() {
                this.updateSVG()
            },
            destroy: function() {
                return console.log("destroy indexIntro"), cancelAnimationFrame(this.animationFrame), s.prototype.destroy.call(this)
            },
            deactivate: function(t) {
                return console.log("deactivate indexIntro"), s.prototype.deactivate.call(this, t)
            }
        })
    }).call(e, n(4))
  }, 17, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/utils/macros.jinja"] = n(40),
    o["front/pages/Index/bg.svg"] = n(41),
    o["front/pages/Index/main.svg"] = n(42),
    o["front/pages/Index/news.svg"] = n(43),
    o["front/pages/Index/work.svg"] = n(44),
    o["front/pages/Index/info.svg"] = n(45),
    o["front/pages/Index/shop.svg"] = n(46),
    o["front/pages/Index/play.svg"] = n(47);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/IndexIntro/IndexIntro.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", !1, function(l, p) {
                        return l ? void a(l) : void p.getExported(function(l, p) {
                            return l ? void a(l) : (e.setVariable("macros", p), c += '\n\n<section class="IndexIntro">\n\t<div class="bg-wrapper">\n\t\t<div class="svg-wrapper">\n\t\t\t', void t.getTemplate("front/pages/Index/bg.svg", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", null, function(l, p) {
                                return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                    return l ? void a(l) : (c += p, c += '\n\t\t</div>\n        <div class="mobile-image-wrapper"></div>\n\t\t<div class="menu-link">', void t.getTemplate("front/pages/Index/main.svg", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", null, function(l, p) {
                                        return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                            return l ? void a(l) : (c += p, c += '<div class="l-1"></div><div class="l-2"></div><div class="l-3"></div><div class="l-4"></div></div>\n    \t<a href="', c += s.suppressValue((o = 9, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:news"])), t.opts.autoescape), c += '" class="u-Route news-link shake zoom-navigate">', void t.getTemplate("front/pages/Index/news.svg", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", null, function(l, p) {
                                                return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                    return l ? void a(l) : (c += p, c += '</a>\n    \t<a href="', c += s.suppressValue((o = 10, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:projects"])), t.opts.autoescape), c += '" class="u-Route work-link shake zoom-navigate">', void t.getTemplate("front/pages/Index/work.svg", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", null, function(l, p) {
                                                        return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                            return l ? void a(l) : (c += p, c += '</a>\n    \t<a href="', c += s.suppressValue((o = 11, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:info"])), t.opts.autoescape), c += '" class="u-Route info-link shake zoom-navigate">', void t.getTemplate("front/pages/Index/info.svg", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", null, function(o, r) {
                                                                return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                                                    return o ? void a(o) : (c += r, c += '</a>\n    \t<a href="', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "shop"), "shopUrl"), t.opts.autoescape), c += '" class="shop-link shake">', void t.getTemplate("front/pages/Index/shop.svg", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", null, function(o, r) {
                                                                        return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                                                            return o ? void a(o) : (c += r, c += '</a>\n        <div class="play-link shake">', void t.getTemplate("front/pages/Index/play.svg", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", null, function(o, r) {
                                                                                return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                                                                    return o ? void a(o) : (c += r, c += '</div>\n\n        <div class="controls hidden">\n            <div class="close"><div class="l1"></div><div class="l2"></div></div>\n\n            <div class="play">', void t.getTemplate("front/pages/Index/play.svg", !1, "assets/app/front/components/IndexIntro/IndexIntro.jinja", null, function(o, r) {
                                                                                        return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                                                                            return o ? void a(o) : (c += r, c += '</div>\n\n            <div class="type-wrapper" data-active="1">\n                <div class="type-select" data-index="1">Dance</div>\n                <div class="type-select" data-index="2">Party</div>\n                <div class="type-select" data-index="3">Love</div>\n            </div>\n            <div class="input-wrapper">\n                <div class="caption">Speed</div>\n                <input name="speed" type="range" min="1" max="199" step="1" value="100" data-default="100" data-orientation="horizontal">\n            </div>\n            <div class="input-wrapper">\n                <div class="caption">Chaos</div>\n                <input name="decay" type="range" min="1" max="59" step="1" value="30" data-default="30" data-orientation="horizontal">\n            </div>\n            <div class="input-wrapper">\n                <div class="caption">Strength</div>\n                <input name="strength" type="range" min="1" max="59" step="1" value="30" data-default="30" data-orientation="horizontal">\n            </div>\n            <div class="input-wrapper">\n                <div class="caption">Area</div>\n                <input name="radius" type="range" min="200" max="1000" step="10" value="600" data-default="600" data-orientation="horizontal">\n            </div>\n            <div class="reset">Reset</div>\n        </div>\n    </div>\n</section>', void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                                                                                        })
                                                                                    }))
                                                                                })
                                                                            }))
                                                                        })
                                                                    }))
                                                                })
                                                            }))
                                                        })
                                                    }))
                                                })
                                            }))
                                        })
                                    }))
                                })
                            }))
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/IndexIntro/IndexIntro.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/utils/macros.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null,
                        l = s.makeMacro(["id"], ["bound", "title"], function(a, c) {
                            n = n.push(!0),
                            c = c || {},
                            c.hasOwnProperty("caller") && n.set("caller", c.caller),
                            n.set("id", a),
                            n.set("bound", c.hasOwnProperty("bound") ? c.bound : ""),
                            n.set("title", c.hasOwnProperty("title") ? c.title : "");
                            var i = "";
                            return i += "<svg", s.contextOrFrameLookup(e, n, "bound") && (i += ' viewBox="', i += s.suppressValue(s.contextOrFrameLookup(e, n, "bound"), t.opts.autoescape), i += '"'), i += ">\n        ", s.contextOrFrameLookup(e, n, "title") && (i += "<title>", i += s.suppressValue(s.contextOrFrameLookup(e, n, "title"), t.opts.autoescape), i += "</title>"), i += '\n        <use xlink:href="#', i += s.suppressValue(a, t.opts.autoescape), i += '"></use>\n    </svg>', i += s.suppressValue((o = 4, r = 17, s.callWrap(s.contextOrFrameLookup(e, n, "caller"), "caller", e, [])), t.opts.autoescape), n = n.pop(), new s.SafeString(i)
                        });
                    e.addExport("svgSprite"),
                    e.setVariable("svgSprite", l),
                    c += "\n\n";
                    var p = s.makeMacro(["component"], ["mods", "classes", "data"], function(c, i) {
                        n = n.push(!0),
                        i = i || {},
                        i.hasOwnProperty("caller") && n.set("caller", i.caller),
                        n.set("component", c),
                        n.set("mods", i.hasOwnProperty("mods") ? i.mods : []),
                        n.set("classes", i.hasOwnProperty("classes") ? i.classes : ""),
                        n.set("data", i.hasOwnProperty("data") ? i.data : {});
                        var l = "";
                        if (s.memberLookup(s.contextOrFrameLookup(e, n, "data"), "item")) {
                            var p;
                            p = s.memberLookup(s.contextOrFrameLookup(e, n, "data"), "item"),
                            n.set("item", p, !0),
                            n.topLevel && e.setVariable("item", p),
                            n.topLevel && e.addExport("item", p)
                        }
                        return t.getTemplate(c, !1, "assets/app/front/utils/macros.jinja", null, function(c, i) {
                            return c ? void a(c) : void i.render(e.getVariables(), n, function(c, i) {
                                return c ? void a(c) : (l += i, void (l += s.suppressValue((o = 11, r = 30, s.callWrap(s.contextOrFrameLookup(e, n, "caller"), "caller", e, [])), t.opts.autoescape)))
                            })
                        }), n = n.pop(), new s.SafeString(l)
                    });
                    e.addExport("includeComponent"),
                    e.setVariable("includeComponent", p),
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/utils/macros.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Index/bg.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg class="bg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 1445 2170" style="enable-background:new 0 0 1445 2170;" xml:space="preserve">\n<style type="text/css">\n\t.st0{fill:none;stroke:#000000;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st1{fill:none;stroke:#000000;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n</style>\n<g>\n\t<path class="st0" d="M549.8,284.8c10.6,30.1,36,52.5,54.2,77.9c19.2,26.7,35,55.7,47.1,86.3c7,17.6,12.7,35.6,17.2,54"/>\n\t<path class="st0" d="M1513.2,22.7c-27.7-1.9-55.6-0.2-83.2,2.5c-27.9,2.7-55.6,6.6-83.5,9c-27,2.4-54.2,3.4-81.2,0.4\n\t\tc-24.5-2.8-48.5-9.1-70.5-20.3c0.5,19.7-5.2,39.3-15.3,56.3C1170,88,1155,101,1138,112c-5,3-10,4-15,6c-52,21-117-10-136.4-62.2\n\t\tc-5.9,8.9,0.9,2.3,0,0c-5.9,8.9-12,17.7-18.3,26.3"/>\n\t<path class="st0" d="M1508.1,518c-18.3,18.1-46.5,18.3-70.4,19.6c-14,0.8-28.3,2.1-41.2,7.8c-11.5,5.1-20.7,13.7-28.4,23.5\n\t\tc-14.3,18.3-24.3,41.8-45,54.1c-15.7,9.3-41,14.6-53.6-2.5c-0.8-1.1-1.1-2.2-2.2-2.1c-1.6,0.1-4.4,2.4-5.8,3.2c-3.6,2-7.1,4-10.7,6\n\t\tc-7.3,4.1-14.6,8.2-22,12.3c-13.5,7.6-27,15.3-40.8,22.4c-25.4,13.1-52.8,24.6-81.7,26.2c-24.7,1.4-50.8-4.3-70.3-20.1\n\t\tc-17.4-14.1-27-36.1-25.4-58.5c1.4-20.1,13.1-40.6,33.6-45.8c17.4-4.5,38.1,1.7,49.9,15.4c12.3,14.1,10.9,34.9-1.7,48.4\n\t\tc-13.3,14.1-34.7,18.8-53.4,19.1c-10.2,0.1-20.5-1.1-30.4-3.9c-10.9-3.1-22.6-7.9-29.9-17.1c-16-20.4,2.8-41.9,20.8-52\n\t\tc11.3-6.4,23.6-9.7,36.2-12.8c15-3.6,30.2-6.6,45.4-9.8c28.7-6,57.7-12.6,84.1-25.6c22-10.8,42.5-26,56.9-46.1\n\t\tc7-9.8,12.5-20.7,15.6-32.4c2.4-8.9,1.5-21.7-6.7-27.7c-8.1-5.9-16.6,4.8-18.3,12c-2.1,9.3,1.4,19.8,8.2,26.4\n\t\tc19.1,18.6,52.9,5.6,73-4.2c23.2-11.3,43.8-27.8,59.8-47.9c16.5-20.7,30.9-47.4,28.5-74.6c-2-22.5-18.6-42.4-41.9-44.4\n\t\tc-19.6-1.7-35.7,14-32.4,33.7c3,18.1,18.1,34.6,35.6,39.7c21.6,6.3,43.9-7.2,58-22.7c16.8-18.5,26.1-41.7,33.7-65.1\n\t\tc8.2-24.9,15.5-51.1,31.4-72.4"/>\n\t<path class="st0" d="M1472.3,796"/>\n\t<path class="st0" d="M1454.1,1074c-22.6-16.6-51.7-21.5-78.6-26.3c-37.2-6.6-74.4-13.2-111.6-19.8c-37.2-6.6-74.4-13.2-111.6-19.8\n\t\tc-37-6.6-73.9-13.1-110.9-19.7c-35.8-6.4-71.6-12.7-107.4-19.1c5.7-23,18.9-43.8,36.3-59.7c17.4-16,39.1-27.5,62.4-32.1\n\t\tc22-4.4,48.8-3.7,67.2,10.8c8.4,6.6,14.6,16.6,13.1,27.6c-1.3,9.6-7.6,19.3-16.6,23.3c-21.7,9.6-30-23-28.9-38.4\n\t\tc1.5-20.6,12.9-40.6,29-53.4c21-16.7,50.1-20.1,76.1-19c30.4,1.2,60.5,7.7,90.4,12.7c32.6,5.5,65.3,10.9,97.9,16.4\n\t\tc29.9,5,59.8,10.9,89.9,13.9"/>\n\t<path class="st0" d="M1467.4,1494.8c-18.6-23.1-29.9-52.9-36.6-81.5c-7.1-30.5-8.7-62.3-4.5-93.3c4.2-31.2,15-59.7,28.4-88"/>\n\t<path class="st0" d="M1325.9,2174.3c-1.8-26.7-10.1-52.5-14.1-78.9c-3.6-23-3.8-45.9,7.8-66.7c9.1-16.4,24.1-31.6,42.7-36.6\n\t\tc8.4-2.2,17.3-2,25.3,1.4c2.1,0.9,4.2,2,6.1,3.3c2.3,1.5,2.1,3.1,2.1,5.7c0,4-0.7,8.1-2.1,11.9c-5.8,15.8-21.8,25.8-37.6,29.6\n\t\tc-18.7,4.5-36.8,0.3-52-11.2c-17.6-13.2-29.2-32.8-37.9-52.6c-9.2-20.8-15.3-42.8-23.9-63.8c-8.5-20.6-19.7-41-37.3-55.2\n\t\tc-20.3-16.4-46.5-21.9-71.2-28.2c-28.8-7.3-57.6-14.7-86.4-22c-28.7-7.3-57.4-14.6-86.1-21.9c-28.8-7.3-57.6-14.7-86.4-22\n\t\tc-28.7-7.3-57.4-14.6-86.1-21.9c-28.8-7.3-57.6-14.7-86.4-22c-27.7-7.1-55.4-14.1-83-21.2c17.6-20.6,48-20.4,72.7-18.2\n\t\tC761,1690,830,1703,899,1703c7-1,14-1,21-2c11-2,21-5,31-8c8-3,15-6,22-11c6-5,12-10,18-15c8-8,14-18,19-28c10-22,8-46-8-65\n\t\tc-5-6-10-11-17-14c-5-2-10-6-16-7c-7-1-13-2-20-1c-5,1-9,2-13,4c-12,6-20,18-22,31c-2,18,4,36,16,50c6,7,13,13,21,18\n\t\tc17,9,35,11,53,9c14-2,27-6,40-10c13-5,25-10,38-16c40-20,78-38,118-58c12-6,23-11,34-19c7-6,13-12,17-20c2-3,2-7,3-10c0-2,1-5,0-7\n\t\tc-2-3-4-6-6-9c-64,24-140,10-192-34c20-25,63-30,86-7c-9,37-53.2,45.2-87,37c-173.1-53.3-271.8-147.8-315.3-191\n\t\tc25-3.8,11.3,11.4,0,0c25-3.8,150.6,18.7,173.3,7c19.5-10.1,36.6-26.2,40.4-48.6c3-17.6-1.1-38.2-13.7-51.4\n\t\tc-13.3-14-34.8-14.8-48.9-1.6c-14.5,13.5-19.8,38.2-6.9,54.5c12.7,16,37.4,19,55,10c19.7-10,25.6-33.7,18.7-53.6\n\t\tc-3.4-9.9-9.8-18.9-18.6-24.7c-11.7-7.7-26.3-8.8-39.9-8.7c-14.3,0.2-28.9,1.8-43.1-0.9c-11.7-2.2-22.8-7.2-32.4-14.1\n\t\tc-19.4-13.9-33.3-35.8-36.7-59.5c-0.8-5.8-1-11.6-0.5-17.4c28.9,16.9,56.2,38.6,89.5,46.4c28.7,6.7,61.9,1.8,79.1-24.5\n\t\tc12.8-19.5,13.2-49.2-10-61c-17.9-9.1-44.1-4.7-49.8,16.9c-6.3,23.5,17.6,40.1,36.1,48.3c11.5,5.1,23.7,8.5,36.1,10.2\n\t\tc18.7,2.7,37.4,5.3,56,8c37.4,5.3,74.7,10.6,112.1,15.9c18,2.6,36,5.5,54,7.4c16.5,1.8,33.6,2.3,49.7-2.4\n\t\tc26.7-7.8,45.9-29.9,70.3-42.2c10.6-5.3,22.4-8.5,34.1-5c13.7,4,22.6,15.3,29.1,27.3c7.1,13,12.9,26.9,18.2,40.8\n\t\tc5.4,14.2,9.9,28.8,12.2,43.9c2.1,14.1,2.2,28.6-1.8,42.4c-4,14-12.2,25.9-22.9,35.6c-21.3,19.2-49.7,31.5-59.7,60.4\n\t\tc-8.9,25.6-1.2,56.4,25.2,67.7c21.4,9.1,49.6,2.1,55.5-22.7c2.4-10.1,0.9-21.4-4.6-30.3c-6.7-10.9-18.5-15.4-31-14\n\t\tc-15.1,1.8-29.3,10.5-41,19.8c-11.1,8.7-20.7,19.3-28.5,31c-15.9,24-22.8,51.2-22.5,79.7c0.2,25,4.7,54.2-8,77\n\t\tc-6.5,11.7-17.1,18-28.8,23.6c-11.4,5.5-23.7,11.9-26.7,25.4c-2.8,12.8,5.2,24.9,13.7,33.6c5.1,5.2,10.8,9.7,16.8,13.7\n\t\tc3,2,6.1,3.9,9.2,5.6c0.6,0.4,1.7,0.7,2.2,1.2c0.9,0.9,0.6,0.2,0.4,1.6c-0.2,1.5-1.7,3.3-2.5,4.5c-7.3,11.4-19.8,18.1-29.2,27.6\n\t\tc-8.1,8.1-13.1,18.4-13.8,29.9c-1.2,22.5,12.4,44.6,30.5,57c21.9,15,49.9,13,72.9,1.4c25.6-12.9,45.2-36,57.2-61.7\n\t\tc14.3-30.6,19.9-64.3,25.9-97.3c5.5-30.1,11.8-60.4,25.3-88.1c12-24.6,30.3-47.5,56-58.6"/>\n\t<path class="st0" d="M1021.6,2189c3.2-20.3-20.4-30.7-37-30.9c-24.2-0.3-43.7,15.3-63.2,27.6"/>\n\t<path class="st0" d="M623.7,2171.5c4.2-8.9,9.2-17.4,17.2-23.4c6.7-5.1,14.8-8.1,23.1-9.6c18.4-3.3,37.4-0.1,55.6,2.3\n\t\tc17.2,2.3,33.3,3,50-2.7c13.5-4.6,28.3-13.1,33.7-27.1c2.4-6.3,2.4-13.2,0.2-19.6c22.5,11.5,43.7,27.6,68.9,32.8\n\t\tc21.1,4.3,43.9-3.3,56.1-21.8c6-9.1,7.8-20.3,2.9-30.3c17.2,8.2,37.7,6.3,54.4-2.2c17.2-8.8,30.5-24.5,33.7-43.8\n\t\tc2.2-13.2,0.8-27,5.5-39.8c3.2-8.7,9.2-16.3,16.6-21.8c14.8-11.2,35.8-15.2,53-7.4c17.2,7.7,27.3,26.1,28.4,44.4\n\t\tc0.5,9.2-1.2,18.6-5.4,26.8c-5.2,9.9-14,17.1-23.4,22.9c-10.3,6.3-21.2,11.4-31.2,18c-9.7,6.4-18.9,13.7-27.3,21.7\n\t\tc-16.8,16-30.8,35-41,55.8c-5,10.2-9.6,21-12.2,32"/>\n\t<path class="st0" d="M-29.1,437c16.7-14.9,38.9-22.8,60.7-26.4c28.5-4.7,57.5-2.9,86.1-5.7c23.2-2.3,46.5-8.3,65.9-21.7\n\t\tc8.9-6.2,16.7-13.9,22.3-23.1c6.3-10.2,9-21.8,11.2-33.5c4-21.6,8.1-44.4,28.3-56.8c16.4-10,36.9-9.9,55.2-6.9\n\t\tc20.6,3.4,40.1,10.9,59.2,19c18,7.7,28.6,13.9,48.2,15.5c10.8,0.9,24.2-1.8,35.3-16c10.4-13.5,9.2-74.5-5.3-95.1\n\t\tc-6.8-9.6-21.5-16.2-51.5-8.7"/>\n\t<path class="st0" d="M-50.1,1273.4c20.9-6.5,41.4-14.4,60.4-25.4c18.6-10.8,35.4-24.7,48.5-41.8c13.3-17.5,23.3-39.8,43.9-50\n\t\tc11.5-5.7,24.6-6.7,37.2-6.2c12.4,0.5,24.9,2.1,37,4.7c23.1,4.8,46.7,14.3,62.5,32.4c13.9,15.9,22.3,38.4,17.3,59.4\n\t\tc-5.6,23.5-28.2,40.5-48.5,51.3c-20.9,11.1-46.8,16-67.7,2.1c-16.2-10.7-26.1-31.5-16.3-49.9c7.5-14.1,24.1-19.9,39.1-20.9\n\t\tc17.3-1.2,35.2,3.2,49.7,12.8c18.8,12.4,34.4,28.9,52.6,42.2c17.5,12.8,37.8,21.9,60,19.5c21.1-2.2,41.3-13.6,53.5-31\n\t\tc14.1-20.2,15.9-45.8,21.7-69c2.7-10.7,6.1-21.6,12.7-30.6c5.6-7.6,13-14,21.4-18.4c13.4-7.1,39.6-10.3,44.3,9.1\n\t\tc4.5,18.6-4.5,38.6-19.2,50.2c-15.2,12.1-35.7,13.2-51.7,1.9c-14.9-10.5-24.5-29.6-22.1-47.9c2.2-17.1,14.9-30,29-38.6\n\t\tc14.8-9,31.4-14.6,47.2-21.8c14.8-6.8,29.9-15.3,38.9-29.4c10.9-17.1,9.2-37.9-0.2-55.3c-10.3-19.1-28.1-33-48.6-39.7\n\t\tc-25.4-8.3-52.7-7.4-79.1-6c-24.3,1.3-48.8,3.1-73-0.9c-23.4-3.8-45.3-13.4-61.1-31.5c-15-17.2-26.2-39.4-32.2-61.4\n\t\tc-5.3-19.4-7-41.9,2.9-60.2c10.7-19.7,32-28.1,53.4-28.6c25.3-0.7,49,8.4,73.3,14.1c24.1,5.8,50.7,8.1,71.7-7.4\n\t\tc14.7-10.9,26-30.1,18.5-48.5c17.7,1.7,35.3,3.4,53,5.1c-1.8-10.3,2.2-21,9.3-28.3c8.9-9.2,19.9-10.5,32.1-9.4\n\t\tc11.3,1,21.6,0.7,31.3-5.9c7.9-5.5,13.8-13.6,17.3-22.5c8-20.2,2.4-41.5-11.3-57.8c-13.4-15.9-34-28.4-54.7-31.8\n\t\tc-16-2.6-38.2-0.8-47.1,15c-8.5,15.1,0.3,30.4,14.7,37.1c15.4,7.2,35.1,7.7,51,1.7c22.8-8.6,43.5-24.9,68.6-26.7\n\t\tc23.3-1.7,38.1,14.8,54.3,28.8c6.5,5.6,13.9,11.7,22.5,13.1c8.6,1.4,17.4-2.9,21.8-10.4c10-17.4-1-39.5-13.1-52.7\n\t\tc-13.5-14.8-32-23.9-51.2-28.5c-20.2-4.8-41.5-5-62-1.5c-25.3,4.3-49.5,14.2-72.8,24.6c-24.7,10.9-48.9,22.9-74.6,31.5\n\t\tc-21.1,7.1-43.2,11.2-65.5,10.7c-21.1-0.5-42.5-5.1-60.6-16.2c-4.3-2.7-8.5-5.7-12.3-9.1c-2.8-2.4-9.7-7.5-9.2-11.3\n\t\tc1-7.1,9.9-9.6,15.8-9.1c6.9,0.5,14.3,4.1,17.2,10.7c4,9.4-1.5,20-8.7,26c-21.2,17.7-48.4,3-68.5-8.6c-19.9-11.4-42.5-24.9-50.2-48\n\t\tc-5.9-17.5-2.1-43.9,19.1-48.6c7.9-1.8,16.7-0.2,23.4,4.2c5.7,3.7,13.1,13.1,8,19.8c-12,15.8-33.2,18-51.5,14.7\n\t\tc-22.6-4-40.8-16.5-60-28.3c-20.6-12.7-43.6-24.6-68.5-19.8c-22.2,4.3-45.4,20.5-68.3,10.3"/>\n\t<path class="st0" d="M-20.1,1466.5c17.4-9.3,36.5-15.7,56.1-18.2c11.4-1.4,24-1.5,34.2,4.5c8.9,5.2,14,14.4,15.7,24.4\n\t\tc3.5,21.1-6.1,42.8-19,59c-13.5,17-32.5,29.8-53.5,35.5c-21.2,5.8-43.6,4.1-64.4-2.4"/>\n\t<path class="st0" d="M129.8,2188.5c26.4-16.6,51.4-35.2,76.9-53.1c25-17.6,50.6-34.7,78.2-48.1c26.9-13,55.5-22,85.4-24.3\n\t\tc27.7-2.1,55.8-0.1,83.3-4.7c24.6-4.1,50-15.4,60.9-39.4c9.7-21.3,5.4-47.7-8.1-66.4c-15-20.6-41.8-29.4-65.8-19.9\n\t\tc-11.6,4.6-21.9,13.9-25.1,26.3c-2.9,11.1-0.4,23.7,6.4,33c7.1,9.8,18.7,14.6,30.7,12.1c12.5-2.6,21.9-12.5,28.8-22.7\n\t\tc7.6-11.4,12.9-24.3,16.7-37.4c3.8-13.1,6.6-27.5,3.8-41.1c-3.1-15.1-13.4-23.1-26.7-29.6c-12.4-6.1-22.5-13.8-26.2-27.6\n\t\tc-6.7-24.9,6.9-52.9,24.5-70c11.1-10.8,24.9-19.9,40.6-21.9c13.4-1.7,27.7,3,36.7,13.3c7.5,8.4,10.4,20.9,5.1,31.2\n\t\tc-4.3,8.4-13,13.6-21.8,16.2c-9.7,2.8-20.5,2.7-30.1-0.8c-11.4-4.2-19.2-13.5-23.9-24.5c-5.7-13.2-6.3-28.1-4.5-42.2\n\t\tc2.1-15.7,7.8-29.9,13.2-44.7c2.9-7.9,5.5-16.4,5-24.9s-4.4-15.6-10-21.8c-10.8-12.3-22.4-23.4-31.7-36.9\n\t\tc-17.1-24.5-28.7-56.4-15.7-85.4c10.7-23.7,36.7-43.4,63.3-33.4c18.7,7,30.3,25.1,39.7,41.7c9.7,17.1,18.1,36.4,32.8,49.9\n\t\tc18.5,17,45.1,14.6,62.3-3.5c17.7-18.7,19.1-46.1,10.7-69.4c-9.4-26.2-29.2-46-54.5-57.1c-30-13.2-63.6-15-96-14.6\n\t\tc-35.9,0.4-72.1,1.9-107.8,5.8c-35.3,3.9-70.6,10.6-104,23c-28.1,10.5-54.9,25-78.3,43.9c-23.5,19.1-43.2,42.7-56.1,70.2\n\t\tc-14.7,31.2-20.7,65.5-24.5,99.5c-0.9,8.6-1.7,17.3-2.5,26c-0.2,2.1-0.4,4.1-0.5,6.2c-0.2,2.3-0.8,3.7,0.8,5.2\n\t\tc1.9,1.8,4.8,3,7.2,3.9c10.7,3.8,22.4,0.5,31.5-5.7c9.5-6.4,17.2-16.4,19.9-27.7c2.8-11.8-0.9-24.1-8.1-33.7\n\t\tc-15.1-20.1-43.6-28.2-67.6-23.4c-30.7,6.1-55.2,28.9-74.4,52.4c-20.1,24.5-40.8,56.1-36.1,89.4c3.5,25.1,21.2,43.1,42.5,55\n\t\tc22.3,12.5,47.1,19.7,70.8,28.8c26.6,10.3,50.8,24.3,70.8,44.9c19.8,20.4,35,45.4,43.2,72.6c-29.1,4.8-58.1,9.5-87.2,14.1\n\t\ts-58.2,9.1-87.3,13.5s-58.3,8.7-87.4,12.9"/>\n\t<path class="st0" d="M1.2,2106.9c24.6-0.8,49.3,1.5,73.2,7.6c18.7,4.8,40.2,12.1,51.2,29.3c12.6,19.6,1.9,42.1-12.5,57.2"/>\n\t<path class="st0" d="M386.5,177.6c-24.5,8.7-29.4,11.4-53,22.1c-23.7,10.8-46.9,22.6-69.6,35.4c-22.2,12.5-43.8,26.4-66.5,37.9\n\t\tc-22.2,11.3-46,20.1-71.1,21c-24.5,0.9-48.7-5.5-70.2-17.2c-19.9-10.9-37.4-26.4-50.6-45c-13.6-19.3-22.7-42.4-23.5-66.2\n\t\tc-0.7-21.2,5.6-44.4,20.1-60.3c14.3-15.6,36.8-20.8,55.6-10c17.8,10.2,28.4,31.9,27.6,52.1c-0.8,20.7-13.5,39.1-29.3,51.5\n\t\tc-18.1,14.2-40.5,20.9-63.3,22.7"/>\n\t<path class="st0" d="M100.4-8.4c20.3,5.3,41.8,7.6,59.2,20.4c17.9,13.3,27.2,34.9,45.7,47.5c17,11.6,38.4,14.8,58.3,9.6\n\t\tC274,66.3,284,61.2,292,53.9c8.1-7.4,13.8-16.9,18.9-26.5c9.2-17.6,16.3-38.4,33.3-50.3"/>\n\t<path class="st0" d="M-5.2,37.9C19,41.7,43.9,42.2,68,37.6c21.8-4.1,43.1-12.5,60.8-26c16.5-12.6,29.6-29.8,37.1-49.2"/>\n\t<path class="st0" d="M1303.9,2027.5c82.2-27.4,116.5-122.2,173.4-187.5"/>\n\t<path class="st0" d="M957.7,974.7c1.1,6.8,2,13.7,2.5,20.6c0.1,0.8,0.1,1.6-0.2,2.4c-0.3,0.8-0.9,1.4-1.5,1.9c-4,3.6-8.4,6.9-12,11\n\t\ts-6.6,8.9-7,14.3c13.9-1.2,27.8-3.2,41.5-5.9c2-0.4,4.5-1.6,4.1-3.5c-0.1-0.7-0.7-1.3-1.2-1.8c-6.4-6.6-13.8-12.1-21.9-16.3"/>\n\t<path class="st0" d="M961.5,1025.5c-2.4,2.4-1.9,7,1,8.9c2.8,1.9,7.2,0.5,8.5-2.7s-1-7.2-4.3-7.8"/>\n\t<path class="st0" d="M891.3,1704.2c1.7,1.3,3.1,2.9,4.1,4.8c1.8,3,2.6,6.5,3.2,10c3,17.5,0.5,37.1-11.5,50.3"/>\n\t<path class="st0" d="M628.1,1699.7c61.5,17.8,124.7,29.6,188.5,35.1c14.9,1.3,29.9,2.2,44.9,2.1c12.7-0.1,25.3-1,37.9-2.7"/>\n\t<path class="st0" d="M873.8,1714.2c-1.7,3.3-4,6.3-6.6,8.9"/>\n\t<path class="st0" d="M881.5,1718c-1,2.2-2.5,4.2-4.4,5.7"/>\n\t<path class="st0" d="M945.5,1729.5c26.3-11.8,59.2-7.3,81.5,11.1c-8.7,6.9-20.4,8.6-31.5,8.5c-12.8-0.1-26-2.4-36.9-9.2\n\t\tc-3.6-2.3-7-5.2-8.6-9.2"/>\n\t<path class="st0" d="M963.5,1739.4c-0.7-2.1,0.6-4.6,2.6-5.3c1.1-0.4,2.4-0.3,3.4,0.4c0.9,0.7,1.3,2.1,0.8,3.2\n\t\tc-0.2,0.5-0.6,0.8-1.1,1.1c-0.9,0.6-2,0.8-3,0.5s-1.8-1.4-1.7-2.4c0.1-1.1,1.2-2,2.3-1.6c1,0.3,1.4,1.9,0.5,2.5"/>\n\t<path class="st0" d="M958.5,1723.3c-2.5-2.6-4.7-5.6-6.5-8.8"/>\n\t<path class="st0" d="M969.1,1719.4c-0.8-2.6-0.9-5.4-0.4-8"/>\n\t<path class="st0" d="M982,1719.2c-0.2-2.1,0.1-4.3,0.9-6.3"/>\n\t<path class="st0" d="M992.5,1722.2c1.3-2.6,2.5-5.2,3.8-7.8"/>\n\t<path class="st0" d="M1004.2,1724c1.9-2.8,3.8-5.6,5.6-8.5"/>\n\t<path class="st0" d="M1016.7,1730.4c1.7-2.3,3.4-4.7,5.1-7"/>\n\t<path class="st0" d="M1025,1736.2c2.3-1.6,4.8-3,7.3-4.2"/>\n\t<path class="st0" d="M955.1,1737.2c0.2-0.3,0.3-0.7,0.2-1c-3.7,1.4-7,3.8-9.6,6.8"/>\n\t<path class="st0" d="M963.1,1744.1c-1.6,2.3-3.2,4.7-4.8,7"/>\n\t<path class="st0" d="M973.1,1748.7c-1,2.3-2.1,4.5-3.1,6.8"/>\n\t<path class="st0" d="M983.9,1748.4c-0.3,2.5-0.6,5.1-0.8,7.6"/>\n\t<path class="st0" d="M994.1,1749.7c1.1,2.5,1.7,5.1,1.8,7.8"/>\n\t<path class="st0" d="M1004.9,1749c0.6,1.9,1.4,3.8,2.5,5.6"/>\n\t<path class="st0" d="M1015.3,1746.7c1.6,2,2.9,4.2,4,6.5"/>\n\t<path class="st0" d="M1058.6,1758.5c12.2,16.7,32.1,27.6,52.8,28.9c0.1-3.8-0.2-7.7-1.1-11.4c14.7,8,30.8,13.3,47.4,15.4\n\t\tc-1-3.3-2.1-6.7-3.1-10c13.5,5.4,27.6,9.1,42,11.2c1.1,0.2,2.4,0.2,3.1-0.7c0.3-0.5,0.4-1.1,0.3-1.7c-0.1-2.3-1.3-4.5-3.1-5.9"/>\n\t<path class="st0" d="M1177.7,1774c3,1.5,5.7,3.5,8,5.9"/>\n\t<path class="st0" d="M1142.8,1769c0.9,2.6,2.3,5,4,7.2"/>\n\t<path class="st0" d="M1095.7,1763.7c1,2.1,2.4,4.1,4,5.9"/>\n\t<path class="st0" d="M1104,1658.1c2.4-1.2,5.5-0.5,7.7,1.1c2.2,1.5,3.8,3.8,5.5,6c0.3,0.4,0.9,0.9,1.4,0.7c0.3-0.1,0.4-0.4,0.6-0.6\n\t\tc3.1-4.5,9.6-5.1,13.9-8.4"/>\n\t<path class="st0" d="M1158.7,1628.1c5.3-0.4,10.6,3.3,12.1,8.4c0.6-2.3,2.5-4.1,4.6-5.1s4.5-1.3,6.9-1.7"/>\n\t<path class="st0" d="M1216.8,1585.4c4.5,1,8.6,3.5,11.7,6.8c0.9-5.2,6.6-8.9,11.7-7.8"/>\n\t<path class="st0" d="M1255.1,1639.1c-2.7-2.5-4.1-6.4-3.5-10.1s3.1-6.9,6.5-8.5c1.2-0.5,2.5-0.9,3.8-0.8c4,0.3,6.6,4.9,5.8,8.9\n\t\tc-0.8,3.9-4.1,6.9-7.8,8.6c-2.7,1.2-6,1.8-8.7,0.6c-1.7-0.8-3-2.1-4.2-3.6c-3.9-4.9-6.1-11-6.2-17.3c0-1.5,0.1-3.1,1.2-4"/>\n\t<path class="st0" d="M1254.5,1621.7c0.6-4.4,0.6-9-0.1-13.4"/>\n\t<path class="st0" d="M1256.2,1638.2c-0.8,2-2.6,3.2-4.4,4.4c-10.4,6.9-20.2,14.7-29.4,23.1c0.1-0.5,0.2-1.1,0.3-1.6"/>\n\t<path class="st0" d="M1234.6,1656.6c1.9,0.6,3.9,0.3,5.8-0.1c3.5-0.7,7.1-1.4,10.6-2c0.7-0.1,1.5-0.2,2,0.2\n\t\tc0.3,0.3,0.4,0.8,0.5,1.3c0.4,2,0.8,4.1,1.2,6.1"/>\n\t<path class="st0" d="M1269.5,1656c2.8-0.3,5.5,2.2,5.4,5"/>\n\t<path class="st0" d="M1280.3,1653.7c1,2.2,2,4.4,2.9,6.5"/>\n\t<path class="st0" d="M1291.6,1646.8c5-3.3,12.3-2.1,16.4,2.1c4.2,4.3,5.3,11.1,3.4,16.7c-1.9,5.7-6.5,10.3-11.9,12.8\n\t\tc-2.7,1.3-5.9,2.1-8.8,1.2c-2.9-1-5.1-4.3-4-7.1c0.6-1.4,1.8-2.5,3.2-3c2.5-1,5.5-0.5,7.6,1.2s3,4.6,2.5,7.3\n\t\tc-0.9,4.2-5.2,6.8-9.2,8.5c-5.3,2.4-10.9,4.3-15.7,7.5c-4.9,3.2-9.1,7.9-10.1,13.6"/>\n\t<path class="st0" d="M1257.4,1705.3c-0.3,0.2-0.6,0.4-0.8,0.5c0.7,3.9,2.2,7.6,4.4,10.9c0.3,0.4,0.7,0.9,1.1,0.8\n\t\tc0.2,0,0.4-0.2,0.6-0.3c3.7-2.6,7.3-5.4,10.6-8.5"/>\n\t<path class="st0" d="M1141.3,1523.1c-0.7,0.6-1.3,1.3-1.9,2c-9,11.4-13.8,26-13.4,40.5s6,28.8,15.6,39.7"/>\n\t<path class="st0" d="M1127.1,1572.3c3.6,2.9,8.5,3.2,13.1,3c13.2-0.4,26.3-3,39-6.6c16.9-4.7,33.5-11.1,48.7-19.8\n\t\tc4.6-2.6,9.2-5.6,12.5-9.7c3.9-4.7,5.8-10.7,7.7-16.5"/>\n\t<path class="st0" d="M1152.7,1551.2c-0.8,2-1.6,3.9-2.4,5.9"/>\n\t<path class="st0" d="M1157.6,1554.5c-0.5,2.3-1,4.6-1.4,6.9"/>\n\t<path class="st0" d="M1036.3,1570.5c1.8,0.3,3.5-0.9,5.1-2c13.8-9.6,31-14.1,47.7-12.4c5.2,0.5,10.5,1.7,14.9,4.5\n\t\tc1,0.7,2.1,1.6,2.1,2.9c0,0.7-0.4,1.3-0.8,1.9c-2.7,3.9-6.9,6.4-11.2,8.4c-8.9,4.2-18.6,6.8-28.4,6.8s-19.7-2.9-27.5-8.9"/>\n\t<path class="st0" d="M1088.6,1573.1c-1.9-0.5-2.9-3.2-1.7-4.8c1.2-1.6,4.1-1.4,5,0.3c1,1.7-0.3,4.3-2.3,4.5c-1,0.1-2.1-0.4-2.6-1.3\n\t\ts-0.1-2.2,0.8-2.6s2.2,0.3,2.3,1.3s-1.4,1.8-2.2,1.1"/>\n\t<path class="st0" d="M1039.6,1566.5c-1.7-1.4-4.1-1.3-6.2-1.9c-2.1-0.5-4.4-2.4-3.7-4.5c0.2-0.8,0.9-1.5,1.7-1.8\n\t\tc1.9-0.9,4.2-0.1,6,1s3.6,2.4,5.6,2.7s4.6-1.1,4.5-3.2c-0.1-1.9-2.1-3.2-2.9-4.9c-0.9-1.9-0.1-4.3,1.7-5.3c1.8-1,4.3-0.4,5.5,1.4\n\t\tc1.2,1.9,0.8,4.6,2.1,6.4c0.6,0.9,1.6,1.5,2.6,1.8c4.2,1.4,9.2-1.8,9.7-6.2c0.4-2.9-1-6.1,0.4-8.7c1-1.9,3.3-2.9,5.4-2.4\n\t\tc2,0.5,3.6,2.6,3.5,4.7c-0.1,1.7-1.1,3.4-0.8,5.1c0.4,2.6,3.5,3.9,6.1,4.1c2.1,0.2,4.7-0.3,5.6-2.2c0.5-1,0.4-2.3,0.4-3.4\n\t\tc-0.1-2.4,0.4-5,2.1-6.6c1.8-1.6,5.2-1.4,6,0.9c1.1,2.9-2.8,5.6-2.8,8.7c0,2,1.9,3.7,3.9,3.6c5-0.4,5.2-9.8,10.3-10.2\n\t\tc3.4-0.3,5.3,4.5,3.7,7.6c-1.6,3-5,4.6-8.2,5.8"/>\n\t<path class="st0" d="M1037.8,1573.5c-3.1,0.2-6,2.7-6.3,5.8c-0.2,3.1,2.9,6.1,5.9,5.5c2.5-0.5,4-3,6-4.5s5.8-1.6,6.3,0.9\n\t\tc0.4,2.3-2.5,3.8-2.8,6.1c-0.4,2.4,2.5,4.3,4.8,3.7c2.3-0.6,3.8-2.9,4.4-5.2c0.2-0.9,0.3-1.8,0.7-2.6c0.8-1.6,2.6-2.7,4.4-2.4\n\t\tc1.8,0.2,3.3,1.6,3.7,3.4c0.4,1.8-0.4,3.7,0.4,5.3c0.9,1.9,3.4,2.3,5.6,2.3c2.1,0,4.7-0.3,5.5-2.3c0.9-2.4-1.6-5.2-0.4-7.4\n\t\tc1.1-2.2,4.7-1.6,6.4,0.2c1.8,1.8,2.7,4.3,4.7,5.8s4.9,1.7,6.9,0.2s2.5-4.7,0.9-6.6c-1-1.2-2.9-2.4-2.3-3.9c0.4-1,1.8-1.2,2.9-1.1\n\t\tc2.8,0.3,5.3,1.6,7.9,2.7c2.6,1,5.5,1.8,8.1,1s4.9-3.7,4-6.3c-1.4-4.4-8.6-3.6-11.2-7.5"/>\n\t<path class="st0" d="M1008.7,1637.8c-5.2-15.4-13.3-29.9-23.7-42.4c-5.3,0.8-10.5,3-14.7,6.3c-3.9,3-7.3,8.1-5.6,12.7\n\t\tc1.8,4.7,8.4,6.2,12.9,3.8c4.5-2.3,7.1-7.2,8.5-12.1c1.6-5.7,2.2-12.2,6.5-16.3c2.5-2.3,6-3.6,9.3-3.2c3,0.3,6,1.9,7.4,4.6\n\t\ts0.8,6.4-1.7,8.1c-1.2,0.8-2.7,1.1-4.1,1.3c-5.1,0.6-10.4-0.6-14.8-3.1c-2.1-1.2-4.6-2.8-6.7-1.6"/>\n\t<path class="st0" d="M976.3,1606.3c-0.2,2.2-0.5,4.4-0.7,6.6"/>\n\t<path class="st0" d="M923.4,1620.1c5.5-0.8,10.5-4.7,12.6-9.9c1-2.5,1.3-5.3,1.2-8c-0.2-2.7-0.8-5.3-2.1-7.6\n\t\tc-2.9-5.1-9.2-7.9-14.9-6.7"/>\n\t<path class="st0" d="M931.5,1581.2c1.6-1.7,3.2-3.5,4.8-5.2"/>\n\t<path class="st0" d="M945.6,1590c2.2-0.8,4.3-1.5,6.5-2.3"/>\n\t<path class="st0" d="M947.1,1603.2c2.1,0,4.2,0,6.3,0.1"/>\n\t<path class="st0" d="M941.7,1614.6c2.5,0.6,5.1,1,7.6,1.2"/>\n\t<path class="st0" d="M934.5,1624c2.2,0.8,4.1,2.4,5.3,4.5"/>\n\t<path class="st0" d="M1048.6,1475.6c-2.1,2-2.2,5.6-0.2,7.7"/>\n\t<path class="st0" d="M1039,1480c-0.2,3.1-0.4,6.2-0.6,9.3"/>\n\t<path class="st0" d="M693.5,1624.3c44.3-7.8,88-17.8,130.7-30c6.6-1.9,13.3-3.8,20.3-3.3c3.8,0.3,7.6,1.3,11.3,2.4\n\t\tc19.1,5.4,38.1,10.7,57.2,16.1"/>\n\t<path class="st0" d="M838.3,1604.5c-1.3,2.4-2.7,4.8-4.3,7"/>\n\t<path class="st0" d="M851.3,1604.2c-0.4,2.2-1.1,4.4-1.9,6.5"/>\n\t<path class="st0" d="M862.1,1603.2c0.4,2.7,0.6,5.4,0.4,8.1"/>\n\t<path class="st0" d="M735.2,1542.5c19.8-1.2,38.6-8.7,56.8-16.3c7.4-3.1,15-6.3,23.1-6.9c9.2-0.6,18.3,2.4,26.7,6.1\n\t\tc13.8,5.9,26.7,13.7,40.2,20.2c13.5,6.6,27.8,12,42.8,13"/>\n\t<path class="st0" d="M810.1,1529.2c-2.5,3-4.3,6.6-5,10.4"/>\n\t<path class="st0" d="M822.2,1533.3c-0.4,2-0.7,4-1.1,5.9"/>\n\t<path class="st0" d="M833.9,1533.3c0.9,4,1.7,7.9,2.6,11.9"/>\n\t<path class="st0" d="M837.2,1524.3c28.1-9.3,54-23.6,79.7-37.8c6.4-3.5,10.1-6.8,17.2-8.5c15.3-3.5,21.5,3.8,37.2,2.7"/>\n\t<path class="st0" d="M933.4,1493.7c-0.5,2.3-1,4.6-1.4,6.9"/>\n\t<path class="st0" d="M946.8,1493.5c-0.4,1.8-0.3,3.6,0.2,5.4"/>\n\t<path class="st0" d="M957.9,1491.5c1.4,2.4,2.9,4.7,4.6,6.9"/>\n\t<path class="st0" d="M860.6,1420.4c-1.8,3.2-3.3,6.7-3.6,10.4c-0.2,3.7,1,7.6,3.9,9.9c2.6,2,6,2.5,9.2,2.6c2.4,0.1,4.8,0.1,7.1-0.7\n\t\ts4.4-2.2,5.3-4.4"/>\n\t<path class="st0" d="M848.3,1420.1c-2.2,0.1-4.5,0-6.7-0.3"/>\n\t<path class="st0" d="M847,1435.9c-2,0.2-4,0.4-6.1,0.6"/>\n\t<path class="st0" d="M853.4,1445c-1.4,1.2-2.8,2.5-4.2,3.7"/>\n\t<path class="st0" d="M862.8,1451.9c0,1.8-0.3,3.6-0.8,5.3"/>\n\t<path class="st0" d="M880.8,1455.7c0.3,1.4,0.5,2.7,0.8,4.1"/>\n\t<path class="st0" d="M890.3,1453c0.2,1.8,1.3,3.5,2.7,4.5"/>\n\t<path class="st0" d="M783.6,1465.9c1.4,3.4,2.9,6.9,4.3,10.3c0.5,1.2,1.1,2.5,2.4,2.8c0.6,0.2,1.3,0,2-0.1\n\t\tc14.1-3.3,28.2-6.5,42.4-9.8"/>\n\t<path class="st0" d="M801.4,1467.7c7.5,1.6,15.1,3.2,22.6,4.8c-5.1,4.9-10.1,9.8-15.2,14.7"/>\n\t<path class="st0" d="M812.5,1358.7c-3.2-0.1-6.2,2.5-6.6,5.6"/>\n\t<path class="st0" d="M803,1353.2c-1.4-0.9-3.4-0.2-4.5,1.1c-1.1,1.3-1.5,3-1.7,4.6"/>\n\t<path class="st0" d="M852.7,1356.5c-3.7-2.6-6-6.9-6.2-11.4c-0.1-1.5,0.1-3,0.7-4.3c1-2.3,3.3-3.9,5.5-5c4.1-2.1,9.1-3.2,13.2-1\n\t\tc4.4,2.4,6,8.4,4.2,13s-6.6,7.7-11.5,8.4c-4.9,0.7-10-0.7-14.3-3.2c-3.3-1.9-6.3-4.3-8.4-7.5c-2.1-3.2-3.1-7.1-2.4-10.8"/>\n\t<path class="st0" d="M848.3,1329.4c0.4-0.4,1,0.2,1.2,0.7c0.8,1.9,1.5,3.7,2.3,5.6"/>\n\t<path class="st0" d="M853,1358.2c-8.3,13.8-23.6,22-32.5,35.3"/>\n\t<path class="st0" d="M833.1,1382.4c5.1-1.8,10.5-3.6,15.8-2.7c3.2,0.5,6.1,2,8.9,3.6c3.2,1.7,6.3,3.6,9.3,5.6"/>\n\t<path class="st0" d="M881.2,1375.2c2.7-0.3,5.3,2,5.4,4.7"/>\n\t<path class="st0" d="M895.1,1370c0.7,1.4,1.1,2.9,1.2,4.4"/>\n\t<path class="st0" d="M886.5,1436.7c4.3,0.2,8.5-2,12-4.4c2.9-2,5.7-4.4,7.3-7.4c1.6-3,2.1-6.8,0.3-9.7c-1.8-3-5.9-4.6-9.2-3\n\t\tc-3.2,1.4-4.4,5.5-3,8.6c1.4,3,4.9,4.9,8.5,5.1c2.4,0.2,4.8-0.5,6.9-1.6c2.6-1.4,4.5-3.7,6.6-5.7c2.9-2.7,6.2-5.1,10-6.2\n\t\tc3.8-1.2,8.1-1.1,11.6,0.9c3.3,2,5.4,6,4.3,9.6c-0.9,3.3-4.5,5.8-8.1,5.7c-3.7,0-7-2.6-7.8-5.9c-0.2-0.9-0.2-1.8,0-2.7\n\t\tc0.4-1.5,1.7-2.7,3-3.4c4.4-2.6,10.2-1.7,14.8,0.5s8.5,5.5,13,7.6c4.2,2,8.9,3,13.6,3c4.7,0,10.1-1.9,11.3-6.1\n\t\tc0.7-2.4-0.3-5.1-2.2-6.8c-2-1.7-4.7-2.3-7.3-2.2c-6.5,0.5-11.8,7.1-10.7,13.1c0.7,3.6,3.3,6.5,5.3,9.7c2,3.2,3.4,7.1,1.7,10.4\n\t\tc-2.1,3.9-7.5,5.1-12.1,5.2c-3.1,0.1-7.1-0.8-7.1-3.7c-0.1-1.7,1.4-3.2,3.1-3.6s3.6-0.2,5.3,0.2c1.8,0.5,3.6,1.2,4.7,2.5\n\t\tc1.5,1.8,1.8,4.2,2,6.5c0.7,8,1.3,16,1.9,24"/>\n\t<path class="st0" d="M1106.6,1461.1c-0.3,2.4-0.5,4.8-0.1,7.2c0.4,2.4,1.6,4.7,3.6,6c1.9,1.3,4.3,1.7,6.6,1.4\n\t\tc2.5-0.3,5-1.3,6.8-3.1c1.8-1.8,2.9-4.3,2.7-6.9"/>\n\t<path class="st0" d="M1095.9,1471.8c-3,0.4-5.9,2.2-7.4,4.9"/>\n\t<path class="st0" d="M1105.3,1480.4c-1.6,1.8-2.3,4.2-2,6.6"/>\n\t<path class="st0" d="M1117,1482.5c0.7,1.2,1.1,2.7,1,4.1"/>\n\t<path class="st0" d="M1127.8,1479.8c0.3,1.2,0.5,2.5,0.8,3.7"/>\n\t<path class="st0" d="M1265.6,1584.8c12.5,3.1,25.9-0.3,38.1-4.5c11.5-4,22.9-8.8,33.6-14.4c3.1,4.5,6.7,9,12,11.5\n\t\tc7.1,3.4,15.8,2.7,23.2,0c7.4-2.7,13.8-7.2,20.2-11.4c1-0.7,2.1-1.3,3.4-1.4c0.9,0,1.9,0.3,2.7,0.7c5.2,2.1,11.6,4.4,16.1,1.3"/>\n\t<path class="st0" d="M1336.8,1546.7c-2,1.5-3.7,3.6-4.6,5.9"/>\n\t<path class="st0" d="M1341.9,1549.9c-1,1.9-2,3.9-3,5.8"/>\n\t<path class="st0" d="M1394.3,1548c-2,1.4-3.6,3.4-4.5,5.6"/>\n\t<path class="st0" d="M1398.5,1547.4c-0.9,2.5-1.9,5-2.8,7.5"/>\n\t<path class="st0" d="M1352.9,1411c-1.8-3.4-3.4-6.9-4.8-10.4c-0.2-0.6-0.5-1.3-0.4-2c0-0.7,0.4-1.4,0.8-2c3-4.3,9.6-5.7,14-2.8\n\t\tc0.8,0.5,1.6,1.2,2.1,2.1c0.6,1,0.8,2.2,0.7,3.4c-0.2,3.6-2.9,6.8-6.1,8.4c-3.3,1.6-7.1,1.8-10.7,1.4c-1.8-0.2-3.6-0.6-5.2-1.5\n\t\tc-2.6-1.4-4.2-4-5.5-6.6c-1.4-2.9-2.4-6-2.9-9.2"/>\n\t<path class="st0" d="M1348.7,1395.8c-2-2.4-2.6-5.9-1.6-8.8"/>\n\t<path class="st0" d="M1352.5,1411.6c-0.6,5.2,0.6,10.3,1.3,15.5c1,7.1,1.3,14.3,0.9,21.4"/>\n\t<path class="st0" d="M1352.7,1429.7c0.2-0.7-0.8-1.1-1.5-1.2c-3.1-0.5-6.2-0.7-9.3-0.8c-1.2,0-2.5,0-3.4,0.7\n\t\tc-1.5,1-1.8,3.1-1.9,4.9"/>\n\t<path class="st0" d="M1362.8,1333.7c4.7,6.3,8.6,13.4,10.7,21s2.3,15.9-0.3,23.4"/>\n\t<path class="st0" d="M1318.4,1398.5c12.9-18.9,30.4-34.5,50.5-45.3"/>\n\t<path class="st0" d="M1352.5,1347.5c-0.2,1.4-0.4,2.9-0.6,4.3"/>\n\t<path class="st0" d="M1359,1345.3c-0.2,1.3-0.4,2.6-0.6,4"/>\n\t<path class="st0" d="M1381.6,1344.9c9.4-8.7,22.9-12.7,35.5-10.4"/>\n\t<path class="st0" d="M1383.5,1345.6c0.8,1.5,2.5,2.1,4.1,2.5c6.2,1.6,12.8,2.4,19.1,1c6.3-1.5,12.2-5.4,14.8-11.3"/>\n\t<path class="st0" d="M1393.2,1347.1c1.4-0.9,2.7-1.8,4.1-2.7c0.3,0.8,0.4,1.7,0.1,2.5c-0.4,0.8-1.2,1.3-2.1,1.2\n\t\tc-1-0.2-1.7-1.6-1.1-2.5c0.5-0.9,2-1,2.7-0.2"/>\n\t<path class="st0" d="M1387,1340.7c-1.6-1.2-3.2-2.4-4.8-3.6"/>\n\t<path class="st0" d="M1394,1334.1c-1.3-1.6-2.2-3.5-2.7-5.5"/>\n\t<path class="st0" d="M1403.5,1330.8c-0.8-1.6-0.5-3.7,0.8-5"/>\n\t<path class="st0" d="M1412.9,1331.3c0.7-2,1.4-3.9,2.1-5.9"/>\n\t<path class="st0" d="M1388.7,1350.5c-0.6,2.1-1.1,4.2-1.7,6.2"/>\n\t<path class="st0" d="M1399.1,1351.4c0.5,1.7,0.6,3.6,0.2,5.4"/>\n\t<path class="st0" d="M1410.5,1349.2c1.1,2.2,2.5,4.2,4.3,5.9"/>\n\t<path class="st0" d="M1262.6,1168.2c3.2,2.6,7.9,1.5,11.7,2.9c3.9,1.4,6.4,5.3,8,9.2c2.7,6.6,3.6,13.8,4.1,21\n\t\tc0.2,3.3,0.5,6.9,2.5,9.6c5.9,7.5,20.3,1.2,26.2,8.7c2.3,2.9,2.4,6.9,2.8,10.6s1.7,7.8,5.2,9.2c1.2,0.5,2.6,0.6,3.9,1.1\n\t\tc4.4,1.7,5.6,7.4,5.5,12.2c-0.2,4.8-0.9,10,1.9,13.9c2.6,3.6,7.3,4.7,11.5,5.9s8.9,3,10.6,7.1c0.9,2.3,0.7,4.9,1.1,7.3\n\t\tc0.7,4.7,3.9,9,8.2,11.2c1.7,0.8,3.5,1.4,4.8,2.8c0.9,1.1,1.3,2.5,1.7,3.9c1.2,4.6,2.4,9.2,3.7,13.8"/>\n\t<path class="st0" d="M1277.7,1175.2c0.2-0.4,0.4-0.9,0.5-1.3c-7.3,5.3-16.6,7.3-23.6,12.9"/>\n\t<path class="st0" d="M1287.3,1211c-9.1,8.2-19.6,14.8-31,19.3"/>\n\t<path class="st0" d="M1313.7,1221.1c-11.8,9.9-23.9,19.3-36.4,28.2"/>\n\t<path class="st0" d="M1318.2,1239.7c0.2,0.2,0-0.4-0.2-0.2c-0.2,0.2-0.1,0.6-0.4,0.8c-9.7,9.6-20.3,18.2-31.7,25.8"/>\n\t<path class="st0" d="M1329.8,1243.2c-9.3,11.3-18.6,22.5-27.9,33.8c-1.5,1.8-3.1,3.7-3.7,6"/>\n\t<path class="st0" d="M1332.2,1266.4c0.1,1.5-0.9,2.9-1.9,4.1c-6.2,7.5-13.4,14.1-18.7,22.2"/>\n\t<path class="st0" d="M1352.9,1277.9c-5.8,12.7-17.5,21.9-23.7,34.4"/>\n\t<path class="st0" d="M1359.6,1296.7c-4.5,8.6-9.1,17.1-13.8,25.6"/>\n\t<path class="st0" d="M1368.4,1301.1c0.9,0.5,0.7,1.7,0.4,2.7c-1.8,6.2-4.2,12.2-7.1,18"/>\n\t<path class="st0" d="M1340.8,1168.6c17.1,19.7,19.9,48.1,33.5,70.3c-4.1,1.4-7.9,3.7-11.2,6.5"/>\n\t<path class="st0" d="M1364.9,1261.8c0.6-3.1,3.3-5.3,6-7.1c7-4.7,15.1-8.9,23.5-8.1c1,3-0.1,6.2-1.5,9\n\t\tc-4.2,8.3-11.8,14.9-20.8,17.5c-1.7,0.5-3.5,0.9-5.2,0.4s-3.2-2-3.1-3.7c0.1-1.4,1.2-2.7,2.5-3.3s2.7-0.9,4.2-1.2\n\t\tc7.9-1.7,15.1-6.3,20-12.7"/>\n\t<path class="st0" d="M1321.1,1213.9c2.3-3.1,6.4-4.2,10.2-4.9c3.8-0.8,7.8-1.5,10.6-4.1"/>\n\t<path class="st0" d="M1360.4,1190.6c2.1-1.4,4.7-2,7.1-2.8s4.9-2.1,6-4.4"/>\n\t<path class="st0" d="M987.3,1074c1.9,24.4,3.8,48.8,5.7,73.2"/>\n\t<path class="st0" d="M978.4,1127c9.5,1.3,19.1,1.1,28.5-0.7"/>\n\t<path class="st0" d="M976.2,1110.3c7.9,0.8,16,0.5,23.8-0.8"/>\n\t<path class="st0" d="M977.4,1094.6c7.6-0.8,15.3-1.7,22.9-2.5"/>\n\t<path class="st0" d="M977.9,1082.4c6.7-0.2,13.4-0.5,20.1-1.1"/>\n\t<path class="st0" d="M1040.5,1076.3c-3.4,26.3-6.7,52.5-10.1,78.8"/>\n\t<path class="st0" d="M1021.8,1128.5c6.9,1.4,13.8,2.7,20.7,4.1c1.2,0.2,2.5,0.5,3.5-0.1"/>\n\t<path class="st0" d="M1021.9,1111.2c9,1.4,18,2.8,27,4.2c-0.4-0.1-0.8-0.2-1.2-0.3"/>\n\t<path class="st0" d="M1023.1,1097.2c7.1,2,14.3,3.6,21.5,4.8c1.6,0.3,3.5,0.5,4.8-0.5"/>\n\t<path class="st0" d="M1025,1087.1c7.9,0.6,15.8,2.2,23.3,4.7"/>\n\t<path class="st0" d="M1089.7,1069.3c1,31.3,2,62.6,3.1,93.8c0.4-0.2,0.8-0.4,1.1-0.6"/>\n\t<path class="st0" d="M1079.4,1135.8c6.1,0.1,12.3,0.1,18.4,0.2c2.6,0,5.3,0,7.7-0.9"/>\n\t<path class="st0" d="M1073.4,1114.7c3.5,0.1,7,0.3,10.6,0.4c5.4,0.2,10.9,0.4,16.2-0.5"/>\n\t<path class="st0" d="M1079.2,1097.4c6.9-0.7,13.9-1.4,20.8-2.1"/>\n\t<path class="st0" d="M1074.3,1084.5c9.7,0.6,19.4,0.6,29,0.2"/>\n\t<path class="st0" d="M1148.1,1067c-0.7,33-9.8,65.1-13.5,97.9c0.1-0.6,0.2-1.2,0.3-1.9"/>\n\t<path class="st0" d="M1125.7,1143.9c8.7,1.8,17.7,2.5,26.6,2.1"/>\n\t<path class="st0" d="M1126.7,1117.6c8.2,2.9,16.7,4.9,25.3,5.9"/>\n\t<path class="st0" d="M1130.9,1098.3c8.2,1.9,16.5,3.8,24.7,5.6"/>\n\t<path class="st0" d="M1136.1,1083.6c6.1,1.8,12.2,3.4,18.4,4.6"/>\n\t<path class="st0" d="M1136.6,1075.9c6.8,0.1,13.6,0.2,20.4,0.3"/>\n\t<path class="st0" d="M1184.3,1177.1c0.1-29.5,0.3-59,0.5-88.4"/>\n\t<path class="st0" d="M1172.8,1100.6c8.4,0.4,16.8,0.9,25.2,1.3c0.6,0,1.4,0.1,1.8,0.6"/>\n\t<path class="st0" d="M1173.2,1116.5c8.1,0,16.2,0,24.4,0"/>\n\t<path class="st0" d="M1173,1135c5.6-0.3,11.3-0.6,16.9-0.8c2-0.1,4.1-0.2,5.8,0.8"/>\n\t<path class="st0" d="M1172.5,1153.9c7.2,0.8,14.4,1.8,21.6,2.8"/>\n\t<path class="st0" d="M1238.4,1092.6c5.1,28,8.6,56.3,10.5,84.7c0.1-0.5,0.2-1,0.4-1.5"/>\n\t<path class="st0" d="M1230.5,1118.8c-0.5-0.2,0.1-0.9,0.6-1.1c10.2-2.6,20.6-4.4,31.1-5.3"/>\n\t<path class="st0" d="M1231.7,1130.9c10.5-0.5,20.9-1.5,31.3-3.1"/>\n\t<path class="st0" d="M1229.7,1146.8c9.6,0.6,19.1-2.2,28.3-5"/>\n\t<path class="st0" d="M1310.7,1074.4c0.1,20.7-0.7,41.4-2.3,62"/>\n\t<path class="st0" d="M1297.3,1085.2c9.2-0.8,18.5-1.1,27.8-0.8"/>\n\t<path class="st0" d="M1297.5,1098.3c8,0,16-0.1,24-0.1"/>\n\t<path class="st0" d="M1297.6,1113.6c8.5-0.1,17.1-0.8,25.5-2"/>\n\t<path class="st0" d="M1366.6,1068.2c-6.1,21.5-11.1,43.2-15.1,65.2"/>\n\t<path class="st0" d="M1343.1,1106.1c9.3,2,18.7,4.1,28,6.1"/>\n\t<path class="st0" d="M1343.9,1088.5c8.8,2.1,17.5,4.3,26.3,6.4"/>\n\t<path class="st0" d="M1350.5,1078.5c8.7,1.6,17.4,2.6,26.2,3.1"/>\n\t<path class="st0" d="M952.9,1156c1.3,3.2,2.4,6.6,3.4,9.9"/>\n\t<path class="st0" d="M969.2,1141.7c-0.4,3.1-0.2,6.3,0.4,9.4"/>\n\t<path class="st0" d="M981,1168.1c-0.7,3.3-0.3,6.7,0.9,9.8"/>\n\t<path class="st0" d="M1010.3,1141.5c-0.3,4.7-0.6,9.3-0.9,14"/>\n\t<path class="st0" d="M1007.5,1186.1c-0.2,3.9-0.5,7.8-0.7,11.6"/>\n\t<path class="st0" d="M1027.8,1187.4c-0.6,4.3-1.1,8.6-1.2,12.9"/>\n\t<path class="st0" d="M1050.3,1175.4c-0.3,3.2-0.6,6.4-0.9,9.6"/>\n\t<path class="st0" d="M1058,1152.5c1,2.4,1.6,4.9,1.9,7.5"/>\n\t<path class="st0" d="M1055.2,1202.8c0.2,3.7,0.4,7.4,0.6,11.1"/>\n\t<path class="st0" d="M1091.2,1199.3c0,4.3-0.1,8.7-0.1,13"/>\n\t<path class="st0" d="M1124.9,1160.1c2,4,2.9,8.7,2.3,13.1"/>\n\t<path class="st0" d="M1146.1,1191.4c0.3,2.9,0.6,5.8,0.8,8.7"/>\n\t<path class="st0" d="M1168.4,1166.7c-0.5,6.1-1,12.2-1.5,18.3"/>\n\t<path class="st0" d="M1180.7,1205.3c0.4,3.7,0.4,7.4,0,11"/>\n\t<path class="st0" d="M1210.1,1193.7c-0.2,2.1-0.5,4.2-0.7,6.3"/>\n\t<path class="st0" d="M1219.5,1165.6c0.5,6,1,12.1,1.5,18.1"/>\n\t<path class="st0" d="M1235.7,1195.7c-0.2,3.4-0.4,6.9-0.6,10.3"/>\n\t<path class="st0" d="M1199.3,1040.1c5.9-2.8,13.6-1,17.7,4.1c2.7-4.1,6.9-7.3,11.7-8.8"/>\n\t<path class="st0" d="M1256.1,1010.7c6.2-0.7,12.6,2.5,15.8,7.8c1.6-1.2,2.5-3.2,3.7-4.8c1.7-2.4,4.3-4.2,7.1-5.1"/>\n\t<path class="st0" d="M1309.1,975c2.9,1.4,5.8,2.9,8.7,4.3c1.1,0.5,2.2,1.1,2.8,2.2c0.6,1.2,0.5,2.7,1.4,3.7\n\t\tc4.4-4.9,10.4-8.3,16.8-9.7"/>\n\t<path class="st0" d="M875.7,1255.9c-12.6-1.3-24.8,3.8-35.1,9.9c-10.3,6.1-19.8,13.5-31.4,17.9c-14,5.3-29.7,5.7-45.1,6"/>\n\t<path class="st0" d="M905.8,1257.6c-2.8-1.7-7-1.5-8.8-4.3c-0.6-0.9-0.8-2-0.9-3.1c-0.5-3.2-0.7-6.9,1.4-9.4\n\t\tc1.1-1.3,2.7-2.1,4.3-2.5c3.2-0.8,6.8-0.1,9.3,2.1c2.5,2.1,3.7,5.7,3,8.9c-0.9,3.6-4,6.2-7,8.2c-6.7,4.3-14.2,7.2-22.1,8.4\n\t\tc-2.4,0.4-5,0.6-7.3-0.2c-2.3-0.7-4.5-2.6-4.9-5"/>\n\t<path class="st0" d="M904.3,1256.2c-5.7-1.4-11.2-3.9-16-7.3c-1.2-0.9-2.4-1.8-3-3.1c-0.6-1.3-0.5-3.1,0.6-4.1"/>\n\t<path class="st0" d="M908.9,1256.1c-0.4-0.2-0.5,0.5-0.3,0.9c5.1,10.9,12.4,20.8,16.1,32.3c0.1,0.3,0.3,0.7,0.6,0.7s0.2-0.7,0-0.5"\n\t\t/>\n\t<path class="st0" d="M918.9,1275.3c-2.7-2.2-6.9-2.1-9.9-0.2c-3,1.8-4.9,5-5.9,8.4"/>\n\t<path class="st0" d="M829,1311.9c-0.9,4.3-1.9,8.6-2.8,12.9"/>\n\t<path class="st0" d="M820.1,1309.7c-1.5,5-3.1,10.1-4.6,15.1"/>\n\t<path class="st0" d="M1213.4,893.9c26.8,1.8,52.3,11.3,78.4,17.6s54.6,9,78.9-2.2c1.4-0.6,3-1.3,4.3-0.5c1.4,0.8,1.5,2.7,1.4,4.3\n\t\tc-0.5,9.8-2.4,19.6-5.6,28.9"/>\n\t<path class="st0" d="M1387.4,955.3c-0.4-13.1,0.3-26.2,2-39.2c0.5-3.6,1.1-7.4,3.2-10.4s6-5,9.5-3.7c1.9,0.7,3.3,2.3,4.5,4\n\t\tc6.7,9.5,7.6,22.1,5.3,33.5c-1.9,9.6-6.4,19.4-14.9,24.4c-1.2,0.7-3,1.3-3.9,0.2c-0.4-0.4-0.5-1.1-0.6-1.6\n\t\tc-1.1-8,2.2-15.8,4.8-23.5c4-11.8,6.2-24.2,6.7-36.6"/>\n\t<path class="st0" d="M1275.1,846.8c-0.7-0.3-1.4-0.6-2.2-0.8c-5.7,11.7-6.8,25.6-3,38c0.8,2.6,1.9,5.3,3.8,7.2c2,1.9,5,3,7.5,1.9\n\t\tc1.5-0.6,2.6-1.9,3.6-3.2c6.1-8,8.7-18.4,7.3-28.4c-0.9-6.3-3.9-12.8-9.6-15.7c-1.2-0.6-2.6-1-4-0.8c-2.9,0.5-4.4,3.7-5,6.5\n\t\tc-0.3,1.7-0.5,3.6,0.1,5.2c0.6,1.6,2.3,3,4,2.9c0.9-0.1,1.7-0.5,2.4-1c2.3-1.7,3.6-5.4,1.6-7.5c-1.7-1.9-5.4-1-6.2,1.4\n\t\tc-0.8,2.4,1.8,5.2,4.3,4.6c0.7-1.9,1.5-4.1,0.6-6c-0.8-1.9-4.1-2.5-4.8-0.6"/>\n\t<path class="st0" d="M1258.2,922.4c-10.2,11.3-13.6,28.4-8.4,42.7c1.6,4.3,4.8,9,9.4,8.7c3.6-0.2,6.2-3.4,8-6.5\n\t\tc5.6-9.6,7.6-21.2,5.8-32.2c-0.9-5.4-3.9-11.6-9.4-12.2c-4.7-0.5-9.1,4.6-7.9,9.2c0.7,2.8,4.4,5.1,6.7,3.3c2.1-1.7,0.9-5.6-1.7-6.4\n\t\tc-0.5-0.1-1-0.2-1.4-0.1c-1.9,0.5-1.8,3.8,0.1,4.3s3.7-2,2.9-3.7c-0.8-1.8-3.5-2.2-5-1"/>\n\t<path class="st0" d="M1122.7,890.4c4.6-0.6,9.5,1.4,12.3,5.2c2.8,3.7,3.4,9,1.6,13.3"/>\n\t<path class="st0" d="M1127.5,878.3c5.2-1.2,10.7,1.6,14,5.8s4.7,9.6,5.4,14.8"/>\n\t<path class="st0" d="M938.2,906.6c-3.6,33.5-7.5,67.8-22.7,97.8c4.4,1.4,9.2,1.8,13.8,1"/>\n\t<path class="st0" d="M904.2,1021.3c6.6,0.6,13.3,1.3,19.9,1.9"/>\n\t<path class="st0" d="M912,939.7c3.9,1.1,7.9,2.3,11.8,3.4"/>\n\t<path class="st0" d="M957.6,946.5c3.2,1.7,6.9,2.7,10.5,2.7"/>\n\t<path class="st0" d="M952,846.7c2.4-3.6,6.9-5.6,11.1-5.1c4.3,0.5,8.2,3.5,9.7,7.5"/>\n\t<path class="st0" d="M964.8,832.3c5.4-1.7,11.5-1.2,16.7,1.2"/>\n\t<path class="st0" d="M895.4,1088.4c-17.7,8.6-31.8,24.3-38.2,42.9c-2.1,6.1-3.5,12.7-2.4,19.1c0.9,0.2,1.8,0.1,2.6-0.4"/>\n\t<path class="st0" d="M863.5,1118.9c20.9,15.8,47.1,24.4,73.2,24.1"/>\n\t<path class="st0" d="M873.1,1113.6c2.4,1.3,4.4,3.3,5.7,5.7"/>\n\t<path class="st0" d="M880.8,1108.1c2.6,1.1,5.2,2.1,7.8,3.2"/>\n\t<path class="st0" d="M856.8,1086c4.6-1.6,9.1-3.8,13-6.7"/>\n\t<path class="st0" d="M931.2,1102c-3.3-0.9-6-3.5-7.4-6.6c-2-4.4-1.5-10.1,1.8-13.6s9.4-4.3,13.2-1.2c3.7,3.1,4.3,9.1,1.6,13.2\n\t\tc-2.6,4.1-7.7,6.1-12.5,5.8c-5-0.3-9.8-3-12.7-7.2c-2.9-4.1-3.7-9.6-2.2-14.4"/>\n\t<path class="st0" d="M926.8,1100.7c4.9,3.2,10.1,5.8,15.6,7.8c2.8,1,5.9,1.9,8.9,1.3s5.7-3.2,5.5-6.2"/>\n\t<path class="st0" d="M929.6,1100.5c-3.8,10.6-7.4,21.3-10.8,32"/>\n\t<path class="st0" d="M924.7,1118c2.9-2.2,7-2.2,10.4-0.8c3.4,1.4,6.1,3.9,8.8,6.3"/>\n\t<path class="st0" d="M882.1,1160.8c1.6,0,2.5,1.7,3,3.3c2.2,6.9,3.3,14.4,2,21.6s-5,14.1-10.9,18.4"/>\n\t<path class="st0" d="M786.4,1113.9c6.8,5.2,10.8,13.2,15.6,20.3c17.3,26.1,47.8,42.9,79.1,43.8"/>\n\t<path class="st0" d="M904.5,1177c3.4,0.3,6.8,0.6,10.2,0.9c1,0.1,2.3,1,1.6,1.7"/>\n\t<path class="st0" d="M920.9,1171.4c4.1-0.7,8.5,1.5,10.4,5.2"/>\n\t<path class="st0" d="M1187.6,828.5c0.2-13.9-0.2-27.8-1.1-41.7c0-0.4-0.1-0.9-0.5-1.1c-0.4-0.2-0.8,0.6-0.4,0.6"/>\n\t<path class="st0" d="M1147.1,786c3.5,0.3,7,0.5,10.4,0.8c6.1,0.5,12.2,0.9,18.4,0.8c15-0.3,30-4.1,45-2.3"/>\n\t<path class="st0" d="M1130.9,773.4c1.9,12.2,3.1,24.6,3.3,37c0,0.9,0.1,2,0.8,2.6c0.7,0.6,1.7,0.5,2.6,0.4c9.8-1,19.6-1.5,29.4-1.5\n\t\t"/>\n\t<path class="st0" d="M1140.7,812.3c0.3,5,0.7,9.9,1,14.9"/>\n\t<path class="st0" d="M1156.1,811.8c1.7,3.8,2.2,8.2,1.5,12.3"/>\n\t<path class="st0" d="M1242.3,773.3c-0.3,0.4-0.6-0.7,0-0.7c0.5,0,0.7,0.7,0.8,1.2c1.5,12,2.7,24.1,3.7,36.1\n\t\tc0.1,0.8,0.1,1.8-0.4,2.4c-0.6,0.8-1.8,0.9-2.8,0.9c-11.7,0.2-23.5,0.4-35.2,0.5"/>\n\t<path class="st0" d="M1220.6,814c0.2,5.6,0.5,11.2,0.7,16.8"/>\n\t<path class="st0" d="M1234.5,813.5c0.9,6,1.4,12.1,1.4,18.1"/>\n\t<path class="st0" d="M1166.3,677.2c4.9,13.8,9,28,12.4,42.2c0.3,1.1,0.5,2.3,0.1,3.4c-0.5,1.4-1.9,2.2-3.2,2.8\n\t\tc-10,5.2-19.3,11.6-27.6,19.1c20.9-0.9,41.7-3,62.3-6.3c-12.2-6-24.3-12-36.5-18"/>\n\t<path class="st0" d="M1175.4,743.2c-2.5,2.3-2.2,6.8,0.4,8.9s6.9,1.6,9.1-0.9c2.2-2.6,2.2-6.7,0-9.3"/>\n\t<path class="st0" d="M1168.3,761.3c-2.7,4.3-5,8.8-7,13.5"/>\n\t<path class="st0" d="M1194.4,758.9c2.1,2.8,4.1,5.6,6.2,8.4"/>\n\t<path class="st0" d="M1123.8,636.8c24.9-8.8,47.8-22.5,70.5-36c15.6-9.2,33-18.7,50.8-15.4c1.8-7.4-0.1-15.6-5-21.4"/>\n\t<path class="st0" d="M1276.8,571.2c-8.5-6.8-13.5-17.3-14.5-28.1c-0.4-3.8-0.3-7.7,1-11.3s4-6.8,7.6-8.1c4.9-1.8,10.5,0.4,14.2,4.1\n\t\tc3.7,3.7,5.7,8.7,7.4,13.6c2.2,6.5,4,13.2,4.3,20.1c0.1,3.4-0.5,7.5-3.5,9.1c-2.6,1.3-5.9,0.1-7.9-2.1c-2-2.2-2.9-5-3.9-7.8\n\t\tc-3.6-9.7-8.4-18.9-14.3-27.3"/>\n\t<path class="st0" d="M1129.8,552.7c2.5,14.6,7.9,28.6,15.7,41.2c0.8,1.3,1.7,2.6,3,3.3c3.3,1.7,7.2-1.1,9-4.2\n\t\tc3.1-5.2,3.5-11.8,2.1-17.7s-4.3-11.4-7.6-16.5c-2.1-3.4-4.6-6.8-8.1-8.5c-3.6-1.8-8.6-1.2-10.7,2.1c-1.8,2.8-0.9,6.6,1,9.3\n\t\tc1.1,1.5,2.6,2.7,4.4,3.1c1.8,0.3,3.9-0.5,4.6-2.1c1-2.3-0.8-4.8-2.9-6.1c-0.6-0.3-1.2-0.6-1.9-0.6c-1.9,0-3,2.7-2,4.3\n\t\ts3.3,2.1,5.2,1.5c1-0.4,2.1-1.3,1.8-2.4c-0.2-0.6-0.7-1-1.2-1.3c-1.2-0.7-2.6-1.2-3.9-0.8s-2.3,2-1.5,3.2"/>\n\t<path class="st0" d="M1165.2,628.1c0.1-0.6-0.9,0.1-0.8,0.8c2.3,10.8,4.9,22.2,12.6,30.1c2.1,2.1,5.2,4.1,7.9,2.7\n\t\tc1-0.5,1.7-1.3,2.3-2.2c3.1-4.4,4-10.1,3.2-15.4c-0.9-5.3-3.4-10.3-6.7-14.5c-2.1-2.8-4.7-5.4-8-6.5c-3.3-1-7.5,0-9.1,3.2\n\t\tc-1.6,3.3,0.8,7.8,4.4,8.3c2.1,0.3,4.5-0.9,5.1-2.9c0.7-2.2-1.2-4.9-3.5-4.9c-1.7,0-3.4,1.4-3.4,3.1c0,1.7,2.2,3.1,3.6,2.2\n\t\tc-0.3-2.7-4.6-3.9-6.3-1.6"/>\n\t<path class="st0" d="M1268,622.4c4.4,11.6,6.1,24.1,10.5,35.7c4.4,11.6,12.3,22.9,24.1,26.7c5.3,1.7,12.6,0.7,14.3-4.6\n\t\tc1.3-4.1-2.2-8.8-6.5-9.4c-4.3-0.6-8.6,2.3-10.5,6.2s-1.7,8.6-0.4,12.7c1.3,4.2,3.9,8.1,7.5,10.6c9.6,6.5,25.4,2.6,31.4,12.4\n\t\tc4.8,8-0.8,19.8,5.2,26.9c7,8.3,22.6,2.2,29.8,10.2c5.7,6.3,2.6,18.1,9.5,23.1c5.8,4.2,14.9,0.4,20.7,4.8c9.2,7-0.8,25,8.4,32.1\n\t\tc7.3,5.6,20.1-2.1,26.5,4.6c5.6,5.8,0.8,17.8,7.5,22.3"/>\n\t<path class="st0" d="M1297.8,683.8c0.4,0,0.4-0.6,0.1-0.8s-0.7-0.1-1.1,0c-14.8,5-29.7,10-44.5,15c-1.3,0.4-2.9,1.6-2.2,2.7"/>\n\t<path class="st0" d="M1301.8,699.6c-2.7,2.3-5.8,4.1-8.9,5.7c-12.5,6.7-25.6,12.4-39.1,17"/>\n\t<path class="st0" d="M1335.5,713.5c-18.7,9.1-37.6,17.6-56.9,25.5"/>\n\t<path class="st0" d="M1343.2,740.1c-17.1,10.7-34.3,21.5-51.4,32.2"/>\n\t<path class="st0" d="M1372.7,747.9c-15.1,15.7-37.1,23.3-53.1,38.1"/>\n\t<path class="st0" d="M1380.9,773.5c-13.1,14.1-32,21.1-46.8,33.3"/>\n\t<path class="st0" d="M1405,778.6c1.1,0.7,0.2,2.4-0.8,3.3c-12.2,11.2-27.5,19-38.2,31.7"/>\n\t<path class="st0" d="M1413.8,807.3c-11.1,14.6-24.2,27.6-38.8,38.6"/>\n\t<path class="st0" d="M1437.6,814.9c-12.3,12.6-25,24.9-37.9,36.9"/>\n\t<path class="st0" d="M1446,838.1c-7.7,7.4-16,14.2-24.7,20.5"/>\n\t<path class="st0" d="M1460.6,843.8c-6,7.8-12.8,14.9-20.3,21.2"/>\n\t<path class="st0" d="M1317.9,733.2c0.9,2.3,1.7,4.7,2.4,7.1"/>\n\t<path class="st0" d="M1325.5,728.4c3.4,4.1,6.8,8.3,10.2,12.4"/>\n\t<path class="st0" d="M1358,769.5c1.1,1.6,1.9,3.3,2.5,5.2"/>\n\t<path class="st0" d="M1364.3,765.8c1.4,1.3,2.6,2.9,3.4,4.6"/>\n\t<path class="st0" d="M1390.8,810.6c1.3,2,2.3,4.1,3.2,6.3"/>\n\t<path class="st0" d="M1397.2,805.4c1.7,1.9,2.9,4.3,3.2,6.8"/>\n\t<path class="st0" d="M1423.6,838.7c1.1,1.7,2.1,3.3,3.2,5"/>\n\t<path class="st0" d="M1429.2,833.6c2.5,4.2,5,8.3,7.5,12.5"/>\n\t<path class="st0" d="M1331.4,619.1c7.6,13.4,23.8,19.9,39.3,20.7c15.4,0.8,30.6-3.1,45.9-5.5c4.6-0.7,9.4-1.3,14-0.1\n\t\tc3.8,1,7.1,3.3,10,5.9c9.7,8.7,14.9,21.2,22.7,31.6"/>\n\t<path class="st0" d="M1448.3,733.5c-17.6-11.6-28.3-30.9-40.2-48.3c-1.6-2.4-3.6-4.9-6.4-5.5c-1.4-0.3-2.8-0.1-4.1,0.3\n\t\tc-4.5,1.2-8.4,4.2-10.8,8.2"/>\n\t<path class="st0" d="M1354.1,687.4c-1.3-4.4,0.1-9.3,2.7-13.1s6.4-6.7,10.3-9.1c3.9-2.4,8.1-4.5,12.3-6.3c1.8-0.7,4-1.3,5.6-0.1\n\t\tc0.9,0.7,1.3,1.9,1.5,3c1.6,7.3-1.1,15.1-6,20.7c-4.9,5.6-11.7,9.2-18.8,11.6c-1.7,0.6-4.2,0.6-4.4-1.2c-0.1-0.6,0.2-1.2,0.6-1.8\n\t\tc1.6-2.6,3.9-4.6,6.1-6.6c7.9-7,16.2-13.5,24.7-19.7"/>\n\t<path class="st0" d="M1430.9,743.3c-0.6-0.6-1.3-1.2-1.9-1.8c-8,5.5-15.4,12.1-21.7,19.5c-1.2,1.4-2.3,2.8-3,4.5\n\t\tc-0.6,1.7-0.7,3.7,0.3,5.2c1.2,1.8,3.7,2.4,5.9,2.6c10.4,0.7,20.8-6,24.6-15.6c1.2-3.2,1.6-7.3-1-9.5c-1.4-1.1-3.4-1.5-5-0.8\n\t\tc-1.7,0.6-2.9,2.2-3.1,4c-0.1,1,0.1,2.1,0.9,2.7c0.9,0.7,2.2,0.5,3-0.2s1.3-1.8,1.3-2.9c0-1.1-0.3-2.3-1.3-2.8\n\t\tc-1.3-0.6-3,0.5-3.1,2c-0.2,1.4,0.8,2.8,2.1,3.5c0.7-1.7-0.5-3.8-2.2-4.1"/>\n\t<path class="st0" d="M1392.6,593.7c4.7-4.5,10.6-7.6,16.7-9.9c4.5-1.7,9.3-3.1,14.1-3.4c4.9-0.3,9.9,0.6,14,3.1c1.5,0.9,3,2.3,3,4\n\t\tc-0.1,1.5-1.3,2.7-2.4,3.6c-4.8,4-10.4,7.3-16.5,8.7s-12.8,0.9-18.3-2.3c-1.9-1.1-3.7-2.6-5.6-3.7"/>\n\t<path class="st0" d="M1406.8,596.9c-0.6-1.6,0-3.7,1.5-4.6c0.5-0.3,1.2-0.5,1.7-0.3c0.3,0.1,0.5,0.4,0.6,0.7c0.9,1.6,0,3.9-1.7,4.6\n\t\tc-0.5,0.2-1.1,0.3-1.5,0c-0.6-0.4-0.6-1.3-0.4-2c0.3-0.8,1-1.7,1.9-1.6c0,0.2,0.1,0.3,0.1,0.5"/>\n\t<path class="st0" d="M1400.1,585.9c-2.1-1.6-4.4-3-6.8-4.2"/>\n\t<path class="st0" d="M1410.1,580.8c-2.1-1.5-3.3-4.3-2.8-6.8"/>\n\t<path class="st0" d="M1423,578.2c-0.9-2.5-1.8-5.2-0.8-7.6"/>\n\t<path class="st0" d="M1433.7,578.5c-0.3-1.5,0.1-3.1,0.7-4.5s1.5-2.6,2.4-3.9"/>\n\t<path class="st0" d="M1405,600.2c-0.4-0.3-0.9,0.2-1.1,0.6c-1.2,2-2,4.2-2.5,6.5"/>\n\t<path class="st0" d="M1416.6,601.2c0.2,2.4,0.4,4.7,0.6,7.1"/>\n\t<path class="st0" d="M1428.7,598.5c0.7,2.5,1.9,4.8,3.5,6.8"/>\n\t<path class="st0" d="M1437.2,594.3c1.8,2.5,3.7,5.2,6.6,6.3"/>\n\t<path class="st0" d="M1359,609.7c0.2,0,0.3,0,0.5,0"/>\n\t<path class="st0" d="M1354.4,617.6c0.2,0,0.3-0.1,0.5-0.1"/>\n\t<path class="st0" d="M1367.7,618.1c0.2-0.1,0.3-0.2,0.5-0.3"/>\n\t<path class="st0" d="M1369.7,606.5c0.1,0,0.1,0,0.2,0"/>\n\t<path class="st0" d="M1365,626.6c0.3,0,0.6,0,0.8,0.1"/>\n\t<path class="st0" d="M1379.2,616.1c0.1,0.1,0.1,0.1,0.2,0.2"/>\n\t<path class="st0" d="M1008.5,507.8c17.5-8.9,35-17.7,52.4-26.6c13.5-6.8,27-13.7,41.5-17.7c15.2-4.2,31-5.2,46.7-6.4\n\t\tc3.5-0.3,7.6-0.9,9.1-4c0.6-1.3,0.7-2.8,0.7-4.2c0-4.1-0.4-8.2-1.3-12.2"/>\n\t<path class="st0" d="M1187.5,464.6c-6.7-12.9-11-27.1-12.7-41.6c-0.5-4.5-0.4-9.9,3.4-12.3c1.5-1,3.3-1.3,5.1-1.3\n\t\tc7.8,0.1,14,6.5,17.9,13.2c5.7,9.8,8.2,21.3,7.7,32.6c-0.2,3.2-0.6,6.6-2.4,9.3c-1.8,2.7-5.1,4.6-8.3,3.8\n\t\tc-4.2-1.1-5.8-6.1-6.6-10.3c-2.6-14.2-3.3-29-9.9-41.9"/>\n\t<path class="st0" d="M1084.3,545.9c-4.9-10.5-7.7-21.9-8.1-33.5c-0.2-4.7,0.2-9.8,3.5-13.1c1.5-1.5,3.9-2.4,5.7-1.3\n\t\tc0.7,0.4,1.1,1.1,1.6,1.8c6.7,10,10.4,21.9,10.6,33.9c0.1,3.3-0.2,6.7-1.8,9.5s-5,4.9-8.1,4.1c-2.7-0.7-4.7-3.8-3.9-6.5\n\t\tc0.7-2.7,4.3-4.3,6.7-2.9c2.4,1.5,2.5,5.6,0,7c-1.7,0.9-4.1,0.3-5.3-1.3c-0.9-1.1-1.3-2.6-0.8-3.9c0.5-1.3,1.9-2.2,3.3-2.1\n\t\tc2,0.1,3.5,2.3,3,4.2s-2.6,3.2-4.5,2.8s-3.3-2.4-3.2-4.4"/>\n\t<path class="st0" d="M1207.5,378.1c-3.6,1-6.6-3.1-7.3-6.8c-1.5-7.1,0.5-14.8,5.2-20.2c2.8-3.2,6.6-5.6,10.8-5.8\n\t\tc5.4-0.2,10.4,3.8,12.1,8.9s0.3,11-3,15.1c-3.3,4.2-8.4,6.8-13.7,7.7c-3.1,0.5-6.4,0.5-9.3-0.6c-3.9-1.5-6.7-4.9-9.4-8.1\n\t\tc-4.1-4.9-8.2-9.9-11.2-15.6s-5-12.1-4.4-18.4"/>\n\t<path class="st0" d="M1205.1,352.7c-5.7-6.5-9.4-14.7-10.6-23.3"/>\n\t<path class="st0" d="M1205,378.7c5.9,16.1,11.9,32.2,17.8,48.3c0.3,0.9,1.5,2,2.1,1.2"/>\n\t<path class="st0" d="M1213.3,403.9c-5.1-2.5-11.9-1.1-15.6,3.3"/>\n\t<path class="st0" d="M1315.8,391.3c-7.7-4.7-10.9-15.5-7.2-23.6c2.2-4.8,7.3-8.7,12.4-7.6c4.7,1.1,7.6,6,8.4,10.8\n\t\tc0.8,4.3,0.3,8.9-1.9,12.7c-2.2,3.8-6.1,6.7-10.4,7.1c-5.6,0.5-11.2-3.3-13.5-8.4s-1.9-11.3,0.2-16.5c2.9-6.9,8.4-12.2,13-18"/>\n\t<path class="st0" d="M1331.1,366.7c1.9-2.5,4.3-4.7,6.9-6.4"/>\n\t<path class="st0" d="M1316.2,391.1c-1,16-2,31.9-3,47.9"/>\n\t<path class="st0" d="M1315.3,415.2c3.7-2.8,8.9-2.6,13.6-1.8s9.5,1.8,13.9,0.3"/>\n\t<path class="st0" d="M1254.3,420.6c-1.9,3-4.8,5.4-6.1,8.7c-1.3,3.3,0.2,8.2,3.8,8.3"/>\n\t<path class="st0" d="M1273.8,415.3c4.7,7.1,6.4,16,4.8,24.3"/>\n\t<path class="st0" d="M1287.6,454.3c4.5-12.8,1.7-27-3.3-39.6c-4.9-12.6-11.9-24.4-16.2-37.2c-4.7-14.2-5.9-29.5-3.6-44.3\n\t\tc1-6.4,4-13.9,10.4-14.8c6.7-0.9,12,7.4,10.1,13.9s-8.6,10.6-15.3,11.9c-2,0.4-4.2,0.6-6.1-0.1c-4.4-1.7-5.9-7.1-7.2-11.6\n\t\tc-2.8-9.2-7.9-17.7-14.8-24.5c-2.5-2.5-5.6-5.5-4.9-9c0.4-1.9,1.9-3.4,3.4-4.7c6-5.3,13.8-10,21.6-8.2c7.3,1.7,12.5,8.7,19.7,10.7\n\t\tc8.8,2.5,19.4-2.6,27,2.6"/>\n\t<path class="st0" d="M1204.1,22.4c-2.3,0.6-4.9-1-5.4-3.3c7.3,11.7,14.7,23.6,24.2,33.6s21.3,18.4,34.8,21.5\n\t\tc2.2,0.5,4.5,0.9,6.6,0.1c3.8-1.4,5.5-6.1,4.7-10c-0.7-3.9-3.3-7.3-5.9-10.4c-6.8-8-14.3-15.4-22.5-22c-6.1-4.9-13.1-9.6-21-9.5\n\t\tc-8.5,0.1-16.2,6.2-19.7,14s-3.1,16.8-0.6,24.9c8.9,28.4,40.5,43.1,55.9,68.6c6.6,10.9,9.9,23.4,13,35.7\n\t\tc2.8,11.3,5.7,23.2,13.6,31.8c6.7,7.2,16.1,11.2,25.5,14c19.8,5.9,43.8,6.6,58.6-7.9c4.3-4.3,7.7-9.9,8-15.9s-2.8-12.5-8.4-14.9\n\t\tc-1.8-0.8-3.8-1.1-5.6-0.5c-1.8,0.6-3.3,2.1-4.4,3.7c-5.8,7.7-6.9,18.7-2.8,27.4c4.7,10,15,16.1,25.1,20.6s20.9,8.2,29,15.8\n\t\tc10.6,9.9,14.9,25.2,25.8,34.8c1.2-1.6,2.4-3.3,3.5-4.9"/>\n\t<path class="st1" d="M1210.6,125.9c5.2,18.4,10.5,37.1,20.3,53.6c4,6.8,8.8,13.2,13.9,19.3c-3.8,2-7.6,3.9-11.4,5.9"/>\n\t<path class="st1" d="M1237.5,225.8c-1.2,0.5-1.6-1.6-1-2.8c4.3-9.5,12.7-17.1,22.6-20.5c1-0.3,2.1-0.7,3.2-0.5\n\t\tc2.9,0.4,4.2,3.9,4.4,6.8c0.4,6.3-2,12.7-6.1,17.6c-4.1,4.9-9.7,8.4-15.7,10.3c-3.4,1.1-7.6,1.5-10-1.1c-2.5-2.7-1.5-7.2,1.1-9.8\n\t\ts6.2-3.7,9.6-4.9c7.2-2.5,15-6.8,16.5-14.2"/>\n\t<path class="st1" d="M1170,175.6c8.7-7.5,17.9-15.2,29.2-17.3c1.9-0.4,4.2-0.4,5.4,1.1c0.5,0.6,0.7,1.5,0.8,2.3\n\t\tc1,6.3-1.8,12.8-6.5,17.2c-4.7,4.3-10.9,6.7-17.3,7.5c-2.5,0.3-5.2,0.5-7.4-0.6c-2.3-1.1-4.1-3.6-3.5-6.1s4.2-3.8,5.9-1.9\n\t\tc0.6,0.7,0.8,1.6,1,2.5c0.2,1.1,0.2,2.2-0.2,3.1s-1.5,1.7-2.5,1.6c-1.1-0.1-1.9-1.5-1.3-2.4s2.4-0.5,2.2,0.6\n\t\tc-0.1,1.1-2.2,0.7-1.9-0.3"/>\n\t<path class="st1" d="M1230.9,148.5c6.9-8.6,17.4-14.4,28.4-15.6c-1,10.1-9.2,19.1-19.2,21.1c-1.9,0.4-4,0.5-5.7-0.5\n\t\tc-2-1.2-2.8-4.1-1.4-5.9s5-1.2,5.4,1.1c0.4,2.2-2.1,4-4.3,4.1c-0.4,0-0.8,0-1.2-0.1c-1.4-0.6-1.4-2.6-0.6-3.9\n\t\tc0.7-1.3,2-2.3,2.4-3.8"/>\n\t<path class="st1" d="M1266.2,145.4c13-2.3,25.8-5.5,38.3-9.7c14.1-4.8,28.2-11.1,38.2-22.1c3.1-3.4,5.9-7.6,5.9-12.3\n\t\tc0-4.6-3.8-9.5-8.4-9c-2.9,0.3-5.3,2.5-6.6,5.1c-4.6,9.2,3.8,20.4,13.5,23.5c9.8,3.2,20.3,1.2,30.6,1.1c12.5-0.1,25,2.7,36.2,8.2\n\t\tc9.2,4.5,17.5,10.7,27.1,14.4c12.1,4.8,25.5,5.3,38.5,5.4"/>\n\t<path class="st1" d="M1366.8,141.8c11.8,6.1,23.5,12.2,35.3,18.2c7.3,3.8,15.2,7.6,23.3,6.2c-6.4,6-11.4,13.5-14.5,21.7"/>\n\t<path class="st1" d="M1419.4,203.9c-0.9-1.3-0.4-3.1,0.2-4.5c3.4-8.7,8.4-16.7,14.6-23.5c1.8-2,4-3.9,6.6-4.1\n\t\tc2.4-0.1,4.6,1.3,6.2,3.2c5.2,6.3,3.1,16.2-2.1,22.5c-4.2,5.1-10.1,8.7-16.6,9.6c-0.7,0.1-1.5,0.2-2.2-0.1\n\t\tc-2.3-0.9-1.6-4.5-0.2-6.6c3.6-5.3,8.9-9,13.2-13.7s7.7-11.2,6-17.3"/>\n\t<path class="st1" d="M1394.4,145.6c2.7-4.4,5.1-9,7.4-13.7"/>\n\t<path class="st1" d="M1372.1,170.2c2.7-3.6,5.4-7.2,8.1-10.8"/>\n\t<path class="st1" d="M1347.8-11.1c6.2,6.4,13.4,12.3,17.1,20.4c7.1,15.4,0,34.8,7.9,49.8c4.9,9.2,14.6,14.8,21.2,22.8\n\t\tc9.7,11.7,12.4,28.9,6.6,42.9"/>\n\t<path class="st1" d="M1277.7,97.5c1.7,0.3,2.5,2.3,2.9,4.1c2.8,11.9,5.3,23.9,7.3,36"/>\n\t<path class="st1" d="M1269.4,109.1c7.3-3,15.3-4,23.1-2.9"/>\n\t<path class="st1" d="M1268.3,119.6c7.6-0.6,15.2-1.3,22.8-1.9"/>\n\t<path class="st1" d="M1295.8,129.1c-7.2,0.4-14.4,2-21.2,4.6"/>\n\t<path class="st1" d="M1320.8,71.5c0.4-0.2,0-0.8-0.4-0.6c-0.4,0.1-0.5,0.6-0.5,1c-0.8,19.4-1.6,38.8-2.4,58.2"/>\n\t<path class="st1" d="M1311.5,80.7c7.4,1.4,15,2.3,22.5,2.7"/>\n\t<path class="st1" d="M1308.5,97.3c6.8,1.1,13.7,2.2,20.5,3.2"/>\n\t<path class="st1" d="M1306.3,110.6c7.3,0.5,14.6,0.9,22,1.4"/>\n\t<path class="st1" d="M1371.3,119.4c1-1,0.8-2.7,0.6-4.1c-2.2-12.2-4.3-24.4-6.5-36.6c-0.1-0.4,0.2-0.7,0.5-0.9\n\t\tc0.2-0.3,0.4-0.7,0.2-1c-0.3-0.2-0.6,0.5-0.3,0.4"/>\n\t<path class="st1" d="M1356.6,85.7c6.5-0.9,13-1.9,19.5-2.8"/>\n\t<path class="st1" d="M1355.9,97c7.7-1.6,15.6-2.4,23.5-2.6"/>\n\t<path class="st1" d="M1358.6,108c7.2-0.7,14.3-1.4,21.5-2.1"/>\n\t<path class="st1" d="M1276.2,52.4c1.8-1.3,3.8-2.6,6-2.9c2.9-0.4,5.8,1.1,7.8,3.3c2,2.1,3.3,4.8,4.5,7.5c1-6.1,6.8-11,13-11"/>\n\t<path class="st1" d="M1338.8,306.5c6.2,7.9,13.7,14.9,22,20.5c0.7,0.4,1.4,1,1.4,1.8c0,0.5-0.4,0.9-0.7,1.3\n\t\tc-3.4,3.7-8.5,6.8-8.8,11.8"/>\n\t<path class="st1" d="M1356.9,346.8c3.9-3.4,7.6-7.1,11-11.1"/>\n\t<path class="st1" d="M1326.1,337.5c2.9-3.1,6-6,9.5-8.5"/>\n\t<path class="st1" d="M1354.8,308c1.7-1.4,3.2-3.1,4.4-5"/>\n\t<path class="st1" d="M1410.5,285.9c-8.8-5.3-17.7-10.7-24.5-18.4c-5.5-6.2-9.6-13.9-16.4-18.7c-1.4-1-2.9-1.8-4.5-2.1\n\t\tc-5.3-0.9-9.7,4.3-11.5,9.4"/>\n\t<path class="st1" d="M1332,252.8c0.7-5,1.5-10.3,4.4-14.4c1.4-2,3.3-3.7,5.4-5.1c2-1.3,4.3-2.4,6.6-3.1c0.8-0.2,1.6-0.4,2.3,0.1\n\t\tc0.7,0.5,0.8,1.4,0.9,2.2c0.4,5-0.1,10.1-2.3,14.6s-6.2,8.2-11.1,9.3c-0.8,0.2-1.8,0.3-2.5-0.2c-1.2-0.9-0.7-2.8,0-4.1\n\t\tc3.2-6.4,7.6-12.2,12.9-17"/>\n\t<path class="st1" d="M1369.7,294.3c2.6-6,5.4-12.3,10.8-15.9c0.7-0.5,1.6-0.9,2.3-0.5c0.6,0.3,0.9,1,1.1,1.6\n\t\tc1.8,5.9-0.7,12.9-5.8,16.3c-1.4,1-3.1,1.7-4.8,1.4s-3.3-1.6-3.3-3.3c0-1.7,2.2-3.1,3.6-2.1c0.8,0.6,1.1,1.7,0.8,2.7\n\t\tc-0.3,0.9-1.1,1.7-2,2c-0.9,0.4-2,0.4-2.8-0.1c-0.8-0.6-1.1-1.9-0.4-2.5"/>\n\t<path class="st1" d="M1396.2,265.2c2.2-3.5,4.6-6.8,7.3-9.9c0.9-1,1.9-2.1,3.2-2.6c1.3-0.6,2.9-0.5,3.9,0.4\n\t\tc0.9,0.9,1.1,2.4,0.9,3.7c-0.6,5.4-5,10.1-10.3,11c-1.3,0.2-2.8,0.2-3.8-0.7c-1.1-1-1.1-2.9,0-3.8c1.1-1,3-0.7,3.8,0.5\n\t\ts0.1,3.1-1.2,3.5c-1.4,0.5-3-0.7-3-2.2"/>\n\t<path class="st1" d="M1288.8,150.3c0.3,3,0.5,6,0.8,9.1"/>\n\t<path class="st1" d="M1274.6,136c0.6,3.2,1.2,6.3,1.7,9.5"/>\n\t<path class="st1" d="M1288.9,176c0.4,2.6,0.8,5.2,1.2,7.8"/>\n\t<path class="st1" d="M1308.8,156.9c0.2,2.1,0.4,4.3,0.7,6.4"/>\n\t<path class="st1" d="M1320.2,144.9c0.7,2.1,1.3,4.3,1.6,6.4"/>\n\t<path class="st1" d="M1337.9,135.3c0.4,1.8,0.8,3.6,1.2,5.5"/>\n\t<path class="st1" d="M1316.4,173.7c-0.3,2.2-0.4,4.5-0.2,6.7"/>\n\t<path class="st1" d="M1343.9,161.1c0.1,2.6-0.3,5.2-1.1,7.6"/>\n\t<path class="st1" d="M1362.4,186.3c-1.2,1.8-2,3.8-2.4,5.9"/>\n\t<path class="st1" d="M979.1,80.9c0.4,3.8-0.5,7.7-2.6,10.9"/>\n\t<path class="st1" d="M989.4,82.5c0.7,2.9,0.8,6,0.2,9"/>\n\t<path class="st1" d="M711.9,13.1c2.2-4,4.3-7.9,6.5-11.9"/>\n\t<path class="st1" d="M771.3,297.8c8.6-6,19.2-9.1,29.7-8.6c1.7,0.1,3.6,0.4,4.7,1.7c0.5,0.7,0.8,1.6,0.9,2.4c0.2,2.4-1,4.8-2.6,6.5\n\t\tc-1.7,1.7-3.9,2.9-6.1,3.8c-5.1,2.2-10.8,3.5-16.2,2c-3.6-1-6.8-3.2-9.9-5.4c-0.7-0.5-1.4-1-1.6-1.8c-0.2-0.8,0.5-1.8,1.3-1.5"/>\n\t<path class="st1" d="M780.8,303.6c-0.4-0.9-0.1-1.9,0.6-2.6s1.5-1.1,2.4-1.5c0.2-0.1,0.5-0.2,0.8-0.1s0.4,0.4,0.5,0.7\n\t\tc0.4,1.4,0,3.1-1.2,3.9c-1.2,0.7-3.3-0.2-3.1-1.7"/>\n\t<path class="st1" d="M775.2,293.8c-1.6-1.5-3.3-3-4.9-4.4"/>\n\t<path class="st1" d="M786.2,287.9c-0.2-1.9-0.4-3.8-0.6-5.7"/>\n\t<path class="st1" d="M798.5,286.7c-0.2-1.9,0.5-3.8,1.9-5.2"/>\n\t<path class="st1" d="M775.8,303.2c-1.1,2.1-2.2,4.1-3.3,6.2"/>\n\t<path class="st1" d="M158.1,270.4c0.1,1.3,0.3,2.7,0.4,4"/>\n\t<path class="st1" d="M801.2,304.5c1,1.5,2,3,3.1,4.5"/>\n\t<path class="st1" d="M640.3,298.2c-0.6-5.2-1.2-10.3-1.8-15.5"/>\n\t<path class="st1" d="M732.6,392.5c-0.3-15.6-5.2-31.1-14-44c-6.7-9.7-15.8-18.7-17.1-30.4c-0.1-0.9-0.1-1.9,0.5-2.6\n\t\tc0.5-0.5,1.1-0.6,1.8-0.8c3.4-0.7,6.8-1.5,10.2-2.2"/>\n\t<path class="st1" d="M688,293.3c0.9-4,4.8-6.3,8.5-8.1c3.8-1.8,7.7-3.5,11.9-4.3c2.2-0.4,4.5-0.5,6.5,0.5c2.7,1.3,4.1,4.5,3.8,7.5\n\t\ts-2,5.6-4.2,7.6s-5,3.2-7.7,4.4c-3.9,1.6-8.1,2.8-12.3,2.9c-1.5,0-3.1-0.1-4.5-0.8c-1.4-0.7-2.5-2-2.5-3.6\n\t\tc-0.1-1.4,0.8-2.8,1.9-3.6c1.1-0.9,2.5-1.3,3.9-1.7c8-2.2,16.9-2.4,23.8-7.2"/>\n\t<path class="st1" d="M691.4,375c5.3-4.4,10.8-8.9,17.4-10.9c1.4-0.4,2.8-0.7,4.2-0.5s2.8,1,3.4,2.3c1.1,2.2-0.5,4.8-2.2,6.5\n\t\tc-2.2,2.3-4.8,4.2-7.7,5.6c-2.3,1.2-4.9,2-7.4,1.6s-5-2.4-5.2-4.9c-0.1-0.9,0.2-2,1-2.5c0.6-0.4,1.4-0.4,2.1-0.3\n\t\tc1,0.1,2.1,0.2,2.8,0.8c0.8,0.6,1.2,1.9,0.5,2.6c-0.3,0.4-0.9,0.6-1.4,0.8c-1.1,0.3-2.2,0.6-3.3,0.3c-1.1-0.3-2-1.5-1.6-2.6\n\t\ts1.7-1.4,2.8-1.7"/>\n\t<path class="st1" d="M734.8,356.9c6.9-6.6,15.9-11,25.3-12.4c0.9-0.1,1.9-0.2,2.5,0.4c0.5,0.5,0.7,1.3,0.6,2\n\t\tc-0.1,2.6-1.4,5.1-3.2,7s-4.1,3.2-6.5,4.3c-4.6,2.1-9.6,3.5-14.7,3.4c-1,0-2-0.1-2.7-0.7c-1-0.9-1.1-2.5-0.5-3.6\n\t\tc0.9-1.9,3.4-2.9,5.4-2.2c1,0.4,2,1.6,1.4,2.5c-0.3,0.5-0.8,0.7-1.3,0.8c-0.9,0.3-1.9,0.6-2.9,0.5s-1.9-1.1-1.8-2\n\t\tc0.2-1.6,2.4-1.8,3.6-2.9"/>\n\t<path class="st1" d="M303.7,118.1c6.9,5.8,14.7,10.7,20.4,17.7c2.4,3,4.4,6.4,6.6,9.5c2.8,3.9,6.2,7.5,9,11.4\n\t\tc3.6,4.9,6.6,10.3,8.7,16c0.3,0.9,0.7,1.8,1.5,2.2s1.7,0,2.6-0.3c3.7-1.7,7.1-4.2,9.7-7.2"/>\n\t<path class="st1" d="M355.8,100.3c-3.1-0.7-5.9,1.5-8.3,3.5c-3.6,3-7.2,6.1-10.1,9.8c-2.1,2.7-3.9,6.3-2.5,9.4\n\t\tc1.1,2.2,3.7,3.4,6.2,3.5c2.5,0,4.9-0.9,7.1-2c4.3-2.1,8.6-4.9,10.7-9.2c0.8-1.8,1.3-3.7,1.5-5.7c0.3-2.1,0.3-4.4-1.1-6\n\t\tc-0.8-0.9-2-1.4-3.1-1.7c-1.9-0.5-4.1-0.3-5.8,0.7s-2.9,3-2.6,5s2.3,3.6,4.3,3.3c1.3-0.3,2.5-1.4,2.7-2.8s-0.6-2.8-1.8-3.4\n\t\tc-0.4-0.2-1-0.3-1.4-0.1c-0.2,0.1-0.3,0.3-0.5,0.5c-0.9,1.4-0.9,3.8,0.6,4.3c0.7,0.3,1.6,0,2.2-0.4c1.2-0.8,1.7-2.5,1.1-3.8\n\t\ts-2.3-2.1-3.6-1.5c-1.3,0.6-1.8,2.5-0.8,3.6s3.1,0.6,3.4-0.7"/>\n\t<path class="st1" d="M312,140.7c-6.8,3.3-12.9,8.2-17.6,14.2c-1.5,1.9-2.9,4.6-1.6,6.7c0.7,1.1,2,1.7,3.3,1.8s2.6-0.3,3.9-0.7\n\t\tc3.8-1.2,7.6-3.1,10.4-6s4.4-7.1,3.7-11.1c-0.3-1.6-1.1-3.2-2.6-3.7c-1.4-0.5-3,0.2-4.2,1.2c-1.5,1.3-2.7,3.4-1.8,5.1\n\t\tc1,1.8,4,1.7,5.1,0c1-1.8-0.2-4.3-2.2-4.9c-0.5,1-1.1,2.1-0.9,3.2c0.2,1.1,1.4,2.1,2.5,1.6c0.5-0.2,0.7-0.7,0.9-1.2\n\t\tc0.4-1.2-0.1-2.7-1.3-3.2s-2.8,0.5-2.6,1.8c0.2,1.4,1.9,1.8,3.3,2"/>\n\t<path class="st1" d="M786.3,355.3c14.8,8.6,34.5,7.8,48.5-2c2.7-1.9,5.3-4.2,6.6-7.2s1.1-6.9-1.3-9.2c-1.5-1.4-3.5-2-5.5-2.4\n\t\tc-5.6-0.9-12,0.6-15,5.3c-2,3.1-2.1,7.1-1,10.6s3.4,6.5,6.1,9.1c8.5,8.2,20.8,11.7,32.6,11.1c12.9-0.7,25.8-6.1,38.5-3.7\n\t\tc1.9,0.4,4,1.1,4.8,2.9"/>\n\t<path class="st1" d="M811.4,323.6c-5.1,1.8-8.3,8-6.6,13.2"/>\n\t<path class="st1" d="M801.9,317.1c-4.7,2.9-9,6.5-12.7,10.6c0.4,0.4,0.8,0.8,1.2,1.3"/>\n\t<path class="st1" d="M899.8,419.1c-12-3.3-24.5-4.6-36.6-7.4c-12.2-2.7-24.3-7-33.6-15.3c-2.7,4.2-4.6,8.9-5.6,13.8"/>\n\t<path class="st1" d="M809,392.6c-0.6,6.8-1.5,13.5-2.6,20.2"/>\n\t<path class="st1" d="M874.2,382.3c-2.3,4.3-3.4,9.3-3.4,14.2"/>\n\t<path class="st1" d="M865.8,421.2c-1.2,4.5-2.3,9-3.5,13.5"/>\n\t<path class="st1" d="M660.1,406.3c-5.2-5.1-7.4-13.1-5.5-20.1c0.9-3.2,3-6.6,6.2-7.2c2.3-0.4,4.7,0.6,6.3,2.3\n\t\tc1.6,1.7,2.5,3.9,2.9,6.2c0.5,2.9,0.4,6-1.1,8.5c-1.4,2.4-4,4.1-6.7,4.9s-5.6,0.8-8.4,0.5c-3.4-0.4-6.8-1.1-9.6-3.1\n\t\ts-4.9-5.2-4.7-8.6"/>\n\t<path class="st1" d="M657.4,404.6c2.6,2.2,5.4,4.1,8.4,5.7c2.8,1.6,5.7,3,8.8,3.4s6.6-0.4,8.7-2.7"/>\n\t<path class="st1" d="M657.2,403.2c-3.6,8.8-7.3,17.7-10.9,26.5c-0.3,0.7-0.5,1.6,0,2.1"/>\n\t<path class="st1" d="M650.9,419.9c2.1-2.7,6.3-3.3,9.5-2s5.7,4,7.6,6.9"/>\n\t<path class="st1" d="M641,346.2c-0.6,0.6-1.6,0.6-2.4,0.2c-0.8-0.4-1.3-1.1-1.7-1.8c-3.3-5.3-3.7-12.4-0.9-18\n\t\tc1.4-2.8,4.1-5.4,7.2-4.8c2.1,0.4,3.6,2.3,4.5,4.2c1.1,2.3,1.6,5,1,7.6c-1,4.2-4.8,7.1-8.6,8.9c-4.3,2.1-9.3,3.3-14,2.3\n\t\tc-4.7-1.1-9-4.8-9.7-9.6"/>\n\t<path class="st1" d="M638.7,345.8c4.3,1.7,8.5,3.9,13,4.7s9.7,0,12.8-3.5"/>\n\t<path class="st1" d="M639.4,346.5c-0.7-0.1-0.9,0.8-0.9,1.5c0.6,8.8,0.3,17.7-0.7,26.4c-0.6,4.8-1.3,9.8,0.1,14.5"/>\n\t<path class="st1" d="M637.4,366.2c-2.2-1.3-4.8-2.4-7.3-2c-2.7,0.4-4.9,2.2-6.7,4.3c-1.8,2.1-3.2,4.4-5.2,6.2"/>\n\t<path class="st1" d="M613.1,312.6c-3.8,0.4-6.9,4.4-6.3,8.2"/>\n\t<path class="st1" d="M605.2,304.7c-3.9,9-7.8,18-11.7,27"/>\n\t<path class="st1" d="M598.3,358.3c-10.6,15-20,31.2-24.4,49.1c-1.4,5.7-2.2,11.6-1.2,17.3c1,5.7,4.1,11.3,9.2,14.2\n\t\tc3.2-7.9-1.1-17.3-8-22.2s-15.8-6.3-24.2-6.5c-8.5-0.3-17.1,0.3-25.4-1.4c-22.5-4.6-40.6-25.3-63.6-24.7c-10.7,0.3-21,5.3-31.6,4.2\n\t\tc-12.5-1.3-23.4-12.1-24.7-24.6c-0.8-7.2,1.3-14.5,4.7-21c2.2-4.2,5-8.3,9-10.9c5.1-3.4,12.1-3.9,17.5-0.9s8.6,9.6,7.2,15.6\n\t\tc-1.5,6.4-7.5,10.9-13.8,12.8c-6.8,2-14.9,1.3-19.8-3.7c-4.1-4.2-5.2-10.3-6.1-16c-2.3-14.1-4.6-28.1-7-42.2"/>\n\t<path class="st1" d="M560.2,369.3c-2.9-3.3-5.1-7.1-8.2-10.2c-4.3-4.3-10.1-6.8-15.9-8.9c-14.7-5.3-30.1-8.6-45.6-9.6\n\t\tc-3.9-0.3-7.9-0.4-11.7-1.5c-1-0.3-2-0.7-2.8-1.4c-1.5-1.4-1.9-3.7-1.4-5.7s1.7-3.7,2.8-5.4"/>\n\t<path class="st1" d="M456.1,334.5c0.2-5.7,1.2-11.4,2.7-16.8c0.8-2.7,1.7-5.5,3.3-7.8c1.6-2.3,4-4.2,6.8-4.8\n\t\tc0.8-0.2,1.7-0.2,2.4,0.2c1.3,0.7,1.6,2.4,1.7,3.9c0.6,10.6-3.8,21.4-11.7,28.4c-1,0.9-2.3,1.9-3.7,1.8c0.5-10.9,3.2-21.7,8.1-31.4\n\t\t"/>\n\t<path class="st1" d="M506.2,398.1c2.8-9.8,6.1-19.5,10-29c0.9-2.2,2-4.6,4.2-5.7c0.6-0.3,1.3-0.5,1.9-0.3c1.4,0.3,2.1,1.8,2.5,3.2\n\t\tc2.8,9.9,1.1,21-4.5,29.6c-1,1.5-2.1,3-3.7,4s-3.5,1.4-5.2,0.8c-1.7-0.7-2.9-2.7-2.3-4.4c0.8-2.3,4.6-2.7,5.8-0.6\n\t\tc1.3,2.1-0.5,5.2-2.9,5.4c-0.5,0-0.9,0-1.3-0.3c-1.4-0.9-0.8-3.2,0.4-4.3c0.3-0.3,0.7-0.6,1.1-0.6c1.1-0.1,1.6,1.6,0.8,2.5\n\t\ts-2,0.9-3.1,0.9"/>\n\t<path class="st1" d="M528,333.7c-0.3-2.1,0.4-4.2,1-6.3c2.5-8.1,5-16.4,9.9-23.4c0.9-1.3,2.4-2.6,3.8-2c0.8,0.4,1.2,1.4,1.5,2.3\n\t\tc2.3,8.3,0.8,17.6-4.1,24.7c-1.7,2.5-4.1,4.8-7.1,5.3c-0.8,0.1-1.7,0.1-2.4-0.4c-1.2-0.7-1.5-2.3-1.5-3.7c0-1.1,0.2-2.3,1-3.1\n\t\tc1.1-0.9,2.8-0.6,3.9,0.4c1.1,1,1.7,2.8,1.1,4.2c-0.6,1.4-2.4,2.3-3.8,1.7c-1.4-0.6-2-2.7-0.9-3.8c1.1-1.1,3.4-0.3,3.5,1.2\n\t\tc0,1-0.7,1.8-1.6,2.1c-0.9,0.2-1.9-0.1-2.6-0.8"/>\n\t<path class="st1" d="M428.9,177.7c-3.1,2.4-5.7,5.4-7.6,8.8"/>\n\t<path class="st1" d="M419,196.6c-0.8,2.9-1.7,5.9-2.5,8.8"/>\n\t<path class="st1" d="M415.6,217.8c-0.2,3.5,0.2,7,1.1,10.4"/>\n\t<path class="st1" d="M417.4,240.6c0.8,4,0.9,8,0.4,12"/>\n\t<path class="st1" d="M410.5,264.1c-1.7,2.5-3.3,5-5,7.4"/>\n\t<path class="st1" d="M396.2,282c-1.9,2.2-4,4.2-6.3,6"/>\n\t<path class="st1" d="M324,235c-1.7-0.6-2.9-2.1-3.5-3.8s-0.6-3.5-0.6-5.3c0-3,0.1-6.1,1.5-8.8s4.4-4.7,7.3-4\n\t\tc1.6,0.4,2.9,1.5,3.8,2.8c3.7,5,2.1,12.7-2.6,16.6c-4.7,3.9-11.9,4.3-17.5,1.7s-9.8-7.7-12.2-13.4c-0.4-1-0.8-2.1-1-3.2"/>\n\t<path class="st1" d="M313.1,211.4c2.1,3.8,4.5,7.5,7.4,10.8"/>\n\t<path class="st1" d="M321.6,235.9c0.8,0.6,1,1.7,1.2,2.8c1.7,9.2,3.3,18.3,5,27.5"/>\n\t<path class="st1" d="M325.1,253.2c0.3-0.3-0.2-0.7-0.6-0.7c-3.5-0.5-7-0.8-10.6-0.9c-2,0-4.1,0-5.9,0.7c-1.9,0.7-3.6,2.1-4.2,4"/>\n\t<path class="st1" d="M431.7,754.7c25.4,35.8,51.2,71.2,77.5,106.3"/>\n\t<path class="st1" d="M481.7,759.2c29.9,22.4,59.6,45,89.3,67.7"/>\n\t<path class="st1" d="M508.9,735.2c-4.9-0.5-9.7,3.6-10.2,8.5"/>\n\t<path class="st1" d="M516.8,742.4c-2.6,3-5.3,5.9-7.9,8.9"/>\n\t<path class="st1" d="M436.6,787.8c0.4,5.6-1.1,11.4-4.2,16.1"/>\n\t<path class="st1" d="M445.3,796.1c-0.5,4.1-1.3,8.2-2.4,12.2"/>\n\t<path class="st1" d="M261.3,854.8c6.8,5.5,15.5,7.8,23.8,10.4c15.3,4.9,30.1,11.4,45.5,16.2s31.7,7.7,47.6,4.9\n\t\tc3.7-0.6,7.9-1.5,10.9,0.7c3.8,2.7,3.5,8.5,2,12.9s-3.9,8.9-3.1,13.5"/>\n\t<path class="st1" d="M410.8,929.9c-2.2-11.9-2.6-24.1-1.2-36.2c0.4-3.7,1.1-7.4,3.2-10.5c2.5-3.7,7.1-5.9,11.6-5.5\n\t\ts8.6,3.3,10.5,7.4c1.2,2.6,1.5,5.6,1.6,8.5c0.4,8.4-0.2,16.9-2.9,24.8c-2.7,7.9-7.6,15.3-14.6,19.9c-1.3-15,3.7-29.7,5.1-44.6\n\t\tc0.3-3.6,0.4-7.3-1.1-10.6"/>\n\t<path class="st1" d="M333.5,810.5c-0.9-0.3-1.8,0.7-2.3,1.5c-3.1,5.1-5.8,10.4-8.2,15.9c-1.7,4-3.2,8.1-3.7,12.4\n\t\tc-0.5,4.3,0.2,8.9,2.6,12.5c0.6,0.9,1.4,1.8,2.5,2.1c0.8,0.2,1.6-0.1,2.4-0.3c10-3.3,17.7-12.7,19-23.1c0.4-3.2,0.3-6.5-1-9.5\n\t\tc-1.2-3-3.6-5.5-6.7-6.5s-6.7,0-8.7,2.5c-1.9,2.6-1.5,6.7,1.1,8.6c0.7,0.5,1.4,0.8,2.2,0.8c1.5,0.1,3-1,3.7-2.4s0.8-3,0.8-4.5\n\t\tc-0.1-1.6-1.1-3.7-2.6-3.3c-0.5,0.1-0.9,0.5-1.2,0.9c-0.8,1.1-0.8,2.8-0.1,4c0.2,0.3,0.5,0.6,0.8,0.7c1.5,0.8,3.2-1.6,2.2-3\n\t\ts-3.3-1.1-4.4,0.1c-1.1,1.2-1.4,3.1-1.2,4.8"/>\n\t<path class="st1" d="M301.5,896.5c-4.1,6.2-8.2,12.4-11.1,19.2s-4.8,14.2-4.2,21.6c0.3,3.4,1.6,7.3,4.9,8.1\n\t\tc1.7,0.4,3.5-0.2,5.1-0.9c10.5-4.9,16.8-16.5,17.7-28.1c0.3-3.8,0-7.9-1.9-11.2s-5.9-5.7-9.6-4.9c-3.3,0.8-5.7,4-5.6,7.4\n\t\tc0.2,3.3,3,6.3,6.3,6.7c1.9,0.2,4-0.4,5.1-2.1c1.4-2.1,0.4-5.2-1.6-6.8c-0.8-0.7-1.9-1.2-2.9-0.9c-0.8,0.3-1.3,1-1.7,1.7\n\t\tc-0.7,1.7-0.4,4,1.1,5.1s4.1,0.4,4.5-1.4c0.2-0.7,0.1-1.4-0.2-2c-0.7-1.7-2.6-3.1-4.3-2.6c-1.8,0.5-2.4,3.5-0.7,4.2"/>\n\t<path class="st1" d="M270.5,790.8c-1.6-10.3,5.6-21.3,15.8-23.8c6.4-1.6,13.1-0.1,19.7-0.6s13.9-4,14.9-10.5\n\t\tc0.2-1.2,0.1-2.6-0.6-3.6c-1.1-1.5-3.3-1.7-5.2-1.7c-6.1,0-12.3,0.3-18.4-0.5c-16-2-30.1-11-44.8-17.4\n\t\tc-33.9-14.9-71.9-16.6-107.4-27c-1.2-0.4-2.7-1.1-2.4-2.4c0.2-0.9,1.2-1.3,2-1.6c33.8-10.8,67.6-21.6,102.4-28.6\n\t\tc15.9-3.2,32-5.6,47.3-10.8c13.9-4.7,27-11.6,40-18.5"/>\n\t<path class="st1" d="M265.7,671c6.1,8.7,7.7,19.7,8,30.3c0.3,12.1-1.5,25.2-9.9,34"/>\n\t<path class="st1" d="M151.9,702.6c39.9,3.1,80.1,1.4,119.6-5.1"/>\n\t<path class="st1" d="M252.9,683.8c-1.8,2.3-3.4,4.7-5,7.1"/>\n\t<path class="st1" d="M261.5,683.5c0.7,2.7-0.4,5.8-2.7,7.5"/>\n\t<path class="st1" d="M291.9,697.4c14.9-5.5,31.2-7.2,46.9-4.9c3.9,0.6,8.3,1.8,9.8,5.4c1.1,2.6,0.2,5.6-1.5,7.8s-4.2,3.6-6.8,4.8\n\t\tc-8.1,3.7-17.3,5.2-26.2,3.6c-8.8-1.5-17.1-6.2-22.7-13.2c-1-1.2-1.8-3.1-0.7-4.2"/>\n\t<path class="st1" d="M304.5,708.1c-0.5,0.2-0.8-0.5-0.7-1c0.2-2,1.5-3.8,3.3-4.6c0.5-0.2,1.1-0.4,1.7-0.2c0.8,0.2,1.2,1.1,1.3,1.8\n\t\tc0.3,1.7-0.2,3.6-1.7,4.5c-1.4,0.9-3.7,0.4-4.4-1.1c-0.7-1.6,0.9-3.7,2.5-3.3c0.3,0.1,0.6,0.2,0.7,0.5c0.5,0.6,0,1.6-0.6,2\n\t\tc-0.7,0.4-1.5,0.6-2.1,1.1"/>\n\t<path class="st1" d="M300.7,694.5c-2.4-1.6-4.5-3.5-6.3-5.7"/>\n\t<path class="st1" d="M310.9,691.5c-0.3-2-0.7-4-1-6.1"/>\n\t<path class="st1" d="M326,689.8c0-2.2,0.1-4.4,0.1-6.7"/>\n\t<path class="st1" d="M338.6,691.6c0.9-2.3,1.8-4.6,2.8-6.8"/>\n\t<path class="st1" d="M296.1,709c-2,1-3.7,2.7-4.7,4.7"/>\n\t<path class="st1" d="M306.6,713c0.1,3,0.3,6,0.4,9"/>\n\t<path class="st1" d="M319.3,717.4c2.1,2.7,4.1,5.4,6.2,8.1"/>\n\t<path class="st1" d="M331.5,715.2c1.6,2.1,3.3,4.2,4.9,6.3"/>\n\t<path class="st1" d="M342,711.8c1.4,1.4,2.7,2.8,4.1,4.3"/>\n\t<path class="st1" d="M320,751.5c3-0.4,6.1-0.8,9.1-1.2c5.7-0.7,11.5-1.5,16.7-4c4.9-2.4,9-6.2,14-8.2s11.8-1.6,14.6,3.1\n\t\tc0.9,1.6,1.3,3.6,0.5,5.2c-1.3,2.8-5.7,3.2-7.9,1c-2.2-2.1-2.4-5.9-0.9-8.6c1.5-2.7,4.3-4.5,7.3-5.4s6.1-1.2,9.1-1.6\n\t\tc8-1,16-2.9,23.2-6.6c10.9-5.6,19.4-15.1,30.2-20.9c9-4.9,19.5-7.2,27.3-13.8"/>\n\t<path class="st1" d="M332,770.9c17.7,2.8,36.1,0.3,52.4-7c3-1.4,6.3-3.2,7.2-6.5c0.2,5.5,1.3,11,3.2,16.2"/>\n\t<path class="st1" d="M403.3,751.5c3.8,3.7,6.4,8.5,7.4,13.7"/>\n\t<path class="st1" d="M349.4,750.3c1.6,2.3,2.6,5.1,2.7,7.9"/>\n\t<path class="st1" d="M353.1,781.8c1.4,3.7,2.2,7.7,2.4,11.7"/>\n\t<path class="st1" d="M422.8,670.2c-4.7-1.7-7.9-6.8-7.4-11.8s4.8-9.3,9.8-10c1.8-0.2,3.8,0.1,4.9,1.5c0.7,0.9,0.9,2.2,0.9,3.4\n\t\tc0.4,5.8-0.5,12.3-5.1,15.9c-2.3,1.8-5.2,2.6-8.1,3.2c-4.4,0.8-8.9,1.2-13.4,1c-1.8-0.1-3.8-0.2-5.3-1.2c-1.6-1-2.7-2.9-2.1-4.7"/>\n\t<path class="st1" d="M422.4,670.5c-0.6,0.2-0.2,1.2,0.3,1.6c3.9,3.1,9.3,4.1,14.2,3.1c4.9-0.9,9.4-3.6,13.1-7"/>\n\t<path class="st1" d="M423.1,674.1c1.7,10.5,5.7,20.7,11.7,29.5"/>\n\t<path class="st1" d="M427.2,689.6c-4.8,0.2-9.5,1-14.1,2.3c-2.6,0.7-5.7,2.2-5.9,4.9"/>\n\t<path class="st1" d="M389.5,663.5c-2.7,0.1-5.2,2.5-5.3,5.2"/>\n\t<path class="st1" d="M382.6,661.2c1.9,13.6,3.9,27.2,5.8,40.8"/>\n\t<path class="st1" d="M258.2,965.3c-8.8,12.9-18,26.2-31.7,33.6c-7.2,3.9-17.5,5.3-22.5-1.2c-1.8-2.3-1.5-7,1.5-6.9\n\t\tc2.7,0.1,3.2,4,2.4,6.6c-6.4,21-34,27.9-44.9,46.9c-4.7,8.2-6.2,18.4-12.8,25c-5.3,5.3-13,7.3-19.7,10.8s-13.1,10-11.9,17.5\n\t\tc6.6-1.9,13.7,0.9,19.2,4.9c5.6,4,10.2,9.1,16,12.9c9.3,6.2,20.7,8.2,31.7,9.8c11,1.6,22.2,2.8,33.1,0.9\n\t\tc7.6-1.3,15.6-4.6,19.5-11.3c3.9-6.7,1.6-17.1-5.8-19.4c-7.2-2.2-14.9,5-15.1,12.6c-0.2,7.6,5.3,14.3,11.9,18\n\t\tc6.6,3.7,14.3,4.9,21.7,6.3c18.3,3.5,36.4,8.3,54,14.3c13.2,4.5,26.5,9.8,40.4,9.7c14-0.2,28.9-5.8,41.5,0.3"/>\n\t<path class="st1" d="M236.7,1056.2c5.9-6.2,14.1-9.8,22.5-11.6c8.4-1.7,17-1.7,25.6-1.8c18.4-0.1,36.9-0.4,55.3-0.8\n\t\tc8.7-0.2,17.8-0.6,25.1-5.4c2.3-1.5,4.3-3.4,6.7-4.6s5.6-1.5,7.7,0.2s2.5,4.6,3,7.3c1.3,8,3.9,15.8,7.7,23"/>\n\t<path class="st1" d="M424.4,1073.6c-9.7-13.4-13.6-30.7-10.7-46.9c0.3-1.8,0.7-3.6,1.8-5c1.7-2.2,4.8-3.1,7.6-2.6\n\t\tc2.8,0.5,5.3,2.1,7.4,3.9c6.3,5.4,10.2,13.1,12,21.2s1.5,16.5,0.2,24.6c-0.5,3-1.3,6.4-4,7.8c-3,1.6-6.8-0.1-8.8-2.8\n\t\tc-1.9-2.7-2.4-6.2-2.9-9.6c-1.8-13.9-3.4-27.9-4.8-41.9c-0.1-0.6,0.6-1.4,0.9-0.9"/>\n\t<path class="st1" d="M293.9,1117.5c-4.2-13-5.8-26.9-4.5-40.5c0.5-5.3,1.8-11.1,6.2-14.1c1.8-1.2,4.1-1.8,6.2-1.2\n\t\tc3.1,0.9,5.1,3.9,6.5,6.9c4.4,9.5,6.1,20.3,4.9,30.7c-0.5,4-1.5,8.1-3.8,11.4c-2.4,3.3-6.3,5.6-10.3,5.1c-4.8-0.6-8.6-5.8-7.7-10.6\n\t\tc0.7-3.4,3.6-6.3,7.1-6.5c3.4-0.2,6.8,2.9,6.6,6.3c-0.2,3.2-3.2,5.7-6.4,6.3c-1,0.2-2,0.2-3-0.2c-2.3-0.9-3.4-4.1-1.9-6.1\n\t\tc1.4-2,4.9-2.1,6.4-0.1s0.5,5.3-1.8,6.1c-1.8,0.6-4-0.3-4.8-2s-0.1-4,1.5-5c0.3-0.2,0.7-0.3,1-0.3c0.9,0,1.6,1.1,1.5,2\n\t\ts-0.6,1.8-1.2,2.6"/>\n\t<path class="st1" d="M291.6,1021.9c-2.2-10.6-4.3-21.5-2.6-32.2c0.3-1.8,0.7-3.7,1.8-5.2c1.1-1.5,2.9-2.6,4.7-2.2\n\t\tc2.3,0.5,3.6,2.9,4.5,5.1c3.3,8.4,5.2,17.5,4.2,26.4c-0.4,3.1-1.5,6.7-4.5,7.6c-1.7,0.5-3.7-0.1-5.1-1.3s-2.2-2.9-2.7-4.6\n\t\tc-0.6-2.2-0.5-5,1.4-6.4c2.2-1.7,5.6-0.2,6.9,2.3c0.8,1.7,0.9,3.8-0.1,5.4s-3.1,2.5-4.9,1.8c-1.8-0.6-2.9-2.9-2-4.6\n\t\ts3.6-2.1,4.7-0.6c0.9,1.1,0.7,2.8,0.2,4.1c-0.3,0.9-0.8,1.7-1.5,2.3c-0.8,0.6-1.9,0.7-2.6,0.1c-0.5-0.3-0.7-0.9-0.9-1.4\n\t\tc-0.5-1.1-1-2.3-0.9-3.5c0-1.2,0.7-2.5,1.8-2.9c1.4-0.5,3.2,0.6,3.4,2.2c0.3,1.5-0.8,3.1-2.2,3.7"/>\n\t<path class="st1" d="M298.2,1101c1.3-1,3.3-1,4.6-0.1c1.4,0.9,2.1,2.7,1.7,4.3"/>\n\t<path class="st1" d="M427.9,1124.1c1.4,0.3,2.4,1.3,3.4,2.4c6,6.9,8.7,16.5,7,25.5"/>\n\t<path class="st1" d="M396.5,1198.6c0.8-13,3.6-26.1,10.2-37.3c6.6-11.2,17.4-20.3,30.1-23"/>\n\t<path class="st1" d="M447,1133.1c6.9-2.1,13.9-3.7,21-4.7"/>\n\t<path class="st1" d="M438.1,1185.7c-2-0.4-3.6-2-4.3-3.9c-0.8-1.9-0.8-4-0.6-6c0.3-4,2-8.6,5.9-9.6c3.7-1,7.7,2.4,8.2,6.2\n\t\tc0.5,3.8-1.8,7.6-5,9.8c-3.2,2.2-7.1,3.1-10.9,3.6c-4.4,0.6-8.9,0.7-13.1-0.7c-4.2-1.4-8-4.5-9.2-8.7"/>\n\t<path class="st1" d="M432.8,1184.7c-4.1-4.3-8.2-8.6-12.4-12.8c-0.9-1-1.9-2.1-1.8-3.4"/>\n\t<path class="st1" d="M438,1185.3c4.5,9.6,8.9,19.3,13.1,29.1"/>\n\t<path class="st1" d="M444.9,1202c-2.8-2.2-6.9-1.6-10.2-0.2c-4.3,1.8-8.5,5.3-8.7,9.9"/>\n\t<path class="st1" d="M461.3,1165.8c2.2,3.3,3.2,7.3,2.9,11.2"/>\n\t<path class="st1" d="M138.4,1127.8c5.1,1.5,10.3,2.8,15.5,3.8"/>\n\t<path class="st1" d="M182,1137c3.3,1.3,6.5,2.6,9.8,3.9"/>\n\t<path class="st1" d="M213.8,1146.6c3.2,0.6,6.3,1.6,9.2,3"/>\n\t<path class="st1" d="M248.7,1159c4.8,2,9.4,4.6,13.7,7.5"/>\n\t<path class="st1" d="M282.7,1182.7c5,4.2,9.9,8.4,14.7,12.8"/>\n\t<path class="st1" d="M310.4,1210c3.6,1.9,6.5,5,8.1,8.7"/>\n\t<path class="st1" d="M334,1239.5c3.5,4,6.4,8.6,8.5,13.4"/>\n\t<path class="st1" d="M351.7,1274c2.1,4,4.3,7.9,6.4,11.9"/>\n\t<path class="st1" d="M348.3,1297.4c-0.8,9.1,1.5,18.9,8.1,25.2c6.6,6.3,17.9,8,25,2.2c0.9-0.7,1.7-1.5,2-2.6\n\t\tc0.5-1.3,0.2-2.8-0.2-4.2c-1.1-3.8-3-7.5-6-10s-7.4-3.7-11.1-2.3c-4.7,1.8-7.2,7.3-6.7,12.3s3.3,9.5,6.5,13.4\n\t\tc6,7.1,13.8,12.7,22.5,16.1c12.7,5,27.7,5.7,37.8,15c6.6,6,9.9,14.8,14.3,22.6c4.4,7.8,11,15.5,19.9,16.5"/>\n\t<path class="st1" d="M415.1,1289.6c7.8,6.8,15.6,13.6,23.4,20.3c5.8,5.1,11.7,10.2,16.6,16.3s8.6,13.2,9.7,20.8\n\t\tc3.7-3.8,8.3-6.7,13.3-8.3"/>\n\t<path class="st1" d="M468.9,1361.2c4.2-0.2,8.4-1.6,11.9-4c4.3-3,7.4-7.3,10.4-11.5"/>\n\t<path class="st1" d="M388.2,1338.3c9.4-5.3,14-16.9,23.6-21.9c1-0.5,2.1-1,3.2-0.7c1.3,0.3,2.3,1.4,2.7,2.7s0.3,2.7,0.1,4\n\t\tc-1.3,7.9-5.9,15.3-12.4,19.9c-1.6,1.1-3.3,2.1-5.2,2.3s-4-0.5-5-2.2c-0.5-0.9-0.7-1.9-0.6-2.9c0.2-2.2,1.9-4.3,4-4.3\n\t\tc2.2,0,3.9,2.5,3.5,4.6c-0.4,2.2-2.4,3.8-4.6,4.2c-0.6,0.1-1.2,0.1-1.7-0.2c-1.4-0.8-0.9-2.9-0.1-4.2c0.4-0.7,0.8-1.3,1.5-1.7\n\t\tc0.7-0.4,1.7-0.3,2,0.4c0.5,0.8-0.2,1.8-0.8,2.4c-1.3,1.2-3.1,2.1-4.7,1.5s-2.4-3.1-1-4.1"/>\n\t<path class="st1" d="M438.7,1296.1c5-4.6,8.5-10.6,12.5-16.2s8.9-10.9,15.4-13c1,3.6,0.3,7.5-0.9,11.1c-1.6,4.7-4.1,9.2-7.9,12.5\n\t\tc-3.7,3.3-8.7,5.3-13.7,4.8c-1.7-0.2-3.6-0.9-4.1-2.4c-0.4-1.2,0.3-2.6,1.3-3.4s2.4-1.1,3.7-1.3c0.9-0.1,1.8-0.2,2.6,0.2\n\t\tc1.8,0.7,2.4,3.1,1.5,4.8c-0.8,1.7-2.7,2.7-4.6,2.9c-0.9,0.1-2.1,0-2.5-0.9c-0.4-0.7,0-1.6,0.4-2.3c0.5-0.7,1-1.4,1.8-1.8\n\t\tc0.8-0.3,1.9-0.1,2.3,0.7c0.2,0.4,0.2,0.8,0.1,1.2c-0.2,1.3-1.3,2.6-2.6,2.7s-2.8-0.9-2.8-2.2c-0.1-1.4,1.5-2.5,2.8-2"/>\n\t<path class="st1" d="M322.5,1370.1c-4.8-3.8-11.4-4.5-17.5-4.5c-30.9-0.4-61,10.5-91.8,11.2c-12.3,0.3-25.8-1.7-34.1-10.8\n\t\tc-0.8-0.9-1.7-1.9-2.9-2.2c-2.7-0.7-4.7,2.5-5.6,5.2c-3.2,10.5-4.7,21.5-4.4,32.4"/>\n\t<path class="st1" d="M124.6,1408.3c-3.4-9.8-6.5-19.9-6.1-30.2c0.4-10.3,5-21,13.8-26.4c2.6-1.6,5.8-2.6,8.6-1.4\n\t\tc2.3,1,3.7,3.3,4.8,5.5c8.8,17.6,6.6,40.2-5.4,55.7c-0.8,1-1.8,2.1-3.2,2.1c-1.2,0-2.1-1-2.8-2c-4.8-6.9-4.3-16.1-3.5-24.5\n\t\tc0.9-9.9,1.9-20.2,6.9-28.8"/>\n\t<path class="st1" d="M268.2,1304.3c-3.9,7.3-7,15.1-8,23.3c-1,8.2,0.2,16.8,4.2,24c0.6,1,1.2,2,2.1,2.7c2.9,2.2,7.3,0.6,10-1.8\n\t\tc5.3-4.6,8.1-11.5,9.8-18.3c1.5-5.6,2.3-11.6,0.9-17.2s-5.7-10.8-11.3-12c-2.1-0.4-4.4-0.3-6.2,0.9c-2.3,1.5-3.4,4.3-3.5,7\n\t\tc-0.1,3.1,1.2,6.4,3.8,8.1s6.6,1.3,8.3-1.3c1.2-1.9,1.1-4.4,0.3-6.5c-0.6-1.4-1.5-2.7-2.8-3.3s-3.2-0.1-3.8,1.2\n\t\tc-0.9,2.1,1.7,4.2,4,4.4c0.6,0.1,1.3,0,1.8-0.4c0.8-0.7,0.4-2-0.2-2.8c-1-1.2-2.7-1.9-4.2-1.5s-2.7,2-2.4,3.5\n\t\tc0.2,1.5,2,2.7,3.5,2.1c1.4-0.6,1.8-2.9,0.6-3.8"/>\n\t<path class="st1" d="M269,1382.8c-4.2,15.3-4.2,31.6-0.1,46.9c0.4,1.5,1.2,3.3,2.7,3.3c0.6,0,1.2-0.3,1.7-0.6\n\t\tc7-3.9,10.8-11.8,13-19.5c2.4-8.3,3.4-17.7-0.4-25.5c-1.5-3.1-3.8-5.9-7-7.2c-3.1-1.3-7.1-1-9.5,1.5c-1.3,1.3-2,3.2-2.2,5\n\t\tc-0.4,4,2.4,8.3,6.3,9s8.2-3.4,7-7.3c-0.6-2.1-3.2-3.8-5.1-2.6c-1.2,0.7-1.8,2.4-1.3,3.7c0.4,1.4,1.6,2.4,3,2.8\n\t\tc0.5,0.2,1.1,0.2,1.6,0c1.1-0.5,1.1-2.1,0.6-3.3c-0.9-1.9-2.7-3.3-4.7-3.7c-0.8,1.6-0.8,3.5,0,5.1c0.3-0.5,0-1.2-0.6-1.4"/>\n\t<path class="st1" d="M273.5,1304.5c-0.7-0.4-1.6,0.3-2.1,0.9c-1.5,2-2.6,4.5-2.7,7s1.1,5.2,3.2,6.6c1.2,0.8,3,1,3.9-0.1\n\t\tc0.4-0.6,0.5-1.3,0.5-2c0.1-1.8-0.1-3.5-0.6-5.2"/>\n\t<path class="st1" d="M271,1305.1c-0.6,2.3-1.2,4.6-1.9,6.9c0.7,1.1,1.4,2.2,2.6,2.7c1.1,0.5,2.6,0.1,3.4-0.8s1-2.4,0.4-3.4"/>\n\t<path class="st1" d="M279.9,1385.2c-0.9-1-2.1-1.7-3.4-2c-2.6-0.6-5.6,0.7-6.7,3.2c-1,2.5,0.4,5.8,3,6.4c2.4,0.6,4.9-1.2,5.8-3.5\n\t\tc0.8-2.3,0.2-5-1-7.1c-0.5-0.9-1.3-1.8-2.3-1.7c-0.8,0.1-1.4,0.7-1.8,1.3c-0.9,1.1-1.7,2.4-1.9,3.8c-0.2,1.4,0.4,3,1.7,3.6\n\t\tc1.3,0.5,2.8-0.1,3.9-1c0.4-0.3,0.8-0.7,1-1.3c0.1-0.5-0.1-1.2-0.7-1.3"/>\n\t<path class="st1" d="M274.4,1393.1c-1.1-1.4-2.2-2.8-2.7-4.4c-0.5-1.7-0.4-3.6,0.7-4.9c0.9-0.9,2.4-1.4,3.4-0.6\n\t\tc0.6,0.4,1,1.2,1.2,1.9c0.5,2-0.7,4.6-2.8,4.7"/>\n\t<path class="st1" d="M427.1,1388.7c3.3-2.6,6.5-5.2,9.8-7.8"/>\n\t<path class="st1" d="M453.1,1411.1c1.9,0.6,3.7,1.1,5.6,1.7"/>\n\t<path class="st1" d="M628.4,1561.6c-5.9-7.1-11.6-14.3-17.1-21.8c-5.3-7.2-10.4-14.6-13.5-22.9c-2.6-7.2-3.7-15-7.5-21.7\n\t\tc-0.3-0.6-0.7-1.2-1.3-1.3c-0.6-0.1-1.2,0.1-1.7,0.4c-5.6,3-10.9,6.8-15.5,11.2"/>\n\t<path class="st1" d="M551.5,1497c3.9-4.8,7.8-9.6,12.5-13.5s10.5-6.8,16.6-7.2"/>\n\t<path class="st1" d="M570.1,1561.8c5.4-6.2,12.1-11.2,19.5-14.7"/>\n\t<path class="st1" d="M617.5,1530c4.5-3.3,8.6-7.2,12.3-11.4"/>\n\t<path class="st1" d="M487.3,1538.1c4.9,12.6,11.3,24.5,18,36.3c2.6,4.6,5.3,9.3,9.1,13c5.8,5.7,13.7,8.7,20.2,13.7\n\t\tc0.6,0.5,1.3,1.1,1.3,1.9c0,0.5-0.3,0.9-0.5,1.3c-4.4,6.1-14.5,5.9-18.6,12.3"/>\n\t<path class="st1" d="M533.3,1638.6c-0.9-1.1-0.2-2.7,0.5-3.9c2.8-4.6,5.7-9.2,9.5-13.1s8.4-7.1,13.7-8.2c2.2-0.5,4.8-0.5,6.4,1.1\n\t\tc0.7,0.8,1.1,1.8,1.3,2.9c0.8,3.9-0.4,7.9-2.1,11.5c-5.5,11.3-17.3,19.3-29.8,20.2c-0.7,0-1.4,0.1-2-0.3c-1.4-0.9-0.8-3,0.1-4.4\n\t\tc6.6-10.4,20.6-13.8,27.7-23.8"/>\n\t<path class="st1" d="M457,1590.8c6.4-6.1,14.6-10.2,23-13.2c1.7-0.6,3.5-1.2,5.3-1.1s3.7,1,4.4,2.6c1,2.2-0.2,4.7-1.5,6.7\n\t\tc-5.5,8.3-13.9,14.7-23.4,17.7c-2.6,0.8-5.8,1.3-7.8-0.5c-1.5-1.4-1.8-3.8-1.5-5.8c0.2-1.5,0.6-3,1.7-3.9c1.3-1,3.3-0.8,4.4,0.4\n\t\tc1.1,1.1,1.4,3,0.7,4.5c-0.6,1.3-2,2.3-3.4,2.1s-2.6-1.7-2.2-3.1s2.6-1.9,3.4-0.7c0.6,0.8,0.3,2.1-0.5,2.7s-1.9,0.8-2.9,0.6"/>\n\t<path class="st1" d="M512,1560.5c6.4-5.1,13.4-9.4,20.9-12.6c1.9-0.8,4.2-1.6,6-0.5c0.3,2.4,0,4.9-0.7,7.2c-0.6,2.1-1.6,4-3,5.7\n\t\tc-1.6,2-3.7,3.6-5.9,4.9c-1.9,1.1-4.1,2.1-6.3,2.2s-4.6-0.7-6-2.5c-1.3-1.8-1.3-4.7,0.4-6.1s4.9-0.7,5.4,1.5\n\t\tc0.3,1.3-0.3,2.7-1.3,3.7c-0.8,0.8-1.8,1.4-2.9,1.4c-1.9-0.1-3.2-2.4-2.5-4.2s3-2.6,4.7-2"/>\n\t<path class="st1" d="M521.2,1561.3c-1.1,0.1-2,0.8-2.5,1.8"/>\n\t<path class="st1" d="M370.1,1563.2c1.9,4.3,1.8,9.1,2,13.8c0.9,26.8,11.7,52.1,22.6,76.6c2.4,5.4,5.1,11.1,10.1,14.1\n\t\tc1.5,0.9,3.4,2.2,2.6,3.7c-0.4,0.7-1.3,1-2,1.3c-7.1,2.1-14.2,4.2-21.2,6.2"/>\n\t<path class="st1" d="M371.2,1706.7c7.5-5.5,15.1-10.8,22.8-16c3.9-2.6,8.1-5.3,12.8-5.1c6,0.1,11.4,5.6,11.4,11.6\n\t\tc0,4.3-2.4,8.4-5.7,11.1s-7.4,4.4-11.6,5.5c-8.1,2.2-16.7,2.8-25,1.6c-0.8-0.1-1.7-0.3-2.2-0.9c-0.9-1.1,0-2.7,1-3.7\n\t\tc9-9,25.8-5.4,34.7-14.5"/>\n\t<path class="st1" d="M316.1,1616.8c5.7-3,11.6-5.6,17.6-7.8c4.6-1.6,9.4-3.1,14.2-2.4c1.4,0.2,2.8,0.5,4,1.3\n\t\tc2.7,1.8,3.6,5.5,2.8,8.6c-0.8,3.1-2.9,5.8-5.3,7.9c-7.7,7-18.8,10.1-29,8.3c-1.9-0.3-3.7-0.8-5.3-2c-1.5-1.1-2.6-3-2.4-4.9\n\t\tc0.2-1.2,0.8-2.3,1.7-3.2c1.3-1.3,3.1-2.2,4.9-2.1s3.6,1.4,4,3.2c0.5,2.4-1.6,4.6-3.9,5.4c-1.8,0.7-4.2,0.6-5.4-0.9\n\t\tc-1.2-1.5,0-4.5,1.9-4.1c1.2,0.2,1.9,1.7,1.5,2.8c-0.4,1.1-1.6,1.8-2.8,1.7c-1.4-0.1-2.7-1.4-2.7-2.9c-0.1-1.4,1-2.9,2.4-3.2"/>\n\t<path class="st1" d="M396.5,1595.7c9-7.4,19.9-12.4,31.4-14.3c2.1-0.4,4.6-0.5,6.1,1c1,0.9,1.3,2.3,1.4,3.7c0.3,3.6-1,7.2-3.2,10.1\n\t\tc-2.1,2.9-5,5.3-7.9,7.3c-5.1,3.5-11.1,6.2-17.2,5.6c-3.4-0.3-7.2-2.3-7.5-5.7c-0.1-2,1.2-4,3.1-4.7s4.2,0.1,5.3,1.7\n\t\tc0.2,0.3,0.4,0.7,0.5,1c0.2,1.3-1.1,2.4-2.3,2.9c-1.2,0.6-2.6,1-3.9,0.6s-2.3-1.8-1.9-3.1c0.5-1.6,3.1-1.6,3.9-0.1\n\t\ts-0.6,3.4-2.3,3.5c-0.7,0-1.4-0.3-1.8-0.9c-0.3-0.6-0.1-1.5,0.6-1.8"/>\n\t<path class="st1" d="M318.9,1623.9c-0.2-0.2-0.4-0.4-0.6-0.6c1.3-0.4,2.8,0.3,3.3,1.6c0.4,1.3-0.3,2.8-1.6,3.3"/>\n\t<path class="st1" d="M312.7,1550.7c0,5.2-2.2,10.4-5.8,14.1"/>\n\t<path class="st1" d="M325.3,1555.8c-2.1,7.5-4.3,15.1-6.4,22.6"/>\n\t<path class="st1" d="M525,1818.3c3.3,23.6-9.2,48.7-30,60.3c-1.6,0.9-3.6,1.6-5,0.4"/>\n\t<path class="st1" d="M473.3,1779.4c-1.7,18.3-1.6,37.7,7.3,53.8c4.7,8.5,11.5,15.5,18.8,21.8c3.4,2.9,7.1,5.8,11.4,6.7"/>\n\t<path class="st1" d="M498.1,1836c2.5,2.4,5.6,4.2,9,4.9"/>\n\t<path class="st1" d="M502.8,1843.8c2.4,1.8,5.7,2.4,8.5,1.4"/>\n\t<path class="st1" d="M544.2,1777.6c-7.6,0.8-15.3,0.9-22.9,0.3c-5.1-0.4-10.4-1.3-14.5-4.4c-1.5,4.4-3,8.8-4.5,13.3"/>\n\t<path class="st1" d="M495.1,1771.1c-1.1,3.5-1.7,7.2-1.6,10.9"/>\n\t<path class="st1" d="M527.2,1791.4c-0.2,2.8-0.6,5.6-1.3,8.3"/>\n\t<path class="st1" d="M529.6,1759.2c0,3-0.4,6-1.2,8.9"/>\n\t<path class="st1" d="M497.9,1705c3.9-1,8.2-0.8,12,0.5"/>\n\t<path class="st1" d="M525.3,1706.9c3.7,2,7.4,4.1,11.1,6.1"/>\n\t<path class="st1" d="M552.4,1725.9c2.1,2.9,4,5.9,5.8,9"/>\n\t<path class="st1" d="M571.9,1758.3c2.2,2.7,3.8,5.8,4.9,9.2"/>\n\t<path class="st1" d="M529.1,1863.9c3.3-1,6.7,0.7,9.6,2.5c8.1,5.1,15.4,11.5,21.7,18.8"/>\n\t<path class="st1" d="M528.1,1864.3c1.9,8.8,5.6,17.1,10.9,24.4c2.5,3.4,5.6,6.8,9.8,7.7"/>\n\t<path class="st1" d="M531,1877.1c-3.1-0.8-6.3-0.7-9.4,0.1"/>\n\t<path class="st1" d="M539.3,1865c0.6-3,1.8-5.8,3.4-8.4"/>\n\t<path class="st1" d="M536.4,1886.2c-2.9,1.1-5.6,2.6-8,4.4"/>\n\t<path class="st1" d="M434.2,1962c0.1-0.6,0.9-0.7,1.5-0.7c3.6,0.3,7.1,0.9,10.7,0.5c8.2-0.8,15.2-6.3,23.2-8.5\n\t\tc0.3-0.1,0.6-0.1,0.8,0c0.2,0.1,0.3,0.4,0.3,0.6c0.9,3.3,1.8,6.5,2.7,9.8"/>\n\t<path class="st1" d="M442,1939.7c0.6,2.7,1.4,5.3,2.4,7.9"/>\n\t<path class="st1" d="M448.8,1971.9c0.6,3.2,1.2,6.3,1.8,9.5"/>\n\t<path class="st1" d="M435.4,2004.4c-5.7,16.2-4,34.8,4.5,49.8c1.1,1.9,2.3,3.8,4.2,4.7"/>\n\t<path class="st1" d="M499,1951.5c0.4-0.7,1.2,0.3,1.2,1.1c1.1,19.2-3.5,39-14.4,54.9c-10.8,15.9-28,27.7-47,30.7"/>\n\t<path class="st1" d="M440,2022.8c1-2.2,2.4-4.3,4.1-6"/>\n\t<path class="st1" d="M449.2,2023.3c0.5-1.7,1.5-3.3,2.8-4.4"/>\n\t<path class="st1" d="M404.8,2019.9c-8.7-1.2-17.5-2.3-26.2-2c-8.8,0.3-17.7,2.1-25.3,6.5c0.7,0.5,1.3,1.1,2,1.6"/>\n\t<path class="st1" d="M353.3,2025.7c10.5,8.1,24.7,11.1,37.6,7.9c2.6-0.6,5.1-1.5,7.2-3.2c2.1-1.6,3.7-4,3.8-6.7"/>\n\t<path class="st1" d="M390.7,2030.3c-1.1-1.1-0.8-3.1,0.4-4c1.3-0.8,3.2-0.3,3.8,1.1c0.6,1.4-0.3,3.2-1.8,3.6\n\t\tc-1.6,0.4-3.3-1-3.4-2.6"/>\n\t<path class="st1" d="M360.4,2019.5c-1-1.8-2.2-3.5-3.7-4.9"/>\n\t<path class="st1" d="M377.6,2016.3c-0.6-2-0.8-4-0.5-6.1"/>\n\t<path class="st1" d="M394,2016.2c0-2.2,0.1-4.4,0.1-6.7"/>\n\t<path class="st1" d="M362.8,2033.4c-0.8-0.6-1.8,0.4-2.3,1.3c-1,1.9-2.1,3.7-3.1,5.6"/>\n\t<path class="st1" d="M379.8,2036.4c0.2,2,0.3,4,0.2,6"/>\n\t<path class="st1" d="M395,2034.4c2.5,0.6,4.8,2.2,6.3,4.4"/>\n\t<path class="st1" d="M261.9,2166.9c13.5-3.5,27.3-6.1,41.2-7.6c10-1.1,20.1-1.6,30.1-3.4c9.9-1.8,19.8-4.8,28.1-10.5\n\t\tc6.7-4.5,13-11,21.1-10.9c1.2,0,2.4,0.2,3.4,0.8c0.9,0.5,1.6,1.4,2.2,2.3c2,3.2,2.4,7,2.5,10.8c0.1,3.6,0,7.6,2.2,10.4\n\t\tc2.2,2.9,5.9,3.8,9.4,4.5"/>\n\t<path class="st1" d="M425.3,2160.6c-8.2-11.9-11.6-27-9.5-41.2c0.3-2.1,0.8-4.3,2.2-5.9c2.1-2.2,5.5-2.5,8.4-1.5\n\t\tc2.8,1.1,5,3.3,6.9,5.7c7.6,9.5,11.1,22,9.8,34c-0.3,2.6-0.8,5.2-2,7.6c-0.3,0.7-0.8,1.4-1.5,1.6c-1.3,0.5-2.5-0.7-3.3-1.8\n\t\tc-9.2-12.9-5.2-31.3-12.4-45.2"/>\n\t<path class="st1" d="M288.6,2095.8c-1.2,9.7-0.7,19.6,1.5,29.1c0.9,4.1,2.2,8.2,4.5,11.7c1.8,2.7,4.9,5.1,8,4.4\n\t\tc1.3-0.3,2.4-1.1,3.4-2c3.5-3.3,5.1-8,5.9-12.7c1.3-8.2,0.2-16.6-3.3-24.1c-1.5-3.2-3.5-6.4-6.6-8.1c-2.7-1.5-6.2-1.8-8.9-0.4\n\t\tc-2.8,1.4-4.7,4.4-4.5,7.6c0.2,3.2,2.5,6,5.5,6.6c3.1,0.5,6.4-1.5,7.2-4.5c0.8-3-1.5-6.5-4.6-6.9c-1.9-0.2-4.1,0.8-4.8,2.7\n\t\tc-0.8,1.8,0.2,4.2,2,4.9c1.8,0.6,4.2-0.8,4.2-2.9c-0.1-2.3-3.7-3.5-5.1-1.6c-1.4,1.8,0.7,5,3,4.5c0.3-0.1,0.6-0.2,0.8-0.5\n\t\tc0.6-0.6,0.5-1.8,0-2.4c-0.5-0.7-1.5-1-2.4-1c-0.7,0.9-0.3,2.5,0.8,3c0.5-1-0.1-2.3-1-2.8c-0.3,0.5-0.5,1.1-0.4,1.6"/>\n\t<path class="st1" d="M815.1,2120.7c3.8,2.9,6.8,6.9,8.6,11.4"/>\n\t<path class="st1" d="M832.3,2119.3c3.6,1.9,6.5,5.4,7.6,9.3"/>\n\t<path class="st1" d="M944.6,2092.2c1.9,3.6,1.8,8.1-0.4,11.5"/>\n\t<path class="st1" d="M952.1,2090.4c3.6,3.5,4.2,9.6,1.5,13.8"/>\n\t<path class="st1" d="M1072,1975.8c-6.1,19.6-16.3,37.8-29.8,53.2c5.1,0.7,10,3.3,13.5,7.2"/>\n\t<path class="st1" d="M1032.3,2039.4c2.6,4.2,7.1,7.2,11.9,7.9"/>\n\t<path class="st1" d="M1050,1986.2c-4.9-1.7-9.4-4.4-13.1-7.8"/>\n\t<path class="st1" d="M1075.8,1997.1c0.4-0.6,1.3-0.2,1.9,0.2c4,2.8,8.1,5.5,12.1,8.3"/>\n\t<path class="st1" d="M1110.7,2186.9c10-8.8,20.4-17.1,29.6-26.8c21.1-22.3,34.7-51.6,38.2-82.1c0.2-1.7,0.4-3.4,1.1-4.9\n\t\tc2.1-4.8,8.6-6.1,13.6-4.7c5,1.4,9.2,4.8,13.9,7.1c8.6,4.3,19,5,28.1,1.9"/>\n\t<path class="st1" d="M1161.4,2015.5c21.3-5.1,42.9-10.3,64.8-9.1c5.1,0.3,10.7,1.2,13.6,5.4c2.6,3.9,1.8,9.3-0.8,13.2\n\t\tc-2.6,3.9-6.7,6.5-10.8,8.8c-11.1,6.5-23.2,12.2-36,12.2s-26.4-7-30.6-19.1c-0.2-0.7-0.4-1.3-0.4-2c0.1-2.9,3.7-4,6.6-4.2\n\t\tc25.6-1.7,51.7,12,76.2,4.5"/>\n\t<path class="st1" d="M1048.4,2116.9c13.3,2.4,25.4,9,36.9,15.9c3.6,2.2,7.2,4.4,10.1,7.5c2.8,3.1,4.8,7.2,4.4,11.4\n\t\tc-0.2,2-0.9,4-2.4,5.5c-1.5,1.4-3.5,2.2-5.5,2.7c-17,4.7-36.4-0.5-48.8-13.1c-5-5.1-9-12.4-6.6-19c1.9-5.2,8.2-8.5,13.5-6.7\n\t\tc5.2,1.9,7.9,9,4.8,13.7c-3.1,4.6-11.3,4.4-13.8-0.5c-1.9-3.8,0.8-9.5,5.1-9.3c3.1,0.1,5.6,3.4,5,6.4c-0.7,3-4.3,5-7.2,3.9\n\t\ts-4.5-4.8-3.2-7.6c1.4-3.1,5.8-4.2,8.5-2.3c2.7,2,3,6.5,0.6,8.8c-2.2,2.1-6.9,1.3-7.3-1.8c-0.3-2.3,2.4-4.4,4.6-3.6\n\t\tc2.2,0.9,2.8,4.2,1.2,5.8c-1.5,1.5-4.2,1.3-5.5-0.4c-1.2-1.7-0.7-4.4,1.1-5.4"/>\n\t<path class="st1" d="M1044.8,2131.3c1.2,0.5,0.7,2.7-0.6,2.7s-1.9-2-0.8-2.8c1-0.7,2.7,0.3,2.6,1.6"/>\n\t<path class="st1" d="M1104.7,1913c-6.6-0.2-12.6-5.6-13.6-12.1s3.4-13.4,9.7-15.4c2-0.6,4.1-0.8,6.1-0.1c3.7,1.3,5.6,5.5,6,9.4\n\t\tc0.4,3.7-0.2,7.6-2.3,10.8c-1.3,2-3.1,3.6-5.1,5c-5.4,3.7-12,5.6-18.5,4.7s-12.5-4.9-15.5-10.7c-0.5-1-0.9-2.1-0.6-3.1"/>\n\t<path class="st1" d="M1100.2,1913.3c4.7,1.7,9.6,2.9,14.6,3.6c2.9,0.4,5.8,0.7,8.6,0.1c4.6-0.9,8.5-3.7,12.3-6.5"/>\n\t<path class="st1" d="M1102.9,1915.1c-5.5,12.8-11,25.7-16.5,38.5"/>\n\t<path class="st1" d="M1094.1,1937.7c5.8-1.6,11.8-3.3,17.8-2.5s12,4.9,13.1,10.8"/>\n\t<path class="st1" d="M1144.9,1896.9c2.1,1.2,4.1,2.7,5.9,4.4c0.5,0.5,1,1,1.1,1.7s-0.4,1.5-1.1,1.4"/>\n\t<path class="st1" d="M1066.9,1892.2c-2.6-0.1-4.9,1.9-5.9,4.2c-1.1,2.3-1.2,5-1.3,7.5"/>\n\t<path class="st1" d="M1060.8,1885.2c-3.3,0.1-6.4,2.6-7.1,5.8"/>\n\t<path class="st1" d="M921.6,2076.7c0,0.2,0,0.3,0,0.5"/>\n\t<path class="st1" d="M903.1,2115.6c0.8,1.4,1.6,2.7,2.3,4.1"/>\n\t<path class="st1" d="M549,1922.8c8.7,5.8,40.5,35.7,81.5,29.4c10.3-1.6,21.3-4.6,26.8-13.4c2.6-4.2,3.5-10.4-0.4-13.5\n\t\tc-1.2-0.9-2.6-1.4-4-1.7c-7-1.4-15.1,2.1-17.6,8.8c-2.5,6.8,1.2,14.5,6.6,19.3c5.4,4.8,12.3,7.5,18.6,11.2c3,1.7,5.9,3.7,8.1,6.4\n\t\tc2.6,3.1,4.1,7,5.1,11c1.6,6.3,1.6,13.5-2,18.9c-3.7,5.4-12.1,7.8-17,3.5c-3.5-3-4.2-8.5-2.4-12.8s5.6-7.4,9.7-9.4\n\t\tc2.5-1.2,5.3-2,8-1.6c7.5,1.1,10.5,10.1,12.9,17.3c2.4,7.1,5.6,13.8,9.7,20.1c3.1,4.8,6.9,9.4,11.9,12.1s11.5,3.3,16.3,0.1\n\t\tc6.2-4.1,7.4-13.2,4.5-20c-2.3-5.4-7.4-10.1-13.2-10c-6.7,0.2-11.9,6.7-12.8,13.4c-0.8,6.7,1.7,13.3,4.6,19.3\n\t\tc4.5,9.4,11.1,19,21.1,21.7c4.5,1.2,9.4,0.9,13.9,2.3c10.5,3.2,16,14.3,22.5,23.2c10.2,14.1,25.3,24.5,42.1,29.1"/>\n\t<path class="st1" d="M763.1,2112.4c-10.5-6.5-22.1-11-32.7-17.1c-10.7-6.1-20.8-14.4-25.6-25.7c-0.5-1.1-1.2-2.4-2.4-2.2\n\t\tc-0.5,0.1-0.9,0.4-1.3,0.7c-5.2,4.2-10.3,8.4-15.5,12.7"/>\n\t<path class="st1" d="M673,2063.9c7.1-2.3,13.5-6.7,18.3-12.6"/>\n\t<path class="st1" d="M726.1,2128.2c3.9-2.2,7.1-5.6,9-9.6"/>\n\t<path class="st1" d="M749.5,2094.4c1.4-2.9,3.2-5.6,5.3-8"/>\n\t<path class="st1" d="M662.2,1960c8.5-4.7,16.3-10.7,23.1-17.6c7.2-7.4,13.4-16.3,15-26.5s-2.4-21.7-11.4-26.7\n\t\tc-5.5-3.1-13.8-2.6-16.6,3c-1.5,2.9-1.1,6.6,0.4,9.5c4.2,8.4,15.8,10.8,24.7,7.8c9-3,16-9.8,22.9-16.2s14.6-12.8,23.9-14.4\n\t\tc10.3-1.7,20.6,2.8,30.7,5.7c14.8,4.3,30.5,5.2,45.7,2.7c8.7-1.4,17.1-3.9,25.7-5.6c13.3-2.6,26.9-3.2,40.4-1.8\n\t\tc16,1.7,32.8,6.1,47.5-0.4c3.2-1.4,6.2-3.4,8.3-6.2c5.2-7,2.6-17.8-3.9-23.6c-6.6-5.8-15.9-7.5-24.6-7c-6.7,0.3-14.9,3.2-15.7,9.9\n\t\tc-0.5,4.1,2.1,8.1,5.5,10.5c7.8,5.8,19.7,5,26.7-1.7c6.5-6.3,8.1-16.5,5.5-25.2c-2.6-8.6-8.9-15.8-16.2-21.1\n\t\tc-3-2.2-6.5-4.8-6.4-8.5c0-1.4,0.6-2.8,0.4-4.2c-0.5-3.3-4.7-4.2-7.8-5.8c-7.5-3.8-8.8-13.7-9.2-22c-1.3,0.9-2.6,1.7-3.9,2.6"/>\n\t<path class="st1" d="M871.2,1807.8c-17.7,1.1-35.6,2.1-53.2-0.3s-35.1-8.2-49-19.3c-4.4-3.6-8.9-7.8-14.5-8.2\n\t\tc-6.2-0.4-11.9,4.5-14.2,10.3s-2.1,12.3-1.3,18.5"/>\n\t<path class="st1" d="M692.8,1821.2c-3.4-12.2-2.3-25.6,2.9-37.1c1.4-3.2,3.3-6.2,5.9-8.5s6.3-3.5,9.6-2.8c4.6,1.1,7.6,5.7,9,10.2\n\t\tc2.3,7.7,1.2,16.2-1.5,23.8s-7,14.5-11.3,21.4c-1.2,2-3,4.3-5.3,4c-2.8-0.3-3.8-3.7-4-6.5c-1.1-18,7.1-35.2,10.5-53"/>\n\t<path class="st1" d="M832.8,1871.2c-2-12.2-3.9-25.2,1.3-36.4c1-2.2,2.3-4.3,4.4-5.7s4.8-1.7,6.8-0.3c1.8,1.2,2.5,3.5,3,5.6\n\t\tc2.1,9,2,18.5,0.7,27.7c-0.5,3.6-1.3,7.3-3.7,10s-6.8,3.9-9.6,1.7c-1.3-1-2.1-2.6-2.4-4.3c-0.5-2.3-0.3-5,1.1-6.8s4.3-2.7,6.4-1.5\n\t\tc1.7,1.1,2.4,3.3,2.4,5.3c-0.1,3.3-2.4,6.9-5.8,7.1c-0.6,0-1.3-0.1-1.8-0.5c-0.4-0.3-0.6-0.9-0.8-1.4c-0.6-2.4,0.4-5.1,2.4-6.4\n\t\tc1.3-0.9,3.4-1,4.3,0.3c0.3,0.5,0.4,1.1,0.4,1.7c0.1,1.7-0.4,3.4-1.5,4.6c-1.2,1.2-3.2,1.6-4.6,0.6c-1.2-0.9-1.6-2.7-1-4.1\n\t\ts2-2.4,3.4-2.7c0.4-0.1,0.8-0.1,1.2,0.1c0.4,0.3,0.5,0.8,0.5,1.3c0.1,2.2-0.9,4.9-3,5c-1.8,0.1-3.3-1.9-3.2-3.7s1.1-3.5,2.1-5"/>\n\t<path class="st1" d="M838.4,1796.9c0.1-3.8,0.2-7.6,0.3-11.4c0.1-4.9,0.3-9.9,1-14.8c0.5-3,1.2-5.9,2.7-8.5\n\t\tc0.5-0.8,1.2-1.7,2.2-1.8c0.5,0,1,0.2,1.5,0.5c3.4,2,5.5,5.8,6.3,9.7s0.4,7.9,0,11.8c-0.4,3.8-1,7.6-2.4,11.1\n\t\tc-1.4,3.4-4.7,6.9-8.3,6c-1.8-0.4-3.2-1.8-4-3.4c-1.1-2-1.4-4.6-0.5-6.7s3-3.8,5.3-3.8c0.7,0,1.4,0.1,1.9,0.5\n\t\tc0.9,0.7,1.1,2,1.1,3.2c-0.1,1.9-0.6,3.7-1.5,5.4c-0.9,1.7-3.3,3.2-4.5,1.8c-0.4-0.5-0.5-1.1-0.7-1.7c-0.4-1.9-0.5-4.3,1.2-5.2\n\t\tc1.6-0.8,3.7,0.8,3.7,2.6c0,1.8-1.4,3.4-3.1,4c-0.6,0.2-1.4,0.4-2,0.1c-0.7-0.4-1-1.2-1-2c-0.2-2.9,2.8-5.5,5.6-5.1"/>\n\t<path class="st1" d="M671.4,1866.3c3-4.1,9.4-5.3,13.7-2.6"/>\n\t<path class="st1" d="M670.9,1855.2c5.6-1.3,11.2-2.6,16.8-4"/>\n\t<path class="st1" d="M638,1898.4c4.2-1.6,9-1.6,13.2,0"/>\n\t<path class="st1" d="M630.9,1889.1c-0.4-1.7,1.5-2.9,3.2-3.4c3.3-1,6.6-1.7,10-2.2"/>\n\t<path class="st1" d="M640.1,2000.5c-0.4,4.6,2.3,9.2,6.4,11.2"/>\n\t<path class="st1" d="M630,2005.3c-1.8-0.3-2.9,1.9-2.8,3.7c0,3.3,1.8,6.6,4.6,8.4"/>\n\t<path class="st1" d="M740,2017.8c-0.1-0.5,0.7-0.4,1.1,0c2.6,3.2,3.1,8,1.3,11.7"/>\n\t<path class="st1" d="M759.6,2009.7c3.7,2.2,5.2,7.6,3,11.4"/>\n\t<path class="st1" d="M952.3,1880.6c7.2-2.8,15.8-1.6,22,3.1c1.5-3.3,4.7-5.7,8.2-6.3"/>\n\t<path class="st1" d="M969.6,1829.2c6.1,0.2,12,4.2,14.5,9.8c2.8-4.8,8.4-7,13.6-8.8"/>\n\t<path class="st1" d="M1043.4,1841.7c5.8-1.1,12,0.4,16.6,4c3-4.5,7.1-8.2,12-10.5"/>\n\t<path class="st1" d="M1265.4,1851.2c-1.9,1-4.4,0.4-6-1.1s-2.3-3.7-2.4-5.8c-0.2-5.9,4.3-11.3,9.7-13.5c2.4-1,5.1-1.4,7.5-0.6\n\t\tc2.2,0.8,3.9,2.5,5.2,4.4c1.8,2.5,3,5.3,3.8,8.2c0.8,3.4,0.9,7.2-1.1,10.1c-3.1,4.8-9.8,5.4-15.4,4.8c-3.7-0.4-7.5-1.1-10.5-3.3\n\t\tc-3.5-2.6-5.4-6.9-6.2-11.2c-1.4-7.3-0.2-15,3.3-21.5"/>\n\t<path class="st1" d="M1263.6,1858.6c1.2,0,2.3,0.7,3.3,1.4c4.7,3.1,9.5,6.1,14.9,7.6s11.4,1.5,16.3-1.3"/>\n\t<path class="st1" d="M1264.2,1854c-4.2,11.1-0.7,23.5,3,34.8c1.7,5.2,3.6,10.6,7.9,13.9"/>\n\t<path class="st1" d="M1263.2,1885.7c-6.5-0.2-12.7,5.5-13,12"/>\n\t<path class="st1" d="M1301,1858c1.7-0.4,3.4-0.7,5-0.5c1.7,0.2,3.4,1.2,3.9,2.8"/>\n\t<path class="st1" d="M1306.8,1845.2c10.2,7.3,20.5,14.6,30.7,22"/>\n\t<path class="st1" d="M1252,1937.2c18.8-4.5,38.1-9.2,53.4-20.9c5.4-4.2,10.3-9.1,16.2-12.6c9.8-5.7,22.2-6.5,32.7-2.3\n\t\tc1.1,0.4,2.2,1,2.7,2c1.2,2.4-1.9,4.8-4.6,5.3c-3.5,0.6-7.8-0.5-8.8-3.9c-1.1-3.7,2.5-6.9,5.7-9c10.1-6.5,21.3-12.1,29.1-21.2\n\t\tc5.7-6.6,9.3-14.8,14.9-21.5s14.4-12,22.8-9.7c-1.2,5.4-8.6,7.3-13.4,4.7c-4.8-2.6-7.4-8.1-8.7-13.4s-1.7-10.9-3.9-16\n\t\tc-2.2-5.2-6.1-9.5-9.9-13.6c-8.6-9.4-17.2-18.9-25.8-28.3"/>\n\t<path class="st1" d="M1261.6,1781.7c19.3-23.4,44.4-42,72.3-53.8c3.1-1.3,6.5-2.8,8.1-5.8c-8.7-2.6-16.6-8.1-22.1-15.4"/>\n\t<path class="st1" d="M1335.6,1691.3c9,5.8,16.7,13.7,22.1,23"/>\n\t<path class="st1" d="M1250.7,1734.2c6.4,5.1,11.4,11.7,14.6,19.2"/>\n\t<path class="st1" d="M1284,1776c1.9,0.1,3.5,1.6,4.8,3c4.3,4.5,8.3,9.3,12.2,14.2"/>\n\t<path class="st1" d="M986.8,1234.5c8.6-1.9,18.1-0.1,25.4,4.8c0.4,0.3,1,0.6,1.5,0.5c0.4-0.1,0.7-0.5,0.9-0.9\n\t\tc3.7-6.2,10.7-10.3,17.9-10.5"/>\n\t<path class="st1" d="M1226.3,1310.8c4.9-2.1,10.5-1.2,15.5,0.7s9.5,4.7,14.4,6.7c0.6,0.2,1.2,0.4,1.8,0.3c0.7-0.2,1-0.9,1.4-1.5\n\t\tc3.5-6,10.8-9.5,17.7-8.3"/>\n\t<path class="st1" d="M1279.2,1372c4.2,3.2,7.1,8.1,7.7,13.4"/>\n\t<path class="st1" d="M1423.2,1099.4c-2.8,19.8-5.4,40.1-0.9,59.5c1.2,5,2.8,10.1,5.9,14.2c-6.9-0.5-14,0.5-20.5,2.9"/>\n\t<path class="st1" d="M1407.6,1187.3c8,0.6,16.2-0.7,23.6-3.9"/>\n\t<path class="st1" d="M1381.1,1131.1c6.3,0.6,12.7,0,18.8-1.6"/>\n\t<path class="st1" d="M1425.7,494.4c-3.4,2.5-5.7,6.4-6.3,10.6"/>\n\t<path class="st1" d="M1412.3,487.8c-2.3,4.8-4.6,9.5-6.9,14.3"/>\n\t<path class="st1" d="M1378.5,372.9c7.8,5.9,18.2,7.3,28,7.8c11.3,0.5,22.8,0,33.3-4s19.9-12.2,23.2-23c3.3-10.8-0.9-24-10.9-29.2\n\t\tc-3.2-1.7-7.2-2.4-10.4-0.7c-3.5,1.9-5,6.2-5.5,10.1c-1.7,14.6,7.7,29.7,21.6,34.6"/>\n\t<path class="st1" d="M1280.5,15.9c3.6-3.9,6.8-8.1,9.7-12.5"/>\n\t<path class="st1" d="M889.8,11.5c0.6,3.8,0.8,7.6,0.4,11.4"/>\n\t<path class="st1" d="M900.8,13.2c0.2,2.1,0.4,4.3,0.6,6.4"/>\n\t<path class="st1" d="M370.2,577c-7.5,9.4-19.3,14.7-26.4,24.4"/>\n\t<path class="st1" d="M403.3,582.8c-10.8,10.4-20.7,21.8-29.7,33.8"/>\n\t<path class="st1" d="M412.4,608.7c0.4-0.2,0.8-0.5,1.2-0.7c-6,8.3-12.9,15.8-20.7,22.4"/>\n\t<path class="st1" d="M242.5,545.4c2.9,0.7,4,4.1,4.3,7.1c0.4,3.8,0,7.6-1.1,11.3"/>\n\t<path class="st1" d="M202.1,527.5c5.3-3.6,7.5-10.3,8.7-16.6c1.9-9.6,2.4-19.6,1.5-29.4c-0.4-4.1-1.1-8.3-3.5-11.6\n\t\tc-2.4-3.3-6.9-5.4-10.7-3.8c-3.4,1.5-5,5.3-5.7,8.9c-0.4,2.1-0.5,4.3,0.1,6.4c1.8,5.4,8.9,7.6,14.2,5.5s8.8-7.1,11-12.4\n\t\tc6.4-15.8,2.9-34.8,11.3-49.6c5.5-9.6,15.4-16.1,26.1-19c10.7-2.9,21.9-2.6,32.9-0.9c3.2,0.5,6.5,1.1,9.2,2.9\n\t\tc2.7,1.7,4.8,4.8,4.4,8.1c-0.3,2.5-1.9,4.6-3.6,6.5c-3.3,3.6-7.2,7-11.9,8.3s-10.4,0-13.1-4.1c-4-6.2,0.6-14.5,6.5-18.9\n\t\tc10.9-8.3,25.3-10,38.7-12.8c31.6-6.7,61.5-21.3,86.2-42.2"/>\n\t<path class="st1" d="M364.4,311.3c-20.1,9.7-43.4,8.9-65.6,7.9c-10.8-0.5-22.5-1.4-30.5-8.6c-3.9,8.1-4.9,17.6-2.6,26.4"/>\n\t<path class="st1" d="M247.4,308.9c-2.8,10.3-2,21.5,2.2,31.3"/>\n\t<path class="st1" d="M321.5,278.4c0.9,6.7,1.8,13.4,2.6,20.1"/>\n\t<path class="st1" d="M327.2,333.4c1,7.7,2.1,15.5,3.1,23.2"/>\n\t<path class="st1" d="M7.5,457.7c10.2-5.8,22.8-3.2,34.4-1c18.2,3.5,36.6,5.5,55.1,6.1c6.4,0.2,14-0.4,17.2-5.9\n\t\tc2.1,6.3,2.7,13.1,1.7,19.6"/>\n\t<path class="st1" d="M139.9,488.5c-2.4-8.9-3.8-18.1-4.1-27.3c-0.2-4.8,0-9.7,2.1-14s6.7-7.6,11.4-7c3.9,0.6,7,3.7,9,7.2\n\t\tc4.5,7.9,4.7,17.4,4.2,26.5c-0.4,6.5-1.4,13.6-6.1,18.1c-0.6,0.6-1.6,1.2-2.4,0.7c-0.5-0.3-0.6-1-0.7-1.5\n\t\tc-2.2-12.8-2.9-25.9-2.2-38.9c0.2-3.3,0.3-7-1.9-9.5"/>\n\t<path class="st1" d="M53.3,413.5c-0.2-0.6-0.9-0.9-1.4-0.7c-1.7,7.9-2.1,16.1-1.3,24.1c0.6,5.8,2.4,12.1,7.4,15\n\t\tc0.7,0.4,1.6,0.8,2.5,0.6c0.6-0.1,1-0.5,1.5-0.9c4-3.3,6.3-8.4,7.1-13.5s0.2-10.4-1-15.5c-0.6-2.5-1.3-5-2.9-6.9\n\t\tc-1.9-2.3-5.2-3.5-8.1-2.6c-2.9,0.9-5,4.1-4.3,7s4.4,4.9,7,3.4c2.7-1.4,2.9-6,0.2-7.4c-0.8-0.4-1.9-0.5-2.6,0\n\t\tc-0.3,0.3-0.5,0.6-0.7,1c-0.4,1-0.6,2.1-0.3,3.1s1.3,1.8,2.4,1.6c1-0.1,1.7-1.2,1.8-2.2c0-1-0.5-2-1.3-2.7c-1.1-1-3.6-0.9-3.6,0.6"\n\t\t/>\n\t<path class="st1" d="M53.3,473.8c0.2,0.1,0.2-0.4,0-0.3c-0.2,0-0.3,0.3-0.4,0.5c-2.4,12-2,24.9,3.2,35.9c0.3,0.7,0.8,1.4,1.5,1.6\n\t\tc0.5,0.1,1-0.1,1.4-0.4c2.3-1.3,3.9-3.6,5.2-5.9c4-7.3,5.6-15.8,4.4-24c-0.5-3.7-1.9-7.7-5.2-9.2c-3.1-1.5-7.3,0.1-8.7,3.2\n\t\tc-0.8,1.8-0.7,4,0.4,5.6c1.1,1.6,3.4,2.4,5.2,1.6c0.8-0.3,1.4-0.9,1.9-1.5c1.2-1.7,1.2-4.2-0.2-5.7s-4.2-1.4-5.4,0.3\n\t\ts0.2,4.5,2.3,4.5s3.2-3.3,1.5-4.4c-1.5-1-3.6,0.2-4.3,1.8c-0.7,1.7-0.3,3.5,0.1,5.3"/>\n\t<path class="st1" d="M171.7,524.6c-0.7-0.9-2-0.3-2.9,0.3c-2.7,1.8-5.6,3.7-7.2,6.6c-1.6,2.9-1.4,7,1.2,8.9"/>\n\t<path class="st1" d="M191.6,544.1c3.8,1.4,5.9,6.4,4.1,10.1"/>\n\t<path class="st1" d="M369.7,562.4c17.3-0.3,33.5-7.8,49.4-14.4c4.6-1.9,9.3-3.8,14.3-3.7c3.3,0.1,6.6,1,9.8,2\n\t\tc9.4,2.8,18.9,5.7,28.3,8.5c5.9,1.8,11.9,3.6,17.8,5.4"/>\n\t<path class="st1" d="M428.8,554.6c-2.3,2.2-4.2,4.8-5.4,7.7"/>\n\t<path class="st1" d="M439.2,555.7c-0.8,2.4-1.3,4.9-1.3,7.5"/>\n\t<path class="st1" d="M447.8,557.5c2.8,1.8,4.7,4.8,5.3,8.1"/>\n\t<path class="st1" d="M429.5,510.5c-2.6,1.8-4.6,4.3-5.8,7.3"/>\n\t<path class="st1" d="M440.7,513.6c-1.1,1.6-1.6,3.6-1.1,5.5"/>\n\t<path class="st1" d="M452.5,513.3c2.6,1.5,4.1,4.5,3.9,7.5"/>\n\t<path class="st1" d="M595.7,416.7c1.7,3.3,3.5,6.7,4.4,10.3s1,7.6-0.5,11"/>\n\t<path class="st1" d="M608.7,463c3.2-6.5,7.9-12.3,13.6-16.7"/>\n\t<path class="st1" d="M269.6,439.9c2.9,2.1,6.2,3.5,9.7,4.2"/>\n\t<path class="st1" d="M263.4,450.2c2.7,2,6.2,2.9,9.4,2.4"/>\n\t<path class="st1" d="M262.9,250.8c-3.8,1.7-7.4,3.9-10.7,6.5"/>\n\t<path class="st1" d="M227.2,270.1c-2.7,2.8-6.2,4.8-10,5.7"/>\n\t<path class="st1" d="M198.6,285.8c-3.7,2.9-7.9,5-12.5,6.1"/>\n\t<path class="st1" d="M169.2,298.4c-5.7,2.7-11.7,4.7-17.9,5.9"/>\n\t<path class="st1" d="M124.6,307.2c-6,0.5-12,0.7-18.1,0.4"/>\n\t<path class="st1" d="M86.2,304.8c-3.4-0.7-6.7-1.7-9.8-3.1"/>\n\t<path class="st1" d="M55.2,296.1c-4.4-0.4-8.8-1.5-13-3.1"/>\n\t<path class="st1" d="M30.5,281.3c-4.9,0-9.9-1.3-14.2-3.6"/>\n\t<path class="st1" d="M-1.2,269.2c-2.9-1.3-5-4.1-5.6-7.3"/>\n\t<path class="st1" d="M143.4,77c2.1-0.4,3.5,2,4.4,3.9c7.6,17,21.6,30.2,35.9,42.2c14.1,11.8,29.9,23.3,48.1,25.5\n\t\tc2.1,0.3,4.7,0.7,5.6,2.6c0.8,1.8-0.3,3.7-1.3,5.3c-5.2,7.9-11.5,15.1-18.8,21.2"/>\n\t<path class="st1" d="M225.4,202.4c4.4-13.3,12-25.4,22-35.2c3.7-3.6,8-7,13-8.5c5-1.4,11-0.5,14.4,3.4c2.8,3.1,3.5,7.7,2.8,11.8\n\t\ts-2.9,7.8-5.4,11.2c-5,7-11.5,12.9-18.9,17.3c-3.9,2.3-8.1,4.2-12.6,4.3c-0.7,0-1.4,0-1.8-0.6c-0.3-0.4-0.2-1-0.1-1.6\n\t\tc3.8-18.8,25.3-30.4,28-49.4"/>\n\t<path class="st1" d="M113,148.2c8.4-8.5,16.8-17.2,26.7-23.8c1.4-0.9,2.8-1.8,4.4-2.1c1.6-0.3,3.5,0.1,4.5,1.4\n\t\tc0.5,0.7,0.8,1.6,0.9,2.5c2.1,10.7-3.2,21.8-11.1,29.3c-6.2,5.9-14.9,10.3-23.3,8.2c-0.8-0.2-1.7-0.5-2.3-1.1\n\t\tc-0.7-0.7-1.1-1.6-1.4-2.6c-0.7-2.9-0.3-6.2,1.7-8.4s5.8-2.8,8-0.9c2.8,2.4,2,7.2-0.3,10.1c-1.3,1.6-3.9,3-5.4,1.5\n\t\tc-0.6-0.6-0.8-1.6-0.8-2.5c-0.1-2.1,0.9-4.6,2.9-4.8c2.3-0.2,3.5,3.4,1.8,5s-4.8,0.7-5.9-1.4s-0.5-4.7,1-6.5"/>\n\t<path class="st1" d="M180,93.7c9-11.2,19-21.6,29.9-31c1.2-1,2.7-2.1,4.2-1.6c0.8,0.3,1.3,0.9,1.8,1.6c3.2,4.9,1.4,11.5-1.3,16.6\n\t\tS208.3,89.1,204,93c-3.9,3.6-8.9,6.7-14.2,6c-0.7-0.1-1.3-0.2-1.8-0.6c-0.6-0.5-0.9-1.3-1.1-2.1c-0.5-2.1-0.5-4.5,0.8-6.3\n\t\tc2-2.9,7-2.8,8.9,0.2s-0.1,7.6-3.5,8.2c-1,0.2-2.1,0-2.8-0.7c-0.6-0.6-0.8-1.5-0.9-2.4c-0.2-1.8-0.1-3.9,1.4-4.8\n\t\tc1.4-0.8,3.5,0.3,3.8,1.9s-1.1,3.3-2.8,3.4s-3.2-1.2-3.6-2.8"/>\n\t<path class="st1" d="M88.3,222.9c-4.4-0.2-8.7-2.6-11.1-6.3s-2.9-8.6-1.2-12.7c0.9-2.2,2.4-4.3,4.4-5.6c2-1.4,4.4-2.1,6.9-2.4\n\t\tc1.3-0.1,2.6-0.2,3.8,0.2c2.5,0.9,3.9,3.5,4.6,6.1c1.9,6.8,0.2,14.4-4.3,19.8c-1.6,1.9-3.5,3.5-5.7,4.7c-5.4,2.7-12,1.8-17.2-1.1\n\t\tc-5.2-3-9.1-7.9-11.9-13.2c-1.6-3-2.8-7.1-0.6-9.7"/>\n\t<path class="st1" d="M76.2,202.8c-3.9-3.8-7.4-8-10.3-12.6"/>\n\t<path class="st1" d="M91.1,224.7c9.1,21.3,19.4,42.1,30.8,62.2"/>\n\t<path class="st1" d="M105.8,255.4c-5.9,0.5-12.2-2.2-17.7,0.1c-1.9,0.8-3.5,2.1-5.1,3.3c-3.8,3.1-7.6,6.1-11.4,9.2"/>\n\t<path class="st1" d="M34.4,119.7c-0.4,19.8-7,39.5-18.6,55.6c5,1.9,10.1,3.7,15.1,5.6"/>\n\t<path class="st1" d="M5.1,184.1c5.5,1.5,10.7,4.1,15.2,7.7"/>\n\t<path class="st1" d="M2.8,131.7c4-0.8,8.1-0.7,12.1,0.3"/>\n\t<path class="st1" d="M50.9,139.8c3.8,0.1,7.5,1.1,10.8,2.7"/>\n\t<path class="st1" d="M586.1-1.4c-22.8,8.4-46,16.6-70.1,19.2c-20.3,2.2-40.8,0.5-61.1-0.4c-10.3-0.4-22.5,0.3-28.2,9\n\t\tc-4.3,6.6-2.9,15.3-0.6,22.8s5.4,15.3,4.1,23"/>\n\t<path class="st1" d="M373.9,101.2c-13-14.4-17.3-35.1-16.1-54.5c0.3-4.7,0.9-9.4,2.8-13.7s5.3-8.1,9.7-9.6\n\t\tc6.2-2.1,13.3,0.9,17.6,5.7s6.6,11.3,8.1,17.7c3.7,15.4,4.4,31.5,1.9,47.1c-0.7,4.7-1.9,9.6-5.2,12.9c-0.7,0.7-1.5,1.3-2.4,1.5\n\t\tc-2.8,0.5-4.5-2.9-5.1-5.7c-5.8-23.5-9.9-47.5-12.2-71.6"/>\n\t<path class="st1" d="M627.2,23.4c-0.1-1.2-0.2-2.3-0.3-3.5"/>\n\t<path class="st1" d="M174.5,21c25.5-4,50.9-8.9,76.1-14.6c5.3-1.2,10.7-2.4,16.1-1.6c3.4,0.5,6.7,1.9,9.9,3.1\n\t\tc12.5,4.8,25.5,8.4,38.7,10.8"/>\n\t<path class="st1" d="M250.2,16.5c-3,2.1-5.3,5.1-6.6,8.6"/>\n\t<path class="st1" d="M259.9,16.5c0,2.4,0.2,4.7,0.6,7"/>\n\t<path class="st1" d="M272.2,17.3c2.2,1.4,4.3,3.1,6,5.1"/>\n\t<path class="st1" d="M189.1,91.5c0-0.3-0.1-0.5-0.1-0.8c2.1,1.1,2.4,4.3,4.5,5.4"/>\n\t<path class="st1" d="M117.5,154.8c-0.7-1.3-0.8-2.9-0.2-4.3c0.2-0.3,0.4-0.7,0.7-0.8c0.6-0.2,1.1,0.3,1.4,0.8c1,1.3,1.8,2.8,2,4.4\n\t\tc0.2,1.6-0.5,3.4-1.9,4.2c-0.3,0.2-0.6,0.3-1,0.3c-0.7,0-1.2-0.6-1.5-1.3s-0.2-1.5,0.2-2.1s1.4-0.8,2-0.4c0.6,0.4,0.7,1.5,0.1,1.9\n\t\tc-0.3,0.2-0.8-0.1-0.8-0.4"/>\n\t<path class="st1" d="M242.2,2109.2c-16.5-37-23.3-78.3-19.6-118.6c0.9-10,2.5-20,6.4-29.2c3.6-8.4,9-15.9,15.2-22.6\n\t\tc12.7-13.8,28.8-24.4,46.4-30.8c4.6-1.7,9.5-3.1,14.4-2.7s9.9,2.7,12.3,7c2.5,4.5,1.7,10.3-0.8,14.8s-6.4,8.1-10.2,11.5\n\t\tc-2.1,1.9-4.3,3.8-7,4.4c-3.9,0.9-8-1.2-10.3-4.5s-3-7.4-2.9-11.3c0.4-11.5,7.2-22,16.1-29.4c8.9-7.3,19.6-12,30.3-16.2\n\t\tc36.7-14.7,74.6-26.8,113.1-36"/>\n\t<path class="st1" d="M353.6,2065.1c-16.3,2.4-33.2,0.4-48.6-5.5c-2.3-0.9-5-2.3-5.2-4.8c-0.3-3.8,5.3-7.2,3.3-10.4\n\t\tc-0.8-1.3-2.4-1.7-3.8-2c-19.1-4.1-37.4-12.1-53.6-23.3c1.3-2.4,2.7-4.7,3.9-7.1c0.4-0.8,0.9-1.7,0.9-2.6c-0.1-2.1-2.6-3.1-4.6-3.8\n\t\tc-11.1-3.7-20-13.5-22.6-24.9"/>\n\t<path class="st1" d="M314.1,2051.1c2.5-1.2,5.1-2,7.9-2.2"/>\n\t<path class="st1" d="M262.2,2018.5c2.9,0.7,5.6,1.3,8.5,2"/>\n\t<path class="st1" d="M435.3,2002c-24.1-1.8-48.1-4.9-71.9-8.8c-23.1-3.8-46.5-8.4-67.1-19.5c-13.4-7.2-25.4-17-35.1-28.6\n\t\tc-6.8-8.2-12.5-17.4-15-27.7"/>\n\t<path class="st1" d="M350.1,1870.5c7.7,40.8,15.5,81.5,23.2,122.3c-0.1-0.6-0.3-1.2-0.4-1.9"/>\n\t<path class="st1" d="M370.5,1863.4c9.3,43.6,18.5,87.2,27.8,130.9c0.2,0.8,0.3,1.8-0.4,2.3c-0.7,0.5-1.8-0.6-1.1-1"/>\n\t<path class="st1" d="M345,1889.7c8.7-3.8,17.7-6.9,26.8-9.3c4.8-1.3,9.9-2.4,13.9-5.4"/>\n\t<path class="st1" d="M352.1,1909.3c13-5.9,26.9-9.7,41.1-11.4"/>\n\t<path class="st1" d="M355.2,1930.5c13.4-1.1,26.6-3.6,39.4-7.6"/>\n\t<path class="st1" d="M361.6,1955.2c7.1,0.8,14.3-0.9,21.2-2.6c5.9-1.5,11.9-2.9,17.8-4.4"/>\n\t<path class="st1" d="M235,1898.4c3.3,2.2,5.5,5.8,6.1,9.7"/>\n\t<path class="st1" d="M117.2,1727.5c-0.7,7.4-1.4,14.8-2.1,22.2c-0.2,2.3-0.5,4.7-1.6,6.8c-1.3,2.2-3.4,3.7-5.5,5.1\n\t\tc-4.4,3-8.9,6.1-13.3,9.1c16.2,0.9,32.2,3.4,47.9,7.3c-9.5-7.7-19-15.4-28.5-23.1"/>\n\t<path class="st1" d="M110,1773.4c-2,3.9,0.6,9.3,4.9,10.1s8.7-3.4,8.2-7.7"/>\n\t<path class="st1" d="M105,1785.1c-3.7,2.6-6.5,6.5-8,10.8"/>\n\t<path class="st1" d="M130.6,1788.2c2.4,0.7,4.3,3,4.6,5.6"/>\n\t<path class="st1" d="M120.1,1723.3c-20.7,5.1-42.2,11.7-57,27.1c-6.3,6.5-11,14.2-16.9,21.1c-11,12.9-25.6,22.4-40.8,30\n\t\tc-12.7,6.3-26.1,11.5-40.1,13.5"/>\n\t<path class="st1" d="M136.8,1704.9c4.8,1.3,8.5,5.9,8.7,10.8"/>\n\t<path class="st1" d="M143,1698.1c2.9-0.3,5.7,1.6,7.3,4.2c1.6,2.5,2.1,5.5,2.6,8.4"/>\n\t<path class="st1" d="M99.9,1673.7c-25.5,17.3-46.8,40.7-61.7,67.6c3.6,1.1,6.8,3.1,9.5,5.7"/>\n\t<path class="st1" d="M26.8,1756.4c4.9,1.6,9.8,3.2,14.7,4.9"/>\n\t<path class="st1" d="M54.3,1676.8c3.6,0.9,7,2.4,10.2,4.3"/>\n\t<path class="st1" d="M88.1,1698.1c4,1.4,7.5,4.3,9.7,8"/>\n\t<path class="st1" d="M686,2169.3c6-1.1,12.4-0.3,17.9,2.3"/>\n\t<path class="st1" d="M-38.9,1948.9c28.2-16.5,62.1-20.1,91.6-33.9c22-10.3,41.1-26.1,59.3-42.2"/>\n\t<path class="st1" d="M116.2,1916.3c-26.5,18.3-55.5,33.6-86.8,40.8c-13.2,3.1-27,4.8-39,11.1c3.7,7.4,7.3,14.8,11,22.1"/>\n\t<path class="st1" d="M55.2,1919c2.4,4,4.9,8,7.3,11.9"/>\n\t<path class="st1" d="M79.6,1953.4c1,0,1.7,0.9,2.3,1.8c4,5.8,7.9,11.7,11.9,17.5"/>\n\t<path class="st1" d="M-8.8,2092.4c11.5-0.4,22.9,0.1,34.3,1.4c-4.2-25-8.3-50.1-12.5-75.1c-7.2,7-19,8.8-27.9,4.1"/>\n\t<path class="st1" d="M9.7,2095c0,2,0.1,4,0.1,6"/>\n\t<path class="st1" d="M23.7,2093.9c0.2,2.7,0.8,5.5,1.7,8.1"/>\n\t<path class="st1" d="M37.5,2016.1c4.2,12.8,6.5,26.3,6.7,39.8c0,0.3,0,0.5,0.2,0.7s0.4,0.2,0.7,0.3c4.6,0.6,9.3,1.3,13.9,1.9\n\t\tc1.8,0.2,3.6,0.5,5.4,0.1c4-1,6.3-5.4,6.4-9.5c0-2.9-1.2-6.2-3.9-7.1c-1.6-0.6-3.5-0.2-5.2-0.7c-3.1-1-4.2-4.7-4.9-7.9\n\t\tc-1.2-5.8-2.1-11.8-4.4-17.3c-0.5-1.3-1.3-2.7-2.7-3c-0.8-0.1-1.6,0.2-2.4,0.5c-3.9,1.7-7.8,3.3-11.7,5"/>\n\t<path class="st1" d="M85.6,2008.7c4.5,23.1,6.1,46.8,4.8,70.3c-0.1,0.9-0.1,1.9,0.6,2.6c0.5,0.5,1.3,0.7,2,0.8\n\t\tc4.2,0.7,8.5,1.5,12.7,2.2c0.6-17.7,1.2-35.4,1.8-53.1c2.7,15.2,5.4,30.3,8.1,45.5c0.2,0.9,0.4,1.9,1.1,2.5s1.6,0.7,2.5,0.8\n\t\tc5.4,0.5,10.8,0.9,16.2,1.4c-1.5-26.5-7-52.8-16.2-77.8c-1.2,6.4-8,10.6-14.5,10.7s-12.6-3.2-17.8-7.2"/>\n\t<path class="st1" d="M149.5,1997.1c5.4,5.9,14.1,8.4,21.8,6.4s14.1-8.5,15.9-16.2c6,23.5,12,47.2,23.3,68.7c-4,1-8,2-12.1,3\n\t\tc-1.3-8.4-4.7-16.6-9.8-23.4c-2.5-3.3-6-6.6-10.1-5.9c-1.9,0.3-3.6,1.5-5.1,2.7c-1.5,1.3-3.1,2.7-3.8,4.6s-0.3,4.3,1.5,5.4\n\t\tc2.1,1.3,5.2-0.3,6-2.7c0.8-2.4,0-5-1.3-7.2c-1-1.7-2.7-3.4-4.7-3.3c-3.8,0.1-4.6,5.5-4.1,9.3c1.4,10.2,2.7,20.3,4.1,30.5\n\t\tc-4.4,0.3-8.7,0.5-13.1,0.8c0.8-22.6-2.1-45.3-8.5-67c-0.2-0.6-0.3-1.4,0.2-1.8s1.4,0.5,0.8,0.8"/>\n\t<path class="st1" d="M51.6,1872c-37.6,6-69.9,28.8-102,49.3"/>\n\t<path class="st1" d="M5.1,1896.9c-0.2,0.3-0.5-0.4-0.2-0.5s0.6,0.2,0.8,0.5c4.1,6.2,7.7,12.9,10.6,19.8c1.4,3.3,2.6,7.4,0.3,10.2\n\t\tc-1.7,2-4.7,2.4-7.1,1.5s-4.4-2.8-5.9-4.8c-4.4-5.8-6.6-13.3-5.9-20.6c0.2-2,0.8-4.3,2.7-5c1.7-0.7,3.6,0.4,4.6,1.9\n\t\ts1.1,3.4,1.1,5.2c0,2.2-0.9,5.1-3.1,5.2c-2.1,0.1-3.3-2.3-3.6-4.4c-0.2-1.7-0.2-3.5,0.2-5.3c0.3-1.7,1.2-3.5,2.8-3.8\n\t\tc2.2-0.5,4,2.2,4.1,4.5c0.1,1.4-0.2,2.9-1.1,4s-2.5,1.7-3.8,1.1c-1.8-0.8-2-3.6-0.5-4.8c1.6-1.2,4.1-0.3,4.8,1.6s-0.8,4-2.7,4.4\n\t\tc-0.6,0.1-1.2,0.1-1.6-0.3c-0.7-0.5-0.8-1.4-0.8-2.2c0-1.9,1.4-4.3,3.2-3.7c0.2,2.3-0.7,4.7-2.3,6.3c-0.4-0.6-0.5-1.4-0.4-2.1"/>\n\t<path class="st1" d="M-8.5,1657c4.9,0.5,10.3,0.5,14.4-2.2"/>\n\t<path class="st1" d="M79.7,1590.3c-1.7,1.2-4.1,0.8-5.7-0.4c-1.7-1.2-2.8-3-3.8-4.7c-2.6-4.5-4.8-9.4-5-14.5s2.3-10.7,7-12.9\n\t\tc5.3-2.5,12.2,0.4,15,5.6s1.9,11.8-1.3,16.7c-3.2,4.9-8.5,8.2-14,10.2c-6.9,2.4-14.4,2.9-21.5,1.4c-4.5-0.9-9.3-3.3-10.3-7.7"/>\n\t<path class="st1" d="M77.4,1589.4c16,4.2,34.2-1.1,45.5-13.2"/>\n\t<path class="st1" d="M74.8,1590.7c2.5,18.1,7.6,35.9,15.1,52.6c0.1,0.3,0.3,0.6,0.6,0.7c0.3,0,0.5-0.5,0.2-0.6"/>\n\t<path class="st1" d="M81.6,1617.4c-4.8,0.1-9.6,0.4-14.1,2s-8.6,4.7-10.4,9.1"/>\n\t<path class="st1" d="M28.5,1585.7c-1-0.3-1.7,0.9-2.1,1.9c-0.6,1.9-1.3,3.9-1.4,6s0.5,4.2,2.1,5.6"/>\n\t<path class="st1" d="M132.3,1574.3c4.8,2.5,8,7.9,7.7,13.4"/>\n\t<path class="st1" d="M152.9,1573.9c6.8-0.1,13.5,3.9,16.6,9.9"/>\n\t<path class="st1" d="M-1.9,1318.8c1.8,10.9,3.6,21.8,5.4,32.7"/>\n\t<path class="st1" d="M36.6,1442.8c-2.1-11.5-2-23.6,2.4-34.4s13.3-20.1,24.6-23.1c2.5-0.7,5.2-1,7.6,0s4.3,3.5,3.7,6\n\t\tc-0.3,1.6-1.5,2.8-2.9,3.6c-5.9,3.5-14-1.3-16.3-7.8s-0.5-13.7,1.8-20.2c2.8-7.9,6.6-16.1,13.8-20.3c6.4-3.7,14.2-3.7,21.2-6.1\n\t\tc18.8-6.6,27.1-28.8,43.4-40.2"/>\n\t<path class="st1" d="M125.6,1148.5c-7.3-16.7-12.7-34.2-16-52.1c5-1,12.3-0.3,12.4,4.8c0.1,4.6-6.2,6.1-10.8,5.9\n\t\tc-47.6-2-97.2-24.1-119.1-66.4"/>\n\t<path class="st1" d="M-1.3,711.1c8.6-5.5,17.6-10.3,27-14.2"/>\n\t<path class="st1" d="M48.6,686.7c5.1-2.3,9.9-5.2,14.3-8.6"/>\n\t<path class="st1" d="M85.9,663.5c5.3-3.4,11.2-5.8,17.4-7"/>\n\t<path class="st1" d="M123.6,651.5c6.3-1.3,12.8-1.8,19.2-1.3"/>\n\t<path class="st1" d="M163.8,652.1c5,2,9.8,4.4,14.4,7.2"/>\n\t<path class="st1" d="M200.2,665.2c6.3,4,12.6,7.9,18.9,11.9"/>\n\t<path class="st1" d="M30,625.1c0.3,0.6-0.9,0.2-1-0.4c-2.8-14.2-3.9-28.7-3.2-43.2c0.3-6.8,1.1-13.8,4-20c1.9-4.1,5.6-8.3,10.1-7.9\n\t\tc2.3,0.2,4.3,1.5,6.1,2.9c10.8,8.2,17.8,21,19,34.5c1.2,13.5-3.6,27.4-12.8,37.3c-2.4,2.6-6.1,5-9.1,3.2c-1.2-0.7-2-2.1-2.6-3.4\n\t\tc-3.7-8-3.6-17.2-3-26c1.1-16.2,3.8-32.3,6.4-48.3"/>\n\t<path class="st1" d="M141.2,986.1c-2.2-4.9-5.1-9.5-8-14c-17-26.8-34.1-53.7-56-76.6s-49-41.9-79.9-49.1"/>\n\t<path class="st1" d="M103.7,873.9c12.8-23.8,26.4-48.5,48.8-63.5c4.5-3,9.9-5.6,15.1-4.2c6.7,1.8,10,9.5,10.4,16.4\n\t\tc0.4,8.4-2,16.6-5.6,24.2c-4.7,10.1-11.4,19.2-19.6,26.8c-5,4.6-10.7,8.7-17.3,10.5c-6.6,1.7-14.2,0.8-19.3-3.7\n\t\tc-5.1-4.5-7-12.5-3.8-18.5s11.5-8.8,17.4-5.4c1.4,0.8,2.6,1.9,3.3,3.3c0.8,1.7,0.8,3.8,0.5,5.7c-0.7,4-2.6,8-6,10.3\n\t\tc-3.4,2.2-8.4,2.2-11.3-0.7c-4.2-4.4-1.2-12.3,4.2-15.1c2.7-1.4,6.3-1.8,8.5,0.4c1.9,1.9,1.9,5.1,0.5,7.5s-3.7,3.9-6,5.2\n\t\tc-2.1,1.1-4.8,2-6.7,0.6c-0.9-0.7-1.4-1.8-1.6-2.9c-0.7-2.9-0.1-6.2,1.9-8.4s5.6-3,8.2-1.4c3.1,1.8,3.8,6.2,2.4,9.4\n\t\tc-1.5,3.2-4.6,5.4-7.9,6.8c-1,0.4-2,0.8-3,0.6c-1.8-0.3-3-2-3.5-3.7c-1.2-4.1,0.8-9,4.6-11c0.7-0.4,1.5-0.7,2.3-0.7\n\t\tc1.7,0.1,3.1,1.6,3.7,3.2c1.3,3.5-0.9,8.1-4.6,8.7c-3.7,0.6-7.2-4.2-5.1-7.3c1.9-2.7,6.9-1.8,7.7,1.4c0.8,3.2-3.2,6.4-6.1,4.9\n\t\tc-1.6-2.9,0.2-7.1,3.4-7.9c3.2-0.8,6.8,1.9,6.9,5.2c0.1,4.2-6.1,6.9-9,3.9s0.3-9.2,4.4-8.3"/>\n\t<path class="st1" d="M87.8,747.1c4.8-0.3,9.7-0.6,14.3,0.6c4.6,1.2,9.1,4.1,10.9,8.6c1.7-5,6.3-8.6,11.3-10.3\n\t\tc5-1.7,10.4-1.9,15.7-2"/>\n\t<path class="st1" d="M181.7,765.1c12.3-1.5,25.1,5.8,30.2,17c3.9-7.4,11.4-12.7,19.7-13.9"/>\n\t<path class="st1" d="M115.1,608.5c10.3-2.8,22.2,2.2,27.4,11.5c5.4-8.5,16-13.5,26-12.2"/>\n\t<path class="st1" d="M81.1,2139.9c8.2,1.2,14.5,9.9,13,18"/>\n\t<path class="st1" d="M1322.8,2134.3c7.1,1.2,14.3-0.4,21.2-2.5c17.2-5.3,33.4-13.7,47.7-24.7c4.7-3.6,9.2-7.6,12.2-12.8\n\t\tc2.9-5.1,4-11.6,1.6-17.1c-2.4-5.4-9-9-14.6-7.1c-5.8,2-8.5,9.2-7.2,15.1c1.3,6,5.8,10.7,10.8,14.2c16.8,11.8,41.1,11.4,57.6-0.8\n\t\tc10.4-7.7,17.6-19.2,28.9-25.5"/>\n\t<path class="st1" d="M1391.2,1961.5c9.7,3,20.4,2,30-1.3s18.4-8.9,26.5-15"/>\n\t<path class="st1" d="M1005.2-33.2c15.5,9.3,30.6,20.8,38.3,37.1c9.6,20.4,6.9,46.4,21.8,63.3c19.3,21.9,58.6,17.3,75.8,40.9"/>\n\t<path class="st1" d="M915.3-52.5c23.8,22.4,48.8,45.6,80.1,54.9c-5,7.3-8.8,15.4-11.2,24"/>\n\t<path class="st1" d="M995.3,39c2.8-11.6,8.6-22.5,16.8-31.1c2.5-2.6,5.6-5.2,9.2-5.1c3.1,0.1,5.9,2.4,7.3,5.2s1.7,6,1.6,9.2\n\t\tc-0.5,13.2-8,25.9-19.2,32.7c-3.1,1.9-7.5,3.2-10,0.6c-1.4-1.5-1.6-3.7-1.1-5.7s1.7-3.7,2.8-5.4c7.6-11.3,15.3-22.6,22.9-33.9"/>\n\t<path class="st1" d="M920.8,12.6c1.6-9.5,12.9-14.3,16.9-23.1"/>\n\t<path class="st1" d="M1095,13.9c28.7-13.2,58.7-27.4,77.5-52.9"/>\n\t<path class="st1" d="M1129.4,22.1c-0.3-1.2-0.5-2.3-0.8-3.5c13,9.3,21.5,24.7,22.3,40.7c0,0.9,0.1,1.8-0.4,2.6\n\t\tc-0.6,0.9-1.7,1.3-2.8,1.4c-4.1,0.5-8.1-1.5-11.5-3.7c-6.2-4-11.6-9.3-15.7-15.3c-2.1-3-3.9-6.3-4.3-9.8s0.6-7.5,3.4-9.8\n\t\tc2.5-2.1,6.4-2.4,9.2-0.8s4.6,5,4.3,8.2c-0.4,3.2-3.3,6.3-6.5,5.8c-2.1-0.3-3.8-2.2-4.6-4.2c-0.8-2-0.8-4.2-0.8-6.4\n\t\tc0-1.1,0-2.3,0.7-3.2c1.3-1.8,4.4-1.1,5.6,0.8c1.2,1.8,1.1,4.3,0.8,6.5c-0.1,0.9-0.3,1.9-1,2.6c-1.3,1.3-3.7,0.3-4.5-1.4\n\t\ts-0.4-3.6,0-5.4c0.2-0.8,0.4-1.7,1.1-2.2c1.6-1.2,3.7,0.9,4.3,2.8c0.7,2.3,0.2,5.6-2.2,6.1c-0.6,0.1-1.3,0-1.9-0.4\n\t\tc-2-1.1-2.1-4.5-0.2-5.8s5,0,5.5,2.3s-1.7,4.7-4,4.5c-0.6-0.1-1.2-0.3-1.6-0.7c-0.8-0.7-0.8-1.9-0.8-3c0-1.8,0-3.6,0.6-5.3\n\t\ts2.2-3.1,4-3.1"/>\n\t<path class="st1" d="M1462.7,1055.9c-10.4,0.9-16.5-11.4-18.4-21.7c-2.5-13.7-0.9-31.1,11.8-36.8"/>\n\t<path class="st1" d="M1453.7,1077.1c-10.7-3.1-17-15.6-15.2-26.6s10.5-20.1,20.7-24.7"/>\n\t<path class="st1" d="M1477.9,1666.7c-10.9,16.4-23,32.8-40,42.9c-3.3,2-7.2,4.3-7.7,8.1c-0.4,3.1,1.7,6.1,4.3,7.8\n\t\tc2.6,1.7,5.7,2.4,8.7,3.4c8,2.5,15.4,6.9,21.5,12.6"/>\n\t<path class="st1" d="M1402.9,1748.5c0.8-2.1,3-3.5,5.2-3.8s4.5,0.2,6.7,0.9c8.4,2.5,16.4,6.4,23.5,11.6c3.3,2.4,6.5,5.3,7.7,9.2\n\t\tc1.4,4.7-0.8,10-4.7,13.1s-9.1,4-14,3.3s-9.4-2.7-13.7-5.2c-10.2-6-19.4-15.7-20.3-27.5c6.4-2.1,13.4,0.5,18.9,4.3\n\t\ts10.1,8.8,15.7,12.4c5.1,3.3,10.8,5.4,16.5,7.5"/>\n\t<path class="st1" d="M1418.1,1584.8c16.6-0.8,33.5,2.7,48.5,10c2.2,1.1,4.6,2.5,5.2,4.8c0.6,2.2-0.5,4.4-1.8,6.2\n\t\tc-5.1,7.2-13.7,11.1-22.2,13c-5.3,1.2-10.9,1.7-16-0.3c-9.1-3.6-13.5-14-14.7-23.7c-0.3-2.6-0.5-5.4,0.7-7.8s4.2-4,6.6-2.8\n\t\tc1.4,0.7,2.2,2.1,2.7,3.5c1.3,3.4,0.6,8-2.7,9.5c-3.2,1.5-7.5-1.7-6.9-5.2s5.9-4.9,8.1-2.2c1.2,1.6,1.2,4-0.2,5.4s-4.1,1.2-5.2-0.5\n\t\ts0.2-4.3,2.1-4.5c2-0.1,3.5,2.7,2.1,4.2c-1,1.1-2.8,1-4.3,0.6c-0.9-2.5,2.2-5.3,4.6-4.2c0.3,1.5-1.4,2.8-2.9,2.4\n\t\tc-1.4-0.4-2.2-2.3-1.7-3.7s2.1-2.3,3.6-2.2"/>\n\t<path class="st1" d="M1420.8,1995.1c20.5,3.9,41.9,7.7,61.8,1.7"/>\n\t<path class="st1" d="M1441.2,2022.1c-1,6.2-2.6,12.4-4.9,18.3"/>\n\t<path class="st1" d="M1377.2,2070.2c-0.1-0.8-0.5-1.6-1.1-2.2c-5.9,6-8.7,14.8-7.6,23.1"/>\n\t<path class="st1" d="M1348.8,2074.6c-3.3,1.7-5.5,5.2-6.4,8.8s-0.8,7.4-0.7,11.2"/>\n\t<path class="st1" d="M1497.3,2130.9c-31,15.3-66.1,22.3-100.6,20c-1.6-0.1-3.3-0.2-4.9,0.3c-3.8,1.3-5.2,6.1-4.7,10.1\n\t\ts2.3,7.7,2.7,11.7"/>\n\t<path class="st1" d="M1358,2157.1c2.9,9,4.7,18.4,5.3,27.8"/>\n\t<path class="st1" d="M1424.5,1324.9c36.6-2.3,73-8.2,108.4-17.7"/>\n\t<path class="st1" d="M9.9,1496.8c5.2-3.1,11.6-4.1,17.4-2.7c1.3,0.3,2.7,0.7,3.7,1.6c2.4,2.2,2,5.9,1.4,9.1"/>\n\t<path class="st1" d="M28.9,1480.8c7.9-1.9,16.6-0.1,23,4.8"/>\n\t<path class="st1" d="M36.8,1351.7c-6.1-14.3-9-29.9-8.5-45.4c0.1-2.9,0.3-5.8,1.6-8.4c1.3-2.6,3.8-4.7,6.7-4.6\n\t\tc3.6,0.1,6.2,3.3,8.1,6.3c7.8,12.8,11.3,28.1,9.9,42.9c-0.4,4.4-1.3,9-3.6,12.8c-0.9,1.5-2.2,3-4,3.2c-2.8,0.3-4.6-2.8-5.4-5.5\n\t\tc-2.2-7-3-14.4-3.7-21.7c-1.2-11.9-2.3-23.8-3.5-35.7"/>\n\t<path class="st1" d="M157.5,1251.7c3.1,0,6.3,0.1,9.3,1s5.8,3,6.9,5.9"/>\n\t<path class="st1" d="M153.6,1265.1c3.2,0.5,6.4-0.6,9.6-0.7c3.2,0,7,1.8,7.1,5"/>\n\t<path class="st1" d="M164.2,1156c-13.9,21.6-17.9,49.3-10.7,73.9"/>\n\t<path class="st1" d="M155,1188.1c20.3,3,39.6,12.3,54.6,26.1c15.1,13.9,25.9,32.4,30.5,52.3"/>\n\t<path class="st1" d="M128.8,1188.3c-8.4,0.8-16.8,2.4-25,4.7c-4.7,1.3-9.4,2.9-13.5,5.5s-7.7,6.3-9.4,10.9\n\t\tc-0.6,1.5-0.9,3.2-0.4,4.7c0.8,2.5,3.4,3.8,5.9,4.6c14.5,5,31.8,0.8,42.4-10.2c2.4-2.5,4.6-5.5,5.1-9s-1.2-7.5-4.5-8.7\n\t\tc-1.4-0.5-2.8-0.5-4.3-0.3c-2.6,0.3-5.2,1.4-6.8,3.6c-1.5,2.1-1.6,5.4,0.4,7.2c1.7,1.5,4.6,1.4,6.2-0.3c1.5-1.7,1.4-4.6-0.3-6.2\n\t\tc-0.9-0.8-2.1-1.2-3.2-1.1c-2.1,0.3-3.6,2.9-2.8,4.9s3.6,2.9,5.4,1.7c1.8-1.1,2.3-4,0.9-5.6c-1.1-1.3-3.2-1.8-4.6-0.8\n\t\ts-1.6,3.4-0.3,4.5c1.3,1.1,3.8,0.3,4-1.4c0.2-1.4-1.2-2.8-2.6-2.8s-2.8,1-3.4,2.3c-0.5,1.1-0.5,2.5,0.4,3.2\n\t\tc0.9,0.8,2.5,0.4,3.3-0.5c0.9-0.9,1.2-2.1,1.5-3.3"/>\n\t<path class="st1" d="M-8.6,335.4c4.9,2,10,3.8,14.9,5.9c0.9,0.4,1.9,0.9,2.1,1.8c0.2,1-0.5,1.9-1.2,2.6c-4,4.2-8.8,7.6-12.6,11.9"\n\t\t/>\n\t<path class="st1" d="M1.4,399.8c0.2,0.6-0.8-0.1-0.7-0.6c2.9-16.5,11.1-32,23-43.7c2.5-2.4,5.2-4.7,8.4-6s7.1-1.2,9.9,0.8\n\t\tc2.6,1.8,3.9,5,4.1,8.1c0.2,3.1-0.7,6.2-1.8,9.2C40,379,32.2,388.8,23.4,397.3c-3.8,3.7-8.3,7.4-13.6,7.8c-1.2,0.1-2.5,0-3.4-0.8\n\t\tc-1.9-1.7-0.8-4.8,0.5-7c5.7-9.7,12.1-19,19.3-27.7c4.9-5.9,10.4-12.2,10.7-19.8"/>\n\t<path class="st1" d="M152.4,352.9c-4.7,1-10-1.8-11.8-6.3c-0.7-1.8-1-3.8-1-5.7c0-6.1,2.5-12.5,7.6-15.7c1.8-1.1,3.8-1.8,5.9-1.5\n\t\tc1.6,0.2,3,1,4.2,2c5.2,4.5,5.1,13.3,1,18.8s-11,8.4-17.9,9.5c-4.5,0.7-9.4,0.7-13.6-1.1c-4.2-1.9-7.6-6-7.7-10.6"/>\n\t<path class="st1" d="M150.5,351.4c1.3,0.5,2.7,1.1,4,1.5c6.2,2.1,13.3,2,19.2-0.8c6-2.7,10.8-8.2,12.1-14.7"/>\n\t<path class="st1" d="M147.7,353.3c-0.7-0.4-1.2,0.7-1.2,1.4c-0.3,14.3,1.1,28.7,3.9,42.7c0.5,0,1,0.1,1.5,0.1"/>\n\t<path class="st1" d="M147.1,372.5c-7.8-2.4-16.5-1.2-23.4,3.2c-2.7,1.7-5.2,4.1-6.1,7.2"/>\n\t<path class="st1" d="M3.7-22.9C0-3.3-1.5,16.8-0.7,36.7c-0.2-1,0-2,0.6-2.8"/>\n\t<path class="st1" d="M2.1,4.9C5.3,3,8.7,1.5,12.2,0.4c2.6-0.8,5.4-1.4,8.1-0.9c2.2,0.4,4.3,1.5,6.5,2.2s4.7,0.9,6.6-0.4"/>\n\t<path class="st0" d="M718.7,1387.5c10,4.5,18.8,11.3,28.3,16.9c9.5,5.6,20.4,9.9,31.3,8.6c2.6-0.3,5.5-0.9,7.7,0.4\n\t\tc2.3,1.3,3.2,4.1,2.9,6.7c-0.4,2.6-1.6,4.9-3.2,6.9"/>\n\t<path class="st0" d="M796.8,1444.5c-0.8-2.3-0.2-4.8,0.5-7.2c1.9-7.4,3.9-14.8,8.3-21c0.9-1.4,2-2.6,3.5-3.3\n\t\tc2.7-1.6,6.3-0.9,8.8,1.1c2.4,2,3.7,5.1,4,8.2s-0.4,6.3-1.2,9.2c-1.2,4-2.9,8-5,11.6c-1.3,2.4-3,4.8-5.4,5.9\n\t\tc-1.1,0.5-2.5,0.6-3.1-0.4c-0.3-0.4-0.3-0.9-0.3-1.4c0-2.9,0.8-5.9,1.6-8.7c1.3-4.4,2.7-8.8,4.2-13.2c1.3-3.5,2.7-7.1,2.9-10.8"/>\n\t<path class="st1" d="M740.9,1561.8c8.6-1.9,18.1-0.1,25.4,4.8c0.4,0.3,1,0.6,1.5,0.5c0.4-0.1,0.7-0.5,0.9-0.9\n\t\tc3.7-6.2,10.7-10.3,17.9-10.5"/>\n\t<path class="st1" d="M777.8,1630.5c4.9-2.1,10.5-1.2,15.5,0.7s9.5,4.7,14.4,6.7c0.6,0.2,1.2,0.4,1.8,0.3c0.7-0.2,1-0.9,1.4-1.5\n\t\tc3.5-6,10.8-9.5,17.7-8.3"/>\n\t<path class="st0" d="M860.7,1671.1c5.3-0.4,10.6,3.3,12.1,8.4c0.6-2.3,2.5-4.1,4.6-5.1s4.5-1.3,6.9-1.7"/>\n\t<path class="st0" d="M761.8,1768.7c2.4-3.2,7.4-3.7,10.4-1.1"/>\n\t<path class="st0" d="M770,1748.6c2.2,0.6,4.2,1.7,5.9,3.1"/>\n\t<path class="st0" d="M696.7,1648.4c-0.2,3.9-0.5,7.8-0.7,11.6"/>\n\t<path class="st0" d="M717,1649.7c-0.6,4.3-1.1,8.6-1.2,12.9"/>\n\t<path class="st0" d="M739.5,1637.7c-0.3,3.2-0.6,6.4-0.9,9.6"/>\n\t<path class="st0" d="M744.4,1665.1c0.2,3.7,0.4,7.4,0.6,11.1"/>\n\t<path class="st0" d="M780.4,1661.6c0,4.3-0.1,8.7-0.1,13"/>\n\t<path class="st1" d="M91.1,1487.7c3.9-1,8.2-0.8,12,0.5"/>\n\t<path class="st1" d="M118.5,1489.6c3.7,2,7.4,4.1,11.1,6.1"/>\n\t<path class="st1" d="M145.7,1508.6c2.1,2.9,4,5.9,5.8,9"/>\n\t<path class="st1" d="M165.2,1541c2.2,2.7,3.8,5.8,4.9,9.2"/>\n\t<path class="st0" d="M155.7,1477.2c2.3,2.4,5.4,4,8.6,4.8"/>\n\t<path class="st0" d="M185.5,1465.4c3.1,2.4,6.2,4.8,9.2,7.1"/>\n\t<path class="st0" d="M198.1,1449.4c3.2,2.9,6.5,5.8,10,8.3"/>\n\t<path class="st0" d="M200.8,1424c2.5,2.1,4.9,4.1,7.4,6.2"/>\n\t<path class="st1" d="M3.4,979.3c7.2-19.4,18.4-37.3,32.7-52.2c5.6-5.8,12.6-11.5,20.6-10.9c3.3,0.3,6.6,1.7,8.5,4.4\n\t\tc2.8,4,2.4,9.4,1.2,14.3c-3.7,15.4-11.8,29.8-23,41c-4.3,4.3-9.4,8.2-15.2,9.9c-5.9,1.7-12.7,0.7-17-3.6c-5.1-5.2-4.8-15,0.8-19.8\n\t\tc4-3.4,10.2-4.1,14.5-1c4.2,3,5.3,9.8,1.9,13.7c-3.2,3.6-9.1,3.8-13.5,1.5c-1.4-0.7-2.6-1.6-3.4-3.1c-1.9-3.2-0.2-8.1,3.5-9\n\t\tc3.5-1.1,7.8,2.1,7.7,5.9c-0.1,3.8-4.4,6.8-7.9,5.5c-2.7-1-4.5-4.1-3.8-6.9c0.6-2.8,3.6-4.8,6.5-4.5c0.5,0,1.1,0.3,1.5,0.6\n\t\tc1.1,0.8,0.9,2.8-0.1,3.8c-1,1-2.4,1.6-3.9,2"/>\n\t<path class="st1" d="M24,963.7c2.5,0,4.9,1.9,5.5,4.2c0.8,2.4,0,5.2-2,6.7"/>\n\t<path class="st1" d="M184.7,973.3c0.4,5.6-1.1,11.4-4.2,16.1"/>\n\t<path class="st1" d="M193.4,981.6c-0.5,4.1-1.3,8.2-2.4,12.2"/>\n\t<path class="st1" d="M118,704.8c-0.3-5.6,1.2-11.4,4.4-16.1"/>\n\t<path class="st1" d="M109.4,696.4c0.5-4.1,1.4-8.2,2.5-12.2"/>\n\t<path class="st0" d="M534.3,2097.6c8.6-1.3,16.4-7.4,19.7-15.5c1.6-3.9,2-8.3,1.9-12.5c-0.3-4.2-1.3-8.3-3.3-11.9\n\t\tc-4.5-8-14.4-12.4-23.3-10.5"/>\n\t<path class="st0" d="M547,2036.6c2.5-2.7,5-5.5,7.5-8.1"/>\n\t<path class="st0" d="M569.1,2050.4c3.4-1.3,6.7-2.4,10.2-3.6"/>\n\t<path class="st0" d="M571.4,2071.1c3.3,0,6.6,0,9.9,0.2"/>\n\t<path class="st0" d="M563,2088.9c3.9,0.9,8,1.6,11.9,1.9"/>\n\t<path class="st0" d="M551.7,2103.7c3.4,1.3,6.4,3.8,8.3,7.1"/>\n\t<path class="st1" d="M72,1052c-4.5-1.7-7.5-6.9-6.6-11.6c0.4-1.9,1.2-3.7,2.2-5.4c3.3-5.2,8.8-9.2,14.8-9.2c2.1,0,4.2,0.5,5.8,1.9\n\t\tc1.2,1,2,2.4,2.5,3.9c2,6.6-2.8,14-9.2,16.4c-6.4,2.5-13.8,1.2-20.2-1.5c-4.2-1.8-8.3-4.4-10.9-8.2c-2.5-3.8-3.2-9.1-0.9-13.1"/>\n\t<path class="st1" d="M71.2,1049.7c0.8,1.1,1.7,2.4,2.6,3.4c4.1,5.1,10.2,8.8,16.7,9.6c6.5,0.9,13.5-1.2,18.1-6"/>\n\t<path class="st1" d="M67.8,1049.8c-0.4-0.7-1.4,0-1.8,0.5c-7.9,11.9-14.4,24.9-19.5,38.2c0.4,0.3,0.8,0.6,1.2,0.9"/>\n\t<path class="st1" d="M57,1065.7c-5.3-6.2-13.3-9.8-21.5-9.8c-3.2,0-6.6,0.7-9,2.8"/>\n\t<path class="st0" d="M1337.6,430.1c5.5,8.2,10.8,16.7,15.6,25.3c0.6,1,1.1,2,1.2,3.2c0.1,1.2-0.3,2.4-0.8,3.4c-3,7.1-6.8,14-9,21.5\n\t\tc-2.2,7.5-3.3,15.6-0.5,22.8c17.4-9.9,34.3-20.9,50.5-32.6c2.4-1.7,4.9-4.8,3.2-7c-0.6-0.9-1.7-1.3-2.6-1.6\n\t\tc-12.3-4.8-25.3-7.5-38.3-8.1"/>\n\t<path class="st0" d="M1373.1,494.1c-1.7,4.6,1.7,10.3,6.7,11c4.8,0.8,9.7-3.7,9.5-8.6c-0.2-5-5.6-8.8-10.3-7.6"/>\n</g>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Index/bg.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Index/main.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 484.6 228.6" style="enable-background:new 0 0 484.6 228.6;" xml:space="preserve">\n\t<path d="M65.7,71.2v13c0,20.5-14.2,31.1-32.3,31.1H32c-18.1,0-32-10.5-32-29.7V74.8h31.1v13.4c0,2,0.5,2.9,1.4,2.9h0.3c0.9,0,1.4-0.9,1.4-2.9V76.5c0-3.6-0.9-4.5-4.5-5.6l-10.5-3.1c-13.6-4.2-19-14.4-19-27.2V29.2C0.2,10.5,13.7,0,32,0h1.4C51.4,0,65,10.5,65,29.2V38H34.1V27c0-2-0.5-2.9-1.4-2.9h-0.3c-0.9,0-1.4,0.9-1.4,2.9v8.2c0,3.7,0.9,4.6,4.6,5.7L46.2,44C60.6,48.2,65.7,59.5,65.7,71.2z"/>\n\t<path d="M99,66.9v47H67.9V1.4H99v40.5h3.1V1.4h31.1v112.5h-31.1v-47H99z"/>\n\t<path d="M147.8,1.4h43.9l13.7,112.5h-32.4l-0.6-10.8h-6.5l-0.5,10.8h-30.6L147.8,1.4z M166.9,78.2h3.9l-2.2-39.5L166.9,78.2z"/>\n\t<path d="M236.1,113.9h-29V1.4h31.4l6.8,43.1V1.4h29v112.5h-30.7l-7.4-44.6V113.9z"/>\n\t<path d="M320.2,113.9h-31.1V26.4h-12.7v-25h56.4v25h-12.7V113.9z"/>\n\t<path d="M335.2,1.4h51.4v23.8h-20.4v17.3h18.9v23.8h-18.9v23.8h20.4v23.8h-51.4V1.4z"/>\n\t<path d="M420,1.4v87.4h15.6v25H389V1.4H420z"/>\n\t<path d="M468.9,1.4v87.4h15.6v25h-46.7V1.4H468.9z"/>\n\t<path d="M27.2,228.6H0V116.1h40.3l2.8,38.9l3.1-38.9h39.9v112.5H58.7v-53.5l-4.6,53.5H31.7l-4.5-53.5V228.6z"/>\n\t<path d="M100.7,116.1h43.9l13.8,112.5h-32.4l-0.6-10.8h-6.5l-0.5,10.8H87.7L100.7,116.1z M119.8,192.9h3.9l-2.2-39.6L119.8,192.9z"/>\n\t<path d="M160,228.6V116.1h38c18.1,0,27.3,10.2,27.3,26.3v6.6c0,11.6-2.6,18.5-11.4,21.5c8.7,2.5,11.3,9.1,11.3,20.1v38h-31.1v-41.2c0-1.9-0.5-2.8-1.4-2.8H191v44H160z M194.1,158.9v-17.5c0-2-0.5-2.9-1.5-2.9H191v23.8h1.7C193.6,162.3,194.1,161.2,194.1,158.9z"/>\n\t<path d="M271.2,228.6h-31.1v-87.4h-12.7v-25h56.4v25h-12.7V228.6z"/>\n\t<path d="M317.2,116.1v112.5h-31.1V116.1H317.2z"/>\n\t<path d="M348.5,228.6h-29V116.1h31.4l6.8,43.1v-43.1h29v112.5h-30.7l-7.4-44.6V228.6z"/>\n\t<circle cx="406.1" cy="215.7" r="12.9"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Index/main.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Index/news.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 279 200" style="enable-background:new 0 0 279 200;" xml:space="preserve">\n\t<path d="M23.3,70.9c5.9-16,13.7-31.3,23.2-45.4c3,3.9,3.6,9.1,4.2,14.1c1.7,14.1,4.7,27.9,9.1,41.4c0.5,1.6,1.2,3.3,2.7,3.9c9.1-13.5,9.7-31.4,18.9-44.8"/>\n\t<path d="M103.5,54.5c10.8,4.5,21.6,9,32.4,13.5c-1.3,0-2.6,0-3.9,0"/>\n\t<path d="M104.8,58.4C99.2,68.1,93.6,77.8,88,87.5c-1.8,3.1-3.6,6.2-4.2,9.7c-0.4,2.1-0.2,4.4,0.8,6.2c1.3,2.2,3.7,3.5,6,4.6c3.8,1.7,7.7,3,11.8,3.9c2.4,0.5,5.4,0.7,6.7-1.4"/>\n\t<path d="M91.4,79.8c7.9,4,16.2,7.3,24.7,9.9"/>\n\t<path d="M149.9,80.4c-4,15.9-4.4,32.8-1.1,48.9c0.5,2.5,1.6,5.4,4.1,5.8c6.5-10.9,13.6-21.4,21.3-31.6c3.1,2.5,3.2,7.1,3.1,11.1c-0.3,10.3-0.3,21.1,4.3,30.4c10.3-11.6,20.5-23.3,30.8-34.9"/>\n\t<path d="M255.1,134c-3.7-2.3-7.1-5.1-10.8-7.5c-3.7-2.3-7.9-4.2-12.3-4.1s-8.9,2.7-10.2,6.8c-1.7,5.2,1.7,10.5,5,14.8c6.3,8.2,13.2,16.4,16.3,26.3c0.4,1.3,0.7,2.7,0.3,3.9c-0.9,2.8-4.7,3.3-7.7,3.1c-10.2-0.7-20.3-3.2-29.6-7.5"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Index/news.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Index/work.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 291.9 166.2" style="enable-background:new 0 0 291.9 166.2;" xml:space="preserve">\n\t<path d="M18.3,99.9c9.4,12.7,18.7,25.5,28.1,38.2c2.6,3.5,5.3,7.2,9.1,9.3c-0.6-11.1-1.2-22.1-1.8-33.2c-0.1-1.6-0.1-3.6,1.2-4.6c2-1.5,4.7,0.4,6.5,2.1c7.7,7.3,17,13.1,27,16.7c-2.2-16.7-5.4-33.3-9.5-49.7"/>\n\t<path d="M120.1,67c-3.5,8.2-10.1,15.4-11,24.3c-0.8,7.4,3,15.1,9.2,19.2c6.2,4.2,14.5,4.9,21.4,2.1c2.9-1.2,5.7-3,7.1-5.8c1.3-2.5,1.4-5.4,1.2-8.2c-0.4-7.9-2.7-16-7.9-21.9c-5.3-5.9-13.9-9.2-21.4-6.6"/>\n\t<path d="M174,103.9c-2.2-11.5-4.3-22.9-6.5-34.4c-1-5.4-2-11.5,0.9-16.2c1.5-2.4,3.8-4.3,6.3-5.6c2.9-1.5,6.4-2.4,9.5-1.5c3.1,0.9,5.6,3.7,6.6,6.7c1.1,3.1,1,6.5,0.3,9.7c-2,8.7-8.7,16.2-17.1,19c12.8,1.1,25.7,2.3,38.1,5.5"/>\n\t<path d="M214.9,30.2c8.1,17.1,15.1,34.7,20.9,52.7"/>\n\t<path d="M250.1,18.8c-6.9,11.4-13.8,22.8-20.7,34.2c-0.4,0.6-0.8,1.3-0.6,2c0.3,0.9,1.3,1.2,2.2,1.4c14,2.8,28.2,4.2,42.5,4.3"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Index/work.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Index/info.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 264 166.2" style="enable-background:new 0 0 264 166.2;" xml:space="preserve">\n\t<path d="M19.3,85.2c3.9,14.9,8,29.7,12.4,44.4c1.4,4.7,3,9.8,7,12.7"/>\n\t<path d="M67.6,128.8c-5.3-11.6-9.5-23.8-12.4-36.3c-0.6-2.5-0.8-5.8,1.4-7c1.1-0.6,2.5-0.5,3.7-0.2c7.4,1.5,13.3,6.8,19.4,11.3c9.6,7,20.6,12.3,32.2,15.1c-5.7-14.3-9.5-29.4-11.3-44.7"/>\n\t<path d="M128.5,59.8c-0.4-2.1,1-4.2,2.9-5.3s4-1.4,6.1-1.8c11.3-2,22.3-5.8,32.4-11.3"/>\n\t<path d="M131.4,60.7c-0.2-0.9,0.1-1.8,0.8-2.4c4.1,15.8,9.3,31.4,15.4,46.6"/>\n\t<path d="M135.8,87.1c13.1-2.1,25.9-6.2,37.7-12.2"/>\n\t<path d="M206.5,24.7c-2.4,0.1-4.5,1.8-5.7,3.9c-1.2,2.1-1.6,4.5-2,6.9c-1.2,7.2-2.4,14.5-1.3,21.7c1.1,7.2,4.7,14.3,11.1,17.9c6.5,3.7,14.7,3,21.7,0.4c5.5-2,11-5.5,12.8-11c1.2-3.9,0.4-8.1-0.6-12c-2-7.8-4.9-15.7-10.6-21.5s-14.6-9-22.1-6"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Index/info.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Index/shop.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 282 110" style="enable-background:new 0 0 282 110;" xml:space="preserve">\n\t<path d="M62.1,24.8c-6-4.7-14.3-6.4-21.7-4.4S26.8,28,23.9,35.1c-0.6,1.4-1,3-0.6,4.5c0.5,2.3,2.7,3.8,4.8,4.9c13.2,7.2,29.2,10.4,39.2,21.6c1.9,2.2,3.7,5,3.1,7.9c-0.6,3.1-3.6,5.1-6.5,6.5c-7.6,3.8-15.9,6.4-24.3,7.6C32,89.2,23.6,89,17.7,84.2"/>\n\t<path d="M98.5,25.5c1.2,21,0.8,42.1-1.1,63.1"/>\n\t<path d="M95.4,62.2c12.5,0.9,25.1,0.1,37.5-2.3"/>\n\t<path d="M138,20.3c1.1,3.8,1,7.9,0.9,11.9c-0.3,17,0.2,34.1,1.3,51.1c0.1,1.7,1.1,4,2.7,3.4"/>\n\t<path d="M196.7,21.7c-6-1.9-12.8-0.2-17.8,3.6s-8.4,9.4-10.6,15.3c-3,8.2-3.7,17.4-0.9,25.7s9.2,15.5,17.6,18.2c8.3,2.7,18.3,0.3,23.8-6.5c7-8.6,5.5-21.2,1.8-31.6c-3-8.4-8.3-17.3-17.1-19"/>\n\t<path d="M238.9,83.2c-2.1-16.7-4.3-33.6-2.9-50.4c0.4-4.4,1.2-9.3,4.8-11.9c4.7-3.5,11.6-1.2,16,2.6c3.4,3,6.3,7.5,5,11.9c-0.7,2.1-2.2,3.8-3.9,5.4c-6.1,5.6-13.7,9.5-21.8,11"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Index/shop.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Index/play.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<?xml version="1.0" encoding="utf-8"?>\n<!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 114 78" style="enable-background:new 0 0 114 78;" xml:space="preserve">\n<path d="M17.9,68.8c-4.1-10.4-6.7-21.5-7.6-32.7c-0.1-0.7-0.1-1.4,0.3-2c0.4-0.7,1.3-0.9,2-1.1c5.2-0.8,10.6,3.5,11.2,8.8\n\tc0.6,5.3-3.4,10.5-8.6,11.7"/>\n<path d="M34.6,28.9c0.1,7.7,0.9,15.4,2.3,23c0.4,2.4,1.1,5.1,3.2,6.5c2.1,1.4,4.9,0.9,7.4,0.3c2-0.4,3.9-0.9,5.9-1.3"/>\n<path d="M65.2,56.2c-0.1-5-0.3-10.1-0.4-15.1c-0.2-7-0.4-14,0.5-21c0-0.4,0.1-0.8,0.4-1c0.7-0.5,1.6,0.3,2,1.1\n\tc6.2,11,12.4,22,18.6,32.9"/>\n<path d="M65.4,45.5c3.4-1.2,6.8-2.2,10.2-3.1"/>\n<path d="M80.4,15.4c-0.1,0.2-0.4-0.2-0.2-0.3c0.2-0.1,0.5,0.1,0.6,0.2c5.7,5.5,12.2,10.2,19.3,13.8c0.7-6.9,1.6-13.7,2.9-20.5"/>\n<path d="M99.9,30.3c1.8,5.2,3.3,10.6,4.6,16"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Index/play.svg"], o)
  }, function(t, e, n) {
    var s,
        a,
        o; /*! rangeslider.js - v2.3.2 | (c) 2018 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
    !function(r) {
        "use strict";
        a = [n(4)],
        s = r,
        o = "function" == typeof s ? s.apply(e, a) : s,
        !(void 0 !== o && (t.exports = o))
    }(function(t) {
        "use strict";
        function e() {
            var t = document.createElement("input");
            return t.setAttribute("type", "range"), "text" !== t.type
        }
        function n(t, e) {
            var n = Array.prototype.slice.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }
        function s(t, e) {
            return e = e || 100, function() {
                if (!t.debouncing) {
                    var n = Array.prototype.slice.apply(arguments);
                    t.lastReturnVal = t.apply(window, n),
                    t.debouncing = !0
                }
                return clearTimeout(t.debounceTimeout), t.debounceTimeout = setTimeout(function() {
                    t.debouncing = !1
                }, e), t.lastReturnVal
            }
        }
        function a(t) {
            return t && (0 === t.offsetWidth || 0 === t.offsetHeight || !1 === t.open)
        }
        function o(t) {
            for (var e = [], n = t.parentNode; a(n);)
                e.push(n),
                n = n.parentNode;
            return e
        }
        function r(t, e) {
            function n(t) {
                void 0 !== t.open && (t.open = !t.open)
            }
            var s = o(t),
                a = s.length,
                r = [],
                c = t[e];
            if (a) {
                for (var i = 0; i < a; i++)
                    r[i] = s[i].style.cssText,
                    s[i].style.setProperty ? s[i].style.setProperty("display", "block", "important") : s[i].style.cssText += ";display: block !important",
                    s[i].style.height = "0",
                    s[i].style.overflow = "hidden",
                    s[i].style.visibility = "hidden",
                    n(s[i]);
                c = t[e];
                for (var l = 0; l < a; l++)
                    s[l].style.cssText = r[l],
                    n(s[l])
            }
            return c
        }
        function c(t, e) {
            var n = parseFloat(t);
            return Number.isNaN(n) ? e : n
        }
        function i(t) {
            return t.charAt(0).toUpperCase() + t.substr(1)
        }
        function l(e, a) {
            if (this.$window = t(window), this.$document = t(document), this.$element = t(e), this.options = t.extend({}, h, a), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = f.orientation[this.orientation].dimension, this.DIRECTION = f.orientation[this.orientation].direction, this.DIRECTION_STYLE = f.orientation[this.orientation].directionStyle, this.COORDINATE = f.orientation[this.orientation].coordinate, this.polyfill && d)
                return !1;
            this.identifier = "js-" + p + "-" + u++,
            this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier,
            this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier,
            this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier,
            this.toFixed = (this.step + "").replace(".", "").length - 1,
            this.$fill = t('<div class="' + this.options.fillClass + '" />'),
            this.$handle = t('<div class="' + this.options.handleClass + '" />'),
            this.$range = t('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle),
            this.$element.css({
                position: "absolute",
                width: "1px",
                height: "1px",
                overflow: "hidden",
                opacity: "0"
            }),
            this.handleDown = t.proxy(this.handleDown, this),
            this.handleMove = t.proxy(this.handleMove, this),
            this.handleEnd = t.proxy(this.handleEnd, this),
            this.init();
            var o = this;
            this.$window.on("resize." + this.identifier, s(function() {
                n(function() {
                    o.update(!1, !1)
                }, 300)
            }, 20)),
            this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown),
            this.$element.on("change." + this.identifier, function(t, e) {
                if (!e || e.origin !== o.identifier) {
                    var n = t.target.value,
                        s = o.getPositionFromValue(n);
                    o.setPosition(s)
                }
            })
        }
        Number.isNaN = Number.isNaN || function(t) {
            return "number" == typeof t && t !== t
        };
        var p = "rangeslider",
            u = 0,
            d = e(),
            h = {
                polyfill: !0,
                orientation: "horizontal",
                rangeClass: "rangeslider",
                disabledClass: "rangeslider--disabled",
                activeClass: "rangeslider--active",
                horizontalClass: "rangeslider--horizontal",
                verticalClass: "rangeslider--vertical",
                fillClass: "rangeslider__fill",
                handleClass: "rangeslider__handle",
                startEvent: ["mousedown", "touchstart", "pointerdown"],
                moveEvent: ["mousemove", "touchmove", "pointermove"],
                endEvent: ["mouseup", "touchend", "pointerup"]
            },
            f = {
                orientation: {
                    horizontal: {
                        dimension: "width",
                        direction: "left",
                        directionStyle: "left",
                        coordinate: "x"
                    },
                    vertical: {
                        dimension: "height",
                        direction: "top",
                        directionStyle: "bottom",
                        coordinate: "y"
                    }
                }
            };
        return l.prototype.init = function() {
            this.update(!0, !1),
            this.onInit && "function" == typeof this.onInit && this.onInit()
        }, l.prototype.update = function(t, e) {
            t = t || !1,
            t && (this.min = c(this.$element[0].getAttribute("min"), 0), this.max = c(this.$element[0].getAttribute("max"), 100), this.value = c(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2)), this.step = c(this.$element[0].getAttribute("step"), 1)),
            this.handleDimension = r(this.$handle[0], "offset" + i(this.DIMENSION)),
            this.rangeDimension = r(this.$range[0], "offset" + i(this.DIMENSION)),
            this.maxHandlePos = this.rangeDimension - this.handleDimension,
            this.grabPos = this.handleDimension / 2,
            this.position = this.getPositionFromValue(this.value),
            this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass),
            this.setPosition(this.position, e)
        }, l.prototype.handleDown = function(t) {
            if (t.preventDefault(), !(t.button && 0 !== t.button || (this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), this.$range.addClass(this.options.activeClass), (" " + t.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1))) {
                var e = this.getRelativePosition(t),
                    n = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                    s = this.getPositionFromNode(this.$handle[0]) - n,
                    a = "vertical" === this.orientation ? this.maxHandlePos - (e - this.grabPos) : e - this.grabPos;
                this.setPosition(a),
                e >= s && e < s + this.handleDimension && (this.grabPos = e - s)
            }
        }, l.prototype.handleMove = function(t) {
            t.preventDefault();
            var e = this.getRelativePosition(t),
                n = "vertical" === this.orientation ? this.maxHandlePos - (e - this.grabPos) : e - this.grabPos;
            this.setPosition(n)
        }, l.prototype.handleEnd = function(t) {
            t.preventDefault(),
            this.$document.off(this.moveEvent, this.handleMove),
            this.$document.off(this.endEvent, this.handleEnd),
            this.$range.removeClass(this.options.activeClass),
            this.$element.trigger("change", {
                origin: this.identifier
            }),
            this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
        }, l.prototype.cap = function(t, e, n) {
            return t < e ? e : t > n ? n : t
        }, l.prototype.setPosition = function(t, e) {
            var n,
                s;
            void 0 === e && (e = !0),
            n = this.getValueFromPosition(this.cap(t, 0, this.maxHandlePos)),
            s = this.getPositionFromValue(n),
            this.$fill[0].style[this.DIMENSION] = s + this.grabPos + "px",
            this.$handle[0].style[this.DIRECTION_STYLE] = s + "px",
            this.setValue(n),
            this.position = s,
            this.value = n,
            e && this.onSlide && "function" == typeof this.onSlide && this.onSlide(s, n)
        }, l.prototype.getPositionFromNode = function(t) {
            for (var e = 0; null !== t;)
                e += t.offsetLeft,
                t = t.offsetParent;
            return e
        }, l.prototype.getRelativePosition = function(t) {
            var e = i(this.COORDINATE),
                n = this.$range[0].getBoundingClientRect()[this.DIRECTION],
                s = 0;
            return void 0 !== t.originalEvent["client" + e] ? s = t.originalEvent["client" + e] : t.originalEvent.touches && t.originalEvent.touches[0] && void 0 !== t.originalEvent.touches[0]["client" + e] ? s = t.originalEvent.touches[0]["client" + e] : t.currentPoint && void 0 !== t.currentPoint[this.COORDINATE] && (s = t.currentPoint[this.COORDINATE]), s - n
        }, l.prototype.getPositionFromValue = function(t) {
            var e;
            return e = (t - this.min) / (this.max - this.min), Number.isNaN(e) ? 0 : e * this.maxHandlePos
        }, l.prototype.getValueFromPosition = function(t) {
            var e,
                n;
            return e = t / (this.maxHandlePos || 1), n = this.step * Math.round(e * (this.max - this.min) / this.step) + this.min, Number(n.toFixed(this.toFixed))
        }, l.prototype.setValue = function(t) {
            t === this.value && "" !== this.$element[0].value || this.$element.val(t).trigger("input", {
                origin: this.identifier
            })
        }, l.prototype.destroy = function() {
            this.$document.off("." + this.identifier),
            this.$window.off("." + this.identifier),
            this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + p),
            this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
        }, t.fn[p] = function(e) {
            var n = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var s = t(this),
                    a = s.data("plugin_" + p);
                a || s.data("plugin_" + p, a = new l(this, e)),
                "string" == typeof e && a[e].apply(a, n)
            })
        }, "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
    })
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/Base.jinja"] = n(32),
    o["front/components/IndexIntro/IndexIntro.jinja"] = n(39);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Index/Index.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/Base.jinja", !0, "assets/app/front/pages/Index/Index.jinja", !1, function(o, r) {
                        if (o)
                            return void a(o);
                        i = r;
                        for (var l in i.blocks)
                            e.addBlock(l, i.blocks[l]);
                        c += "\n\n",
                        (i ? function(t, e, n, s, a) {
                            a("")
                        } : e.getBlock("content"))(t, e, n, s, function(o, r) {
                            return o ? void a(o) : (c += r, c += "\n", void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function e(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += '\n    <div class="IndexPage">\n        ',
                    t.getTemplate("front/components/IndexIntro/IndexIntro.jinja", !1, "assets/app/front/pages/Index/Index.jinja", null, function(t, s) {
                        return t ? void a(t) : void s.render(e.getVariables(), n, function(t, e) {
                            return t ? void a(t) : (c += e, c += "\n    </div>\n", void a(null, c))
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                b_content: e,
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Index/Index.jinja"], o)
  }, 17, function(t, e, n) {
    (function(e) {
        var s = (n(5), n(6)),
            a = n(25),
            o = n(22),
            r = n(52);
        n(56),
        n(57),
        n(59);
        var c = n(61);
        t.exports = a.extend({
            title: "Info",
            template: r,
            el: ".InfoSection",
            SHANTELLE_PARAMS: {
                state: "info",
                left: .34375,
                top: -3100 / 1440,
                width: 2114 / 1440,
                height: 4530 / 1440,
                angle: -9
            },
            events: {},
            initialize: function(t) {
                s.bindAll(this, "handleParalax"),
                a.prototype.initialize.call(this, t),
                this.options.server || (this.apiUrl = "/api/info/")
            },
            render: function() {
                return a.prototype.render.call(this), this.options.inAnimated && this.$el.css({
                    opacity: 0
                }), this
            },
            viewsRegistration: function() {
                this.registerView("publicWorks", new c({
                    projects: this.options.server ? window.app.data.infoProjects : this.data.info.projects
                }))
            },
            activate: function() {
                return console.log("activate InfoSection"), e(window).on("scroll", this.handleParalax), app.views.topNav.changeColor("black"), this.$(".InfoSectionCredits a").attr("target", "_blank"), a.prototype.activate.call(this)
            },
            deactivate: function(t) {
                return console.log("deactivate InfoSection"), e(window).off("scroll", this.handleParalax), a.prototype.deactivate.call(this, t)
            },
            playIn: function(t) {
                this.handleParalax();
                var e = this;
                return this.options.inAnimated ? new Promise(function(n) {
                    e.$el.css({
                        opacity: 1
                    }),
                    app.els.$shantelle.animate({
                        opacity: 1
                    }, t.duration),
                    o.animateRolling({
                        tp: "in",
                        direction: "toright",
                        $item: e.$("h1").eq(0).find(".animate"),
                        duration: 300
                    }),
                    e.$(".InfoBtn").removeClass("visible").outerHeight(),
                    e.$(".InfoBtn").addClass("visible"),
                    e.$(".InfoSectionSep").removeClass("visible").outerHeight(),
                    e.$(".InfoSectionSep").addClass("visible"),
                    e.$(".InfoSectionText").removeClass("visible").outerHeight(),
                    e.$(".InfoSectionText").addClass("visible"),
                    e.playInResolve = n,
                    e.playInTimeout = setTimeout(function() {
                        delete e.playInTimeout,
                        n()
                    }, 400)
                }) : o.createEmptyPromise()
            },
            playOut: function(t) {
                this.playInTimeout && (clearTimeout(this.playInTimeout), this.playInResolve && this.playInResolve(), delete this.playInTimeout, delete this.playInResolve);
                var e = this;
                return new Promise(function(n) {
                    app.els.$shantelle.animate({
                        opacity: 0
                    }, t.duration),
                    e.$el.animate({
                        opacity: 0
                    }, t.duration, function() {
                        app.els.$shantelle.stop(!0, !0),
                        n()
                    })
                })
            },
            handleParalax: function() {
                if (app.settings.isDesktop) {
                    var t = e(window).scrollTop();
                    app.els.$shantelle.css("transform", "translateY(" + -t / 1.1 + "px) rotate(-9deg)")
                }
            },
            destroy: function() {
                return console.log("destroy InfoSection"), a.prototype.destroy.call(this)
            }
        })
    }).call(e, n(4))
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/pages/Section/Section.jinja"] = n(29),
    o["front/utils/macros.jinja"] = n(40),
    o["front/components/Info/InfoOriginalArt.jinja"] = n(53),
    o["front/components/Info/InfoMedia.jinja"] = n(54),
    o["front/components/Info/InfoPublicWorks.jinja"] = n(55);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Info/InfoSection.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/pages/Section/Section.jinja", !0, "assets/app/front/pages/Info/InfoSection.jinja", !1, function(o, r) {
                        if (o)
                            return void a(o);
                        i = r;
                        for (var l in i.blocks)
                            e.addBlock(l, i.blocks[l]);
                        c += "\n",
                        t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/pages/Info/InfoSection.jinja", !1, function(o, r) {
                            return o ? void a(o) : void r.getExported(function(o, r) {
                                return o ? void a(o) : (e.setVariable("macros", r), c += "\n\n", void (i ? function(t, e, n, s, a) {
                                    a("")
                                } : e.getBlock("title"))(t, e, n, s, function(o, r) {
                                    return o ? void a(o) : (c += r, c += "\n\n", void (i ? function(t, e, n, s, a) {
                                        a("")
                                    } : e.getBlock("meta_og_title"))(t, e, n, s, function(o, r) {
                                        return o ? void a(o) : (c += r, c += "\n\n", void (i ? function(t, e, n, s, a) {
                                            a("")
                                        } : e.getBlock("content"))(t, e, n, s, function(o, r) {
                                            return o ? void a(o) : (c += r, c += "\n\n", void (i ? function(t, e, n, s, a) {
                                                a("")
                                            } : e.getBlock("data"))(t, e, n, s, function(o, r) {
                                                return o ? void a(o) : (c += r, void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                                            }))
                                        }))
                                    }))
                                }))
                            })
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function e(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += " — Info",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function n(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += "Shantell Martin — Info",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function s(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += '\n    <div class="Section InfoSection">\n\n    ',
                    s.contextOrFrameLookup(e, n, "CRAWLER") || (c += '\n        <div class="Section-main">\n            <div class="InfoSectionWrapper">\n                <div class="InfoSectionHeader">\n                    <h1><span class="dummy">Info</span><span class="animate">Info</span></h1>\n\n                    <div class="space"></div>\n                    <div><a class="InfoBtn InfoBtn--black visible" href="mailto:', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "email"), t.opts.autoescape), c += '">Contact</a></div>\n                    ', s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "pressKit") && (c += '\n                        <div><a class="InfoBtn visible" href="', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "pressKit"), t.opts.autoescape), c += '" target="_blank">Press Kit</a></div>\n                    '), c += "\n                </div>\n                ", o = 22, r = 32, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += '<div class="InfoSectionSep visible"></div>'), c += '\n                <div class="InfoSectionText visible clearfix">\n                    <div class="InfoSectionTextLeft">', c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "text")), t.opts.autoescape), c += '</div>\n                    <div class="InfoSectionTextRight">', c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "text2")), t.opts.autoescape), c += "</div>\n                </div>\n\n                ", t.getTemplate("front/components/Info/InfoOriginalArt.jinja", !1, "assets/app/front/pages/Info/InfoSection.jinja", null, function(s, o) {
                        return s ? void a(s) : void o.render(e.getVariables(), n, function(s, o) {
                            return s ? void a(s) : (c += o, c += "\n                ", void t.getTemplate("front/components/Info/InfoMedia.jinja", !1, "assets/app/front/pages/Info/InfoSection.jinja", null, function(s, o) {
                                return s ? void a(s) : void o.render(e.getVariables(), n, function(s, o) {
                                    return s ? void a(s) : (c += o, c += "\n                ", void t.getTemplate("front/components/Info/InfoPublicWorks.jinja", !1, "assets/app/front/pages/Info/InfoSection.jinja", null, function(t, s) {
                                        return t ? void a(t) : void s.render(e.getVariables(), n, function(t, e) {
                                            return t ? void a(t) : (c += e, void (c += '\n\n\n                <div class="InfoSectionSep InfoSectionSep--credits visible"></div>\n                <div class="InfoSectionCredits">\n                    <h2>Credits</h2>\n                    <p>Branding &amp; Design by <a href="http://www.antonandirene.com">Anton &amp; Irene</a> with love</p>\n                </div>\n            </div>\n        </div>\n    '))
                                        })
                                    }))
                                })
                            }))
                        })
                    })),
                    c += '\n\n        <div class="Section-content">\n            ',
                    e.getBlock("section_content")(t, e, n, s, function(t, e) {
                        return t ? void a(t) : (c += e, c += "\n        </div>\n    </div>\n\n    <script>\n\n    </script>\n", void a(null, c))
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function a(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += "\n            ",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function o(t, e, n, s, a) {
                var r = null,
                    c = null,
                    i = "";
                try {
                    e.getSuper(t, "data", o, n, s, function(o, r) {
                        return o ? void a(o) : (r = s.markSafe(r), i += "\n    ", i += s.suppressValue(r, t.opts.autoescape), i += "\n    window.app.data.infoProjects = ", i += s.suppressValue(t.getFilter("safe").call(e, t.getFilter("jsonify").call(e, s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "projects"))), t.opts.autoescape), i += ";\n", void a(null, i))
                    })
                } catch (t) {
                    a(s.handleError(t, r, c))
                }
            }
            return {
                b_title: e,
                b_meta_og_title: n,
                b_content: s,
                b_section_content: a,
                b_data: o,
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Info/InfoSection.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/Info/InfoOriginalArt.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<div class="InfoOriginalArt">\n    <div class="InfoSectionSep visible"></div>\n    <div class="InfoOriginalArtTitle">ORIGINAL ART</div>\n\n    ',
                    o = 4,
                    r = 16,
                    s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) ? (c += '<img class="InfoOriginalArtImg" src="', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "orginalArtImage_mobile"), t.opts.autoescape), c += '">') : (c += '<div class="InfoOriginalArtImg" style="background-image: url(', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "orginalArtImage_main2x"), t.opts.autoescape), c += ')"></div>'),
                    c += '\n    <div class="InfoOriginalArtText">',
                    c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "orginalArtText")), t.opts.autoescape),
                    c += '</div>\n    <a class="InfoOriginalArtLink InfoBtn InfoBtn--black visible" href="',
                    c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "orginalArtLink"), t.opts.autoescape),
                    c += '" target="_blank">Get Started</a>\n</div>',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/Info/InfoOriginalArt.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/Info/InfoMedia.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<div class="InfoMedia InfoSectionTabl">\n    ',
                    o = 1,
                    r = 16,
                    s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '<div class="InfoMediaTitle">In the Media</div>'),
                    c += '\n    <div class="InfoMediaNews">\n        ',
                    s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "news") && (c += '\n            <a class="InfoMediaNewsLink clearfix u-Route" href="', c += s.suppressValue(s.memberLookup(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "news"), "link"), t.opts.autoescape), c += '">\n                ', o = 5, r = 29, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '<span class="InfoMediaNewsImage" style="background-image: url(', c += s.suppressValue(s.memberLookup(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "news"), "previewImage"), t.opts.autoescape), c += ')"></span>'), c += '\n\n                <span class="InfoMediaNewsText">\n                    <span class="InfoMediaNewsTitle">', c += s.suppressValue(s.memberLookup(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "news"), "title"), t.opts.autoescape), c += '</span>\n                    <span class="InfoMediaNewsDate">', c += s.suppressValue(s.memberLookup(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "news"), "month"), t.opts.autoescape), c += "<br>", c += s.suppressValue(s.memberLookup(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "news"), "year"), t.opts.autoescape), c += "</span>\n                </span>\n\n                ", o = 12, r = 32, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += '<span class="InfoMediaNewsImage" style="background-image: url(', c += s.suppressValue(s.memberLookup(s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "news"), "previewImage"), t.opts.autoescape), c += ')"></span>'), c += "\n            </a>\n        "),
                    c += '\n    </div>\n    <div class="InfoMediaPartners">\n        ',
                    o = 17,
                    r = 24,
                    s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += '<div class="InfoMediaPartnersTitle">In the Media</div>'),
                    c += '\n        <div class="InfoMediaPartnersLogos clearfix">\n            ',
                    n = n.push();
                    var l = t.getFilter("batch").call(e, s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "logos"), (o = 19, r = 56, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) ? 2 : 3));
                    if (l)
                        for (var p = l.length, u = 0; u < l.length; u++) {
                            var d = l[u];
                            n.set("logos", d),
                            n.set("loop.index", u + 1),
                            n.set("loop.index0", u),
                            n.set("loop.revindex", p - u),
                            n.set("loop.revindex0", p - u - 1),
                            n.set("loop.first", 0 === u),
                            n.set("loop.last", u === p - 1),
                            n.set("loop.length", p),
                            c += '\n                <div class="InfoMediaPartnersLine">\n                    ',
                            n = n.push();
                            var h = d;
                            if (h)
                                for (var f = h.length, v = 0; v < h.length; v++) {
                                    var m = h[v];
                                    n.set("logo", m),
                                    n.set("loop.index", v + 1),
                                    n.set("loop.index0", v),
                                    n.set("loop.revindex", f - v),
                                    n.set("loop.revindex0", f - v - 1),
                                    n.set("loop.first", 0 === v),
                                    n.set("loop.last", v === f - 1),
                                    n.set("loop.length", f),
                                    c += '\n                        <a class="InfoMediaPartner" href="',
                                    c += s.suppressValue(s.memberLookup(m, "link"), t.opts.autoescape),
                                    c += '" target="_blank">\n                            <span class="InfoMediaPartnerImage" style="background-image: url(',
                                    c += s.suppressValue(s.memberLookup(m, "image"), t.opts.autoescape),
                                    c += ')"></span>\n                            ',
                                    o = 24,
                                    r = 41,
                                    s.callWrap(s.contextOrFrameLookup(e, n, "isDesktop"), "isDesktop", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '<span class="InfoMediaPartnerHover">', c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(m, "text")), t.opts.autoescape), c += "</span>"),
                                    c += "\n                        </a>\n                    "
                                }
                            n = n.pop(),
                            c += "\n                </div>\n            "
                        }
                    n = n.pop(),
                    c += "\n        </div>\n    </div>\n</div>",
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/Info/InfoMedia.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/utils/macros.jinja"] = n(40);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/Info/InfoPublicWorks.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/components/Info/InfoPublicWorks.jinja", !1, function(l, p) {
                        return l ? void a(l) : void p.getExported(function(l, p) {
                            if (l)
                                return void a(l);
                            e.setVariable("macros", p),
                            c += '\n<div class="InfoPublicWorks InfoSectionTabl">\n    <div class="InfoPublicWorksInfo">\n        ',
                            o = 3,
                            r = 20,
                            s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '<div class="InfoPublicWorksMapClose"><div class="l1"></div><div class="l2"></div></div>'),
                            c += '\n        <div class="InfoPublicWorksMap">\n            <div class="Map"></div>\n            <div class="InfoPublicWorksMapProject">\n                <div class="ProjectPlace"></div>\n                <a class="ProjectAddr" target="_blank"></a>\n            </div>\n            <a class="u-Route InfoPublicWorksMapProjectLink ProjectLink">Read More</a>\n        </div>\n    </div>\n    <div>\n        <div class="InfoPublicWorksTitle">Public Works</div>\n        <div class="InfoPublicWorksProjectsList">\n            ',
                            n = n.push();
                            var u = s.memberLookup(s.contextOrFrameLookup(e, n, "info"), "projects");
                            if (u)
                                for (var d = u.length, h = 0; h < u.length; h++) {
                                    var f = u[h];
                                    n.set("project", f),
                                    n.set("loop.index", h + 1),
                                    n.set("loop.index0", h),
                                    n.set("loop.revindex", d - h),
                                    n.set("loop.revindex0", d - h - 1),
                                    n.set("loop.first", 0 === h),
                                    n.set("loop.last", h === d - 1),
                                    n.set("loop.length", d),
                                    c += '\n                <a href="',
                                    c += s.suppressValue(s.memberLookup(f, "link"), t.opts.autoescape),
                                    c += '" class="InfoPublicWorksProject ',
                                    s.memberLookup(f, "coordsLat") || (c += " inactive "),
                                    c += '" data-id="',
                                    c += s.suppressValue(s.memberLookup(f, "id"), t.opts.autoescape),
                                    c += '">\n                    <i>',
                                    c += s.suppressValue((o = 18, r = 45, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["pin", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape),
                                    c += '</i>\n                    <span class="InfoPublicWorksProjectTitle">',
                                    c += s.suppressValue(s.memberLookup(f, "title"), t.opts.autoescape),
                                    c += "</span>\n\n                    ",
                                    s.memberLookup(f, "city") && s.memberLookup(f, "country") ? (c += '\n                        <span class="InfoPublicWorksProjectAddr">', c += s.suppressValue(s.memberLookup(f, "city"), t.opts.autoescape), c += ", ", c += s.suppressValue(s.memberLookup(f, "country"), t.opts.autoescape), c += "</span>\n                    ") : !s.memberLookup(f, "city") && s.memberLookup(f, "country") ? (c += '\n                        <span class="InfoPublicWorksProjectAddr">', c += s.suppressValue(s.memberLookup(f, "country"), t.opts.autoescape), c += "</span>\n                    ") : s.memberLookup(f, "city") && !s.memberLookup(f, "country") ? (c += '\n                        <span class="InfoPublicWorksProjectAddr">', c += s.suppressValue(s.memberLookup(f, "city"), t.opts.autoescape), c += "</span>\n                    ") : c += '\n                        <span class="InfoPublicWorksProjectAddr"></span>\n                    ',
                                    c += "\n                </a>\n            "
                                }
                            n = n.pop(),
                            c += "\n        </div>\n    </div>\n</div>",
                            i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/Info/InfoPublicWorks.jinja"], o)
  }, 17, function(t, e, n) {
    n(58)
  }, 17, function(t, e, n) {
    n(60)
  }, 17, function(t, e, n) {
    (function(e) {
        var s = n(6),
            a = n(27);
        n(62);
        var o = n(63);
        t.exports = a.extend({
            el: ".InfoPublicWorks",
            events: {
                "click .InfoPublicWorksProject": "onClickProject",
                "touchmove .InfoPublicWorksMap": "onTouchMove",
                "click .InfoPublicWorksMapClose": "closeMap"
            },
            initialize: function(t) {
                a.prototype.initialize.call(this, t),
                s.bindAll(this, "handleScroll", "recalcElementsPos"),
                this.recalcElementsPos.__throttled = s.throttle(this.recalcElementsPos, 1e3)
            },
            activate: function() {
                var t = this;
                return e(window).on("scroll", this.handleScroll), this.options.server && this.handleScroll(), a.prototype.activate.call(this).then(function() {
                    t.initMap()
                })
            },
            deactivate: function(t) {
                return e(window).off("scroll", this.handleScroll), a.prototype.deactivate.call(this, t)
            },
            recalcElementsPos: function() {
                app.settings.isMobile || (this.publicWorksPos = this.$(".InfoPublicWorksProjectsList").offset().top, this.publicWorksHeight = this.$(".InfoPublicWorksProjectsList").height(), this.publicWorksMapPos = this.$(".InfoPublicWorksMap").offset().top - parseInt(this.$(".InfoPublicWorksMap").attr("data-shift")) - 20, this.publicWorksMapHeight = this.$(".InfoPublicWorksMap").height())
            },
            handleScroll: function() {
                if (!app.settings.isMobile) {
                    var t = e(window).scrollTop();
                    if (this.recalcElementsPos.__throttled(), !app.settings.isMobile) {
                        var n = 0;
                        t > this.publicWorksMapPos && (n = t - this.publicWorksMapPos, this.publicWorksMapPos + this.publicWorksMapHeight + n + 40 > this.publicWorksPos + this.publicWorksHeight && (n -= this.publicWorksMapPos + this.publicWorksMapHeight + n + 40 - (this.publicWorksPos + this.publicWorksHeight))),
                        t > this.publicWorksMapPos - 150 ? (this.hideNavOnMap = !0, app.views.topNav.hide()) : (this.hideNavOnMap && app.views.topNav.show(), this.hideNavOnMap = !1),
                        n = Math.round(Math.max(n, 0)),
                        this.$(".InfoPublicWorksMap").css("transform", "translateY(" + n + "px)").attr("data-shift", n)
                    }
                }
            },
            onTouchMove: function(t) {
                t.preventDefault()
            },
            closeMap: function() {
                app.views.topNav.show(),
                this.$(".InfoPublicWorksInfo").removeClass("InfoPublicWorks--opened")
            },
            initMap: function() {
                this.projects = new Backbone.Collection(this.options.projects);
                var t = this.projects.filter(function(t) {
                    return !!t.get("coordsLat")
                });
                if (!t.length)
                    return void this.$(".InfoPublicWorksMapProjectLink").remove();
                var e = t[0],
                    n = {
                        center: {
                            lat: e.get("coordsLat"),
                            lng: e.get("coordsLng")
                        },
                        zoom: 14,
                        maxZoom: 22,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        mapTypeControl: !1,
                        scrollwheel: !1,
                        zoomControl: !1,
                        streetViewControl: !1
                    };
                this.map = new google.maps.Map(this.$(".InfoPublicWorksMap .Map")[0], n),
                this.map.mapTypes.set("map_style", o),
                this.map.setMapTypeId("map_style"),
                app.settings.isMobile || this.showProject(e)
            },
            showProject: function(t) {
                app.settings.isMobile && (this.$(".InfoPublicWorksInfo").addClass("InfoPublicWorks--opened"), app.views.topNav.hide());
                var e = {
                    lat: t.get("coordsLat"),
                    lng: t.get("coordsLng")
                };
                this.map.setCenter(e),
                this.marker && this.marker.setMap(null),
                this.marker = new google.maps.Marker({
                    position: e,
                    map: this.map,
                    icon: {
                        url: "media/mappin.png",
                        scaledSize: new google.maps.Size(40, 64)
                    }
                }),
                this.$(".ProjectPlace").text(t.get("target")),
                this.$(".ProjectAddr").text(t.get("fullAddress")),
                this.$(".ProjectAddr").attr("href", t.get("coordsLink")),
                this.$(".ProjectLink").prop("href", t.get("link")),
                this.$(".InfoPublicWorksProject[data-id=" + t.id + "]").addClass("selected").siblings().removeClass("selected")
            },
            onClickProject: function(t) {
                t.preventDefault();
                var n = e(t.target).closest(".InfoPublicWorksProject").data("id"),
                    s = this.projects.get(n);
                this.showProject(s)
            },
            destroy: function() {
                return console.log("destroy InfoPublicWorks"), this.marker && this.marker.setMap(null), a.prototype.destroy.call(this)
            }
        })
    }).call(e, n(4))
  }, 17, function(t, e) {
    t.exports = new google.maps.StyledMapType([{
        featureType: "landscape",
        stylers: [{
            color: "#141414"
        }]
    }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
            color: "#313131"
        }]
    }, {
        elementType: "labels.text.stroke",
        stylers: [{
            color: "#141414"
        }, {
            visibility: "off"
        }]
    }, {
        elementType: "labels.text.fill",
        stylers: [{
            color: "#555555"
        }]
    }, {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [{
            color: "#313131"
        }]
    }, {
        featureType: "poi",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
            color: "#222222"
        }]
    }, {
        featureType: "transit",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [{
            visibility: "off"
        }]
    }], {
        name: "Styled Map"
    })
  }, function(t, e, n) {
    (function(e) {
        var s = n(5),
            a = n(6),
            o = n(35),
            r = n(22),
            c = n(65),
            i = n(66);
        n(67),
        n(68),
        t.exports = o.extend({
            template: c,
            el: ".NewsPopup",
            rootUrl: "/news/",
            apiUrl: "/api/news/all/",
            events: {
                "click .NewsPopupClose": "close",
                "click .InnerNewsLink": "onInnerNewsLinkClick",
                "click .NewsPopupShareDropdownPinterest": "sharePinterest",
                "click .NewsPopupShareDropdownFacebook": "shareFacebook",
                "click .NewsPopupShareDropdownTwitter": "shareTwitter",
                "click .NewsPopupShareDropdownTumblr": "shareTumblr",
                "click .NewsItemNext": "showNextNewsMobile",
                "touchstart .NewsPopupContent": "onTouchStart",
                "touchmove .NewsPopupContent": "onTouchMove"
            },
            initialize: function(t) {
                o.prototype.initialize.call(this, t),
                a.bindAll(this, "onScroll", "recalcOnScroll"),
                this.recalcOnScroll.__debounced = a.debounce(this.recalcOnScroll, 200),
                "info" == this.options.referrer && (this.rootUrl = "/info/"),
                t.server && (this.$el.hide(), this.fixScrollBars(), this.$el.addClass("NewsPopup--visible"), this.$el.addClass("NewsPopup--scroll"), this.$el.outerHeight(), this.$el.show(), e("html").addClass("HideGlobalScroll"), this.$(".NewsPopupContent").scrollTop(0), this.recalcOnScroll(), this.$(".NewsPopupContent").focus(), app.views.topNav.changeColor("black"), this.fixVideoAspect())
            },
            onTouchStart: function(t) {
                app.settings.isDesktop || (this.scrollY = t.originalEvent.touches.item(0).clientY)
            },
            onTouchMove: function(t) {
                if (!app.settings.isDesktop) {
                    var n = e(t.currentTarget),
                        s = this.scrollY - t.originalEvent.touches.item(0).clientY;
                    (s < 0 && n.scrollTop() <= 0 || s > 0 && n.scrollTop() + n.height() >= n[0].scrollHeight) && t.preventDefault(),
                    this.scrollY = t.originalEvent.touches.item(0).clientY
                }
            },
            close: function() {
                s.history.navigate(this.rootUrl, {
                    trigger: "true"
                })
            },
            sharePinterest: function() {
                if (this.currentNews) {
                    var t = this.currentNews.image;
                    0 != t.indexOf("http") && (t = window.location.origin + t);
                    var e = "http://pinterest.com/pin/create/button/?NaN" + encodeURIComponent(window.location.href) + "&media=" + encodeURIComponent(t) + "&description=" + encodeURIComponent("Shantell Martin — News: " + this.currentNews.title);
                    window.open(e, "sharer", "width=626,height=436,toolbar=0,status=0")
                }
            },
            shareFacebook: function(t) {
                var e = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
                window.open(e, "sharer", "width=626,height=436,toolbar=0,status=0")
            },
            shareTwitter: function(t) {
                if (this.currentNews) {
                    var e = "https://twitter.com/share?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Shantell Martin — News: " + this.currentNews.title);
                    window.open(e, "sharer", "width=626,height=436,toolbar=0,status=0")
                }
            },
            shareTumblr: function() {
                if (this.currentNews) {
                    var t = "http://www.tumblr.com/share/link?NaN" + encodeURIComponent(window.location.href) + "&name=" + encodeURIComponent("Shantell Martin — News: " + this.currentNews.title) + "&description=" + encodeURIComponent(this.currentNews.teaser);
                    window.open(t, "sharer", "width=626,height=436,toolbar=0,status=0")
                }
            },
            updateNextPanel: function() {
                this.$(".NewsItemNext:not(.proceeded)").each(function(t, n) {
                    var s,
                        o = e(n),
                        r = o.closest(".NewsItem"),
                        c = r.attr("data-url"),
                        i = a.findWhere(this.data, {
                            url: c
                        }),
                        l = a.findIndex(this.data, i),
                        p = l == this.data.length - 1;
                    o.toggle(!p).addClass("proceeded"),
                    p || (s = this.data[l + 1].title, e(".NewsItemNextTitle", o).text(s))
                }.bind(this))
            },
            renderNews: function(t) {
                return e(i.render({
                    newsItem: t
                }))
            },
            fixTextLinks: function() {
                this.$(".NewsItemText a:not(.fixed-target)").attr("target", "_blank").addClass("fixed-target")
            },
            fixVideoAspect: function() {
                this.$(".NewsItemVideoWrapper:not(.fixed-aspect)").each(function() {
                    var t = e("iframe", this),
                        n = (t.attr("width") || 640) - 0,
                        s = (t.attr("height") || 360) - 0;
                    e(this).css("padding-top", 100 * s / n + "%").addClass("fixed-aspect")
                })
            },
            showNextNewsMobile: function(t) {
                if (!app.settings.isDesktop) {
                    var n = e(t.currentTarget);
                    if (!n.hasClass("inactive")) {
                        var s = n.closest(".NewsItem"),
                            o = s.attr("data-url"),
                            r = a.findWhere(this.data, {
                                url: o
                            }),
                            c = a.findIndex(this.data, r),
                            i = c == this.data.length - 1,
                            l = this.$(".NewsPopupContent");
                        if (n.addClass("inactive"), !i) {
                            var p = this.renderNews(this.data[c + 1]);
                            p.appendTo(this.$content),
                            this.fixScrollBars(),
                            l.animate({
                                scrollTop: "+=" + (e(window)[0].innerHeight - (app.settings.isMobile ? 20 : -10)) + "px"
                            }, 400, function() {
                                this.fixTextLinks(),
                                this.updateNextPanel(),
                                this.fixVideoAspect()
                            }.bind(this))
                        }
                    }
                }
            },
            recalcOnScroll: function() {
                if (this.data && !this.preventScrollHandle) {
                    var t,
                        n,
                        o,
                        r,
                        c,
                        i = [],
                        l = (e(window).width(), e(window).height()),
                        p = this.$(".NewsPopupContent"),
                        u = p[0];
                    p.scrollTop();
                    if (this.$(".NewsItem").each(function(t, n) {
                        i.push({
                            $el: e(n),
                            top: e(n).position().top,
                            url: e(n).attr("data-url"),
                            link: e(n).attr("data-link")
                        })
                    }), this.newsPos = i, i.length) {
                        app.settings.isMobile && this.$(".NewsPopupTitle").removeClass("visible"),
                        this.$(".NewsPopupSidebar").toggleClass("white-theme", u.scrollTop <= 0);
                        for (var d = this.newsPos.length - 1; d >= 0; d--)
                            if (app.settings.isMobile && this.newsPos[d].top <= 30 && (n = a.findWhere(this.data, {
                                url: this.newsPos[d].url
                            }), this.$(".NewsPopupTitle").text(n.title), this.$(".NewsPopupTitle").addClass("visible")), this.newsPos[d].top < l / 2) {
                                t = this.newsPos[d].$el,
                                n = a.findWhere(this.data, {
                                    url: this.newsPos[d].url
                                }),
                                o = a.findIndex(this.data, n),
                                r = 0 == o,
                                c = o == this.data.length - 1;
                                break
                            }
                        this.currentNews = n,
                        this.$(".NewsPopupPrev").toggleClass("hidden", r).attr("data-url", !r && this.data[o - 1].url).attr("href", !r && this.data[o - 1].link),
                        this.$(".NewsPopupNext").toggleClass("hidden", c).attr("data-url", !c && this.data[o + 1].url).attr("href", !c && this.data[o + 1].link),
                        s.history.navigate(n.link, {
                            trigger: !1
                        }),
                        this.setTitle("News: " + n.title),
                        app.settings.isDesktop && !c && u.scrollHeight - u.scrollTop == u.clientHeight && (clearTimeout(this.addNewsTimeout), this.addNewsTimeout = setTimeout(function() {
                            this.preventScrollHandle = !0,
                            p.css("pointer-events", "none");
                            var t = this.renderNews(this.data[o + 1]);
                            t.appendTo(this.$content),
                            this.fixScrollBars(),
                            p.animate({
                                scrollTop: "+=350px"
                            }, 300, function() {
                                this.fixTextLinks(),
                                this.updateNextPanel(),
                                this.fixVideoAspect(),
                                this.preventScrollHandle = !1,
                                p.css("pointer-events", "")
                            }.bind(this))
                        }.bind(this), app.settings.isDesktop ? 300 : 500))
                    }
                }
            },
            onScroll: function() {
                this.recalcOnScroll.__debounced()
            },
            onInnerNewsLinkClick: function(t) {
                if (2 != t.which && !t.metaKey && !t.ctrlKey && !this.preventScrollHandle) {
                    t.preventDefault();
                    var n = e(t.currentTarget),
                        s = (n.attr("href"), n.attr("data-url")),
                        o = this.$(".NewsPopupContent"),
                        r = this.$('.NewsItem[data-url="' + s + '"]');
                    if (r.length) {
                        this.preventScrollHandle = !0,
                        o.css("pointer-events", "none");
                        var c = o.scrollTop() + r.position().top;
                        o.animate({
                            scrollTop: c
                        }, 800, function() {
                            o.css("pointer-events", ""),
                            this.preventScrollHandle = !1,
                            this.recalcOnScroll()
                        }.bind(this))
                    } else {
                        var i = this.renderNews(a.findWhere(this.data, {
                                url: s
                            })),
                            l = this.$(".NewsItem");
                        this.preventScrollHandle = !0,
                        o.css("pointer-events", "none"),
                        i.css({
                            position: "absolute",
                            top: o.scrollTop(),
                            left: 0,
                            transition: "0.3s all ease-in-out",
                            opacity: 0,
                            transform: "translateY(40px)",
                            "z-index": 1
                        }).prependTo(o),
                        this.fixScrollBars(),
                        setTimeout(function() {
                            i.css({
                                opacity: "",
                                transform: ""
                            })
                        }.bind(this), 0),
                        setTimeout(function() {
                            l.remove(),
                            i.css({
                                position: "",
                                top: "",
                                left: "",
                                transition: "",
                                "z-index": ""
                            }),
                            o.css("pointer-events", ""),
                            this.preventScrollHandle = !1,
                            o.scrollTop(0),
                            this.fixTextLinks(),
                            this.updateNextPanel(),
                            this.fixVideoAspect(),
                            this.recalcOnScroll()
                        }.bind(this), 400)
                    }
                }
            },
            renderData: function() {
                var t = a.findWhere(this.data, {
                    url: this.options.url
                });
                return {
                    newsItem: t
                }
            },
            render: function() {
                console.log("render news");
                var t = o.prototype.render.call(this);
                return console.log("render"), t
            },
            activate: function(t) {
                return console.log("activate news"), o.prototype.activate.call(this, t).then(function() {
                    this.$content = this.$(".NewsPopupContent"),
                    this.$content.off("scroll", this.onScroll),
                    this.$content.on("scroll", this.onScroll),
                    this.fixTextLinks(),
                    this.fixVideoAspect(),
                    this.updateNextPanel(),
                    this.recalcOnScroll(),
                    app.views.topNav.changeColor("black"),
                    this.options.inAnimated || this.options.server || (this.fixScrollBars(), this.$el.addClass("NewsPopup--visible"), this.$el.addClass("NewsPopup--scroll"), e("html").addClass("HideGlobalScroll"), this.$(".NewsPopupContent").focus())
                }.bind(this))
            },
            fixScrollBars: function() {
                app.settings.isMobile || (this.$(".NewsPopupSidebar").css("right", app.utils.getScrollbarWidth()), this.$(".NewsItem, .NewsPopupBG").css("width", "calc(100vw - " + (120 + app.utils.getScrollbarWidth()) + "px)"))
            },
            playIn: function(t) {
                console.log("playIn");
                var n = this;
                return this.fixScrollBars(), this.options.inAnimated ? new Promise(function(s) {
                    n.$el.outerHeight(),
                    n.$el.addClass("NewsPopup--visible"),
                    app.views.topNav.changeColor("black"),
                    setTimeout(function() {
                        n.$el.addClass("NewsPopup--scroll"),
                        e("html").addClass("HideGlobalScroll"),
                        this.$(".NewsPopupContent").focus(),
                        s()
                    }.bind(this), t.duration + 100)
                }) : r.createEmptyPromise()
            },
            playOut: function(t) {
                console.log("playOut news");
                var n = this;
                return new Promise(function(s) {
                    n.$el.removeClass("NewsPopup--visible"),
                    n.$el.removeClass("NewsPopup--scroll"),
                    e("html").removeClass("HideGlobalScroll"),
                    app.views.topNav.changeColor("white"),
                    setTimeout(function() {
                        s()
                    }.bind(this), t.duration + 100)
                })
            },
            viewsRegistration: function() {},
            destroy: function() {
                return console.log("destroy news"), o.prototype.destroy.call(this)
            },
            deactivate: function(t) {
                return console.log("deactivate news"), e("html").removeClass("HideGlobalScroll"), app.views.topNav.changeColor("white"), o.prototype.deactivate.call(this, t)
            }
        })
    }).call(e, n(4))
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/utils/macros.jinja"] = n(40),
    o["front/pages/News/News-inner.jinja"] = n(66);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/News/NewsPopup.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/pages/News/NewsPopup.jinja", !1, function(l, p) {
                        return l ? void a(l) : void p.getExported(function(l, p) {
                            return l ? void a(l) : (e.setVariable("macros", p), c += '\n<div class="NewsPopup">\n\t<div class="NewsPopupBG"></div>\n\n    <div class="NewsPopupContent" tabindex="-1">\n        ', void t.getTemplate("front/pages/News/News-inner.jinja", !1, "assets/app/front/pages/News/NewsPopup.jinja", null, function(l, u) {
                                return l ? void a(l) : void u.render(e.getVariables(), n, function(l, u) {
                                    return l ? void a(l) : (c += u, c += '\n    </div>\n\n\t<div class="NewsPopupSidebar white-theme">\n\t    <div class="NewsPopupClose">\n\t    \t<div class="l1"></div>\n\t    \t<div class="l2"></div>\n\t    </div>\n\n\t\t', o = 14, r = 14, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '<div class="NewsPopupTitle"></div>'), c += '\n\n\t\t<div class="NewsPopupShare">\n\t\t\t', o = 17, r = 19, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += "<span>Share</span>"), c += "\n\t\t\t", o = 18, r = 15, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '<div class="NewsPopupShareIcon">', c += s.suppressValue((o = 18, r = 79, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["share", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += "</div>"), c += '\n\t\t\t<div class="NewsPopupShareDropdown">\n\t\t\t\t<div class="NewsPopupShareDropdownPinterest">', c += s.suppressValue((o = 20, r = 71, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["pinterest", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += '</div>\n\t\t\t\t<div class="NewsPopupShareDropdownFacebook">', c += s.suppressValue((o = 21, r = 70, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["facebook", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += '</div>\n\t\t\t\t<div class="NewsPopupShareDropdownTwitter">', c += s.suppressValue((o = 22, r = 69, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["twitter", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += '</div>\n\t\t\t\t<div class="NewsPopupShareDropdownTumblr">', c += s.suppressValue((o = 23, r = 68, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["tumblr", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += "</div>\n\t\t\t</div>\n\t\t</div>\n\t\t", o = 26, r = 19, s.callWrap(s.contextOrFrameLookup(e, n, "isDesktop"), "isDesktop", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += '<div class="NewsPopupShareOverlay"></div>'), c += "\n\n\t\t", o = 28, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += '\n\t\t\t<a class="NewsPopupNext InnerNewsLink hidden">', c += s.suppressValue((o = 29, r = 71, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["next", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += '</a>\n\t\t\t<a class="NewsPopupPrev InnerNewsLink hidden">', c += s.suppressValue((o = 30, r = 71, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["prev", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += "</a>\n\t\t"), c += "\n\t</div>\n</div>", void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                                })
                            }))
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/News/NewsPopup.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/utils/macros.jinja"] = n(40);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/News/News-inner.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/pages/News/News-inner.jinja", !1, function(l, p) {
                        return l ? void a(l) : void p.getExported(function(l, p) {
                            if (l)
                                return void a(l);
                            e.setVariable("macros", p),
                            c += '\n<div class="NewsItem" data-link="',
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "newsItem"), "link"), t.opts.autoescape),
                            c += '" data-url="',
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "newsItem"), "url"), t.opts.autoescape),
                            c += '">\n    <div class="NewsItemWrapper">\n        <h1>',
                            c += s.suppressValue(t.getFilter("replace").call(e, s.memberLookup(s.contextOrFrameLookup(e, n, "newsItem"), "title"), " ", "  "), t.opts.autoescape),
                            c += '</h1>\n        <div class="NewsItemDate">',
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "newsItem"), "month"), t.opts.autoescape),
                            c += "<br>",
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "newsItem"), "year"), t.opts.autoescape),
                            c += '</div>\n        <div class="NewsItemContent">\n            ',
                            n = n.push();
                            var u = s.memberLookup(s.contextOrFrameLookup(e, n, "newsItem"), "blocks");
                            if (u)
                                for (var d = u.length, h = 0; h < u.length; h++) {
                                    var f = u[h];
                                    n.set("block", f),
                                    n.set("loop.index", h + 1),
                                    n.set("loop.index0", h),
                                    n.set("loop.revindex", d - h),
                                    n.set("loop.revindex0", d - h - 1),
                                    n.set("loop.first", 0 === h),
                                    n.set("loop.last", h === d - 1),
                                    n.set("loop.length", d),
                                    c += "\n                ",
                                    "Text" == s.memberLookup(f, "tp") ? (c += '\n                    <div class="NewsItemText">', c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(f, "text")), t.opts.autoescape), c += "</div>\n                ") : "Img" == s.memberLookup(f, "tp") ? (c += '\n                    <div class="NewsItemImg">\n                        <div class="NewsItemImagePlaceholder" style="padding-top: ', c += s.suppressValue(100 * s.memberLookup(f, "imageHeight") / s.memberLookup(f, "imageWidth"), t.opts.autoescape), c += '%">\n                        ', o = 12, r = 36, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) ? (c += '\n                            <img src="', c += s.suppressValue(s.memberLookup(f, "imageSmall"), t.opts.autoescape), c += '">\n                        ') : (c += '\n                            <img src="', c += s.suppressValue(s.memberLookup(f, "image"), t.opts.autoescape), c += '">\n                        '), c += "\n                        </div>\n                    </div>\n                ") : "Video" == s.memberLookup(f, "tp") && (c += '\n                    <div class="NewsItemVideo">\n                        <div class="NewsItemVideoWrapper">', c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(f, "videoOembed")), t.opts.autoescape), c += "</div>\n                    </div>\n                "),
                                    c += "\n            "
                                }
                            n = n.pop(),
                            c += '\n        </div>\n    </div>\n    <div class="NewsItemNext">\n        <div class="NewsItemNextWrapper">\n            <div class="NewsItemNextCaption">Next</div>\n            <div class="NewsItemNextTitle"></div>\n        </div>\n    </div>\n</div>\n',
                            i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/News/News-inner.jinja"], o)
  }, 17, 17, function(t, e, n) {
    (function(e) {
        var s = n(6),
            a = (n(26), n(22)),
            o = n(25),
            s = n(6),
            r = n(70);
        n(72);
        var c = n(71);
        t.exports = o.extend({
            title: "News",
            el: ".NewsSection",
            template: r,
            SHANTELLE_PARAMS: {
                state: "news",
                left: -835 / 1440,
                top: -1964 / 1440,
                width: 2114 / 1440,
                height: 4530 / 1440,
                angle: -4
            },
            events: {
                "click .NewsMoreButton": "onClickMoreButton"
            },
            moreApi: function() {
                return "/api/news/?limit=" + this.state.limit + "&offset=" + this.state.offset
            },
            initialize: function(t) {
                s.bindAll(this, "handleParalax", "recalcElementsPos"),
                this.recalcElementsPos.__throttled = s.throttle(this.recalcElementsPos, 1e3),
                o.prototype.initialize.call(this, t),
                s.bindAll(this, "moreApi"),
                this.options.server || (this.apiUrl = "/api/news/"),
                this.state = {
                    limit: 10,
                    offset: 0,
                    hasMore: !1
                },
                this.showItemsOnScroll = !0
            },
            activate: function() {
                return console.log("activate NewsSection"), this.options.server ? (this.state.offset = window.app.data.newsOffset, this.state.hasMore = window.app.data.newsHasMore) : (this.state.offset = this.data.news.length, this.state.hasMore = this.data.news.offset), e(window).on("scroll", this.handleParalax), this.recalcElementsPos(), this.options.server && this.handleParalax(), app.settings.isMobile || app.views.topNav.changeColor("white"), this.showImageLoader(), o.prototype.activate.call(this)
            },
            deactivate: function(t) {
                return e(window).off("scroll", this.handleParalax), o.prototype.deactivate.call(this, t)
            },
            showImageLoader: function() {
                this.$(".NewsListItem:not(.loading-handled)").each(function(t, n) {
                    var s = e(n),
                        a = s.find(".NewsListItemImageInner").css("background-image").replace(/^url\("?/i, "").replace(/"?\)$/i, ""),
                        o = new Image;
                    o.onload = function() {
                        s.addClass("loaded"),
                        o.onload = null,
                        o = null
                    },
                    o.src = a,
                    s.addClass("loading-handled")
                })
            },
            render: function() {
                console.log("render NewsSection");
                var t = o.prototype.render.call(this);
                return this.options.inAnimated && this.$el.css({
                    opacity: 0
                }), this.showImageLoader(), t
            },
            playIn: function(t) {
                this.showItemsOnScroll = !1,
                this.recalcElementsPos(),
                this.handleParalax(),
                console.log("playIn NewsSection");
                var e = this;
                return this.options.inAnimated ? new Promise(function(n) {
                    e.$el.css({
                        opacity: 1
                    }),
                    app.els.$shantelle.animate({
                        opacity: 1
                    }, t.duration),
                    a.animateRolling({
                        tp: "in",
                        direction: "toright",
                        $item: e.$("h1").eq(0).find(".animate"),
                        duration: 300
                    }),
                    e.playInResolve = n,
                    e.playInTimeout = setTimeout(function() {
                        e.showItemsOnScroll = !0,
                        e.handleParalax(),
                        delete e.playInTimeout,
                        n()
                    }, 400)
                }) : a.createEmptyPromise()
            },
            playOut: function(t) {
                this.playInTimeout && (clearTimeout(this.playInTimeout), this.playInResolve && this.playInResolve(), delete this.playInTimeout, delete this.playInResolve),
                this.showItemsOnScroll = !1,
                console.log("playOut NewsSection");
                var e = this;
                return new Promise(function(n) {
                    app.els.$shantelle.animate({
                        opacity: 0
                    }, t.duration),
                    e.$el.animate({
                        opacity: 0
                    }, t.duration, function() {
                        app.els.$shantelle.stop(!0, !0),
                        n()
                    })
                })
            },
            recalcElementsPos: function() {
                if (!app.settings.isMobile) {
                    var t = [];
                    this.$(".NewsList .NewsListItem").each(function(n, s) {
                        t.push({
                            shown: !e(s).hasClass("invisible"),
                            $item: e(s),
                            top: e(s).offset().top
                        })
                    }),
                    this.itemsPos = t
                }
            },
            handleParalax: function() {
                var t = e(window).scrollTop(),
                    n = window.innerHeight;
                if (this.recalcElementsPos.__throttled(), !app.settings.isMobile && this.showItemsOnScroll)
                    for (var s = this.itemsPos.length - 1; s >= 0; s--)
                        !this.itemsPos[s].shown && this.itemsPos[s].top < t + n - 70 && (this.itemsPos[s].shown = !0, this.itemsPos[s].$item.removeClass("invisible"));
                app.settings.isDesktop && app.els.$shantelle.css("transform", "translateY(" + -t / 1.5 + "px) rotate(-4deg)")
            },
            onClickMoreButton: function() {
                var t = this;
                this.forceLoadData(this.moreApi).then(function() {
                    t.state.offset += t.data.news.length,
                    t.state.hasMore = t.data.hasMore;
                    var n = e(c.render(t.data));
                    t.state.hasMore ? (t.$(".NewsList").append(n), t.recalcElementsPos(), setTimeout(t.handleParalax, 100), n.velocity({
                        opacity: 1
                    }, 500), t.showImageLoader()) : t.$(".NewsMoreButtonWrapper").velocity({
                        opacity: 0
                    }, 300, function() {
                        e(this).remove(),
                        t.$(".NewsList").append(n),
                        t.recalcElementsPos(),
                        t.showImageLoader(),
                        setTimeout(t.handleParalax, 100)
                    })
                })
            }
        })
    }).call(e, n(4))
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/pages/Section/Section.jinja"] = n(29),
    o["front/utils/macros.jinja"] = n(40),
    o["front/pages/News/NewsSectionList.jinja"] = n(71);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/News/NewsSection.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/pages/Section/Section.jinja", !0, "assets/app/front/pages/News/NewsSection.jinja", !1, function(o, r) {
                        if (o)
                            return void a(o);
                        i = r;
                        for (var l in i.blocks)
                            e.addBlock(l, i.blocks[l]);
                        c += "\n",
                        t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/pages/News/NewsSection.jinja", !1, function(o, r) {
                            return o ? void a(o) : void r.getExported(function(o, r) {
                                return o ? void a(o) : (e.setVariable("macros", r), c += "\n\n", void (i ? function(t, e, n, s, a) {
                                    a("")
                                } : e.getBlock("title"))(t, e, n, s, function(o, r) {
                                    return o ? void a(o) : (c += r, c += "\n\n", void (i ? function(t, e, n, s, a) {
                                        a("")
                                    } : e.getBlock("meta_og_title"))(t, e, n, s, function(o, r) {
                                        return o ? void a(o) : (c += r, c += "\n\n", void (i ? function(t, e, n, s, a) {
                                            a("")
                                        } : e.getBlock("content"))(t, e, n, s, function(o, r) {
                                            return o ? void a(o) : (c += r, c += "\n\n", void (i ? function(t, e, n, s, a) {
                                                a("")
                                            } : e.getBlock("data"))(t, e, n, s, function(o, r) {
                                                return o ? void a(o) : (c += r, c += "\n", void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                                            }))
                                        }))
                                    }))
                                }))
                            })
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function e(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += " — News",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function n(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += "Shantell Martin — News",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function s(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += '\n    <div class="Section NewsSection">\n\n    ',
                    "news" != s.contextOrFrameLookup(e, n, "CRAWLER") && (c += '\n        <div class="NewsSectionWrapper">\n            <div class="NewsSectionHeader clearfix">\n                <h1><span class="dummy">News</span><span class="animate">News</span></h1>\n            </div>\n\n            <div class="NewsList clearfix">\n                ', t.getTemplate("front/pages/News/NewsSectionList.jinja", !1, "assets/app/front/pages/News/NewsSection.jinja", null, function(t, o) {
                        return t ? void a(t) : void o.render(e.getVariables(), n, function(t, o) {
                            return t ? void a(t) : (c += o, c += "\n            </div>\n            ", s.contextOrFrameLookup(e, n, "hasMore") && (c += '\n                <div class="NewsMoreButtonWrapper">\n                    <button class="NewsMoreButton">Show More</button>\n                </div>\n            '), void (c += "\n        </div>\n    "))
                        })
                    })),
                    c += '\n        <div class="Section-content">\n            ',
                    e.getBlock("section_content")(t, e, n, s, function(t, e) {
                        return t ? void a(t) : (c += e, c += "\n        </div>\n    </div>\n", void a(null, c))
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function a(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += "\n            ",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function o(t, e, n, s, a) {
                var r = null,
                    c = null,
                    i = "";
                try {
                    e.getSuper(t, "data", o, n, s, function(o, r) {
                        return o ? void a(o) : (r = s.markSafe(r), i += "\n    ", i += s.suppressValue(r, t.opts.autoescape), i += "\n    window.app.data.newsOffset = ", i += s.suppressValue(t.getFilter("length").call(e, s.contextOrFrameLookup(e, n, "news")), t.opts.autoescape), i += ";\n    window.app.data.newsHasMore = ", i += s.suppressValue(t.getFilter("jsonify").call(e, s.contextOrFrameLookup(e, n, "hasMore")), t.opts.autoescape), i += ";\n", void a(null, i))
                    })
                } catch (t) {
                    a(s.handleError(t, r, c))
                }
            }
            return {
                b_title: e,
                b_meta_og_title: n,
                b_content: s,
                b_section_content: a,
                b_data: o,
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/News/NewsSection.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/News/NewsSectionList.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    n = n.push();
                    var l = s.contextOrFrameLookup(e, n, "news");
                    if (l)
                        for (var p = l.length, u = 0; u < l.length; u++) {
                            var d = l[u];
                            n.set("n", d),
                            n.set("loop.index", u + 1),
                            n.set("loop.index0", u),
                            n.set("loop.revindex", p - u),
                            n.set("loop.revindex0", p - u - 1),
                            n.set("loop.first", 0 === u),
                            n.set("loop.last", u === p - 1),
                            n.set("loop.length", p),
                            c += '\n    <a class="NewsListItem u-Route ',
                            o = 1,
                            r = 51,
                            s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += " invisible "),
                            c += '" href="',
                            c += s.suppressValue(s.memberLookup(d, "link"), t.opts.autoescape),
                            c += '">\n        <div class="NewsListItemImage">\n       \t\t<div class="NewsListItemImageInner" style="background-image: url(',
                            c += s.suppressValue(s.memberLookup(d, "previewImage"), t.opts.autoescape),
                            c += ')"></div>\n       \t\t<div class="ImageLoader">\n       \t\t\t<div class="ImageLoaderWhiteCircle"></div>\n       \t\t\t<div class="ImageLoaderBlackCircle"></div>\n       \t\t</div>\n        </div>\n        <span class="NewsListItemTitle">',
                            c += s.suppressValue(s.memberLookup(d, "title"), t.opts.autoescape),
                            c += '</span>\n        <span class="NewsListItemDate">',
                            c += s.suppressValue(s.memberLookup(d, "month"), t.opts.autoescape),
                            c += "<br>",
                            c += s.suppressValue(s.memberLookup(d, "year"), t.opts.autoescape),
                            c += "</span>\n    </a>\n"
                        }
                    n = n.pop(),
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/News/NewsSectionList.jinja"], o)
  }, 17, function(t, e, n) {
    (function(e) {
        var s = n(5),
            a = n(6),
            o = n(35),
            r = n(22),
            c = n(63),
            i = n(74),
            l = n(75);
        n(76),
        n(77),
        t.exports = o.extend({
            template: i,
            el: ".ProjectPopup",
            rootUrl: "work.html",
            events: {
                "click .ProjectPopupClose": "close",
                "mouseenter .ProjectItemCityWrapper": "onCityMouseEnter",
                "mouseleave .ProjectItemCityWrapper": "onCityMouseLeave",
                "click .ProjectItemCityWrapper": "onCityMouseClick",
                "click .InnerProjectLink": "onInnerProjectLinkClick",
                "click .ProjectPopupShareDropdownPinterest": "sharePinterest",
                "click .ProjectPopupShareDropdownFacebook": "shareFacebook",
                "click .ProjectPopupShareDropdownTwitter": "shareTwitter",
                "click .ProjectPopupShareDropdownTumblr": "shareTumblr",
                "click .ProjectItemNext": "showNextProjectMobile",
                "touchstart .ProjectPopupContent": "onTouchStart",
                "touchmove .ProjectPopupContent": "onTouchMove",
                "touchend .ProjectPopupContent": "onTouchEnd",
                "touchcancel .ProjectPopupContent": "onTouchEnd",
                "touchmove .ProjectItemInfo": "onInfoTouchMove",
                "click .ProjectItemMapClose": "closeMap"
            },
            initialize: function(t) {
                o.prototype.initialize.call(this, t),
                a.bindAll(this, "onScroll", "recalcOnScroll", "onResize", "adoptTitleAndTeaser", "fixScrollPosition"),
                this.recalcOnScroll.__debounced = a.debounce(this.recalcOnScroll, 200),
                "info" == this.options.referrer ? (this.apiUrl = "/api/projects/all-info/", this.rootUrl = "/info/") : this.apiUrl = "/api/projects/all-work/",
                t.server && (this.$el.hide(), this.fixScrollBars(), this.$el.addClass("ProjectPopup--visible"), this.$el.addClass("ProjectPopup--scroll"), this.$el.outerHeight(), this.$el.show(), this.mobileTransformPopupToGlobalScroll(), e("html").addClass("HideGlobalScroll"), this.$(".ProjectPopupContent").scrollTop(0), this.recalcOnScroll(), this.$(".ProjectPopupContent").focus(), this.fixVideoAspect(), this.adoptTitleAndTeaser(), this.showCoverLoader())
            },
            onTouchStart: function(t) {
                app.settings.isTablet && (this.scrollY = t.originalEvent.touches.item(0).clientY, this.hasFingersOnScreen = !0, this.fixScrollPosition())
            },
            onTouchEnd: function(t) {
                if (app.settings.isTablet) {
                    var e = t.originalEvent.touches;
                    e.length && "touchcancel" != t.type || (this.hasFingersOnScreen = !1, this.fixScrollPosition())
                }
            },
            onInfoTouchMove: function(t) {
                t.preventDefault()
            },
            closeMap: function(t) {
                var n = e(t.currentTarget).closest(".ProjectItem");
                this.$(".ProjectPopupSidebar").removeClass("ProjectPopupSidebar--hidden"),
                e(".ProjectItemInfo", n).removeClass("ProjectItemInfo--opened")
            },
            onTouchMove: function(t) {
                if (app.settings.isTablet) {
                    var n = e(t.currentTarget),
                        s = this.scrollY - t.originalEvent.touches.item(0).clientY;
                    (s < 0 && n.scrollTop() <= 0 || s > 0 && n.scrollTop() + n.height() >= n[0].scrollHeight) && t.preventDefault(),
                    this.scrollY = t.originalEvent.touches.item(0).clientY
                }
            },
            close: function() {
                s.history.navigate(this.rootUrl, {
                    trigger: "true"
                })
            },
            sharePinterest: function() {
                if (this.currentProject) {
                    var t = this.currentProject.image;
                    0 != t.indexOf("http") && (t = window.location.origin + t);
                    var e = "http://pinterest.com/pin/create/button/?NaN" + encodeURIComponent(window.location.href) + "&media=" + encodeURIComponent(t) + "&description=" + encodeURIComponent("Shantell Martin — Work: " + this.currentProject.title.replace(/\*/g, " "));
                    window.open(e, "sharer", "width=626,height=436,toolbar=0,status=0")
                }
            },
            shareFacebook: function(t) {
                var e = "http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
                window.open(e, "sharer", "width=626,height=436,toolbar=0,status=0")
            },
            shareTwitter: function(t) {
                if (this.currentProject) {
                    var e = "https://twitter.com/share?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Shantell Martin — Work: " + this.currentProject.title.replace(/\*/g, " "));
                    window.open(e, "sharer", "width=626,height=436,toolbar=0,status=0")
                }
            },
            shareTumblr: function() {
                if (this.currentProject) {
                    var t = "http://www.tumblr.com/share/link?NaN" + encodeURIComponent(window.location.href) + "&name=" + encodeURIComponent("Shantell Martin — Work: " + this.currentProject.title.replace(/\*/g, " ")) + "&description=" + encodeURIComponent(this.currentProject.teaser);
                    window.open(t, "sharer", "width=626,height=436,toolbar=0,status=0")
                }
            },
            updateNextPanel: function() {
                this.$(".ProjectItemNext:not(.proceeded)").each(function(t, n) {
                    var s,
                        o = e(n),
                        r = o.closest(".ProjectItem"),
                        c = r.attr("data-id") - 0,
                        i = a.findWhere(this.data, {
                            uniqId: c
                        }),
                        l = a.findIndex(this.data, i),
                        p = l == this.data.length - 1;
                    o.toggle(!p).addClass("proceeded"),
                    p || (s = app.utils.upperExcludeFirst(this.data[l + 1].title).replace(/\*/g, " "), e(".ProjectItemNextTitle", o).text(s))
                }.bind(this))
            },
            renderProject: function(t) {
                var n = e(l.render({
                    projectItem: t
                }));
                return n.find(".ProjectItemBlocks").hide(), n
            },
            showNextProjectMobile: function(t) {
                if (!app.settings.isDesktop) {
                    var n = e(t.currentTarget);
                    if (!n.hasClass("inactive")) {
                        var s = n.closest(".ProjectItem"),
                            o = s.attr("data-id") - 0,
                            r = a.findWhere(this.data, {
                                uniqId: o
                            }),
                            c = a.findIndex(this.data, r),
                            i = c == this.data.length - 1,
                            l = app.settings.isMobile ? e("html, body") : this.$(".ProjectPopupContent");
                        if (n.addClass("inactive"), !i) {
                            var p = this.renderProject(this.data[c + 1]);
                            p.appendTo(this.$content),
                            this.fixScrollBars(),
                            this.adoptTitleAndTeaser(),
                            this.showCoverLoader(),
                            l.animate({
                                scrollTop: "+=" + (e(window)[0].innerHeight - (app.settings.isMobile ? 20 : -10)) + "px"
                            }, 400, function() {
                                p.find(".ProjectItemBlocks").show(),
                                this.initMapForProjects(),
                                this.fixTextLinks(),
                                this.updateNextPanel(),
                                this.fixVideoAspect()
                            }.bind(this))
                        }
                    }
                }
            },
            recalcOnScroll: function() {
                if (this.data && !this.preventScrollHandle) {
                    var t,
                        n,
                        o,
                        r,
                        c,
                        i = [],
                        l = (e(window).width(), e(window).height()),
                        p = app.settings.isMobile ? e(window) : this.$(".ProjectPopupContent"),
                        u = p[0],
                        d = p.scrollTop();
                    if (this.$(".ProjectItem").each(function(t, n) {
                        i.push({
                            $el: e(n),
                            top: e(n).position().top,
                            url: e(n).attr("data-url"),
                            id: e(n).attr("data-id") - 0,
                            link: e(n).attr("data-link")
                        })
                    }), this.projectsPos = i, i.length) {
                        app.settings.isMobile && this.$(".ProjectPopupTitle").removeClass("visible");
                        for (var h = !1, f = this.projectsPos.length - 1; f >= 0; f--)
                            if (app.settings.isMobile && !h && this.projectsPos[f].top - d <= 30 && (n = a.findWhere(this.data, {
                                uniqId: this.projectsPos[f].id
                            }), this.$(".ProjectPopupTitle").text(n.title.replace(/\*/g, " ")), this.$(".ProjectPopupTitle").addClass("visible"), h = !0), this.projectsPos[f].top + (app.settings.isMobile ? -d : 0) < l / 2) {
                                t = this.projectsPos[f].$el,
                                n = a.findWhere(this.data, {
                                    uniqId: this.projectsPos[f].id
                                }),
                                o = a.findIndex(this.data, n),
                                r = 0 == o,
                                c = o == this.data.length - 1;
                                break
                            }
                        this.currentProject = n,
                        this.$(".ProjectPopupPrev").toggleClass("hidden", r).attr("data-url", !r && this.data[o - 1].url).attr("data-id", !r && this.data[o - 1].uniqId).attr("href", !r && this.data[o - 1].link),
                        this.$(".ProjectPopupNext").toggleClass("hidden", c).attr("data-url", !c && this.data[o + 1].url).attr("data-id", !c && this.data[o + 1].uniqId).attr("href", !c && this.data[o + 1].link),
                        s.history.navigate(n.link, {
                            trigger: !1
                        }),
                        this.setTitle("Work: " + n.title.replace(/\*/g, " ")),
                        app.settings.isDesktop && !c && u.scrollHeight - u.scrollTop == u.clientHeight && (clearTimeout(this.addProjectTimeout), this.addProjectTimeout = setTimeout(function() {
                            this.preventScrollHandle = !0,
                            p.css("pointer-events", "none");
                            var t = this.renderProject(this.data[o + 1]);
                            t.appendTo(this.$content),
                            this.fixScrollBars(),
                            this.adoptTitleAndTeaser(),
                            this.showCoverLoader(),
                            p.animate({
                                scrollTop: "+=200px"
                            }, 300, function() {
                                t.find(".ProjectItemBlocks").show(),
                                this.initMapForProjects(),
                                this.fixTextLinks(),
                                this.updateNextPanel(),
                                this.fixVideoAspect(),
                                this.preventScrollHandle = !1,
                                p.css("pointer-events", "")
                            }.bind(this))
                        }.bind(this), app.settings.isDesktop ? 300 : 500))
                    }
                }
            },
            showCoverLoader: function() {
                var t = app.settings.isMobile ? ".ProjectItemImageMobileCover" : ".ProjectItemHeaderImageWrapper";
                this.$(t + ":not(.loading-handled)").each(function(t, n) {
                    var s,
                        a = e(n),
                        o = new Image;
                    s = app.settings.isMobile ? a.find("img").prop("src") : a.find(".ProjectItemHeaderImage").css("background-image").replace(/^url\("?/i, "").replace(/"?\)$/i, ""),
                    o.onload = function() {
                        a.addClass("loaded"),
                        o.onload = null,
                        o = null
                    },
                    o.src = s,
                    a.addClass("loading-handled")
                })
            },
            onScroll: function() {
                this.fixScrollPosition(),
                this.recalcOnScroll.__debounced()
            },
            fixScrollPosition: function() {
                if (app.settings.isTablet && this.$content) {
                    var t = this.$content[0],
                        e = t.scrollTop,
                        n = t.scrollHeight,
                        s = e + t.offsetHeight;
                    0 === e ? t.scrollTop = 1 : s === n && (t.scrollTop = e - 1)
                }
            },
            onInnerProjectLinkClick: function(t) {
                if (2 != t.which && !t.metaKey && !t.ctrlKey && !this.preventScrollHandle) {
                    t.preventDefault();
                    var n = e(t.currentTarget),
                        s = (n.attr("href"), n.attr("data-url"), n.attr("data-id") - 0),
                        o = this.$(".ProjectPopupContent"),
                        r = app.settings.isMobile ? e("html") : o,
                        c = this.$('.ProjectItem[data-id="' + s + '"]');
                    if (c.length) {
                        this.preventScrollHandle = !0,
                        o.css("pointer-events", "none");
                        var i = r.scrollTop() + c.position().top;
                        r.animate({
                            scrollTop: i
                        }, 800, function() {
                            o.css("pointer-events", ""),
                            this.preventScrollHandle = !1,
                            this.recalcOnScroll()
                        }.bind(this))
                    } else {
                        var l = this.renderProject(a.findWhere(this.data, {
                                uniqId: s
                            })),
                            p = this.$(".ProjectItem");
                        this.preventScrollHandle = !0,
                        o.css("pointer-events", "none"),
                        l.css({
                            position: "absolute",
                            top: r.scrollTop(),
                            left: 0,
                            transition: "0.3s all ease-in-out",
                            opacity: 0,
                            transform: "translateY(40px)",
                            "z-index": 1
                        }).prependTo(o),
                        this.fixScrollBars(),
                        this.adoptTitleAndTeaser(),
                        this.showCoverLoader(),
                        setTimeout(function() {
                            l.css({
                                opacity: "",
                                transform: ""
                            })
                        }.bind(this), 0),
                        setTimeout(function() {
                            p.remove(),
                            l.css({
                                position: "",
                                top: "",
                                left: "",
                                transition: "",
                                "z-index": ""
                            }),
                            o.css("pointer-events", ""),
                            this.preventScrollHandle = !1,
                            r.scrollTop(0),
                            l.find(".ProjectItemBlocks").show(),
                            this.initMapForProjects(),
                            this.fixTextLinks(),
                            this.fixVideoAspect(),
                            this.updateNextPanel(),
                            this.recalcOnScroll()
                        }.bind(this), 400)
                    }
                }
            },
            onCityMouseEnter: function(t) {
                if (app.settings.isDesktop) {
                    var n = e(t.currentTarget).closest(".ProjectItemHeader");
                    n.addClass("ProjectItemHeader--map"),
                    app.views.topNav.hide()
                }
            },
            onCityMouseLeave: function(t) {
                if (app.settings.isDesktop) {
                    var n = e(t.currentTarget).closest(".ProjectItemHeader");
                    n.removeClass("ProjectItemHeader--map"),
                    app.views.topNav.show()
                }
            },
            onCityMouseClick: function(t) {
                if (app.settings.isTablet) {
                    var n = e(t.currentTarget).closest(".ProjectItemHeader");
                    n.toggleClass("ProjectItemHeader--map"),
                    n.hasClass("ProjectItemHeader--map") ? app.views.topNav.hide() : app.views.topNav.show()
                }
                if (app.settings.isMobile) {
                    var s = e(t.currentTarget).closest(".ProjectItem");
                    e(".ProjectItemInfo", s).addClass("ProjectItemInfo--opened");
                    var o = a.findWhere(this.data, {
                            uniqId: s.attr("data-id") - 0
                        }),
                        r = {
                            center: {
                                lat: o.coordsLat,
                                lng: o.coordsLng
                            },
                            zoom: 14,
                            maxZoom: 22,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            mapTypeControl: !1,
                            scrollwheel: !1,
                            zoomControl: !1,
                            streetViewControl: !1
                        };
                    this.map = new google.maps.Map(e(".ProjectItemInfo .Map", s)[0], r),
                    this.map.mapTypes.set("map_style", c),
                    this.map.setMapTypeId("map_style");
                    var i = {
                        lat: o.coordsLat,
                        lng: o.coordsLng
                    };
                    this.map.setCenter(i),
                    this.marker && this.marker.setMap(null),
                    this.marker = new google.maps.Marker({
                        position: i,
                        map: this.map,
                        icon: {
                            url: "media/mappin.png",
                            scaledSize: new google.maps.Size(40, 64)
                        }
                    }),
                    e(".ProjectItemInfo .ProjectPlace", s).text(o.target),
                    e(".ProjectItemInfo .ProjectAddr", s).text(o.fullAddress),
                    e(".ProjectItemInfo .ProjectAddr", s).attr("href", o.coordsLink),
                    this.$(".ProjectPopupSidebar").addClass("ProjectPopupSidebar--hidden")
                }
            },
            initMapForProjects: function() {
                app.settings.isMobile || this.$(".ProjectItem").each(function(t, n) {
                    var s = e(".ProjectItemHeaderMapWrapper", n),
                        a = s.attr("data-lat") - 0,
                        o = s.attr("data-lng") - 0;
                    if (!s.data("map")) {
                        var r = {
                                center: {
                                    lat: a,
                                    lng: o
                                },
                                zoom: 14,
                                maxZoom: 22,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                mapTypeControl: !1,
                                scrollwheel: !1,
                                zoomControl: !1,
                                streetViewControl: !1
                            },
                            i = new google.maps.Map(s[0], r);
                        i.mapTypes.set("map_style", c),
                        i.setMapTypeId("map_style");
                        var l = {
                            lat: a,
                            lng: o
                        };
                        i.setCenter(l);
                        var p = new google.maps.Marker({
                            position: l,
                            map: i,
                            icon: {
                                url: "media/mappin.png",
                                scaledSize: new google.maps.Size(40, 64)
                            }
                        });
                        s.data("map", i),
                        s.data("marker", p)
                    }
                }.bind(this))
            },
            fixTextLinks: function() {
                this.$(".ProjectItemText a:not(.fixed-target)").attr("target", "_blank").addClass("fixed-target")
            },
            fixVideoAspect: function() {
                this.$(".ProjectItemVideoWrapper:not(.fixed-aspect)").each(function() {
                    var t = e("iframe", this),
                        n = (t.attr("width") || 640) - 0,
                        s = (t.attr("height") || 360) - 0;
                    e(this).css("padding-top", 100 * s / n + "%").addClass("fixed-aspect")
                })
            },
            onResize: function() {
                this.adoptTitleAndTeaser({
                    updateAll: !0
                })
            },
            adoptTitleAndTeaser: function(t) {
                if (t = t || {}, clearTimeout(this.adoptTitleTimeout), !window.app.komissarLetterSizes) {
                    var n = "  !\"#$%&'()*+,-./0123456789:;<=>?@[\\]^_`aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ{|}~«»‘’“”",
                        s = 'style="font-family: Kommissar; font-weight: 900; font-size: 200px; letter-spacing: 0; pointer-events:none; visibility: hidden; position: absolute; top: -1000px; left: -1000px; width: 0px; height: 0px"',
                        o = e("<div " + s + '><span style="">' + n.split("").join("</span><span>") + "</span></div>"),
                        r = {};
                    e("body").append(o),
                    e("span", o).each(function(t, n) {
                        r[e(n).text()] = e(n).width()
                    }),
                    o.remove(),
                    r.W > 130 ? (this.adoptTitleRepeatCount = (this.adoptTitleRepeatCount || 0) + 1, console.log("get font size iteration: ", this.adoptTitleRepeatCount), this.adoptTitleTimeout = setTimeout(function() {
                        this.adoptTitleAndTeaser({
                            updateAll: !0
                        })
                    }.bind(this), 10 * this.adoptTitleRepeatCount)) : window.app.komissarLetterSizes = r
                }
                var c;
                this.$(".ProjectItemTitle" + (t.updateAll ? "" : ":not(.font-adopted)")).each(function() {
                    function t(t) {
                        var e,
                            n = t.split(" "),
                            s = 0,
                            o = window.app.komissarLetterSizes,
                            r = app.settings.isMobile ? window.innerHeight < window.innerWidth ? 39 : 62 : 140;
                        return o ? (a.each(n, function(t, e) {
                            var n = t.split(""),
                                r = 0;
                            a.each(n, function(t) {
                                r += o[t] || o.m
                            }),
                            s < r && (s = r)
                        }), e = Math.floor(200 * c / s) - 1, e = Math.min(e, r)) : r
                    }
                    var n = e(this).text();
                    c = c || e(this).width(),
                    e(this).hasClass("font-adopted") || (n = n.replace(/(^| )(\W)($| )/g, " $2 "), n = n.replace(/(^| )(\w{1,2}) /g, "$1$2 "), n.split(" ").length > 3 && (n = n.replace(/(^| )(\w{3,3}) /g, "$1$2 ")), n.split(" ").length > 3 && (n = n.replace(/(^| )(\w{4,4}) /g, "$1$2 ")), n.split(" ").length > 3 && (n = n.replace(/(^| )(\w{5,5}) /g, "$1$2 ")), n = n.replace(/^ +/g, ""), n = n.replace(/ +$/g, ""), n = n.replace(/( | )/g, " $1"), e(this).html(n)),
                    e(this).css("font-size", t(n) + "px").addClass("font-adopted")
                }),
                this.$(".ProjectItemTeaser:not(.nbsp-pasted)").each(function() {
                    var t = e(this).html(),
                        n = t.split(" "),
                        s = n.length;
                    s > 1 && (n[s - 2] += " " + n[s - 1], n.length--, e(this).html(n.join(" "))),
                    e(this).addClass("nbsp-pasted")
                })
            },
            renderData: function() {
                var t = a.findWhere(this.data, {
                    url: this.options.url
                });
                return {
                    projectItem: t
                }
            },
            render: function() {
                var t = o.prototype.render.call(this);
                return t
            },
            activate: function(t) {
                return o.prototype.activate.call(this, t).then(function() {
                    this.$content = this.$(".ProjectPopupContent");
                    var t = app.settings.isMobile ? e(window) : this.$content;
                    t.off("scroll", this.onScroll),
                    t.on("scroll", this.onScroll),
                    e(window).on("resize", this.onResize),
                    this.initMapForProjects(),
                    this.fixTextLinks(),
                    this.fixVideoAspect(),
                    this.adoptTitleAndTeaser(),
                    this.updateNextPanel(),
                    this.recalcOnScroll(),
                    this.showCoverLoader(),
                    this.fixScrollPosition(),
                    this.options.inAnimated || this.options.server || (this.fixScrollBars(), this.$el.addClass("ProjectPopup--visible"), this.$el.addClass("ProjectPopup--scroll"), e("html").addClass("HideGlobalScroll"), this.$(".ProjectPopupContent").focus(), this.fixScrollPosition())
                }.bind(this))
            },
            fixScrollBars: function() {
                app.settings.isMobile || (this.$(".ProjectPopupSidebar").css("right", app.utils.getScrollbarWidth()), this.$(".ProjectItem, .ProjectPopupBG").css("width", "calc(100vw - " + (120 + app.utils.getScrollbarWidth()) + "px)"))
            },
            mobileTransformPopupToGlobalScroll: function() {
                if (app.settings.isMobile) {
                    this.savedScroll = e(window).scrollTop();
                    var t = [],
                        n = [],
                        s = e(window).scrollTop();
                    e(".Section-main, .TopNav, .Footer").each(function(s, a) {
                        var o = e(a);
                        t.push(o),
                        n.push(o.offset().top)
                    }),
                    a.each(t, function(t, e) {
                        t.css("top", n[e] - s).addClass("FixedOnPopup")
                    }),
                    this.$el.addClass("global-scroll"),
                    e(window).scrollTop(0)
                }
            },
            mobileTransformPopupToLocalScroll: function() {
                app.settings.isMobile && (e(".Section-main, .TopNav, .Footer").css("top", "").removeClass("FixedOnPopup"), this.$el.removeClass("global-scroll"), e(window).scrollTop(this.savedScroll))
            },
            playIn: function(t) {
                var n = this;
                return this.fixScrollBars(), this.options.inAnimated ? new Promise(function(s) {
                    n.$el.outerHeight(),
                    n.$el.addClass("ProjectPopup--visible"),
                    n.mobileTransformPopupToGlobalScroll(),
                    n.fixScrollPosition(),
                    setTimeout(function() {
                        n.$el.addClass("ProjectPopup--scroll"),
                        e("html").addClass("HideGlobalScroll"),
                        this.$(".ProjectPopupContent").focus(),
                        s()
                    }.bind(this), t.duration + 100)
                }) : r.createEmptyPromise()
            },
            playOut: function(t) {
                var n = this,
                    s = app.settings.isMobile ? e(window) : this.$content;
                return s.off("scroll", this.onScroll), new Promise(function(s) {
                    n.$el.removeClass("ProjectPopup--visible"),
                    n.$el.removeClass("ProjectPopup--scroll"),
                    e("html").removeClass("HideGlobalScroll"),
                    setTimeout(function() {
                        n.mobileTransformPopupToLocalScroll(),
                        s()
                    }.bind(this), t.duration + 100)
                })
            },
            viewsRegistration: function() {},
            destroy: function() {
                return e(window).off("resize", this.onResize), clearTimeout(this.adoptTitleTimeout), this.marker && this.marker.setMap(null), e("html").removeClass("HideGlobalScroll"), o.prototype.destroy.call(this)
            },
            deactivate: function(t) {
                return clearTimeout(this.adoptTitleTimeout), e(window).off("resize", this.onResize), e("html").removeClass("HideGlobalScroll"), this.mobileTransformPopupToLocalScroll(), o.prototype.deactivate.call(this, t)
            }
        })
    }).call(e, n(4))
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/utils/macros.jinja"] = n(40),
    o["front/pages/Projects/Project-inner.jinja"] = n(75);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Projects/ProjectPopup.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/pages/Projects/ProjectPopup.jinja", !1, function(l, p) {
                        return l ? void a(l) : void p.getExported(function(l, p) {
                            return l ? void a(l) : (e.setVariable("macros", p), c += '\n<div class="ProjectPopup">\n\t<div class="ProjectPopupBG"></div>\n\n\t<div class="ProjectPopupContent" tabindex="-1">\n\t\t', void t.getTemplate("front/pages/Projects/Project-inner.jinja", !1, "assets/app/front/pages/Projects/ProjectPopup.jinja", null, function(l, u) {
                                return l ? void a(l) : void u.render(e.getVariables(), n, function(l, u) {
                                    return l ? void a(l) : (c += u, c += '\n\t</div>\n\n\t<div class="ProjectPopupSidebar">\n\t\t<div class="ProjectPopupClose">\n\t\t\t<div class="l1"></div>\n\t\t\t<div class="l2"></div>\n\t\t</div>\n\n\t\t', o = 14, r = 14, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '<div class="ProjectPopupTitle"></div>'), c += '\n\n\t\t<div class="ProjectPopupShare">\n\t\t\t', o = 17, r = 19, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += "<span>Share</span>"), c += "\n\t\t\t", o = 18, r = 15, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '<div class="ProjectPopupShareIcon">', c += s.suppressValue((o = 18, r = 82, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["share", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += "</div>"), c += '\n\t\t\t<div class="ProjectPopupShareDropdown">\n\t\t\t\t<div class="ProjectPopupShareDropdownPinterest">', c += s.suppressValue((o = 20, r = 74, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["pinterest", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += '</div>\n\t\t\t\t<div class="ProjectPopupShareDropdownFacebook">', c += s.suppressValue((o = 21, r = 73, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["facebook", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += '</div>\n\t\t\t\t<div class="ProjectPopupShareDropdownTwitter">', c += s.suppressValue((o = 22, r = 72, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["twitter", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += '</div>\n\t\t\t\t<div class="ProjectPopupShareDropdownTumblr">', c += s.suppressValue((o = 23, r = 71, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["tumblr", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += "</div>\n\t\t\t</div>\n\t\t</div>\n\t\t", o = 26, r = 19, s.callWrap(s.contextOrFrameLookup(e, n, "isDesktop"), "isDesktop", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += '<div class="ProjectPopupShareOverlay"></div>'), c += "\n\n\t\t", o = 28, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += '\n\t\t\t<a class="ProjectPopupNext InnerProjectLink hidden">', c += s.suppressValue((o = 29, r = 77, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["next", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += '</a>\n\t\t\t<a class="ProjectPopupPrev InnerProjectLink hidden">', c += s.suppressValue((o = 30, r = 77, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["prev", s.makeKeywordArgs({
                                        caller: function() {
                                            var t = s.makeMacro([], [], function(t) {
                                                n = n.push(!0),
                                                t = t || {},
                                                t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                                var e = "";
                                                return n = n.pop(), new s.SafeString(e)
                                            });
                                            return t
                                        }()
                                    })])), t.opts.autoescape), c += "</a>\n\t\t"), c += "\n\t</div>\n</div>", void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                                })
                            }))
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Projects/ProjectPopup.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/utils/macros.jinja"] = n(40);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Projects/Project-inner.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/pages/Projects/Project-inner.jinja", !1, function(l, p) {
                        return l ? void a(l) : void p.getExported(function(l, p) {
                            if (l)
                                return void a(l);
                            e.setVariable("macros", p),
                            c += '\n<div class="ProjectItem" data-link="',
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "link"), t.opts.autoescape),
                            c += '" data-url="',
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "url"), t.opts.autoescape),
                            c += '" data-id="',
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "uniqId"), t.opts.autoescape),
                            c += '">\n\n    ',
                            o = 3,
                            r = 16,
                            s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && (c += '\n        <div class="ProjectItemInfo">\n            <div class="ProjectItemMapClose"><div class="l1"></div><div class="l2"></div></div>\n            <div class="ProjectItemMap">\n                <div class="Map"></div>\n                <div class="ProjectItemMapProject">\n                    <div class="ProjectPlace"></div>\n                    <a class="ProjectAddr" target="_blank"></a>\n                </div>\n            </div>\n        </div>\n    '),
                            c += '\n\n    <div class="ProjectItemHeader">\n        ',
                            o = 17,
                            r = 24,
                            s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += '\n            <div class="ProjectItemHeaderLeft">\n                 ', s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "image") && (c += '\n                    <img class="ProjectItemImagePreloadOrder" src="', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "image"), t.opts.autoescape), c += '">\n                    <div class="ProjectItemHeaderImageWrapper">\n                        <div class="ProjectItemHeaderImage" style="background-image:url(', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "image"), t.opts.autoescape), c += ')"></div>\n                        <div class="ImageLoader ImageLoader--OnDarkBackground">\n                            <div class="ImageLoaderWhiteCircle"></div>\n                            <div class="ImageLoaderBlackCircle"></div>\n                        </div>\n                    </div>\n                '), c += '\n                <div class="ProjectItemHeaderMap">\n                    <div class="ProjectItemHeaderMapWrapper" data-lat="', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "coordsLat"), t.opts.autoescape), c += '" data-lng="', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "coordsLng"), t.opts.autoescape), c += '"></div>\n                    <div class="ProjectItemHeaderMapPlace">', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "target"), t.opts.autoescape), c += '</div>\n                    <div class="ProjectItemHeaderMapAddress">', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "fullAddress"), t.opts.autoescape), c += "</div>\n                </div>\n            </div>\n        "),
                            c += '\n\n        <div class="ProjectItemHeaderRight">\n            <div class="ProjectItemHeaderRightTable">\n                <div class="ProjectItemHeaderCenteringWrapper">\n                    <h1 class="ProjectItemTitle">',
                            c += s.suppressValue((o = 40, r = 67, s.callWrap(s.contextOrFrameLookup(e, n, "upperExcludeFirst"), "upperExcludeFirst", e, [s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "title")])), t.opts.autoescape),
                            c += '</h1>\n                    <p class="ProjectItemTeaser">',
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "teaser"), t.opts.autoescape),
                            c += '</p>\n                </div>\n            </div>\n            <div class="ProjectItemCityWrapper ',
                            s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "coordsLat") || (c += " inactive "),
                            c += '">\n                <div class="ProjectItemCityPin">',
                            c += s.suppressValue((o = 45, r = 69, s.callWrap(s.memberLookup(p, "svgSprite"), 'macros["svgSprite"]', e, ["pin", s.makeKeywordArgs({
                                caller: function() {
                                    var t = s.makeMacro([], [], function(t) {
                                        n = n.push(!0),
                                        t = t || {},
                                        t.hasOwnProperty("caller") && n.set("caller", t.caller);
                                        var e = "";
                                        return n = n.pop(), new s.SafeString(e)
                                    });
                                    return t
                                }()
                            })])), t.opts.autoescape),
                            c += '</div>\n                <span class="ProjectItemCity">',
                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "city"), t.opts.autoescape),
                            c += '</span><br>\n                <span class="ProjectItemYear">',
                            s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "year") && (c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "year"), t.opts.autoescape)),
                            c += "</span>\n            </div>\n        </div>\n    </div>\n\n    ",
                            o = 52,
                            r = 16,
                            s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) && s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "imageSmall") && (c += '\n        <div class="ProjectItemImagePlaceholder ProjectItemImageMobileCover" style="padding-top: ', c += s.suppressValue(100 * s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "imageHeight") / s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "imageWidth"), t.opts.autoescape), c += '%">\n            <img src="', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "imageSmall"), t.opts.autoescape), c += '">\n            <div class="ImageLoader">\n                <div class="ImageLoaderWhiteCircle"></div>\n                <div class="ImageLoaderBlackCircle"></div>\n            </div>\n        </div>\n    '),
                            c += '\n\n    <div class="ProjectItemBlocks">\n\n        ';
                            var u;
                            u = 0,
                            n.set("relatedPrinted", u, !0),
                            n.topLevel && e.setVariable("relatedPrinted", u),
                            n.topLevel && e.addExport("relatedPrinted", u),
                            c += "\n        ",
                            n = n.push();
                            var d = s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "blocks");
                            if (d)
                                for (var h = d.length, f = 0; f < d.length; f++) {
                                    var v = d[f];
                                    if (n.set("block", v), n.set("loop.index", f + 1), n.set("loop.index0", f), n.set("loop.revindex", h - f), n.set("loop.revindex0", h - f - 1), n.set("loop.first", 0 === f), n.set("loop.last", f === h - 1), n.set("loop.length", h), c += "\n            ", "Text" == s.memberLookup(v, "tp")) {
                                        c += "\n                ";
                                        var m;
                                        if (m = t.getFilter("length").call(e, s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "related")) && 0 == s.contextOrFrameLookup(e, n, "relatedPrinted") && (o = 67, r = 101, !s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")])), n.set("hasRelated", m, !0), n.topLevel && e.setVariable("hasRelated", m), n.topLevel && e.addExport("hasRelated", m), c += '\n                <div class="ProjectItemText clearfix ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && (c += "LastItem"), c += " ", s.contextOrFrameLookup(e, n, "hasRelated") || (c += "NoRelated"), c += '">\n                    <div class="ProjectItemTextColumnLeft">', c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(v, "text")), t.opts.autoescape), c += '</div>\n                    <div class="ProjectItemTextColumnRight">', c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(v, "text2")), t.opts.autoescape), c += "</div>\n                    ", s.contextOrFrameLookup(e, n, "hasRelated")) {
                                            c += "\n                    ";
                                            var g;
                                            g = 1,
                                            n.set("relatedPrinted", g, !0),
                                            n.topLevel && e.setVariable("relatedPrinted", g),
                                            n.topLevel && e.addExport("relatedPrinted", g),
                                            c += '\n                    <div class="ProjectItemTextRelated">\n                        <h2>More Like This:</h2>\n                        ',
                                            n = n.push();
                                            var w = s.memberLookup(s.contextOrFrameLookup(e, n, "projectItem"), "related");
                                            if (w)
                                                for (var y = w.length, b = 0; b < w.length; b++) {
                                                    var k = w[b];
                                                    n.set("r", k),
                                                    n.set("loop.index", b + 1),
                                                    n.set("loop.index0", b),
                                                    n.set("loop.revindex", y - b),
                                                    n.set("loop.revindex0", y - b - 1),
                                                    n.set("loop.first", 0 === b),
                                                    n.set("loop.last", b === y - 1),
                                                    n.set("loop.length", y),
                                                    c += '\n                            <a href="',
                                                    c += s.suppressValue(s.memberLookup(k, "link"), t.opts.autoescape),
                                                    c += '" class="InnerProjectLink" data-url="',
                                                    c += s.suppressValue(s.memberLookup(k, "url"), t.opts.autoescape),
                                                    c += '" data-id="',
                                                    c += s.suppressValue(s.memberLookup(k, "uniqId"), t.opts.autoescape),
                                                    c += '">\n                                <img class="ProjectItemImagePreloadOrder" src="',
                                                    c += s.suppressValue(s.memberLookup(k, "previewImage"), t.opts.autoescape),
                                                    c += '">\n                                <div class="ProjectItemTextRelatedFirstLetter"><span class="letter-hover" style="background-image:url(',
                                                    c += s.suppressValue(s.memberLookup(k, "previewImage"), t.opts.autoescape),
                                                    c += ')">',
                                                    c += s.suppressValue(s.memberLookup(k, "firstLetter"), t.opts.autoescape),
                                                    c += '</span><span class="letter-normal">',
                                                    c += s.suppressValue(s.memberLookup(k, "firstLetter"), t.opts.autoescape),
                                                    c += '</span></div>\n                                <div class="ProjectItemTextRelatedTitle">',
                                                    c += s.suppressValue(s.memberLookup(k, "title"), t.opts.autoescape),
                                                    c += "</div>\n                            </a>\n                        "
                                                }
                                            n = n.pop(),
                                            c += "\n                    </div>\n                    "
                                        }
                                        c += "\n                </div>\n            "
                                    } else
                                        "Img2" == s.memberLookup(v, "tp") ? (c += "\n                ", o = 86, r = 28, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) ? (c += '\n                    <div class="ProjectItemImgOne ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && (c += "LastItem"), c += '">\n                        <div class="ProjectItemImagePlaceholder" style="padding-top: ', c += s.suppressValue(100 * s.memberLookup(v, "imageHeight") / s.memberLookup(v, "imageWidth"), t.opts.autoescape), c += '%">\n                            <img src="', c += s.suppressValue(s.memberLookup(v, "imageSmall"), t.opts.autoescape), c += '">\n                        </div>\n                    </div>\n                ') : (c += '\n                    <div class="ProjectItemImgOne ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && (c += "LastItem"), c += '">\n                        <div class="ProjectItemImagePlaceholder" style="padding-top: ', c += s.suppressValue(100 * s.memberLookup(v, "imageHeight") / s.memberLookup(v, "imageWidth"), t.opts.autoescape), c += '%">\n                            <img src="', c += s.suppressValue(s.memberLookup(v, "image"), t.opts.autoescape), c += '">\n                        </div>\n                    </div>\n                '), c += "\n            ") : "Img1" == s.memberLookup(v, "tp") ? (c += "\n                ", o = 100, r = 28, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) ? (c += '\n                    <div class="ProjectItemImgOne ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && (c += "LastItem"), c += '">\n                        <div class="ProjectItemImagePlaceholder" style="padding-top: ', c += s.suppressValue(100 * s.memberLookup(v, "imageHeight") / s.memberLookup(v, "imageWidth"), t.opts.autoescape), c += '%">\n                            <img src="', c += s.suppressValue(s.memberLookup(v, "imageSmall"), t.opts.autoescape), c += '">\n                        </div>\n                    </div>\n                    <div class="ProjectItemImgOne ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && (c += "LastItem"), c += '">\n                        <div class="ProjectItemImagePlaceholder" style="padding-top: ', c += s.suppressValue(100 * s.memberLookup(v, "image2Height") / s.memberLookup(v, "image2Width"), t.opts.autoescape), c += '%">\n                            <img src="', c += s.suppressValue(s.memberLookup(v, "image2Small"), t.opts.autoescape), c += '">\n                        </div>\n                    </div>\n                ') : (c += "\n                    ", s.memberLookup(v, "imageWidth") / s.memberLookup(v, "imageHeight") > s.memberLookup(v, "image2Width") / s.memberLookup(v, "image2Height") ? (c += '\n                        <div class="ProjectItemImgTwo ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && (c += "LastItem"), c += '"><div class="ProjectItemImgTwoWrapper clearfix"><div class="ProjectItemImagePlaceholderWrapper" style="float:left"><div class="ProjectItemImagePlaceholder" style="padding-top: ', c += s.suppressValue(100 * s.memberLookup(v, "imageHeight") / s.memberLookup(v, "imageWidth"), t.opts.autoescape), c += '%"><img src="', c += s.suppressValue(s.memberLookup(v, "imageMain"), t.opts.autoescape), c += '"></div></div><span style="right: 0; background-image: url(', c += s.suppressValue(s.memberLookup(v, "image2Main"), t.opts.autoescape), c += ')"></span></div></div>\n                        <img class="ProjectItemImagePreloadOrder" src="', c += s.suppressValue(s.memberLookup(v, "image2"), t.opts.autoescape), c += '">\n                    ') : (c += '\n                        <img class="ProjectItemImagePreloadOrder" src="', c += s.suppressValue(s.memberLookup(v, "image"), t.opts.autoescape), c += '">\n                        <div class="ProjectItemImgTwo ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && (c += "LastItem"), c += '"><div class="ProjectItemImgTwoWrapper clearfix"><span style="left: 0; background-image: url(', c += s.suppressValue(s.memberLookup(v, "imageMain"), t.opts.autoescape), c += ')"></span><div class="ProjectItemImagePlaceholderWrapper" style="float:right"><div class="ProjectItemImagePlaceholder" style="padding-top: ', c += s.suppressValue(100 * s.memberLookup(v, "image2Height") / s.memberLookup(v, "image2Width"), t.opts.autoescape), c += '%"><img src="', c += s.suppressValue(s.memberLookup(v, "image2Main"), t.opts.autoescape), c += '"></div></div></div></div>\n                    '), c += "\n                "), c += "\n            ") : "Video" == s.memberLookup(v, "tp") && (c += '\n                <div class="ProjectItemVideo ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && (c += "LastItem"), c += '">\n                    <div class="ProjectItemVideoWrapper">', c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(v, "videoOembed")), t.opts.autoescape), c += "</div>\n                </div>\n            ");
                                    c += "\n        "
                                }
                            n = n.pop(),
                            c += '\n\n        <div class="ProjectItemNext">\n            <div class="ProjectItemNextCaption">Next</div>\n            <div class="ProjectItemNextTitle"></div>\n        </div>\n\n    </div>\n</div>\n',
                            i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Projects/Project-inner.jinja"], o)
  }, 17, 17, function(t, e, n) {
    (function(e) {
        var s = (n(26), n(22)),
            a = n(25),
            o = n(6),
            r = n(79);
        n(80),
        t.exports = a.extend({
            title: "Work",
            el: ".ProjectsSection",
            template: r,
            SHANTELLE_PARAMS: {
                state: "projects",
                left: 775 / 1440,
                top: -839 / 1440,
                width: 2114 / 1440,
                height: 4530 / 1440,
                angle: -9
            },
            events: {
                "click .ProjectsSidebarPoint": "onCategoryClick",
                "click .ProjectsQuickJumpPanelCategory": "onCategoryClick",
                "touchstart .ProjectsQuickJumpPanelScroll": "onTouchStart",
                "touchmove .ProjectsQuickJumpPanelScroll": "onTouchMove",
                "click .ProjectsQuickJumpPoints": "openQuickJump",
                "click .ProjectsQuickJumpPanelClose": "closeQuickJump"
            },
            initialize: function(t) {
                o.bindAll(this, "handleParalax", "recalcElementsPos"),
                this.recalcElementsPos.__throttled = o.throttle(this.recalcElementsPos, 1e3),
                a.prototype.initialize.call(this, t),
                this.showItemsOnScroll = !0,
                this.options.server || (this.apiUrl = "/api/projects/")
            },
            activate: function(t) {
                return e(window).on("scroll", this.handleParalax), app.views.topNav.changeColor("black"), this.recalcElementsPos(), this.options.server && this.handleParalax(), this.showImageLoader(), a.prototype.activate.call(this, t)
            },
            deactivate: function(t) {
                return e(window).off("scroll", this.handleParalax), a.prototype.deactivate.call(this, t)
            },
            showImageLoader: function() {
                this.$(".ProjectsListItem:not(.loading-handled)").each(function(t, n) {
                    var s = e(n),
                        a = s.find("img").prop("src"),
                        o = new Image;
                    o.onload = function() {
                        s.addClass("loaded"),
                        o.onload = null,
                        o = null
                    },
                    o.src = a,
                    s.addClass("loading-handled")
                })
            },
            render: function() {
                console.log("render projects section");
                var t = a.prototype.render.call(this);
                return this.options.inAnimated && this.$el.css({
                    opacity: 0
                }), this.showImageLoader(), t
            },
            onTouchStart: function(t) {
                app.settings.isDesktop || (this.scrollY = t.originalEvent.touches.item(0).clientY)
            },
            onTouchMove: function(t) {
                if (!app.settings.isDesktop) {
                    var n = e(t.currentTarget),
                        s = this.scrollY - t.originalEvent.touches.item(0).clientY;
                    (s < 0 && n.scrollTop() <= 0 || s > 0 && n.scrollTop() + n.height() >= n[0].scrollHeight) && t.preventDefault(),
                    this.scrollY = t.originalEvent.touches.item(0).clientY
                }
            },
            openQuickJump: function() {
                this.$(".ProjectsQuickJump").addClass("ProjectsQuickJump--opened")
            },
            closeQuickJump: function() {
                this.$(".ProjectsQuickJump").removeClass("ProjectsQuickJump--opened")
            },
            onCategoryClick: function(t) {
                this.closeQuickJump();
                var n = e(t.currentTarget).index();
                this.$(".ProjectsSidebar").attr("data-active", n),
                this.skipCategoryChangeOnScroll = !0,
                e("body, html").animate({
                    scrollTop: this.$(".ProjectsList .Category").eq(n).offset().top - 60
                }, 700, function() {
                    this.skipCategoryChangeOnScroll = !1
                }.bind(this))
            },
            playIn: function(t) {
                this.showItemsOnScroll = !1,
                this.recalcElementsPos(),
                this.handleParalax();
                var e = this;
                return this.options.inAnimated ? new Promise(function(n) {
                    e.$el.css({
                        opacity: 1
                    }),
                    app.els.$shantelle.animate({
                        opacity: 1
                    }, t.duration),
                    s.animateRolling({
                        tp: "in",
                        direction: "toright",
                        $item: e.$("h2").eq(0).find(".animate"),
                        duration: 300
                    }),
                    e.playInResolve = n,
                    e.playInTimeout = setTimeout(function() {
                        e.showItemsOnScroll = !0,
                        e.handleParalax(),
                        delete e.playInTimeout,
                        n()
                    }, 400)
                }) : s.createEmptyPromise()
            },
            playOut: function(t) {
                this.playInTimeout && (clearTimeout(this.playInTimeout), this.playInResolve && this.playInResolve(), delete this.playInTimeout, delete this.playInResolve),
                this.showItemsOnScroll = !1,
                console.log("playOut ProjectsSection");
                var e = this;
                return new Promise(function(n) {
                    app.els.$shantelle.animate({
                        opacity: 0
                    }, t.duration),
                    e.$el.animate({
                        opacity: 0
                    }, t.duration, function() {
                        app.els.$shantelle.stop(!0, !0),
                        n()
                    })
                })
            },
            recalcElementsPos: function() {
                if (!app.settings.isMobile) {
                    var t = [];
                    this.$(".ProjectsList .Category").each(function(n, s) {
                        t.push(e(s).offset().top)
                    }),
                    this.categoriesPos = t;
                    var n = [];
                    this.$(".ProjectsList .ProjectsListItem").each(function(t, s) {
                        n.push({
                            shown: !e(s).hasClass("invisible"),
                            $item: e(s),
                            top: e(s).offset().top
                        })
                    }),
                    this.itemsPos = n
                }
            },
            handleParalax: function() {
                var t = e(window).scrollTop(),
                    n = window.innerHeight;
                if (this.recalcElementsPos.__throttled(), !app.settings.isMobile && this.showItemsOnScroll)
                    for (var s = this.itemsPos.length - 1; s >= 0; s--)
                        !this.itemsPos[s].shown && this.itemsPos[s].top < t + n - 70 && (this.itemsPos[s].shown = !0, this.itemsPos[s].$item.removeClass("invisible"));
                if (!app.settings.isMobile && !this.skipCategoryChangeOnScroll)
                    for (var s = this.categoriesPos.length - 1; s >= 0; s--)
                        if (this.categoriesPos[s] - 60 < t + 1) {
                            this.$(".ProjectsSidebar").attr("data-active", s);
                            break
                        }
                if (!app.settings.isMobile) {
                    var a = e("body")[0];
                    this.$(".ProjectsSidebar").toggleClass("hide-on-bottom", a.scrollHeight - a.scrollTop < window.innerHeight + 700)
                }
                app.settings.isDesktop && app.els.$shantelle.css("transform", "translateY(" + -t / 4.5 + "px) rotate(-9deg)")
            }
        })
    }).call(e, n(4))
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/pages/Section/Section.jinja"] = n(29),
    o["front/utils/macros.jinja"] = n(40);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/pages/Projects/ProjectsSection.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/pages/Section/Section.jinja", !0, "assets/app/front/pages/Projects/ProjectsSection.jinja", !1, function(o, r) {
                        if (o)
                            return void a(o);
                        i = r;
                        for (var l in i.blocks)
                            e.addBlock(l, i.blocks[l]);
                        c += "\n",
                        t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/pages/Projects/ProjectsSection.jinja", !1, function(o, r) {
                            return o ? void a(o) : void r.getExported(function(o, r) {
                                return o ? void a(o) : (e.setVariable("macros", r), c += "\n\n", void (i ? function(t, e, n, s, a) {
                                    a("")
                                } : e.getBlock("title"))(t, e, n, s, function(o, r) {
                                    return o ? void a(o) : (c += r, c += "\n\n", void (i ? function(t, e, n, s, a) {
                                        a("")
                                    } : e.getBlock("meta_og_title"))(t, e, n, s, function(o, r) {
                                        return o ? void a(o) : (c += r, c += "\n\n", void (i ? function(t, e, n, s, a) {
                                            a("")
                                        } : e.getBlock("content"))(t, e, n, s, function(o, r) {
                                            return o ? void a(o) : (c += r, c += "\n", void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                                        }))
                                    }))
                                }))
                            })
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function e(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += " — Work",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function n(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += "Shantell Martin — Work",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function s(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    if (c += '\n    <div class="Section ProjectsSection">\n    ', "project" != s.contextOrFrameLookup(e, n, "CRAWLER")) {
                        if (c += '\n        <div class="Section-main">\n            ', o = 11, r = 28, !s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")])) {
                            c += '\n            <div class="ProjectsSidebar" data-active="0">\n                ',
                            n = n.push();
                            var i = s.contextOrFrameLookup(e, n, "categories");
                            if (i)
                                for (var l = i.length, p = 0; p < i.length; p++) {
                                    var u = i[p];
                                    n.set("category", u),
                                    n.set("loop.index", p + 1),
                                    n.set("loop.index0", p),
                                    n.set("loop.revindex", l - p),
                                    n.set("loop.revindex0", l - p - 1),
                                    n.set("loop.first", 0 === p),
                                    n.set("loop.last", p === l - 1),
                                    n.set("loop.length", l),
                                    c += "\n                    ",
                                    t.getFilter("length").call(e, s.memberLookup(u, "projects")) && (c += '\n                        <div class="ProjectsSidebarPoint"><span>', c += s.suppressValue(s.memberLookup(u, "title"), t.opts.autoescape), c += "</span></div>\n                    "),
                                    c += "\n                "
                                }
                            n = n.pop(),
                            c += '\n                <div class="ProjectsSidebarSelected"></div>\n            </div>\n            '
                        }
                        if (c += "\n\n            ", o = 22, r = 24, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")])) {
                            c += '\n            <div class="ProjectsQuickJump">\n                <div class="ProjectsQuickJumpPoints"><div class="p1"></div><div class="p2"></div><div class="p3"></div></div>\n                <div class="ProjectsQuickJumpPanel">\n                    <div class="ProjectsQuickJumpPanelClose"><div class="l1"></div><div class="l2"></div></div>\n                    <div class="ProjectsQuickJumpPanelScroll">\n                        ',
                            n = n.push();
                            var d = s.contextOrFrameLookup(e, n, "categories");
                            if (d)
                                for (var h = d.length, f = 0; f < d.length; f++) {
                                    var v = d[f];
                                    n.set("category", v),
                                    n.set("loop.index", f + 1),
                                    n.set("loop.index0", f),
                                    n.set("loop.revindex", h - f),
                                    n.set("loop.revindex0", h - f - 1),
                                    n.set("loop.first", 0 === f),
                                    n.set("loop.last", f === h - 1),
                                    n.set("loop.length", h),
                                    c += "\n                            ",
                                    t.getFilter("length").call(e, s.memberLookup(v, "projects")) && (c += '\n                                <div class="ProjectsQuickJumpPanelCategory">', c += s.suppressValue(s.memberLookup(v, "title"), t.opts.autoescape), c += "</div>\n                            "),
                                    c += "\n                        "
                                }
                            n = n.pop(),
                            c += "\n                    </div>\n                </div>\n            </div>\n            "
                        }
                        c += '\n\n\n            <div class="ProjectsList">\n                ',
                        n = n.push();
                        var m = s.contextOrFrameLookup(e, n, "categories");
                        if (m)
                            for (var g = m.length, w = 0; w < m.length; w++) {
                                var y = m[w];
                                if (n.set("category", y), n.set("loop.index", w + 1), n.set("loop.index0", w), n.set("loop.revindex", g - w), n.set("loop.revindex0", g - w - 1), n.set("loop.first", 0 === w), n.set("loop.last", w === g - 1), n.set("loop.length", g), c += "\n                    ", t.getFilter("length").call(e, s.memberLookup(y, "projects"))) {
                                    c += '\n                        <div class="Category">\n                            <h2><span class="dummy">',
                                    c += s.suppressValue(t.getFilter("safe").call(e, t.getFilter("replace").call(e, s.memberLookup(y, "rawTitle"), "*", "<br>")), t.opts.autoescape),
                                    c += '</span><span class="animate">',
                                    c += s.suppressValue(t.getFilter("safe").call(e, t.getFilter("replace").call(e, s.memberLookup(y, "rawTitle"), "*", "<br>")), t.opts.autoescape),
                                    c += "</span></h2>\n                            ",
                                    n = n.push();
                                    var b = s.memberLookup(y, "projects");
                                    if (b)
                                        for (var k = b.length, M = 0; M < b.length; M++) {
                                            var x = b[M];
                                            if (n.set("p", x), n.set("loop.index", M + 1), n.set("loop.index0", M), n.set("loop.revindex", k - M), n.set("loop.revindex0", k - M - 1), n.set("loop.first", 0 === M), n.set("loop.last", M === k - 1), n.set("loop.length", k), c += '\n                                <div class="ProjectsListItem ', o = 45, r = 77, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) || (c += " invisible "), c += '">\n                                     <a href="', c += s.suppressValue(s.memberLookup(x, "link"), t.opts.autoescape), c += '" class="u-Route" data-uniqId="', c += s.suppressValue(s.memberLookup(x, "uniqId"), t.opts.autoescape), c += '">\n                                        <div class="ProjectsListItemImage">\n                                            ', s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "index0") % 6 == 0 ? (c += "\n                                                ", o = 49, r = 60, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) ? (c += '\n                                                    <img src="', c += s.suppressValue(s.memberLookup(x, "previewImageV"), t.opts.autoescape), c += '" alt="">\n                                                ') : (c += '\n                                                    <img src="', c += s.suppressValue(s.memberLookup(x, "previewImageVHD"), t.opts.autoescape), c += '" alt="">\n                                                '), c += "\n                                            ") : s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "index0") % 6 == 1 || s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "index0") % 6 == 4 ? (c += '\n                                                <img src="', c += s.suppressValue(s.memberLookup(x, "previewImageV"), t.opts.autoescape), c += '" alt="">\n                                            ') : s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "index0") % 6 == 3 ? (c += "\n                                                ", o = 57, r = 60, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]) ? (c += '\n                                                    <img src="', c += s.suppressValue(s.memberLookup(x, "previewImageH"), t.opts.autoescape), c += '" alt="">\n                                                ') : (c += '\n                                                    <img src="', c += s.suppressValue(s.memberLookup(x, "previewImageHHD"), t.opts.autoescape), c += '" alt="">\n                                                '), c += "\n                                            ") : s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "index0") % 6 != 2 && s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "index0") % 6 != 5 || (c += '\n                                                <img src="', c += s.suppressValue(s.memberLookup(x, "previewImageH"), t.opts.autoescape), c += '" alt="">\n                                            '), c += '\n                                            <div class="ImageLoader">\n                                                <div class="ImageLoaderWhiteCircle"></div>\n                                                <div class="ImageLoaderBlackCircle"></div>\n                                            </div>\n                                        </div>\n                                        <div class="ProjectsListItemTexts">\n                                            <div class="ProjectsListItemTextsCaption">', c += s.suppressValue(t.getFilter("safe").call(e, t.getFilter("replace").call(e, s.memberLookup(x, "rawTitle"), "*", "<br/>")), t.opts.autoescape), c += '</div>\n                                            <div class="ProjectsListItemTextsDesc">', c += s.suppressValue(s.memberLookup(x, "city"), t.opts.autoescape), s.memberLookup(x, "year") && (c += "<br>", c += s.suppressValue(s.memberLookup(x, "year"), t.opts.autoescape)), c += "</div>\n                                        </div>\n                                    </a>\n                                </div>\n\n                                ", c += "\n                                ", (2 == s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "index0") || s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "last") && s.memberLookup(s.contextOrFrameLookup(e, n, "loop"), "length") < 3) && t.getFilter("length").call(e, s.contextOrFrameLookup(e, n, "insertions")) > 0) {
                                                c += "\n                                    ";
                                                var P;
                                                P = t.getFilter("next").call(e, s.contextOrFrameLookup(e, n, "insertions")),
                                                n.set("ins", P, !0),
                                                n.topLevel && e.setVariable("ins", P),
                                                n.topLevel && e.addExport("ins", P),
                                                c += '\n                                    <span class="ProjectsListInsertion">',
                                                c += s.suppressValue(t.getFilter("safe").call(e, s.memberLookup(s.contextOrFrameLookup(e, n, "ins"), "text")), t.opts.autoescape),
                                                c += "</span>\n                                "
                                            }
                                            c += "\n                            "
                                        }
                                    n = n.pop(),
                                    c += "\n                        </div>\n                    "
                                }
                                c += "\n                "
                            }
                        n = n.pop(),
                        c += "\n            </div>\n        </div>\n    "
                    }
                    c += '\n        <div class="Section-content">\n            ',
                    e.getBlock("section_content")(t, e, n, s, function(t, e) {
                        return t ? void a(t) : (c += e, c += "\n        </div>\n    </div>\n", void a(null, c))
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            function a(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    c += "\n            ",
                    a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                b_title: e,
                b_meta_og_title: n,
                b_content: s,
                b_section_content: a,
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/pages/Projects/ProjectsSection.jinja"], o)
  }, 17, function(t, e, n) {
    var s = n(26);
    n(22);
    n(82),
    t.exports = s.extend({
        el: ".Custom404",
        initialize: function(t) {
            s.prototype.initialize.call(this, t),
            app.views.topNav.changeColor("white"),
            console.log("init 404")
        }
    })
  }, 17, function(t, e, n) {
    (function(e) {
        "use strict";
        var s = n(5),
            a = n(6);
        n(84),
        t.exports = s.View.extend({
            $parent: !1,
            initialize: function(t) {
                a.extend(this, t),
                a.bindAll(this, "loaded"),
                this.$parent || (this.$parent = window.app.els.$body),
                e.ajax({
                    method: "GET",
                    url: window.app.settings.spritesUrl,
                    success: this.loaded,
                    context: this
                })
            },
            loaded: function(t) {
                this.$el.addClass("SpritesSvg").html((new XMLSerializer).serializeToString(t.documentElement)).appendTo(this.$parent)
            }
        })
    }).call(e, n(4))
  }, 17, function(t, e, n) {
    (function(e) {
        var s = n(6),
            a = n(27);
        n(86),
        t.exports = a.extend({
            el: ".Footer",
            events: {
                "click .FooterBlock": "onInstagramClick"
            },
            initialize: function(t) {
                a.prototype.initialize.call(this, t),
                s.bindAll(this, "onBodyClick"),
                app.els.$body.is(".isDesktop") && this.$(".FooterBlockBack").on("webkitTransitionEnd transitionend", function() {
                    var t = e(this).closest(".FooterBlock");
                    if (!t.is(":hover")) {
                        var n = parseInt(t.data("id"), 10),
                            a = s.findWhere(app.data.instagramHashTags, {
                                id: n
                            }).images,
                            o = s.sample(a);
                        e(this).css("background-image", "url(" + o + ")")
                    }
                }),
                e("body").on("click", this.onBodyClick)
            },
            destroy: function(t) {
                a.prototype.destroy.call(this, t),
                e("body").off("click", this.onBodyClick)
            },
            onBodyClick: function(t) {
                e(t.target).closest(".FooterBlock").length || this.$(".FooterBlock").removeClass("active")
            },
            onInstagramClick: function(t) {
                if (!app.settings.isDesktop) {
                    var n = e(t.target).closest(".FooterBlock");
                    n.hasClass("active") ? n.removeClass("active") : (n.addClass("active").siblings().removeClass("active"), t.preventDefault())
                }
            },
            setActive: function(t) {
                this.$('a[data-label="' + t + '"]').addClass("FooterLink--active").siblings().removeClass("FooterLink--active")
            }
        })
    }).call(e, n(4))
  }, 17, function(t, e, n) {
    (function(e) {
        var s = n(6),
            a = n(27);
        n(88);
        var o = n(89);
        t.exports = a.extend({
            el: ".TopNav",
            events: {
                "click .TopNavLogo": "showPopup"
            },
            initialize: function(t) {
                if (s.bindAll(this, "onScroll"), a.prototype.initialize.call(this, t), this.$el.length)
                    this.init();
                else {
                    var n = e(o.render());
                    console.log("render", n),
                    n.prependTo(e("body")),
                    this.setElement(n),
                    this.init()
                }
            },
            init: function() {
                this.onScroll.__throttled = s.throttle(this.onScroll, 200),
                e(window).on("scroll", this.onScroll.__throttled),
                this.onScroll()
            },
            onScroll: function() {
                if (!app.settings.isMobile) {
                    var t = (e(window).scrollTop(), e("body")[0]);
                    this.$el.toggleClass("hide-on-bottom", t.scrollHeight > 1800 && t.scrollHeight - t.scrollTop < window.innerHeight + 700)
                }
            },
            showPopup: function() {
                app.views.topNavPopup.show()
            },
            show: function() {
                this.$el.addClass("visible")
            },
            hide: function() {
                this.$el.removeClass("visible")
            },
            changeColor: function(t) {
                app.settings.isMobile || (this.$(".TopNavLogo svg").css("fill", t), this.$(".TopNavLogoBurgerL").css("background", t))
            }
        })
    }).call(e, n(4))
  }, 17, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], {
        dev: !1,
        autoescape: !0,
        throwOnUndefined: !1,
        trimBlocks: !1,
        lstripBlocks: !1
    });
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/utils/macros.jinja"] = n(40),
    o["front/components/TopNav/main.svg"] = n(90);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/TopNav.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/components/TopNav/TopNav.jinja", !1, function(l, p) {
                        return l ? void a(l) : void p.getExported(function(l, p) {
                            return l ? void a(l) : (e.setVariable("macros", p), c += '\n\n<div class="TopNav ', ("index" != s.contextOrFrameLookup(e, n, "pageType") || (o = 2, r = 54, s.callWrap(s.contextOrFrameLookup(e, n, "isMobile"), "isMobile", e, [s.contextOrFrameLookup(e, n, "request")]))) && (c += "visible"), c += '">\n    <div class="TopNavLogo">\n        ', void t.getTemplate("front/components/TopNav/main.svg", !1, "assets/app/front/components/TopNav/TopNav.jinja", null, function(o, r) {
                                return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                    return o ? void a(o) : (c += r, c += '\n        <div class="TopNavLogoBurger">\n            <div class="TopNavLogoBurgerL L1"></div>\n            <div class="TopNavLogoBurgerL L2"></div>\n            <div class="TopNavLogoBurgerL L3"></div>\n            <div class="TopNavLogoBurgerL L4"></div>\n        </div>\n    </div>\n</div>', void (i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)))
                                })
                            }))
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/TopNav.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/main.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 484.6 228.6" style="enable-background:new 0 0 484.6 228.6;" xml:space="preserve">\n\t<path d="M65.7,71.2v13c0,20.5-14.2,31.1-32.3,31.1H32c-18.1,0-32-10.5-32-29.7V74.8h31.1v13.4c0,2,0.5,2.9,1.4,2.9h0.3c0.9,0,1.4-0.9,1.4-2.9V76.5c0-3.6-0.9-4.5-4.5-5.6l-10.5-3.1c-13.6-4.2-19-14.4-19-27.2V29.2C0.2,10.5,13.7,0,32,0h1.4C51.4,0,65,10.5,65,29.2V38H34.1V27c0-2-0.5-2.9-1.4-2.9h-0.3c-0.9,0-1.4,0.9-1.4,2.9v8.2c0,3.7,0.9,4.6,4.6,5.7L46.2,44C60.6,48.2,65.7,59.5,65.7,71.2z"/>\n\t<path d="M99,66.9v47H67.9V1.4H99v40.5h3.1V1.4h31.1v112.5h-31.1v-47H99z"/>\n\t<path d="M147.8,1.4h43.9l13.7,112.5h-32.4l-0.6-10.8h-6.5l-0.5,10.8h-30.6L147.8,1.4z M166.9,78.2h3.9l-2.2-39.5L166.9,78.2z"/>\n\t<path d="M236.1,113.9h-29V1.4h31.4l6.8,43.1V1.4h29v112.5h-30.7l-7.4-44.6V113.9z"/>\n\t<path d="M320.2,113.9h-31.1V26.4h-12.7v-25h56.4v25h-12.7V113.9z"/>\n\t<path d="M335.2,1.4h51.4v23.8h-20.4v17.3h18.9v23.8h-18.9v23.8h20.4v23.8h-51.4V1.4z"/>\n\t<path d="M420,1.4v87.4h15.6v25H389V1.4H420z"/>\n\t<path d="M468.9,1.4v87.4h15.6v25h-46.7V1.4H468.9z"/>\n\t<path d="M27.2,228.6H0V116.1h40.3l2.8,38.9l3.1-38.9h39.9v112.5H58.7v-53.5l-4.6,53.5H31.7l-4.5-53.5V228.6z"/>\n\t<path d="M100.7,116.1h43.9l13.8,112.5h-32.4l-0.6-10.8h-6.5l-0.5,10.8H87.7L100.7,116.1z M119.8,192.9h3.9l-2.2-39.6L119.8,192.9z"/>\n\t<path d="M160,228.6V116.1h38c18.1,0,27.3,10.2,27.3,26.3v6.6c0,11.6-2.6,18.5-11.4,21.5c8.7,2.5,11.3,9.1,11.3,20.1v38h-31.1v-41.2c0-1.9-0.5-2.8-1.4-2.8H191v44H160z M194.1,158.9v-17.5c0-2-0.5-2.9-1.5-2.9H191v23.8h1.7C193.6,162.3,194.1,161.2,194.1,158.9z"/>\n\t<path d="M271.2,228.6h-31.1v-87.4h-12.7v-25h56.4v25h-12.7V228.6z"/>\n\t<path d="M317.2,116.1v112.5h-31.1V116.1H317.2z"/>\n\t<path d="M348.5,228.6h-29V116.1h31.4l6.8,43.1v-43.1h29v112.5h-30.7l-7.4-44.6V228.6z"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/main.svg"], o)
  }, function(t, e, n) {
    (function(e) {
        var s = (n(6), n(27));
        n(92);
        var a = n(93);
        t.exports = s.extend({
            el: ".TopNavPopup",
            events: {
                "click .TopNavPopupClose, a": "close",
                "mouseenter .left-panel a": "onMainLinkHover",
                touchmove: "onTouchMove"
            },
            initialize: function(t) {
                s.prototype.initialize.call(this, t),
                this.$el.length ? this.init() : e.ajax({
                    type: "GET",
                    url: "https://shantellmartin.art/api/recent_projects/",
                    dataType: "json",
                    success: function(t) {
                        var n = e(a.render({
                            prodDomain: !0,
                            recentProjects: t,
                            shop: {
                                shopUrl: window.app.settings.shop.shopUrl
                            }
                        }));
                        console.log("render", n),
                        n.prependTo(e("body")),
                        this.setElement(n),
                        this.init()
                    }.bind(this),
                    error: function() {
                        var t = e(a.render({
                            prodDomain: !0,
                            shop: {
                                shopUrl: window.app.settings.shop.shopUrl
                            }
                        }));
                        console.log("render empty", t),
                        t.prependTo(e("body")),
                        this.setElement(t),
                        this.init()
                    }.bind(this)
                })
            },
            init: function() {},
            onTouchMove: function(t) {
                app.settings.isDesktop || t.preventDefault()
            },
            onMainLinkHover: function(t) {
                if (app.settings.isDesktop) {
                    var n = e(t.currentTarget),
                        s = n.find("svg.text"),
                        a = s.clone();
                    n.hasClass("animating") || (n.addClass("animating"), a.css("transform", "translateY(-98%)").appendTo(n).outerHeight(), a.css("transform", ""), s.css("transform", "translateY(98%)"), app.utils.waitForTransitionEnd(a, "transform", function() {
                        s.remove(),
                        n.removeClass("animating")
                    }.bind(this)))
                }
            },
            show: function() {
                this.$el.addClass("visible"),
                e(window).on("keydown.menu-popup", function(t) {
                    27 == t.keyCode && this.close()
                }.bind(this))
            },
            close: function() {
                this.$el.removeClass("visible"),
                e(window).off("keydown.menu-popup")
            }
        })
    }).call(e, n(4))
  }, 17, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {}));
    o["front/utils/macros.jinja"] = n(40),
    o["front/components/TopNav/bg.svg"] = n(94),
    o["front/components/TopNav/home.svg"] = n(95),
    o["front/components/TopNav/home-mobile.svg"] = n(96),
    o["front/components/TopNav/work.svg"] = n(97),
    o["front/components/TopNav/news.svg"] = n(98),
    o["front/components/TopNav/news-mobile.svg"] = n(99),
    o["front/components/TopNav/info.svg"] = n(100),
    o["front/components/TopNav/shop.svg"] = n(101);
    var r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/TopNavPopup.jinja"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    t.getTemplate("front/utils/macros.jinja", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", !1, function(l, p) {
                        return l ? void a(l) : void p.getExported(function(l, p) {
                            return l ? void a(l) : (e.setVariable("macros", p), c += '\n\n<div class="TopNavPopup">\n    <div class="left-panel">\n\t    <a href="', c += s.suppressValue((o = 4, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:index", s.contextOrFrameLookup(e, n, "prodDomain")])), t.opts.autoescape), c += '" class="u-Route home-link fast-navigate">', void t.getTemplate("front/components/TopNav/bg.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                    return l ? void a(l) : (c += p, void t.getTemplate("front/components/TopNav/home.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                        return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                            return l ? void a(l) : (c += p, c += '</a>\n\t    <a href="', c += s.suppressValue((o = 5, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:index", s.contextOrFrameLookup(e, n, "prodDomain")])), t.opts.autoescape), c += '" class="u-Route mobile-home-link fast-navigate">', void t.getTemplate("front/components/TopNav/bg.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                                return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                    return l ? void a(l) : (c += p, void t.getTemplate("front/components/TopNav/home-mobile.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                                        return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                            return l ? void a(l) : (c += p, c += '</a>\n\t    <a href="', c += s.suppressValue((o = 6, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:projects", s.contextOrFrameLookup(e, n, "prodDomain")])), t.opts.autoescape), c += '" class="u-Route work-link fast-navigate">', void t.getTemplate("front/components/TopNav/bg.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                                                return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                                    return l ? void a(l) : (c += p, void t.getTemplate("front/components/TopNav/work.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                                                        return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                                            return l ? void a(l) : (c += p, c += '</a>\n\t    <a href="', c += s.suppressValue((o = 7, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:news", s.contextOrFrameLookup(e, n, "prodDomain")])), t.opts.autoescape), c += '" class="u-Route news-link fast-navigate">', void t.getTemplate("front/components/TopNav/bg.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                                                                return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                                                    return l ? void a(l) : (c += p, void t.getTemplate("front/components/TopNav/news.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                                                                        return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                                                            return l ? void a(l) : (c += p, c += '</a>\n\t    <a href="', c += s.suppressValue((o = 8, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:news", s.contextOrFrameLookup(e, n, "prodDomain")])), t.opts.autoescape), c += '" class="u-Route mobile-news-link fast-navigate">', void t.getTemplate("front/components/TopNav/bg.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                                                                                return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                                                                    return l ? void a(l) : (c += p, void t.getTemplate("front/components/TopNav/news-mobile.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(l, p) {
                                                                                                        return l ? void a(l) : void p.render(e.getVariables(), n, function(l, p) {
                                                                                                            return l ? void a(l) : (c += p, c += '</a>\n\t    <a href="', c += s.suppressValue((o = 9, r = 18, s.callWrap(s.contextOrFrameLookup(e, n, "url"), "url", e, ["sm:info", s.contextOrFrameLookup(e, n, "prodDomain")])), t.opts.autoescape), c += '" class="u-Route info-link fast-navigate">', void t.getTemplate("front/components/TopNav/bg.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(o, r) {
                                                                                                                return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                                                                                                    return o ? void a(o) : (c += r, void t.getTemplate("front/components/TopNav/info.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(o, r) {
                                                                                                                        return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                                                                                                            return o ? void a(o) : (c += r, c += '</a>\n\t    <a href="', c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "shop"), "shopUrl"), t.opts.autoescape), c += '" class="mobile-shop-link">', void t.getTemplate("front/components/TopNav/bg.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(o, r) {
                                                                                                                                return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                                                                                                                    return o ? void a(o) : (c += r, void t.getTemplate("front/components/TopNav/shop.svg", !1, "assets/app/front/components/TopNav/TopNavPopup.jinja", null, function(o, r) {
                                                                                                                                        return o ? void a(o) : void r.render(e.getVariables(), n, function(o, r) {
                                                                                                                                            if (o)
                                                                                                                                                return void a(o);
                                                                                                                                            c += r,
                                                                                                                                            c += '</a>\n\t    <div class="stub"><div class="stub-content"></div></div>\n\t</div>\n\n    <div class="right-panel">\n    \t<div class="right-panel-table">\n\t    \t<div class="centering-wrapper">\n\t\t\t\t<h3>Recent Work</h3>\n\t\t\t    ',
                                                                                                                                            n = n.push();
                                                                                                                                            var l = s.contextOrFrameLookup(e, n, "recentProjects");
                                                                                                                                            if (l)
                                                                                                                                                for (var p = l.length, u = 0; u < l.length; u++) {
                                                                                                                                                    var d = l[u];
                                                                                                                                                    n.set("p", d),
                                                                                                                                                    n.set("loop.index", u + 1),
                                                                                                                                                    n.set("loop.index0", u),
                                                                                                                                                    n.set("loop.revindex", p - u),
                                                                                                                                                    n.set("loop.revindex0", p - u - 1),
                                                                                                                                                    n.set("loop.first", 0 === u),
                                                                                                                                                    n.set("loop.last", u === p - 1),
                                                                                                                                                    n.set("loop.length", p),
                                                                                                                                                    c += '<a href="',
                                                                                                                                                    c += s.suppressValue(s.memberLookup(d, "link"), t.opts.autoescape),
                                                                                                                                                    c += '" class="recent u-Route"><div class="title">',
                                                                                                                                                    c += s.suppressValue(s.memberLookup(d, "title"), t.opts.autoescape),
                                                                                                                                                    c += '</div><div class="category">',
                                                                                                                                                    c += s.suppressValue(s.memberLookup(d, "category"), t.opts.autoescape),
                                                                                                                                                    c += "</div></a><br>"
                                                                                                                                                }
                                                                                                                                            n = n.pop(),
                                                                                                                                            c += '\n    \t\t</div>\n    \t</div>\n\t    <a href="',
                                                                                                                                            c += s.suppressValue(s.memberLookup(s.contextOrFrameLookup(e, n, "shop"), "shopUrl"), t.opts.autoescape),
                                                                                                                                            c += '" class="shop-link">Shop</a>\n    </div>\n\n\n    <div class="TopNavPopupClose">\n    \t<div class="l1"></div>\n    \t<div class="l2"></div>\n    </div>\n\n</div>',
                                                                                                                                            i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                                                                                                                                        })
                                                                                                                                    }))
                                                                                                                                })
                                                                                                                            }))
                                                                                                                        })
                                                                                                                    }))
                                                                                                                })
                                                                                                            }))
                                                                                                        })
                                                                                                    }))
                                                                                                })
                                                                                            }))
                                                                                        })
                                                                                    }))
                                                                                })
                                                                            }))
                                                                        })
                                                                    }))
                                                                })
                                                            }))
                                                        })
                                                    }))
                                                })
                                            }))
                                        })
                                    }))
                                })
                            }))
                        })
                    })
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/TopNavPopup.jinja"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/bg.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" class="bg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 100 417.6" style="enable-background:new 0 0 100 417.6;" xml:space="preserve" preserveAspectRatio="none">\n<rect y="5" width="100" height="407.6"/>\n</svg>\n\n\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/bg.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/home.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" class="text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 1010 417.6" style="enable-background:new 0 0 1010 417.6;" xml:space="preserve" preserveAspectRatio="xMaxYMin meet">\n<rect y="3" width="1010" height="411.6"/>\n<path d="M133.8,242.4v170.2h112.6V4.9H133.8v146.7h-11.2V4.9H10v407.7h112.6V242.4H133.8z M256.9,106.9v203.8c0,17.2,3,32.4,9,45.6\n\tc5.6,12.8,13.9,24.3,24.4,33.6c10.7,9.4,23.2,16.4,36.7,20.7c14.8,4.8,30.3,7.1,45.9,7h5c15.6,0.1,31.1-2.2,45.9-7\n\tc13.5-4.3,26-11.3,36.7-20.7c10.4-9.3,18.7-20.8,24.4-33.6c6-13.3,9-28.5,9-45.6V106.9c0-17.2-3-32.4-9-45.6\n\tC479.3,48.5,471,37,460.5,27.7c-10.7-9.4-23.2-16.4-36.7-20.7c-14.8-4.8-30.3-7.1-45.9-7h-5c-15.6-0.1-31.1,2.2-45.9,7\n\tc-13.5,4.3-26,11.3-36.7,20.7c-10.4,9.3-18.7,20.8-24.4,33.6C259.9,74.5,256.9,89.7,256.9,106.9z M381.2,97.9v221.8\n\tc0,7.1-1.9,10.6-5.6,10.6h-1.1c-3.4,0-5-3.5-5-10.6V97.9c0-7.1,1.7-10.6,5-10.6h1.1C379.3,87.3,381.2,90.8,381.2,97.9L381.2,97.9z\n\t M602.6,218.9l16.2,193.8H700l16.8-193.8v193.8h99.1V4.9H671.4L660.2,146l-10-141.1H504v407.7h98.6V218.9z M827,412.6h173v-86.2\n\th-60.5v-86.2h54.9v-86.3h-54.9V91.2h60.5V4.9H827V412.6z"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/home.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/home-mobile.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" class="text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 1010 417.6" style="enable-background:new 0 0 1010 417.6;" xml:space="preserve" preserveAspectRatio="xMinYMin meet">\n<rect y="3" width="1010" height="411.6"/>\n<path d="M133.8,242.4v170.2h112.6V4.9H133.8v146.7h-11.2V4.9H10v407.7h112.6V242.4H133.8z M256.9,106.9v203.8c0,17.2,3,32.4,9,45.6\n\tc5.6,12.8,13.9,24.3,24.4,33.6c10.7,9.4,23.2,16.4,36.7,20.7c14.8,4.8,30.3,7.1,45.9,7h5c15.6,0.1,31.1-2.2,45.9-7\n\tc13.5-4.3,26-11.3,36.7-20.7c10.4-9.3,18.7-20.8,24.4-33.6c6-13.3,9-28.5,9-45.6V106.9c0-17.2-3-32.4-9-45.6\n\tC479.3,48.5,471,37,460.5,27.7c-10.7-9.4-23.2-16.4-36.7-20.7c-14.8-4.8-30.3-7.1-45.9-7h-5c-15.6-0.1-31.1,2.2-45.9,7\n\tc-13.5,4.3-26,11.3-36.7,20.7c-10.4,9.3-18.7,20.8-24.4,33.6C259.9,74.5,256.9,89.7,256.9,106.9z M381.2,97.9v221.8\n\tc0,7.1-1.9,10.6-5.6,10.6h-1.1c-3.4,0-5-3.5-5-10.6V97.9c0-7.1,1.7-10.6,5-10.6h1.1C379.3,87.3,381.2,90.8,381.2,97.9L381.2,97.9z\n\t M602.6,218.9l16.2,193.8H700l16.8-193.8v193.8h99.1V4.9H671.4L660.2,146l-10-141.1H504v407.7h98.6V218.9z M827,412.6h173v-86.2\n\th-60.5v-86.2h54.9v-86.3h-54.9V91.2h60.5V4.9H827V412.6z"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/home-mobile.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/work.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" class="text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 1123 417.6" style="enable-background:new 0 0 1123 417.6;" xml:space="preserve" preserveAspectRatio="xMinYMin meet">\n<rect y="3" width="1123" height="411.6"/>\n<path d="M369,4.9H261.5l-7.8,205l-15.2-205h-90.2l-17.4,200.5L125.4,4.9H10l34.2,407.7h131.6l14-180.9l12.9,180.9h135L369,4.9z\n\t M367.5,106.9v203.8c0,17.2,3,32.4,9,45.6c5.6,12.8,13.9,24.3,24.4,33.6c10.7,9.4,23.2,16.4,36.7,20.7c14.8,4.8,30.3,7.1,45.9,7h5\n\tc15.6,0.1,31.1-2.2,45.9-7c13.5-4.3,26-11.3,36.7-20.7c10.4-9.3,18.7-20.8,24.4-33.6c6-13.3,9-28.5,9-45.6V106.9\n\tc0-17.2-3-32.4-9-45.6c-5.6-12.8-13.9-24.3-24.4-33.6c-10.7-9.4-23.2-16.4-36.7-20.7c-14.8-4.8-30.3-7.1-45.9-7h-5\n\tc-15.6-0.1-31.1,2.2-45.9,7c-13.5,4.3-26,11.3-36.7,20.7c-10.4,9.3-18.7,20.8-24.4,33.6C370.5,74.5,367.5,89.7,367.5,106.9z\n\t M491.8,97.9v221.8c0,7.1-1.9,10.6-5.6,10.6h-1.1c-3.4,0-5-3.5-5-10.6V97.9c0-7.1,1.7-10.6,5-10.6h1.1\n\tC489.9,87.3,491.8,90.8,491.8,97.9z M727.2,412.6V253h6.2c3.4,0,5,3.4,5,10.1v149.5H851V274.9c0-19.8-2.9-35.7-8.7-47.9\n\tc-5.8-12.1-16.5-20.4-32.2-24.9c16.1-5.2,27-14.3,32.8-27.2s8.7-29.8,8.7-50.7v-24.1c0-29.1-8.3-52.3-24.9-69.4S785.2,4.9,752.4,4.9\n\tH614.6v407.7H727.2z M733.3,172.4h-6.2V86.1h5.6c3.7,0,5.6,3.5,5.6,10.6V160C738.4,168.3,736.7,172.4,733.3,172.4z M974.2,255.8\n\tl19,156.8H1113L1076.6,197l34.8-192.1H993.8l-19.6,145.6V4.9H861.6v407.7h112.6L974.2,255.8L974.2,255.8z"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/work.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/news.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" class="text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 1047.3 417.6" style="enable-background:new 0 0 1047.3 417.6;" xml:space="preserve" preserveAspectRatio="xMaxYMin meet">\n<rect y="3" width="1047.3" height="411.6"/>\n<path d="M115.3,250.8l26.9,161.8h111.4V4.9H148.4v156.2L123.7,4.9H10v407.7h105.3V250.8L115.3,250.8z M265,412.6h173v-86.2h-60.5\n\tv-86.2h54.9v-86.3h-54.9V91.2H438V4.9H265V412.6z M799.4,4.9H691.9l-7.8,205l-15.2-205h-90.2l-17.3,200.5L555.8,4.9H440.4\n\tl34.2,407.7h131.6l14-180.9l12.9,180.9h135L799.4,4.9z M966.7,159.5l-38.1-11.2c-6.7-1.9-11.2-4.1-13.4-6.7c-2.2-2.6-3.4-7.3-3.4-14\n\tV97.9c0-7.1,1.7-10.6,5-10.6h1.1c3.4,0,5,3.5,5,10.6v39.8h112v-31.9c0-16.8-2.9-31.8-8.7-45.1c-5.4-12.8-13.7-24.2-24.1-33.3\n\tc-10.6-9.2-23-16.1-36.4-20.4c-14.7-4.8-30.1-7.1-45.6-7h-5c-15.6-0.1-31.1,2.2-45.9,7c-13.5,4.3-26,11.2-36.7,20.4\n\tc-10.4,9.2-18.6,20.6-24.1,33.3c-5.8,13.3-8.7,28.3-8.7,45.1v41.4c0,23.1,5.3,43.5,16,61s28.3,30.1,52.9,37.5l38.1,11.2\n\tc6.3,1.9,10.6,4.1,12.9,6.7c2.2,2.6,3.4,7.1,3.4,13.4v42.6c0,7.1-1.7,10.6-5,10.6h-1.1c-3.4,0-5-3.5-5-10.6v-48.7H799.3v39.2\n\tc0,17.5,2.9,32.9,8.7,46.2c5.5,12.9,13.8,24.4,24.4,33.6c10.8,9.3,23.4,16.4,37,20.7c14.8,4.8,30.3,7.1,45.9,7h5\n\tc15.6,0.1,31.1-2.2,45.9-7c13.8-4.4,26.4-11.7,37.2-21.3c10.8-9.8,19.3-21.8,24.9-35.3c6-14,9-30.3,9-49v-47\n\tc0-10.5-1.2-20.9-3.6-31.1c-2.4-10.1-6.4-19.8-12-28.6c-5.8-9-13.2-16.9-21.8-23.2C990.8,168.5,979.8,163.2,966.7,159.5z"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/news.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/news-mobile.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" class="text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 1047.3 417.6" style="enable-background:new 0 0 1047.3 417.6;" xml:space="preserve" preserveAspectRatio="xMinYMin meet">\n<rect y="3" width="1047.3" height="411.6"/>\n<path d="M115.3,250.8l26.9,161.8h111.4V4.9H148.4v156.2L123.7,4.9H10v407.7h105.3V250.8L115.3,250.8z M265,412.6h173v-86.2h-60.5\n\tv-86.2h54.9v-86.3h-54.9V91.2H438V4.9H265V412.6z M799.4,4.9H691.9l-7.8,205l-15.2-205h-90.2l-17.3,200.5L555.8,4.9H440.4\n\tl34.2,407.7h131.6l14-180.9l12.9,180.9h135L799.4,4.9z M966.7,159.5l-38.1-11.2c-6.7-1.9-11.2-4.1-13.4-6.7c-2.2-2.6-3.4-7.3-3.4-14\n\tV97.9c0-7.1,1.7-10.6,5-10.6h1.1c3.4,0,5,3.5,5,10.6v39.8h112v-31.9c0-16.8-2.9-31.8-8.7-45.1c-5.4-12.8-13.7-24.2-24.1-33.3\n\tc-10.6-9.2-23-16.1-36.4-20.4c-14.7-4.8-30.1-7.1-45.6-7h-5c-15.6-0.1-31.1,2.2-45.9,7c-13.5,4.3-26,11.2-36.7,20.4\n\tc-10.4,9.2-18.6,20.6-24.1,33.3c-5.8,13.3-8.7,28.3-8.7,45.1v41.4c0,23.1,5.3,43.5,16,61s28.3,30.1,52.9,37.5l38.1,11.2\n\tc6.3,1.9,10.6,4.1,12.9,6.7c2.2,2.6,3.4,7.1,3.4,13.4v42.6c0,7.1-1.7,10.6-5,10.6h-1.1c-3.4,0-5-3.5-5-10.6v-48.7H799.3v39.2\n\tc0,17.5,2.9,32.9,8.7,46.2c5.5,12.9,13.8,24.4,24.4,33.6c10.8,9.3,23.4,16.4,37,20.7c14.8,4.8,30.3,7.1,45.9,7h5\n\tc15.6,0.1,31.1-2.2,45.9-7c13.8-4.4,26.4-11.7,37.2-21.3c10.8-9.8,19.3-21.8,24.9-35.3c6-14,9-30.3,9-49v-47\n\tc0-10.5-1.2-20.9-3.6-31.1c-2.4-10.1-6.4-19.8-12-28.6c-5.8-9-13.2-16.9-21.8-23.2C990.8,168.5,979.8,163.2,966.7,159.5z"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/news-mobile.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/info.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" class="text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 814.9 417.6" style="enable-background:new 0 0 814.9 417.6;" xml:space="preserve" preserveAspectRatio="xMinYMin meet">\n<rect y="3" width="814.9" height="411.6"/>\n<path d="M10,4.9v407.7h112.6V4.9H10z M239.3,250.8l26.9,161.8h111.4V4.9H272.3v156.2L247.7,4.9H134v407.7h105.3V250.8z M501.6,244.1\n\th54.9v-86.2h-54.9V91.2h58.8V4.9H389v407.7h112.6V244.1z M567.9,106.9v203.8c0,17.2,3,32.4,9,45.6c5.6,12.8,13.9,24.3,24.4,33.6\n\tc10.7,9.4,23.2,16.4,36.7,20.7c14.8,4.8,30.3,7.1,45.9,7h5c15.6,0.1,31.1-2.2,45.9-7c13.5-4.3,26-11.3,36.7-20.7\n\tc10.4-9.3,18.7-20.8,24.4-33.6c6-13.3,9-28.5,9-45.6V106.9c0-17.2-3-32.4-9-45.6C790.3,48.5,782,37,771.5,27.7\n\tc-10.7-9.4-23.2-16.4-36.7-20.7c-14.8-4.8-30.3-7.1-45.9-7h-5c-15.6-0.1-31.1,2.2-45.9,7c-13.5,4.3-26,11.3-36.7,20.7\n\tc-10.4,9.3-18.7,20.8-24.4,33.6C570.9,74.5,567.9,89.7,567.9,106.9z M692.2,97.9v221.8c0,7.1-1.9,10.6-5.6,10.6h-1.1\n\tc-3.4,0-5-3.5-5-10.6V97.9c0-7.1,1.7-10.6,5-10.6h1.1C690.3,87.3,692.2,90.8,692.2,97.9z"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/info.svg"], o)
  }, function(t, e, n) {
    var s,
        a = n(30);
    s = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], void 0);
    var o = (n(31)(s), a.webpackDependencies || (a.webpackDependencies = {})),
        r = n(33);
    !function() {
        (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["assets/app/front/components/TopNav/shop.svg"] = function() {
            function t(t, e, n, s, a) {
                var o = null,
                    r = null,
                    c = "";
                try {
                    var i = null;
                    c += '<svg version="1.1" class="text" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 997.3 417.6" style="enable-background:new 0 0 997.3 417.6;" xml:space="preserve" preserveAspectRatio="xMinYMin meet">\n<rect y="3" width="997.3" height="411.6"/>\n<path d="M177.4,159.6l-38.1-11.2c-6.7-1.9-11.2-4.1-13.4-6.7c-2.2-2.6-3.4-7.3-3.4-14V98c0-7.1,1.7-10.6,5-10.6h1.1\n\tc3.4,0,5,3.5,5,10.6v39.8h112v-31.9c0-16.8-2.9-31.8-8.7-45.1C231.6,48,223.4,36.6,213,27.4c-10.6-9.2-23-16.1-36.4-20.4\n\tc-14.7-4.8-30.1-7.1-45.6-7h-5c-15.7-0.1-31.2,2.2-46,7c-13.5,4.3-26,11.2-36.7,20.4C32.9,36.6,24.7,48,19.2,60.8\n\tc-5.8,13.2-8.7,28.2-8.7,45v41.4c0,23.1,5.3,43.5,16,61s28.3,30.1,52.9,37.5l38.1,11.2c6.3,1.9,10.6,4.1,12.9,6.7\n\tc2.2,2.6,3.4,7.1,3.4,13.4v42.6c0,7.1-1.7,10.6-5,10.6h-1.1c-3.4,0-5-3.5-5-10.6V271H10v39.2c0,17.5,2.9,32.9,8.7,46.2\n\tc5.5,12.9,13.8,24.4,24.4,33.6c10.8,9.3,23.4,16.4,37,20.7c14.8,4.8,30.3,7.1,45.9,7h5c15.6,0.1,31.1-2.2,45.9-7\n\tc13.8-4.4,26.4-11.7,37.2-21.3c10.8-9.8,19.3-21.8,24.9-35.3c6-14,9-30.3,9-49v-47c0-10.5-1.2-20.9-3.6-31.1\n\tc-2.4-10.1-6.4-19.8-12-28.6c-5.8-9-13.2-16.9-21.8-23.2C201.5,168.6,190.5,163.3,177.4,159.6z M380.5,242.5v170.2h112.6V5H380.5\n\tv146.7h-11.2V5H256.8v407.7h112.6V242.5H380.5L380.5,242.5z M503.7,107v203.8c0,17.2,3,32.4,9,45.6c5.6,12.8,13.9,24.3,24.4,33.6\n\tc10.7,9.4,23.2,16.4,36.7,20.7c14.8,4.8,30.3,7.1,45.9,7h5c15.6,0.1,31.1-2.2,45.9-7c13.5-4.3,26-11.3,36.7-20.7\n\tc10.4-9.3,18.7-20.8,24.4-33.6c6-13.3,9-28.5,9-45.6V107c0-17.2-3-32.4-9-45.6c-5.6-12.8-13.9-24.3-24.4-33.6\n\tc-10.7-9.4-23.2-16.4-36.7-20.7c-14.8-4.8-30.3-7.1-45.9-7h-5c-15.6-0.1-31.1,2.2-45.9,7c-13.5,4.3-26,11.3-36.7,20.7\n\tc-10.4,9.3-18.7,20.8-24.4,33.6C506.7,74.6,503.7,89.8,503.7,107z M628,98v221.8c0,7.1-1.9,10.6-5.6,10.6h-1.1c-3.4,0-5-3.5-5-10.6\n\tV98c0-7.1,1.7-10.6,5-10.6h1.1C626.1,87.4,628,90.9,628,98z M863.3,175.3v-89h5.6c3.7,0,5.6,3.5,5.6,10.6v65.5\n\tc0,8.6-1.9,12.9-5.6,12.9L863.3,175.3L863.3,175.3z M750.8,5v407.7h112.6V256.5H874c37.3,0,65.6-8.8,84.8-26.3s28.8-45.2,28.8-82.9\n\tv-33c0-38.1-9.6-65.8-28.8-83.2S911.3,5,874,5H750.8z"/>\n</svg>\n',
                    i ? i.rootRenderFunc(t, e, n, s, a) : a(null, c)
                } catch (t) {
                    a(s.handleError(t, o, r))
                }
            }
            return {
                root: t
            }
        }()
    }(),
    t.exports = r(a, s, a.nunjucksPrecompiled["assets/app/front/components/TopNav/shop.svg"], o)
  }]);
  