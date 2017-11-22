!function (e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var a = n[i] = {exports: {}, id: i, loaded: !1};
    return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
  }

  var n = {};
  return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {"default": e}
  }

  var a = n(1), r = i(a), o = n(5), s = n(13), l = i(s), c = n(14), u = i(c), d = n(15), f = i(d), h = n(16), p = i(h),
    m = n(17), g = i(m), v = n(18), b = i(v);
  (0, r["default"])(), (0, u["default"])(), (0, l["default"])("#expanding-circle"), (0, b["default"])();
  var y = document.getElementById("globe-particles-1"), x = Math.round(y.scrollWidth / 50);
  (0, o.createBeacons)(y, x, 15e3), setTimeout(function () {
    var e = document.getElementById("globe-particles-2");
    (0, o.createBeacons)(e, x, 15e3)
  }, 5e3), setTimeout(function () {
    var e = document.getElementById("globe-particles-3");
    (0, o.createBeacons)(e, x, 15e3)
  }, 1e4);
  var w = document.getElementById("device-map");
  (0, g["default"])(w), (0, p["default"])(), (0, f["default"])()
}, function (e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {"default": e}
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function () {
    var e = !1, t = function (t, i, a) {
      if (e && (0, l["default"])()) return e = !1, n(i), !0;
      e = !1;
      for (var o = 8; o >= 0; o--) (0, r["default"])("body").removeClass("leaving-slide-" + o);
      var s = (0, r["default"])(".section:nth-of-type(" + t + ")").data("slide-transition");
      return (0, r["default"])("body").addClass("leaving-slide-" + t), setTimeout(function () {
        e = !0, n(i), r["default"].fn.fullpage.moveTo(i)
      }, s), !1
    }, n = function (e) {
      var t = new CustomEvent("fullpage-slide-enter", {detail: {id: e}});
      document.body.dispatchEvent(t)
    };
    (0, r["default"])("#fullpage-wrapper").fullpage({
      fixedElements: ".fixed-stuff-wrapper",
      scrollingSpeed: 1500,
      controlArrows: !1,
      navigation: !0,
      navigationPosition: "right",
      onLeave: t,
      verticalCentered: !1,
      responsiveWidth: (0, s.sizes)().width,
      responsiveHeight: (0, s.sizes)().height
    })
  };
  var a = n(2), r = i(a), o = n(3), s = (i(o), n(4)), l = i(s)
}, function (e, t) {
  var n = !1;
  !function (t, n) {
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, function (e, t) {
    function i(e) {
      var t = !!e && "length" in e && e.length, n = oe.type(e);
      return "function" === n || oe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function a(e, t, n) {
      if (oe.isFunction(t)) return oe.grep(e, function (e, i) {
        return !!t.call(e, i, e) !== n
      });
      if (t.nodeType) return oe.grep(e, function (e) {
        return e === t !== n
      });
      if ("string" == typeof t) {
        if (ge.test(t)) return oe.filter(t, e, n);
        t = oe.filter(t, e)
      }
      return oe.grep(e, function (e) {
        return ee.call(t, e) > -1 !== n
      })
    }

    function r(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) ;
      return e
    }

    function o(e) {
      var t = {};
      return oe.each(e.match(Ce) || [], function (e, n) {
        t[n] = !0
      }), t
    }

    function s() {
      X.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready()
    }

    function l() {
      this.expando = oe.expando + l.uid++
    }

    function c(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Ee, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
        try {
          n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? oe.parseJSON(n) : n
        } catch (a) {
        }
        Te.set(e, t, n)
      } else n = void 0;
      return n
    }

    function u(e, t, n, i) {
      var a, r = 1, o = 20, s = i ? function () {
          return i.cur()
        } : function () {
          return oe.css(e, t, "")
        }, l = s(), c = n && n[3] || (oe.cssNumber[t] ? "" : "px"),
        u = (oe.cssNumber[t] || "px" !== c && +l) && Le.exec(oe.css(e, t));
      if (u && u[3] !== c) {
        c = c || u[3], n = n || [], u = +l || 1;
        do r = r || ".5", u /= r, oe.style(e, t, u + c); while (r !== (r = s() / l) && 1 !== r && --o)
      }
      return n && (u = +u || +l || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = a)), a
    }

    function d(e, t) {
      var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && oe.nodeName(e, t) ? oe.merge([e], n) : n
    }

    function f(e, t) {
      for (var n = 0, i = e.length; i > n; n++) Be.set(e[n], "globalEval", !t || Be.get(t[n], "globalEval"))
    }

    function h(e, t, n, i, a) {
      for (var r, o, s, l, c, u, h = t.createDocumentFragment(), p = [], m = 0, g = e.length; g > m; m++) if (r = e[m], r || 0 === r) if ("object" === oe.type(r)) oe.merge(p, r.nodeType ? [r] : r); else if (Ge.test(r)) {
        for (o = o || h.appendChild(t.createElement("div")), s = (Ne.exec(r) || ["", ""])[1].toLowerCase(), l = Ie[s] || Ie._default, o.innerHTML = l[1] + oe.htmlPrefilter(r) + l[2], u = l[0]; u--;) o = o.lastChild;
        oe.merge(p, o.childNodes), o = h.firstChild, o.textContent = ""
      } else p.push(t.createTextNode(r));
      for (h.textContent = "", m = 0; r = p[m++];) if (i && oe.inArray(r, i) > -1) a && a.push(r); else if (c = oe.contains(r.ownerDocument, r), o = d(h.appendChild(r), "script"), c && f(o), n) for (u = 0; r = o[u++];) Fe.test(r.type || "") && n.push(r);
      return h
    }

    function p() {
      return !0
    }

    function m() {
      return !1
    }

    function g() {
      try {
        return X.activeElement
      } catch (e) {
      }
    }

    function v(e, t, n, i, a, r) {
      var o, s;
      if ("object" == typeof t) {
        "string" != typeof n && (i = i || n, n = void 0);
        for (s in t) v(e, s, n, i, t[s], r);
        return e
      }
      if (null == i && null == a ? (a = n, i = n = void 0) : null == a && ("string" == typeof n ? (a = i, i = void 0) : (a = i, i = n, n = void 0)), a === !1) a = m; else if (!a) return e;
      return 1 === r && (o = a, a = function (e) {
        return oe().off(e), o.apply(this, arguments)
      }, a.guid = o.guid || (o.guid = oe.guid++)), e.each(function () {
        oe.event.add(this, t, a, i, n)
      })
    }

    function b(e, t) {
      return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function x(e) {
      var t = qe.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function w(e, t) {
      var n, i, a, r, o, s, l, c;
      if (1 === t.nodeType) {
        if (Be.hasData(e) && (r = Be.access(e), o = Be.set(t, r), c = r.events)) {
          delete o.handle, o.events = {};
          for (a in c) for (n = 0, i = c[a].length; i > n; n++) oe.event.add(t, a, c[a][n])
        }
        Te.hasData(e) && (s = Te.access(e), l = oe.extend({}, s), Te.set(t, l))
      }
    }

    function C(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && De.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function S(e, t, n, i) {
      t = Z.apply([], t);
      var a, r, o, s, l, c, u = 0, f = e.length, p = f - 1, m = t[0], g = oe.isFunction(m);
      if (g || f > 1 && "string" == typeof m && !ae.checkClone && Ue.test(m)) return e.each(function (a) {
        var r = e.eq(a);
        g && (t[0] = m.call(this, a, r.html())), S(r, t, n, i)
      });
      if (f && (a = h(t, e[0].ownerDocument, !1, e, i), r = a.firstChild, 1 === a.childNodes.length && (a = r), r || i)) {
        for (o = oe.map(d(a, "script"), y), s = o.length; f > u; u++) l = a, u !== p && (l = oe.clone(l, !0, !0), s && oe.merge(o, d(l, "script"))), n.call(e[u], l, u);
        if (s) for (c = o[o.length - 1].ownerDocument, oe.map(o, x), u = 0; s > u; u++) l = o[u], Fe.test(l.type || "") && !Be.access(l, "globalEval") && oe.contains(c, l) && (l.src ? oe._evalUrl && oe._evalUrl(l.src) : oe.globalEval(l.textContent.replace(We, "")))
      }
      return e
    }

    function M(e, t, n) {
      for (var i, a = t ? oe.filter(t, e) : e, r = 0; null != (i = a[r]); r++) n || 1 !== i.nodeType || oe.cleanData(d(i)), i.parentNode && (n && oe.contains(i.ownerDocument, i) && f(d(i, "script")), i.parentNode.removeChild(i));
      return e
    }

    function A(e, t) {
      var n = oe(t.createElement(e)).appendTo(t.body), i = oe.css(n[0], "display");
      return n.detach(), i
    }

    function B(e) {
      var t = X, n = Ke[e];
      return n || (n = A(e, t), "none" !== n && n || (Ye = (Ye || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ye[0].contentDocument, t.write(), t.close(), n = A(e, t), Ye.detach()), Ke[e] = n), n
    }

    function T(e, t, n) {
      var i, a, r, o, s = e.style;
      return n = n || $e(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || oe.contains(e.ownerDocument, e) || (o = oe.style(e, t)), n && !ae.pixelMarginRight() && Xe.test(o) && Je.test(t) && (i = s.width, a = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = a, s.maxWidth = r), void 0 !== o ? o + "" : o
    }

    function k(e, t) {
      return {
        get: function () {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function E(e) {
      if (e in at) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = it.length; n--;) if (e = it[n] + t, e in at) return e
    }

    function P(e, t, n) {
      var i = Le.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function L(e, t, n, i, a) {
      for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += oe.css(e, n + _e[r], !0, a)), i ? ("content" === n && (o -= oe.css(e, "padding" + _e[r], !0, a)), "margin" !== n && (o -= oe.css(e, "border" + _e[r] + "Width", !0, a))) : (o += oe.css(e, "padding" + _e[r], !0, a), "padding" !== n && (o += oe.css(e, "border" + _e[r] + "Width", !0, a)));
      return o
    }

    function _(t, n, i) {
      var a = !0, r = "width" === n ? t.offsetWidth : t.offsetHeight, o = $e(t),
        s = "border-box" === oe.css(t, "boxSizing", !1, o);
      if (X.msFullscreenElement && e.top !== e && t.getClientRects().length && (r = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= r || null == r) {
        if (r = T(t, n, o), (0 > r || null == r) && (r = t.style[n]), Xe.test(r)) return r;
        a = s && (ae.boxSizingReliable() || r === t.style[n]), r = parseFloat(r) || 0
      }
      return r + L(t, n, i || (s ? "border" : "content"), a, o) + "px"
    }

    function R(e, t) {
      for (var n, i, a, r = [], o = 0, s = e.length; s > o; o++) i = e[o], i.style && (r[o] = Be.get(i, "olddisplay"), n = i.style.display, t ? (r[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Re(i) && (r[o] = Be.access(i, "olddisplay", B(i.nodeName)))) : (a = Re(i), "none" === n && a || Be.set(i, "olddisplay", a ? n : oe.css(i, "display"))));
      for (o = 0; s > o; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[o] || "" : "none"));
      return e
    }

    function D(e, t, n, i, a) {
      return new D.prototype.init(e, t, n, i, a)
    }

    function N() {
      return e.setTimeout(function () {
        rt = void 0
      }), rt = oe.now()
    }

    function F(e, t) {
      var n, i = 0, a = {height: e};
      for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = _e[i], a["margin" + n] = a["padding" + n] = e;
      return t && (a.opacity = a.width = e), a
    }

    function I(e, t, n) {
      for (var i, a = (O.tweeners[t] || []).concat(O.tweeners["*"]), r = 0, o = a.length; o > r; r++) if (i = a[r].call(n, t, e)) return i
    }

    function G(e, t, n) {
      var i, a, r, o, s, l, c, u, d = this, f = {}, h = e.style, p = e.nodeType && Re(e), m = Be.get(e, "fxshow");
      n.queue || (s = oe._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
        s.unqueued || l()
      }), s.unqueued++, d.always(function () {
        d.always(function () {
          s.unqueued--, oe.queue(e, "fx").length || s.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = oe.css(e, "display"), u = "none" === c ? Be.get(e, "olddisplay") || B(e.nodeName) : c, "inline" === u && "none" === oe.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      }));
      for (i in t) if (a = t[i], st.exec(a)) {
        if (delete t[i], r = r || "toggle" === a, a === (p ? "hide" : "show")) {
          if ("show" !== a || !m || void 0 === m[i]) continue;
          p = !0
        }
        f[i] = m && m[i] || oe.style(e, i)
      } else c = void 0;
      if (oe.isEmptyObject(f)) "inline" === ("none" === c ? B(e.nodeName) : c) && (h.display = c); else {
        m ? "hidden" in m && (p = m.hidden) : m = Be.access(e, "fxshow", {}), r && (m.hidden = !p), p ? oe(e).show() : d.done(function () {
          oe(e).hide()
        }), d.done(function () {
          var t;
          Be.remove(e, "fxshow");
          for (t in f) oe.style(e, t, f[t])
        });
        for (i in f) o = I(p ? m[i] : 0, i, d), i in m || (m[i] = o.start, p && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function z(e, t) {
      var n, i, a, r, o;
      for (n in e) if (i = oe.camelCase(n), a = t[i], r = e[n], oe.isArray(r) && (a = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), o = oe.cssHooks[i], o && "expand" in o) {
        r = o.expand(r), delete e[i];
        for (n in r) n in e || (e[n] = r[n], t[n] = a)
      } else t[i] = a
    }

    function O(e, t, n) {
      var i, a, r = 0, o = O.prefilters.length, s = oe.Deferred().always(function () {
        delete l.elem
      }), l = function () {
        if (a) return !1;
        for (var t = rt || N(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, o = 0, l = c.tweens.length; l > o; o++) c.tweens[o].run(r);
        return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
      }, c = s.promise({
        elem: e,
        props: oe.extend({}, t),
        opts: oe.extend(!0, {specialEasing: {}, easing: oe.easing._default}, n),
        originalProperties: t,
        originalOptions: n,
        startTime: rt || N(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = oe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(i), i
        },
        stop: function (t) {
          var n = 0, i = t ? c.tweens.length : 0;
          if (a) return this;
          for (a = !0; i > n; n++) c.tweens[n].run(1);
          return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
        }
      }), u = c.props;
      for (z(u, c.opts.specialEasing); o > r; r++) if (i = O.prefilters[r].call(c, e, u, c.opts)) return oe.isFunction(i.stop) && (oe._queueHooks(c.elem, c.opts.queue).stop = oe.proxy(i.stop, i)), i;
      return oe.map(u, I, c), oe.isFunction(c.opts.start) && c.opts.start.call(e, c), oe.fx.timer(oe.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function j(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function H(e) {
      return function (t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, a = 0, r = t.toLowerCase().match(Ce) || [];
        if (oe.isFunction(n)) for (; i = r[a++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function V(e, t, n, i) {
      function a(s) {
        var l;
        return r[s] = !0, oe.each(e[s] || [], function (e, s) {
          var c = s(t, n, i);
          return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
        }), l
      }

      var r = {}, o = e === Tt;
      return a(t.dataTypes[0]) || !r["*"] && a("*")
    }

    function U(e, t) {
      var n, i, a = oe.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
      return i && oe.extend(!0, e, i), e
    }

    function q(e, t, n) {
      for (var i, a, r, o, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i) for (a in s) if (s[a] && s[a].test(i)) {
        l.unshift(a);
        break
      }
      if (l[0] in n) r = l[0]; else {
        for (a in n) {
          if (!l[0] || e.converters[a + " " + l[0]]) {
            r = a;
            break
          }
          o || (o = a)
        }
        r = r || o
      }
      return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function W(e, t, n, i) {
      var a, r, o, s, l, c = {}, u = e.dataTypes.slice();
      if (u[1]) for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
      for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
        if (o = c[l + " " + r] || c["* " + r], !o) for (a in c) if (s = a.split(" "), s[1] === r && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
          o === !0 ? o = c[a] : c[a] !== !0 && (r = s[0], u.unshift(s[1]));
          break
        }
        if (o !== !0) if (o && e["throws"]) t = o(t); else try {
          t = o(t)
        } catch (d) {
          return {state: "parsererror", error: o ? d : "No conversion from " + l + " to " + r}
        }
      }
      return {state: "success", data: t}
    }

    function Y(e, t, n, i) {
      var a;
      if (oe.isArray(t)) oe.each(t, function (t, a) {
        n || Lt.test(e) ? i(e, a) : Y(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, i)
      }); else if (n || "object" !== oe.type(t)) i(e, t); else for (a in t) Y(e + "[" + a + "]", t[a], n, i)
    }

    function K(e) {
      return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var J = [], X = e.document, $ = J.slice, Z = J.concat, Q = J.push, ee = J.indexOf, te = {}, ne = te.toString,
      ie = te.hasOwnProperty, ae = {}, re = "2.2.3", oe = function (e, t) {
        return new oe.fn.init(e, t)
      }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, le = /^-ms-/, ce = /-([\da-z])/gi, ue = function (e, t) {
        return t.toUpperCase()
      };
    oe.fn = oe.prototype = {
      jquery: re, constructor: oe, selector: "", length: 0, toArray: function () {
        return $.call(this)
      }, get: function (e) {
        return null != e ? 0 > e ? this[e + this.length] : this[e] : $.call(this)
      }, pushStack: function (e) {
        var t = oe.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      }, each: function (e) {
        return oe.each(this, e)
      }, map: function (e) {
        return this.pushStack(oe.map(this, function (t, n) {
          return e.call(t, n, t)
        }))
      }, slice: function () {
        return this.pushStack($.apply(this, arguments))
      }, first: function () {
        return this.eq(0)
      }, last: function () {
        return this.eq(-1)
      }, eq: function (e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      }, end: function () {
        return this.prevObject || this.constructor()
      }, push: Q, sort: J.sort, splice: J.splice
    }, oe.extend = oe.fn.extend = function () {
      var e, t, n, i, a, r, o = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
      for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || oe.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++) if (null != (e = arguments[s])) for (t in e) n = o[t], i = e[t], o !== i && (c && i && (oe.isPlainObject(i) || (a = oe.isArray(i))) ? (a ? (a = !1, r = n && oe.isArray(n) ? n : []) : r = n && oe.isPlainObject(n) ? n : {}, o[t] = oe.extend(c, r, i)) : void 0 !== i && (o[t] = i));
      return o
    }, oe.extend({
      expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
        throw new Error(e)
      }, noop: function () {
      }, isFunction: function (e) {
        return "function" === oe.type(e)
      }, isArray: Array.isArray, isWindow: function (e) {
        return null != e && e === e.window
      }, isNumeric: function (e) {
        var t = e && e.toString();
        return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0
      }, isPlainObject: function (e) {
        var t;
        if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
        if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
        for (t in e) ;
        return void 0 === t || ie.call(e, t)
      }, isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0
      }, type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? te[ne.call(e)] || "object" : typeof e
      }, globalEval: function (e) {
        var t, n = eval;
        e = oe.trim(e), e && (1 === e.indexOf("use strict") ? (t = X.createElement("script"), t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      }, camelCase: function (e) {
        return e.replace(le, "ms-").replace(ce, ue)
      }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }, each: function (e, t) {
        var n, a = 0;
        if (i(e)) for (n = e.length; n > a && t.call(e[a], a, e[a]) !== !1; a++) ; else for (a in e) if (t.call(e[a], a, e[a]) === !1) break;
        return e
      }, trim: function (e) {
        return null == e ? "" : (e + "").replace(se, "")
      }, makeArray: function (e, t) {
        var n = t || [];
        return null != e && (i(Object(e)) ? oe.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n
      }, inArray: function (e, t, n) {
        return null == t ? -1 : ee.call(t, e, n)
      }, merge: function (e, t) {
        for (var n = +t.length, i = 0, a = e.length; n > i; i++) e[a++] = t[i];
        return e.length = a, e
      }, grep: function (e, t, n) {
        for (var i, a = [], r = 0, o = e.length, s = !n; o > r; r++) i = !t(e[r], r), i !== s && a.push(e[r]);
        return a
      }, map: function (e, t, n) {
        var a, r, o = 0, s = [];
        if (i(e)) for (a = e.length; a > o; o++) r = t(e[o], o, n), null != r && s.push(r); else for (o in e) r = t(e[o], o, n), null != r && s.push(r);
        return Z.apply([], s)
      }, guid: 1, proxy: function (e, t) {
        var n, i, a;
        return "string" == typeof t && (n = e[t], t = e, e = n), oe.isFunction(e) ? (i = $.call(arguments, 2), a = function () {
          return e.apply(t || this, i.concat($.call(arguments)))
        }, a.guid = e.guid = e.guid || oe.guid++, a) : void 0
      }, now: Date.now, support: ae
    }), "function" == typeof Symbol && (oe.fn[Symbol.iterator] = J[Symbol.iterator]), oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      te["[object " + t + "]"] = t.toLowerCase()
    });
    var de = /*!
*Sizzle CSS Selector Engine v2.2.1*http:**Copyright jQuery Foundation and other contributors*Released under the MIT license*http:**Date:2015-10-17*/
      function (e) {
        function t(e, t, n, i) {
          var a, r, o, s, l, c, d, h, p = t && t.ownerDocument, m = t ? t.nodeType : 9;
          if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
          if (!i && ((t ? t.ownerDocument || t : O) !== _ && L(t), t = t || _, D)) {
            if (11 !== m && (c = ve.exec(e))) if (a = c[1]) {
              if (9 === m) {
                if (!(o = t.getElementById(a))) return n;
                if (o.id === a) return n.push(o), n
              } else if (p && (o = p.getElementById(a)) && G(t, o) && o.id === a) return n.push(o), n
            } else {
              if (c[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
              if ((a = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
            }
            if (w.qsa && !q[e + " "] && (!N || !N.test(e))) {
              if (1 !== m) p = t, h = e; else if ("object" !== t.nodeName.toLowerCase()) {
                for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = z), d = A(e), r = d.length, l = fe.test(s) ? "#" + s : "[id='" + s + "']"; r--;) d[r] = l + " " + f(d[r]);
                h = d.join(","), p = be.test(e) && u(t.parentNode) || t
              }
              if (h) try {
                return Z.apply(n, p.querySelectorAll(h)), n
              } catch (g) {
              } finally {
                s === z && t.removeAttribute("id")
              }
            }
          }
          return T(e.replace(se, "$1"), t, n, i)
        }

        function n() {
          function e(n, i) {
            return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i
          }

          var t = [];
          return e
        }

        function i(e) {
          return e[z] = !0, e
        }

        function a(e) {
          var t = _.createElement("div");
          try {
            return !!e(t)
          } catch (n) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function r(e, t) {
          for (var n = e.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = t
        }

        function o(e, t) {
          var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
          if (i) return i;
          if (n) for (; n = n.nextSibling;) if (n === t) return -1;
          return e ? 1 : -1
        }

        function s(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return "input" === n && t.type === e
          }
        }

        function l(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }

        function c(e) {
          return i(function (t) {
            return t = +t, i(function (n, i) {
              for (var a, r = e([], n.length, t), o = r.length; o--;) n[a = r[o]] && (n[a] = !(i[a] = n[a]))
            })
          })
        }

        function u(e) {
          return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {
        }

        function f(e) {
          for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
          return i
        }

        function h(e, t, n) {
          var i = t.dir, a = n && "parentNode" === i, r = H++;
          return t.first ? function (t, n, r) {
            for (; t = t[i];) if (1 === t.nodeType || a) return e(t, n, r)
          } : function (t, n, o) {
            var s, l, c, u = [j, r];
            if (o) {
              for (; t = t[i];) if ((1 === t.nodeType || a) && e(t, n, o)) return !0
            } else for (; t = t[i];) if (1 === t.nodeType || a) {
              if (c = t[z] || (t[z] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === j && s[1] === r) return u[2] = s[2];
              if (l[i] = u, u[2] = e(t, n, o)) return !0
            }
          }
        }

        function p(e) {
          return e.length > 1 ? function (t, n, i) {
            for (var a = e.length; a--;) if (!e[a](t, n, i)) return !1;
            return !0
          } : e[0]
        }

        function m(e, n, i) {
          for (var a = 0, r = n.length; r > a; a++) t(e, n[a], i);
          return i
        }

        function g(e, t, n, i, a) {
          for (var r, o = [], s = 0, l = e.length, c = null != t; l > s; s++) (r = e[s]) && (n && !n(r, i, a) || (o.push(r), c && t.push(s)));
          return o
        }

        function v(e, t, n, a, r, o) {
          return a && !a[z] && (a = v(a)), r && !r[z] && (r = v(r, o)), i(function (i, o, s, l) {
            var c, u, d, f = [], h = [], p = o.length, v = i || m(t || "*", s.nodeType ? [s] : s, []),
              b = !e || !i && t ? v : g(v, f, e, s, l), y = n ? r || (i ? e : p || a) ? [] : o : b;
            if (n && n(b, y, s, l), a) for (c = g(y, h), a(c, [], s, l), u = c.length; u--;) (d = c[u]) && (y[h[u]] = !(b[h[u]] = d));
            if (i) {
              if (r || e) {
                if (r) {
                  for (c = [], u = y.length; u--;) (d = y[u]) && c.push(b[u] = d);
                  r(null, y = [], c, l)
                }
                for (u = y.length; u--;) (d = y[u]) && (c = r ? ee(i, d) : f[u]) > -1 && (i[c] = !(o[c] = d))
              }
            } else y = g(y === o ? y.splice(p, y.length) : y), r ? r(null, o, y, l) : Z.apply(o, y)
          })
        }

        function b(e) {
          for (var t, n, i, a = e.length, r = C.relative[e[0].type], o = r || C.relative[" "], s = r ? 1 : 0, l = h(function (e) {
            return e === t
          }, o, !0), c = h(function (e) {
            return ee(t, e) > -1
          }, o, !0), u = [function (e, n, i) {
            var a = !r && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
            return t = null, a
          }]; a > s; s++) if (n = C.relative[e[s].type]) u = [h(p(u), n)]; else {
            if (n = C.filter[e[s].type].apply(null, e[s].matches), n[z]) {
              for (i = ++s; a > i && !C.relative[e[i].type]; i++) ;
              return v(s > 1 && p(u), s > 1 && f(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(se, "$1"), n, i > s && b(e.slice(s, i)), a > i && b(e = e.slice(i)), a > i && f(e))
            }
            u.push(n)
          }
          return p(u)
        }

        function y(e, n) {
          var a = n.length > 0, r = e.length > 0, o = function (i, o, s, l, c) {
            var u, d, f, h = 0, p = "0", m = i && [], v = [], b = k, y = i || r && C.find.TAG("*", c),
              x = j += null == b ? 1 : Math.random() || .1, w = y.length;
            for (c && (k = o === _ || o || c); p !== w && null != (u = y[p]); p++) {
              if (r && u) {
                for (d = 0, o || u.ownerDocument === _ || (L(u), s = !D); f = e[d++];) if (f(u, o || _, s)) {
                  l.push(u);
                  break
                }
                c && (j = x)
              }
              a && ((u = !f && u) && h--, i && m.push(u))
            }
            if (h += p, a && p !== h) {
              for (d = 0; f = n[d++];) f(m, v, o, s);
              if (i) {
                if (h > 0) for (; p--;) m[p] || v[p] || (v[p] = X.call(l));
                v = g(v)
              }
              Z.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
            }
            return c && (j = x, k = b), m
          };
          return a ? i(o) : o
        }

        var x, w, C, S, M, A, B, T, k, E, P, L, _, R, D, N, F, I, G, z = "sizzle" + 1 * new Date, O = e.document, j = 0,
          H = 0, V = n(), U = n(), q = n(), W = function (e, t) {
            return e === t && (P = !0), 0
          }, Y = 1 << 31, K = {}.hasOwnProperty, J = [], X = J.pop, $ = J.push, Z = J.push, Q = J.slice,
          ee = function (e, t) {
            for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
            return -1
          },
          te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          ae = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
          re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
          oe = new RegExp(ne + "+", "g"), se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
          le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
          ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), de = new RegExp(re),
          fe = new RegExp("^" + ie + "$"), he = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie + "|[*])"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
          }, pe = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/,
          ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, be = /[+~]/, ye = /'|\\/g,
          xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
          }, Ce = function () {
            L()
          };
        try {
          Z.apply(J = Q.call(O.childNodes), O.childNodes), J[O.childNodes.length].nodeType
        } catch (Se) {
          Z = {
            apply: J.length ? function (e, t) {
              $.apply(e, Q.call(t))
            } : function (e, t) {
              for (var n = e.length, i = 0; e[n++] = t[i++];) ;
              e.length = n - 1
            }
          }
        }
        w = t.support = {}, M = t.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? "HTML" !== t.nodeName : !1
        }, L = t.setDocument = function (e) {
          var t, n, i = e ? e.ownerDocument || e : O;
          return i !== _ && 9 === i.nodeType && i.documentElement ? (_ = i, R = _.documentElement, D = !M(_), (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), w.attributes = a(function (e) {
            return e.className = "i", !e.getAttribute("className")
          }), w.getElementsByTagName = a(function (e) {
            return e.appendChild(_.createComment("")), !e.getElementsByTagName("*").length
          }), w.getElementsByClassName = ge.test(_.getElementsByClassName), w.getById = a(function (e) {
            return R.appendChild(e).id = z, !_.getElementsByName || !_.getElementsByName(z).length
          }), w.getById ? (C.find.ID = function (e, t) {
            if ("undefined" != typeof t.getElementById && D) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }, C.filter.ID = function (e) {
            var t = e.replace(xe, we);
            return function (e) {
              return e.getAttribute("id") === t
            }
          }) : (delete C.find.ID, C.filter.ID = function (e) {
            var t = e.replace(xe, we);
            return function (e) {
              var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }), C.find.TAG = w.getElementsByTagName ? function (e, t) {
            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
          } : function (e, t) {
            var n, i = [], a = 0, r = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = r[a++];) 1 === n.nodeType && i.push(n);
              return i
            }
            return r
          }, C.find.CLASS = w.getElementsByClassName && function (e, t) {
            return "undefined" != typeof t.getElementsByClassName && D ? t.getElementsByClassName(e) : void 0
          }, F = [], N = [], (w.qsa = ge.test(_.querySelectorAll)) && (a(function (e) {
            R.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || N.push(".#.+[+~]")
          }), a(function (e) {
            var t = _.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
          })), (w.matchesSelector = ge.test(I = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && a(function (e) {
            w.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), F.push("!=", re)
          }), N = N.length && new RegExp(N.join("|")), F = F.length && new RegExp(F.join("|")), t = ge.test(R.compareDocumentPosition), G = t || ge.test(R.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) if (t === e) return !0;
            return !1
          }, W = t ? function (e, t) {
            if (e === t) return P = !0, 0;
            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === _ || e.ownerDocument === O && G(O, e) ? -1 : t === _ || t.ownerDocument === O && G(O, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
          } : function (e, t) {
            if (e === t) return P = !0, 0;
            var n, i = 0, a = e.parentNode, r = t.parentNode, s = [e], l = [t];
            if (!a || !r) return e === _ ? -1 : t === _ ? 1 : a ? -1 : r ? 1 : E ? ee(E, e) - ee(E, t) : 0;
            if (a === r) return o(e, t);
            for (n = e; n = n.parentNode;) s.unshift(n);
            for (n = t; n = n.parentNode;) l.unshift(n);
            for (; s[i] === l[i];) i++;
            return i ? o(s[i], l[i]) : s[i] === O ? -1 : l[i] === O ? 1 : 0
          }, _) : _
        }, t.matches = function (e, n) {
          return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
          if ((e.ownerDocument || e) !== _ && L(e), n = n.replace(ue, "='$1']"), w.matchesSelector && D && !q[n + " "] && (!F || !F.test(n)) && (!N || !N.test(n))) try {
            var i = I.call(e, n);
            if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
          } catch (a) {
          }
          return t(n, _, null, [e]).length > 0
        }, t.contains = function (e, t) {
          return (e.ownerDocument || e) !== _ && L(e), G(e, t)
        }, t.attr = function (e, t) {
          (e.ownerDocument || e) !== _ && L(e);
          var n = C.attrHandle[t.toLowerCase()], i = n && K.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
          return void 0 !== i ? i : w.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
          var t, n = [], i = 0, a = 0;
          if (P = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(W), P) {
            for (; t = e[a++];) t === e[a] && (i = n.push(a));
            for (; i--;) e.splice(n[i], 1)
          }
          return E = null, e
        }, S = t.getText = function (e) {
          var t, n = "", i = 0, a = e.nodeType;
          if (a) {
            if (1 === a || 9 === a || 11 === a) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
            } else if (3 === a || 4 === a) return e.nodeValue
          } else for (; t = e[i++];) n += S(t);
          return n
        }, C = t.selectors = {
          cacheLength: 50,
          createPseudo: i,
          match: he,
          attrHandle: {},
          find: {},
          relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
          },
          preFilter: {
            ATTR: function (e) {
              return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
            }, PSEUDO: function (e) {
              var t, n = !e[6] && e[2];
              return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = A(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(xe, we).toLowerCase();
              return "*" === e ? function () {
                return !0
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            }, CLASS: function (e) {
              var t = V[e + " "];
              return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && V(e, function (e) {
                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
              })
            }, ATTR: function (e, n, i) {
              return function (a) {
                var r = t.attr(a, e);
                return null == r ? "!=" === n : n ? (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
              }
            }, CHILD: function (e, t, n, i, a) {
              var r = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
              return 1 === i && 0 === a ? function (e) {
                return !!e.parentNode
              } : function (t, n, l) {
                var c, u, d, f, h, p, m = r !== o ? "nextSibling" : "previousSibling", g = t.parentNode,
                  v = s && t.nodeName.toLowerCase(), b = !l && !s, y = !1;
                if (g) {
                  if (r) {
                    for (; m;) {
                      for (f = t; f = f[m];) if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                      p = m = "only" === e && !p && "nextSibling"
                    }
                    return !0
                  }
                  if (p = [o ? g.firstChild : g.lastChild], o && b) {
                    for (f = g, d = f[z] || (f[z] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === j && c[1], y = h && c[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (y = h = 0) || p.pop();) if (1 === f.nodeType && ++y && f === t) {
                      u[e] = [j, h, y];
                      break
                    }
                  } else if (b && (f = t, d = f[z] || (f[z] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], h = c[0] === j && c[1], y = h), y === !1) for (; (f = ++h && f && f[m] || (y = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (b && (d = f[z] || (f[z] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [j, y]), f !== t));) ;
                  return y -= a, y === i || y % i === 0 && y / i >= 0
                }
              }
            }, PSEUDO: function (e, n) {
              var a, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
              return r[z] ? r(n) : r.length > 1 ? (a = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                for (var i, a = r(e, n), o = a.length; o--;) i = ee(e, a[o]), e[i] = !(t[i] = a[o])
              }) : function (e) {
                return r(e, 0, a)
              }) : r
            }
          },
          pseudos: {
            not: i(function (e) {
              var t = [], n = [], a = B(e.replace(se, "$1"));
              return a[z] ? i(function (e, t, n, i) {
                for (var r, o = a(e, null, i, []), s = e.length; s--;) (r = o[s]) && (e[s] = !(t[s] = r))
              }) : function (e, i, r) {
                return t[0] = e, a(t, null, r, n), t[0] = null, !n.pop()
              }
            }), has: i(function (e) {
              return function (n) {
                return t(e, n).length > 0
              }
            }), contains: i(function (e) {
              return e = e.replace(xe, we), function (t) {
                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
              }
            }), lang: i(function (e) {
              return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), function (t) {
                var n;
                do if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
            }), target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            }, root: function (e) {
              return e === R
            }, focus: function (e) {
              return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }, enabled: function (e) {
              return e.disabled === !1
            }, disabled: function (e) {
              return e.disabled === !0
            }, checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            }, empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
              return !0
            }, parent: function (e) {
              return !C.pseudos.empty(e)
            }, header: function (e) {
              return me.test(e.nodeName)
            }, input: function (e) {
              return pe.test(e.nodeName)
            }, button: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            }, first: c(function () {
              return [0]
            }), last: c(function (e, t) {
              return [t - 1]
            }), eq: c(function (e, t, n) {
              return [0 > n ? n + t : n]
            }), even: c(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e
            }), odd: c(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e
            }), lt: c(function (e, t, n) {
              for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
              return e
            }), gt: c(function (e, t, n) {
              for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
              return e
            })
          }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) C.pseudos[x] = s(x);
        for (x in{submit: !0, reset: !0}) C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, A = t.tokenize = function (e, n) {
          var i, a, r, o, s, l, c, u = U[e + " "];
          if (u) return n ? 0 : u.slice(0);
          for (s = e, l = [], c = C.preFilter; s;) {
            i && !(a = le.exec(s)) || (a && (s = s.slice(a[0].length) || s), l.push(r = [])), i = !1, (a = ce.exec(s)) && (i = a.shift(), r.push({
              value: i,
              type: a[0].replace(se, " ")
            }), s = s.slice(i.length));
            for (o in C.filter) !(a = he[o].exec(s)) || c[o] && !(a = c[o](a)) || (i = a.shift(), r.push({
              value: i,
              type: o,
              matches: a
            }), s = s.slice(i.length));
            if (!i) break
          }
          return n ? s.length : s ? t.error(e) : U(e, l).slice(0)
        }, B = t.compile = function (e, t) {
          var n, i = [], a = [], r = q[e + " "];
          if (!r) {
            for (t || (t = A(e)), n = t.length; n--;) r = b(t[n]), r[z] ? i.push(r) : a.push(r);
            r = q(e, y(a, i)), r.selector = e
          }
          return r
        }, T = t.select = function (e, t, n, i) {
          var a, r, o, s, l, c = "function" == typeof e && e, d = !i && A(e = c.selector || e);
          if (n = n || [], 1 === d.length) {
            if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (o = r[0]).type && w.getById && 9 === t.nodeType && D && C.relative[r[1].type]) {
              if (t = (C.find.ID(o.matches[0].replace(xe, we), t) || [])[0], !t) return n;
              c && (t = t.parentNode), e = e.slice(r.shift().value.length)
            }
            for (a = he.needsContext.test(e) ? 0 : r.length; a-- && (o = r[a], !C.relative[s = o.type]);) if ((l = C.find[s]) && (i = l(o.matches[0].replace(xe, we), be.test(r[0].type) && u(t.parentNode) || t))) {
              if (r.splice(a, 1), e = i.length && f(r), !e) return Z.apply(n, i), n;
              break
            }
          }
          return (c || B(e, d))(i, t, !D, n, !t || be.test(e) && u(t.parentNode) || t), n
        }, w.sortStable = z.split("").sort(W).join("") === z, w.detectDuplicates = !!P, L(), w.sortDetached = a(function (e) {
          return 1 & e.compareDocumentPosition(_.createElement("div"))
        }), a(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
          return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && a(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), a(function (e) {
          return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
          var i;
          return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
      }(e);
    oe.find = de, oe.expr = de.selectors, oe.expr[":"] = oe.expr.pseudos, oe.uniqueSort = oe.unique = de.uniqueSort, oe.text = de.getText, oe.isXMLDoc = de.isXML, oe.contains = de.contains;
    var fe = function (e, t, n) {
      for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (a && oe(e).is(n)) break;
        i.push(e)
      }
      return i
    }, he = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    }, pe = oe.expr.match.needsContext, me = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ge = /^.[^:#\[\.,]*$/;
    oe.filter = function (e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? oe.find.matchesSelector(i, e) ? [i] : [] : oe.find.matches(e, oe.grep(t, function (e) {
        return 1 === e.nodeType
      }))
    }, oe.fn.extend({
      find: function (e) {
        var t, n = this.length, i = [], a = this;
        if ("string" != typeof e) return this.pushStack(oe(e).filter(function () {
          for (t = 0; n > t; t++) if (oe.contains(a[t], this)) return !0
        }));
        for (t = 0; n > t; t++) oe.find(e, a[t], i);
        return i = this.pushStack(n > 1 ? oe.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
      }, filter: function (e) {
        return this.pushStack(a(this, e || [], !1))
      }, not: function (e) {
        return this.pushStack(a(this, e || [], !0))
      }, is: function (e) {
        return !!a(this, "string" == typeof e && pe.test(e) ? oe(e) : e || [], !1).length
      }
    });
    var ve, be = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ye = oe.fn.init = function (e, t, n) {
      var i, a;
      if (!e) return this;
      if (n = n || ve, "string" == typeof e) {
        if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : be.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : X, !0)), me.test(i[1]) && oe.isPlainObject(t)) for (i in t) oe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return a = X.getElementById(i[2]), a && a.parentNode && (this.length = 1, this[0] = a), this.context = X, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(oe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this))
    };
    ye.prototype = oe.fn, ve = oe(X);
    var xe = /^(?:parents|prev(?:Until|All))/, we = {children: !0, contents: !0, next: !0, prev: !0};
    oe.fn.extend({
      has: function (e) {
        var t = oe(e, this), n = t.length;
        return this.filter(function () {
          for (var e = 0; n > e; e++) if (oe.contains(this, t[e])) return !0
        })
      }, closest: function (e, t) {
        for (var n, i = 0, a = this.length, r = [], o = pe.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; a > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
          r.push(n);
          break
        }
        return this.pushStack(r.length > 1 ? oe.uniqueSort(r) : r)
      }, index: function (e) {
        return e ? "string" == typeof e ? ee.call(oe(e), this[0]) : ee.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      }, add: function (e, t) {
        return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))))
      }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), oe.each({
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      }, parents: function (e) {
        return fe(e, "parentNode")
      }, parentsUntil: function (e, t, n) {
        return fe(e, "parentNode", n)
      }, next: function (e) {
        return r(e, "nextSibling")
      }, prev: function (e) {
        return r(e, "previousSibling")
      }, nextAll: function (e) {
        return fe(e, "nextSibling")
      }, prevAll: function (e) {
        return fe(e, "previousSibling")
      }, nextUntil: function (e, t, n) {
        return fe(e, "nextSibling", n)
      }, prevUntil: function (e, t, n) {
        return fe(e, "previousSibling", n)
      }, siblings: function (e) {
        return he((e.parentNode || {}).firstChild, e)
      }, children: function (e) {
        return he(e.firstChild)
      }, contents: function (e) {
        return e.contentDocument || oe.merge([], e.childNodes)
      }
    }, function (e, t) {
      oe.fn[e] = function (n, i) {
        var a = oe.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = oe.filter(i, a)), this.length > 1 && (we[e] || oe.uniqueSort(a), xe.test(e) && a.reverse()), this.pushStack(a)
      }
    });
    var Ce = /\S+/g;
    oe.Callbacks = function (e) {
      e = "string" == typeof e ? o(e) : oe.extend({}, e);
      var t, n, i, a, r = [], s = [], l = -1, c = function () {
        for (a = e.once, i = t = !0; s.length; l = -1) for (n = s.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
        e.memory || (n = !1), t = !1, a && (r = n ? [] : "")
      }, u = {
        add: function () {
          return r && (n && !t && (l = r.length - 1, s.push(n)), function i(t) {
            oe.each(t, function (t, n) {
              oe.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== oe.type(n) && i(n)
            })
          }(arguments), n && !t && c()), this
        }, remove: function () {
          return oe.each(arguments, function (e, t) {
            for (var n; (n = oe.inArray(t, r, n)) > -1;) r.splice(n, 1), l >= n && l--
          }), this
        }, has: function (e) {
          return e ? oe.inArray(e, r) > -1 : r.length > 0
        }, empty: function () {
          return r && (r = []), this
        }, disable: function () {
          return a = s = [], r = n = "", this
        }, disabled: function () {
          return !r
        }, lock: function () {
          return a = s = [], n || (r = n = ""), this
        }, locked: function () {
          return !!a
        }, fireWith: function (e, n) {
          return a || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
        }, fire: function () {
          return u.fireWith(this, arguments), this
        }, fired: function () {
          return !!i
        }
      };
      return u
    }, oe.extend({
      Deferred: function (e) {
        var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]],
          n = "pending", i = {
            state: function () {
              return n
            }, always: function () {
              return a.done(arguments).fail(arguments), this
            }, then: function () {
              var e = arguments;
              return oe.Deferred(function (n) {
                oe.each(t, function (t, r) {
                  var o = oe.isFunction(e[t]) && e[t];
                  a[r[1]](function () {
                    var e = o && o.apply(this, arguments);
                    e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            }, promise: function (e) {
              return null != e ? oe.extend(e, i) : i
            }
          }, a = {};
        return i.pipe = i.then, oe.each(t, function (e, r) {
          var o = r[2], s = r[3];
          i[r[1]] = o.add, s && o.add(function () {
            n = s
          }, t[1 ^ e][2].disable, t[2][2].lock), a[r[0]] = function () {
            return a[r[0] + "With"](this === a ? i : this, arguments), this
          }, a[r[0] + "With"] = o.fireWith
        }), i.promise(a), e && e.call(a, a), a
      }, when: function (e) {
        var t, n, i, a = 0, r = $.call(arguments), o = r.length, s = 1 !== o || e && oe.isFunction(e.promise) ? o : 0,
          l = 1 === s ? e : oe.Deferred(), c = function (e, n, i) {
            return function (a) {
              n[e] = this, i[e] = arguments.length > 1 ? $.call(arguments) : a, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
            }
          };
        if (o > 1) for (t = new Array(o), n = new Array(o), i = new Array(o); o > a; a++) r[a] && oe.isFunction(r[a].promise) ? r[a].promise().progress(c(a, n, t)).done(c(a, i, r)).fail(l.reject) : --s;
        return s || l.resolveWith(i, r), l.promise()
      }
    });
    var Se;
    oe.fn.ready = function (e) {
      return oe.ready.promise().done(e), this
    }, oe.extend({
      isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? oe.readyWait++ : oe.ready(!0)
      }, ready: function (e) {
        (e === !0 ? --oe.readyWait : oe.isReady) || (oe.isReady = !0, e !== !0 && --oe.readyWait > 0 || (Se.resolveWith(X, [oe]), oe.fn.triggerHandler && (oe(X).triggerHandler("ready"), oe(X).off("ready"))))
      }
    }), oe.ready.promise = function (t) {
      return Se || (Se = oe.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? e.setTimeout(oe.ready) : (X.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), Se.promise(t)
    }, oe.ready.promise();
    var Me = function (e, t, n, i, a, r, o) {
      var s = 0, l = e.length, c = null == n;
      if ("object" === oe.type(n)) {
        a = !0;
        for (s in n) Me(e, t, s, n[s], !0, r, o)
      } else if (void 0 !== i && (a = !0, oe.isFunction(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
          return c.call(oe(e), n)
        })), t)) for (; l > s; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
      return a ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }, Ae = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    l.uid = 1, l.prototype = {
      register: function (e, t) {
        var n = t || {};
        return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
          value: n,
          writable: !0,
          configurable: !0
        }), e[this.expando]
      }, cache: function (e) {
        if (!Ae(e)) return {};
        var t = e[this.expando];
        return t || (t = {}, Ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      }, set: function (e, t, n) {
        var i, a = this.cache(e);
        if ("string" == typeof t) a[t] = n; else for (i in t) a[i] = t[i];
        return a
      }, get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
      }, access: function (e, t, n) {
        var i;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      }, remove: function (e, t) {
        var n, i, a, r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 === t) this.register(e); else {
            oe.isArray(t) ? i = t.concat(t.map(oe.camelCase)) : (a = oe.camelCase(t), t in r ? i = [t, a] : (i = a, i = i in r ? [i] : i.match(Ce) || [])), n = i.length;
            for (; n--;) delete r[i[n]]
          }
          (void 0 === t || oe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      }, hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !oe.isEmptyObject(t)
      }
    };
    var Be = new l, Te = new l, ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ee = /[A-Z]/g;
    oe.extend({
      hasData: function (e) {
        return Te.hasData(e) || Be.hasData(e)
      }, data: function (e, t, n) {
        return Te.access(e, t, n)
      }, removeData: function (e, t) {
        Te.remove(e, t)
      }, _data: function (e, t, n) {
        return Be.access(e, t, n)
      }, _removeData: function (e, t) {
        Be.remove(e, t)
      }
    }), oe.fn.extend({
      data: function (e, t) {
        var n, i, a, r = this[0], o = r && r.attributes;
        if (void 0 === e) {
          if (this.length && (a = Te.get(r), 1 === r.nodeType && !Be.get(r, "hasDataAttrs"))) {
            for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = oe.camelCase(i.slice(5)), c(r, i, a[i])));
            Be.set(r, "hasDataAttrs", !0)
          }
          return a
        }
        return "object" == typeof e ? this.each(function () {
          Te.set(this, e)
        }) : Me(this, function (t) {
          var n, i;
          if (r && void 0 === t) {
            if (n = Te.get(r, e) || Te.get(r, e.replace(Ee, "-$&").toLowerCase()), void 0 !== n) return n;
            if (i = oe.camelCase(e), n = Te.get(r, i), void 0 !== n) return n;
            if (n = c(r, i, void 0), void 0 !== n) return n
          } else i = oe.camelCase(e), this.each(function () {
            var n = Te.get(this, i);
            Te.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Te.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      }, removeData: function (e) {
        return this.each(function () {
          Te.remove(this, e)
        })
      }
    }), oe.extend({
      queue: function (e, t, n) {
        var i;
        return e ? (t = (t || "fx") + "queue", i = Be.get(e, t), n && (!i || oe.isArray(n) ? i = Be.access(e, t, oe.makeArray(n)) : i.push(n)), i || []) : void 0
      }, dequeue: function (e, t) {
        t = t || "fx";
        var n = oe.queue(e, t), i = n.length, a = n.shift(), r = oe._queueHooks(e, t), o = function () {
          oe.dequeue(e, t)
        };
        "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete r.stop, a.call(e, o, r)), !i && r && r.empty.fire()
      }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return Be.get(e, n) || Be.access(e, n, {
          empty: oe.Callbacks("once memory").add(function () {
            Be.remove(e, [t + "queue", n])
          })
        })
      }
    }), oe.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var n = oe.queue(this, e, t);
          oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e)
        })
      }, dequeue: function (e) {
        return this.each(function () {
          oe.dequeue(this, e)
        })
      }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
      }, promise: function (e, t) {
        var n, i = 1, a = oe.Deferred(), r = this, o = this.length, s = function () {
          --i || a.resolveWith(r, [r])
        };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = Be.get(r[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
        return s(), a.promise(t)
      }
    });
    var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Le = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
      _e = ["Top", "Right", "Bottom", "Left"], Re = function (e, t) {
        return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e)
      }, De = /^(?:checkbox|radio)$/i, Ne = /<([\w:-]+)/, Fe = /^$|\/(?:java|ecma)script/i, Ie = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Ie.optgroup = Ie.option, Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead, Ie.th = Ie.td;
    var Ge = /<|&#?\w+;/;
    !function () {
      var e = X.createDocumentFragment(), t = e.appendChild(X.createElement("div")), n = X.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ze = /^key/, Oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, je = /^([^.]*)(?:\.(.+)|)/;
    oe.event = {
      global: {},
      add: function (e, t, n, i, a) {
        var r, o, s, l, c, u, d, f, h, p, m, g = Be.get(e);
        if (g) for (n.handler && (r = n, n = r.handler, a = r.selector), n.guid || (n.guid = oe.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (t) {
          return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0
        }), t = (t || "").match(Ce) || [""], c = t.length; c--;) s = je.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h && (d = oe.event.special[h] || {}, h = (a ? d.delegateType : d.bindType) || h, d = oe.event.special[h] || {}, u = oe.extend({
          type: h,
          origType: m,
          data: i,
          handler: n,
          guid: n.guid,
          selector: a,
          needsContext: a && oe.expr.match.needsContext.test(a),
          namespace: p.join(".")
        }, r), (f = l[h]) || (f = l[h] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, p, o) !== !1 || e.addEventListener && e.addEventListener(h, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? f.splice(f.delegateCount++, 0, u) : f.push(u), oe.event.global[h] = !0)
      },
      remove: function (e, t, n, i, a) {
        var r, o, s, l, c, u, d, f, h, p, m, g = Be.hasData(e) && Be.get(e);
        if (g && (l = g.events)) {
          for (t = (t || "").match(Ce) || [""], c = t.length; c--;) if (s = je.exec(t[c]) || [], h = m = s[1], p = (s[2] || "").split(".").sort(), h) {
            for (d = oe.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, f = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = f.length; r--;) u = f[r], !a && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
            o && !f.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || oe.removeEvent(e, h, g.handle), delete l[h])
          } else for (h in l) oe.event.remove(e, h + t[c], n, i, !0);
          oe.isEmptyObject(l) && Be.remove(e, "handle events")
        }
      },
      dispatch: function (e) {
        e = oe.event.fix(e);
        var t, n, i, a, r, o = [], s = $.call(arguments), l = (Be.get(this, "events") || {})[e.type] || [],
          c = oe.event.special[e.type] || {};
        if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
          for (o = oe.event.handlers.call(this, e, l), t = 0; (a = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = a.elem, n = 0; (r = a.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, i = ((oe.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function (e, t) {
        var n, i, a, r, o = [], s = t.delegateCount, l = e.target;
        if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
          for (i = [], n = 0; s > n; n++) r = t[n], a = r.selector + " ", void 0 === i[a] && (i[a] = r.needsContext ? oe(a, this).index(l) > -1 : oe.find(a, this, null, [l]).length), i[a] && i.push(r);
          i.length && o.push({elem: l, handlers: i})
        }
        return s < t.length && o.push({elem: this, handlers: t.slice(s)}), o
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "), filter: function (e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (e, t) {
          var n, i, a, r = t.button;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || X, i = n.documentElement, a = n.body, e.pageX = t.clientX + (i && i.scrollLeft || a && a.scrollLeft || 0) - (i && i.clientLeft || a && a.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || a && a.scrollTop || 0) - (i && i.clientTop || a && a.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
        }
      },
      fix: function (e) {
        if (e[oe.expando]) return e;
        var t, n, i, a = e.type, r = e, o = this.fixHooks[a];
        for (o || (this.fixHooks[a] = o = Oe.test(a) ? this.mouseHooks : ze.test(a) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new oe.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
        return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, r) : e
      },
      special: {
        load: {noBubble: !0}, focus: {
          trigger: function () {
            return this !== g() && this.focus ? (this.focus(), !1) : void 0
          }, delegateType: "focusin"
        }, blur: {
          trigger: function () {
            return this === g() && this.blur ? (this.blur(), !1) : void 0
          }, delegateType: "focusout"
        }, click: {
          trigger: function () {
            return "checkbox" === this.type && this.click && oe.nodeName(this, "input") ? (this.click(), !1) : void 0
          }, _default: function (e) {
            return oe.nodeName(e.target, "a")
          }
        }, beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, oe.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, oe.Event = function (e, t) {
      return this instanceof oe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : m) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), void(this[oe.expando] = !0)) : new oe.Event(e, t)
    }, oe.Event.prototype = {
      constructor: oe.Event,
      isDefaultPrevented: m,
      isPropagationStopped: m,
      isImmediatePropagationStopped: m,
      preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = p, e && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = p, e && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = p, e && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, oe.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      oe.event.special[e] = {
        delegateType: t, bindType: t, handle: function (e) {
          var n, i = this, a = e.relatedTarget, r = e.handleObj;
          return a && (a === i || oe.contains(i, a)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), oe.fn.extend({
      on: function (e, t, n, i) {
        return v(this, e, t, n, i)
      }, one: function (e, t, n, i) {
        return v(this, e, t, n, i, 1)
      }, off: function (e, t, n) {
        var i, a;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, oe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (a in e) this.off(a, t, e[a]);
          return this
        }
        return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = m), this.each(function () {
          oe.event.remove(this, e, n, t)
        })
      }
    });
    var He = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ve = /<script|<style|<link/i,
      Ue = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^true\/(.*)/, We = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oe.extend({
      htmlPrefilter: function (e) {
        return e.replace(He, "<$1></$2>")
      }, clone: function (e, t, n) {
        var i, a, r, o, s = e.cloneNode(!0), l = oe.contains(e.ownerDocument, e);
        if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || oe.isXMLDoc(e))) for (o = d(s), r = d(e), i = 0, a = r.length; a > i; i++) C(r[i], o[i]);
        if (t) if (n) for (r = r || d(e), o = o || d(s), i = 0, a = r.length; a > i; i++) w(r[i], o[i]); else w(e, s);
        return o = d(s, "script"), o.length > 0 && f(o, !l && d(e, "script")), s
      }, cleanData: function (e) {
        for (var t, n, i, a = oe.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Ae(n)) {
          if (t = n[Be.expando]) {
            if (t.events) for (i in t.events) a[i] ? oe.event.remove(n, i) : oe.removeEvent(n, i, t.handle);
            n[Be.expando] = void 0
          }
          n[Te.expando] && (n[Te.expando] = void 0)
        }
      }
    }), oe.fn.extend({
      domManip: S, detach: function (e) {
        return M(this, e, !0)
      }, remove: function (e) {
        return M(this, e)
      }, text: function (e) {
        return Me(this, function (e) {
          return void 0 === e ? oe.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      }, append: function () {
        return S(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = b(this, e);
            t.appendChild(e)
          }
        })
      }, prepend: function () {
        return S(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = b(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      }, before: function () {
        return S(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      }, after: function () {
        return S(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(d(e, !1)), e.textContent = "");
        return this
      }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
          return oe.clone(this, e, t)
        })
      }, html: function (e) {
        return Me(this, function (e) {
          var t = this[0] || {}, n = 0, i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !Ve.test(e) && !Ie[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = oe.htmlPrefilter(e);
            try {
              for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(d(t, !1)), t.innerHTML = e);
              t = 0
            } catch (a) {
            }
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      }, replaceWith: function () {
        var e = [];
        return S(this, arguments, function (t) {
          var n = this.parentNode;
          oe.inArray(this, e) < 0 && (oe.cleanData(d(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), oe.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      oe.fn[e] = function (e) {
        for (var n, i = [], a = oe(e), r = a.length - 1, o = 0; r >= o; o++) n = o === r ? this : this.clone(!0), oe(a[o])[t](n), Q.apply(i, n.get());
        return this.pushStack(i)
      }
    });
    var Ye, Ke = {HTML: "block", BODY: "block"}, Je = /^margin/, Xe = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
      $e = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
      }, Ze = function (e, t, n, i) {
        var a, r, o = {};
        for (r in t) o[r] = e.style[r], e.style[r] = t[r];
        a = n.apply(e, i || []);
        for (r in t) e.style[r] = o[r];
        return a
      }, Qe = X.documentElement;
    !function () {
      function t() {
        s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Qe.appendChild(o);
        var t = e.getComputedStyle(s);
        n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", a = "4px" === t.marginRight, Qe.removeChild(o)
      }

      var n, i, a, r, o = X.createElement("div"), s = X.createElement("div");
      s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ae.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), oe.extend(ae, {
        pixelPosition: function () {
          return t(), n
        }, boxSizingReliable: function () {
          return null == i && t(), i
        }, pixelMarginRight: function () {
          return null == i && t(), a
        }, reliableMarginLeft: function () {
          return null == i && t(), r
        }, reliableMarginRight: function () {
          var t, n = s.appendChild(X.createElement("div"));
          return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", Qe.appendChild(o), t = !parseFloat(e.getComputedStyle(n).marginRight), Qe.removeChild(o), s.removeChild(n), t
        }
      }))
    }();
    var et = /^(none|table(?!-c[ea]).+)/, tt = {position: "absolute", visibility: "hidden", display: "block"},
      nt = {letterSpacing: "0", fontWeight: "400"}, it = ["Webkit", "O", "Moz", "ms"],
      at = X.createElement("div").style;
    oe.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = T(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {"float": "cssFloat"},
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var a, r, o, s = oe.camelCase(t), l = e.style;
          return t = oe.cssProps[s] || (oe.cssProps[s] = E(s) || s), o = oe.cssHooks[t] || oe.cssHooks[s], void 0 === n ? o && "get" in o && void 0 !== (a = o.get(e, !1, i)) ? a : l[t] : (r = typeof n, "string" === r && (a = Le.exec(n)) && a[1] && (n = u(e, t, a), r = "number"), null != n && n === n && ("number" === r && (n += a && a[3] || (oe.cssNumber[s] ? "" : "px")), ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l[t] = n)), void 0)
        }
      },
      css: function (e, t, n, i) {
        var a, r, o, s = oe.camelCase(t);
        return t = oe.cssProps[s] || (oe.cssProps[s] = E(s) || s), o = oe.cssHooks[t] || oe.cssHooks[s], o && "get" in o && (a = o.get(e, !0, n)), void 0 === a && (a = T(e, t, i)), "normal" === a && t in nt && (a = nt[t]), "" === n || n ? (r = parseFloat(a), n === !0 || isFinite(r) ? r || 0 : a) : a
      }
    }), oe.each(["height", "width"], function (e, t) {
      oe.cssHooks[t] = {
        get: function (e, n, i) {
          return n ? et.test(oe.css(e, "display")) && 0 === e.offsetWidth ? Ze(e, tt, function () {
            return _(e, t, i)
          }) : _(e, t, i) : void 0
        }, set: function (e, n, i) {
          var a, r = i && $e(e), o = i && L(e, t, i, "border-box" === oe.css(e, "boxSizing", !1, r), r);
          return o && (a = Le.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = oe.css(e, t)), P(e, n, o)
        }
      }
    }), oe.cssHooks.marginLeft = k(ae.reliableMarginLeft, function (e, t) {
      return t ? (parseFloat(T(e, "marginLeft")) || e.getBoundingClientRect().left - Ze(e, {marginLeft: 0}, function () {
        return e.getBoundingClientRect().left
      })) + "px" : void 0
    }), oe.cssHooks.marginRight = k(ae.reliableMarginRight, function (e, t) {
      return t ? Ze(e, {display: "inline-block"}, T, [e, "marginRight"]) : void 0
    }), oe.each({margin: "", padding: "", border: "Width"}, function (e, t) {
      oe.cssHooks[e + t] = {
        expand: function (n) {
          for (var i = 0, a = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) a[e + _e[i] + t] = r[i] || r[i - 2] || r[0];
          return a
        }
      }, Je.test(e) || (oe.cssHooks[e + t].set = P)
    }), oe.fn.extend({
      css: function (e, t) {
        return Me(this, function (e, t, n) {
          var i, a, r = {}, o = 0;
          if (oe.isArray(t)) {
            for (i = $e(e), a = t.length; a > o; o++) r[t[o]] = oe.css(e, t[o], !1, i);
            return r
          }
          return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t)
        }, e, t, arguments.length > 1)
      }, show: function () {
        return R(this, !0)
      }, hide: function () {
        return R(this)
      }, toggle: function (e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          Re(this) ? oe(this).show() : oe(this).hide()
        })
      }
    }), oe.Tween = D, D.prototype = {
      constructor: D, init: function (e, t, n, i, a, r) {
        this.elem = e, this.prop = n, this.easing = a || oe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (oe.cssNumber[n] ? "" : "px")
      }, cur: function () {
        var e = D.propHooks[this.prop];
        return e && e.get ? e.get(this) : D.propHooks._default.get(this)
      }, run: function (e) {
        var t, n = D.propHooks[this.prop];
        return this.options.duration ? this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
      }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        }, set: function (e) {
          oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : oe.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, oe.easing = {
      linear: function (e) {
        return e
      }, swing: function (e) {
        return .5 - Math.cos(e * Math.PI) / 2
      }, _default: "swing"
    }, oe.fx = D.prototype.init, oe.fx.step = {};
    var rt, ot, st = /^(?:toggle|show|hide)$/, lt = /queueHooks$/;
    oe.Animation = oe.extend(O, {
      tweeners: {
        "*": [function (e, t) {
          var n = this.createTween(e, t);
          return u(n.elem, e, Le.exec(t), n), n
        }]
      }, tweener: function (e, t) {
        oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ce);
        for (var n, i = 0, a = e.length; a > i; i++) n = e[i], O.tweeners[n] = O.tweeners[n] || [], O.tweeners[n].unshift(t)
      }, prefilters: [G], prefilter: function (e, t) {
        t ? O.prefilters.unshift(e) : O.prefilters.push(e)
      }
    }), oe.speed = function (e, t, n) {
      var i = e && "object" == typeof e ? oe.extend({}, e) : {
        complete: n || !n && t || oe.isFunction(e) && e,
        duration: e,
        easing: n && t || t && !oe.isFunction(t) && t
      };
      return i.duration = oe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in oe.fx.speeds ? oe.fx.speeds[i.duration] : oe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
        oe.isFunction(i.old) && i.old.call(this), i.queue && oe.dequeue(this, i.queue)
      }, i
    }, oe.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Re).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
      }, animate: function (e, t, n, i) {
        var a = oe.isEmptyObject(e), r = oe.speed(t, n, i), o = function () {
          var t = O(this, oe.extend({}, e), r);
          (a || Be.get(this, "finish")) && t.stop(!0)
        };
        return o.finish = o, a || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
      }, stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n)
        };
        return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
          var t = !0, a = null != e && e + "queueHooks", r = oe.timers, o = Be.get(this);
          if (a) o[a] && o[a].stop && i(o[a]); else for (a in o) o[a] && o[a].stop && lt.test(a) && i(o[a]);
          for (a = r.length; a--;) r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(n), t = !1, r.splice(a, 1));
          !t && n || oe.dequeue(this, e)
        })
      }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
          var t, n = Be.get(this), i = n[e + "queue"], a = n[e + "queueHooks"], r = oe.timers, o = i ? i.length : 0;
          for (n.finish = !0, oe.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
          for (t = 0; o > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish
        })
      }
    }), oe.each(["toggle", "show", "hide"], function (e, t) {
      var n = oe.fn[t];
      oe.fn[t] = function (e, i, a) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, a)
      }
    }), oe.each({
      slideDown: F("show"),
      slideUp: F("hide"),
      slideToggle: F("toggle"),
      fadeIn: {opacity: "show"},
      fadeOut: {opacity: "hide"},
      fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
      oe.fn[e] = function (e, n, i) {
        return this.animate(t, e, n, i)
      }
    }), oe.timers = [], oe.fx.tick = function () {
      var e, t = 0, n = oe.timers;
      for (rt = oe.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
      n.length || oe.fx.stop(), rt = void 0
    }, oe.fx.timer = function (e) {
      oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop()
    }, oe.fx.interval = 13, oe.fx.start = function () {
      ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval))
    }, oe.fx.stop = function () {
      e.clearInterval(ot), ot = null
    }, oe.fx.speeds = {slow: 600, fast: 200, _default: 400}, oe.fn.delay = function (t, n) {
      return t = oe.fx ? oe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
        var a = e.setTimeout(n, t);
        i.stop = function () {
          e.clearTimeout(a)
        }
      })
    }, function () {
      var e = X.createElement("input"), t = X.createElement("select"), n = t.appendChild(X.createElement("option"));
      e.type = "checkbox", ae.checkOn = "" !== e.value, ae.optSelected = n.selected, t.disabled = !0, ae.optDisabled = !n.disabled, e = X.createElement("input"), e.value = "t", e.type = "radio", ae.radioValue = "t" === e.value
    }();
    var ct, ut = oe.expr.attrHandle;
    oe.fn.extend({
      attr: function (e, t) {
        return Me(this, oe.attr, e, t, arguments.length > 1)
      }, removeAttr: function (e) {
        return this.each(function () {
          oe.removeAttr(this, e)
        })
      }
    }), oe.extend({
      attr: function (e, t, n) {
        var i, a, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? oe.prop(e, t, n) : (1 === r && oe.isXMLDoc(e) || (t = t.toLowerCase(), a = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void oe.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : (i = oe.find.attr(e, t), null == i ? void 0 : i))
      }, attrHooks: {
        type: {
          set: function (e, t) {
            if (!ae.radioValue && "radio" === t && oe.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      }, removeAttr: function (e, t) {
        var n, i, a = 0, r = t && t.match(Ce);
        if (r && 1 === e.nodeType) for (; n = r[a++];) i = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
      }
    }), ct = {
      set: function (e, t, n) {
        return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ut[t] || oe.find.attr;
      ut[t] = function (e, t, i) {
        var a, r;
        return i || (r = ut[t], ut[t] = a, a = null != n(e, t, i) ? t.toLowerCase() : null, ut[t] = r), a
      }
    });
    var dt = /^(?:input|select|textarea|button)$/i, ft = /^(?:a|area)$/i;
    oe.fn.extend({
      prop: function (e, t) {
        return Me(this, oe.prop, e, t, arguments.length > 1)
      }, removeProp: function (e) {
        return this.each(function () {
          delete this[oe.propFix[e] || e]
        })
      }
    }), oe.extend({
      prop: function (e, t, n) {
        var i, a, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && oe.isXMLDoc(e) || (t = oe.propFix[t] || t, a = oe.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
      }, propHooks: {
        tabIndex: {
          get: function (e) {
            var t = oe.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : dt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      }, propFix: {"for": "htmlFor", "class": "className"}
    }), ae.optSelected || (oe.propHooks.selected = {
      get: function (e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      }, set: function (e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      oe.propFix[this.toLowerCase()] = this
    });
    var ht = /[\t\r\n\f]/g;
    oe.fn.extend({
      addClass: function (e) {
        var t, n, i, a, r, o, s, l = 0;
        if (oe.isFunction(e)) return this.each(function (t) {
          oe(this).addClass(e.call(this, t, j(this)))
        });
        if ("string" == typeof e && e) for (t = e.match(Ce) || []; n = this[l++];) if (a = j(n), i = 1 === n.nodeType && (" " + a + " ").replace(ht, " ")) {
          for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          s = oe.trim(i), a !== s && n.setAttribute("class", s)
        }
        return this
      }, removeClass: function (e) {
        var t, n, i, a, r, o, s, l = 0;
        if (oe.isFunction(e)) return this.each(function (t) {
          oe(this).removeClass(e.call(this, t, j(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e) for (t = e.match(Ce) || []; n = this[l++];) if (a = j(n), i = 1 === n.nodeType && (" " + a + " ").replace(ht, " ")) {
          for (o = 0; r = t[o++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
          s = oe.trim(i), a !== s && n.setAttribute("class", s)
        }
        return this
      }, toggleClass: function (e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
          oe(this).toggleClass(e.call(this, n, j(this), t), t)
        }) : this.each(function () {
          var t, i, a, r;
          if ("string" === n) for (i = 0, a = oe(this), r = e.match(Ce) || []; t = r[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t); else void 0 !== e && "boolean" !== n || (t = j(this), t && Be.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Be.get(this, "__className__") || ""))
        })
      }, hasClass: function (e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + j(n) + " ").replace(ht, " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var pt = /\r/g, mt = /[\x20\t\r\n\f]+/g;
    oe.fn.extend({
      val: function (e) {
        var t, n, i, a = this[0];
        {
          if (arguments.length) return i = oe.isFunction(e), this.each(function (n) {
            var a;
            1 === this.nodeType && (a = i ? e.call(this, n, oe(this).val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : oe.isArray(a) && (a = oe.map(a, function (e) {
              return null == e ? "" : e + ""
            })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
          });
          if (a) return t = oe.valHooks[a.type] || oe.valHooks[a.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)
        }
      }
    }), oe.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = oe.find.attr(e, "value");
            return null != t ? t : oe.trim(oe.text(e)).replace(mt, " ")
          }
        }, select: {
          get: function (e) {
            for (var t, n, i = e.options, a = e.selectedIndex, r = "select-one" === e.type || 0 > a, o = r ? null : [], s = r ? a + 1 : i.length, l = 0 > a ? s : r ? a : 0; s > l; l++) if (n = i[l], (n.selected || l === a) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
              if (t = oe(n).val(), r) return t;
              o.push(t)
            }
            return o
          }, set: function (e, t) {
            for (var n, i, a = e.options, r = oe.makeArray(t), o = a.length; o--;) i = a[o], (i.selected = oe.inArray(oe.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }), oe.each(["radio", "checkbox"], function () {
      oe.valHooks[this] = {
        set: function (e, t) {
          return oe.isArray(t) ? e.checked = oe.inArray(oe(e).val(), t) > -1 : void 0
        }
      }, ae.checkOn || (oe.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    oe.extend(oe.event, {
      trigger: function (t, n, i, a) {
        var r, o, s, l, c, u, d, f = [i || X], h = ie.call(t, "type") ? t.type : t,
          p = ie.call(t, "namespace") ? t.namespace.split(".") : [];
        if (o = s = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !gt.test(h + oe.event.triggered) && (h.indexOf(".") > -1 && (p = h.split("."), h = p.shift(), p.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[oe.expando] ? t : new oe.Event(h, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : oe.makeArray(n, [t]), d = oe.event.special[h] || {}, a || !d.trigger || d.trigger.apply(i, n) !== !1)) {
          if (!a && !d.noBubble && !oe.isWindow(i)) {
            for (l = d.delegateType || h, gt.test(l + h) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
            s === (i.ownerDocument || X) && f.push(s.defaultView || s.parentWindow || e)
          }
          for (r = 0; (o = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || h, u = (Be.get(o, "events") || {})[t.type] && Be.get(o, "handle"), u && u.apply(o, n), u = c && o[c], u && u.apply && Ae(o) && (t.result = u.apply(o, n), t.result === !1 && t.preventDefault());
          return t.type = h, a || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Ae(i) || c && oe.isFunction(i[h]) && !oe.isWindow(i) && (s = i[c], s && (i[c] = null), oe.event.triggered = h, i[h](), oe.event.triggered = void 0, s && (i[c] = s)), t.result
        }
      }, simulate: function (e, t, n) {
        var i = oe.extend(new oe.Event, n, {type: e, isSimulated: !0});
        oe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
      }
    }), oe.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          oe.event.trigger(e, t, this)
        })
      }, triggerHandler: function (e, t) {
        var n = this[0];
        return n ? oe.event.trigger(e, t, n, !0) : void 0
      }
    }), oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
      oe.fn[t] = function (e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), oe.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), ae.focusin = "onfocusin" in e, ae.focusin || oe.each({focus: "focusin", blur: "focusout"}, function (e, t) {
      var n = function (e) {
        oe.event.simulate(t, e.target, oe.event.fix(e))
      };
      oe.event.special[t] = {
        setup: function () {
          var i = this.ownerDocument || this, a = Be.access(i, t);
          a || i.addEventListener(e, n, !0), Be.access(i, t, (a || 0) + 1)
        }, teardown: function () {
          var i = this.ownerDocument || this, a = Be.access(i, t) - 1;
          a ? Be.access(i, t, a) : (i.removeEventListener(e, n, !0), Be.remove(i, t))
        }
      }
    });
    var vt = e.location, bt = oe.now(), yt = /\?/;
    oe.parseJSON = function (e) {
      return JSON.parse(e + "")
    }, oe.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (i) {
        n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || oe.error("Invalid XML: " + t), n
    };
    var xt = /#.*$/, wt = /([?&])_=[^&]*/, Ct = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, At = /^\/\//, Bt = {},
      Tt = {}, kt = "*/".concat("*"), Et = X.createElement("a");
    Et.href = vt.href, oe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: vt.href,
        type: "GET",
        isLocal: St.test(vt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": kt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
        responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
        converters: {"* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML},
        flatOptions: {url: !0, context: !0}
      },
      ajaxSetup: function (e, t) {
        return t ? U(U(e, oe.ajaxSettings), t) : U(oe.ajaxSettings, e)
      },
      ajaxPrefilter: H(Bt),
      ajaxTransport: H(Tt),
      ajax: function (t, n) {
        function i(t, n, i, s) {
          var c, d, b, y, w, S = n;
          2 !== x && (x = 2, l && e.clearTimeout(l), a = void 0, o = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (y = q(f, C, i)), y = W(f, y, C, c), c ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (oe.lastModified[r] = w), w = C.getResponseHeader("etag"), w && (oe.etag[r] = w)), 204 === t || "HEAD" === f.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = y.state, d = y.data, b = y.error, c = !b)) : (b = S, !t && S || (S = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || S) + "", c ? m.resolveWith(h, [d, S, C]) : m.rejectWith(h, [C, S, b]), C.statusCode(v), v = void 0, u && p.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : b]), g.fireWith(h, [C, S]), u && (p.trigger("ajaxComplete", [C, f]), --oe.active || oe.event.trigger("ajaxStop")))
        }

        "object" == typeof t && (n = t, t = void 0), n = n || {};
        var a, r, o, s, l, c, u, d, f = oe.ajaxSetup({}, n), h = f.context || f,
          p = f.context && (h.nodeType || h.jquery) ? oe(h) : oe.event, m = oe.Deferred(),
          g = oe.Callbacks("once memory"), v = f.statusCode || {}, b = {}, y = {}, x = 0, w = "canceled", C = {
            readyState: 0, getResponseHeader: function (e) {
              var t;
              if (2 === x) {
                if (!s) for (s = {}; t = Ct.exec(o);) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()]
              }
              return null == t ? null : t
            }, getAllResponseHeaders: function () {
              return 2 === x ? o : null
            }, setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return x || (e = y[n] = y[n] || e, b[e] = t), this
            }, overrideMimeType: function (e) {
              return x || (f.mimeType = e), this
            }, statusCode: function (e) {
              var t;
              if (e) if (2 > x) for (t in e) v[t] = [v[t], e[t]]; else C.always(e[C.status]);
              return this
            }, abort: function (e) {
              var t = e || w;
              return a && a.abort(t), i(0, t), this
            }
          };
        if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((t || f.url || vt.href) + "").replace(xt, "").replace(At, vt.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = oe.trim(f.dataType || "*").toLowerCase().match(Ce) || [""], null == f.crossDomain) {
          c = X.createElement("a");
          try {
            c.href = f.url, c.href = c.href, f.crossDomain = Et.protocol + "//" + Et.host != c.protocol + "//" + c.host
          } catch (S) {
            f.crossDomain = !0
          }
        }
        if (f.data && f.processData && "string" != typeof f.data && (f.data = oe.param(f.data, f.traditional)), V(Bt, f, n, C), 2 === x) return C;
        u = oe.event && f.global, u && 0 === oe.active++ && oe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Mt.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (yt.test(r) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = wt.test(r) ? r.replace(wt, "$1_=" + bt++) : r + (yt.test(r) ? "&" : "?") + "_=" + bt++)), f.ifModified && (oe.lastModified[r] && C.setRequestHeader("If-Modified-Since", oe.lastModified[r]), oe.etag[r] && C.setRequestHeader("If-None-Match", oe.etag[r])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : f.accepts["*"]);
        for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
        if (f.beforeSend && (f.beforeSend.call(h, C, f) === !1 || 2 === x)) return C.abort();
        w = "abort";
        for (d in{success: 1, error: 1, complete: 1}) C[d](f[d]);
        if (a = V(Tt, f, n, C)) {
          if (C.readyState = 1, u && p.trigger("ajaxSend", [C, f]), 2 === x) return C;
          f.async && f.timeout > 0 && (l = e.setTimeout(function () {
            C.abort("timeout")
          }, f.timeout));
          try {
            x = 1, a.send(b, i)
          } catch (S) {
            if (!(2 > x)) throw S;
            i(-1, S)
          }
        } else i(-1, "No Transport");
        return C
      },
      getJSON: function (e, t, n) {
        return oe.get(e, t, n, "json")
      },
      getScript: function (e, t) {
        return oe.get(e, void 0, t, "script")
      }
    }), oe.each(["get", "post"], function (e, t) {
      oe[t] = function (e, n, i, a) {
        return oe.isFunction(n) && (a = a || i, i = n, n = void 0), oe.ajax(oe.extend({
          url: e,
          type: t,
          dataType: a,
          data: n,
          success: i
        }, oe.isPlainObject(e) && e))
      }
    }), oe._evalUrl = function (e) {
      return oe.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, oe.fn.extend({
      wrapAll: function (e) {
        var t;
        return oe.isFunction(e) ? this.each(function (t) {
          oe(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this)
      }, wrapInner: function (e) {
        return oe.isFunction(e) ? this.each(function (t) {
          oe(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
          var t = oe(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      }, wrap: function (e) {
        var t = oe.isFunction(e);
        return this.each(function (n) {
          oe(this).wrapAll(t ? e.call(this, n) : e)
        })
      }, unwrap: function () {
        return this.parent().each(function () {
          oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes)
        }).end()
      }
    }), oe.expr.filters.hidden = function (e) {
      return !oe.expr.filters.visible(e)
    }, oe.expr.filters.visible = function (e) {
      return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Pt = /%20/g, Lt = /\[\]$/, _t = /\r?\n/g, Rt = /^(?:submit|button|image|reset|file)$/i,
      Dt = /^(?:input|select|textarea|keygen)/i;
    oe.param = function (e, t) {
      var n, i = [], a = function (e, t) {
        t = oe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
      if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
        a(this.name, this.value)
      }); else for (n in e) Y(n, e[n], t, a);
      return i.join("&").replace(Pt, "+")
    }, oe.fn.extend({
      serialize: function () {
        return oe.param(this.serializeArray())
      }, serializeArray: function () {
        return this.map(function () {
          var e = oe.prop(this, "elements");
          return e ? oe.makeArray(e) : this
        }).filter(function () {
          var e = this.type;
          return this.name && !oe(this).is(":disabled") && Dt.test(this.nodeName) && !Rt.test(e) && (this.checked || !De.test(e))
        }).map(function (e, t) {
          var n = oe(this).val();
          return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
            return {name: t.name, value: e.replace(_t, "\r\n")}
          }) : {name: t.name, value: n.replace(_t, "\r\n")}
        }).get()
      }
    }), oe.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest
      } catch (t) {
      }
    };
    var Nt = {0: 200, 1223: 204}, Ft = oe.ajaxSettings.xhr();
    ae.cors = !!Ft && "withCredentials" in Ft, ae.ajax = Ft = !!Ft, oe.ajaxTransport(function (t) {
      var n, i;
      return ae.cors || Ft && !t.crossDomain ? {
        send: function (a, r) {
          var o, s = t.xhr();
          if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) s[o] = t.xhrFields[o];
          t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
          for (o in a) s.setRequestHeader(o, a[o]);
          n = function (e) {
            return function () {
              n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Nt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
            }
          }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
            4 === s.readyState && e.setTimeout(function () {
              n && i()
            })
          }, n = n("abort");
          try {
            s.send(t.hasContent && t.data || null)
          } catch (l) {
            if (n) throw l
          }
        }, abort: function () {
          n && n()
        }
      } : void 0
    }), oe.ajaxSetup({
      accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
      contents: {script: /\b(?:java|ecma)script\b/},
      converters: {
        "text script": function (e) {
          return oe.globalEval(e), e
        }
      }
    }), oe.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), oe.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function (i, a) {
            t = oe("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
              t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
            }), X.head.appendChild(t[0])
          }, abort: function () {
            n && n()
          }
        }
      }
    });
    var It = [], Gt = /(=)\?(?=&|$)|\?\?/;
    oe.ajaxSetup({
      jsonp: "callback", jsonpCallback: function () {
        var e = It.pop() || oe.expando + "_" + bt++;
        return this[e] = !0, e
      }
    }), oe.ajaxPrefilter("json jsonp", function (t, n, i) {
      var a, r, o,
        s = t.jsonp !== !1 && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
      return s || "jsonp" === t.dataTypes[0] ? (a = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Gt, "$1" + a) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function () {
        return o || oe.error(a + " was not called"), o[0]
      }, t.dataTypes[0] = "json", r = e[a], e[a] = function () {
        o = arguments
      }, i.always(function () {
        void 0 === r ? oe(e).removeProp(a) : e[a] = r, t[a] && (t.jsonpCallback = n.jsonpCallback, It.push(a)), o && oe.isFunction(r) && r(o[0]), o = r = void 0
      }), "script") : void 0
    }), oe.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || X;
      var i = me.exec(e), a = !n && [];
      return i ? [t.createElement(i[1])] : (i = h([e], t, a), a && a.length && oe(a).remove(), oe.merge([], i.childNodes))
    };
    var zt = oe.fn.load;
    oe.fn.load = function (e, t, n) {
      if ("string" != typeof e && zt) return zt.apply(this, arguments);
      var i, a, r, o = this, s = e.indexOf(" ");
      return s > -1 && (i = oe.trim(e.slice(s)), e = e.slice(0, s)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), o.length > 0 && oe.ajax({
        url: e,
        type: a || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        r = arguments, o.html(i ? oe("<div>").append(oe.parseHTML(e)).find(i) : e)
      }).always(n && function (e, t) {
        o.each(function () {
          n.apply(this, r || [e.responseText, t, e])
        })
      }), this
    }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      oe.fn[t] = function (e) {
        return this.on(t, e)
      }
    }), oe.expr.filters.animated = function (e) {
      return oe.grep(oe.timers, function (t) {
        return e === t.elem
      }).length
    }, oe.offset = {
      setOffset: function (e, t, n) {
        var i, a, r, o, s, l, c, u = oe.css(e, "position"), d = oe(e), f = {};
        "static" === u && (e.style.position = "relative"), s = d.offset(), r = oe.css(e, "top"), l = oe.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), o = i.top, a = i.left) : (o = parseFloat(r) || 0, a = parseFloat(l) || 0), oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, s))), null != t.top && (f.top = t.top - s.top + o), null != t.left && (f.left = t.left - s.left + a), "using" in t ? t.using.call(e, f) : d.css(f)
      }
    }, oe.fn.extend({
      offset: function (e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          oe.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0], a = {top: 0, left: 0}, r = i && i.ownerDocument;
        if (r) return t = r.documentElement, oe.contains(t, i) ? (a = i.getBoundingClientRect(), n = K(r), {
          top: a.top + n.pageYOffset - t.clientTop,
          left: a.left + n.pageXOffset - t.clientLeft
        }) : a
      }, position: function () {
        if (this[0]) {
          var e, t, n = this[0], i = {top: 0, left: 0};
          return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), oe.nodeName(e[0], "html") || (i = e.offset()), i.top += oe.css(e[0], "borderTopWidth", !0), i.left += oe.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - i.top - oe.css(n, "marginTop", !0),
            left: t.left - i.left - oe.css(n, "marginLeft", !0)
          }
        }
      }, offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === oe.css(e, "position");) e = e.offsetParent;
          return e || Qe
        })
      }
    }), oe.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
      var n = "pageYOffset" === t;
      oe.fn[e] = function (i) {
        return Me(this, function (e, i, a) {
          var r = K(e);
          return void 0 === a ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : a, n ? a : r.pageYOffset) : e[i] = a)
        }, e, i, arguments.length)
      }
    }), oe.each(["top", "left"], function (e, t) {
      oe.cssHooks[t] = k(ae.pixelPosition, function (e, n) {
        return n ? (n = T(e, t), Xe.test(n) ? oe(e).position()[t] + "px" : n) : void 0
      })
    }), oe.each({Height: "height", Width: "width"}, function (e, t) {
      oe.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, i) {
        oe.fn[i] = function (i, a) {
          var r = arguments.length && (n || "boolean" != typeof i),
            o = n || (i === !0 || a === !0 ? "margin" : "border");
          return Me(this, function (t, n, i) {
            var a;
            return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === i ? oe.css(t, n, o) : oe.style(t, n, i, o)
          }, t, r ? i : void 0, r, null)
        }
      })
    }), oe.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      }, unbind: function (e, t) {
        return this.off(e, null, t)
      }, delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
      }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      }, size: function () {
        return this.length
      }
    }), oe.fn.andSelf = oe.fn.addBack, "function" == typeof n && n.amd && n("jquery", [], function () {
      return oe
    });
    var Ot = e.jQuery, jt = e.$;
    return oe.noConflict = function (t) {
      return e.$ === oe && (e.$ = jt), t && e.jQuery === oe && (e.jQuery = Ot), oe
    }, t || (e.jQuery = e.$ = oe), oe
  })
}, function (e, t, n) {
  var i = !1;
  !function (t, a) {
    "use strict";
    "function" == typeof i && i.amd ? i(["jquery"], function (e) {
      return a(e, t, t.document, t.Math)
    }) : e.exports = a(n(2), t, t.document, t.Math)
  }("undefined" != typeof window ? window : this, function (e, t, n, i, a) {
    "use strict";
    var r, o = "fullpage-wrapper", s = "." + o, l = "fp-scrollable", c = "." + l, u = ".slimScrollBar",
      d = ".slimScrollRail", f = "fp-responsive", h = "fp-notransition", p = "fp-destroyed", m = "fp-enabled",
      g = "fp-viewing", v = "active", b = "." + v, y = "fp-completely", x = "." + y, w = ".section", C = "fp-section",
      S = "." + C, M = S + b, A = S + ":first", B = S + ":last", T = "fp-tableCell", k = "." + T, E = "fp-auto-height",
      P = "fp-normal-scroll", L = "fp-nav", _ = "#" + L, R = "fp-tooltip", D = "." + R, N = "fp-show-active",
      F = ".slide", I = "fp-slide", G = "." + I, z = G + b, O = "fp-slides", j = "." + O, H = "fp-slidesContainer",
      V = "." + H, U = "fp-table", q = "fp-slidesNav", W = "." + q, Y = W + " a", K = "fp-controlArrow", J = "." + K,
      X = "fp-prev", $ = "." + X, Z = K + " " + X, Q = J + $, ee = "fp-next", te = "." + ee, ne = K + " " + ee,
      ie = J + te, ae = e(t), re = e(n);
    e.fn.fullpage = function (l) {
      function c() {
        l.css3 && (l.css3 = vt()), l.scrollBar = l.scrollBar || l.hybrid, d(), K(), Ft.setAllowScrolling(!0), Ft.setAutoScrolling(l.autoScrolling, "internal");
        var t = e(M).find(z);
        t.length && (0 !== e(M).index(S) || 0 === e(M).index(S) && 0 !== t.index()) && Bt(t), Je(), gt(), ae.on("load", function () {
          De()
        })
      }

      function u() {
        ae.on("scroll", de).on("hashchange", Ne).blur(He).resize(Ke), re.keydown(Fe).keyup(Ge).on("click touchstart", _ + " a", Ve).on("click touchstart", Y, Ue).on("click", D, Ie), e(S).on("click touchstart", J, je), l.normalScrollElements && (re.on("mouseenter", l.normalScrollElements, function () {
          Ft.setMouseWheelScrolling(!1)
        }), re.on("mouseleave", l.normalScrollElements, function () {
          Ft.setMouseWheelScrolling(!0)
        }))
      }

      function d() {
        l.anchors.length || (l.anchors = e(l.sectionSelector + "[data-anchor]").map(function () {
          return e(this).data("anchor").toString()
        }).get()), l.navigationTooltips.length || (l.navigationTooltips = e(l.sectionSelector + "[data-tooltip]").map(function () {
          return e(this).data("tooltip").toString()
        }).get())
      }

      function K() {
        Vt.css({
          height: "100%",
          position: "relative"
        }), Vt.addClass(o), e("html").addClass(m), Ut = ae.height(), Vt.removeClass(p), oe(), e(S).each(function (t) {
          var n = e(this), i = n.find(G), a = i.length;
          ee(n, t), te(n, t), a > 0 ? $(n, i, a) : l.verticalCentered && rt(n)
        }), l.fixedElements && l.css3 && e(l.fixedElements).appendTo(Nt), l.navigation && le(), l.scrollOverflow ? ("complete" === n.readyState && ce(), ae.on("load", ce)) : ue()
      }

      function $(t, n, i) {
        var a = 100 * i, r = 100 / i;
        n.wrapAll('<div class="' + H + '" />'), n.parent().wrap('<div class="' + O + '" />'), t.find(V).css("width", a + "%"), i > 1 && (l.controlArrows && se(t), l.slidesNavigation && ft(t, i)), n.each(function (t) {
          e(this).css("width", r + "%"), l.verticalCentered && rt(e(this))
        });
        var o = t.find(z);
        o.length && (0 !== e(M).index(S) || 0 === e(M).index(S) && 0 !== o.index()) ? Bt(o) : n.eq(0).addClass(v)
      }

      function ee(t, n) {
        n || 0 !== e(M).length || t.addClass(v), t.css("height", Ut + "px"), l.paddingTop && t.css("padding-top", l.paddingTop), l.paddingBottom && t.css("padding-bottom", l.paddingBottom), "undefined" != typeof l.sectionsColor[n] && t.css("background-color", l.sectionsColor[n]), "undefined" != typeof l.anchors[n] && t.attr("data-anchor", l.anchors[n])
      }

      function te(t, n) {
        "undefined" != typeof l.anchors[n] && t.hasClass(v) && tt(l.anchors[n], n), l.menu && l.css3 && e(l.menu).closest(s).length && e(l.menu).appendTo(Nt)
      }

      function oe() {
        e(l.sectionSelector).each(function () {
          e(this).addClass(C)
        }), e(l.slideSelector).each(function () {
          e(this).addClass(I)
        })
      }

      function se(e) {
        e.find(j).after('<div class="' + Z + '"></div><div class="' + ne + '"></div>'), "#fff" != l.controlArrowColor && (e.find(ie).css("border-color", "transparent transparent transparent " + l.controlArrowColor), e.find(Q).css("border-color", "transparent " + l.controlArrowColor + " transparent transparent")), l.loopHorizontal || e.find(Q).hide()
      }

      function le() {
        Nt.append('<div id="' + L + '"><ul></ul></div>');
        var t = e(_);
        t.addClass(function () {
          return l.showActiveTooltip ? N + " " + l.navigationPosition : l.navigationPosition
        });
        for (var n = 0; n < e(S).length; n++) {
          var i = "";
          l.anchors.length && (i = l.anchors[n]);
          var a = '<li><a href="#' + i + '"><span></span></a>', r = l.navigationTooltips[n];
          "undefined" != typeof r && "" !== r && (a += '<div class="' + R + " " + l.navigationPosition + '">' + r + "</div>"), a += "</li>", t.find("ul").append(a)
        }
        e(_).css("margin-top", "-" + e(_).height() / 2 + "px"), e(_).find("li").eq(e(M).index(S)).find("a").addClass(v)
      }

      function ce() {
        e(S).each(function () {
          var t = e(this).find(G);
          t.length ? t.each(function () {
            at(e(this))
          }) : at(e(this))
        }), ue()
      }

      function ue() {
        var t = e(M);
        t.addClass(y), l.scrollOverflowHandler.afterRender && l.scrollOverflowHandler.afterRender(t), Pe(t), Le(t), e.isFunction(l.afterLoad) && l.afterLoad.call(t, t.data("anchor"), t.index(S) + 1), e.isFunction(l.afterRender) && l.afterRender.call(Vt)
      }

      function de() {
        var t;
        if (!l.autoScrolling || l.scrollBar) {
          for (var i = ae.scrollTop(), a = he(i), r = 0, o = i + ae.height() / 2, s = n.querySelectorAll(S), c = 0; c < s.length; ++c) {
            var u = s[c];
            u.offsetTop <= o && (r = c)
          }
          if (fe(a) && (e(M).hasClass(y) || e(M).addClass(y).siblings().removeClass(y)), t = e(s).eq(r), !t.hasClass(v)) {
            an = !0;
            var d = e(M), f = d.index(S) + 1, h = nt(t), p = t.data("anchor"), m = t.index(S) + 1, g = t.find(z);
            if (g.length) var b = g.data("anchor"), x = g.index();
            Yt && (t.addClass(v).siblings().removeClass(v), e.isFunction(l.onLeave) && l.onLeave.call(d, f, m, h), e.isFunction(l.afterLoad) && l.afterLoad.call(t, p, m), Pe(t), tt(p, m - 1), l.anchors.length && (It = p, ht(x, b, p, m))), clearTimeout(Qt), Qt = setTimeout(function () {
              an = !1
            }, 100)
          }
          l.fitToSection && (clearTimeout(en), en = setTimeout(function () {
            Yt && l.fitToSection && (e(M).is(t) && (qt = !0), Me(e(M)), qt = !1)
          }, l.fitToSectionDelay))
        }
      }

      function fe(t) {
        var n = e(M).position().top, i = n + ae.height();
        return "up" == t ? i >= ae.scrollTop() + ae.height() : n <= ae.scrollTop()
      }

      function he(e) {
        var t = e > rn ? "down" : "up";
        return rn = e, t
      }

      function pe(e, t) {
        if (Jt.m[e]) {
          var n, i;
          if ("down" == e ? (n = "bottom", i = Ft.moveSectionDown) : (n = "top", i = Ft.moveSectionUp), t.length > 0) {
            if (!l.scrollOverflowHandler.isScrolled(n, t)) return !0;
            i()
          } else i()
        }
      }

      function me(t) {
        var n = t.originalEvent;
        if (!ge(t.target) && ve(n)) {
          l.autoScrolling && t.preventDefault();
          var a = e(M), r = l.scrollOverflowHandler.scrollable(a);
          if (Yt && !Ot) {
            var o = At(n);
            ln = o.y, cn = o.x, a.find(j).length && i.abs(sn - cn) > i.abs(on - ln) ? i.abs(sn - cn) > ae.outerWidth() / 100 * l.touchSensitivity && (sn > cn ? Jt.m.right && Ft.moveSlideRight() : Jt.m.left && Ft.moveSlideLeft()) : l.autoScrolling && i.abs(on - ln) > ae.height() / 100 * l.touchSensitivity && (on > ln ? pe("down", r) : ln > on && pe("up", r))
          }
        }
      }

      function ge(t, n) {
        n = n || 0;
        var i = e(t).parent();
        return n < l.normalScrollElementTouchThreshold && i.is(l.normalScrollElements) ? !0 : n == l.normalScrollElementTouchThreshold ? !1 : ge(i, ++n)
      }

      function ve(e) {
        return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
      }

      function be(e) {
        var t = e.originalEvent;
        if (l.fitToSection && Dt.stop(), ve(t)) {
          var n = At(t);
          on = n.y, sn = n.x
        }
      }

      function ye(e, t) {
        for (var n = 0, a = e.slice(i.max(e.length - t, 1)), r = 0; r < a.length; r++) n += a[r];
        return i.ceil(n / t)
      }

      function xe(n) {
        var a = (new Date).getTime(), r = e(x).hasClass(P);
        if (l.autoScrolling && !zt && !r) {
          n = n || t.event;
          var o = n.wheelDelta || -n.deltaY || -n.detail, s = i.max(-1, i.min(1, o)),
            c = "undefined" != typeof n.wheelDeltaX || "undefined" != typeof n.deltaX,
            u = i.abs(n.wheelDeltaX) < i.abs(n.wheelDelta) || i.abs(n.deltaX) < i.abs(n.deltaY) || !c;
          Kt.length > 149 && Kt.shift(), Kt.push(i.abs(o)), l.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
          var d = e(M), f = l.scrollOverflowHandler.scrollable(d), h = a - un;
          if (un = a, h > 200 && (Kt = []), Yt) {
            var p = ye(Kt, 10), m = ye(Kt, 70), g = p >= m;
            g && u && (0 > s ? pe("down", f) : pe("up", f))
          }
          return !1
        }
        l.fitToSection && Dt.stop()
      }

      function we(t, n) {
        var i = "undefined" == typeof n ? e(M) : n, a = i.find(j), r = a.find(G).length;
        if (!(!a.length || Ot || 2 > r)) {
          var o = a.find(z), s = null;
          if (s = "prev" === t ? o.prev(G) : o.next(G), !s.length) {
            if (!l.loopHorizontal) return;
            s = "prev" === t ? o.siblings(":last") : o.siblings(":first")
          }
          Ot = !0, Ye(a, s)
        }
      }

      function Ce() {
        e(z).each(function () {
          Bt(e(this), "internal")
        })
      }

      function Se(e) {
        var t = e.position(), n = t.top, i = t.top > dn, a = n - Ut + e.outerHeight();
        return e.outerHeight() > Ut ? i || (n = a) : (i || qt && e.is(":last-child")) && (n = a), dn = n, n
      }

      function Me(t, n, i) {
        if ("undefined" != typeof t) {
          var a = Se(t), r = {
            element: t,
            callback: n,
            isMovementUp: i,
            dtop: a,
            yMovement: nt(t),
            anchorLink: t.data("anchor"),
            sectionIndex: t.index(S),
            activeSlide: t.find(z),
            activeSection: e(M),
            leavingSection: e(M).index(S) + 1,
            localIsResizing: qt
          };
          if (!(r.activeSection.is(t) && !qt || l.scrollBar && ae.scrollTop() === r.dtop && !t.hasClass(E))) {
            if (r.activeSlide.length) var o = r.activeSlide.data("anchor"), s = r.activeSlide.index();
            l.autoScrolling && l.continuousVertical && "undefined" != typeof r.isMovementUp && (!r.isMovementUp && "up" == r.yMovement || r.isMovementUp && "down" == r.yMovement) && (r = Te(r)), e.isFunction(l.onLeave) && !r.localIsResizing && l.onLeave.call(r.activeSection, r.leavingSection, r.sectionIndex + 1, r.yMovement) === !1 || (_e(r.activeSection), t.addClass(v).siblings().removeClass(v), Pe(t), Yt = !1, ht(s, o, r.anchorLink, r.sectionIndex), Ae(r), It = r.anchorLink, tt(r.anchorLink, r.sectionIndex))
          }
        }
      }

      function Ae(t) {
        if (l.css3 && l.autoScrolling && !l.scrollBar) {
          var n = "translate3d(0px, -" + t.dtop + "px, 0px)";
          st(n, !0), l.scrollingSpeed ? $t = setTimeout(function () {
            Ee(t)
          }, l.scrollingSpeed) : Ee(t)
        } else {
          var i = Be(t);
          e(i.element).animate(i.options, l.scrollingSpeed, l.easing).promise().done(function () {
            l.scrollBar ? setTimeout(function () {
              Ee(t)
            }, 30) : Ee(t)
          })
        }
      }

      function Be(e) {
        var t = {};
        return l.autoScrolling && !l.scrollBar ? (t.options = {top: -e.dtop}, t.element = s) : (t.options = {scrollTop: e.dtop}, t.element = "html, body"), t
      }

      function Te(t) {
        return t.isMovementUp ? e(M).before(t.activeSection.nextAll(S)) : e(M).after(t.activeSection.prevAll(S).get().reverse()), Tt(e(M).position().top), Ce(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = nt(t.element), t
      }

      function ke(t) {
        t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(A).before(t.wrapAroundElements) : e(B).after(t.wrapAroundElements), Tt(e(M).position().top), Ce())
      }

      function Ee(t) {
        ke(t), t.element.find(".fp-scrollable").mouseover(), e.isFunction(l.afterLoad) && !t.localIsResizing && l.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), Le(t.element), t.element.addClass(y).siblings().removeClass(y), Yt = !0, e.isFunction(t.callback) && t.callback.call(this)
      }

      function Pe(t) {
        var t = Re(t);
        t.find("img[data-src], source[data-src], audio[data-src]").each(function () {
          e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src"), e(this).is("source") && e(this).closest("video").get(0).load()
        })
      }

      function Le(t) {
        var t = Re(t);
        t.find("video, audio").each(function () {
          var t = e(this).get(0);
          t.hasAttribute("autoplay") && "function" == typeof t.play && t.play()
        })
      }

      function _e(t) {
        var t = Re(t);
        t.find("video, audio").each(function () {
          var t = e(this).get(0);
          t.hasAttribute("data-ignore") || "function" != typeof t.pause || t.pause()
        })
      }

      function Re(t) {
        var n = t.find(z);
        return n.length && (t = e(n)), t
      }

      function De() {
        var e = t.location.hash.replace("#", "").split("/"), n = e[0], i = e[1];
        n && (l.animateAnchor ? ut(n, i) : Ft.silentMoveTo(n, i))
      }

      function Ne() {
        if (!an && !l.lockAnchors) {
          var e = t.location.hash.replace("#", "").split("/"), n = e[0], i = e[1], a = "undefined" == typeof It,
            r = "undefined" == typeof It && "undefined" == typeof i && !Ot;
          n.length && (n && n !== It && !a || r || !Ot && Gt != i) && ut(n, i)
        }
      }

      function Fe(t) {
        clearTimeout(tn);
        var n = e(":focus");
        if (!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && l.keyboardScrolling && l.autoScrolling) {
          var i = t.which, a = [40, 38, 32, 33, 34];
          e.inArray(i, a) > -1 && t.preventDefault(), zt = t.ctrlKey, tn = setTimeout(function () {
            qe(t)
          }, 150)
        }
      }

      function Ie() {
        e(this).prev().trigger("click")
      }

      function Ge(e) {
        Wt && (zt = e.ctrlKey)
      }

      function ze(e) {
        2 == e.which && (fn = e.pageY, Vt.on("mousemove", We))
      }

      function Oe(e) {
        2 == e.which && Vt.off("mousemove")
      }

      function je() {
        var t = e(this).closest(S);
        e(this).hasClass(X) ? Jt.m.left && Ft.moveSlideLeft(t) : Jt.m.right && Ft.moveSlideRight(t)
      }

      function He() {
        Wt = !1, zt = !1
      }

      function Ve(t) {
        t.preventDefault();
        var n = e(this).parent().index();
        Me(e(S).eq(n))
      }

      function Ue(t) {
        t.preventDefault();
        var n = e(this).closest(S).find(j), i = n.find(G).eq(e(this).closest("li").index());
        Ye(n, i)
      }

      function qe(t) {
        var n = t.shiftKey;
        switch (t.which) {
          case 38:
          case 33:
            Jt.k.up && Ft.moveSectionUp();
            break;
          case 32:
            if (n && Jt.k.up) {
              Ft.moveSectionUp();
              break
            }
          case 40:
          case 34:
            Jt.k.down && Ft.moveSectionDown();
            break;
          case 36:
            Jt.k.up && Ft.moveTo(1);
            break;
          case 35:
            Jt.k.down && Ft.moveTo(e(S).length);
            break;
          case 37:
            Jt.k.left && Ft.moveSlideLeft();
            break;
          case 39:
            Jt.k.right && Ft.moveSlideRight();
            break;
          default:
            return
        }
      }

      function We(e) {
        Yt && (e.pageY < fn && Jt.m.up ? Ft.moveSectionUp() : e.pageY > fn && Jt.m.down && Ft.moveSectionDown()), fn = e.pageY
      }

      function Ye(t, n) {
        var a = n.position(), r = n.index(), o = t.closest(S), s = o.index(S), c = o.data("anchor"), u = o.find(W),
          d = mt(n), f = o.find(z), h = qt;
        if (l.onSlideLeave) {
          var p = f.index(), m = it(p, r);
          if (!h && "none" !== m && e.isFunction(l.onSlideLeave) && l.onSlideLeave.call(f, c, s + 1, p, m, r) === !1) return void(Ot = !1)
        }
        _e(f), n.addClass(v).siblings().removeClass(v), h || Pe(n), !l.loopHorizontal && l.controlArrows && (o.find(Q).toggle(0 !== r), o.find(ie).toggle(!n.is(":last-child"))), o.hasClass(v) && ht(r, d, c, s);
        var g = function () {
          h || e.isFunction(l.afterSlideLoad) && l.afterSlideLoad.call(n, c, s + 1, d, r), Le(n), Ot = !1
        };
        if (l.css3) {
          var y = "translate3d(-" + i.round(a.left) + "px, 0px, 0px)";
          Xe(t.find(V), l.scrollingSpeed > 0).css(kt(y)), Zt = setTimeout(function () {
            g()
          }, l.scrollingSpeed, l.easing)
        } else t.animate({scrollLeft: i.round(a.left)}, l.scrollingSpeed, l.easing, function () {
          g()
        });
        u.find(b).removeClass(v), u.find("li").eq(r).find("a").addClass(v)
      }

      function Ke() {
        if (Je(), jt) {
          var t = e(n.activeElement);
          if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
            var a = ae.height();
            i.abs(a - hn) > 20 * i.max(hn, a) / 100 && (Ft.reBuild(!0), hn = a)
          }
        } else clearTimeout(Xt), Xt = setTimeout(function () {
          Ft.reBuild(!0)
        }, 350)
      }

      function Je() {
        var e = l.responsive || l.responsiveWidth, t = l.responsiveHeight, n = e && ae.outerWidth() < e,
          i = t && ae.height() < t;
        e && t ? Ft.setResponsive(n || i) : e ? Ft.setResponsive(n) : t && Ft.setResponsive(i)
      }

      function Xe(e) {
        var t = "all " + l.scrollingSpeed + "ms " + l.easingcss3;
        return e.removeClass(h), e.css({"-webkit-transition": t, transition: t})
      }

      function $e(e) {
        return e.addClass(h)
      }

      function Ze(e, t) {
        var n = 825, a = 900;
        if (n > e || a > t) {
          var r = 100 * e / n, o = 100 * t / a, s = i.min(r, o), l = s.toFixed(2);
          Nt.css("font-size", l + "%")
        } else Nt.css("font-size", "100%")
      }

      function Qe(t, n) {
        l.navigation && (e(_).find(b).removeClass(v), t ? e(_).find('a[href="#' + t + '"]').addClass(v) : e(_).find("li").eq(n).find("a").addClass(v))
      }

      function et(t) {
        l.menu && (e(l.menu).find(b).removeClass(v), e(l.menu).find('[data-menuanchor="' + t + '"]').addClass(v))
      }

      function tt(e, t) {
        et(e), Qe(e, t)
      }

      function nt(t) {
        var n = e(M).index(S), i = t.index(S);
        return n == i ? "none" : n > i ? "up" : "down"
      }

      function it(e, t) {
        return e == t ? "none" : e > t ? "left" : "right"
      }

      function at(e) {
        e.css("overflow", "hidden");
        var t, n = l.scrollOverflowHandler, i = n.wrapContent(), a = e.closest(S), r = n.scrollable(e);
        r.length ? t = n.scrollHeight(e) : (t = e.get(0).scrollHeight, l.verticalCentered && (t = e.find(k).get(0).scrollHeight));
        var o = Ut - parseInt(a.css("padding-bottom")) - parseInt(a.css("padding-top"));
        t > o ? r.length ? n.update(e, o) : (l.verticalCentered ? e.find(k).wrapInner(i) : e.wrapInner(i), n.create(e, o)) : n.remove(e), e.css("overflow", "")
      }

      function rt(e) {
        e.addClass(U).wrapInner('<div class="' + T + '" style="height:' + ot(e) + 'px;" />')
      }

      function ot(e) {
        var t = Ut;
        if (l.paddingTop || l.paddingBottom) {
          var n = e;
          n.hasClass(C) || (n = e.closest(S));
          var i = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
          t = Ut - i
        }
        return t
      }

      function st(e, t) {
        t ? Xe(Vt) : $e(Vt), Vt.css(kt(e)), setTimeout(function () {
          Vt.removeClass(h)
        }, 10)
      }

      function lt(t) {
        var n = Vt.find(S + '[data-anchor="' + t + '"]');
        return n.length || (n = e(S).eq(t - 1)), n
      }

      function ct(e, t) {
        var n = t.find(j), i = n.find(G + '[data-anchor="' + e + '"]');
        return i.length || (i = n.find(G).eq(e)), i
      }

      function ut(e, t) {
        var n = lt(e);
        "undefined" == typeof t && (t = 0), e === It || n.hasClass(v) ? dt(n, t) : Me(n, function () {
          dt(n, t)
        })
      }

      function dt(e, t) {
        if ("undefined" != typeof t) {
          var n = e.find(j), i = ct(t, e);
          i.length && Ye(n, i)
        }
      }

      function ft(e, t) {
        e.append('<div class="' + q + '"><ul></ul></div>');
        var n = e.find(W);
        n.addClass(l.slidesNavPosition);
        for (var i = 0; t > i; i++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
        n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(v)
      }

      function ht(e, t, n, i) {
        var a = "";
        l.anchors.length && !l.lockAnchors && (e ? ("undefined" != typeof n && (a = n), "undefined" == typeof t && (t = e), Gt = t, pt(a + "/" + t)) : "undefined" != typeof e ? (Gt = t, pt(n)) : pt(n)), gt()
      }

      function pt(e) {
        if (l.recordHistory) location.hash = e; else if (jt || Ht) t.history.replaceState(a, a, "#" + e); else {
          var n = t.location.href.split("#")[0];
          t.location.replace(n + "#" + e)
        }
      }

      function mt(e) {
        var t = e.data("anchor"), n = e.index();
        return "undefined" == typeof t && (t = n), t
      }

      function gt() {
        var t = e(M), n = t.find(z), i = mt(t), a = mt(n), r = (t.index(S), String(i));
        n.length && (r = r + "-" + a), r = r.replace("/", "-").replace("#", "");
        var o = new RegExp("\\b\\s?" + g + "-[^\\s]+\\b", "g");
        Nt[0].className = Nt[0].className.replace(o, ""), Nt.addClass(g + "-" + r)
      }

      function vt() {
        var e, i = n.createElement("p"), r = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
        n.body.insertBefore(i, null);
        for (var o in r) i.style[o] !== a && (i.style[o] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(i).getPropertyValue(r[o]));
        return n.body.removeChild(i), e !== a && e.length > 0 && "none" !== e
      }

      function bt() {
        n.addEventListener ? (n.removeEventListener("mousewheel", xe, !1), n.removeEventListener("wheel", xe, !1), n.removeEventListener("MozMousePixelScroll", xe, !1)) : n.detachEvent("onmousewheel", xe)
      }

      function yt() {
        var e, i = "";
        t.addEventListener ? e = "addEventListener" : (e = "attachEvent", i = "on");
        var r = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== a ? "mousewheel" : "DOMMouseScroll";
        "DOMMouseScroll" == r ? n[e](i + "MozMousePixelScroll", xe, !1) : n[e](i + r, xe, !1)
      }

      function xt() {
        Vt.on("mousedown", ze).on("mouseup", Oe)
      }

      function wt() {
        Vt.off("mousedown", ze).off("mouseup", Oe)
      }

      function Ct() {
        if (jt || Ht) {
          var t = Mt();
          e(s).off("touchstart " + t.down).on("touchstart " + t.down, be), e(s).off("touchmove " + t.move).on("touchmove " + t.move, me)
        }
      }

      function St() {
        if (jt || Ht) {
          var t = Mt();
          e(s).off("touchstart " + t.down), e(s).off("touchmove " + t.move)
        }
      }

      function Mt() {
        var e;
        return e = t.PointerEvent ? {down: "pointerdown", move: "pointermove"} : {
          down: "MSPointerDown",
          move: "MSPointerMove"
        }
      }

      function At(e) {
        var t = [];
        return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Ht && ve(e) && l.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
      }

      function Bt(e, t) {
        Ft.setScrollingSpeed(0, "internal"), "undefined" != typeof t && (qt = !0), Ye(e.closest(j), e), "undefined" != typeof t && (qt = !1), Ft.setScrollingSpeed(nn.scrollingSpeed, "internal")
      }

      function Tt(e) {
        if (l.scrollBar) Vt.scrollTop(e); else if (l.css3) {
          var t = "translate3d(0px, -" + e + "px, 0px)";
          st(t, !1)
        } else Vt.css("top", -e)
      }

      function kt(e) {
        return {"-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e}
      }

      function Et(e, t, n) {
        switch (t) {
          case"up":
            Jt[n].up = e;
            break;
          case"down":
            Jt[n].down = e;
            break;
          case"left":
            Jt[n].left = e;
            break;
          case"right":
            Jt[n].right = e;
            break;
          case"all":
            "m" == n ? Ft.setAllowScrolling(e) : Ft.setKeyboardScrolling(e)
        }
      }

      function Pt() {
        Tt(0), e(_ + ", " + W + ", " + J).remove(), e(S).css({
          height: "",
          "background-color": "",
          padding: ""
        }), e(G).css({width: ""}), Vt.css({
          height: "",
          position: "",
          "-ms-touch-action": "",
          "touch-action": ""
        }), Dt.css({
          overflow: "",
          height: ""
        }), e("html").removeClass(m), e.each(Nt.get(0).className.split(/\s+/), function (e, t) {
          0 === t.indexOf(g) && Nt.removeClass(t)
        }), e(S + ", " + G).each(function () {
          l.scrollOverflowHandler.remove(e(this)), e(this).removeClass(U + " " + v)
        }), $e(Vt), Vt.find(k + ", " + V + ", " + j).each(function () {
          e(this).replaceWith(this.childNodes)
        }), Dt.scrollTop(0);
        var t = [C, I, H];
        e.each(t, function (t, n) {
          e("." + n).removeClass(n)
        })
      }

      function Lt(e, t, n) {
        l[e] = t, "internal" !== n && (nn[e] = t)
      }

      function _t() {
        return e("html").hasClass(m) ? void Rt("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (l.continuousVertical && (l.loopTop || l.loopBottom) && (l.continuousVertical = !1, Rt("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), l.scrollBar && l.scrollOverflow && Rt("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), l.continuousVertical && l.scrollBar && (l.continuousVertical = !1, Rt("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), void e.each(l.anchors, function (t, n) {
          var i = re.find("[name]").filter(function () {
            return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
          }), a = re.find("[id]").filter(function () {
            return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
          });
          (a.length || i.length) && (Rt("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), a.length && Rt("error", '"' + n + '" is is being used by another element `id` property'), i.length && Rt("error", '"' + n + '" is is being used by another element `name` property'))
        }))
      }

      function Rt(e, t) {
        console && console[e] && console[e]("fullPage: " + t)
      }

      if (e("html").hasClass(m)) return void _t();
      var Dt = e("html, body"), Nt = e("body"), Ft = e.fn.fullpage;
      l = e.extend({
        menu: !1,
        anchors: [],
        lockAnchors: !1,
        navigation: !1,
        navigationPosition: "right",
        navigationTooltips: [],
        showActiveTooltip: !1,
        slidesNavigation: !1,
        slidesNavPosition: "bottom",
        scrollBar: !1,
        hybrid: !1,
        css3: !0,
        scrollingSpeed: 700,
        autoScrolling: !0,
        fitToSection: !0,
        fitToSectionDelay: 1e3,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        loopBottom: !1,
        loopTop: !1,
        loopHorizontal: !0,
        continuousVertical: !1,
        normalScrollElements: null,
        scrollOverflow: !1,
        scrollOverflowHandler: r,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,
        keyboardScrolling: !0,
        animateAnchor: !0,
        recordHistory: !0,
        controlArrows: !0,
        controlArrowColor: "#fff",
        verticalCentered: !0,
        resize: !1,
        sectionsColor: [],
        paddingTop: 0,
        paddingBottom: 0,
        fixedElements: null,
        responsive: 0,
        responsiveWidth: 0,
        responsiveHeight: 0,
        sectionSelector: w,
        slideSelector: F,
        afterLoad: null,
        onLeave: null,
        afterRender: null,
        afterResize: null,
        afterReBuild: null,
        afterSlideLoad: null,
        onSlideLeave: null
      }, l), _t(), e.extend(e.easing, {
        easeInOutCubic: function (e, t, n, i, a) {
          return (t /= a / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        }
      }), Ft.setAutoScrolling = function (t, n) {
        Lt("autoScrolling", t, n);
        var i = e(M);
        l.autoScrolling && !l.scrollBar ? (Dt.css({
          overflow: "hidden",
          height: "100%"
        }), Ft.setRecordHistory(nn.recordHistory, "internal"), Vt.css({
          "-ms-touch-action": "none",
          "touch-action": "none"
        }), i.length && Tt(i.position().top)) : (Dt.css({
          overflow: "visible",
          height: "initial"
        }), Ft.setRecordHistory(!1, "internal"), Vt.css({
          "-ms-touch-action": "",
          "touch-action": ""
        }), Tt(0), i.length && Dt.scrollTop(i.position().top))
      }, Ft.setRecordHistory = function (e, t) {
        Lt("recordHistory", e, t)
      }, Ft.setScrollingSpeed = function (e, t) {
        Lt("scrollingSpeed", e, t)
      }, Ft.setFitToSection = function (e, t) {
        Lt("fitToSection", e, t)
      }, Ft.setLockAnchors = function (e) {
        l.lockAnchors = e
      }, Ft.setMouseWheelScrolling = function (e) {
        e ? (yt(), xt()) : (bt(), wt())
      }, Ft.setAllowScrolling = function (t, n) {
        "undefined" != typeof n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
          Et(t, n, "m")
        })) : t ? (Ft.setMouseWheelScrolling(!0), Ct()) : (Ft.setMouseWheelScrolling(!1), St())
      }, Ft.setKeyboardScrolling = function (t, n) {
        "undefined" != typeof n ? (n = n.replace(/ /g, "").split(","), e.each(n, function (e, n) {
          Et(t, n, "k")
        })) : l.keyboardScrolling = t
      }, Ft.moveSectionUp = function () {
        var t = e(M).prev(S);
        t.length || !l.loopTop && !l.continuousVertical || (t = e(S).last()), t.length && Me(t, null, !0)
      }, Ft.moveSectionDown = function () {
        var t = e(M).next(S);
        t.length || !l.loopBottom && !l.continuousVertical || (t = e(S).first()), t.length && Me(t, null, !1)
      }, Ft.silentMoveTo = function (e, t) {
        Ft.setScrollingSpeed(0, "internal"), Ft.moveTo(e, t), Ft.setScrollingSpeed(nn.scrollingSpeed, "internal")
      }, Ft.moveTo = function (e, t) {
        var n = lt(e);
        "undefined" != typeof t ? ut(e, t) : n.length > 0 && Me(n)
      }, Ft.moveSlideRight = function (e) {
        we("next", e)
      }, Ft.moveSlideLeft = function (e) {
        we("prev", e)
      }, Ft.reBuild = function (t) {
        if (!Vt.hasClass(p)) {
          qt = !0;
          var n = ae.outerWidth();
          Ut = ae.height(), l.resize && Ze(Ut, n), e(S).each(function () {
            var t = e(this).find(j), n = e(this).find(G);
            l.verticalCentered && e(this).find(k).css("height", ot(e(this)) + "px"), e(this).css("height", Ut + "px"), l.scrollOverflow && (n.length ? n.each(function () {
              at(e(this))
            }) : at(e(this))), n.length > 1 && Ye(t, t.find(z))
          });
          var i = e(M), a = i.index(S);
          a && Ft.silentMoveTo(a + 1), qt = !1, e.isFunction(l.afterResize) && t && l.afterResize.call(Vt), e.isFunction(l.afterReBuild) && !t && l.afterReBuild.call(Vt)
        }
      }, Ft.setResponsive = function (t) {
        var n = Nt.hasClass(f);
        t ? n || (Ft.setAutoScrolling(!1, "internal"), Ft.setFitToSection(!1, "internal"), e(_).hide(), Nt.addClass(f)) : n && (Ft.setAutoScrolling(nn.autoScrolling, "internal"), Ft.setFitToSection(nn.autoScrolling, "internal"), e(_).show(), Nt.removeClass(f))
      };
      var It, Gt, zt, Ot = !1,
        jt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
        Ht = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, Vt = e(this),
        Ut = ae.height(), qt = !1, Wt = !0, Yt = !0, Kt = [], Jt = {};
      Jt.m = {up: !0, down: !0, left: !0, right: !0}, Jt.k = e.extend(!0, {}, Jt.m);
      var Xt, $t, Zt, Qt, en, tn, nn = e.extend(!0, {}, l);
      e(this).length && (c(), u());
      var an = !1, rn = 0, on = 0, sn = 0, ln = 0, cn = 0, un = (new Date).getTime(), dn = 0, fn = 0, hn = Ut;
      Ft.destroy = function (t) {
        Ft.setAutoScrolling(!1, "internal"), Ft.setAllowScrolling(!1), Ft.setKeyboardScrolling(!1), Vt.addClass(p), clearTimeout(Zt), clearTimeout($t), clearTimeout(Xt), clearTimeout(Qt), clearTimeout(en), ae.off("scroll", de).off("hashchange", Ne).off("resize", Ke), re.off("click", _ + " a").off("mouseenter", _ + " li").off("mouseleave", _ + " li").off("click", Y).off("mouseover", l.normalScrollElements).off("mouseout", l.normalScrollElements), e(S).off("click", J), clearTimeout(Zt), clearTimeout($t), t && Pt()
      }
    };
    var oe = {
      afterRender: function (e) {
        var t = e.find(O), n = e.find(c);
        t.length && (n = t.find(z)), n.mouseover()
      }, create: function (e, t) {
        e.find(c).slimScroll({allowPageScroll: !0, height: t + "px", size: "10px", alwaysVisible: !0})
      }, isScrolled: function (e, t) {
        return "top" === e ? !t.scrollTop() : "bottom" === e ? t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0
      }, scrollable: function (e) {
        return e.find(j).length ? e.find(z).find(c) : e.find(c)
      }, scrollHeight: function (e) {
        return e.find(c).get(0).scrollHeight
      }, remove: function (e) {
        e.find(c).children().first().unwrap().unwrap(), e.find(u).remove(), e.find(d).remove()
      }, update: function (e, t) {
        e.find(c).css("height", t + "px").parent().css("height", t + "px")
      }, wrapContent: function () {
        return '<div class="' + l + '"></div>'
      }
    };
    r = oe
  })
}, function (e, t) {
  "use strict";

  function n() {
    var e = "(min-height: " + i().height + "px) and (min-width: " + i().width + "px)";
    return window.matchMedia(e).matches
  }

  function i() {
    return {height: 500, width: 400}
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n, t.sizes = i
}, function (e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {"default": e}
  }

  function a() {
    var e, t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
      n = arguments.length <= 1 || void 0 === arguments[1] ? 40 : arguments[1];
    e = t ? (0, f["default"])(t) : (0, f["default"])(n, n);
    var i = {center: Math.round(n / 10 / 2), pulse: n}, a = e.circle(i.pulse / 2, i.pulse / 2, i.center);
    return a.attr({
      fill: "none",
      stroke: "#6345b8",
      strokeWidth: 1
    }), e.circle(i.pulse / 2, i.pulse / 2, i.center + 1).attr(g), e.circle(i.pulse / 2, i.pulse / 2, i.center + 1).attr(g), e
  }

  function r(e) {
    for (var t = e.length - 1; t >= 0; t--) {
      var n = e[t];
      a(n, n.getAttribute("width"))
    }
  }

  function o(e) {
    for (var t = e.length - 1; t >= 0; t--) {
      var n = e[t], i = chance.integer({min: -5, max: 105}), a = chance.integer({min: -5, max: 105});
      n.style.position = "absolute", n.style.left = i + "%", n.style.top = a + "%"
    }
  }

  function s(e) {
    if (!t) {
      var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      t.setAttribute("width", e.scrollWidth), t.setAttribute("height", e.scrollHeight), t.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), e.appendChild(t)
    }
    return t
  }

  function l(e, t) {
    if ((0, m["default"])("#section-1.active").length > 0) {
      var n = (0, m["default"])(e).find("circle, line");
      n.length > 0 ? ((0, m["default"])(e).fadeOut(1e3, function () {
        n.remove()
      }), setTimeout(t, 1e3)) : t()
    }
  }

  function c(e, t) {
    for (var n = (0, f["default"])(e), i = [], a = t - 1; a >= 0; a--) {
      var r = {
        center: chance.integer({min: 1, max: 5}),
        pulse: chance.integer({min: 6, max: 50}),
        left: chance.integer({min: -5, max: 105}),
        top: chance.integer({min: -5, max: 105})
      };
      i.push([r.left, r.top]);
      var o = n.circle(r.left + "%", r.top + "%", r.center);
      o.attr({
        fill: "none",
        stroke: "#6345b8",
        strokeWidth: 1
      }), n.circle(r.left + "%", r.top + "%", r.center + 1).attr(g), n.circle(r.left + "%", r.top + "%", r.center + 1).attr(g)
    }
    for (var s = 9, l = [], a = i.length - 1; a >= 0; a--) for (var c = i[a], u = i.length - 1; u >= 0; u--) {
      var d = i[u];
      if (d != c) {
        var h = c[0] - d[0], p = c[1] - d[1];
        if (s > h && h > -s && s > p && p > -s) {
          for (var v = !0, b = l.length - 1; b >= 0; b--) {
            var y = l[b];
            y.end == c && (v = !1)
          }
          v && l.push({start: c, end: d})
        }
      }
    }
    for (var a = l.length - 1; a >= 0; a--) {
      var x = l[a];
      n.line(x.start[0] + "%", x.start[1] + "%", x.end[0] + "%", x.end[1] + "%").attr({
        fill: "#fff",
        stroke: "#fff",
        strokeDasharray: "1,5",
        strokeWidth: 1,
        "class": "line-connector",
        opacity: 0
      }).animate({opacity: 1}, 2e3)
    }
    (0, m["default"])(e).fadeIn(1e3)
  }

  function u(e) {
    var t = arguments.length <= 1 || void 0 === arguments[1] ? 50 : arguments[1],
      n = arguments.length <= 2 || void 0 === arguments[2] ? 15e3 : arguments[2], i = s(e);
    c(i, t), window.setInterval(function () {
      l(i, function () {
        c(i, t)
      })
    }, n)
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t.generateBeacon = a, t.generateBeacons = r, t.randomlyPosition = o, t.createBeacons = u;
  var d = n(6), f = i(d), h = n(8), p = (i(h), n(2)), m = i(p),
    g = {fill: "none", stroke: "#fff", strokeWidth: 1, opacity: 0, "class": "beacon__pulse"}
}, function (e, t, n) {
  var i = !1;
  !function (t) {
    var n, a, r = "0.4.2", o = "hasOwnProperty", s = /[\.\/]/, l = /\s*,\s*/, c = "*", u = function (e, t) {
      return e - t
    }, d = {n: {}}, f = function () {
      for (var e = 0, t = this.length; t > e; e++) if ("undefined" != typeof this[e]) return this[e]
    }, h = function () {
      for (var e = this.length; --e;) if ("undefined" != typeof this[e]) return this[e]
    }, p = function (e, t) {
      e = String(e);
      var i, r = a, o = Array.prototype.slice.call(arguments, 2), s = p.listeners(e), l = 0, c = [], d = {}, m = [],
        g = n;
      m.firstDefined = f, m.lastDefined = h, n = e, a = 0;
      for (var v = 0, b = s.length; b > v; v++) "zIndex" in s[v] && (c.push(s[v].zIndex), s[v].zIndex < 0 && (d[s[v].zIndex] = s[v]));
      for (c.sort(u); c[l] < 0;) if (i = d[c[l++]], m.push(i.apply(t, o)), a) return a = r, m;
      for (v = 0; b > v; v++) if (i = s[v], "zIndex" in i) if (i.zIndex == c[l]) {
        if (m.push(i.apply(t, o)), a) break;
        do if (l++, i = d[c[l]], i && m.push(i.apply(t, o)), a) break; while (i)
      } else d[i.zIndex] = i; else if (m.push(i.apply(t, o)), a) break;
      return a = r, n = g, m
    };
    p._events = d, p.listeners = function (e) {
      var t, n, i, a, r, o, l, u, f = e.split(s), h = d, p = [h], m = [];
      for (a = 0, r = f.length; r > a; a++) {
        for (u = [], o = 0, l = p.length; l > o; o++) for (h = p[o].n, n = [h[f[a]], h[c]], i = 2; i--;) t = n[i], t && (u.push(t), m = m.concat(t.f || []));
        p = u
      }
      return m
    }, p.on = function (e, t) {
      if (e = String(e), "function" != typeof t) return function () {
      };
      for (var n = e.split(l), i = 0, a = n.length; a > i; i++) !function (e) {
        for (var n, i = e.split(s), a = d, r = 0, o = i.length; o > r; r++) a = a.n, a = a.hasOwnProperty(i[r]) && a[i[r]] || (a[i[r]] = {n: {}});
        for (a.f = a.f || [], r = 0, o = a.f.length; o > r; r++) if (a.f[r] == t) {
          n = !0;
          break
        }
        !n && a.f.push(t)
      }(n[i]);
      return function (e) {
        +e == +e && (t.zIndex = +e)
      }
    }, p.f = function (e) {
      var t = [].slice.call(arguments, 1);
      return function () {
        p.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)))
      }
    }, p.stop = function () {
      a = 1
    }, p.nt = function (e) {
      return e ? new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(n) : n
    }, p.nts = function () {
      return n.split(s)
    }, p.off = p.unbind = function (e, t) {
      if (!e) return void(p._events = d = {n: {}});
      var n = e.split(l);
      if (n.length > 1) for (var i = 0, a = n.length; a > i; i++) p.off(n[i], t); else {
        n = e.split(s);
        var r, u, f, i, a, h, m, g = [d];
        for (i = 0, a = n.length; a > i; i++) for (h = 0; h < g.length; h += f.length - 2) {
          if (f = [h, 1], r = g[h].n, n[i] != c) r[n[i]] && f.push(r[n[i]]); else for (u in r) r[o](u) && f.push(r[u]);
          g.splice.apply(g, f)
        }
        for (i = 0, a = g.length; a > i; i++) for (r = g[i]; r.n;) {
          if (t) {
            if (r.f) {
              for (h = 0, m = r.f.length; m > h; h++) if (r.f[h] == t) {
                r.f.splice(h, 1);
                break
              }
              !r.f.length && delete r.f
            }
            for (u in r.n) if (r.n[o](u) && r.n[u].f) {
              var v = r.n[u].f;
              for (h = 0, m = v.length; m > h; h++) if (v[h] == t) {
                v.splice(h, 1);
                break
              }
              !v.length && delete r.n[u].f
            }
          } else {
            delete r.f;
            for (u in r.n) r.n[o](u) && r.n[u].f && delete r.n[u].f
          }
          r = r.n
        }
      }
    }, p.once = function (e, t) {
      var n = function () {
        return p.unbind(e, n), t.apply(this, arguments)
      };
      return p.on(e, n)
    }, p.version = r, p.toString = function () {
      return "You are running Eve " + r
    }, "undefined" != typeof e && e.exports ? e.exports = p : "function" == typeof i && i.amd ? i("eve", [], function () {
      return p
    }) : t.eve = p
  }(this), function (t, a) {
    if ("function" == typeof i && i.amd) i(["eve"], function (e) {
      return a(t, e)
    }); else {
      var r = n(7);
      e.exports = a(t, r)
    }
  }(window || this, function (e, t) {
    var n = function (t) {
      var n = {},
        i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
          setTimeout(e, 16)
        }, a = Array.isArray || function (e) {
          return e instanceof Array || "[object Array]" == Object.prototype.toString.call(e)
        }, r = 0, o = "M" + (+new Date).toString(36), s = function () {
          return o + (r++).toString(36)
        }, l = Date.now || function () {
          return +new Date
        }, c = function (e) {
          var t = this;
          if (null == e) return t.s;
          var n = t.s - e;
          t.b += t.dur * n, t.B += t.dur * n, t.s = e
        }, u = function (e) {
          var t = this;
          return null == e ? t.spd : void(t.spd = e)
        }, d = function (e) {
          var t = this;
          return null == e ? t.dur : (t.s = t.s * e / t.dur, void(t.dur = e))
        }, f = function () {
          var e = this;
          delete n[e.id], e.update(), t("mina.stop." + e.id, e)
        }, h = function () {
          var e = this;
          e.pdif || (delete n[e.id], e.update(), e.pdif = e.get() - e.b)
        }, p = function () {
          var e = this;
          e.pdif && (e.b = e.get() - e.pdif, delete e.pdif, n[e.id] = e)
        }, m = function () {
          var e, t = this;
          if (a(t.start)) {
            e = [];
            for (var n = 0, i = t.start.length; i > n; n++) e[n] = +t.start[n] + (t.end[n] - t.start[n]) * t.easing(t.s)
          } else e = +t.start + (t.end - t.start) * t.easing(t.s);
          t.set(e)
        }, g = function () {
          var e = 0;
          for (var a in n) if (n.hasOwnProperty(a)) {
            var r = n[a], o = r.get();
            e++, r.s = (o - r.b) / (r.dur / r.spd), r.s >= 1 && (delete n[a], r.s = 1, e--, function (e) {
              setTimeout(function () {
                t("mina.finish." + e.id, e)
              })
            }(r)), r.update()
          }
          e && i(g)
        }, v = function (e, t, a, r, o, l, b) {
          var y = {
            id: s(),
            start: e,
            end: t,
            b: a,
            s: 0,
            dur: r - a,
            spd: 1,
            get: o,
            set: l,
            easing: b || v.linear,
            status: c,
            speed: u,
            duration: d,
            stop: f,
            pause: h,
            resume: p,
            update: m
          };
          n[y.id] = y;
          var x, w = 0;
          for (x in n) if (n.hasOwnProperty(x) && (w++, 2 == w)) break;
          return 1 == w && i(g), y
        };
      return v.time = l, v.getById = function (e) {
        return n[e] || null
      }, v.linear = function (e) {
        return e
      }, v.easeout = function (e) {
        return Math.pow(e, 1.7)
      }, v.easein = function (e) {
        return Math.pow(e, .48)
      }, v.easeinout = function (e) {
        if (1 == e) return 1;
        if (0 == e) return 0;
        var t = .48 - e / 1.04, n = Math.sqrt(.1734 + t * t), i = n - t,
          a = Math.pow(Math.abs(i), 1 / 3) * (0 > i ? -1 : 1), r = -n - t,
          o = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1), s = a + o + .5;
        return 3 * (1 - s) * s * s + s * s * s
      }, v.backin = function (e) {
        if (1 == e) return 1;
        var t = 1.70158;
        return e * e * ((t + 1) * e - t)
      }, v.backout = function (e) {
        if (0 == e) return 0;
        e -= 1;
        var t = 1.70158;
        return e * e * ((t + 1) * e + t) + 1
      }, v.elastic = function (e) {
        return e == !!e ? e : Math.pow(2, -10 * e) * Math.sin((e - .075) * (2 * Math.PI) / .3) + 1
      }, v.bounce = function (e) {
        var t, n = 7.5625, i = 2.75;
        return 1 / i > e ? t = n * e * e : 2 / i > e ? (e -= 1.5 / i, t = n * e * e + .75) : 2.5 / i > e ? (e -= 2.25 / i, t = n * e * e + .9375) : (e -= 2.625 / i, t = n * e * e + .984375), t
      }, e.mina = v, v
    }("undefined" == typeof t ? function () {
    } : t), i = function (e) {
      function n(e, t) {
        if (e) {
          if (e.nodeType) return C(e);
          if (a(e, "array") && n.set) return n.set.apply(n, e);
          if (e instanceof b) return e;
          if (null == t) return e = M.doc.querySelector(String(e)), C(e)
        }
        return e = null == e ? "100%" : e, t = null == t ? "100%" : t, new w(e, t)
      }

      function i(e, t) {
        if (t) {
          if ("#text" == e && (e = M.doc.createTextNode(t.text || t["#text"] || "")), "#comment" == e && (e = M.doc.createComment(t.text || t["#text"] || "")), "string" == typeof e && (e = i(e)), "string" == typeof t) return 1 == e.nodeType ? "xlink:" == t.substring(0, 6) ? e.getAttributeNS(q, t.substring(6)) : "xml:" == t.substring(0, 4) ? e.getAttributeNS(W, t.substring(4)) : e.getAttribute(t) : "text" == t ? e.nodeValue : null;
          if (1 == e.nodeType) {
            for (var n in t) if (t[A](n)) {
              var a = B(t[n]);
              a ? "xlink:" == n.substring(0, 6) ? e.setAttributeNS(q, n.substring(6), a) : "xml:" == n.substring(0, 4) ? e.setAttributeNS(W, n.substring(4), a) : e.setAttribute(n, a) : e.removeAttribute(n)
            }
          } else "text" in t && (e.nodeValue = t.text)
        } else e = M.doc.createElementNS(W, e);
        return e
      }

      function a(e, t) {
        return t = B.prototype.toLowerCase.call(t), "finite" == t ? isFinite(e) : "array" == t && (e instanceof Array || Array.isArray && Array.isArray(e)) ? !0 : "null" == t && null === e || t == typeof e && null !== e || "object" == t && e === Object(e) || N.call(e).slice(8, -1).toLowerCase() == t
      }

      function r(e) {
        if ("function" == typeof e || Object(e) !== e) return e;
        var t = new e.constructor;
        for (var n in e) e[A](n) && (t[n] = r(e[n]));
        return t
      }

      function o(e, t) {
        for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return e.push(e.splice(n, 1)[0])
      }

      function s(e, t, n) {
        function i() {
          var a = Array.prototype.slice.call(arguments, 0), r = a.join("␀"), s = i.cache = i.cache || {},
            l = i.count = i.count || [];
          return s[A](r) ? (o(l, r), n ? n(s[r]) : s[r]) : (l.length >= 1e3 && delete s[l.shift()], l.push(r), s[r] = e.apply(t, a), n ? n(s[r]) : s[r])
        }

        return i
      }

      function l(e, t, n, i, a, r) {
        if (null == a) {
          var o = e - n, s = t - i;
          return o || s ? (180 + 180 * E.atan2(-s, -o) / R + 360) % 360 : 0
        }
        return l(e, t, a, r) - l(n, i, a, r)
      }

      function c(e) {
        return e % 360 * R / 180
      }

      function u(e) {
        return 180 * e / R % 360
      }

      function d(e) {
        var t = [];
        return e = e.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (e, n, i) {
          return i = i.split(/\s*,\s*|\s+/), "rotate" == n && 1 == i.length && i.push(0, 0), "scale" == n && (i.length > 2 ? i = i.slice(0, 2) : 2 == i.length && i.push(0, 0), 1 == i.length && i.push(i[0], 0, 0)), "skewX" == n ? t.push(["m", 1, 0, E.tan(c(i[0])), 1, 0, 0]) : "skewY" == n ? t.push(["m", 1, E.tan(c(i[0])), 0, 1, 0, 0]) : t.push([n.charAt(0)].concat(i)), e
        }), t
      }

      function f(e, t) {
        var i = ee(e), a = new n.Matrix;
        if (i) for (var r = 0, o = i.length; o > r; r++) {
          var s, l, c, u, d, f = i[r], h = f.length, p = B(f[0]).toLowerCase(), m = f[0] != p, g = m ? a.invert() : 0;
          "t" == p && 2 == h ? a.translate(f[1], 0) : "t" == p && 3 == h ? m ? (s = g.x(0, 0), l = g.y(0, 0), c = g.x(f[1], f[2]), u = g.y(f[1], f[2]), a.translate(c - s, u - l)) : a.translate(f[1], f[2]) : "r" == p ? 2 == h ? (d = d || t, a.rotate(f[1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == h && (m ? (c = g.x(f[2], f[3]), u = g.y(f[2], f[3]), a.rotate(f[1], c, u)) : a.rotate(f[1], f[2], f[3])) : "s" == p ? 2 == h || 3 == h ? (d = d || t, a.scale(f[1], f[h - 1], d.x + d.width / 2, d.y + d.height / 2)) : 4 == h ? m ? (c = g.x(f[2], f[3]), u = g.y(f[2], f[3]), a.scale(f[1], f[1], c, u)) : a.scale(f[1], f[1], f[2], f[3]) : 5 == h && (m ? (c = g.x(f[3], f[4]), u = g.y(f[3], f[4]), a.scale(f[1], f[2], c, u)) : a.scale(f[1], f[2], f[3], f[4])) : "m" == p && 7 == h && a.add(f[1], f[2], f[3], f[4], f[5], f[6])
        }
        return a
      }

      function h(e) {
        var t = e.node.ownerSVGElement && C(e.node.ownerSVGElement) || e.node.parentNode && C(e.node.parentNode) || n.select("svg") || n(0, 0),
          i = t.select("defs"), a = null == i ? !1 : i.node;
        return a || (a = x("defs", t.node).node), a
      }

      function p(e) {
        return e.node.ownerSVGElement && C(e.node.ownerSVGElement) || n.select("svg")
      }

      function m(e, t, n) {
        function a(e) {
          if (null == e) return D;
          if (e == +e) return e;
          i(c, {width: e});
          try {
            return c.getBBox().width
          } catch (t) {
            return 0
          }
        }

        function r(e) {
          if (null == e) return D;
          if (e == +e) return e;
          i(c, {height: e});
          try {
            return c.getBBox().height
          } catch (t) {
            return 0
          }
        }

        function o(i, a) {
          null == t ? l[i] = a(e.attr(i) || 0) : i == t && (l = a(null == n ? e.attr(i) || 0 : n))
        }

        var s = p(e).node, l = {}, c = s.querySelector(".svg---mgr");
        switch (c || (c = i("rect"), i(c, {
          x: -9e9,
          y: -9e9,
          width: 10,
          height: 10,
          "class": "svg---mgr",
          fill: "none"
        }), s.appendChild(c)), e.type) {
          case"rect":
            o("rx", a), o("ry", r);
          case"image":
            o("width", a), o("height", r);
          case"text":
            o("x", a), o("y", r);
            break;
          case"circle":
            o("cx", a), o("cy", r), o("r", a);
            break;
          case"ellipse":
            o("cx", a), o("cy", r), o("rx", a), o("ry", r);
            break;
          case"line":
            o("x1", a), o("x2", a), o("y1", r), o("y2", r);
            break;
          case"marker":
            o("refX", a), o("markerWidth", a), o("refY", r), o("markerHeight", r);
            break;
          case"radialGradient":
            o("fx", a), o("fy", r);
            break;
          case"tspan":
            o("dx", a), o("dy", r);
            break;
          default:
            o(t, a)
        }
        return s.removeChild(c), l
      }

      function v(e) {
        a(e, "array") || (e = Array.prototype.slice.call(arguments, 0));
        for (var t = 0, n = 0, i = this.node; this[t];) delete this[t++];
        for (t = 0; t < e.length; t++) "set" == e[t].type ? e[t].forEach(function (e) {
          i.appendChild(e.node)
        }) : i.appendChild(e[t].node);
        var r = i.childNodes;
        for (t = 0; t < r.length; t++) this[n++] = C(r[t]);
        return this
      }

      function b(e) {
        if (e.snap in Y) return Y[e.snap];
        var t;
        try {
          t = e.ownerSVGElement
        } catch (n) {
        }
        this.node = e, t && (this.paper = new w(t)), this.type = e.tagName || e.nodeName;
        var i = this.id = U(this);
        if (this.anims = {}, this._ = {transform: []}, e.snap = i, Y[i] = this, "g" == this.type && (this.add = v), this.type in {
            g: 1,
            mask: 1,
            pattern: 1,
            symbol: 1
          }) for (var a in w.prototype) w.prototype[A](a) && (this[a] = w.prototype[a])
      }

      function y(e) {
        this.node = e
      }

      function x(e, t) {
        var n = i(e);
        t.appendChild(n);
        var a = C(n);
        return a
      }

      function w(e, t) {
        var n, a, r, o = w.prototype;
        if (e && "svg" == e.tagName) {
          if (e.snap in Y) return Y[e.snap];
          var s = e.ownerDocument;
          n = new b(e), a = e.getElementsByTagName("desc")[0], r = e.getElementsByTagName("defs")[0], a || (a = i("desc"), a.appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(a)), r || (r = i("defs"), n.node.appendChild(r)), n.defs = r;
          for (var l in o) o[A](l) && (n[l] = o[l]);
          n.paper = n.root = n
        } else n = x("svg", M.doc.body), i(n.node, {height: t, version: 1.1, width: e, xmlns: W});
        return n
      }

      function C(e) {
        return e ? e instanceof b || e instanceof y ? e : e.tagName && "svg" == e.tagName.toLowerCase() ? new w(e) : e.tagName && "object" == e.tagName.toLowerCase() && "image/svg+xml" == e.type ? new w(e.contentDocument.getElementsByTagName("svg")[0]) : new b(e) : e
      }

      function S(e, t) {
        for (var n = 0, i = e.length; i > n; n++) {
          var a = {type: e[n].type, attr: e[n].attr()}, r = e[n].children();
          t.push(a), r.length && S(r, a.childNodes = [])
        }
      }

      n.version = "0.4.0", n.toString = function () {
        return "Snap v" + this.version
      }, n._ = {};
      var M = {win: e.window, doc: e.window.document};
      n._.glob = M;
      var A = "hasOwnProperty", B = String, T = parseFloat, k = parseInt, E = Math, P = E.max, L = E.min, _ = E.abs,
        R = (E.pow, E.PI), D = (E.round, ""), N = Object.prototype.toString,
        F = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
        I = (n._.separator = /[,\s]+/, /[\s]*,[\s]*/), G = {hs: 1, rg: 1},
        z = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
        O = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,
        j = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/gi, H = 0, V = "S" + (+new Date).toString(36), U = function (e) {
          return (e && e.type ? e.type : D) + V + (H++).toString(36)
        }, q = "http://www.w3.org/1999/xlink", W = "http://www.w3.org/2000/svg", Y = {};
      n.url = function (e) {
        return "url('#" + e + "')"
      };
      n._.$ = i, n._.id = U, n.format = function () {
        var e = /\{([^\}]+)\}/g, t = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
          n = function (e, n, i) {
            var a = i;
            return n.replace(t, function (e, t, n, i, r) {
              t = t || i, a && (t in a && (a = a[t]), "function" == typeof a && r && (a = a()))
            }), a = (null == a || a == i ? e : a) + ""
          };
        return function (t, i) {
          return B(t).replace(e, function (e, t) {
            return n(e, t, i)
          })
        }
      }(), n._.clone = r, n._.cacher = s, n.rad = c, n.deg = u, n.sin = function (e) {
        return E.sin(n.rad(e))
      }, n.tan = function (e) {
        return E.tan(n.rad(e))
      }, n.cos = function (e) {
        return E.cos(n.rad(e))
      }, n.asin = function (e) {
        return n.deg(E.asin(e))
      }, n.acos = function (e) {
        return n.deg(E.acos(e))
      }, n.atan = function (e) {
        return n.deg(E.atan(e))
      }, n.atan2 = function (e) {
        return n.deg(E.atan2(e))
      }, n.angle = l, n.len = function (e, t, i, a) {
        return Math.sqrt(n.len2(e, t, i, a))
      }, n.len2 = function (e, t, n, i) {
        return (e - n) * (e - n) + (t - i) * (t - i)
      }, n.closestPoint = function (e, t, n) {
        function i(e) {
          var i = e.x - t, a = e.y - n;
          return i * i + a * a
        }

        for (var a, r, o, s, l = e.node, c = l.getTotalLength(), u = c / l.pathSegList.numberOfItems * .125, d = 1 / 0, f = 0; c >= f; f += u) (s = i(o = l.getPointAtLength(f))) < d && (a = o, r = f, d = s);
        for (u *= .5; u > .5;) {
          var h, p, m, g, v, b;
          (m = r - u) >= 0 && (v = i(h = l.getPointAtLength(m))) < d ? (a = h, r = m, d = v) : (g = r + u) <= c && (b = i(p = l.getPointAtLength(g))) < d ? (a = p, r = g, d = b) : u *= .5
        }
        return a = {x: a.x, y: a.y, length: r, distance: Math.sqrt(d)}
      }, n.is = a, n.snapTo = function (e, t, n) {
        if (n = a(n, "finite") ? n : 10, a(e, "array")) {
          for (var i = e.length; i--;) if (_(e[i] - t) <= n) return e[i]
        } else {
          e = +e;
          var r = t % e;
          if (n > r) return t - r;
          if (r > e - n) return t - r + e
        }
        return t
      }, n.getRGB = s(function (e) {
        if (!e || (e = B(e)).indexOf("-") + 1) return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: $};
        if ("none" == e) return {r: -1, g: -1, b: -1, hex: "none", toString: $};
        if (!(G[A](e.toLowerCase().substring(0, 2)) || "#" == e.charAt()) && (e = K(e)), !e) return {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: $
        };
        var t, i, r, o, s, l, c = e.match(F);
        return c ? (c[2] && (r = k(c[2].substring(5), 16), i = k(c[2].substring(3, 5), 16), t = k(c[2].substring(1, 3), 16)), c[3] && (r = k((s = c[3].charAt(3)) + s, 16), i = k((s = c[3].charAt(2)) + s, 16), t = k((s = c[3].charAt(1)) + s, 16)), c[4] && (l = c[4].split(I), t = T(l[0]), "%" == l[0].slice(-1) && (t *= 2.55), i = T(l[1]), "%" == l[1].slice(-1) && (i *= 2.55), r = T(l[2]), "%" == l[2].slice(-1) && (r *= 2.55), "rgba" == c[1].toLowerCase().slice(0, 4) && (o = T(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100)), c[5] ? (l = c[5].split(I), t = T(l[0]), "%" == l[0].slice(-1) && (t /= 100), i = T(l[1]), "%" == l[1].slice(-1) && (i /= 100), r = T(l[2]), "%" == l[2].slice(-1) && (r /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (t /= 360), "hsba" == c[1].toLowerCase().slice(0, 4) && (o = T(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), n.hsb2rgb(t, i, r, o)) : c[6] ? (l = c[6].split(I), t = T(l[0]), "%" == l[0].slice(-1) && (t /= 100), i = T(l[1]), "%" == l[1].slice(-1) && (i /= 100), r = T(l[2]), "%" == l[2].slice(-1) && (r /= 100), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (t /= 360), "hsla" == c[1].toLowerCase().slice(0, 4) && (o = T(l[3])), l[3] && "%" == l[3].slice(-1) && (o /= 100), n.hsl2rgb(t, i, r, o)) : (t = L(E.round(t), 255), i = L(E.round(i), 255), r = L(E.round(r), 255), o = L(P(o, 0), 1), c = {
          r: t,
          g: i,
          b: r,
          toString: $
        }, c.hex = "#" + (16777216 | r | i << 8 | t << 16).toString(16).slice(1), c.opacity = a(o, "finite") ? o : 1, c)) : {
          r: -1,
          g: -1,
          b: -1,
          hex: "none",
          error: 1,
          toString: $
        }
      }, n), n.hsb = s(function (e, t, i) {
        return n.hsb2rgb(e, t, i).hex
      }), n.hsl = s(function (e, t, i) {
        return n.hsl2rgb(e, t, i).hex
      }), n.rgb = s(function (e, t, n, i) {
        if (a(i, "finite")) {
          var r = E.round;
          return "rgba(" + [r(e), r(t), r(n), +i.toFixed(2)] + ")"
        }
        return "#" + (16777216 | n | t << 8 | e << 16).toString(16).slice(1)
      });
      var K = function (e) {
        var t = M.doc.getElementsByTagName("head")[0] || M.doc.getElementsByTagName("svg")[0], n = "rgb(255, 0, 0)";
        return (K = s(function (e) {
          if ("red" == e.toLowerCase()) return n;
          t.style.color = n, t.style.color = e;
          var i = M.doc.defaultView.getComputedStyle(t, D).getPropertyValue("color");
          return i == n ? null : i
        }))(e)
      }, J = function () {
        return "hsb(" + [this.h, this.s, this.b] + ")"
      }, X = function () {
        return "hsl(" + [this.h, this.s, this.l] + ")"
      }, $ = function () {
        return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
      }, Z = function (e, t, i) {
        if (null == t && a(e, "object") && "r" in e && "g" in e && "b" in e && (i = e.b, t = e.g, e = e.r), null == t && a(e, string)) {
          var r = n.getRGB(e);
          e = r.r, t = r.g, i = r.b
        }
        return (e > 1 || t > 1 || i > 1) && (e /= 255, t /= 255, i /= 255), [e, t, i]
      }, Q = function (e, t, i, r) {
        e = E.round(255 * e), t = E.round(255 * t), i = E.round(255 * i);
        var o = {r: e, g: t, b: i, opacity: a(r, "finite") ? r : 1, hex: n.rgb(e, t, i), toString: $};
        return a(r, "finite") && (o.opacity = r), o
      };
      n.color = function (e) {
        var t;
        return a(e, "object") && "h" in e && "s" in e && "b" in e ? (t = n.hsb2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.opacity = 1, e.hex = t.hex) : a(e, "object") && "h" in e && "s" in e && "l" in e ? (t = n.hsl2rgb(e), e.r = t.r, e.g = t.g, e.b = t.b, e.opacity = 1, e.hex = t.hex) : (a(e, "string") && (e = n.getRGB(e)), a(e, "object") && "r" in e && "g" in e && "b" in e && !("error" in e) ? (t = n.rgb2hsl(e), e.h = t.h, e.s = t.s, e.l = t.l, t = n.rgb2hsb(e), e.v = t.b) : (e = {hex: "none"}, e.r = e.g = e.b = e.h = e.s = e.v = e.l = -1, e.error = 1)), e.toString = $, e
      }, n.hsb2rgb = function (e, t, n, i) {
        a(e, "object") && "h" in e && "s" in e && "b" in e && (n = e.b, t = e.s, i = e.o, e = e.h), e *= 360;
        var r, o, s, l, c;
        return e = e % 360 / 60, c = n * t, l = c * (1 - _(e % 2 - 1)), r = o = s = n - c, e = ~~e, r += [c, l, 0, 0, l, c][e], o += [l, c, c, l, 0, 0][e], s += [0, 0, l, c, c, l][e], Q(r, o, s, i)
      }, n.hsl2rgb = function (e, t, n, i) {
        a(e, "object") && "h" in e && "s" in e && "l" in e && (n = e.l, t = e.s, e = e.h), (e > 1 || t > 1 || n > 1) && (e /= 360, t /= 100, n /= 100), e *= 360;
        var r, o, s, l, c;
        return e = e % 360 / 60, c = 2 * t * (.5 > n ? n : 1 - n), l = c * (1 - _(e % 2 - 1)), r = o = s = n - c / 2, e = ~~e, r += [c, l, 0, 0, l, c][e], o += [l, c, c, l, 0, 0][e], s += [0, 0, l, c, c, l][e], Q(r, o, s, i)
      }, n.rgb2hsb = function (e, t, n) {
        n = Z(e, t, n), e = n[0], t = n[1], n = n[2];
        var i, a, r, o;
        return r = P(e, t, n), o = r - L(e, t, n), i = 0 == o ? null : r == e ? (t - n) / o : r == t ? (n - e) / o + 2 : (e - t) / o + 4, i = (i + 360) % 6 * 60 / 360, a = 0 == o ? 0 : o / r, {
          h: i,
          s: a,
          b: r,
          toString: J
        }
      }, n.rgb2hsl = function (e, t, n) {
        n = Z(e, t, n), e = n[0], t = n[1], n = n[2];
        var i, a, r, o, s, l;
        return o = P(e, t, n), s = L(e, t, n), l = o - s, i = 0 == l ? null : o == e ? (t - n) / l : o == t ? (n - e) / l + 2 : (e - t) / l + 4, i = (i + 360) % 6 * 60 / 360, r = (o + s) / 2, a = 0 == l ? 0 : .5 > r ? l / (2 * r) : l / (2 - 2 * r), {
          h: i,
          s: a,
          l: r,
          toString: X
        }
      }, n.parsePathString = function (e) {
        if (!e) return null;
        var t = n.path(e);
        if (t.arr) return n.path.clone(t.arr);
        var i = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0}, r = [];
        return a(e, "array") && a(e[0], "array") && (r = n.path.clone(e)), r.length || B(e).replace(z, function (e, t, n) {
          var a = [], o = t.toLowerCase();
          if (n.replace(j, function (e, t) {
              t && a.push(+t)
            }), "m" == o && a.length > 2 && (r.push([t].concat(a.splice(0, 2))), o = "l", t = "m" == t ? "l" : "L"), "o" == o && 1 == a.length && r.push([t, a[0]]), "r" == o) r.push([t].concat(a)); else for (; a.length >= i[o] && (r.push([t].concat(a.splice(0, i[o]))), i[o]);) ;
        }), r.toString = n.path.toString, t.arr = n.path.clone(r), r
      };
      var ee = n.parseTransformString = function (e) {
        if (!e) return null;
        var t = [];
        return a(e, "array") && a(e[0], "array") && (t = n.path.clone(e)), t.length || B(e).replace(O, function (e, n, i) {
          var a = [];
          n.toLowerCase();
          i.replace(j, function (e, t) {
            t && a.push(+t)
          }), t.push([n].concat(a))
        }), t.toString = n.path.toString, t
      };
      n._.svgTransform2string = d, n._.rgTransform = /^[a-z][\s]*-?\.?\d/i, n._.transform2matrix = f, n._unit2px = m;
      M.doc.contains || M.doc.compareDocumentPosition ? function (e, t) {
        var n = 9 == e.nodeType ? e.documentElement : e, i = t && t.parentNode;
        return e == i || !(!i || 1 != i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t) for (; t;) if (t = t.parentNode, t == e) return !0;
        return !1
      };
      n._.getSomeDefs = h, n._.getSomeSVG = p, n.select = function (e) {
        return e = B(e).replace(/([^\\]):/g, "$1\\:"), C(M.doc.querySelector(e))
      }, n.selectAll = function (e) {
        for (var t = M.doc.querySelectorAll(e), i = (n.set || Array)(), a = 0; a < t.length; a++) i.push(C(t[a]));
        return i
      }, setInterval(function () {
        for (var e in Y) if (Y[A](e)) {
          var t = Y[e], n = t.node;
          ("svg" != t.type && !n.ownerSVGElement || "svg" == t.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete Y[e]
        }
      }, 1e4), b.prototype.attr = function (e, n) {
        var i = this, r = i.node;
        if (!e) {
          if (1 != r.nodeType) return {text: r.nodeValue};
          for (var o = r.attributes, s = {}, l = 0, c = o.length; c > l; l++) s[o[l].nodeName] = o[l].nodeValue;
          return s
        }
        if (a(e, "string")) {
          if (!(arguments.length > 1)) return t("snap.util.getattr." + e, i).firstDefined();
          var u = {};
          u[e] = n, e = u
        }
        for (var d in e) e[A](d) && t("snap.util.attr." + d, i, e[d]);
        return i
      }, n.parse = function (e) {
        var t = M.doc.createDocumentFragment(), n = !0, i = M.doc.createElement("div");
        if (e = B(e), e.match(/^\s*<\s*svg(?:\s|>)/) || (e = "<svg>" + e + "</svg>", n = !1), i.innerHTML = e, e = i.getElementsByTagName("svg")[0]) if (n) t = e; else for (; e.firstChild;) t.appendChild(e.firstChild);
        return new y(t)
      }, n.fragment = function () {
        for (var e = Array.prototype.slice.call(arguments, 0), t = M.doc.createDocumentFragment(), i = 0, a = e.length; a > i; i++) {
          var r = e[i];
          r.node && r.node.nodeType && t.appendChild(r.node), r.nodeType && t.appendChild(r), "string" == typeof r && t.appendChild(n.parse(r).node)
        }
        return new y(t)
      }, n._.make = x, n._.wrap = C, w.prototype.el = function (e, t) {
        var n = x(e, this.node);
        return t && n.attr(t), n
      }, b.prototype.children = function () {
        for (var e = [], t = this.node.childNodes, i = 0, a = t.length; a > i; i++) e[i] = n(t[i]);
        return e
      }, b.prototype.toJSON = function () {
        var e = [];
        return S([this], e), e[0]
      }, t.on("snap.util.getattr", function () {
        var e = t.nt();
        e = e.substring(e.lastIndexOf(".") + 1);
        var n = e.replace(/[A-Z]/g, function (e) {
          return "-" + e.toLowerCase()
        });
        return te[A](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, e)
      });
      var te = {
        "alignment-baseline": 0,
        "baseline-shift": 0,
        clip: 0,
        "clip-path": 0,
        "clip-rule": 0,
        color: 0,
        "color-interpolation": 0,
        "color-interpolation-filters": 0,
        "color-profile": 0,
        "color-rendering": 0,
        cursor: 0,
        direction: 0,
        display: 0,
        "dominant-baseline": 0,
        "enable-background": 0,
        fill: 0,
        "fill-opacity": 0,
        "fill-rule": 0,
        filter: 0,
        "flood-color": 0,
        "flood-opacity": 0,
        font: 0,
        "font-family": 0,
        "font-size": 0,
        "font-size-adjust": 0,
        "font-stretch": 0,
        "font-style": 0,
        "font-variant": 0,
        "font-weight": 0,
        "glyph-orientation-horizontal": 0,
        "glyph-orientation-vertical": 0,
        "image-rendering": 0,
        kerning: 0,
        "letter-spacing": 0,
        "lighting-color": 0,
        marker: 0,
        "marker-end": 0,
        "marker-mid": 0,
        "marker-start": 0,
        mask: 0,
        opacity: 0,
        overflow: 0,
        "pointer-events": 0,
        "shape-rendering": 0,
        "stop-color": 0,
        "stop-opacity": 0,
        stroke: 0,
        "stroke-dasharray": 0,
        "stroke-dashoffset": 0,
        "stroke-linecap": 0,
        "stroke-linejoin": 0,
        "stroke-miterlimit": 0,
        "stroke-opacity": 0,
        "stroke-width": 0,
        "text-anchor": 0,
        "text-decoration": 0,
        "text-rendering": 0,
        "unicode-bidi": 0,
        visibility: 0,
        "word-spacing": 0,
        "writing-mode": 0
      };
      t.on("snap.util.attr", function (e) {
        var n = t.nt(), a = {};
        n = n.substring(n.lastIndexOf(".") + 1), a[n] = e;
        var r = n.replace(/-(\w)/gi, function (e, t) {
          return t.toUpperCase()
        }), o = n.replace(/[A-Z]/g, function (e) {
          return "-" + e.toLowerCase()
        });
        te[A](o) ? this.node.style[r] = null == e ? D : e : i(this.node, a)
      }), function (e) {
      }(w.prototype), n.ajax = function (e, n, i, r) {
        var o = new XMLHttpRequest, s = U();
        if (o) {
          if (a(n, "function")) r = i, i = n, n = null; else if (a(n, "object")) {
            var l = [];
            for (var c in n) n.hasOwnProperty(c) && l.push(encodeURIComponent(c) + "=" + encodeURIComponent(n[c]));
            n = l.join("&")
          }
          return o.open(n ? "POST" : "GET", e, !0), n && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), i && (t.once("snap.ajax." + s + ".0", i), t.once("snap.ajax." + s + ".200", i), t.once("snap.ajax." + s + ".304", i)), o.onreadystatechange = function () {
            4 == o.readyState && t("snap.ajax." + s + "." + o.status, r, o)
          }, 4 == o.readyState ? o : (o.send(n), o)
        }
      }, n.load = function (e, t, i) {
        n.ajax(e, function (e) {
          var a = n.parse(e.responseText);
          i ? t.call(i, a) : t(a)
        })
      };
      var ne = function (e) {
        var t = e.getBoundingClientRect(), n = e.ownerDocument, i = n.body, a = n.documentElement,
          r = a.clientTop || i.clientTop || 0, o = a.clientLeft || i.clientLeft || 0,
          s = t.top + (g.win.pageYOffset || a.scrollTop || i.scrollTop) - r,
          l = t.left + (g.win.pageXOffset || a.scrollLeft || i.scrollLeft) - o;
        return {y: s, x: l}
      };
      return n.getElementByPoint = function (e, t) {
        var n = this, i = (n.canvas, M.doc.elementFromPoint(e, t));
        if (M.win.opera && "svg" == i.tagName) {
          var a = ne(i), r = i.createSVGRect();
          r.x = e - a.x, r.y = t - a.y, r.width = r.height = 1;
          var o = i.getIntersectionList(r, null);
          o.length && (i = o[o.length - 1])
        }
        return i ? C(i) : null
      }, n.plugin = function (e) {
        e(n, b, w, M, y)
      }, M.win.Snap = n, n
    }(e || this);
    return i.plugin(function (i, a, r, o, s) {
      function l(e, t) {
        if (null == t) {
          var n = !0;
          if (t = "linearGradient" == e.type || "radialGradient" == e.type ? e.node.getAttribute("gradientTransform") : "pattern" == e.type ? e.node.getAttribute("patternTransform") : e.node.getAttribute("transform"), !t) return new i.Matrix;
          t = i._.svgTransform2string(t)
        } else t = i._.rgTransform.test(t) ? p(t).replace(/\.{3}|\u2026/g, e._.transform || E) : i._.svgTransform2string(t), h(t, "array") && (t = i.path ? i.path.toString.call(t) : p(t)), e._.transform = t;
        var a = i._.transform2matrix(t, e.getBBox(1));
        return n ? a : void(e.matrix = a)
      }

      function c(e) {
        function t(e, t) {
          var n = g(e.node, t);
          n = n && n.match(r), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (s[n] = (s[n] || []).concat(function (n) {
            var i = {};
            i[t] = URL(n), g(e.node, i)
          })))
        }

        function n(e) {
          var t = g(e.node, "xlink:href");
          t && "#" == t.charAt() && (t = t.substring(1), t && (s[t] = (s[t] || []).concat(function (t) {
            e.attr("xlink:href", "#" + t)
          })))
        }

        for (var i, a = e.selectAll("*"), r = /^\s*url\(("|'|)(.*)\1\)\s*$/, o = [], s = {}, l = 0, c = a.length; c > l; l++) {
          i = a[l], t(i, "fill"), t(i, "stroke"), t(i, "filter"), t(i, "mask"), t(i, "clip-path"), n(i);
          var u = g(i.node, "id");
          u && (g(i.node, {id: i.id}), o.push({old: u, id: i.id}))
        }
        for (l = 0, c = o.length; c > l; l++) {
          var d = s[o[l].old];
          if (d) for (var f = 0, h = d.length; h > f; f++) d[f](o[l].id)
        }
      }

      function u(e, t, n) {
        return function (i) {
          var a = i.slice(e, t);
          return 1 == a.length && (a = a[0]), n ? n(a) : a
        }
      }

      function d(e) {
        return function () {
          var t = e ? "<" + this.type : "", n = this.node.attributes, i = this.node.childNodes;
          if (e) for (var a = 0, r = n.length; r > a; a++) t += " " + n[a].name + '="' + n[a].value.replace(/"/g, '\\"') + '"';
          if (i.length) {
            for (e && (t += ">"), a = 0, r = i.length; r > a; a++) 3 == i[a].nodeType ? t += i[a].nodeValue : 1 == i[a].nodeType && (t += x(i[a]).toString());
            e && (t += "</" + this.type + ">")
          } else e && (t += "/>");
          return t
        }
      }

      var f = a.prototype, h = i.is, p = String, m = i._unit2px, g = i._.$, v = i._.make, b = i._.getSomeDefs,
        y = "hasOwnProperty", x = i._.wrap;
      f.getBBox = function (e) {
        if (!i.Matrix || !i.path) return this.node.getBBox();
        var t = this, n = new i.Matrix;
        if (t.removed) return i._.box();
        for (; "use" == t.type;) if (e || (n = n.add(t.transform().localMatrix.translate(t.attr("x") || 0, t.attr("y") || 0))), t.original) t = t.original; else {
          var a = t.attr("xlink:href");
          t = t.original = t.node.ownerDocument.getElementById(a.substring(a.indexOf("#") + 1))
        }
        var r = t._, o = i.path.get[t.type] || i.path.get.deflt;
        try {
          return e ? (r.bboxwt = o ? i.path.getBBox(t.realPath = o(t)) : i._.box(t.node.getBBox()), i._.box(r.bboxwt)) : (t.realPath = o(t), t.matrix = t.transform().localMatrix, r.bbox = i.path.getBBox(i.path.map(t.realPath, n.add(t.matrix))), i._.box(r.bbox))
        } catch (s) {
          return i._.box()
        }
      };
      var w = function () {
        return this.string
      };
      f.transform = function (e) {
        var t = this._;
        if (null == e) {
          for (var n, a = this, r = new i.Matrix(this.node.getCTM()), o = l(this), s = [o], c = new i.Matrix, u = o.toTransformString(), d = p(o) == p(this.matrix) ? p(t.transform) : u; "svg" != a.type && (a = a.parent());) s.push(l(a));
          for (n = s.length; n--;) c.add(s[n]);
          return {
            string: d,
            globalMatrix: r,
            totalMatrix: c,
            localMatrix: o,
            diffMatrix: r.clone().add(o.invert()),
            global: r.toTransformString(),
            total: c.toTransformString(),
            local: u,
            toString: w
          }
        }
        return e instanceof i.Matrix ? (this.matrix = e, this._.transform = e.toTransformString()) : l(this, e), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? g(this.node, {gradientTransform: this.matrix}) : "pattern" == this.type ? g(this.node, {patternTransform: this.matrix}) : g(this.node, {transform: this.matrix})), this
      }, f.parent = function () {
        return x(this.node.parentNode)
      }, f.append = f.add = function (e) {
        if (e) {
          if ("set" == e.type) {
            var t = this;
            return e.forEach(function (e) {
              t.add(e)
            }), this
          }
          e = x(e), this.node.appendChild(e.node), e.paper = this.paper
        }
        return this
      }, f.appendTo = function (e) {
        return e && (e = x(e), e.append(this)), this
      }, f.prepend = function (e) {
        if (e) {
          if ("set" == e.type) {
            var t, n = this;
            return e.forEach(function (e) {
              t ? t.after(e) : n.prepend(e), t = e
            }), this
          }
          e = x(e);
          var i = e.parent();
          this.node.insertBefore(e.node, this.node.firstChild), this.add && this.add(), e.paper = this.paper, this.parent() && this.parent().add(), i && i.add()
        }
        return this
      }, f.prependTo = function (e) {
        return e = x(e), e.prepend(this), this
      }, f.before = function (e) {
        if ("set" == e.type) {
          var t = this;
          return e.forEach(function (e) {
            var n = e.parent();
            t.node.parentNode.insertBefore(e.node, t.node), n && n.add()
          }), this.parent().add(), this
        }
        e = x(e);
        var n = e.parent();
        return this.node.parentNode.insertBefore(e.node, this.node), this.parent() && this.parent().add(), n && n.add(), e.paper = this.paper, this
      }, f.after = function (e) {
        e = x(e);
        var t = e.parent();
        return this.node.nextSibling ? this.node.parentNode.insertBefore(e.node, this.node.nextSibling) : this.node.parentNode.appendChild(e.node), this.parent() && this.parent().add(), t && t.add(), e.paper = this.paper, this
      }, f.insertBefore = function (e) {
        e = x(e);
        var t = this.parent();
        return e.node.parentNode.insertBefore(this.node, e.node), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
      }, f.insertAfter = function (e) {
        e = x(e);
        var t = this.parent();
        return e.node.parentNode.insertBefore(this.node, e.node.nextSibling), this.paper = e.paper, t && t.add(), e.parent() && e.parent().add(), this
      }, f.remove = function () {
        var e = this.parent();
        return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, e && e.add(), this
      }, f.select = function (e) {
        return e = p(e).replace(/([^\\]):/g, "$1\\:"), x(this.node.querySelector(e))
      }, f.selectAll = function (e) {
        for (var t = this.node.querySelectorAll(e), n = (i.set || Array)(), a = 0; a < t.length; a++) n.push(x(t[a]));
        return n
      }, f.asPX = function (e, t) {
        return null == t && (t = this.attr(e)), +m(this, e, t)
      }, f.use = function () {
        var e, t = this.node.id;
        return t || (t = this.id, g(this.node, {id: t})), e = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? v(this.type, this.node.parentNode) : v("use", this.node.parentNode), g(e.node, {"xlink:href": "#" + t}), e.original = this, e
      }, f.clone = function () {
        var e = x(this.node.cloneNode(!0));
        return g(e.node, "id") && g(e.node, {id: e.id}), c(e), e.insertAfter(this), e
      }, f.toDefs = function () {
        var e = b(this);
        return e.appendChild(this.node), this
      }, f.pattern = f.toPattern = function (e, t, n, i) {
        var a = v("pattern", b(this));
        return null == e && (e = this.getBBox()), h(e, "object") && "x" in e && (t = e.y, n = e.width, i = e.height, e = e.x), g(a.node, {
          x: e,
          y: t,
          width: n,
          height: i,
          patternUnits: "userSpaceOnUse",
          id: a.id,
          viewBox: [e, t, n, i].join(" ")
        }), a.node.appendChild(this.node), a
      }, f.marker = function (e, t, n, i, a, r) {
        var o = v("marker", b(this));
        return null == e && (e = this.getBBox()), h(e, "object") && "x" in e && (t = e.y, n = e.width, i = e.height, a = e.refX || e.cx, r = e.refY || e.cy, e = e.x), g(o.node, {
          viewBox: [e, t, n, i].join(" "),
          markerWidth: n,
          markerHeight: i,
          orient: "auto",
          refX: a || 0,
          refY: r || 0,
          id: o.id
        }), o.node.appendChild(this.node), o
      };
      var C = function (e, t, i, a) {
        "function" != typeof i || i.length || (a = i, i = n.linear), this.attr = e, this.dur = t, i && (this.easing = i), a && (this.callback = a)
      };
      i._.Animation = C, i.animation = function (e, t, n, i) {
        return new C(e, t, n, i)
      }, f.inAnim = function () {
        var e = this, t = [];
        for (var n in e.anims) e.anims[y](n) && !function (e) {
          t.push({
            anim: new C(e._attrs, e.dur, e.easing, e._callback),
            mina: e,
            curStatus: e.status(),
            status: function (t) {
              return e.status(t)
            },
            stop: function () {
              e.stop()
            }
          })
        }(e.anims[n]);
        return t
      }, i.animate = function (e, i, a, r, o, s) {
        "function" != typeof o || o.length || (s = o, o = n.linear);
        var l = n.time(), c = n(e, i, l, l + r, n.time, a, o);
        return s && t.once("mina.finish." + c.id, s), c
      }, f.stop = function () {
        for (var e = this.inAnim(), t = 0, n = e.length; n > t; t++) e[t].stop();
        return this
      }, f.animate = function (e, i, a, r) {
        "function" != typeof a || a.length || (r = a, a = n.linear), e instanceof C && (r = e.callback, a = e.easing, i = a.dur, e = e.attr);
        var o, s, l, c, d = [], f = [], m = {}, g = this;
        for (var v in e) if (e[y](v)) {
          g.equal ? (c = g.equal(v, p(e[v])), o = c.from, s = c.to, l = c.f) : (o = +g.attr(v), s = +e[v]);
          var b = h(o, "array") ? o.length : 1;
          m[v] = u(d.length, d.length + b, l), d = d.concat(o), f = f.concat(s)
        }
        var x = n.time(), w = n(d, f, x, x + i, n.time, function (e) {
          var t = {};
          for (var n in m) m[y](n) && (t[n] = m[n](e));
          g.attr(t)
        }, a);
        return g.anims[w.id] = w, w._attrs = e, w._callback = r, t("snap.animcreated." + g.id, w), t.once("mina.finish." + w.id, function () {
          delete g.anims[w.id], r && r.call(g)
        }), t.once("mina.stop." + w.id, function () {
          delete g.anims[w.id]
        }), g
      };
      var S = {};
      f.data = function (e, n) {
        var a = S[this.id] = S[this.id] || {};
        if (0 == arguments.length) return t("snap.data.get." + this.id, this, a, null), a;
        if (1 == arguments.length) {
          if (i.is(e, "object")) {
            for (var r in e) e[y](r) && this.data(r, e[r]);
            return this
          }
          return t("snap.data.get." + this.id, this, a[e], e), a[e]
        }
        return a[e] = n, t("snap.data.set." + this.id, this, n, e), this
      }, f.removeData = function (e) {
        return null == e ? S[this.id] = {} : S[this.id] && delete S[this.id][e], this
      }, f.outerSVG = f.toString = d(1), f.innerSVG = d(), f.toDataURL = function () {
        if (e && e.btoa) {
          var t = this.getBBox(),
            n = i.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
              x: +t.x.toFixed(3),
              y: +t.y.toFixed(3),
              width: +t.width.toFixed(3),
              height: +t.height.toFixed(3),
              contents: this.outerSVG()
            });
          return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(n)))
        }
      }, s.prototype.select = f.select, s.prototype.selectAll = f.selectAll
    }), i.plugin(function (e, t, n, i, a) {
      function r(e, t, n, i, a, r) {
        return null == t && "[object SVGMatrix]" == o.call(e) ? (this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.e = e.e, void(this.f = e.f)) : void(null != e ? (this.a = +e, this.b = +t, this.c = +n, this.d = +i, this.e = +a, this.f = +r) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
      }

      var o = Object.prototype.toString, s = String, l = Math, c = "";
      !function (t) {
        function n(e) {
          return e[0] * e[0] + e[1] * e[1]
        }

        function i(e) {
          var t = l.sqrt(n(e));
          e[0] && (e[0] /= t), e[1] && (e[1] /= t)
        }

        t.add = function (e, t, n, i, a, o) {
          var s, l, c, u, d = [[], [], []], f = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
            h = [[e, n, a], [t, i, o], [0, 0, 1]];
          for (e && e instanceof r && (h = [[e.a, e.c, e.e], [e.b, e.d, e.f], [0, 0, 1]]), s = 0; 3 > s; s++) for (l = 0; 3 > l; l++) {
            for (u = 0, c = 0; 3 > c; c++) u += f[s][c] * h[c][l];
            d[s][l] = u
          }
          return this.a = d[0][0], this.b = d[1][0], this.c = d[0][1], this.d = d[1][1], this.e = d[0][2], this.f = d[1][2], this
        }, t.invert = function () {
          var e = this, t = e.a * e.d - e.b * e.c;
          return new r(e.d / t, -e.b / t, -e.c / t, e.a / t, (e.c * e.f - e.d * e.e) / t, (e.b * e.e - e.a * e.f) / t)
        }, t.clone = function () {
          return new r(this.a, this.b, this.c, this.d, this.e, this.f)
        }, t.translate = function (e, t) {
          return this.add(1, 0, 0, 1, e, t)
        }, t.scale = function (e, t, n, i) {
          return null == t && (t = e), (n || i) && this.add(1, 0, 0, 1, n, i), this.add(e, 0, 0, t, 0, 0), (n || i) && this.add(1, 0, 0, 1, -n, -i), this
        }, t.rotate = function (t, n, i) {
          t = e.rad(t), n = n || 0, i = i || 0;
          var a = +l.cos(t).toFixed(9), r = +l.sin(t).toFixed(9);
          return this.add(a, r, -r, a, n, i), this.add(1, 0, 0, 1, -n, -i)
        }, t.x = function (e, t) {
          return e * this.a + t * this.c + this.e
        }, t.y = function (e, t) {
          return e * this.b + t * this.d + this.f
        }, t.get = function (e) {
          return +this[s.fromCharCode(97 + e)].toFixed(4)
        }, t.toString = function () {
          return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
        }, t.offset = function () {
          return [this.e.toFixed(4), this.f.toFixed(4)]
        }, t.determinant = function () {
          return this.a * this.d - this.b * this.c
        }, t.split = function () {
          var t = {};
          t.dx = this.e, t.dy = this.f;
          var a = [[this.a, this.c], [this.b, this.d]];
          t.scalex = l.sqrt(n(a[0])), i(a[0]), t.shear = a[0][0] * a[1][0] + a[0][1] * a[1][1], a[1] = [a[1][0] - a[0][0] * t.shear, a[1][1] - a[0][1] * t.shear], t.scaley = l.sqrt(n(a[1])), i(a[1]), t.shear /= t.scaley, this.determinant() < 0 && (t.scalex = -t.scalex);
          var r = -a[0][1], o = a[1][1];
          return 0 > o ? (t.rotate = e.deg(l.acos(o)), 0 > r && (t.rotate = 360 - t.rotate)) : t.rotate = e.deg(l.asin(r)),
            t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
        }, t.toTransformString = function (e) {
          var t = e || this.split();
          return +t.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (t.scalex = +t.scalex.toFixed(4), t.scaley = +t.scaley.toFixed(4), t.rotate = +t.rotate.toFixed(4), (t.dx || t.dy ? "t" + [+t.dx.toFixed(4), +t.dy.toFixed(4)] : c) + (1 != t.scalex || 1 != t.scaley ? "s" + [t.scalex, t.scaley, 0, 0] : c) + (t.rotate ? "r" + [+t.rotate.toFixed(4), 0, 0] : c))
        }
      }(r.prototype), e.Matrix = r, e.matrix = function (e, t, n, i, a, o) {
        return new r(e, t, n, i, a, o)
      }
    }), i.plugin(function (e, n, i, a, r) {
      function o(i) {
        return function (a) {
          if (t.stop(), a instanceof r && 1 == a.node.childNodes.length && ("radialGradient" == a.node.firstChild.tagName || "linearGradient" == a.node.firstChild.tagName || "pattern" == a.node.firstChild.tagName) && (a = a.node.firstChild, h(this).appendChild(a), a = d(a)), a instanceof n) if ("radialGradient" == a.type || "linearGradient" == a.type || "pattern" == a.type) {
            a.node.id || m(a.node, {id: a.id});
            var o = g(a.node.id)
          } else o = a.attr(i); else if (o = e.color(a), o.error) {
            var s = e(h(this).ownerSVGElement).gradient(a);
            s ? (s.node.id || m(s.node, {id: s.id}), o = g(s.node.id)) : o = a
          } else o = v(o);
          var l = {};
          l[i] = o, m(this.node, l), this.node.style[i] = y
        }
      }

      function s(e) {
        t.stop(), e == +e && (e += "px"), this.node.style.fontSize = e
      }

      function l(e) {
        for (var t = [], n = e.childNodes, i = 0, a = n.length; a > i; i++) {
          var r = n[i];
          3 == r.nodeType && t.push(r.nodeValue), "tspan" == r.tagName && (1 == r.childNodes.length && 3 == r.firstChild.nodeType ? t.push(r.firstChild.nodeValue) : t.push(l(r)))
        }
        return t
      }

      function c() {
        return t.stop(), this.node.style.fontSize
      }

      var u = e._.make, d = e._.wrap, f = e.is, h = e._.getSomeDefs, p = /^url\(#?([^)]+)\)$/, m = e._.$, g = e.url,
        v = String, b = e._.separator, y = "";
      t.on("snap.util.attr.mask", function (e) {
        if (e instanceof n || e instanceof r) {
          if (t.stop(), e instanceof r && 1 == e.node.childNodes.length && (e = e.node.firstChild, h(this).appendChild(e), e = d(e)), "mask" == e.type) var i = e; else i = u("mask", h(this)), i.node.appendChild(e.node);
          !i.node.id && m(i.node, {id: i.id}), m(this.node, {mask: g(i.id)})
        }
      }), function (e) {
        t.on("snap.util.attr.clip", e), t.on("snap.util.attr.clip-path", e), t.on("snap.util.attr.clipPath", e)
      }(function (e) {
        if (e instanceof n || e instanceof r) {
          if (t.stop(), "clipPath" == e.type) var i = e; else i = u("clipPath", h(this)), i.node.appendChild(e.node), !i.node.id && m(i.node, {id: i.id});
          m(this.node, {"clip-path": g(i.node.id || i.id)})
        }
      }), t.on("snap.util.attr.fill", o("fill")), t.on("snap.util.attr.stroke", o("stroke"));
      var x = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
      t.on("snap.util.grad.parse", function (e) {
        e = v(e);
        var t = e.match(x);
        if (!t) return null;
        var n = t[1], i = t[2], a = t[3];
        return i = i.split(/\s*,\s*/).map(function (e) {
          return +e == e ? +e : e
        }), 1 == i.length && 0 == i[0] && (i = []), a = a.split("-"), a = a.map(function (e) {
          e = e.split(":");
          var t = {color: e[0]};
          return e[1] && (t.offset = parseFloat(e[1])), t
        }), {type: n, params: i, stops: a}
      }), t.on("snap.util.attr.d", function (n) {
        t.stop(), f(n, "array") && f(n[0], "array") && (n = e.path.toString.call(n)), n = v(n), n.match(/[ruo]/i) && (n = e.path.toAbsolute(n)), m(this.node, {d: n})
      })(-1), t.on("snap.util.attr.#text", function (e) {
        t.stop(), e = v(e);
        for (var n = a.doc.createTextNode(e); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
        this.node.appendChild(n)
      })(-1), t.on("snap.util.attr.path", function (e) {
        t.stop(), this.attr({d: e})
      })(-1), t.on("snap.util.attr.class", function (e) {
        t.stop(), this.node.className.baseVal = e
      })(-1), t.on("snap.util.attr.viewBox", function (e) {
        var n;
        n = f(e, "object") && "x" in e ? [e.x, e.y, e.width, e.height].join(" ") : f(e, "array") ? e.join(" ") : e, m(this.node, {viewBox: n}), t.stop()
      })(-1), t.on("snap.util.attr.transform", function (e) {
        this.transform(e), t.stop()
      })(-1), t.on("snap.util.attr.r", function (e) {
        "rect" == this.type && (t.stop(), m(this.node, {rx: e, ry: e}))
      })(-1), t.on("snap.util.attr.textpath", function (e) {
        if (t.stop(), "text" == this.type) {
          var i, a, r;
          if (!e && this.textPath) {
            for (a = this.textPath; a.node.firstChild;) this.node.appendChild(a.node.firstChild);
            return a.remove(), void delete this.textPath
          }
          if (f(e, "string")) {
            var o = h(this), s = d(o.parentNode).path(e);
            o.appendChild(s.node), i = s.id, s.attr({id: i})
          } else e = d(e), e instanceof n && (i = e.attr("id"), i || (i = e.id, e.attr({id: i})));
          if (i) if (a = this.textPath, r = this.node, a) a.attr({"xlink:href": "#" + i}); else {
            for (a = m("textPath", {"xlink:href": "#" + i}); r.firstChild;) a.appendChild(r.firstChild);
            r.appendChild(a), this.textPath = d(a)
          }
        }
      })(-1), t.on("snap.util.attr.text", function (e) {
        if ("text" == this.type) {
          for (var n = this.node, i = function (e) {
            var t = m("tspan");
            if (f(e, "array")) for (var n = 0; n < e.length; n++) t.appendChild(i(e[n])); else t.appendChild(a.doc.createTextNode(e));
            return t.normalize && t.normalize(), t
          }; n.firstChild;) n.removeChild(n.firstChild);
          for (var r = i(e); r.firstChild;) n.appendChild(r.firstChild)
        }
        t.stop()
      })(-1), t.on("snap.util.attr.fontSize", s)(-1), t.on("snap.util.attr.font-size", s)(-1), t.on("snap.util.getattr.transform", function () {
        return t.stop(), this.transform()
      })(-1), t.on("snap.util.getattr.textpath", function () {
        return t.stop(), this.textPath
      })(-1), function () {
        function n(n) {
          return function () {
            t.stop();
            var i = a.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
            return "none" == i ? i : e(a.doc.getElementById(i.match(p)[1]))
          }
        }

        function i(e) {
          return function (n) {
            t.stop();
            var i = "marker" + e.charAt(0).toUpperCase() + e.substring(1);
            if ("" == n || !n) return void(this.node.style[i] = "none");
            if ("marker" == n.type) {
              var a = n.node.id;
              return a || m(n.node, {id: n.id}), void(this.node.style[i] = g(a))
            }
          }
        }

        t.on("snap.util.getattr.marker-end", n("end"))(-1), t.on("snap.util.getattr.markerEnd", n("end"))(-1), t.on("snap.util.getattr.marker-start", n("start"))(-1), t.on("snap.util.getattr.markerStart", n("start"))(-1), t.on("snap.util.getattr.marker-mid", n("mid"))(-1), t.on("snap.util.getattr.markerMid", n("mid"))(-1), t.on("snap.util.attr.marker-end", i("end"))(-1), t.on("snap.util.attr.markerEnd", i("end"))(-1), t.on("snap.util.attr.marker-start", i("start"))(-1), t.on("snap.util.attr.markerStart", i("start"))(-1), t.on("snap.util.attr.marker-mid", i("mid"))(-1), t.on("snap.util.attr.markerMid", i("mid"))(-1)
      }(), t.on("snap.util.getattr.r", function () {
        return "rect" == this.type && m(this.node, "rx") == m(this.node, "ry") ? (t.stop(), m(this.node, "rx")) : void 0
      })(-1), t.on("snap.util.getattr.text", function () {
        if ("text" == this.type || "tspan" == this.type) {
          t.stop();
          var e = l(this.node);
          return 1 == e.length ? e[0] : e
        }
      })(-1), t.on("snap.util.getattr.#text", function () {
        return this.node.textContent
      })(-1), t.on("snap.util.getattr.viewBox", function () {
        t.stop();
        var n = m(this.node, "viewBox");
        return n ? (n = n.split(b), e._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
      })(-1), t.on("snap.util.getattr.points", function () {
        var e = m(this.node, "points");
        return t.stop(), e ? e.split(b) : void 0
      })(-1), t.on("snap.util.getattr.path", function () {
        var e = m(this.node, "d");
        return t.stop(), e
      })(-1), t.on("snap.util.getattr.class", function () {
        return this.node.className.baseVal
      })(-1), t.on("snap.util.getattr.fontSize", c)(-1), t.on("snap.util.getattr.font-size", c)(-1)
    }), i.plugin(function (e, t, n, i, a) {
      var r = /\S+/g, o = String, s = t.prototype;
      s.addClass = function (e) {
        var t, n, i, a, s = o(e || "").match(r) || [], l = this.node, c = l.className.baseVal, u = c.match(r) || [];
        if (s.length) {
          for (t = 0; i = s[t++];) n = u.indexOf(i), ~n || u.push(i);
          a = u.join(" "), c != a && (l.className.baseVal = a)
        }
        return this
      }, s.removeClass = function (e) {
        var t, n, i, a, s = o(e || "").match(r) || [], l = this.node, c = l.className.baseVal, u = c.match(r) || [];
        if (u.length) {
          for (t = 0; i = s[t++];) n = u.indexOf(i), ~n && u.splice(n, 1);
          a = u.join(" "), c != a && (l.className.baseVal = a)
        }
        return this
      }, s.hasClass = function (e) {
        var t = this.node, n = t.className.baseVal, i = n.match(r) || [];
        return !!~i.indexOf(e)
      }, s.toggleClass = function (e, t) {
        if (null != t) return t ? this.addClass(e) : this.removeClass(e);
        var n, i, a, o, s = (e || "").match(r) || [], l = this.node, c = l.className.baseVal, u = c.match(r) || [];
        for (n = 0; a = s[n++];) i = u.indexOf(a), ~i ? u.splice(i, 1) : u.push(a);
        return o = u.join(" "), c != o && (l.className.baseVal = o), this
      }
    }), i.plugin(function (e, n, i, a, r) {
      function o(e) {
        return e
      }

      function s(e) {
        return function (t) {
          return +t.toFixed(3) + e
        }
      }

      var l = {
        "+": function (e, t) {
          return e + t
        }, "-": function (e, t) {
          return e - t
        }, "/": function (e, t) {
          return e / t
        }, "*": function (e, t) {
          return e * t
        }
      }, c = String, u = /[a-z]+$/i, d = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
      t.on("snap.util.attr", function (e) {
        var n = c(e).match(d);
        if (n) {
          var i = t.nt(), a = i.substring(i.lastIndexOf(".") + 1), r = this.attr(a), o = {};
          t.stop();
          var s = n[3] || "", f = r.match(u), h = l[n[1]];
          if (f && f == s ? e = h(parseFloat(r), +n[2]) : (r = this.asPX(a), e = h(this.asPX(a), this.asPX(a, n[2] + s))), isNaN(r) || isNaN(e)) return;
          o[a] = e, this.attr(o)
        }
      })(-10), t.on("snap.util.equal", function (e, n) {
        var i = c(this.attr(e) || ""), a = c(n).match(d);
        if (a) {
          t.stop();
          var r = a[3] || "", f = i.match(u), h = l[a[1]];
          return f && f == r ? {
            from: parseFloat(i),
            to: h(parseFloat(i), +a[2]),
            f: s(f)
          } : (i = this.asPX(e), {from: i, to: h(i, this.asPX(e, a[2] + r)), f: o})
        }
      })(-10)
    }), i.plugin(function (n, i, a, r, o) {
      var s = a.prototype, l = n.is;
      s.rect = function (e, t, n, i, a, r) {
        var o;
        return null == r && (r = a), l(e, "object") && "[object Object]" == e ? o = e : null != e && (o = {
          x: e,
          y: t,
          width: n,
          height: i
        }, null != a && (o.rx = a, o.ry = r)), this.el("rect", o)
      }, s.circle = function (e, t, n) {
        var i;
        return l(e, "object") && "[object Object]" == e ? i = e : null != e && (i = {
          cx: e,
          cy: t,
          r: n
        }), this.el("circle", i)
      };
      var c = function () {
        function e() {
          this.parentNode.removeChild(this)
        }

        return function (t, n) {
          var i = r.doc.createElement("img"), a = r.doc.body;
          i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function () {
            n.call(i), i.onload = i.onerror = null, a.removeChild(i)
          }, i.onerror = e, a.appendChild(i), i.src = t
        }
      }();
      s.image = function (e, t, i, a, r) {
        var o = this.el("image");
        if (l(e, "object") && "src" in e) o.attr(e); else if (null != e) {
          var s = {"xlink:href": e, preserveAspectRatio: "none"};
          null != t && null != i && (s.x = t, s.y = i), null != a && null != r ? (s.width = a, s.height = r) : c(e, function () {
            n._.$(o.node, {width: this.offsetWidth, height: this.offsetHeight})
          }), n._.$(o.node, s)
        }
        return o
      }, s.ellipse = function (e, t, n, i) {
        var a;
        return l(e, "object") && "[object Object]" == e ? a = e : null != e && (a = {
          cx: e,
          cy: t,
          rx: n,
          ry: i
        }), this.el("ellipse", a)
      }, s.path = function (e) {
        var t;
        return l(e, "object") && !l(e, "array") ? t = e : e && (t = {d: e}), this.el("path", t)
      }, s.group = s.g = function (e) {
        var t = this.el("g");
        return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)), t
      }, s.svg = function (e, t, n, i, a, r, o, s) {
        var c = {};
        return l(e, "object") && null == t ? c = e : (null != e && (c.x = e), null != t && (c.y = t), null != n && (c.width = n), null != i && (c.height = i), null != a && null != r && null != o && null != s && (c.viewBox = [a, r, o, s])), this.el("svg", c)
      }, s.mask = function (e) {
        var t = this.el("mask");
        return 1 == arguments.length && e && !e.type ? t.attr(e) : arguments.length && t.add(Array.prototype.slice.call(arguments, 0)), t
      }, s.ptrn = function (e, t, n, i, a, r, o, s) {
        if (l(e, "object")) var c = e; else c = {patternUnits: "userSpaceOnUse"}, e && (c.x = e), t && (c.y = t), null != n && (c.width = n), null != i && (c.height = i), null != a && null != r && null != o && null != s ? c.viewBox = [a, r, o, s] : c.viewBox = [e || 0, t || 0, n || 0, i || 0];
        return this.el("pattern", c)
      }, s.use = function (e) {
        return null != e ? (e instanceof i && (e.attr("id") || e.attr({id: n._.id(e)}), e = e.attr("id")), "#" == String(e).charAt() && (e = e.substring(1)), this.el("use", {"xlink:href": "#" + e})) : i.prototype.use.call(this)
      }, s.symbol = function (e, t, n, i) {
        var a = {};
        return null != e && null != t && null != n && null != i && (a.viewBox = [e, t, n, i]), this.el("symbol", a)
      }, s.text = function (e, t, n) {
        var i = {};
        return l(e, "object") ? i = e : null != e && (i = {x: e, y: t, text: n || ""}), this.el("text", i)
      }, s.line = function (e, t, n, i) {
        var a = {};
        return l(e, "object") ? a = e : null != e && (a = {x1: e, x2: n, y1: t, y2: i}), this.el("line", a)
      }, s.polyline = function (e) {
        arguments.length > 1 && (e = Array.prototype.slice.call(arguments, 0));
        var t = {};
        return l(e, "object") && !l(e, "array") ? t = e : null != e && (t = {points: e}), this.el("polyline", t)
      }, s.polygon = function (e) {
        arguments.length > 1 && (e = Array.prototype.slice.call(arguments, 0));
        var t = {};
        return l(e, "object") && !l(e, "array") ? t = e : null != e && (t = {points: e}), this.el("polygon", t)
      }, function () {
        function i() {
          return this.selectAll("stop")
        }

        function a(e, t) {
          var i = u("stop"), a = {offset: +t + "%"};
          return e = n.color(e), a["stop-color"] = e.hex, e.opacity < 1 && (a["stop-opacity"] = e.opacity), u(i, a), this.node.appendChild(i), this
        }

        function r() {
          if ("linearGradient" == this.type) {
            var e = u(this.node, "x1") || 0, t = u(this.node, "x2") || 1, i = u(this.node, "y1") || 0,
              a = u(this.node, "y2") || 0;
            return n._.box(e, i, math.abs(t - e), math.abs(a - i))
          }
          var r = this.node.cx || .5, o = this.node.cy || .5, s = this.node.r || 0;
          return n._.box(r - s, o - s, 2 * s, 2 * s)
        }

        function o(e, n) {
          function i(e, t) {
            for (var n = (t - d) / (e - f), i = f; e > i; i++) o[i].offset = +(+d + n * (i - f)).toFixed(2);
            f = e, d = t
          }

          var a, r = t("snap.util.grad.parse", null, n).firstDefined();
          if (!r) return null;
          r.params.unshift(e), a = "l" == r.type.toLowerCase() ? l.apply(0, r.params) : c.apply(0, r.params), r.type != r.type.toLowerCase() && u(a.node, {gradientUnits: "userSpaceOnUse"});
          var o = r.stops, s = o.length, d = 0, f = 0;
          s--;
          for (var h = 0; s > h; h++) "offset" in o[h] && i(h, o[h].offset);
          for (o[s].offset = o[s].offset || 100, i(s, o[s].offset), h = 0; s >= h; h++) {
            var p = o[h];
            a.addStop(p.color, p.offset)
          }
          return a
        }

        function l(e, t, o, s, l) {
          var c = n._.make("linearGradient", e);
          return c.stops = i, c.addStop = a, c.getBBox = r, null != t && u(c.node, {x1: t, y1: o, x2: s, y2: l}), c
        }

        function c(e, t, o, s, l, c) {
          var d = n._.make("radialGradient", e);
          return d.stops = i, d.addStop = a, d.getBBox = r, null != t && u(d.node, {
            cx: t,
            cy: o,
            r: s
          }), null != l && null != c && u(d.node, {fx: l, fy: c}), d
        }

        var u = n._.$;
        s.gradient = function (e) {
          return o(this.defs, e)
        }, s.gradientLinear = function (e, t, n, i) {
          return l(this.defs, e, t, n, i)
        }, s.gradientRadial = function (e, t, n, i, a) {
          return c(this.defs, e, t, n, i, a)
        }, s.toString = function () {
          var e, t = this.node.ownerDocument, i = t.createDocumentFragment(), a = t.createElement("div"),
            r = this.node.cloneNode(!0);
          return i.appendChild(a), a.appendChild(r), n._.$(r, {xmlns: "http://www.w3.org/2000/svg"}), e = a.innerHTML, i.removeChild(i.firstChild), e
        }, s.toDataURL = function () {
          return e && e.btoa ? "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this))) : void 0
        }, s.clear = function () {
          for (var e, t = this.node.firstChild; t;) e = t.nextSibling, "defs" != t.tagName ? t.parentNode.removeChild(t) : s.clear.call({node: t}), t = e
        }
      }()
    }), i.plugin(function (e, t, n, i) {
      function a(e) {
        var t = a.ps = a.ps || {};
        return t[e] ? t[e].sleep = 100 : t[e] = {sleep: 100}, setTimeout(function () {
          for (var n in t) t[G](n) && n != e && (t[n].sleep--, !t[n].sleep && delete t[n])
        }), t[e]
      }

      function r(e, t, n, i) {
        return null == e && (e = t = n = i = 0), null == t && (t = e.y, n = e.width, i = e.height, e = e.x), {
          x: e,
          y: t,
          width: n,
          w: n,
          height: i,
          h: i,
          x2: e + n,
          y2: t + i,
          cx: e + n / 2,
          cy: t + i / 2,
          r1: j.min(n, i) / 2,
          r2: j.max(n, i) / 2,
          r0: j.sqrt(n * n + i * i) / 2,
          path: M(e, t, n, i),
          vb: [e, t, n, i].join(" ")
        }
      }

      function o() {
        return this.join(",").replace(z, "$1")
      }

      function s(e) {
        var t = I(e);
        return t.toString = o, t
      }

      function l(e, t, n, i, a, r, o, s, l) {
        return null == l ? m(e, t, n, i, a, r, o, s) : u(e, t, n, i, a, r, o, s, g(e, t, n, i, a, r, o, s, l))
      }

      function c(n, i) {
        function a(e) {
          return +(+e).toFixed(3)
        }

        return e._.cacher(function (e, r, o) {
          e instanceof t && (e = e.attr("d")), e = _(e);
          for (var s, c, d, f, h, p = "", m = {}, g = 0, v = 0, b = e.length; b > v; v++) {
            if (d = e[v], "M" == d[0]) s = +d[1], c = +d[2]; else {
              if (f = l(s, c, d[1], d[2], d[3], d[4], d[5], d[6]), g + f > r) {
                if (i && !m.start) {
                  if (h = l(s, c, d[1], d[2], d[3], d[4], d[5], d[6], r - g), p += ["C" + a(h.start.x), a(h.start.y), a(h.m.x), a(h.m.y), a(h.x), a(h.y)], o) return p;
                  m.start = p, p = ["M" + a(h.x), a(h.y) + "C" + a(h.n.x), a(h.n.y), a(h.end.x), a(h.end.y), a(d[5]), a(d[6])].join(), g += f, s = +d[5], c = +d[6];
                  continue
                }
                if (!n && !i) return h = l(s, c, d[1], d[2], d[3], d[4], d[5], d[6], r - g)
              }
              g += f, s = +d[5], c = +d[6]
            }
            p += d.shift() + d
          }
          return m.end = p, h = n ? g : i ? m : u(s, c, d[0], d[1], d[2], d[3], d[4], d[5], 1)
        }, null, e._.clone)
      }

      function u(e, t, n, i, a, r, o, s, l) {
        var c = 1 - l, u = q(c, 3), d = q(c, 2), f = l * l, h = f * l,
          p = u * e + 3 * d * l * n + 3 * c * l * l * a + h * o, m = u * t + 3 * d * l * i + 3 * c * l * l * r + h * s,
          g = e + 2 * l * (n - e) + f * (a - 2 * n + e), v = t + 2 * l * (i - t) + f * (r - 2 * i + t),
          b = n + 2 * l * (a - n) + f * (o - 2 * a + n), y = i + 2 * l * (r - i) + f * (s - 2 * r + i),
          x = c * e + l * n, w = c * t + l * i, C = c * a + l * o, S = c * r + l * s,
          M = 90 - 180 * j.atan2(g - b, v - y) / H;
        return {x: p, y: m, m: {x: g, y: v}, n: {x: b, y: y}, start: {x: x, y: w}, end: {x: C, y: S}, alpha: M}
      }

      function d(t, n, i, a, o, s, l, c) {
        e.is(t, "array") || (t = [t, n, i, a, o, s, l, c]);
        var u = L.apply(null, t);
        return r(u.min.x, u.min.y, u.max.x - u.min.x, u.max.y - u.min.y)
      }

      function f(e, t, n) {
        return t >= e.x && t <= e.x + e.width && n >= e.y && n <= e.y + e.height
      }

      function h(e, t) {
        return e = r(e), t = r(t), f(t, e.x, e.y) || f(t, e.x2, e.y) || f(t, e.x, e.y2) || f(t, e.x2, e.y2) || f(e, t.x, t.y) || f(e, t.x2, t.y) || f(e, t.x, t.y2) || f(e, t.x2, t.y2) || (e.x < t.x2 && e.x > t.x || t.x < e.x2 && t.x > e.x) && (e.y < t.y2 && e.y > t.y || t.y < e.y2 && t.y > e.y)
      }

      function p(e, t, n, i, a) {
        var r = -3 * t + 9 * n - 9 * i + 3 * a, o = e * r + 6 * t - 12 * n + 6 * i;
        return e * o - 3 * t + 3 * n
      }

      function m(e, t, n, i, a, r, o, s, l) {
        null == l && (l = 1), l = l > 1 ? 1 : 0 > l ? 0 : l;
        for (var c = l / 2, u = 12, d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], f = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], h = 0, m = 0; u > m; m++) {
          var g = c * d[m] + c, v = p(g, e, n, a, o), b = p(g, t, i, r, s), y = v * v + b * b;
          h += f[m] * j.sqrt(y)
        }
        return c * h
      }

      function g(e, t, n, i, a, r, o, s, l) {
        if (!(0 > l || m(e, t, n, i, a, r, o, s) < l)) {
          var c, u = 1, d = u / 2, f = u - d, h = .01;
          for (c = m(e, t, n, i, a, r, o, s, f); W(c - l) > h;) d /= 2, f += (l > c ? 1 : -1) * d, c = m(e, t, n, i, a, r, o, s, f);
          return f
        }
      }

      function v(e, t, n, i, a, r, o, s) {
        if (!(U(e, n) < V(a, o) || V(e, n) > U(a, o) || U(t, i) < V(r, s) || V(t, i) > U(r, s))) {
          var l = (e * i - t * n) * (a - o) - (e - n) * (a * s - r * o),
            c = (e * i - t * n) * (r - s) - (t - i) * (a * s - r * o), u = (e - n) * (r - s) - (t - i) * (a - o);
          if (u) {
            var d = l / u, f = c / u, h = +d.toFixed(2), p = +f.toFixed(2);
            if (!(h < +V(e, n).toFixed(2) || h > +U(e, n).toFixed(2) || h < +V(a, o).toFixed(2) || h > +U(a, o).toFixed(2) || p < +V(t, i).toFixed(2) || p > +U(t, i).toFixed(2) || p < +V(r, s).toFixed(2) || p > +U(r, s).toFixed(2))) return {
              x: d,
              y: f
            }
          }
        }
      }

      function b(e, t, n) {
        var i = d(e), a = d(t);
        if (!h(i, a)) return n ? 0 : [];
        for (var r = m.apply(0, e), o = m.apply(0, t), s = ~~(r / 8), l = ~~(o / 8), c = [], f = [], p = {}, g = n ? 0 : [], b = 0; s + 1 > b; b++) {
          var y = u.apply(0, e.concat(b / s));
          c.push({x: y.x, y: y.y, t: b / s})
        }
        for (b = 0; l + 1 > b; b++) y = u.apply(0, t.concat(b / l)), f.push({x: y.x, y: y.y, t: b / l});
        for (b = 0; s > b; b++) for (var x = 0; l > x; x++) {
          var w = c[b], C = c[b + 1], S = f[x], M = f[x + 1], A = W(C.x - w.x) < .001 ? "y" : "x",
            B = W(M.x - S.x) < .001 ? "y" : "x", T = v(w.x, w.y, C.x, C.y, S.x, S.y, M.x, M.y);
          if (T) {
            if (p[T.x.toFixed(4)] == T.y.toFixed(4)) continue;
            p[T.x.toFixed(4)] = T.y.toFixed(4);
            var k = w.t + W((T[A] - w[A]) / (C[A] - w[A])) * (C.t - w.t),
              E = S.t + W((T[B] - S[B]) / (M[B] - S[B])) * (M.t - S.t);
            k >= 0 && 1 >= k && E >= 0 && 1 >= E && (n ? g++ : g.push({x: T.x, y: T.y, t1: k, t2: E}))
          }
        }
        return g
      }

      function y(e, t) {
        return w(e, t)
      }

      function x(e, t) {
        return w(e, t, 1)
      }

      function w(e, t, n) {
        e = _(e), t = _(t);
        for (var i, a, r, o, s, l, c, u, d, f, h = n ? 0 : [], p = 0, m = e.length; m > p; p++) {
          var g = e[p];
          if ("M" == g[0]) i = s = g[1], a = l = g[2]; else {
            "C" == g[0] ? (d = [i, a].concat(g.slice(1)), i = d[6], a = d[7]) : (d = [i, a, i, a, s, l, s, l], i = s, a = l);
            for (var v = 0, y = t.length; y > v; v++) {
              var x = t[v];
              if ("M" == x[0]) r = c = x[1], o = u = x[2]; else {
                "C" == x[0] ? (f = [r, o].concat(x.slice(1)), r = f[6], o = f[7]) : (f = [r, o, r, o, c, u, c, u], r = c, o = u);
                var w = b(d, f, n);
                if (n) h += w; else {
                  for (var C = 0, S = w.length; S > C; C++) w[C].segment1 = p, w[C].segment2 = v, w[C].bez1 = d, w[C].bez2 = f;
                  h = h.concat(w)
                }
              }
            }
          }
        }
        return h
      }

      function C(e, t, n) {
        var i = S(e);
        return f(i, t, n) && w(e, [["M", t, n], ["H", i.x2 + 10]], 1) % 2 == 1
      }

      function S(e) {
        var t = a(e);
        if (t.bbox) return I(t.bbox);
        if (!e) return r();
        e = _(e);
        for (var n, i = 0, o = 0, s = [], l = [], c = 0, u = e.length; u > c; c++) if (n = e[c], "M" == n[0]) i = n[1], o = n[2], s.push(i), l.push(o); else {
          var d = L(i, o, n[1], n[2], n[3], n[4], n[5], n[6]);
          s = s.concat(d.min.x, d.max.x), l = l.concat(d.min.y, d.max.y), i = n[5], o = n[6]
        }
        var f = V.apply(0, s), h = V.apply(0, l), p = U.apply(0, s), m = U.apply(0, l), g = r(f, h, p - f, m - h);
        return t.bbox = I(g), g
      }

      function M(e, t, n, i, a) {
        if (a) return [["M", +e + +a, t], ["l", n - 2 * a, 0], ["a", a, a, 0, 0, 1, a, a], ["l", 0, i - 2 * a], ["a", a, a, 0, 0, 1, -a, a], ["l", 2 * a - n, 0], ["a", a, a, 0, 0, 1, -a, -a], ["l", 0, 2 * a - i], ["a", a, a, 0, 0, 1, a, -a], ["z"]];
        var r = [["M", e, t], ["l", n, 0], ["l", 0, i], ["l", -n, 0], ["z"]];
        return r.toString = o, r
      }

      function A(e, t, n, i, a) {
        if (null == a && null == i && (i = n), e = +e, t = +t, n = +n, i = +i, null != a) var r = Math.PI / 180,
          s = e + n * Math.cos(-i * r), l = e + n * Math.cos(-a * r), c = t + n * Math.sin(-i * r),
          u = t + n * Math.sin(-a * r),
          d = [["M", s, c], ["A", n, n, 0, +(a - i > 180), 0, l, u]]; else d = [["M", e, t], ["m", 0, -i], ["a", n, i, 0, 1, 1, 0, 2 * i], ["a", n, i, 0, 1, 1, 0, -2 * i], ["z"]];
        return d.toString = o, d
      }

      function B(t) {
        var n = a(t), i = String.prototype.toLowerCase;
        if (n.rel) return s(n.rel);
        e.is(t, "array") && e.is(t && t[0], "array") || (t = e.parsePathString(t));
        var r = [], l = 0, c = 0, u = 0, d = 0, f = 0;
        "M" == t[0][0] && (l = t[0][1], c = t[0][2], u = l, d = c, f++, r.push(["M", l, c]));
        for (var h = f, p = t.length; p > h; h++) {
          var m = r[h] = [], g = t[h];
          if (g[0] != i.call(g[0])) switch (m[0] = i.call(g[0]), m[0]) {
            case"a":
              m[1] = g[1], m[2] = g[2], m[3] = g[3], m[4] = g[4], m[5] = g[5], m[6] = +(g[6] - l).toFixed(3), m[7] = +(g[7] - c).toFixed(3);
              break;
            case"v":
              m[1] = +(g[1] - c).toFixed(3);
              break;
            case"m":
              u = g[1], d = g[2];
            default:
              for (var v = 1, b = g.length; b > v; v++) m[v] = +(g[v] - (v % 2 ? l : c)).toFixed(3)
          } else {
            m = r[h] = [], "m" == g[0] && (u = g[1] + l, d = g[2] + c);
            for (var y = 0, x = g.length; x > y; y++) r[h][y] = g[y]
          }
          var w = r[h].length;
          switch (r[h][0]) {
            case"z":
              l = u, c = d;
              break;
            case"h":
              l += +r[h][w - 1];
              break;
            case"v":
              c += +r[h][w - 1];
              break;
            default:
              l += +r[h][w - 2], c += +r[h][w - 1]
          }
        }
        return r.toString = o, n.rel = s(r), r
      }

      function T(t) {
        var n = a(t);
        if (n.abs) return s(n.abs);
        if (F(t, "array") && F(t && t[0], "array") || (t = e.parsePathString(t)), !t || !t.length) return [["M", 0, 0]];
        var i, r = [], l = 0, c = 0, u = 0, d = 0, f = 0;
        "M" == t[0][0] && (l = +t[0][1], c = +t[0][2], u = l, d = c, f++, r[0] = ["M", l, c]);
        for (var h, p, m = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), g = f, v = t.length; v > g; g++) {
          if (r.push(h = []), p = t[g], i = p[0], i != i.toUpperCase()) switch (h[0] = i.toUpperCase(), h[0]) {
            case"A":
              h[1] = p[1], h[2] = p[2], h[3] = p[3], h[4] = p[4], h[5] = p[5], h[6] = +p[6] + l, h[7] = +p[7] + c;
              break;
            case"V":
              h[1] = +p[1] + c;
              break;
            case"H":
              h[1] = +p[1] + l;
              break;
            case"R":
              for (var b = [l, c].concat(p.slice(1)), y = 2, x = b.length; x > y; y++) b[y] = +b[y] + l, b[++y] = +b[y] + c;
              r.pop(), r = r.concat(D(b, m));
              break;
            case"O":
              r.pop(), b = A(l, c, p[1], p[2]), b.push(b[0]), r = r.concat(b);
              break;
            case"U":
              r.pop(), r = r.concat(A(l, c, p[1], p[2], p[3])), h = ["U"].concat(r[r.length - 1].slice(-2));
              break;
            case"M":
              u = +p[1] + l, d = +p[2] + c;
            default:
              for (y = 1, x = p.length; x > y; y++) h[y] = +p[y] + (y % 2 ? l : c)
          } else if ("R" == i) b = [l, c].concat(p.slice(1)), r.pop(), r = r.concat(D(b, m)), h = ["R"].concat(p.slice(-2)); else if ("O" == i) r.pop(), b = A(l, c, p[1], p[2]), b.push(b[0]), r = r.concat(b); else if ("U" == i) r.pop(), r = r.concat(A(l, c, p[1], p[2], p[3])), h = ["U"].concat(r[r.length - 1].slice(-2)); else for (var w = 0, C = p.length; C > w; w++) h[w] = p[w];
          if (i = i.toUpperCase(), "O" != i) switch (h[0]) {
            case"Z":
              l = +u, c = +d;
              break;
            case"H":
              l = h[1];
              break;
            case"V":
              c = h[1];
              break;
            case"M":
              u = h[h.length - 2], d = h[h.length - 1];
            default:
              l = h[h.length - 2], c = h[h.length - 1]
          }
        }
        return r.toString = o, n.abs = s(r), r
      }

      function k(e, t, n, i) {
        return [e, t, n, i, n, i]
      }

      function E(e, t, n, i, a, r) {
        var o = 1 / 3, s = 2 / 3;
        return [o * e + s * n, o * t + s * i, o * a + s * n, o * r + s * i, a, r]
      }

      function P(t, n, i, a, r, o, s, l, c, u) {
        var d, f = 120 * H / 180, h = H / 180 * (+r || 0), p = [], m = e._.cacher(function (e, t, n) {
          var i = e * j.cos(n) - t * j.sin(n), a = e * j.sin(n) + t * j.cos(n);
          return {x: i, y: a}
        });
        if (u) M = u[0], A = u[1], C = u[2], S = u[3]; else {
          d = m(t, n, -h), t = d.x, n = d.y, d = m(l, c, -h), l = d.x, c = d.y;
          var g = (j.cos(H / 180 * r), j.sin(H / 180 * r), (t - l) / 2), v = (n - c) / 2,
            b = g * g / (i * i) + v * v / (a * a);
          b > 1 && (b = j.sqrt(b), i = b * i, a = b * a);
          var y = i * i, x = a * a,
            w = (o == s ? -1 : 1) * j.sqrt(W((y * x - y * v * v - x * g * g) / (y * v * v + x * g * g))),
            C = w * i * v / a + (t + l) / 2, S = w * -a * g / i + (n + c) / 2, M = j.asin(((n - S) / a).toFixed(9)),
            A = j.asin(((c - S) / a).toFixed(9));
          M = C > t ? H - M : M, A = C > l ? H - A : A, 0 > M && (M = 2 * H + M), 0 > A && (A = 2 * H + A), s && M > A && (M -= 2 * H), !s && A > M && (A -= 2 * H)
        }
        var B = A - M;
        if (W(B) > f) {
          var T = A, k = l, E = c;
          A = M + f * (s && A > M ? 1 : -1), l = C + i * j.cos(A), c = S + a * j.sin(A), p = P(l, c, i, a, r, 0, s, k, E, [A, T, C, S])
        }
        B = A - M;
        var L = j.cos(M), _ = j.sin(M), R = j.cos(A), D = j.sin(A), N = j.tan(B / 4), F = 4 / 3 * i * N,
          I = 4 / 3 * a * N, G = [t, n], z = [t + F * _, n - I * L], O = [l + F * D, c - I * R], V = [l, c];
        if (z[0] = 2 * G[0] - z[0], z[1] = 2 * G[1] - z[1], u) return [z, O, V].concat(p);
        p = [z, O, V].concat(p).join().split(",");
        for (var U = [], q = 0, Y = p.length; Y > q; q++) U[q] = q % 2 ? m(p[q - 1], p[q], h).y : m(p[q], p[q + 1], h).x;
        return U
      }

      function L(e, t, n, i, a, r, o, s) {
        for (var l, c, u, d, f, h, p, m, g = [], v = [[], []], b = 0; 2 > b; ++b) if (0 == b ? (c = 6 * e - 12 * n + 6 * a, l = -3 * e + 9 * n - 9 * a + 3 * o, u = 3 * n - 3 * e) : (c = 6 * t - 12 * i + 6 * r, l = -3 * t + 9 * i - 9 * r + 3 * s, u = 3 * i - 3 * t), W(l) < 1e-12) {
          if (W(c) < 1e-12) continue;
          d = -u / c, d > 0 && 1 > d && g.push(d)
        } else p = c * c - 4 * u * l, m = j.sqrt(p), 0 > p || (f = (-c + m) / (2 * l), f > 0 && 1 > f && g.push(f), h = (-c - m) / (2 * l), h > 0 && 1 > h && g.push(h));
        for (var y, x = g.length, w = x; x--;) d = g[x], y = 1 - d, v[0][x] = y * y * y * e + 3 * y * y * d * n + 3 * y * d * d * a + d * d * d * o, v[1][x] = y * y * y * t + 3 * y * y * d * i + 3 * y * d * d * r + d * d * d * s;
        return v[0][w] = e, v[1][w] = t, v[0][w + 1] = o, v[1][w + 1] = s, v[0].length = v[1].length = w + 2, {
          min: {
            x: V.apply(0, v[0]),
            y: V.apply(0, v[1])
          }, max: {x: U.apply(0, v[0]), y: U.apply(0, v[1])}
        }
      }

      function _(e, t) {
        var n = !t && a(e);
        if (!t && n.curve) return s(n.curve);
        for (var i = T(e), r = t && T(t), o = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, l = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, c = (function (e, t, n) {
          var i, a;
          if (!e) return ["C", t.x, t.y, t.x, t.y, t.x, t.y];
          switch (!(e[0] in {T: 1, Q: 1}) && (t.qx = t.qy = null), e[0]) {
            case"M":
              t.X = e[1], t.Y = e[2];
              break;
            case"A":
              e = ["C"].concat(P.apply(0, [t.x, t.y].concat(e.slice(1))));
              break;
            case"S":
              "C" == n || "S" == n ? (i = 2 * t.x - t.bx, a = 2 * t.y - t.by) : (i = t.x, a = t.y), e = ["C", i, a].concat(e.slice(1));
              break;
            case"T":
              "Q" == n || "T" == n ? (t.qx = 2 * t.x - t.qx, t.qy = 2 * t.y - t.qy) : (t.qx = t.x, t.qy = t.y), e = ["C"].concat(E(t.x, t.y, t.qx, t.qy, e[1], e[2]));
              break;
            case"Q":
              t.qx = e[1], t.qy = e[2], e = ["C"].concat(E(t.x, t.y, e[1], e[2], e[3], e[4]));
              break;
            case"L":
              e = ["C"].concat(k(t.x, t.y, e[1], e[2]));
              break;
            case"H":
              e = ["C"].concat(k(t.x, t.y, e[1], t.y));
              break;
            case"V":
              e = ["C"].concat(k(t.x, t.y, t.x, e[1]));
              break;
            case"Z":
              e = ["C"].concat(k(t.x, t.y, t.X, t.Y))
          }
          return e
        }), u = function (e, t) {
          if (e[t].length > 7) {
            e[t].shift();
            for (var n = e[t]; n.length;) f[t] = "A", r && (h[t] = "A"), e.splice(t++, 0, ["C"].concat(n.splice(0, 6)));
            e.splice(t, 1), v = U(i.length, r && r.length || 0)
          }
        }, d = function (e, t, n, a, o) {
          e && t && "M" == e[o][0] && "M" != t[o][0] && (t.splice(o, 0, ["M", a.x, a.y]), n.bx = 0, n.by = 0, n.x = e[o][1], n.y = e[o][2], v = U(i.length, r && r.length || 0))
        }, f = [], h = [], p = "", m = "", g = 0, v = U(i.length, r && r.length || 0); v > g; g++) {
          i[g] && (p = i[g][0]), "C" != p && (f[g] = p, g && (m = f[g - 1])), i[g] = c(i[g], o, m), "A" != f[g] && "C" == p && (f[g] = "C"), u(i, g), r && (r[g] && (p = r[g][0]), "C" != p && (h[g] = p, g && (m = h[g - 1])), r[g] = c(r[g], l, m), "A" != h[g] && "C" == p && (h[g] = "C"), u(r, g)), d(i, r, o, l, g), d(r, i, l, o, g);
          var b = i[g], y = r && r[g], x = b.length, w = r && y.length;
          o.x = b[x - 2], o.y = b[x - 1], o.bx = O(b[x - 4]) || o.x, o.by = O(b[x - 3]) || o.y, l.bx = r && (O(y[w - 4]) || l.x), l.by = r && (O(y[w - 3]) || l.y), l.x = r && y[w - 2], l.y = r && y[w - 1]
        }
        return r || (n.curve = s(i)), r ? [i, r] : i
      }

      function R(e, t) {
        if (!t) return e;
        var n, i, a, r, o, s, l;
        for (e = _(e), a = 0, o = e.length; o > a; a++) for (l = e[a], r = 1, s = l.length; s > r; r += 2) n = t.x(l[r], l[r + 1]), i = t.y(l[r], l[r + 1]), l[r] = n, l[r + 1] = i;
        return e
      }

      function D(e, t) {
        for (var n = [], i = 0, a = e.length; a - 2 * !t > i; i += 2) {
          var r = [{x: +e[i - 2], y: +e[i - 1]}, {x: +e[i], y: +e[i + 1]}, {x: +e[i + 2], y: +e[i + 3]}, {
            x: +e[i + 4],
            y: +e[i + 5]
          }];
          t ? i ? a - 4 == i ? r[3] = {x: +e[0], y: +e[1]} : a - 2 == i && (r[2] = {
            x: +e[0],
            y: +e[1]
          }, r[3] = {x: +e[2], y: +e[3]}) : r[0] = {
            x: +e[a - 2],
            y: +e[a - 1]
          } : a - 4 == i ? r[3] = r[2] : i || (r[0] = {
            x: +e[i],
            y: +e[i + 1]
          }), n.push(["C", (-r[0].x + 6 * r[1].x + r[2].x) / 6, (-r[0].y + 6 * r[1].y + r[2].y) / 6, (r[1].x + 6 * r[2].x - r[3].x) / 6, (r[1].y + 6 * r[2].y - r[3].y) / 6, r[2].x, r[2].y])
        }
        return n
      }

      var N = t.prototype, F = e.is, I = e._.clone, G = "hasOwnProperty", z = /,?([a-z]),?/gi, O = parseFloat, j = Math,
        H = j.PI, V = j.min, U = j.max, q = j.pow, W = j.abs, Y = c(1), K = c(), J = c(0, 1), X = e._unit2px, $ = {
          path: function (e) {
            return e.attr("path")
          }, circle: function (e) {
            var t = X(e);
            return A(t.cx, t.cy, t.r)
          }, ellipse: function (e) {
            var t = X(e);
            return A(t.cx || 0, t.cy || 0, t.rx, t.ry)
          }, rect: function (e) {
            var t = X(e);
            return M(t.x || 0, t.y || 0, t.width, t.height, t.rx, t.ry)
          }, image: function (e) {
            var t = X(e);
            return M(t.x || 0, t.y || 0, t.width, t.height)
          }, line: function (e) {
            return "M" + [e.attr("x1") || 0, e.attr("y1") || 0, e.attr("x2"), e.attr("y2")]
          }, polyline: function (e) {
            return "M" + e.attr("points")
          }, polygon: function (e) {
            return "M" + e.attr("points") + "z"
          }, deflt: function (e) {
            var t = e.node.getBBox();
            return M(t.x, t.y, t.width, t.height)
          }
        };
      e.path = a, e.path.getTotalLength = Y, e.path.getPointAtLength = K, e.path.getSubpath = function (e, t, n) {
        if (this.getTotalLength(e) - n < 1e-6) return J(e, t).end;
        var i = J(e, n, 1);
        return t ? J(i, t).end : i
      }, N.getTotalLength = function () {
        return this.node.getTotalLength ? this.node.getTotalLength() : void 0
      }, N.getPointAtLength = function (e) {
        return K(this.attr("d"), e)
      }, N.getSubpath = function (t, n) {
        return e.path.getSubpath(this.attr("d"), t, n)
      }, e._.box = r, e.path.findDotsAtSegment = u, e.path.bezierBBox = d, e.path.isPointInsideBBox = f, e.closest = function (t, n, i, a) {
        for (var o = 100, s = r(t - o / 2, n - o / 2, o, o), l = [], c = i[0].hasOwnProperty("x") ? function (e) {
          return {x: i[e].x, y: i[e].y}
        } : function (e) {
          return {x: i[e], y: a[e]}
        }, u = 0; 1e6 >= o && !u;) {
          for (var d = 0, h = i.length; h > d; d++) {
            var p = c(d);
            if (f(s, p.x, p.y)) {
              u++, l.push(p);
              break
            }
          }
          u || (o *= 2, s = r(t - o / 2, n - o / 2, o, o))
        }
        if (1e6 != o) {
          var m, g = 1 / 0;
          for (d = 0, h = l.length; h > d; d++) {
            var v = e.len(t, n, l[d].x, l[d].y);
            g > v && (g = v, l[d].len = v, m = l[d])
          }
          return m
        }
      }, e.path.isBBoxIntersect = h, e.path.intersection = y, e.path.intersectionNumber = x, e.path.isPointInside = C, e.path.getBBox = S, e.path.get = $, e.path.toRelative = B, e.path.toAbsolute = T, e.path.toCubic = _, e.path.map = R, e.path.toString = o, e.path.clone = s
    }), i.plugin(function (e, i, a, r) {
      var o = Math.max, s = Math.min, l = function (e) {
        if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", e) for (var t = 0, n = e.length; n > t; t++) e[t] && (this[this.items.length] = this.items[this.items.length] = e[t], this.length++)
      }, c = l.prototype;
      c.push = function () {
        for (var e, t, n = 0, i = arguments.length; i > n; n++) e = arguments[n], e && (t = this.items.length, this[t] = this.items[t] = e, this.length++);
        return this
      }, c.pop = function () {
        return this.length && delete this[this.length--], this.items.pop()
      }, c.forEach = function (e, t) {
        for (var n = 0, i = this.items.length; i > n; n++) if (e.call(t, this.items[n], n) === !1) return this;
        return this
      }, c.animate = function (i, a, r, o) {
        "function" != typeof r || r.length || (o = r, r = n.linear), i instanceof e._.Animation && (o = i.callback, r = i.easing, a = r.dur, i = i.attr);
        var s = arguments;
        if (e.is(i, "array") && e.is(s[s.length - 1], "array")) var l = !0;
        var c, u = function () {
          c ? this.b = c : c = this.b
        }, d = 0, f = this, h = o && function () {
          ++d == f.length && o.call(this)
        };
        return this.forEach(function (e, n) {
          t.once("snap.animcreated." + e.id, u), l ? s[n] && e.animate.apply(e, s[n]) : e.animate(i, a, r, h)
        })
      }, c.remove = function () {
        for (; this.length;) this.pop().remove();
        return this
      }, c.bind = function (e, t, n) {
        var i = {};
        if ("function" == typeof t) this.bindings[e] = t; else {
          var a = n || e;
          this.bindings[e] = function (e) {
            i[a] = e, t.attr(i)
          }
        }
        return this
      }, c.attr = function (e) {
        var t = {};
        for (var n in e) this.bindings[n] ? this.bindings[n](e[n]) : t[n] = e[n];
        for (var i = 0, a = this.items.length; a > i; i++) this.items[i].attr(t);
        return this
      }, c.clear = function () {
        for (; this.length;) this.pop()
      }, c.splice = function (e, t, n) {
        e = 0 > e ? o(this.length + e, 0) : e, t = o(0, s(this.length - e, t));
        var i, a = [], r = [], c = [];
        for (i = 2; i < arguments.length; i++) c.push(arguments[i]);
        for (i = 0; t > i; i++) r.push(this[e + i]);
        for (; i < this.length - e; i++) a.push(this[e + i]);
        var u = c.length;
        for (i = 0; i < u + a.length; i++) this.items[e + i] = this[e + i] = u > i ? c[i] : a[i - u];
        for (i = this.items.length = this.length -= t - u; this[i];) delete this[i++];
        return new l(r)
      }, c.exclude = function (e) {
        for (var t = 0, n = this.length; n > t; t++) if (this[t] == e) return this.splice(t, 1), !0;
        return !1
      }, c.insertAfter = function (e) {
        for (var t = this.items.length; t--;) this.items[t].insertAfter(e);
        return this
      }, c.getBBox = function () {
        for (var e = [], t = [], n = [], i = [], a = this.items.length; a--;) if (!this.items[a].removed) {
          var r = this.items[a].getBBox();
          e.push(r.x), t.push(r.y), n.push(r.x + r.width), i.push(r.y + r.height)
        }
        return e = s.apply(0, e), t = s.apply(0, t), n = o.apply(0, n), i = o.apply(0, i), {
          x: e,
          y: t,
          x2: n,
          y2: i,
          width: n - e,
          height: i - t,
          cx: e + (n - e) / 2,
          cy: t + (i - t) / 2
        }
      }, c.clone = function (e) {
        e = new l;
        for (var t = 0, n = this.items.length; n > t; t++) e.push(this.items[t].clone());
        return e
      }, c.toString = function () {
        return "Snap‘s set"
      }, c.type = "set", e.Set = l, e.set = function () {
        var e = new l;
        return arguments.length && e.push.apply(e, Array.prototype.slice.call(arguments, 0)), e
      }
    }), i.plugin(function (e, n, i, a) {
      function r(e) {
        var t = e[0];
        switch (t.toLowerCase()) {
          case"t":
            return [t, 0, 0];
          case"m":
            return [t, 1, 0, 0, 1, 0, 0];
          case"r":
            return 4 == e.length ? [t, 0, e[2], e[3]] : [t, 0];
          case"s":
            return 5 == e.length ? [t, 1, 1, e[3], e[4]] : 3 == e.length ? [t, 1, 1] : [t, 1]
        }
      }

      function o(t, n, i) {
        n = v(n).replace(/\.{3}|\u2026/g, t), t = e.parseTransformString(t) || [], n = e.parseTransformString(n) || [];
        for (var a, o, s, l, c = Math.max(t.length, n.length), u = [], h = [], p = 0; c > p; p++) {
          if (s = t[p] || r(n[p]), l = n[p] || r(s), s[0] != l[0] || "r" == s[0].toLowerCase() && (s[2] != l[2] || s[3] != l[3]) || "s" == s[0].toLowerCase() && (s[3] != l[3] || s[4] != l[4])) {
            t = e._.transform2matrix(t, i()), n = e._.transform2matrix(n, i()), u = [["m", t.a, t.b, t.c, t.d, t.e, t.f]], h = [["m", n.a, n.b, n.c, n.d, n.e, n.f]];
            break
          }
          for (u[p] = [], h[p] = [], a = 0, o = Math.max(s.length, l.length); o > a; a++) a in s && (u[p][a] = s[a]), a in l && (h[p][a] = l[a])
        }
        return {from: f(u), to: f(h), f: d(u)}
      }

      function s(e) {
        return e
      }

      function l(e) {
        return function (t) {
          return +t.toFixed(3) + e
        }
      }

      function c(e) {
        return e.join(" ")
      }

      function u(t) {
        return e.rgb(t[0], t[1], t[2])
      }

      function d(e) {
        var t, n, i, a, r, o, s = 0, l = [];
        for (t = 0, n = e.length; n > t; t++) {
          for (r = "[", o = ['"' + e[t][0] + '"'], i = 1, a = e[t].length; a > i; i++) o[i] = "val[" + s++ + "]";
          r += o + "]", l[t] = r
        }
        return Function("val", "return Snap.path.toString.call([" + l + "])")
      }

      function f(e) {
        for (var t = [], n = 0, i = e.length; i > n; n++) for (var a = 1, r = e[n].length; r > a; a++) t.push(e[n][a]);
        return t
      }

      function h(e) {
        return isFinite(parseFloat(e))
      }

      function p(t, n) {
        return e.is(t, "array") && e.is(n, "array") ? t.toString() == n.toString() : !1
      }

      var m = {}, g = /[a-z]+$/i, v = String;
      m.stroke = m.fill = "colour", n.prototype.equal = function (e, n) {
        return t("snap.util.equal", this, e, n).firstDefined()
      }, t.on("snap.util.equal", function (t, n) {
        var i, a, r = v(this.attr(t) || ""), b = this;
        if (h(r) && h(n)) return {from: parseFloat(r), to: parseFloat(n), f: s};
        if ("colour" == m[t]) return i = e.color(r), a = e.color(n), {
          from: [i.r, i.g, i.b, i.opacity],
          to: [a.r, a.g, a.b, a.opacity],
          f: u
        };
        if ("viewBox" == t) return i = this.attr(t).vb.split(" ").map(Number), a = n.split(" ").map(Number), {
          from: i,
          to: a,
          f: c
        };
        if ("transform" == t || "gradientTransform" == t || "patternTransform" == t) return n instanceof e.Matrix && (n = n.toTransformString()), e._.rgTransform.test(n) || (n = e._.svgTransform2string(n)), o(r, n, function () {
          return b.getBBox(1)
        });
        if ("d" == t || "path" == t) return i = e.path.toCubic(r, n), {from: f(i[0]), to: f(i[1]), f: d(i[0])};
        if ("points" == t) return i = v(r).split(e._.separator), a = v(n).split(e._.separator), {
          from: i,
          to: a,
          f: function (e) {
            return e
          }
        };
        var y = r.match(g), x = v(n).match(g);
        return y && p(y, x) ? {from: parseFloat(r), to: parseFloat(n), f: l(y)} : {
          from: this.asPX(t),
          to: this.asPX(t, n),
          f: s
        }
      })
    }), i.plugin(function (e, n, i, a) {
      for (var r = n.prototype, o = "hasOwnProperty", s = ("createTouch" in a.doc), l = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], c = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      }, u = (function (e, t) {
        var n = "y" == e ? "scrollTop" : "scrollLeft", i = t && t.node ? t.node.ownerDocument : a.doc;
        return i[n in i.documentElement ? "documentElement" : "body"][n]
      }), d = function () {
        return this.originalEvent.preventDefault()
      }, f = function () {
        return this.originalEvent.stopPropagation()
      }, h = function (e, t, n, i) {
        var a = s && c[t] ? c[t] : t, r = function (a) {
          var r = u("y", i), l = u("x", i);
          if (s && c[o](t)) for (var h = 0, p = a.targetTouches && a.targetTouches.length; p > h; h++) if (a.targetTouches[h].target == e || e.contains(a.targetTouches[h].target)) {
            var m = a;
            a = a.targetTouches[h], a.originalEvent = m, a.preventDefault = d, a.stopPropagation = f;
            break
          }
          var g = a.clientX + l, v = a.clientY + r;
          return n.call(i, a, g, v)
        };
        return t !== a && e.addEventListener(t, r, !1), e.addEventListener(a, r, !1), function () {
          return t !== a && e.removeEventListener(t, r, !1), e.removeEventListener(a, r, !1), !0
        }
      }, p = [], m = function (e) {
        for (var n, i = e.clientX, a = e.clientY, r = u("y"), o = u("x"), l = p.length; l--;) {
          if (n = p[l], s) {
            for (var c, d = e.touches && e.touches.length; d--;) if (c = e.touches[d], c.identifier == n.el._drag.id || n.el.node.contains(c.target)) {
              i = c.clientX, a = c.clientY, (e.originalEvent ? e.originalEvent : e).preventDefault();
              break
            }
          } else e.preventDefault();
          var f = n.el.node;
          f.nextSibling, f.parentNode, f.style.display;
          i += o, a += r, t("snap.drag.move." + n.el.id, n.move_scope || n.el, i - n.el._drag.x, a - n.el._drag.y, i, a, e)
        }
      }, g = function (n) {
        e.unmousemove(m).unmouseup(g);
        for (var i, a = p.length; a--;) i = p[a], i.el._drag = {}, t("snap.drag.end." + i.el.id, i.end_scope || i.start_scope || i.move_scope || i.el, n), t.off("snap.drag.*." + i.el.id);
        p = []
      }, v = l.length; v--;) !function (t) {
        e[t] = r[t] = function (n, i) {
          if (e.is(n, "function")) this.events = this.events || [], this.events.push({
            name: t,
            f: n,
            unbind: h(this.node || document, t, n, i || this)
          }); else for (var a = 0, r = this.events.length; r > a; a++) if (this.events[a].name == t) try {
            this.events[a].f.call(this)
          } catch (o) {
          }
          return this
        }, e["un" + t] = r["un" + t] = function (e) {
          for (var n = this.events || [], i = n.length; i--;) if (n[i].name == t && (n[i].f == e || !e)) return n[i].unbind(), n.splice(i, 1), !n.length && delete this.events, this;
          return this
        }
      }(l[v]);
      r.hover = function (e, t, n, i) {
        return this.mouseover(e, n).mouseout(t, i || n)
      }, r.unhover = function (e, t) {
        return this.unmouseover(e).unmouseout(t)
      };
      var b = [];
      r.drag = function (n, i, a, r, o, s) {
        function l(l, c, d) {
          (l.originalEvent || l).preventDefault(), u._drag.x = c, u._drag.y = d, u._drag.id = l.identifier, !p.length && e.mousemove(m).mouseup(g), p.push({
            el: u,
            move_scope: r,
            start_scope: o,
            end_scope: s
          }), i && t.on("snap.drag.start." + u.id, i), n && t.on("snap.drag.move." + u.id, n), a && t.on("snap.drag.end." + u.id, a), t("snap.drag.start." + u.id, o || r || u, c, d, l)
        }

        function c(e, n, i) {
          t("snap.draginit." + u.id, u, e, n, i)
        }

        var u = this;
        if (!arguments.length) {
          var d;
          return u.drag(function (e, t) {
            this.attr({transform: d + (d ? "T" : "t") + [e, t]})
          }, function () {
            d = this.transform().local
          })
        }
        return t.on("snap.draginit." + u.id, l), u._drag = {}, b.push({el: u, start: l, init: c}), u.mousedown(c), u
      }, r.undrag = function () {
        for (var n = b.length; n--;) b[n].el == this && (this.unmousedown(b[n].init), b.splice(n, 1), t.unbind("snap.drag.*." + this.id), t.unbind("snap.draginit." + this.id));
        return !b.length && e.unmousemove(m).unmouseup(g), this
      }
    }), i.plugin(function (e, n, i, a) {
      var r = (n.prototype, i.prototype), o = /^\s*url\((.+)\)/, s = String, l = e._.$;
      e.filter = {}, r.filter = function (t) {
        var i = this;
        "svg" != i.type && (i = i.paper);
        var a = e.parse(s(t)), r = e._.id(), o = (i.node.offsetWidth, i.node.offsetHeight, l("filter"));
        return l(o, {id: r, filterUnits: "userSpaceOnUse"}), o.appendChild(a.node), i.defs.appendChild(o), new n(o)
      }, t.on("snap.util.getattr.filter", function () {
        t.stop();
        var n = l(this.node, "filter");
        if (n) {
          var i = s(n).match(o);
          return i && e.select(i[1])
        }
      }), t.on("snap.util.attr.filter", function (i) {
        if (i instanceof n && "filter" == i.type) {
          t.stop();
          var a = i.node.id;
          a || (l(i.node, {id: i.id}), a = i.id), l(this.node, {filter: e.url(a)})
        }
        i && "none" != i || (t.stop(), this.node.removeAttribute("filter"))
      }), e.filter.blur = function (t, n) {
        null == t && (t = 2);
        var i = null == n ? t : [t, n];
        return e.format('<feGaussianBlur stdDeviation="{def}"/>', {def: i})
      }, e.filter.blur.toString = function () {
        return this()
      }, e.filter.shadow = function (t, n, i, a, r) {
        return "string" == typeof i && (a = i, r = a, i = 4), "string" != typeof a && (r = a, a = "#000"), a = a || "#000", null == i && (i = 4), null == r && (r = 1), null == t && (t = 0, n = 2), null == n && (n = t), a = e.color(a), e.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
          color: a,
          dx: t,
          dy: n,
          blur: i,
          opacity: r
        })
      }, e.filter.shadow.toString = function () {
        return this()
      }, e.filter.grayscale = function (t) {
        return null == t && (t = 1), e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
          a: .2126 + .7874 * (1 - t),
          b: .7152 - .7152 * (1 - t),
          c: .0722 - .0722 * (1 - t),
          d: .2126 - .2126 * (1 - t),
          e: .7152 + .2848 * (1 - t),
          f: .0722 - .0722 * (1 - t),
          g: .2126 - .2126 * (1 - t),
          h: .0722 + .9278 * (1 - t)
        })
      }, e.filter.grayscale.toString = function () {
        return this()
      }, e.filter.sepia = function (t) {
        return null == t && (t = 1), e.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
          a: .393 + .607 * (1 - t),
          b: .769 - .769 * (1 - t),
          c: .189 - .189 * (1 - t),
          d: .349 - .349 * (1 - t),
          e: .686 + .314 * (1 - t),
          f: .168 - .168 * (1 - t),
          g: .272 - .272 * (1 - t),
          h: .534 - .534 * (1 - t),
          i: .131 + .869 * (1 - t)
        })
      }, e.filter.sepia.toString = function () {
        return this()
      }, e.filter.saturate = function (t) {
        return null == t && (t = 1), e.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - t})
      }, e.filter.saturate.toString = function () {
        return this()
      }, e.filter.hueRotate = function (t) {
        return t = t || 0, e.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: t})
      }, e.filter.hueRotate.toString = function () {
        return this()
      }, e.filter.invert = function (t) {
        return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
          amount: t,
          amount2: 1 - t
        })
      }, e.filter.invert.toString = function () {
        return this()
      }, e.filter.brightness = function (t) {
        return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: t})
      }, e.filter.brightness.toString = function () {
        return this()
      }, e.filter.contrast = function (t) {
        return null == t && (t = 1), e.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
          amount: t,
          amount2: .5 - t / 2
        })
      }, e.filter.contrast.toString = function () {
        return this()
      }
    }), i.plugin(function (e, t, n, i, a) {
      var r = e._.box, o = e.is, s = /^[^a-z]*([tbmlrc])/i, l = function () {
        return "T" + this.dx + "," + this.dy
      };
      t.prototype.getAlign = function (e, t) {
        null == t && o(e, "string") && (t = e, e = null), e = e || this.paper;
        var n = e.getBBox ? e.getBBox() : r(e), i = this.getBBox(), a = {};
        switch (t = t && t.match(s), t = t ? t[1].toLowerCase() : "c") {
          case"t":
            a.dx = 0, a.dy = n.y - i.y;
            break;
          case"b":
            a.dx = 0, a.dy = n.y2 - i.y2;
            break;
          case"m":
            a.dx = 0, a.dy = n.cy - i.cy;
            break;
          case"l":
            a.dx = n.x - i.x, a.dy = 0;
            break;
          case"r":
            a.dx = n.x2 - i.x2, a.dy = 0;
            break;
          default:
            a.dx = n.cx - i.cx, a.dy = 0
        }
        return a.toString = l, a
      }, t.prototype.align = function (e, t) {
        return this.transform("..." + this.getAlign(e, t))
      }
    }), i
  })
}, function (e, t) {
  var n = !1;
  !function (t) {
    var i, a, r = "0.4.2", o = "hasOwnProperty", s = /[\.\/]/, l = /\s*,\s*/, c = "*", u = function (e, t) {
      return e - t
    }, d = {n: {}}, f = function () {
      for (var e = 0, t = this.length; t > e; e++) if ("undefined" != typeof this[e]) return this[e]
    }, h = function () {
      for (var e = this.length; --e;) if ("undefined" != typeof this[e]) return this[e]
    }, p = function (e, t) {
      e = String(e);
      var n, r = a, o = Array.prototype.slice.call(arguments, 2), s = p.listeners(e), l = 0, c = [], d = {}, m = [],
        g = i;
      m.firstDefined = f, m.lastDefined = h, i = e, a = 0;
      for (var v = 0, b = s.length; b > v; v++) "zIndex" in s[v] && (c.push(s[v].zIndex), s[v].zIndex < 0 && (d[s[v].zIndex] = s[v]));
      for (c.sort(u); c[l] < 0;) if (n = d[c[l++]], m.push(n.apply(t, o)), a) return a = r, m;
      for (v = 0; b > v; v++) if (n = s[v], "zIndex" in n) if (n.zIndex == c[l]) {
        if (m.push(n.apply(t, o)), a) break;
        do if (l++, n = d[c[l]], n && m.push(n.apply(t, o)), a) break; while (n)
      } else d[n.zIndex] = n; else if (m.push(n.apply(t, o)), a) break;
      return a = r, i = g, m
    };
    p._events = d, p.listeners = function (e) {
      var t, n, i, a, r, o, l, u, f = e.split(s), h = d, p = [h], m = [];
      for (a = 0, r = f.length; r > a; a++) {
        for (u = [], o = 0, l = p.length; l > o; o++) for (h = p[o].n, n = [h[f[a]], h[c]], i = 2; i--;) t = n[i], t && (u.push(t), m = m.concat(t.f || []));
        p = u
      }
      return m
    }, p.on = function (e, t) {
      if (e = String(e), "function" != typeof t) return function () {
      };
      for (var n = e.split(l), i = 0, a = n.length; a > i; i++) !function (e) {
        for (var n, i = e.split(s), a = d, r = 0, o = i.length; o > r; r++) a = a.n, a = a.hasOwnProperty(i[r]) && a[i[r]] || (a[i[r]] = {n: {}});
        for (a.f = a.f || [], r = 0, o = a.f.length; o > r; r++) if (a.f[r] == t) {
          n = !0;
          break
        }
        !n && a.f.push(t)
      }(n[i]);
      return function (e) {
        +e == +e && (t.zIndex = +e)
      }
    }, p.f = function (e) {
      var t = [].slice.call(arguments, 1);
      return function () {
        p.apply(null, [e, null].concat(t).concat([].slice.call(arguments, 0)))
      }
    }, p.stop = function () {
      a = 1
    }, p.nt = function (e) {
      return e ? new RegExp("(?:\\.|\\/|^)" + e + "(?:\\.|\\/|$)").test(i) : i
    }, p.nts = function () {
      return i.split(s)
    }, p.off = p.unbind = function (e, t) {
      if (!e) return void(p._events = d = {n: {}});
      var n = e.split(l);
      if (n.length > 1) for (var i = 0, a = n.length; a > i; i++) p.off(n[i], t); else {
        n = e.split(s);
        var r, u, f, i, a, h, m, g = [d];
        for (i = 0, a = n.length; a > i; i++) for (h = 0; h < g.length; h += f.length - 2) {
          if (f = [h, 1], r = g[h].n, n[i] != c) r[n[i]] && f.push(r[n[i]]); else for (u in r) r[o](u) && f.push(r[u]);
          g.splice.apply(g, f)
        }
        for (i = 0, a = g.length; a > i; i++) for (r = g[i]; r.n;) {
          if (t) {
            if (r.f) {
              for (h = 0, m = r.f.length; m > h; h++) if (r.f[h] == t) {
                r.f.splice(h, 1);
                break
              }
              !r.f.length && delete r.f
            }
            for (u in r.n) if (r.n[o](u) && r.n[u].f) {
              var v = r.n[u].f;
              for (h = 0, m = v.length; m > h; h++) if (v[h] == t) {
                v.splice(h, 1);
                break
              }
              !v.length && delete r.n[u].f
            }
          } else {
            delete r.f;
            for (u in r.n) r.n[o](u) && r.n[u].f && delete r.n[u].f
          }
          r = r.n
        }
      }
    }, p.once = function (e, t) {
      var n = function () {
        return p.unbind(e, n), t.apply(this, arguments)
      };
      return p.on(e, n)
    }, p.version = r, p.toString = function () {
      return "You are running Eve " + r
    }, "undefined" != typeof e && e.exports ? e.exports = p : "function" == typeof n && n.amd ? n("eve", [], function () {
      return p
    }) : t.eve = p
  }(this)
}, function (e, t, n) {
  (function (n) {
    var i = !1;
    !function () {
      function a(e) {
        if (!(this instanceof a)) return null == e ? new a : new a(e);
        if ("function" == typeof e) return this.random = e, this;
        arguments.length && (this.seed = 0);
        for (var t = 0; t < arguments.length; t++) {
          var n = 0;
          if ("[object String]" === Object.prototype.toString.call(arguments[t])) for (var i = 0; i < arguments[t].length; i++) {
            for (var r = 0, o = 0; o < arguments[t].length; o++) r = arguments[t].charCodeAt(o) + (r << 6) + (r << 16) - r;
            n += r
          } else n = arguments[t];
          this.seed += (arguments.length - t) * n
        }
        return this.mt = this.mersenne_twister(this.seed), this.bimd5 = this.blueimp_md5(), this.random = function () {
          return this.mt.random(this.seed)
        }, this
      }

      function r(e, t) {
        if (e || (e = {}), t) for (var n in t) "undefined" == typeof e[n] && (e[n] = t[n]);
        return e
      }

      function o(e, t) {
        if (e) throw new RangeError(t)
      }

      function s(e) {
        return function () {
          return this.natural(e)
        }
      }

      function l(e, t) {
        for (var n, i = w(e), a = 0, r = i.length; r > a; a++) n = i[a], t[n] = e[n] || t[n]
      }

      function c(e, t) {
        for (var n = 0, i = e.length; i > n; n++) t[n] = e[n]
      }

      function u(e, t) {
        var n = Array.isArray(e), i = t || (n ? new Array(e.length) : {});
        return n ? c(e, i) : l(e, i), i
      }

      var d = 9007199254740992, f = -d, h = "0123456789", p = "abcdefghijklmnopqrstuvwxyz", m = p.toUpperCase(),
        g = h + "abcdef", v = Array.prototype.slice;
      a.prototype.VERSION = "1.0.3";
      var b = function () {
        throw new Error("No Base64 encoder available.")
      };
      !function () {
        "function" == typeof btoa ? b = btoa : "function" == typeof n && (b = function (e) {
          return new n(e).toString("base64")
        })
      }(), a.prototype.bool = function (e) {
        return e = r(e, {likelihood: 50}), o(e.likelihood < 0 || e.likelihood > 100, "Chance: Likelihood accepts values from 0 to 100."), 100 * this.random() < e.likelihood
      }, a.prototype.character = function (e) {
        e = r(e), o(e.alpha && e.symbols, "Chance: Cannot specify both alpha and symbols.");
        var t, n, i = "!@#$%^&*()[]";
        return t = "lower" === e.casing ? p : "upper" === e.casing ? m : p + m, n = e.pool ? e.pool : e.alpha ? t : e.symbols ? i : t + h + i, n.charAt(this.natural({max: n.length - 1}))
      }, a.prototype.floating = function (e) {
        e = r(e, {fixed: 4}), o(e.fixed && e.precision, "Chance: Cannot specify both fixed and precision.");
        var t, n = Math.pow(10, e.fixed), i = d / n, a = -i;
        o(e.min && e.fixed && e.min < a, "Chance: Min specified is out of range with fixed. Min should be, at least, " + a), o(e.max && e.fixed && e.max > i, "Chance: Max specified is out of range with fixed. Max should be, at most, " + i), e = r(e, {
          min: a,
          max: i
        }), t = this.integer({min: e.min * n, max: e.max * n});
        var s = (t / n).toFixed(e.fixed);
        return parseFloat(s)
      }, a.prototype.integer = function (e) {
        return e = r(e, {
          min: f,
          max: d
        }), o(e.min > e.max, "Chance: Min cannot be greater than Max."), Math.floor(this.random() * (e.max - e.min + 1) + e.min)
      }, a.prototype.natural = function (e) {
        return e = r(e, {min: 0, max: d}), o(e.min < 0, "Chance: Min cannot be less than zero."), this.integer(e)
      }, a.prototype.string = function (e) {
        e = r(e, {
          length: this.natural({
            min: 5,
            max: 20
          })
        }), o(e.length < 0, "Chance: Length cannot be less than zero.");
        var t = e.length, n = this.n(this.character, t, e);
        return n.join("")
      }, a.prototype.capitalize = function (e) {
        return e.charAt(0).toUpperCase() + e.substr(1)
      }, a.prototype.mixin = function (e) {
        for (var t in e) a.prototype[t] = e[t];
        return this
      }, a.prototype.unique = function (e, t, n) {
        o("function" != typeof e, "Chance: The first argument must be a function.");
        var i = function (e, t) {
          return -1 !== e.indexOf(t)
        };
        n && (i = n.comparator || i);
        for (var a, r = [], s = 0, l = 50 * t, c = v.call(arguments, 2); r.length < t;) {
          var u = JSON.parse(JSON.stringify(c));
          if (a = e.apply(this, u), i(r, a) || (r.push(a), s = 0), ++s > l) throw new RangeError("Chance: num is likely too large for sample set")
        }
        return r
      }, a.prototype.n = function (e, t) {
        o("function" != typeof e, "Chance: The first argument must be a function."), "undefined" == typeof t && (t = 1);
        var n = t, i = [], a = v.call(arguments, 2);
        for (n = Math.max(0, n), null; n--; null) i.push(e.apply(this, a));
        return i
      }, a.prototype.pad = function (e, t, n) {
        return n = n || "0", e += "", e.length >= t ? e : new Array(t - e.length + 1).join(n) + e
      }, a.prototype.pick = function (e, t) {
        if (0 === e.length) throw new RangeError("Chance: Cannot pick() from an empty array");
        return t && 1 !== t ? this.shuffle(e).slice(0, t) : e[this.natural({max: e.length - 1})]
      }, a.prototype.pickone = function (e) {
        if (0 === e.length) throw new RangeError("Chance: Cannot pickone() from an empty array");
        return e[this.natural({max: e.length - 1})]
      }, a.prototype.pickset = function (e, t) {
        if (0 === t) return [];
        if (0 === e.length) throw new RangeError("Chance: Cannot pickset() from an empty array");
        if (0 > t) throw new RangeError("Chance: count must be positive number");
        return t && 1 !== t ? this.shuffle(e).slice(0, t) : [this.pickone(e)]
      }, a.prototype.shuffle = function (e) {
        for (var t = e.slice(0), n = [], i = 0, a = Number(t.length), r = 0; a > r; r++) i = this.natural({max: t.length - 1}), n[r] = t[i], t.splice(i, 1);
        return n
      }, a.prototype.weighted = function (e, t, n) {
        if (e.length !== t.length) throw new RangeError("Chance: length of array and weights must match");
        for (var i, a = 0, r = 0; r < t.length; ++r) i = t[r], i > 0 && (a += i);
        if (0 === a) throw new RangeError("Chance: no valid entries in array weights");
        var o, s = this.random() * a, l = 0, c = -1;
        for (r = 0; r < t.length; ++r) {
          if (i = t[r], l += i, i > 0) {
            if (l >= s) {
              o = r;
              break
            }
            c = r
          }
          r === t.length - 1 && (o = c)
        }
        var u = e[o];
        return n = "undefined" == typeof n ? !1 : n, n && (e.splice(o, 1), t.splice(o, 1)), u
      }, a.prototype.paragraph = function (e) {
        e = r(e);
        var t = e.sentences || this.natural({min: 3, max: 7}), n = this.n(this.sentence, t);
        return n.join(" ")
      }, a.prototype.sentence = function (e) {
        e = r(e);
        var t, n = e.words || this.natural({min: 12, max: 18}), i = e.punctuation, a = this.n(this.word, n);
        return t = a.join(" "), t = this.capitalize(t), i === !1 || /^[\.\?;!:]$/.test(i) || (i = "."), i && (t += i), t
      }, a.prototype.syllable = function (e) {
        e = r(e);
        for (var t, n = e.length || this.natural({
          min: 2,
          max: 3
        }), i = "bcdfghjklmnprstvwz", a = "aeiou", o = i + a, s = "", l = 0; n > l; l++) t = 0 === l ? this.character({pool: o}) : -1 === i.indexOf(t) ? this.character({pool: i}) : this.character({pool: a}), s += t;
        return e.capitalize && (s = this.capitalize(s)), s
      }, a.prototype.word = function (e) {
        e = r(e), o(e.syllables && e.length, "Chance: Cannot specify both syllables AND length.");
        var t = e.syllables || this.natural({min: 1, max: 3}), n = "";
        if (e.length) {
          do n += this.syllable(); while (n.length < e.length);
          n = n.substring(0, e.length)
        } else for (var i = 0; t > i; i++) n += this.syllable();
        return e.capitalize && (n = this.capitalize(n)), n
      }, a.prototype.age = function (e) {
        e = r(e);
        var t;
        switch (e.type) {
          case"child":
            t = {min: 1, max: 12};
            break;
          case"teen":
            t = {min: 13, max: 19};
            break;
          case"adult":
            t = {min: 18, max: 65};
            break;
          case"senior":
            t = {min: 65, max: 100};
            break;
          case"all":
            t = {min: 1, max: 100};
            break;
          default:
            t = {min: 18, max: 65}
        }
        return this.natural(t)
      }, a.prototype.birthday = function (e) {
        return e = r(e, {year: (new Date).getFullYear() - this.age(e)}), this.date(e)
      }, a.prototype.cpf = function () {
        var e = this.n(this.natural, 9, {max: 9}),
          t = 2 * e[8] + 3 * e[7] + 4 * e[6] + 5 * e[5] + 6 * e[4] + 7 * e[3] + 8 * e[2] + 9 * e[1] + 10 * e[0];
        t = 11 - t % 11, t >= 10 && (t = 0);
        var n = 2 * t + 3 * e[8] + 4 * e[7] + 5 * e[6] + 6 * e[5] + 7 * e[4] + 8 * e[3] + 9 * e[2] + 10 * e[1] + 11 * e[0];
        return n = 11 - n % 11, n >= 10 && (n = 0), "" + e[0] + e[1] + e[2] + "." + e[3] + e[4] + e[5] + "." + e[6] + e[7] + e[8] + "-" + t + n
      }, a.prototype.cnpj = function () {
        var e = this.n(this.natural, 12, {max: 12}),
          t = 2 * e[11] + 3 * e[10] + 4 * e[9] + 5 * e[8] + 6 * e[7] + 7 * e[6] + 8 * e[5] + 9 * e[4] + 2 * e[3] + 3 * e[2] + 4 * e[1] + 5 * e[0];
        t = 11 - t % 11, 2 > t && (t = 0);
        var n = 2 * t + 3 * e[11] + 4 * e[10] + 5 * e[9] + 6 * e[8] + 7 * e[7] + 8 * e[6] + 9 * e[5] + 2 * e[4] + 3 * e[3] + 4 * e[2] + 5 * e[1] + 6 * e[0];
        return n = 11 - n % 11, 2 > n && (n = 0), "" + e[0] + e[1] + "." + e[2] + e[3] + e[4] + "." + e[5] + e[6] + e[7] + "/" + e[8] + e[9] + e[10] + e[11] + "-" + t + n
      }, a.prototype.first = function (e) {
        return e = r(e, {
          gender: this.gender(),
          nationality: "en"
        }), this.pick(this.get("firstNames")[e.gender.toLowerCase()][e.nationality.toLowerCase()])
      }, a.prototype.gender = function () {
        return this.pick(["Male", "Female"])
      }, a.prototype.last = function (e) {
        return e = r(e, {nationality: "en"}), this.pick(this.get("lastNames")[e.nationality.toLowerCase()])
      }, a.prototype.israelId = function () {
        for (var e = this.string({pool: "0123456789", length: 8}), t = 0, n = 0; n < e.length; n++) {
          var i = e[n] * (n / 2 === parseInt(n / 2) ? 1 : 2);
          i = this.pad(i, 2).toString(), i = parseInt(i[0]) + parseInt(i[1]), t += i
        }
        return e += (10 - parseInt(t.toString().slice(-1))).toString().slice(-1)
      }, a.prototype.mrz = function (e) {
        var t = function (e) {
          var t = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""), n = [7, 3, 1], i = 0;
          return "string" != typeof e && (e = e.toString()), e.split("").forEach(function (e, a) {
            var r = t.indexOf(e);
            e = -1 !== r ? 0 === r ? 0 : r + 9 : parseInt(e, 10), e *= n[a % n.length], i += e
          }), i % 10
        }, n = function (e) {
          var n = function (e) {
              return new Array(e + 1).join("<")
            },
            i = ["P<", e.issuer, e.last.toUpperCase(), "<<", e.first.toUpperCase(), n(39 - (e.last.length + e.first.length + 2)), e.passportNumber, t(e.passportNumber), e.nationality, e.dob, t(e.dob), e.gender, e.expiry, t(e.expiry), n(14), t(n(14))].join("");
          return i + t(i.substr(44, 10) + i.substr(57, 7) + i.substr(65, 7))
        }, i = this;
        return e = r(e, {
          first: this.first(),
          last: this.last(),
          passportNumber: this.integer({min: 1e8, max: 999999999}),
          dob: function () {
            var e = i.birthday({type: "adult"});
            return [e.getFullYear().toString().substr(2), i.pad(e.getMonth() + 1, 2), i.pad(e.getDate(), 2)].join("")
          }(),
          expiry: function () {
            var e = new Date;
            return [(e.getFullYear() + 5).toString().substr(2), i.pad(e.getMonth() + 1, 2), i.pad(e.getDate(), 2)].join("")
          }(),
          gender: "Female" === this.gender() ? "F" : "M",
          issuer: "GBR",
          nationality: "GBR"
        }), n(e)
      }, a.prototype.name = function (e) {
        e = r(e);
        var t, n = this.first(e), i = this.last(e);
        return t = e.middle ? n + " " + this.first(e) + " " + i : e.middle_initial ? n + " " + this.character({
          alpha: !0,
          casing: "upper"
        }) + ". " + i : n + " " + i, e.prefix && (t = this.prefix(e) + " " + t), e.suffix && (t = t + " " + this.suffix(e)), t
      }, a.prototype.name_prefixes = function (e) {
        e = e || "all", e = e.toLowerCase();
        var t = [{name: "Doctor", abbreviation: "Dr."}];
        return "male" !== e && "all" !== e || t.push({
          name: "Mister",
          abbreviation: "Mr."
        }), "female" !== e && "all" !== e || (t.push({name: "Miss", abbreviation: "Miss"}), t.push({
          name: "Misses",
          abbreviation: "Mrs."
        })), t
      }, a.prototype.prefix = function (e) {
        return this.name_prefix(e)
      }, a.prototype.name_prefix = function (e) {
        return e = r(e, {gender: "all"}), e.full ? this.pick(this.name_prefixes(e.gender)).name : this.pick(this.name_prefixes(e.gender)).abbreviation
      }, a.prototype.ssn = function (e) {
        e = r(e, {ssnFour: !1, dashes: !0});
        var t, n = "1234567890", i = e.dashes ? "-" : "";
        return t = e.ssnFour ? this.string({pool: n, length: 4}) : this.string({
          pool: n,
          length: 3
        }) + i + this.string({pool: n, length: 2}) + i + this.string({pool: n, length: 4})
      }, a.prototype.name_suffixes = function () {
        var e = [{name: "Doctor of Osteopathic Medicine", abbreviation: "D.O."}, {
          name: "Doctor of Philosophy",
          abbreviation: "Ph.D."
        }, {name: "Esquire", abbreviation: "Esq."}, {name: "Junior", abbreviation: "Jr."}, {
          name: "Juris Doctor",
          abbreviation: "J.D."
        }, {name: "Master of Arts", abbreviation: "M.A."}, {
          name: "Master of Business Administration",
          abbreviation: "M.B.A."
        }, {name: "Master of Science", abbreviation: "M.S."}, {
          name: "Medical Doctor",
          abbreviation: "M.D."
        }, {name: "Senior", abbreviation: "Sr."}, {name: "The Third", abbreviation: "III"}, {
          name: "The Fourth",
          abbreviation: "IV"
        }, {name: "Bachelor of Engineering", abbreviation: "B.E"}, {
          name: "Bachelor of Technology",
          abbreviation: "B.TECH"
        }];
        return e
      }, a.prototype.suffix = function (e) {
        return this.name_suffix(e)
      }, a.prototype.name_suffix = function (e) {
        return e = r(e), e.full ? this.pick(this.name_suffixes()).name : this.pick(this.name_suffixes()).abbreviation
      }, a.prototype.nationalities = function () {
        return this.get("nationalities")
      }, a.prototype.nationality = function () {
        var e = this.pick(this.nationalities());
        return e.name
      }, a.prototype.android_id = function () {
        return "APA91" + this.string({
          pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
          length: 178
        })
      }, a.prototype.apple_token = function () {
        return this.string({pool: "abcdef1234567890", length: 64})
      }, a.prototype.wp8_anid2 = function () {
        return b(this.hash({length: 32}))
      }, a.prototype.wp7_anid = function () {
        return "A=" + this.guid().replace(/-/g, "").toUpperCase() + "&E=" + this.hash({length: 3}) + "&W=" + this.integer({
          min: 0,
          max: 9
        })
      }, a.prototype.bb_pin = function () {
        return this.hash({length: 8})
      }, a.prototype.avatar = function (e) {
        var t = null, n = "//www.gravatar.com/avatar/", i = {http: "http", https: "https"},
          a = {bmp: "bmp", gif: "gif", jpg: "jpg", png: "png"}, o = {
            404: "404",
            mm: "mm",
            identicon: "identicon",
            monsterid: "monsterid",
            wavatar: "wavatar",
            retro: "retro",
            blank: "blank"
          }, s = {g: "g", pg: "pg", r: "r", x: "x"},
          l = {protocol: null, email: null, fileExtension: null, size: null, fallback: null, rating: null};
        if (e) if ("string" == typeof e) l.email = e, e = {}; else {
          if ("object" != typeof e) return null;
          if ("Array" === e.constructor) return null
        } else l.email = this.email(), e = {};
        return l = r(e, l), l.email || (l.email = this.email()), l.protocol = i[l.protocol] ? l.protocol + ":" : "", l.size = parseInt(l.size, 0) ? l.size : "", l.rating = s[l.rating] ? l.rating : "", l.fallback = o[l.fallback] ? l.fallback : "", l.fileExtension = a[l.fileExtension] ? l.fileExtension : "", t = l.protocol + n + this.bimd5.md5(l.email) + (l.fileExtension ? "." + l.fileExtension : "") + (l.size || l.rating || l.fallback ? "?" : "") + (l.size ? "&s=" + l.size.toString() : "") + (l.rating ? "&r=" + l.rating : "") + (l.fallback ? "&d=" + l.fallback : "")
      }, a.prototype.color = function (e) {
        function t(e, t) {
          return [e, e, e].join(t || "")
        }

        function n(e) {
          var n = e ? "rgba" : "rgb", i = e ? "," + this.floating({min: 0, max: 1}) : "",
            a = o ? t(this.natural({max: 255}), ",") : this.natural({max: 255}) + "," + this.natural({max: 255}) + "," + this.natural({max: 255});
          return n + "(" + a + i + ")"
        }

        function i(e, n, i) {
          var a = i ? "#" : "", r = o ? t(this.hash({length: e})) : this.hash({length: n});
          return a + r
        }

        e = r(e, {format: this.pick(["hex", "shorthex", "rgb", "rgba", "0x", "name"]), grayscale: !1, casing: "lower"});
        var a, o = e.grayscale;
        if ("hex" === e.format) a = i.call(this, 2, 6, !0); else if ("shorthex" === e.format) a = i.call(this, 1, 3, !0); else if ("rgb" === e.format) a = n.call(this, !1); else if ("rgba" === e.format) a = n.call(this, !0); else {
          if ("0x" !== e.format) {
            if ("name" === e.format) return this.pick(this.get("colorNames"));
            throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".')
          }
          a = "0x" + i.call(this, 2, 6)
        }
        return "upper" === e.casing && (a = a.toUpperCase()), a
      }, a.prototype.domain = function (e) {
        return e = r(e), this.word() + "." + (e.tld || this.tld())
      }, a.prototype.email = function (e) {
        return e = r(e), this.word({length: e.length}) + "@" + (e.domain || this.domain())
      }, a.prototype.fbid = function () {
        return parseInt("10000" + this.natural({max: 1e11}), 10)
      }, a.prototype.google_analytics = function () {
        var e = this.pad(this.natural({max: 999999}), 6), t = this.pad(this.natural({max: 99}), 2);
        return "UA-" + e + "-" + t
      }, a.prototype.hashtag = function () {
        return "#" + this.word()
      }, a.prototype.ip = function () {
        return this.natural({
          min: 1,
          max: 254
        }) + "." + this.natural({max: 255}) + "." + this.natural({max: 255}) + "." + this.natural({min: 1, max: 254})
      }, a.prototype.ipv6 = function () {
        var e = this.n(this.hash, 8, {length: 4});
        return e.join(":")
      }, a.prototype.klout = function () {
        return this.natural({min: 1, max: 99})
      }, a.prototype.semver = function (e) {
        e = r(e, {include_prerelease: !0});
        var t = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
        e.range && (t = e.range);
        var n = "";
        return e.include_prerelease && (n = this.weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1])), t + this.rpg("3d10").join(".") + n
      }, a.prototype.tlds = function () {
        return ["com", "org", "edu", "gov", "co.uk", "net", "io", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"]
      }, a.prototype.tld = function () {
        return this.pick(this.tlds())
      }, a.prototype.twitter = function () {
        return "@" + this.word()
      }, a.prototype.url = function (e) {
        e = r(e, {protocol: "http", domain: this.domain(e), domain_prefix: "", path: this.word(), extensions: []});
        var t = e.extensions.length > 0 ? "." + this.pick(e.extensions) : "",
          n = e.domain_prefix ? e.domain_prefix + "." + e.domain : e.domain;
        return e.protocol + "://" + n + "/" + e.path + t
      }, a.prototype.address = function (e) {
        return e = r(e), this.natural({min: 5, max: 2e3}) + " " + this.street(e)
      }, a.prototype.altitude = function (e) {
        return e = r(e, {fixed: 5, min: 0, max: 8848}), this.floating({min: e.min, max: e.max, fixed: e.fixed})
      }, a.prototype.areacode = function (e) {
        e = r(e, {parens: !0});
        var t = this.natural({min: 2, max: 9}).toString() + this.natural({
          min: 0,
          max: 8
        }).toString() + this.natural({min: 0, max: 9}).toString();
        return e.parens ? "(" + t + ")" : t
      }, a.prototype.city = function () {
        return this.capitalize(this.word({syllables: 3}))
      }, a.prototype.coordinates = function (e) {
        return this.latitude(e) + ", " + this.longitude(e)
      }, a.prototype.countries = function () {
        return this.get("countries")
      }, a.prototype.country = function (e) {
        e = r(e);
        var t = this.pick(this.countries());
        return e.full ? t.name : t.abbreviation
      }, a.prototype.depth = function (e) {
        return e = r(e, {fixed: 5, min: -10994, max: 0}), this.floating({min: e.min, max: e.max, fixed: e.fixed})
      }, a.prototype.geohash = function (e) {
        return e = r(e, {length: 7}), this.string({length: e.length, pool: "0123456789bcdefghjkmnpqrstuvwxyz"})
      }, a.prototype.geojson = function (e) {
        return this.latitude(e) + ", " + this.longitude(e) + ", " + this.altitude(e)
      }, a.prototype.latitude = function (e) {
        return e = r(e, {fixed: 5, min: -90, max: 90}), this.floating({min: e.min, max: e.max, fixed: e.fixed})
      }, a.prototype.longitude = function (e) {
        return e = r(e, {fixed: 5, min: -180, max: 180}), this.floating({min: e.min, max: e.max, fixed: e.fixed})
      }, a.prototype.phone = function (e) {
        var t, n = this, i = function (e) {
          var t = [];
          return e.sections.forEach(function (e) {
            t.push(n.string({pool: "0123456789", length: e}))
          }), e.area + t.join(" ")
        };
        e = r(e, {formatted: !0, country: "us", mobile: !1}), e.formatted || (e.parens = !1);
        var a;
        switch (e.country) {
          case"fr":
            e.mobile ? (t = this.pick(["06", "07"]) + n.string({
              pool: "0123456789",
              length: 8
            }), a = e.formatted ? t.match(/../g).join(" ") : t) : (t = this.pick(["01" + this.pick(["30", "34", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "53", "55", "56", "58", "60", "64", "69", "70", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83"]) + n.string({
              pool: "0123456789",
              length: 6
            }), "02" + this.pick(["14", "18", "22", "23", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "57", "61", "62", "69", "72", "76", "77", "78", "85", "90", "96", "97", "98", "99"]) + n.string({
              pool: "0123456789",
              length: 6
            }), "03" + this.pick(["10", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "39", "44", "45", "51", "52", "54", "55", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"]) + n.string({
              pool: "0123456789",
              length: 6
            }), "04" + this.pick(["11", "13", "15", "20", "22", "26", "27", "30", "32", "34", "37", "42", "43", "44", "50", "56", "57", "63", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88", "89", "90", "91", "92", "93", "94", "95", "97", "98"]) + n.string({
              pool: "0123456789",
              length: 6
            }), "05" + this.pick(["08", "16", "17", "19", "24", "31", "32", "33", "34", "35", "40", "45", "46", "47", "49", "53", "55", "56", "57", "58", "59", "61", "62", "63", "64", "65", "67", "79", "81", "82", "86", "87", "90", "94"]) + n.string({
              pool: "0123456789",
              length: 6
            }), "09" + n.string({pool: "0123456789", length: 8})]), a = e.formatted ? t.match(/../g).join(" ") : t);
            break;
          case"uk":
            e.mobile ? (t = this.pick([{
              area: "07" + this.pick(["4", "5", "7", "8", "9"]),
              sections: [2, 6]
            }, {
              area: "07624 ",
              sections: [6]
            }]), a = e.formatted ? i(t) : i(t).replace(" ", "")) : (t = this.pick([{
              area: "01" + this.character({pool: "234569"}) + "1 ",
              sections: [3, 4]
            }, {
              area: "020 " + this.character({pool: "378"}),
              sections: [3, 4]
            }, {area: "023 " + this.character({pool: "89"}), sections: [3, 4]}, {
              area: "024 7",
              sections: [3, 4]
            }, {
              area: "028 " + this.pick(["25", "28", "37", "71", "82", "90", "92", "95"]),
              sections: [2, 4]
            }, {
              area: "012" + this.pick(["04", "08", "54", "76", "97", "98"]) + " ",
              sections: [5]
            }, {
              area: "013" + this.pick(["63", "64", "84", "86"]) + " ",
              sections: [5]
            }, {
              area: "014" + this.pick(["04", "20", "60", "61", "80", "88"]) + " ",
              sections: [5]
            }, {
              area: "015" + this.pick(["24", "27", "62", "66"]) + " ",
              sections: [5]
            }, {
              area: "016" + this.pick(["06", "29", "35", "47", "59", "95"]) + " ",
              sections: [5]
            }, {
              area: "017" + this.pick(["26", "44", "50", "68"]) + " ",
              sections: [5]
            }, {area: "018" + this.pick(["27", "37", "84", "97"]) + " ", sections: [5]}, {
              area: "019" + this.pick(["00", "05", "35", "46", "49", "63", "95"]) + " ",
              sections: [5]
            }]), a = e.formatted ? i(t) : i(t).replace(" ", "", "g"));
            break;
          case"us":
            var o = this.areacode(e).toString(), s = this.natural({min: 2, max: 9}).toString() + this.natural({
                min: 0,
                max: 9
              }).toString() + this.natural({min: 0, max: 9}).toString(),
              l = this.natural({min: 1e3, max: 9999}).toString();
            a = e.formatted ? o + " " + s + "-" + l : o + s + l
        }
        return a
      }, a.prototype.postal = function () {
        var e = this.character({pool: "XVTSRPNKLMHJGECBA"}),
          t = e + this.natural({max: 9}) + this.character({alpha: !0, casing: "upper"}),
          n = this.natural({max: 9}) + this.character({alpha: !0, casing: "upper"}) + this.natural({max: 9});
        return t + " " + n
      }, a.prototype.provinces = function (e) {
        return e = r(e, {country: "ca"}), this.get("provinces")[e.country.toLowerCase()]
      }, a.prototype.province = function (e) {
        return e && e.full ? this.pick(this.provinces(e)).name : this.pick(this.provinces(e)).abbreviation
      }, a.prototype.state = function (e) {
        return e && e.full ? this.pick(this.states(e)).name : this.pick(this.states(e)).abbreviation
      }, a.prototype.states = function (e) {
        e = r(e, {country: "us", us_states_and_dc: !0});
        var t;
        switch (e.country.toLowerCase()) {
          case"us":
            var n = this.get("us_states_and_dc"), i = this.get("territories"), a = this.get("armed_forces");
            t = [], e.us_states_and_dc && (t = t.concat(n)), e.territories && (t = t.concat(i)), e.armed_forces && (t = t.concat(a));
            break;
          case"it":
            t = this.get("country_regions")[e.country.toLowerCase()]
        }
        return t
      }, a.prototype.street = function (e) {
        e = r(e, {country: "us", syllables: 2});
        var t;
        switch (e.country.toLowerCase()) {
          case"us":
            t = this.word({syllables: e.syllables}), t = this.capitalize(t), t += " ", t += e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name;
            break;
          case"it":
            t = this.word({syllables: e.syllables}), t = this.capitalize(t), t = (e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name) + " " + t
        }
        return t
      }, a.prototype.street_suffix = function (e) {
        return e = r(e, {country: "us"}), this.pick(this.street_suffixes(e))
      }, a.prototype.street_suffixes = function (e) {
        return e = r(e, {country: "us"}), this.get("street_suffixes")[e.country.toLowerCase()]
      }, a.prototype.zip = function (e) {
        var t = this.n(this.natural, 5, {max: 9});
        return e && e.plusfour === !0 && (t.push("-"), t = t.concat(this.n(this.natural, 4, {max: 9}))), t.join("")
      }, a.prototype.ampm = function () {
        return this.bool() ? "am" : "pm"
      }, a.prototype.date = function (e) {
        var t, n;
        if (e && (e.min || e.max)) {
          e = r(e, {american: !0, string: !1});
          var i = "undefined" != typeof e.min ? e.min.getTime() : 1,
            a = "undefined" != typeof e.max ? e.max.getTime() : 864e13;
          n = new Date(this.natural({min: i, max: a}))
        } else {
          var o = this.month({raw: !0}), s = o.days;
          e && e.month && (s = this.get("months")[(e.month % 12 + 12) % 12].days), e = r(e, {
            year: parseInt(this.year(), 10),
            month: o.numeric - 1,
            day: this.natural({min: 1, max: s}),
            hour: this.hour(),
            minute: this.minute(),
            second: this.second(),
            millisecond: this.millisecond(),
            american: !0,
            string: !1
          }), n = new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
        }
        return t = e.american ? n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear() : n.getDate() + "/" + (n.getMonth() + 1) + "/" + n.getFullYear(), e.string ? t : n
      }, a.prototype.hammertime = function (e) {
        return this.date(e).getTime()
      }, a.prototype.hour = function (e) {
        return e = r(e, {
          min: e && e.twentyfour ? 0 : 1,
          max: e && e.twentyfour ? 23 : 12
        }), o(e.min < 0, "Chance: Min cannot be less than 0."), o(e.twentyfour && e.max > 23, "Chance: Max cannot be greater than 23 for twentyfour option."), o(!e.twentyfour && e.max > 12, "Chance: Max cannot be greater than 12."), o(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({
          min: e.min,
          max: e.max
        })
      }, a.prototype.millisecond = function () {
        return this.natural({max: 999})
      }, a.prototype.minute = a.prototype.second = function (e) {
        return e = r(e, {
          min: 0,
          max: 59
        }), o(e.min < 0, "Chance: Min cannot be less than 0."), o(e.max > 59, "Chance: Max cannot be greater than 59."), o(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({
          min: e.min,
          max: e.max
        })
      }, a.prototype.month = function (e) {
        e = r(e, {
          min: 1,
          max: 12
        }), o(e.min < 1, "Chance: Min cannot be less than 1."), o(e.max > 12, "Chance: Max cannot be greater than 12."), o(e.min > e.max, "Chance: Min cannot be greater than Max.");
        var t = this.pick(this.months().slice(e.min - 1, e.max));
        return e.raw ? t : t.name
      }, a.prototype.months = function () {
        return this.get("months")
      }, a.prototype.second = function () {
        return this.natural({max: 59})
      }, a.prototype.timestamp = function () {
        return this.natural({min: 1, max: parseInt((new Date).getTime() / 1e3, 10)})
      }, a.prototype.weekday = function (e) {
        e = r(e, {weekday_only: !1});
        var t = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        return e.weekday_only || (t.push("Saturday"), t.push("Sunday")), this.pickone(t)
      }, a.prototype.year = function (e) {
        return e = r(e, {min: (new Date).getFullYear()}), e.max = "undefined" != typeof e.max ? e.max : e.min + 100, this.natural(e).toString()
      }, a.prototype.cc = function (e) {
        e = r(e);
        var t, n, i;
        return t = e.type ? this.cc_type({
          name: e.type,
          raw: !0
        }) : this.cc_type({raw: !0}), n = t.prefix.split(""), i = t.length - t.prefix.length - 1, n = n.concat(this.n(this.integer, i, {
          min: 0,
          max: 9
        })), n.push(this.luhn_calculate(n.join(""))), n.join("")
      }, a.prototype.cc_types = function () {
        return this.get("cc_types")
      }, a.prototype.cc_type = function (e) {
        e = r(e);
        var t = this.cc_types(), n = null;
        if (e.name) {
          for (var i = 0; i < t.length; i++) if (t[i].name === e.name || t[i].short_name === e.name) {
            n = t[i];
            break
          }
          if (null === n) throw new RangeError("Credit card type '" + e.name + "'' is not supported")
        } else n = this.pick(t);
        return e.raw ? n : n.name
      }, a.prototype.currency_types = function () {
        return this.get("currency_types")
      }, a.prototype.currency = function () {
        return this.pick(this.currency_types())
      }, a.prototype.currency_pair = function (e) {
        var t = this.unique(this.currency, 2, {
          comparator: function (e, t) {
            return e.reduce(function (e, n) {
              return e || n.code === t.code
            }, !1)
          }
        });
        return e ? t[0].code + "/" + t[1].code : t
      }, a.prototype.dollar = function (e) {
        e = r(e, {max: 1e4, min: 0});
        var t = this.floating({min: e.min, max: e.max, fixed: 2}).toString(), n = t.split(".")[1];
        return void 0 === n ? t += ".00" : n.length < 2 && (t += "0"), 0 > t ? "-$" + t.replace("-", "") : "$" + t
      },a.prototype.euro = function (e) {
        return Number(this.dollar(e).replace("$", "")).toLocaleString() + "€"
      },a.prototype.exp = function (e) {
        e = r(e);
        var t = {};
        return t.year = this.exp_year(), t.year === (new Date).getFullYear().toString() ? t.month = this.exp_month({future: !0}) : t.month = this.exp_month(), e.raw ? t : t.month + "/" + t.year
      },a.prototype.exp_month = function (e) {
        e = r(e);
        var t, n, i = (new Date).getMonth() + 1;
        if (e.future && 12 !== i) {
          do t = this.month({raw: !0}).numeric, n = parseInt(t, 10); while (i >= n)
        } else t = this.month({raw: !0}).numeric;
        return t
      },a.prototype.exp_year = function () {
        var e = (new Date).getMonth() + 1, t = (new Date).getFullYear();
        return this.year({min: 12 === e ? t + 1 : t, max: t + 10})
      },a.prototype.vat = function (e) {
        switch (e = r(e, {country: "it"}), e.country.toLowerCase()) {
          case"it":
            return this.it_vat()
        }
      },a.prototype.it_vat = function () {
        var e = this.natural({min: 1, max: 18e5});
        return e = this.pad(e, 7) + this.pad(this.pick(this.provinces({country: "it"})).code, 3), e + this.luhn_calculate(e)
      },a.prototype.cf = function (e) {
        e = e || {};
        var t = e.gender ? e.gender : this.gender(), n = e.first ? e.first : this.first({gender: t, nationality: "it"}),
          i = e.last ? e.last : this.last({nationality: "it"}), a = e.birthday ? e.birthday : this.birthday(),
          r = e.city ? e.city : this.pickone(["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "Z"]) + this.pad(this.natural({max: 999}), 3),
          o = [], s = function (e, t) {
            var n, i = [];
            return e.length < 3 ? i = e.split("").concat("XXX".split("")).splice(0, 3) : (n = e.toUpperCase().split("").map(function (e) {
              return -1 !== "BCDFGHJKLMNPRSTVWZ".indexOf(e) ? e : void 0
            }).join(""), n.length > 3 && (n = t ? n.substr(0, 3) : n[0] + n.substr(2, 2)), n.length < 3 && (i = n, n = e.toUpperCase().split("").map(function (e) {
              return -1 !== "AEIOU".indexOf(e) ? e : void 0
            }).join("").substr(0, 3 - i.length)), i += n), i
          }, l = function (e, t, n) {
            var i = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
            return e.getFullYear().toString().substr(2) + i[e.getMonth()] + n.pad(e.getDate() + ("female" === t.toLowerCase() ? 40 : 0), 2)
          }, c = function (e) {
            for (var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "BAKPLCQDREVOSFTGUHMINJWZYX", r = 0, o = 0; 15 > o; o++) r += o % 2 !== 0 ? i.indexOf(n[t.indexOf(e[o])]) : a.indexOf(n[t.indexOf(e[o])]);
            return i[r % 26]
          };
        return o = o.concat(s(i, !0), s(n), l(a, t, this), r.toUpperCase().split("")).join(""), o += c(o.toUpperCase(), this), o.toUpperCase()
      },a.prototype.pl_pesel = function () {
        for (var e = this.natural({
          min: 1,
          max: 9999999999
        }), t = this.pad(e, 10).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
        var i = (1 * t[0] + 3 * t[1] + 7 * t[2] + 9 * t[3] + 1 * t[4] + 3 * t[5] + 7 * t[6] + 9 * t[7] + 1 * t[8] + 3 * t[9]) % 10;
        return 0 !== i && (i = 10 - i), t.join("") + i
      },a.prototype.pl_nip = function () {
        for (var e = this.natural({
          min: 1,
          max: 999999999
        }), t = this.pad(e, 9).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
        var i = (6 * t[0] + 5 * t[1] + 7 * t[2] + 2 * t[3] + 3 * t[4] + 4 * t[5] + 5 * t[6] + 6 * t[7] + 7 * t[8]) % 11;
        return 10 === i ? this.pl_nip() : t.join("") + i
      },a.prototype.pl_regon = function () {
        for (var e = this.natural({
          min: 1,
          max: 99999999
        }), t = this.pad(e, 8).split(""), n = 0; n < t.length; n++) t[n] = parseInt(t[n]);
        var i = (8 * t[0] + 9 * t[1] + 2 * t[2] + 3 * t[3] + 4 * t[4] + 5 * t[5] + 6 * t[6] + 7 * t[7]) % 11;
        return 10 === i && (i = 0), t.join("") + i
      },a.prototype.d4 = s({min: 1, max: 4}),a.prototype.d6 = s({min: 1, max: 6}),a.prototype.d8 = s({
        min: 1,
        max: 8
      }),a.prototype.d10 = s({min: 1, max: 10}),a.prototype.d12 = s({min: 1, max: 12}),a.prototype.d20 = s({
        min: 1,
        max: 20
      }),a.prototype.d30 = s({min: 1, max: 30}),a.prototype.d100 = s({
        min: 1,
        max: 100
      }),a.prototype.rpg = function (e, t) {
        if (t = r(t), e) {
          var n = e.toLowerCase().split("d"), i = [];
          if (2 !== n.length || !parseInt(n[0], 10) || !parseInt(n[1], 10)) throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
          for (var a = n[0]; a > 0; a--) i[a - 1] = this.natural({min: 1, max: n[1]});
          return "undefined" != typeof t.sum && t.sum ? i.reduce(function (e, t) {
            return e + t
          }) : i
        }
        throw new RangeError("A type of die roll must be included")
      },a.prototype.guid = function (e) {
        e = r(e, {version: 5});
        var t = "abcdef1234567890", n = "ab89", i = this.string({pool: t, length: 8}) + "-" + this.string({
          pool: t,
          length: 4
        }) + "-" + e.version + this.string({pool: t, length: 3}) + "-" + this.string({
          pool: n,
          length: 1
        }) + this.string({pool: t, length: 3}) + "-" + this.string({pool: t, length: 12});
        return i
      },a.prototype.hash = function (e) {
        e = r(e, {length: 40, casing: "lower"});
        var t = "upper" === e.casing ? g.toUpperCase() : g;
        return this.string({pool: t, length: e.length})
      },a.prototype.luhn_check = function (e) {
        var t = e.toString(), n = +t.substring(t.length - 1);
        return n === this.luhn_calculate(+t.substring(0, t.length - 1))
      },a.prototype.luhn_calculate = function (e) {
        for (var t, n = e.toString().split("").reverse(), i = 0, a = 0, r = n.length; r > a; ++a) t = +n[a], a % 2 === 0 && (t *= 2, t > 9 && (t -= 9)), i += t;
        return 9 * i % 10
      },a.prototype.md5 = function (e) {
        var t = {str: "", key: null, raw: !1};
        if (e) if ("string" == typeof e) t.str = e, e = {}; else {
          if ("object" != typeof e) return null;
          if ("Array" === e.constructor) return null
        } else t.str = this.string(), e = {};
        if (t = r(e, t), !t.str) throw new Error("A parameter is required to return an md5 hash.");
        return this.bimd5.md5(t.str, t.key, t.raw)
      },a.prototype.file = function (e) {
        var t, n, i = e || {}, a = "fileExtension", r = Object.keys(this.get("fileExtension"));
        if (t = this.word({length: i.length}), i.extention) return n = i.extention, t + "." + n;
        if (i.extentions) {
          if (Array.isArray(i.extentions)) return n = this.pickone(i.extentions), t + "." + n;
          if (i.extentions.constructor === Object) {
            var o = i.extentions, s = Object.keys(o);
            return n = this.pickone(o[this.pickone(s)]), t + "." + n
          }
          throw new Error("Expect collection of type Array or Object to be passed as an argument ")
        }
        if (i.fileType) {
          var l = i.fileType;
          if (-1 !== r.indexOf(l)) return n = this.pickone(this.get(a)[l]), t + "." + n;
          throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ")
        }
        return n = this.pickone(this.get(a)[this.pickone(r)]), t + "." + n
      };
      var y = {
        firstNames: {
          male: {
            en: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon"],
            it: ["Adolfo", "Alberto", "Aldo", "Alessandro", "Alessio", "Alfredo", "Alvaro", "Andrea", "Angelo", "Angiolo", "Antonino", "Antonio", "Attilio", "Benito", "Bernardo", "Bruno", "Carlo", "Cesare", "Christian", "Claudio", "Corrado", "Cosimo", "Cristian", "Cristiano", "Daniele", "Dario", "David", "Davide", "Diego", "Dino", "Domenico", "Duccio", "Edoardo", "Elia", "Elio", "Emanuele", "Emiliano", "Emilio", "Enrico", "Enzo", "Ettore", "Fabio", "Fabrizio", "Federico", "Ferdinando", "Fernando", "Filippo", "Francesco", "Franco", "Gabriele", "Giacomo", "Giampaolo", "Giampiero", "Giancarlo", "Gianfranco", "Gianluca", "Gianmarco", "Gianni", "Gino", "Giorgio", "Giovanni", "Giuliano", "Giulio", "Giuseppe", "Graziano", "Gregorio", "Guido", "Iacopo", "Jacopo", "Lapo", "Leonardo", "Lorenzo", "Luca", "Luciano", "Luigi", "Manuel", "Marcello", "Marco", "Marino", "Mario", "Massimiliano", "Massimo", "Matteo", "Mattia", "Maurizio", "Mauro", "Michele", "Mirko", "Mohamed", "Nello", "Neri", "Niccolò", "Nicola", "Osvaldo", "Otello", "Paolo", "Pier Luigi", "Piero", "Pietro", "Raffaele", "Remo", "Renato", "Renzo", "Riccardo", "Roberto", "Rolando", "Romano", "Salvatore", "Samuele", "Sandro", "Sergio", "Silvano", "Simone", "Stefano", "Thomas", "Tommaso", "Ubaldo", "Ugo", "Umberto", "Valerio", "Valter", "Vasco", "Vincenzo", "Vittorio"]
          },
          female: {
            en: ["Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "John", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie"],
            it: ["Ada", "Adriana", "Alessandra", "Alessia", "Alice", "Angela", "Anna", "Anna Maria", "Annalisa", "Annita", "Annunziata", "Antonella", "Arianna", "Asia", "Assunta", "Aurora", "Barbara", "Beatrice", "Benedetta", "Bianca", "Bruna", "Camilla", "Carla", "Carlotta", "Carmela", "Carolina", "Caterina", "Catia", "Cecilia", "Chiara", "Cinzia", "Clara", "Claudia", "Costanza", "Cristina", "Daniela", "Debora", "Diletta", "Dina", "Donatella", "Elena", "Eleonora", "Elisa", "Elisabetta", "Emanuela", "Emma", "Eva", "Federica", "Fernanda", "Fiorella", "Fiorenza", "Flora", "Franca", "Francesca", "Gabriella", "Gaia", "Gemma", "Giada", "Gianna", "Gina", "Ginevra", "Giorgia", "Giovanna", "Giulia", "Giuliana", "Giuseppa", "Giuseppina", "Grazia", "Graziella", "Greta", "Ida", "Ilaria", "Ines", "Iolanda", "Irene", "Irma", "Isabella", "Jessica", "Laura", "Leda", "Letizia", "Licia", "Lidia", "Liliana", "Lina", "Linda", "Lisa", "Livia", "Loretta", "Luana", "Lucia", "Luciana", "Lucrezia", "Luisa", "Manuela", "Mara", "Marcella", "Margherita", "Maria", "Maria Cristina", "Maria Grazia", "Maria Luisa", "Maria Pia", "Maria Teresa", "Marina", "Marisa", "Marta", "Martina", "Marzia", "Matilde", "Melissa", "Michela", "Milena", "Mirella", "Monica", "Natalina", "Nella", "Nicoletta", "Noemi", "Olga", "Paola", "Patrizia", "Piera", "Pierina", "Raffaella", "Rebecca", "Renata", "Rina", "Rita", "Roberta", "Rosa", "Rosanna", "Rossana", "Rossella", "Sabrina", "Sandra", "Sara", "Serena", "Silvana", "Silvia", "Simona", "Simonetta", "Sofia", "Sonia", "Stefania", "Susanna", "Teresa", "Tina", "Tiziana", "Tosca", "Valentina", "Valeria", "Vanda", "Vanessa", "Vanna", "Vera", "Veronica", "Vilma", "Viola", "Virginia", "Vittoria"]
          }
        },
        lastNames: {
          en: ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis", "Harrison", "Gibson", "McDonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols", "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence", "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr", "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", "Williamson", "Johnston", "Banks", "Meyer", "Bishop", "McCoy", "Howell", "Alvarez", "Morrison", "Hansen", "Fernandez", "Garza", "Harvey", "Little", "Burton", "Stanley", "Nguyen", "George", "Jacobs", "Reid", "Kim", "Fuller", "Lynch", "Dean", "Gilbert", "Garrett", "Romero", "Welch", "Larson", "Frazier", "Burke", "Hanson", "Day", "Mendoza", "Moreno", "Bowman", "Medina", "Fowler", "Brewer", "Hoffman", "Carlson", "Silva", "Pearson", "Holland", "Douglas", "Fleming", "Jensen", "Vargas", "Byrd", "Davidson", "Hopkins", "May", "Terry", "Herrera", "Wade", "Soto", "Walters", "Curtis", "Neal", "Caldwell", "Lowe", "Jennings", "Barnett", "Graves", "Jimenez", "Horton", "Shelton", "Barrett", "Obrien", "Castro", "Sutton", "Gregory", "McKinney", "Lucas", "Miles", "Craig", "Rodriquez", "Chambers", "Holt", "Lambert", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez", "Bush", "Vaughn", "Parks", "Dawson", "Santiago", "Norris", "Hardy", "Love", "Steele", "Curry", "Powers", "Schultz", "Barker", "Guzman", "Page", "Munoz", "Ball", "Keller", "Chandler", "Weber", "Leonard", "Walsh", "Lyons", "Ramsey", "Wolfe", "Schneider", "Mullins", "Benson", "Sharp", "Bowen", "Daniel", "Barber", "Cummings", "Hines", "Baldwin", "Griffith", "Valdez", "Hubbard", "Salazar", "Reeves", "Warner", "Stevenson", "Burgess", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thornton", "Dennis", "McGee", "Farmer", "Delgado", "Aguilar", "Vega", "Glover", "Manning", "Cohen", "Harmon", "Rodgers", "Robbins", "Newton", "Todd", "Blair", "Higgins", "Ingram", "Reese", "Cannon", "Strickland", "Townsend", "Potter", "Goodwin", "Walton", "Rowe", "Hampton", "Ortega", "Patton", "Swanson", "Joseph", "Francis", "Goodman", "Maldonado", "Yates", "Becker", "Erickson", "Hodges", "Rios", "Conner", "Adkins", "Webster", "Norman", "Malone", "Hammond", "Flowers", "Cobb", "Moody", "Quinn", "Blake", "Maxwell", "Pope", "Floyd", "Osborne", "Paul", "McCarthy", "Guerrero", "Lindsey", "Estrada", "Sandoval", "Gibbs", "Tyler", "Gross", "Fitzgerald", "Stokes", "Doyle", "Sherman", "Saunders", "Wise", "Colon", "Gill", "Alvarado", "Greer", "Padilla", "Simon", "Waters", "Nunez", "Ballard", "Schwartz", "McBride", "Houston", "Christensen", "Klein", "Pratt", "Briggs", "Parsons", "McLaughlin", "Zimmerman", "French", "Buchanan", "Moran", "Copeland", "Roy", "Pittman", "Brady", "McCormick", "Holloway", "Brock", "Poole", "Frank", "Logan", "Owen", "Bass", "Marsh", "Drake", "Wong", "Jefferson", "Park", "Morton", "Abbott", "Sparks", "Patrick", "Norton", "Huff", "Clayton", "Massey", "Lloyd", "Figueroa", "Carson", "Bowers", "Roberson", "Barton", "Tran", "Lamb", "Harrington", "Casey", "Boone", "Cortez", "Clarke", "Mathis", "Singleton", "Wilkins", "Cain", "Bryan", "Underwood", "Hogan", "McKenzie", "Collier", "Luna", "Phelps", "McGuire", "Allison", "Bridges", "Wilkerson", "Nash", "Summers", "Atkins"],
          it: ["Acciai", "Aglietti", "Agostini", "Agresti", "Ahmed", "Aiazzi", "Albanese", "Alberti", "Alessi", "Alfani", "Alinari", "Alterini", "Amato", "Ammannati", "Ancillotti", "Andrei", "Andreini", "Andreoni", "Angeli", "Anichini", "Antonelli", "Antonini", "Arena", "Ariani", "Arnetoli", "Arrighi", "Baccani", "Baccetti", "Bacci", "Bacherini", "Badii", "Baggiani", "Baglioni", "Bagni", "Bagnoli", "Baldassini", "Baldi", "Baldini", "Ballerini", "Balli", "Ballini", "Balloni", "Bambi", "Banchi", "Bandinelli", "Bandini", "Bani", "Barbetti", "Barbieri", "Barchielli", "Bardazzi", "Bardelli", "Bardi", "Barducci", "Bargellini", "Bargiacchi", "Barni", "Baroncelli", "Baroncini", "Barone", "Baroni", "Baronti", "Bartalesi", "Bartoletti", "Bartoli", "Bartolini", "Bartoloni", "Bartolozzi", "Basagni", "Basile", "Bassi", "Batacchi", "Battaglia", "Battaglini", "Bausi", "Becagli", "Becattini", "Becchi", "Becucci", "Bellandi", "Bellesi", "Belli", "Bellini", "Bellucci", "Bencini", "Benedetti", "Benelli", "Beni", "Benini", "Bensi", "Benucci", "Benvenuti", "Berlincioni", "Bernacchioni", "Bernardi", "Bernardini", "Berni", "Bernini", "Bertelli", "Berti", "Bertini", "Bessi", "Betti", "Bettini", "Biagi", "Biagini", "Biagioni", "Biagiotti", "Biancalani", "Bianchi", "Bianchini", "Bianco", "Biffoli", "Bigazzi", "Bigi", "Biliotti", "Billi", "Binazzi", "Bindi", "Bini", "Biondi", "Bizzarri", "Bocci", "Bogani", "Bolognesi", "Bonaiuti", "Bonanni", "Bonciani", "Boncinelli", "Bondi", "Bonechi", "Bongini", "Boni", "Bonini", "Borchi", "Boretti", "Borghi", "Borghini", "Borgioli", "Borri", "Borselli", "Boschi", "Bottai", "Bracci", "Braccini", "Brandi", "Braschi", "Bravi", "Brazzini", "Breschi", "Brilli", "Brizzi", "Brogelli", "Brogi", "Brogioni", "Brunelli", "Brunetti", "Bruni", "Bruno", "Brunori", "Bruschi", "Bucci", "Bucciarelli", "Buccioni", "Bucelli", "Bulli", "Burberi", "Burchi", "Burgassi", "Burroni", "Bussotti", "Buti", "Caciolli", "Caiani", "Calabrese", "Calamai", "Calamandrei", "Caldini", "Calo'", "Calonaci", "Calosi", "Calvelli", "Cambi", "Camiciottoli", "Cammelli", "Cammilli", "Campolmi", "Cantini", "Capanni", "Capecchi", "Caponi", "Cappelletti", "Cappelli", "Cappellini", "Cappugi", "Capretti", "Caputo", "Carbone", "Carboni", "Cardini", "Carlesi", "Carletti", "Carli", "Caroti", "Carotti", "Carrai", "Carraresi", "Carta", "Caruso", "Casalini", "Casati", "Caselli", "Casini", "Castagnoli", "Castellani", "Castelli", "Castellucci", "Catalano", "Catarzi", "Catelani", "Cavaciocchi", "Cavallaro", "Cavallini", "Cavicchi", "Cavini", "Ceccarelli", "Ceccatelli", "Ceccherelli", "Ceccherini", "Cecchi", "Cecchini", "Cecconi", "Cei", "Cellai", "Celli", "Cellini", "Cencetti", "Ceni", "Cenni", "Cerbai", "Cesari", "Ceseri", "Checcacci", "Checchi", "Checcucci", "Cheli", "Chellini", "Chen", "Cheng", "Cherici", "Cherubini", "Chiaramonti", "Chiarantini", "Chiarelli", "Chiari", "Chiarini", "Chiarugi", "Chiavacci", "Chiesi", "Chimenti", "Chini", "Chirici", "Chiti", "Ciabatti", "Ciampi", "Cianchi", "Cianfanelli", "Cianferoni", "Ciani", "Ciapetti", "Ciappi", "Ciardi", "Ciatti", "Cicali", "Ciccone", "Cinelli", "Cini", "Ciobanu", "Ciolli", "Cioni", "Cipriani", "Cirillo", "Cirri", "Ciucchi", "Ciuffi", "Ciulli", "Ciullini", "Clemente", "Cocchi", "Cognome", "Coli", "Collini", "Colombo", "Colzi", "Comparini", "Conforti", "Consigli", "Conte", "Conti", "Contini", "Coppini", "Coppola", "Corsi", "Corsini", "Corti", "Cortini", "Cosi", "Costa", "Costantini", "Costantino", "Cozzi", "Cresci", "Crescioli", "Cresti", "Crini", "Curradi", "D'Agostino", "D'Alessandro", "D'Amico", "D'Angelo", "Daddi", "Dainelli", "Dallai", "Danti", "Davitti", "De Angelis", "De Luca", "De Marco", "De Rosa", "De Santis", "De Simone", "De Vita", "Degl'Innocenti", "Degli Innocenti", "Dei", "Del Lungo", "Del Re", "Di Marco", "Di Stefano", "Dini", "Diop", "Dobre", "Dolfi", "Donati", "Dondoli", "Dong", "Donnini", "Ducci", "Dumitru", "Ermini", "Esposito", "Evangelisti", "Fabbri", "Fabbrini", "Fabbrizzi", "Fabbroni", "Fabbrucci", "Fabiani", "Facchini", "Faggi", "Fagioli", "Failli", "Faini", "Falciani", "Falcini", "Falcone", "Fallani", "Falorni", "Falsini", "Falugiani", "Fancelli", "Fanelli", "Fanetti", "Fanfani", "Fani", "Fantappie'", "Fantechi", "Fanti", "Fantini", "Fantoni", "Farina", "Fattori", "Favilli", "Fedi", "Fei", "Ferrante", "Ferrara", "Ferrari", "Ferraro", "Ferretti", "Ferri", "Ferrini", "Ferroni", "Fiaschi", "Fibbi", "Fiesoli", "Filippi", "Filippini", "Fini", "Fioravanti", "Fiore", "Fiorentini", "Fiorini", "Fissi", "Focardi", "Foggi", "Fontana", "Fontanelli", "Fontani", "Forconi", "Formigli", "Forte", "Forti", "Fortini", "Fossati", "Fossi", "Francalanci", "Franceschi", "Franceschini", "Franchi", "Franchini", "Franci", "Francini", "Francioni", "Franco", "Frassineti", "Frati", "Fratini", "Frilli", "Frizzi", "Frosali", "Frosini", "Frullini", "Fusco", "Fusi", "Gabbrielli", "Gabellini", "Gagliardi", "Galanti", "Galardi", "Galeotti", "Galletti", "Galli", "Gallo", "Gallori", "Gambacciani", "Gargani", "Garofalo", "Garuglieri", "Gashi", "Gasperini", "Gatti", "Gelli", "Gensini", "Gentile", "Gentili", "Geri", "Gerini", "Gheri", "Ghini", "Giachetti", "Giachi", "Giacomelli", "Gianassi", "Giani", "Giannelli", "Giannetti", "Gianni", "Giannini", "Giannoni", "Giannotti", "Giannozzi", "Gigli", "Giordano", "Giorgetti", "Giorgi", "Giovacchini", "Giovannelli", "Giovannetti", "Giovannini", "Giovannoni", "Giuliani", "Giunti", "Giuntini", "Giusti", "Gonnelli", "Goretti", "Gori", "Gradi", "Gramigni", "Grassi", "Grasso", "Graziani", "Grazzini", "Greco", "Grifoni", "Grillo", "Grimaldi", "Grossi", "Gualtieri", "Guarducci", "Guarino", "Guarnieri", "Guasti", "Guerra", "Guerri", "Guerrini", "Guidi", "Guidotti", "He", "Hoxha", "Hu", "Huang", "Iandelli", "Ignesti", "Innocenti", "Jin", "La Rosa", "Lai", "Landi", "Landini", "Lanini", "Lapi", "Lapini", "Lari", "Lascialfari", "Lastrucci", "Latini", "Lazzeri", "Lazzerini", "Lelli", "Lenzi", "Leonardi", "Leoncini", "Leone", "Leoni", "Lepri", "Li", "Liao", "Lin", "Linari", "Lippi", "Lisi", "Livi", "Lombardi", "Lombardini", "Lombardo", "Longo", "Lopez", "Lorenzi", "Lorenzini", "Lorini", "Lotti", "Lu", "Lucchesi", "Lucherini", "Lunghi", "Lupi", "Madiai", "Maestrini", "Maffei", "Maggi", "Maggini", "Magherini", "Magini", "Magnani", "Magnelli", "Magni", "Magnolfi", "Magrini", "Malavolti", "Malevolti", "Manca", "Mancini", "Manetti", "Manfredi", "Mangani", "Mannelli", "Manni", "Mannini", "Mannucci", "Manuelli", "Manzini", "Marcelli", "Marchese", "Marchetti", "Marchi", "Marchiani", "Marchionni", "Marconi", "Marcucci", "Margheri", "Mari", "Mariani", "Marilli", "Marinai", "Marinari", "Marinelli", "Marini", "Marino", "Mariotti", "Marsili", "Martelli", "Martinelli", "Martini", "Martino", "Marzi", "Masi", "Masini", "Masoni", "Massai", "Materassi", "Mattei", "Matteini", "Matteucci", "Matteuzzi", "Mattioli", "Mattolini", "Matucci", "Mauro", "Mazzanti", "Mazzei", "Mazzetti", "Mazzi", "Mazzini", "Mazzocchi", "Mazzoli", "Mazzoni", "Mazzuoli", "Meacci", "Mecocci", "Meini", "Melani", "Mele", "Meli", "Mengoni", "Menichetti", "Meoni", "Merlini", "Messeri", "Messina", "Meucci", "Miccinesi", "Miceli", "Micheli", "Michelini", "Michelozzi", "Migliori", "Migliorini", "Milani", "Miniati", "Misuri", "Monaco", "Montagnani", "Montagni", "Montanari", "Montelatici", "Monti", "Montigiani", "Montini", "Morandi", "Morandini", "Morelli", "Moretti", "Morganti", "Mori", "Morini", "Moroni", "Morozzi", "Mugnai", "Mugnaini", "Mustafa", "Naldi", "Naldini", "Nannelli", "Nanni", "Nannini", "Nannucci", "Nardi", "Nardini", "Nardoni", "Natali", "Ndiaye", "Nencetti", "Nencini", "Nencioni", "Neri", "Nesi", "Nesti", "Niccolai", "Niccoli", "Niccolini", "Nigi", "Nistri", "Nocentini", "Noferini", "Novelli", "Nucci", "Nuti", "Nutini", "Oliva", "Olivieri", "Olmi", "Orlandi", "Orlandini", "Orlando", "Orsini", "Ortolani", "Ottanelli", "Pacciani", "Pace", "Paci", "Pacini", "Pagani", "Pagano", "Paggetti", "Pagliai", "Pagni", "Pagnini", "Paladini", "Palagi", "Palchetti", "Palloni", "Palmieri", "Palumbo", "Pampaloni", "Pancani", "Pandolfi", "Pandolfini", "Panerai", "Panichi", "Paoletti", "Paoli", "Paolini", "Papi", "Papini", "Papucci", "Parenti", "Parigi", "Parisi", "Parri", "Parrini", "Pasquini", "Passeri", "Pecchioli", "Pecorini", "Pellegrini", "Pepi", "Perini", "Perrone", "Peruzzi", "Pesci", "Pestelli", "Petri", "Petrini", "Petrucci", "Pettini", "Pezzati", "Pezzatini", "Piani", "Piazza", "Piazzesi", "Piazzini", "Piccardi", "Picchi", "Piccini", "Piccioli", "Pieraccini", "Pieraccioni", "Pieralli", "Pierattini", "Pieri", "Pierini", "Pieroni", "Pietrini", "Pini", "Pinna", "Pinto", "Pinzani", "Pinzauti", "Piras", "Pisani", "Pistolesi", "Poggesi", "Poggi", "Poggiali", "Poggiolini", "Poli", "Pollastri", "Porciani", "Pozzi", "Pratellesi", "Pratesi", "Prosperi", "Pruneti", "Pucci", "Puccini", "Puccioni", "Pugi", "Pugliese", "Puliti", "Querci", "Quercioli", "Raddi", "Radu", "Raffaelli", "Ragazzini", "Ranfagni", "Ranieri", "Rastrelli", "Raugei", "Raveggi", "Renai", "Renzi", "Rettori", "Ricci", "Ricciardi", "Ridi", "Ridolfi", "Rigacci", "Righi", "Righini", "Rinaldi", "Risaliti", "Ristori", "Rizzo", "Rocchi", "Rocchini", "Rogai", "Romagnoli", "Romanelli", "Romani", "Romano", "Romei", "Romeo", "Romiti", "Romoli", "Romolini", "Rontini", "Rosati", "Roselli", "Rosi", "Rossetti", "Rossi", "Rossini", "Rovai", "Ruggeri", "Ruggiero", "Russo", "Sabatini", "Saccardi", "Sacchetti", "Sacchi", "Sacco", "Salerno", "Salimbeni", "Salucci", "Salvadori", "Salvestrini", "Salvi", "Salvini", "Sanesi", "Sani", "Sanna", "Santi", "Santini", "Santoni", "Santoro", "Santucci", "Sardi", "Sarri", "Sarti", "Sassi", "Sbolci", "Scali", "Scarpelli", "Scarselli", "Scopetani", "Secci", "Selvi", "Senatori", "Senesi", "Serafini", "Sereni", "Serra", "Sestini", "Sguanci", "Sieni", "Signorini", "Silvestri", "Simoncini", "Simonetti", "Simoni", "Singh", "Sodi", "Soldi", "Somigli", "Sorbi", "Sorelli", "Sorrentino", "Sottili", "Spina", "Spinelli", "Staccioli", "Staderini", "Stefanelli", "Stefani", "Stefanini", "Stella", "Susini", "Tacchi", "Tacconi", "Taddei", "Tagliaferri", "Tamburini", "Tanganelli", "Tani", "Tanini", "Tapinassi", "Tarchi", "Tarchiani", "Targioni", "Tassi", "Tassini", "Tempesti", "Terzani", "Tesi", "Testa", "Testi", "Tilli", "Tinti", "Tirinnanzi", "Toccafondi", "Tofanari", "Tofani", "Tognaccini", "Tonelli", "Tonini", "Torelli", "Torrini", "Tosi", "Toti", "Tozzi", "Trambusti", "Trapani", "Tucci", "Turchi", "Ugolini", "Ulivi", "Valente", "Valenti", "Valentini", "Vangelisti", "Vanni", "Vannini", "Vannoni", "Vannozzi", "Vannucchi", "Vannucci", "Ventura", "Venturi", "Venturini", "Vestri", "Vettori", "Vichi", "Viciani", "Vieri", "Vigiani", "Vignoli", "Vignolini", "Vignozzi", "Villani", "Vinci", "Visani", "Vitale", "Vitali", "Viti", "Viviani", "Vivoli", "Volpe", "Volpi", "Wang", "Wu", "Xu", "Yang", "Ye", "Zagli", "Zani", "Zanieri", "Zanobini", "Zecchi", "Zetti", "Zhang", "Zheng", "Zhou", "Zhu", "Zingoni", "Zini", "Zoppi"]
        },
        countries: [{name: "Afghanistan", abbreviation: "AF"}, {name: "Albania", abbreviation: "AL"}, {
          name: "Algeria",
          abbreviation: "DZ"
        }, {name: "American Samoa", abbreviation: "AS"}, {name: "Andorra", abbreviation: "AD"}, {
          name: "Angola",
          abbreviation: "AO"
        }, {name: "Anguilla", abbreviation: "AI"}, {
          name: "Antarctica",
          abbreviation: "AQ"
        }, {name: "Antigua and Barbuda", abbreviation: "AG"}, {name: "Argentina", abbreviation: "AR"}, {
          name: "Armenia",
          abbreviation: "AM"
        }, {name: "Aruba", abbreviation: "AW"}, {name: "Australia", abbreviation: "AU"}, {
          name: "Austria",
          abbreviation: "AT"
        }, {name: "Azerbaijan", abbreviation: "AZ"}, {name: "Bahamas", abbreviation: "BS"}, {
          name: "Bahrain",
          abbreviation: "BH"
        }, {name: "Bangladesh", abbreviation: "BD"}, {name: "Barbados", abbreviation: "BB"}, {
          name: "Belarus",
          abbreviation: "BY"
        }, {name: "Belgium", abbreviation: "BE"}, {name: "Belize", abbreviation: "BZ"}, {
          name: "Benin",
          abbreviation: "BJ"
        }, {name: "Bermuda", abbreviation: "BM"}, {name: "Bhutan", abbreviation: "BT"}, {
          name: "Bolivia",
          abbreviation: "BO"
        }, {name: "Bosnia and Herzegovina", abbreviation: "BA"}, {
          name: "Botswana",
          abbreviation: "BW"
        }, {name: "Bouvet Island", abbreviation: "BV"}, {
          name: "Brazil",
          abbreviation: "BR"
        }, {name: "British Antarctic Territory", abbreviation: "BQ"}, {
          name: "British Indian Ocean Territory",
          abbreviation: "IO"
        }, {name: "British Virgin Islands", abbreviation: "VG"}, {
          name: "Brunei",
          abbreviation: "BN"
        }, {name: "Bulgaria", abbreviation: "BG"}, {name: "Burkina Faso", abbreviation: "BF"}, {
          name: "Burundi",
          abbreviation: "BI"
        }, {name: "Cambodia", abbreviation: "KH"}, {name: "Cameroon", abbreviation: "CM"}, {
          name: "Canada",
          abbreviation: "CA"
        }, {name: "Canton and Enderbury Islands", abbreviation: "CT"}, {
          name: "Cape Verde",
          abbreviation: "CV"
        }, {name: "Cayman Islands", abbreviation: "KY"}, {
          name: "Central African Republic",
          abbreviation: "CF"
        }, {name: "Chad", abbreviation: "TD"}, {name: "Chile", abbreviation: "CL"}, {
          name: "China",
          abbreviation: "CN"
        }, {name: "Christmas Island", abbreviation: "CX"}, {
          name: "Cocos [Keeling] Islands",
          abbreviation: "CC"
        }, {name: "Colombia", abbreviation: "CO"}, {name: "Comoros", abbreviation: "KM"}, {
          name: "Congo - Brazzaville",
          abbreviation: "CG"
        }, {name: "Congo - Kinshasa", abbreviation: "CD"}, {
          name: "Cook Islands",
          abbreviation: "CK"
        }, {name: "Costa Rica", abbreviation: "CR"}, {name: "Croatia", abbreviation: "HR"}, {
          name: "Cuba",
          abbreviation: "CU"
        }, {name: "Cyprus", abbreviation: "CY"}, {name: "Czech Republic", abbreviation: "CZ"}, {
          name: "Côte d’Ivoire",
          abbreviation: "CI"
        }, {name: "Denmark", abbreviation: "DK"}, {name: "Djibouti", abbreviation: "DJ"}, {
          name: "Dominica",
          abbreviation: "DM"
        }, {name: "Dominican Republic", abbreviation: "DO"}, {
          name: "Dronning Maud Land",
          abbreviation: "NQ"
        }, {name: "East Germany", abbreviation: "DD"}, {name: "Ecuador", abbreviation: "EC"}, {
          name: "Egypt",
          abbreviation: "EG"
        }, {name: "El Salvador", abbreviation: "SV"}, {name: "Equatorial Guinea", abbreviation: "GQ"}, {
          name: "Eritrea",
          abbreviation: "ER"
        }, {name: "Estonia", abbreviation: "EE"}, {name: "Ethiopia", abbreviation: "ET"}, {
          name: "Falkland Islands",
          abbreviation: "FK"
        }, {name: "Faroe Islands", abbreviation: "FO"}, {name: "Fiji", abbreviation: "FJ"}, {
          name: "Finland",
          abbreviation: "FI"
        }, {name: "France", abbreviation: "FR"}, {name: "French Guiana", abbreviation: "GF"}, {
          name: "French Polynesia",
          abbreviation: "PF"
        }, {
          name: "French Southern Territories",
          abbreviation: "TF"
        }, {name: "French Southern and Antarctic Territories", abbreviation: "FQ"}, {
          name: "Gabon",
          abbreviation: "GA"
        }, {name: "Gambia", abbreviation: "GM"}, {name: "Georgia", abbreviation: "GE"}, {
          name: "Germany",
          abbreviation: "DE"
        }, {name: "Ghana", abbreviation: "GH"}, {name: "Gibraltar", abbreviation: "GI"}, {
          name: "Greece",
          abbreviation: "GR"
        }, {name: "Greenland", abbreviation: "GL"}, {name: "Grenada", abbreviation: "GD"}, {
          name: "Guadeloupe",
          abbreviation: "GP"
        }, {name: "Guam", abbreviation: "GU"}, {name: "Guatemala", abbreviation: "GT"}, {
          name: "Guernsey",
          abbreviation: "GG"
        }, {name: "Guinea", abbreviation: "GN"}, {name: "Guinea-Bissau", abbreviation: "GW"}, {
          name: "Guyana",
          abbreviation: "GY"
        }, {name: "Haiti", abbreviation: "HT"}, {
          name: "Heard Island and McDonald Islands",
          abbreviation: "HM"
        }, {name: "Honduras", abbreviation: "HN"}, {name: "Hong Kong SAR China", abbreviation: "HK"}, {
          name: "Hungary",
          abbreviation: "HU"
        }, {name: "Iceland", abbreviation: "IS"}, {name: "India", abbreviation: "IN"}, {
          name: "Indonesia",
          abbreviation: "ID"
        }, {name: "Iran", abbreviation: "IR"}, {name: "Iraq", abbreviation: "IQ"}, {
          name: "Ireland",
          abbreviation: "IE"
        }, {name: "Isle of Man", abbreviation: "IM"}, {name: "Israel", abbreviation: "IL"}, {
          name: "Italy",
          abbreviation: "IT"
        }, {name: "Jamaica", abbreviation: "JM"}, {name: "Japan", abbreviation: "JP"}, {
          name: "Jersey",
          abbreviation: "JE"
        }, {name: "Johnston Island", abbreviation: "JT"}, {name: "Jordan", abbreviation: "JO"}, {
          name: "Kazakhstan",
          abbreviation: "KZ"
        }, {name: "Kenya", abbreviation: "KE"}, {name: "Kiribati", abbreviation: "KI"}, {
          name: "Kuwait",
          abbreviation: "KW"
        }, {name: "Kyrgyzstan", abbreviation: "KG"}, {name: "Laos", abbreviation: "LA"}, {
          name: "Latvia",
          abbreviation: "LV"
        }, {name: "Lebanon", abbreviation: "LB"}, {name: "Lesotho", abbreviation: "LS"}, {
          name: "Liberia",
          abbreviation: "LR"
        }, {name: "Libya", abbreviation: "LY"}, {name: "Liechtenstein", abbreviation: "LI"}, {
          name: "Lithuania",
          abbreviation: "LT"
        }, {name: "Luxembourg", abbreviation: "LU"}, {name: "Macau SAR China", abbreviation: "MO"}, {
          name: "Macedonia",
          abbreviation: "MK"
        }, {name: "Madagascar", abbreviation: "MG"}, {name: "Malawi", abbreviation: "MW"}, {
          name: "Malaysia",
          abbreviation: "MY"
        }, {name: "Maldives", abbreviation: "MV"}, {name: "Mali", abbreviation: "ML"}, {
          name: "Malta",
          abbreviation: "MT"
        }, {name: "Marshall Islands", abbreviation: "MH"}, {
          name: "Martinique",
          abbreviation: "MQ"
        }, {name: "Mauritania", abbreviation: "MR"}, {name: "Mauritius", abbreviation: "MU"}, {
          name: "Mayotte",
          abbreviation: "YT"
        }, {name: "Metropolitan France", abbreviation: "FX"}, {name: "Mexico", abbreviation: "MX"}, {
          name: "Micronesia",
          abbreviation: "FM"
        }, {name: "Midway Islands", abbreviation: "MI"}, {name: "Moldova", abbreviation: "MD"}, {
          name: "Monaco",
          abbreviation: "MC"
        }, {name: "Mongolia", abbreviation: "MN"}, {name: "Montenegro", abbreviation: "ME"}, {
          name: "Montserrat",
          abbreviation: "MS"
        }, {name: "Morocco", abbreviation: "MA"}, {name: "Mozambique", abbreviation: "MZ"}, {
          name: "Myanmar [Burma]",
          abbreviation: "MM"
        }, {name: "Namibia", abbreviation: "NA"}, {name: "Nauru", abbreviation: "NR"}, {
          name: "Nepal",
          abbreviation: "NP"
        }, {name: "Netherlands", abbreviation: "NL"}, {
          name: "Netherlands Antilles",
          abbreviation: "AN"
        }, {name: "Neutral Zone", abbreviation: "NT"}, {
          name: "New Caledonia",
          abbreviation: "NC"
        }, {name: "New Zealand", abbreviation: "NZ"}, {name: "Nicaragua", abbreviation: "NI"}, {
          name: "Niger",
          abbreviation: "NE"
        }, {name: "Nigeria", abbreviation: "NG"}, {name: "Niue", abbreviation: "NU"}, {
          name: "Norfolk Island",
          abbreviation: "NF"
        }, {name: "North Korea", abbreviation: "KP"}, {
          name: "North Vietnam",
          abbreviation: "VD"
        }, {name: "Northern Mariana Islands", abbreviation: "MP"}, {name: "Norway", abbreviation: "NO"}, {
          name: "Oman",
          abbreviation: "OM"
        }, {name: "Pacific Islands Trust Territory", abbreviation: "PC"}, {
          name: "Pakistan",
          abbreviation: "PK"
        }, {name: "Palau", abbreviation: "PW"}, {name: "Palestinian Territories", abbreviation: "PS"}, {
          name: "Panama",
          abbreviation: "PA"
        }, {name: "Panama Canal Zone", abbreviation: "PZ"}, {
          name: "Papua New Guinea",
          abbreviation: "PG"
        }, {name: "Paraguay", abbreviation: "PY"}, {
          name: "People's Democratic Republic of Yemen",
          abbreviation: "YD"
        }, {name: "Peru", abbreviation: "PE"}, {name: "Philippines", abbreviation: "PH"}, {
          name: "Pitcairn Islands",
          abbreviation: "PN"
        }, {name: "Poland", abbreviation: "PL"}, {name: "Portugal", abbreviation: "PT"}, {
          name: "Puerto Rico",
          abbreviation: "PR"
        }, {name: "Qatar", abbreviation: "QA"}, {name: "Romania", abbreviation: "RO"}, {
          name: "Russia",
          abbreviation: "RU"
        }, {name: "Rwanda", abbreviation: "RW"}, {name: "Réunion", abbreviation: "RE"}, {
          name: "Saint Barthélemy",
          abbreviation: "BL"
        }, {name: "Saint Helena", abbreviation: "SH"}, {
          name: "Saint Kitts and Nevis",
          abbreviation: "KN"
        }, {name: "Saint Lucia", abbreviation: "LC"}, {
          name: "Saint Martin",
          abbreviation: "MF"
        }, {name: "Saint Pierre and Miquelon", abbreviation: "PM"}, {
          name: "Saint Vincent and the Grenadines",
          abbreviation: "VC"
        }, {name: "Samoa", abbreviation: "WS"}, {name: "San Marino", abbreviation: "SM"}, {
          name: "Saudi Arabia",
          abbreviation: "SA"
        }, {name: "Senegal", abbreviation: "SN"}, {name: "Serbia", abbreviation: "RS"}, {
          name: "Serbia and Montenegro",
          abbreviation: "CS"
        }, {name: "Seychelles", abbreviation: "SC"}, {name: "Sierra Leone", abbreviation: "SL"}, {
          name: "Singapore",
          abbreviation: "SG"
        }, {name: "Slovakia", abbreviation: "SK"}, {name: "Slovenia", abbreviation: "SI"}, {
          name: "Solomon Islands",
          abbreviation: "SB"
        }, {name: "Somalia", abbreviation: "SO"}, {
          name: "South Africa",
          abbreviation: "ZA"
        }, {name: "South Georgia and the South Sandwich Islands", abbreviation: "GS"}, {
          name: "South Korea",
          abbreviation: "KR"
        }, {name: "Spain", abbreviation: "ES"}, {name: "Sri Lanka", abbreviation: "LK"}, {
          name: "Sudan",
          abbreviation: "SD"
        }, {name: "Suriname", abbreviation: "SR"}, {
          name: "Svalbard and Jan Mayen",
          abbreviation: "SJ"
        }, {name: "Swaziland", abbreviation: "SZ"}, {name: "Sweden", abbreviation: "SE"}, {
          name: "Switzerland",
          abbreviation: "CH"
        }, {name: "Syria", abbreviation: "SY"}, {name: "São Tomé and Príncipe", abbreviation: "ST"}, {
          name: "Taiwan",
          abbreviation: "TW"
        }, {name: "Tajikistan", abbreviation: "TJ"}, {name: "Tanzania", abbreviation: "TZ"}, {
          name: "Thailand",
          abbreviation: "TH"
        }, {name: "Timor-Leste", abbreviation: "TL"}, {name: "Togo", abbreviation: "TG"}, {
          name: "Tokelau",
          abbreviation: "TK"
        }, {name: "Tonga", abbreviation: "TO"}, {name: "Trinidad and Tobago", abbreviation: "TT"}, {
          name: "Tunisia",
          abbreviation: "TN"
        }, {name: "Turkey", abbreviation: "TR"}, {
          name: "Turkmenistan",
          abbreviation: "TM"
        }, {name: "Turks and Caicos Islands", abbreviation: "TC"}, {
          name: "Tuvalu",
          abbreviation: "TV"
        }, {name: "U.S. Minor Outlying Islands", abbreviation: "UM"}, {
          name: "U.S. Miscellaneous Pacific Islands",
          abbreviation: "PU"
        }, {name: "U.S. Virgin Islands", abbreviation: "VI"}, {name: "Uganda", abbreviation: "UG"}, {
          name: "Ukraine",
          abbreviation: "UA"
        }, {name: "Union of Soviet Socialist Republics", abbreviation: "SU"}, {
          name: "United Arab Emirates",
          abbreviation: "AE"
        }, {name: "United Kingdom", abbreviation: "GB"}, {
          name: "United States",
          abbreviation: "US"
        }, {name: "Unknown or Invalid Region", abbreviation: "ZZ"}, {
          name: "Uruguay",
          abbreviation: "UY"
        }, {name: "Uzbekistan", abbreviation: "UZ"}, {name: "Vanuatu", abbreviation: "VU"}, {
          name: "Vatican City",
          abbreviation: "VA"
        }, {name: "Venezuela", abbreviation: "VE"}, {name: "Vietnam", abbreviation: "VN"}, {
          name: "Wake Island",
          abbreviation: "WK"
        }, {name: "Wallis and Futuna", abbreviation: "WF"}, {
          name: "Western Sahara",
          abbreviation: "EH"
        }, {name: "Yemen", abbreviation: "YE"}, {name: "Zambia", abbreviation: "ZM"}, {
          name: "Zimbabwe",
          abbreviation: "ZW"
        }, {name: "Åland Islands", abbreviation: "AX"}],
        provinces: {
          ca: [{name: "Alberta", abbreviation: "AB"}, {
            name: "British Columbia",
            abbreviation: "BC"
          }, {name: "Manitoba", abbreviation: "MB"}, {
            name: "New Brunswick",
            abbreviation: "NB"
          }, {name: "Newfoundland and Labrador", abbreviation: "NL"}, {
            name: "Nova Scotia",
            abbreviation: "NS"
          }, {name: "Ontario", abbreviation: "ON"}, {name: "Prince Edward Island", abbreviation: "PE"}, {
            name: "Quebec",
            abbreviation: "QC"
          }, {name: "Saskatchewan", abbreviation: "SK"}, {
            name: "Northwest Territories",
            abbreviation: "NT"
          }, {name: "Nunavut", abbreviation: "NU"}, {name: "Yukon", abbreviation: "YT"}],
          it: [{name: "Agrigento", abbreviation: "AG", code: 84}, {
            name: "Alessandria",
            abbreviation: "AL",
            code: 6
          }, {name: "Ancona", abbreviation: "AN", code: 42}, {
            name: "Aosta",
            abbreviation: "AO",
            code: 7
          }, {name: "L'Aquila", abbreviation: "AQ", code: 66}, {
            name: "Arezzo",
            abbreviation: "AR",
            code: 51
          }, {name: "Ascoli-Piceno", abbreviation: "AP", code: 44}, {
            name: "Asti",
            abbreviation: "AT",
            code: 5
          }, {name: "Avellino", abbreviation: "AV", code: 64}, {
            name: "Bari",
            abbreviation: "BA",
            code: 72
          }, {name: "Barletta-Andria-Trani", abbreviation: "BT", code: 72}, {
            name: "Belluno",
            abbreviation: "BL",
            code: 25
          }, {name: "Benevento", abbreviation: "BN", code: 62}, {
            name: "Bergamo",
            abbreviation: "BG",
            code: 16
          }, {name: "Biella", abbreviation: "BI", code: 96}, {
            name: "Bologna",
            abbreviation: "BO",
            code: 37
          }, {name: "Bolzano", abbreviation: "BZ", code: 21}, {
            name: "Brescia",
            abbreviation: "BS",
            code: 17
          }, {name: "Brindisi", abbreviation: "BR", code: 74}, {
            name: "Cagliari",
            abbreviation: "CA",
            code: 92
          }, {name: "Caltanissetta", abbreviation: "CL", code: 85}, {
            name: "Campobasso",
            abbreviation: "CB",
            code: 70
          }, {name: "Carbonia Iglesias", abbreviation: "CI", code: 70}, {
            name: "Caserta",
            abbreviation: "CE",
            code: 61
          }, {name: "Catania", abbreviation: "CT", code: 87}, {
            name: "Catanzaro",
            abbreviation: "CZ",
            code: 79
          }, {name: "Chieti", abbreviation: "CH", code: 69}, {
            name: "Como",
            abbreviation: "CO",
            code: 13
          }, {name: "Cosenza", abbreviation: "CS", code: 78}, {
            name: "Cremona",
            abbreviation: "CR",
            code: 19
          }, {name: "Crotone", abbreviation: "KR", code: 101}, {
            name: "Cuneo",
            abbreviation: "CN",
            code: 4
          }, {name: "Enna", abbreviation: "EN", code: 86}, {
            name: "Fermo",
            abbreviation: "FM",
            code: 86
          }, {name: "Ferrara", abbreviation: "FE", code: 38}, {
            name: "Firenze",
            abbreviation: "FI",
            code: 48
          }, {name: "Foggia", abbreviation: "FG", code: 71}, {
            name: "Forli-Cesena",
            abbreviation: "FC",
            code: 71
          }, {name: "Frosinone", abbreviation: "FR", code: 60}, {
            name: "Genova",
            abbreviation: "GE",
            code: 10
          }, {name: "Gorizia", abbreviation: "GO", code: 31}, {
            name: "Grosseto",
            abbreviation: "GR",
            code: 53
          }, {name: "Imperia", abbreviation: "IM", code: 8}, {
            name: "Isernia",
            abbreviation: "IS",
            code: 94
          }, {name: "La-Spezia", abbreviation: "SP", code: 66}, {
            name: "Latina",
            abbreviation: "LT",
            code: 59
          }, {name: "Lecce", abbreviation: "LE", code: 75}, {
            name: "Lecco",
            abbreviation: "LC",
            code: 97
          }, {name: "Livorno", abbreviation: "LI", code: 49}, {
            name: "Lodi",
            abbreviation: "LO",
            code: 98
          }, {name: "Lucca", abbreviation: "LU", code: 46}, {
            name: "Macerata",
            abbreviation: "MC",
            code: 43
          }, {name: "Mantova", abbreviation: "MN", code: 20}, {
            name: "Massa-Carrara",
            abbreviation: "MS",
            code: 45
          }, {name: "Matera", abbreviation: "MT", code: 77}, {
            name: "Medio Campidano",
            abbreviation: "VS",
            code: 77
          }, {name: "Messina", abbreviation: "ME", code: 83}, {
            name: "Milano",
            abbreviation: "MI",
            code: 15
          }, {name: "Modena", abbreviation: "MO", code: 36}, {
            name: "Monza-Brianza",
            abbreviation: "MB",
            code: 36
          }, {name: "Napoli", abbreviation: "NA", code: 63}, {
            name: "Novara",
            abbreviation: "NO",
            code: 3
          }, {name: "Nuoro", abbreviation: "NU", code: 91}, {
            name: "Ogliastra",
            abbreviation: "OG",
            code: 91
          }, {name: "Olbia Tempio", abbreviation: "OT", code: 91}, {
            name: "Oristano",
            abbreviation: "OR",
            code: 95
          }, {name: "Padova", abbreviation: "PD", code: 28}, {
            name: "Palermo",
            abbreviation: "PA",
            code: 82
          }, {name: "Parma", abbreviation: "PR", code: 34}, {
            name: "Pavia",
            abbreviation: "PV",
            code: 18
          }, {name: "Perugia", abbreviation: "PG", code: 54}, {
            name: "Pesaro-Urbino",
            abbreviation: "PU",
            code: 41
          }, {name: "Pescara", abbreviation: "PE", code: 68}, {
            name: "Piacenza",
            abbreviation: "PC",
            code: 33
          }, {name: "Pisa", abbreviation: "PI", code: 50}, {
            name: "Pistoia",
            abbreviation: "PT",
            code: 47
          }, {name: "Pordenone", abbreviation: "PN", code: 93}, {
            name: "Potenza",
            abbreviation: "PZ",
            code: 76
          }, {name: "Prato", abbreviation: "PO", code: 100}, {
            name: "Ragusa",
            abbreviation: "RG",
            code: 88
          }, {name: "Ravenna", abbreviation: "RA", code: 39}, {
            name: "Reggio-Calabria",
            abbreviation: "RC",
            code: 35
          }, {name: "Reggio-Emilia", abbreviation: "RE", code: 35}, {
            name: "Rieti",
            abbreviation: "RI",
            code: 57
          }, {name: "Rimini", abbreviation: "RN", code: 99}, {
            name: "Roma",
            abbreviation: "Roma",
            code: 58
          }, {name: "Rovigo", abbreviation: "RO", code: 29}, {
            name: "Salerno",
            abbreviation: "SA",
            code: 65
          }, {name: "Sassari", abbreviation: "SS", code: 90}, {
            name: "Savona",
            abbreviation: "SV",
            code: 9
          }, {name: "Siena", abbreviation: "SI", code: 52}, {
            name: "Siracusa",
            abbreviation: "SR",
            code: 89
          }, {name: "Sondrio", abbreviation: "SO", code: 14}, {
            name: "Taranto",
            abbreviation: "TA",
            code: 73
          }, {name: "Teramo", abbreviation: "TE", code: 67}, {
            name: "Terni",
            abbreviation: "TR",
            code: 55
          }, {name: "Torino", abbreviation: "TO", code: 1}, {
            name: "Trapani",
            abbreviation: "TP",
            code: 81
          }, {name: "Trento", abbreviation: "TN", code: 22}, {
            name: "Treviso",
            abbreviation: "TV",
            code: 26
          }, {name: "Trieste", abbreviation: "TS", code: 32}, {
            name: "Udine",
            abbreviation: "UD",
            code: 30
          }, {name: "Varese", abbreviation: "VA", code: 12}, {
            name: "Venezia",
            abbreviation: "VE",
            code: 27
          }, {name: "Verbania", abbreviation: "VB", code: 27}, {
            name: "Vercelli",
            abbreviation: "VC",
            code: 2
          }, {name: "Verona", abbreviation: "VR", code: 23}, {
            name: "Vibo-Valentia",
            abbreviation: "VV",
            code: 102
          }, {name: "Vicenza", abbreviation: "VI", code: 24}, {name: "Viterbo", abbreviation: "VT", code: 56}]
        },
        nationalities: [{name: "Afghan"}, {name: "Albanian"}, {name: "Algerian"}, {name: "American"}, {name: "Andorran"}, {name: "Angolan"}, {name: "Antiguans"}, {name: "Argentinean"}, {name: "Armenian"}, {name: "Australian"}, {name: "Austrian"}, {name: "Azerbaijani"}, {name: "Bahami"}, {name: "Bahraini"}, {name: "Bangladeshi"}, {name: "Barbadian"}, {name: "Barbudans"}, {name: "Batswana"}, {name: "Belarusian"}, {name: "Belgian"}, {name: "Belizean"}, {name: "Beninese"}, {name: "Bhutanese"}, {name: "Bolivian"}, {name: "Bosnian"}, {name: "Brazilian"}, {name: "British"}, {name: "Bruneian"}, {name: "Bulgarian"}, {name: "Burkinabe"}, {name: "Burmese"}, {name: "Burundian"}, {name: "Cambodian"}, {name: "Cameroonian"}, {name: "Canadian"}, {name: "Cape Verdean"}, {name: "Central African"}, {name: "Chadian"}, {name: "Chilean"}, {name: "Chinese"}, {name: "Colombian"}, {name: "Comoran"}, {name: "Congolese"}, {name: "Costa Rican"}, {name: "Croatian"}, {name: "Cuban"}, {name: "Cypriot"}, {name: "Czech"}, {name: "Danish"}, {name: "Djibouti"}, {name: "Dominican"}, {name: "Dutch"}, {name: "East Timorese"}, {name: "Ecuadorean"}, {name: "Egyptian"}, {name: "Emirian"}, {name: "Equatorial Guinean"}, {name: "Eritrean"}, {name: "Estonian"}, {name: "Ethiopian"}, {name: "Fijian"}, {name: "Filipino"}, {name: "Finnish"}, {name: "French"}, {name: "Gabonese"}, {name: "Gambian"}, {name: "Georgian"}, {name: "German"}, {name: "Ghanaian"}, {name: "Greek"}, {name: "Grenadian"}, {name: "Guatemalan"}, {name: "Guinea-Bissauan"}, {name: "Guinean"}, {name: "Guyanese"}, {name: "Haitian"}, {name: "Herzegovinian"}, {name: "Honduran"}, {name: "Hungarian"}, {name: "I-Kiribati"}, {name: "Icelander"}, {name: "Indian"}, {name: "Indonesian"}, {name: "Iranian"}, {name: "Iraqi"}, {name: "Irish"}, {name: "Israeli"}, {name: "Italian"}, {name: "Ivorian"}, {name: "Jamaican"}, {name: "Japanese"}, {name: "Jordanian"}, {name: "Kazakhstani"}, {name: "Kenyan"}, {name: "Kittian and Nevisian"}, {name: "Kuwaiti"}, {name: "Kyrgyz"}, {name: "Laotian"}, {name: "Latvian"}, {name: "Lebanese"}, {name: "Liberian"}, {name: "Libyan"}, {name: "Liechtensteiner"}, {name: "Lithuanian"}, {name: "Luxembourger"}, {name: "Macedonian"}, {name: "Malagasy"}, {name: "Malawian"}, {name: "Malaysian"}, {name: "Maldivan"}, {name: "Malian"}, {name: "Maltese"}, {name: "Marshallese"}, {name: "Mauritanian"}, {name: "Mauritian"}, {name: "Mexican"}, {name: "Micronesian"}, {name: "Moldovan"}, {name: "Monacan"}, {name: "Mongolian"}, {name: "Moroccan"}, {name: "Mosotho"}, {name: "Motswana"}, {name: "Mozambican"}, {name: "Namibian"}, {name: "Nauruan"}, {name: "Nepalese"}, {name: "New Zealander"}, {name: "Nicaraguan"}, {name: "Nigerian"}, {name: "Nigerien"}, {name: "North Korean"}, {name: "Northern Irish"}, {name: "Norwegian"}, {name: "Omani"}, {name: "Pakistani"}, {name: "Palauan"}, {name: "Panamanian"}, {name: "Papua New Guinean"}, {name: "Paraguayan"}, {name: "Peruvian"}, {name: "Polish"}, {name: "Portuguese"}, {name: "Qatari"}, {name: "Romani"}, {name: "Russian"}, {name: "Rwandan"}, {name: "Saint Lucian"}, {name: "Salvadoran"}, {name: "Samoan"}, {name: "San Marinese"}, {name: "Sao Tomean"}, {name: "Saudi"}, {name: "Scottish"}, {name: "Senegalese"}, {name: "Serbian"}, {name: "Seychellois"}, {name: "Sierra Leonean"}, {name: "Singaporean"}, {name: "Slovakian"}, {name: "Slovenian"}, {name: "Solomon Islander"}, {name: "Somali"}, {name: "South African"}, {name: "South Korean"}, {name: "Spanish"}, {name: "Sri Lankan"}, {name: "Sudanese"}, {name: "Surinamer"}, {name: "Swazi"}, {name: "Swedish"}, {name: "Swiss"}, {name: "Syrian"}, {name: "Taiwanese"}, {name: "Tajik"}, {name: "Tanzanian"}, {name: "Thai"}, {name: "Togolese"}, {name: "Tongan"}, {name: "Trinidadian or Tobagonian"}, {name: "Tunisian"}, {name: "Turkish"}, {name: "Tuvaluan"}, {name: "Ugandan"}, {name: "Ukrainian"}, {name: "Uruguaya"}, {name: "Uzbekistani"}, {name: "Venezuela"}, {name: "Vietnamese"}, {name: "Wels"}, {name: "Yemenit"}, {name: "Zambia"}, {name: "Zimbabwe"}],
        us_states_and_dc: [{name: "Alabama", abbreviation: "AL"}, {
          name: "Alaska",
          abbreviation: "AK"
        }, {name: "Arizona", abbreviation: "AZ"}, {name: "Arkansas", abbreviation: "AR"}, {
          name: "California",
          abbreviation: "CA"
        }, {name: "Colorado", abbreviation: "CO"}, {name: "Connecticut", abbreviation: "CT"}, {
          name: "Delaware",
          abbreviation: "DE"
        }, {name: "District of Columbia", abbreviation: "DC"}, {name: "Florida", abbreviation: "FL"}, {
          name: "Georgia",
          abbreviation: "GA"
        }, {name: "Hawaii", abbreviation: "HI"}, {name: "Idaho", abbreviation: "ID"}, {
          name: "Illinois",
          abbreviation: "IL"
        }, {name: "Indiana", abbreviation: "IN"}, {name: "Iowa", abbreviation: "IA"}, {
          name: "Kansas",
          abbreviation: "KS"
        }, {name: "Kentucky", abbreviation: "KY"}, {name: "Louisiana", abbreviation: "LA"}, {
          name: "Maine",
          abbreviation: "ME"
        }, {name: "Maryland", abbreviation: "MD"}, {name: "Massachusetts", abbreviation: "MA"}, {
          name: "Michigan",
          abbreviation: "MI"
        }, {name: "Minnesota", abbreviation: "MN"}, {name: "Mississippi", abbreviation: "MS"}, {
          name: "Missouri",
          abbreviation: "MO"
        }, {name: "Montana", abbreviation: "MT"}, {name: "Nebraska", abbreviation: "NE"}, {
          name: "Nevada",
          abbreviation: "NV"
        }, {name: "New Hampshire", abbreviation: "NH"}, {name: "New Jersey", abbreviation: "NJ"}, {
          name: "New Mexico",
          abbreviation: "NM"
        }, {name: "New York", abbreviation: "NY"}, {name: "North Carolina", abbreviation: "NC"}, {
          name: "North Dakota",
          abbreviation: "ND"
        }, {name: "Ohio", abbreviation: "OH"}, {name: "Oklahoma", abbreviation: "OK"}, {
          name: "Oregon",
          abbreviation: "OR"
        }, {name: "Pennsylvania", abbreviation: "PA"}, {
          name: "Rhode Island",
          abbreviation: "RI"
        }, {name: "South Carolina", abbreviation: "SC"}, {name: "South Dakota", abbreviation: "SD"}, {
          name: "Tennessee",
          abbreviation: "TN"
        }, {name: "Texas", abbreviation: "TX"}, {name: "Utah", abbreviation: "UT"}, {
          name: "Vermont",
          abbreviation: "VT"
        }, {name: "Virginia", abbreviation: "VA"}, {name: "Washington", abbreviation: "WA"}, {
          name: "West Virginia",
          abbreviation: "WV"
        }, {name: "Wisconsin", abbreviation: "WI"}, {name: "Wyoming", abbreviation: "WY"}],
        territories: [{name: "American Samoa", abbreviation: "AS"}, {
          name: "Federated States of Micronesia",
          abbreviation: "FM"
        }, {name: "Guam", abbreviation: "GU"}, {
          name: "Marshall Islands",
          abbreviation: "MH"
        }, {name: "Northern Mariana Islands", abbreviation: "MP"}, {
          name: "Puerto Rico",
          abbreviation: "PR"
        }, {name: "Virgin Islands, U.S.", abbreviation: "VI"}],
        armed_forces: [{name: "Armed Forces Europe", abbreviation: "AE"}, {
          name: "Armed Forces Pacific",
          abbreviation: "AP"
        }, {name: "Armed Forces the Americas", abbreviation: "AA"}],
        country_regions: {
          it: [{name: "Valle d'Aosta", abbreviation: "VDA"}, {
            name: "Piemonte",
            abbreviation: "PIE"
          }, {name: "Lombardia", abbreviation: "LOM"}, {
            name: "Veneto",
            abbreviation: "VEN"
          }, {name: "Trentino Alto Adige", abbreviation: "TAA"}, {
            name: "Friuli Venezia Giulia",
            abbreviation: "FVG"
          }, {name: "Liguria", abbreviation: "LIG"}, {name: "Emilia Romagna", abbreviation: "EMR"}, {
            name: "Toscana",
            abbreviation: "TOS"
          }, {name: "Umbria", abbreviation: "UMB"}, {name: "Marche", abbreviation: "MAR"}, {
            name: "Abruzzo",
            abbreviation: "ABR"
          }, {name: "Lazio", abbreviation: "LAZ"}, {name: "Campania", abbreviation: "CAM"}, {
            name: "Puglia",
            abbreviation: "PUG"
          }, {name: "Basilicata", abbreviation: "BAS"}, {name: "Molise", abbreviation: "MOL"}, {
            name: "Calabria",
            abbreviation: "CAL"
          }, {name: "Sicilia", abbreviation: "SIC"}, {name: "Sardegna", abbreviation: "SAR"}]
        },
        street_suffixes: {
          us: [{name: "Avenue", abbreviation: "Ave"}, {
            name: "Boulevard",
            abbreviation: "Blvd"
          }, {name: "Center", abbreviation: "Ctr"}, {name: "Circle", abbreviation: "Cir"}, {
            name: "Court",
            abbreviation: "Ct"
          }, {name: "Drive", abbreviation: "Dr"}, {name: "Extension", abbreviation: "Ext"}, {
            name: "Glen",
            abbreviation: "Gln"
          }, {name: "Grove", abbreviation: "Grv"}, {name: "Heights", abbreviation: "Hts"}, {
            name: "Highway",
            abbreviation: "Hwy"
          }, {name: "Junction", abbreviation: "Jct"}, {name: "Key", abbreviation: "Key"}, {
            name: "Lane",
            abbreviation: "Ln"
          }, {name: "Loop", abbreviation: "Loop"}, {name: "Manor", abbreviation: "Mnr"}, {
            name: "Mill",
            abbreviation: "Mill"
          }, {name: "Park", abbreviation: "Park"}, {name: "Parkway", abbreviation: "Pkwy"}, {
            name: "Pass",
            abbreviation: "Pass"
          }, {name: "Path", abbreviation: "Path"}, {name: "Pike", abbreviation: "Pike"}, {
            name: "Place",
            abbreviation: "Pl"
          }, {name: "Plaza", abbreviation: "Plz"}, {name: "Point", abbreviation: "Pt"}, {
            name: "Ridge",
            abbreviation: "Rdg"
          }, {name: "River", abbreviation: "Riv"}, {name: "Road", abbreviation: "Rd"}, {
            name: "Square",
            abbreviation: "Sq"
          }, {name: "Street", abbreviation: "St"}, {name: "Terrace", abbreviation: "Ter"}, {
            name: "Trail",
            abbreviation: "Trl"
          }, {name: "Turnpike", abbreviation: "Tpke"}, {name: "View", abbreviation: "Vw"}, {
            name: "Way",
            abbreviation: "Way"
          }],
          it: [{name: "Accesso", abbreviation: "Acc."}, {name: "Alzaia", abbreviation: "Alz."}, {
            name: "Arco",
            abbreviation: "Arco"
          }, {name: "Archivolto", abbreviation: "Acv."}, {name: "Arena", abbreviation: "Arena"}, {
            name: "Argine",
            abbreviation: "Argine"
          }, {name: "Bacino", abbreviation: "Bacino"}, {name: "Banchi", abbreviation: "Banchi"}, {
            name: "Banchina",
            abbreviation: "Ban."
          }, {name: "Bastioni", abbreviation: "Bas."}, {name: "Belvedere", abbreviation: "Belv."}, {
            name: "Borgata",
            abbreviation: "B.ta"
          }, {name: "Borgo", abbreviation: "B.go"}, {name: "Calata", abbreviation: "Cal."}, {
            name: "Calle",
            abbreviation: "Calle"
          }, {name: "Campiello", abbreviation: "Cam."}, {name: "Campo", abbreviation: "Cam."}, {
            name: "Canale",
            abbreviation: "Can."
          }, {name: "Carraia", abbreviation: "Carr."}, {name: "Cascina", abbreviation: "Cascina"}, {
            name: "Case sparse",
            abbreviation: "c.s."
          }, {name: "Cavalcavia", abbreviation: "Cv."}, {
            name: "Circonvallazione",
            abbreviation: "Cv."
          }, {name: "Complanare", abbreviation: "C.re"}, {name: "Contrada", abbreviation: "C.da"}, {
            name: "Corso",
            abbreviation: "C.so"
          }, {name: "Corte", abbreviation: "C.te"}, {name: "Cortile", abbreviation: "C.le"}, {
            name: "Diramazione",
            abbreviation: "Dir."
          }, {name: "Fondaco", abbreviation: "F.co"}, {name: "Fondamenta", abbreviation: "F.ta"}, {
            name: "Fondo",
            abbreviation: "F.do"
          }, {name: "Frazione", abbreviation: "Fr."}, {name: "Isola", abbreviation: "Is."}, {
            name: "Largo",
            abbreviation: "L.go"
          }, {name: "Litoranea", abbreviation: "Lit."}, {
            name: "Lungolago",
            abbreviation: "L.go lago"
          }, {name: "Lungo Po", abbreviation: "l.go Po"}, {name: "Molo", abbreviation: "Molo"}, {
            name: "Mura",
            abbreviation: "Mura"
          }, {name: "Passaggio privato", abbreviation: "pass. priv."}, {
            name: "Passeggiata",
            abbreviation: "Pass."
          }, {name: "Piazza", abbreviation: "P.zza"}, {name: "Piazzale", abbreviation: "P.le"}, {
            name: "Ponte",
            abbreviation: "P.te"
          }, {name: "Portico", abbreviation: "P.co"}, {name: "Rampa", abbreviation: "Rampa"}, {
            name: "Regione",
            abbreviation: "Reg."
          }, {name: "Rione", abbreviation: "R.ne"}, {name: "Rio", abbreviation: "Rio"}, {
            name: "Ripa",
            abbreviation: "Ripa"
          }, {name: "Riva", abbreviation: "Riva"}, {name: "Rondò", abbreviation: "Rondò"}, {
            name: "Rotonda",
            abbreviation: "Rot."
          }, {name: "Sagrato", abbreviation: "Sagr."}, {name: "Salita", abbreviation: "Sal."}, {
            name: "Scalinata",
            abbreviation: "Scal."
          }, {name: "Scalone", abbreviation: "Scal."}, {name: "Slargo", abbreviation: "Sl."}, {
            name: "Sottoportico",
            abbreviation: "Sott."
          }, {name: "Strada", abbreviation: "Str."}, {name: "Stradale", abbreviation: "Str.le"}, {
            name: "Strettoia",
            abbreviation: "Strett."
          }, {name: "Traversa", abbreviation: "Trav."}, {name: "Via", abbreviation: "V."}, {
            name: "Viale",
            abbreviation: "V.le"
          }, {name: "Vicinale", abbreviation: "Vic.le"}, {name: "Vicolo", abbreviation: "Vic."}]
        },
        months: [{name: "January", short_name: "Jan", numeric: "01", days: 31}, {
          name: "February",
          short_name: "Feb",
          numeric: "02",
          days: 28
        }, {name: "March", short_name: "Mar", numeric: "03", days: 31}, {
          name: "April",
          short_name: "Apr",
          numeric: "04",
          days: 30
        }, {name: "May", short_name: "May", numeric: "05", days: 31}, {
          name: "June",
          short_name: "Jun",
          numeric: "06",
          days: 30
        }, {name: "July", short_name: "Jul", numeric: "07", days: 31}, {
          name: "August",
          short_name: "Aug",
          numeric: "08",
          days: 31
        }, {name: "September", short_name: "Sep", numeric: "09", days: 30}, {
          name: "October",
          short_name: "Oct",
          numeric: "10",
          days: 31
        }, {name: "November", short_name: "Nov", numeric: "11", days: 30}, {
          name: "December",
          short_name: "Dec",
          numeric: "12",
          days: 31
        }],
        cc_types: [{name: "American Express", short_name: "amex", prefix: "34", length: 15}, {
          name: "Bankcard",
          short_name: "bankcard",
          prefix: "5610",
          length: 16
        }, {
          name: "China UnionPay",
          short_name: "chinaunion",
          prefix: "62",
          length: 16
        }, {
          name: "Diners Club Carte Blanche",
          short_name: "dccarte",
          prefix: "300",
          length: 14
        }, {
          name: "Diners Club enRoute",
          short_name: "dcenroute",
          prefix: "2014",
          length: 15
        }, {
          name: "Diners Club International",
          short_name: "dcintl",
          prefix: "36",
          length: 14
        }, {
          name: "Diners Club United States & Canada",
          short_name: "dcusc",
          prefix: "54",
          length: 16
        }, {name: "Discover Card", short_name: "discover", prefix: "6011", length: 16}, {
          name: "InstaPayment",
          short_name: "instapay",
          prefix: "637",
          length: 16
        }, {name: "JCB", short_name: "jcb", prefix: "3528", length: 16}, {
          name: "Laser",
          short_name: "laser",
          prefix: "6304",
          length: 16
        }, {name: "Maestro", short_name: "maestro", prefix: "5018", length: 16}, {
          name: "Mastercard",
          short_name: "mc",
          prefix: "51",
          length: 16
        }, {name: "Solo", short_name: "solo", prefix: "6334", length: 16}, {
          name: "Switch",
          short_name: "switch",
          prefix: "4903",
          length: 16
        }, {name: "Visa", short_name: "visa", prefix: "4", length: 16}, {
          name: "Visa Electron",
          short_name: "electron",
          prefix: "4026",
          length: 16
        }],
        currency_types: [{code: "AED", name: "United Arab Emirates Dirham"}, {
          code: "AFN",
          name: "Afghanistan Afghani"
        }, {code: "ALL", name: "Albania Lek"}, {code: "AMD", name: "Armenia Dram"}, {
          code: "ANG",
          name: "Netherlands Antilles Guilder"
        }, {code: "AOA", name: "Angola Kwanza"}, {code: "ARS", name: "Argentina Peso"}, {
          code: "AUD",
          name: "Australia Dollar"
        }, {code: "AWG", name: "Aruba Guilder"}, {code: "AZN", name: "Azerbaijan New Manat"}, {
          code: "BAM",
          name: "Bosnia and Herzegovina Convertible Marka"
        }, {code: "BBD", name: "Barbados Dollar"}, {code: "BDT", name: "Bangladesh Taka"}, {
          code: "BGN",
          name: "Bulgaria Lev"
        }, {code: "BHD", name: "Bahrain Dinar"}, {code: "BIF", name: "Burundi Franc"}, {
          code: "BMD",
          name: "Bermuda Dollar"
        }, {code: "BND", name: "Brunei Darussalam Dollar"}, {code: "BOB", name: "Bolivia Boliviano"}, {
          code: "BRL",
          name: "Brazil Real"
        }, {code: "BSD", name: "Bahamas Dollar"}, {code: "BTN", name: "Bhutan Ngultrum"}, {
          code: "BWP",
          name: "Botswana Pula"
        }, {code: "BYR", name: "Belarus Ruble"}, {code: "BZD", name: "Belize Dollar"}, {
          code: "CAD",
          name: "Canada Dollar"
        }, {code: "CDF", name: "Congo/Kinshasa Franc"}, {code: "CHF", name: "Switzerland Franc"}, {
          code: "CLP",
          name: "Chile Peso"
        }, {code: "CNY", name: "China Yuan Renminbi"}, {code: "COP", name: "Colombia Peso"}, {
          code: "CRC",
          name: "Costa Rica Colon"
        }, {code: "CUC", name: "Cuba Convertible Peso"}, {code: "CUP", name: "Cuba Peso"}, {
          code: "CVE",
          name: "Cape Verde Escudo"
        }, {code: "CZK", name: "Czech Republic Koruna"}, {code: "DJF", name: "Djibouti Franc"}, {
          code: "DKK",
          name: "Denmark Krone"
        }, {code: "DOP", name: "Dominican Republic Peso"}, {code: "DZD", name: "Algeria Dinar"}, {
          code: "EGP",
          name: "Egypt Pound"
        }, {code: "ERN", name: "Eritrea Nakfa"}, {code: "ETB", name: "Ethiopia Birr"}, {
          code: "EUR",
          name: "Euro Member Countries"
        }, {code: "FJD", name: "Fiji Dollar"}, {code: "FKP", name: "Falkland Islands (Malvinas) Pound"}, {
          code: "GBP",
          name: "United Kingdom Pound"
        }, {code: "GEL", name: "Georgia Lari"}, {code: "GGP", name: "Guernsey Pound"}, {
          code: "GHS",
          name: "Ghana Cedi"
        }, {code: "GIP", name: "Gibraltar Pound"}, {code: "GMD", name: "Gambia Dalasi"}, {
          code: "GNF",
          name: "Guinea Franc"
        }, {code: "GTQ", name: "Guatemala Quetzal"}, {code: "GYD", name: "Guyana Dollar"}, {
          code: "HKD",
          name: "Hong Kong Dollar"
        }, {code: "HNL", name: "Honduras Lempira"}, {code: "HRK", name: "Croatia Kuna"}, {
          code: "HTG",
          name: "Haiti Gourde"
        }, {code: "HUF", name: "Hungary Forint"}, {code: "IDR", name: "Indonesia Rupiah"}, {
          code: "ILS",
          name: "Israel Shekel"
        }, {code: "IMP", name: "Isle of Man Pound"}, {code: "INR", name: "India Rupee"}, {
          code: "IQD",
          name: "Iraq Dinar"
        }, {code: "IRR", name: "Iran Rial"}, {code: "ISK", name: "Iceland Krona"}, {
          code: "JEP",
          name: "Jersey Pound"
        }, {code: "JMD", name: "Jamaica Dollar"}, {code: "JOD", name: "Jordan Dinar"}, {
          code: "JPY",
          name: "Japan Yen"
        }, {code: "KES", name: "Kenya Shilling"}, {code: "KGS", name: "Kyrgyzstan Som"}, {
          code: "KHR",
          name: "Cambodia Riel"
        }, {code: "KMF", name: "Comoros Franc"}, {code: "KPW", name: "Korea (North) Won"}, {
          code: "KRW",
          name: "Korea (South) Won"
        }, {code: "KWD", name: "Kuwait Dinar"}, {code: "KYD", name: "Cayman Islands Dollar"}, {
          code: "KZT",
          name: "Kazakhstan Tenge"
        }, {code: "LAK", name: "Laos Kip"}, {code: "LBP", name: "Lebanon Pound"}, {
          code: "LKR",
          name: "Sri Lanka Rupee"
        }, {code: "LRD", name: "Liberia Dollar"}, {code: "LSL", name: "Lesotho Loti"}, {
          code: "LTL",
          name: "Lithuania Litas"
        }, {code: "LYD", name: "Libya Dinar"}, {code: "MAD", name: "Morocco Dirham"}, {
          code: "MDL",
          name: "Moldova Leu"
        }, {code: "MGA", name: "Madagascar Ariary"}, {code: "MKD", name: "Macedonia Denar"}, {
          code: "MMK",
          name: "Myanmar (Burma) Kyat"
        }, {code: "MNT", name: "Mongolia Tughrik"}, {code: "MOP", name: "Macau Pataca"}, {
          code: "MRO",
          name: "Mauritania Ouguiya"
        }, {code: "MUR", name: "Mauritius Rupee"}, {
          code: "MVR",
          name: "Maldives (Maldive Islands) Rufiyaa"
        }, {code: "MWK", name: "Malawi Kwacha"}, {code: "MXN", name: "Mexico Peso"}, {
          code: "MYR",
          name: "Malaysia Ringgit"
        }, {code: "MZN", name: "Mozambique Metical"}, {code: "NAD", name: "Namibia Dollar"}, {
          code: "NGN",
          name: "Nigeria Naira"
        }, {code: "NIO", name: "Nicaragua Cordoba"}, {code: "NOK", name: "Norway Krone"}, {
          code: "NPR",
          name: "Nepal Rupee"
        }, {code: "NZD", name: "New Zealand Dollar"}, {code: "OMR", name: "Oman Rial"}, {
          code: "PAB",
          name: "Panama Balboa"
        }, {code: "PEN", name: "Peru Nuevo Sol"}, {code: "PGK", name: "Papua New Guinea Kina"}, {
          code: "PHP", name: "Philippines Peso"
        }, {code: "PKR", name: "Pakistan Rupee"}, {code: "PLN", name: "Poland Zloty"}, {
          code: "PYG",
          name: "Paraguay Guarani"
        }, {code: "QAR", name: "Qatar Riyal"}, {code: "RON", name: "Romania New Leu"}, {
          code: "RSD",
          name: "Serbia Dinar"
        }, {code: "RUB", name: "Russia Ruble"}, {code: "RWF", name: "Rwanda Franc"}, {
          code: "SAR",
          name: "Saudi Arabia Riyal"
        }, {code: "SBD", name: "Solomon Islands Dollar"}, {code: "SCR", name: "Seychelles Rupee"}, {
          code: "SDG",
          name: "Sudan Pound"
        }, {code: "SEK", name: "Sweden Krona"}, {code: "SGD", name: "Singapore Dollar"}, {
          code: "SHP",
          name: "Saint Helena Pound"
        }, {code: "SLL", name: "Sierra Leone Leone"}, {code: "SOS", name: "Somalia Shilling"}, {
          code: "SPL",
          name: "Seborga Luigino"
        }, {code: "SRD", name: "Suriname Dollar"}, {code: "STD", name: "São Tomé and Príncipe Dobra"}, {
          code: "SVC",
          name: "El Salvador Colon"
        }, {code: "SYP", name: "Syria Pound"}, {code: "SZL", name: "Swaziland Lilangeni"}, {
          code: "THB",
          name: "Thailand Baht"
        }, {code: "TJS", name: "Tajikistan Somoni"}, {code: "TMT", name: "Turkmenistan Manat"}, {
          code: "TND",
          name: "Tunisia Dinar"
        }, {code: "TOP", name: "Tonga Pa'anga"}, {code: "TRY", name: "Turkey Lira"}, {
          code: "TTD",
          name: "Trinidad and Tobago Dollar"
        }, {code: "TVD", name: "Tuvalu Dollar"}, {code: "TWD", name: "Taiwan New Dollar"}, {
          code: "TZS",
          name: "Tanzania Shilling"
        }, {code: "UAH", name: "Ukraine Hryvnia"}, {code: "UGX", name: "Uganda Shilling"}, {
          code: "USD",
          name: "United States Dollar"
        }, {code: "UYU", name: "Uruguay Peso"}, {code: "UZS", name: "Uzbekistan Som"}, {
          code: "VEF",
          name: "Venezuela Bolivar"
        }, {code: "VND", name: "Viet Nam Dong"}, {code: "VUV", name: "Vanuatu Vatu"}, {
          code: "WST",
          name: "Samoa Tala"
        }, {code: "XAF", name: "Communauté Financière Africaine (BEAC) CFA Franc BEAC"}, {
          code: "XCD",
          name: "East Caribbean Dollar"
        }, {code: "XDR", name: "International Monetary Fund (IMF) Special Drawing Rights"}, {
          code: "XOF",
          name: "Communauté Financière Africaine (BCEAO) Franc"
        }, {code: "XPF", name: "Comptoirs Français du Pacifique (CFP) Franc"}, {
          code: "YER",
          name: "Yemen Rial"
        }, {code: "ZAR", name: "South Africa Rand"}, {code: "ZMW", name: "Zambia Kwacha"}, {
          code: "ZWD",
          name: "Zimbabwe Dollar"
        }],
        colorNames: ["AliceBlue", "Black", "Navy", "DarkBlue", "MediumBlue", "Blue", "DarkGreen", "Green", "Teal", "DarkCyan", "DeepSkyBlue", "DarkTurquoise", "MediumSpringGreen", "Lime", "SpringGreen", "Aqua", "Cyan", "MidnightBlue", "DodgerBlue", "LightSeaGreen", "ForestGreen", "SeaGreen", "DarkSlateGray", "LimeGreen", "MediumSeaGreen", "Turquoise", "RoyalBlue", "SteelBlue", "DarkSlateBlue", "MediumTurquoise", "Indigo", "DarkOliveGreen", "CadetBlue", "CornflowerBlue", "RebeccaPurple", "MediumAquaMarine", "DimGray", "SlateBlue", "OliveDrab", "SlateGray", "LightSlateGray", "MediumSlateBlue", "LawnGreen", "Chartreuse", "Aquamarine", "Maroon", "Purple", "Olive", "Gray", "SkyBlue", "LightSkyBlue", "BlueViolet", "DarkRed", "DarkMagenta", "SaddleBrown", "Ivory", "White", "DarkSeaGreen", "LightGreen", "MediumPurple", "DarkViolet", "PaleGreen", "DarkOrchid", "YellowGreen", "Sienna", "Brown", "DarkGray", "LightBlue", "GreenYellow", "PaleTurquoise", "LightSteelBlue", "PowderBlue", "FireBrick", "DarkGoldenRod", "MediumOrchid", "RosyBrown", "DarkKhaki", "Silver", "MediumVioletRed", "IndianRed", "Peru", "Chocolate", "Tan", "LightGray", "Thistle", "Orchid", "GoldenRod", "PaleVioletRed", "Crimson", "Gainsboro", "Plum", "BurlyWood", "LightCyan", "Lavender", "DarkSalmon", "Violet", "PaleGoldenRod", "LightCoral", "Khaki", "AliceBlue", "HoneyDew", "Azure", "SandyBrown", "Wheat", "Beige", "WhiteSmoke", "MintCream", "GhostWhite", "Salmon", "AntiqueWhite", "Linen", "LightGoldenRodYellow", "OldLace", "Red", "Fuchsia", "Magenta", "DeepPink", "OrangeRed", "Tomato", "HotPink", "Coral", "DarkOrange", "LightSalmon", "Orange", "LightPink", "Pink", "Gold", "PeachPuff", "NavajoWhite", "Moccasin", "Bisque", "MistyRose", "BlanchedAlmond", "PapayaWhip", "LavenderBlush", "SeaShell", "Cornsilk", "LemonChiffon", "FloralWhite", "Snow", "Yellow", "LightYellow"],
        fileExtension: {
          raster: ["bmp", "gif", "gpl", "ico", "jpeg", "psd", "png", "psp", "raw", "tiff"],
          vector: ["3dv", "amf", "awg", "ai", "cgm", "cdr", "cmx", "dxf", "e2d", "egt", "eps", "fs", "odg", "svg", "xar"],
          "3d": ["3dmf", "3dm", "3mf", "3ds", "an8", "aoi", "blend", "cal3d", "cob", "ctm", "iob", "jas", "max", "mb", "mdx", "obj", "x", "x3d"],
          document: ["doc", "docx", "dot", "html", "xml", "odt", "odm", "ott", "csv", "rtf", "tex", "xhtml", "xps"]
        }
      }, x = Object.prototype.hasOwnProperty, w = Object.keys || function (e) {
        var t = [];
        for (var n in e) x.call(e, n) && t.push(n);
        return t
      };
      a.prototype.get = function (e) {
        return u(y[e])
      }, a.prototype.mac_address = function (e) {
        e = r(e), e.separator || (e.separator = e.networkVersion ? "." : ":");
        var t = "ABCDEF1234567890", n = "";
        return n = e.networkVersion ? this.n(this.string, 3, {
          pool: t,
          length: 4
        }).join(e.separator) : this.n(this.string, 6, {pool: t, length: 2}).join(e.separator)
      }, a.prototype.normal = function (e) {
        if (e = r(e, {
            mean: 0,
            dev: 1,
            pool: []
          }), o(e.pool.constructor !== Array, "Chance: The pool option must be a valid array."), e.pool.length > 0) return this.normal_pool(e);
        var t, n, i, a, s = e.mean, l = e.dev;
        do n = 2 * this.random() - 1, i = 2 * this.random() - 1, t = n * n + i * i; while (t >= 1);
        return a = n * Math.sqrt(-2 * Math.log(t) / t), l * a + s
      }, a.prototype.normal_pool = function (e) {
        var t = 0;
        do {
          var n = Math.round(this.normal({mean: e.mean, dev: e.dev}));
          if (n < e.pool.length && n >= 0) return e.pool[n];
          t++
        } while (100 > t);
        throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.")
      }, a.prototype.radio = function (e) {
        e = r(e, {side: "?"});
        var t = "";
        switch (e.side.toLowerCase()) {
          case"east":
          case"e":
            t = "W";
            break;
          case"west":
          case"w":
            t = "K";
            break;
          default:
            t = this.character({pool: "KW"})
        }
        return t + this.character({alpha: !0, casing: "upper"}) + this.character({
          alpha: !0,
          casing: "upper"
        }) + this.character({alpha: !0, casing: "upper"})
      }, a.prototype.set = function (e, t) {
        "string" == typeof e ? y[e] = t : y = u(e, y)
      }, a.prototype.tv = function (e) {
        return this.radio(e)
      }, a.prototype.cnpj = function () {
        var e = this.n(this.natural, 8, {max: 9}),
          t = 2 + 6 * e[7] + 7 * e[6] + 8 * e[5] + 9 * e[4] + 2 * e[3] + 3 * e[2] + 4 * e[1] + 5 * e[0];
        t = 11 - t % 11, t >= 10 && (t = 0);
        var n = 2 * t + 3 + 7 * e[7] + 8 * e[6] + 9 * e[5] + 2 * e[4] + 3 * e[3] + 4 * e[2] + 5 * e[1] + 6 * e[0];
        return n = 11 - n % 11, n >= 10 && (n = 0), "" + e[0] + e[1] + "." + e[2] + e[3] + e[4] + "." + e[5] + e[6] + e[7] + "/0001-" + t + n
      }, a.prototype.mersenne_twister = function (e) {
        return new C(e)
      }, a.prototype.blueimp_md5 = function () {
        return new S
      };
      var C = function (e) {
        void 0 === e && (e = Math.floor(Math.random() * Math.pow(10, 13))), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, this.init_genrand(e)
      };
      C.prototype.init_genrand = function (e) {
        for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++) e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (1812433253 * ((4294901760 & e) >>> 16) << 16) + 1812433253 * (65535 & e) + this.mti, this.mt[this.mti] >>>= 0
      }, C.prototype.init_by_array = function (e, t) {
        var n, i, a = 1, r = 0;
        for (this.init_genrand(19650218), n = this.N > t ? this.N : t; n; n--) i = this.mt[a - 1] ^ this.mt[a - 1] >>> 30, this.mt[a] = (this.mt[a] ^ (1664525 * ((4294901760 & i) >>> 16) << 16) + 1664525 * (65535 & i)) + e[r] + r, this.mt[a] >>>= 0, a++, r++, a >= this.N && (this.mt[0] = this.mt[this.N - 1], a = 1), r >= t && (r = 0);
        for (n = this.N - 1; n; n--) i = this.mt[a - 1] ^ this.mt[a - 1] >>> 30, this.mt[a] = (this.mt[a] ^ (1566083941 * ((4294901760 & i) >>> 16) << 16) + 1566083941 * (65535 & i)) - a, this.mt[a] >>>= 0, a++, a >= this.N && (this.mt[0] = this.mt[this.N - 1], a = 1);
        this.mt[0] = 2147483648
      }, C.prototype.genrand_int32 = function () {
        var e, t = [0, this.MATRIX_A];
        if (this.mti >= this.N) {
          var n;
          for (this.mti === this.N + 1 && this.init_genrand(5489), n = 0; n < this.N - this.M; n++) e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + this.M] ^ e >>> 1 ^ t[1 & e];
          for (; n < this.N - 1; n++) e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + (this.M - this.N)] ^ e >>> 1 ^ t[1 & e];
          e = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ e >>> 1 ^ t[1 & e], this.mti = 0
        }
        return e = this.mt[this.mti++], e ^= e >>> 11, e ^= e << 7 & 2636928640, e ^= e << 15 & 4022730752, e ^= e >>> 18, e >>> 0
      }, C.prototype.genrand_int31 = function () {
        return this.genrand_int32() >>> 1
      }, C.prototype.genrand_real1 = function () {
        return this.genrand_int32() * (1 / 4294967295)
      }, C.prototype.random = function () {
        return this.genrand_int32() * (1 / 4294967296)
      }, C.prototype.genrand_real3 = function () {
        return (this.genrand_int32() + .5) * (1 / 4294967296)
      }, C.prototype.genrand_res53 = function () {
        var e = this.genrand_int32() >>> 5, t = this.genrand_int32() >>> 6;
        return (67108864 * e + t) * (1 / 9007199254740992)
      };
      var S = function () {
      };
      S.prototype.VERSION = "1.0.1", S.prototype.safe_add = function (e, t) {
        var n = (65535 & e) + (65535 & t), i = (e >> 16) + (t >> 16) + (n >> 16);
        return i << 16 | 65535 & n
      }, S.prototype.bit_roll = function (e, t) {
        return e << t | e >>> 32 - t
      }, S.prototype.md5_cmn = function (e, t, n, i, a, r) {
        return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(t, e), this.safe_add(i, r)), a), n)
      }, S.prototype.md5_ff = function (e, t, n, i, a, r, o) {
        return this.md5_cmn(t & n | ~t & i, e, t, a, r, o)
      }, S.prototype.md5_gg = function (e, t, n, i, a, r, o) {
        return this.md5_cmn(t & i | n & ~i, e, t, a, r, o)
      }, S.prototype.md5_hh = function (e, t, n, i, a, r, o) {
        return this.md5_cmn(t ^ n ^ i, e, t, a, r, o)
      }, S.prototype.md5_ii = function (e, t, n, i, a, r, o) {
        return this.md5_cmn(n ^ (t | ~i), e, t, a, r, o)
      }, S.prototype.binl_md5 = function (e, t) {
        e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
        var n, i, a, r, o, s = 1732584193, l = -271733879, c = -1732584194, u = 271733878;
        for (n = 0; n < e.length; n += 16) i = s, a = l, r = c, o = u, s = this.md5_ff(s, l, c, u, e[n], 7, -680876936), u = this.md5_ff(u, s, l, c, e[n + 1], 12, -389564586), c = this.md5_ff(c, u, s, l, e[n + 2], 17, 606105819), l = this.md5_ff(l, c, u, s, e[n + 3], 22, -1044525330), s = this.md5_ff(s, l, c, u, e[n + 4], 7, -176418897), u = this.md5_ff(u, s, l, c, e[n + 5], 12, 1200080426), c = this.md5_ff(c, u, s, l, e[n + 6], 17, -1473231341), l = this.md5_ff(l, c, u, s, e[n + 7], 22, -45705983), s = this.md5_ff(s, l, c, u, e[n + 8], 7, 1770035416), u = this.md5_ff(u, s, l, c, e[n + 9], 12, -1958414417), c = this.md5_ff(c, u, s, l, e[n + 10], 17, -42063), l = this.md5_ff(l, c, u, s, e[n + 11], 22, -1990404162), s = this.md5_ff(s, l, c, u, e[n + 12], 7, 1804603682), u = this.md5_ff(u, s, l, c, e[n + 13], 12, -40341101), c = this.md5_ff(c, u, s, l, e[n + 14], 17, -1502002290), l = this.md5_ff(l, c, u, s, e[n + 15], 22, 1236535329), s = this.md5_gg(s, l, c, u, e[n + 1], 5, -165796510), u = this.md5_gg(u, s, l, c, e[n + 6], 9, -1069501632), c = this.md5_gg(c, u, s, l, e[n + 11], 14, 643717713), l = this.md5_gg(l, c, u, s, e[n], 20, -373897302), s = this.md5_gg(s, l, c, u, e[n + 5], 5, -701558691), u = this.md5_gg(u, s, l, c, e[n + 10], 9, 38016083), c = this.md5_gg(c, u, s, l, e[n + 15], 14, -660478335), l = this.md5_gg(l, c, u, s, e[n + 4], 20, -405537848), s = this.md5_gg(s, l, c, u, e[n + 9], 5, 568446438), u = this.md5_gg(u, s, l, c, e[n + 14], 9, -1019803690), c = this.md5_gg(c, u, s, l, e[n + 3], 14, -187363961), l = this.md5_gg(l, c, u, s, e[n + 8], 20, 1163531501), s = this.md5_gg(s, l, c, u, e[n + 13], 5, -1444681467), u = this.md5_gg(u, s, l, c, e[n + 2], 9, -51403784), c = this.md5_gg(c, u, s, l, e[n + 7], 14, 1735328473), l = this.md5_gg(l, c, u, s, e[n + 12], 20, -1926607734), s = this.md5_hh(s, l, c, u, e[n + 5], 4, -378558), u = this.md5_hh(u, s, l, c, e[n + 8], 11, -2022574463), c = this.md5_hh(c, u, s, l, e[n + 11], 16, 1839030562), l = this.md5_hh(l, c, u, s, e[n + 14], 23, -35309556), s = this.md5_hh(s, l, c, u, e[n + 1], 4, -1530992060), u = this.md5_hh(u, s, l, c, e[n + 4], 11, 1272893353), c = this.md5_hh(c, u, s, l, e[n + 7], 16, -155497632), l = this.md5_hh(l, c, u, s, e[n + 10], 23, -1094730640), s = this.md5_hh(s, l, c, u, e[n + 13], 4, 681279174), u = this.md5_hh(u, s, l, c, e[n], 11, -358537222), c = this.md5_hh(c, u, s, l, e[n + 3], 16, -722521979), l = this.md5_hh(l, c, u, s, e[n + 6], 23, 76029189), s = this.md5_hh(s, l, c, u, e[n + 9], 4, -640364487), u = this.md5_hh(u, s, l, c, e[n + 12], 11, -421815835), c = this.md5_hh(c, u, s, l, e[n + 15], 16, 530742520), l = this.md5_hh(l, c, u, s, e[n + 2], 23, -995338651), s = this.md5_ii(s, l, c, u, e[n], 6, -198630844), u = this.md5_ii(u, s, l, c, e[n + 7], 10, 1126891415), c = this.md5_ii(c, u, s, l, e[n + 14], 15, -1416354905), l = this.md5_ii(l, c, u, s, e[n + 5], 21, -57434055), s = this.md5_ii(s, l, c, u, e[n + 12], 6, 1700485571), u = this.md5_ii(u, s, l, c, e[n + 3], 10, -1894986606), c = this.md5_ii(c, u, s, l, e[n + 10], 15, -1051523), l = this.md5_ii(l, c, u, s, e[n + 1], 21, -2054922799), s = this.md5_ii(s, l, c, u, e[n + 8], 6, 1873313359), u = this.md5_ii(u, s, l, c, e[n + 15], 10, -30611744), c = this.md5_ii(c, u, s, l, e[n + 6], 15, -1560198380), l = this.md5_ii(l, c, u, s, e[n + 13], 21, 1309151649), s = this.md5_ii(s, l, c, u, e[n + 4], 6, -145523070), u = this.md5_ii(u, s, l, c, e[n + 11], 10, -1120210379), c = this.md5_ii(c, u, s, l, e[n + 2], 15, 718787259), l = this.md5_ii(l, c, u, s, e[n + 9], 21, -343485551), s = this.safe_add(s, i), l = this.safe_add(l, a), c = this.safe_add(c, r), u = this.safe_add(u, o);
        return [s, l, c, u]
      }, S.prototype.binl2rstr = function (e) {
        var t, n = "";
        for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
      }, S.prototype.rstr2binl = function (e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
        for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
      }, S.prototype.rstr_md5 = function (e) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length))
      }, S.prototype.rstr_hmac_md5 = function (e, t) {
        var n, i, a = this.rstr2binl(e), r = [], o = [];
        for (r[15] = o[15] = void 0, a.length > 16 && (a = this.binl_md5(a, 8 * e.length)), n = 0; 16 > n; n += 1) r[n] = 909522486 ^ a[n], o[n] = 1549556828 ^ a[n];
        return i = this.binl_md5(r.concat(this.rstr2binl(t)), 512 + 8 * t.length), this.binl2rstr(this.binl_md5(o.concat(i), 640))
      }, S.prototype.rstr2hex = function (e) {
        var t, n, i = "0123456789abcdef", a = "";
        for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), a += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
        return a
      }, S.prototype.str2rstr_utf8 = function (e) {
        return unescape(encodeURIComponent(e))
      }, S.prototype.raw_md5 = function (e) {
        return this.rstr_md5(this.str2rstr_utf8(e))
      }, S.prototype.hex_md5 = function (e) {
        return this.rstr2hex(this.raw_md5(e))
      }, S.prototype.raw_hmac_md5 = function (e, t) {
        return this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t))
      }, S.prototype.hex_hmac_md5 = function (e, t) {
        return this.rstr2hex(this.raw_hmac_md5(e, t))
      }, S.prototype.md5 = function (e, t, n) {
        return t ? n ? this.raw_hmac_md5(t, e) : this.hex_hmac_md5(t, e) : n ? this.raw_md5(e) : this.hex_md5(e)
      }, "undefined" != typeof e && e.exports && (t = e.exports = a), t.Chance = a, "function" == typeof i && i.amd && i([], function () {
        return a
      }), "undefined" != typeof importScripts && (chance = new a), "object" == typeof window && "object" == typeof window.document && (window.Chance = a, window.chance = new a)
    }()
  }).call(t, n(9).Buffer)
}, function (e, t, n) {
  (function (e, i) {
    function a() {
      function e() {
      }

      try {
        var t = new Uint8Array(1);
        return t.foo = function () {
          return 42
        }, t.constructor = e, 42 === t.foo() && t.constructor === e && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
      } catch (n) {
        return !1
      }
    }

    function r() {
      return e.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
    }

    function e(t) {
      return this instanceof e ? (e.TYPED_ARRAY_SUPPORT || (this.length = 0, this.parent = void 0), "number" == typeof t ? o(this, t) : "string" == typeof t ? s(this, t, arguments.length > 1 ? arguments[1] : "utf8") : l(this, t)) : arguments.length > 1 ? new e(t, arguments[1]) : new e(t)
    }

    function o(t, n) {
      if (t = m(t, 0 > n ? 0 : 0 | g(n)), !e.TYPED_ARRAY_SUPPORT) for (var i = 0; n > i; i++) t[i] = 0;
      return t
    }

    function s(e, t, n) {
      "string" == typeof n && "" !== n || (n = "utf8");
      var i = 0 | b(t, n);
      return e = m(e, i), e.write(t, n), e
    }

    function l(t, n) {
      if (e.isBuffer(n)) return c(t, n);
      if (X(n)) return u(t, n);
      if (null == n) throw new TypeError("must start with number, buffer, array or string");
      if ("undefined" != typeof ArrayBuffer) {
        if (n.buffer instanceof ArrayBuffer) return d(t, n);
        if (n instanceof ArrayBuffer) return f(t, n)
      }
      return n.length ? h(t, n) : p(t, n)
    }

    function c(e, t) {
      var n = 0 | g(t.length);
      return e = m(e, n), t.copy(e, 0, 0, n), e
    }

    function u(e, t) {
      var n = 0 | g(t.length);
      e = m(e, n);
      for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
      return e
    }

    function d(e, t) {
      var n = 0 | g(t.length);
      e = m(e, n);
      for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
      return e
    }

    function f(t, n) {
      return e.TYPED_ARRAY_SUPPORT ? (n.byteLength, t = e._augment(new Uint8Array(n))) : t = d(t, new Uint8Array(n)), t
    }

    function h(e, t) {
      var n = 0 | g(t.length);
      e = m(e, n);
      for (var i = 0; n > i; i += 1) e[i] = 255 & t[i];
      return e
    }

    function p(e, t) {
      var n, i = 0;
      "Buffer" === t.type && X(t.data) && (n = t.data, i = 0 | g(n.length)), e = m(e, i);
      for (var a = 0; i > a; a += 1) e[a] = 255 & n[a];
      return e
    }

    function m(t, n) {
      e.TYPED_ARRAY_SUPPORT ? (t = e._augment(new Uint8Array(n)), t.__proto__ = e.prototype) : (t.length = n, t._isBuffer = !0);
      var i = 0 !== n && n <= e.poolSize >>> 1;
      return i && (t.parent = $), t
    }

    function g(e) {
      if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
      return 0 | e
    }

    function v(t, n) {
      if (!(this instanceof v)) return new v(t, n);
      var i = new e(t, n);
      return delete i.parent, i
    }

    function b(e, t) {
      "string" != typeof e && (e = "" + e);
      var n = e.length;
      if (0 === n) return 0;
      for (var i = !1; ;) switch (t) {
        case"ascii":
        case"binary":
        case"raw":
        case"raws":
          return n;
        case"utf8":
        case"utf-8":
          return V(e).length;
        case"ucs2":
        case"ucs-2":
        case"utf16le":
        case"utf-16le":
          return 2 * n;
        case"hex":
          return n >>> 1;
        case"base64":
          return W(e).length;
        default:
          if (i) return V(e).length;
          t = ("" + t).toLowerCase(), i = !0
      }
    }

    function y(e, t, n) {
      var i = !1;
      if (t = 0 | t, n = void 0 === n || n === 1 / 0 ? this.length : 0 | n, e || (e = "utf8"), 0 > t && (t = 0), n > this.length && (n = this.length), t >= n) return "";
      for (; ;) switch (e) {
        case"hex":
          return L(this, t, n);
        case"utf8":
        case"utf-8":
          return T(this, t, n);
        case"ascii":
          return E(this, t, n);
        case"binary":
          return P(this, t, n);
        case"base64":
          return B(this, t, n);
        case"ucs2":
        case"ucs-2":
        case"utf16le":
        case"utf-16le":
          return _(this, t, n);
        default:
          if (i) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), i = !0
      }
    }

    function x(e, t, n, i) {
      n = Number(n) || 0;
      var a = e.length - n;
      i ? (i = Number(i), i > a && (i = a)) : i = a;
      var r = t.length;
      if (r % 2 !== 0) throw new Error("Invalid hex string");
      i > r / 2 && (i = r / 2);
      for (var o = 0; i > o; o++) {
        var s = parseInt(t.substr(2 * o, 2), 16);
        if (isNaN(s)) throw new Error("Invalid hex string");
        e[n + o] = s
      }
      return o
    }

    function w(e, t, n, i) {
      return Y(V(t, e.length - n), e, n, i)
    }

    function C(e, t, n, i) {
      return Y(U(t), e, n, i)
    }

    function S(e, t, n, i) {
      return C(e, t, n, i)
    }

    function M(e, t, n, i) {
      return Y(W(t), e, n, i)
    }

    function A(e, t, n, i) {
      return Y(q(t, e.length - n), e, n, i)
    }

    function B(e, t, n) {
      return 0 === t && n === e.length ? K.fromByteArray(e) : K.fromByteArray(e.slice(t, n))
    }

    function T(e, t, n) {
      n = Math.min(e.length, n);
      for (var i = [], a = t; n > a;) {
        var r = e[a], o = null, s = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
        if (n >= a + s) {
          var l, c, u, d;
          switch (s) {
            case 1:
              128 > r && (o = r);
              break;
            case 2:
              l = e[a + 1], 128 === (192 & l) && (d = (31 & r) << 6 | 63 & l, d > 127 && (o = d));
              break;
            case 3:
              l = e[a + 1], c = e[a + 2], 128 === (192 & l) && 128 === (192 & c) && (d = (15 & r) << 12 | (63 & l) << 6 | 63 & c, d > 2047 && (55296 > d || d > 57343) && (o = d));
              break;
            case 4:
              l = e[a + 1], c = e[a + 2], u = e[a + 3], 128 === (192 & l) && 128 === (192 & c) && 128 === (192 & u) && (d = (15 & r) << 18 | (63 & l) << 12 | (63 & c) << 6 | 63 & u, d > 65535 && 1114112 > d && (o = d))
          }
        }
        null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), a += s
      }
      return k(i)
    }

    function k(e) {
      var t = e.length;
      if (Z >= t) return String.fromCharCode.apply(String, e);
      for (var n = "", i = 0; t > i;) n += String.fromCharCode.apply(String, e.slice(i, i += Z));
      return n
    }

    function E(e, t, n) {
      var i = "";
      n = Math.min(e.length, n);
      for (var a = t; n > a; a++) i += String.fromCharCode(127 & e[a]);
      return i
    }

    function P(e, t, n) {
      var i = "";
      n = Math.min(e.length, n);
      for (var a = t; n > a; a++) i += String.fromCharCode(e[a]);
      return i
    }

    function L(e, t, n) {
      var i = e.length;
      (!t || 0 > t) && (t = 0), (!n || 0 > n || n > i) && (n = i);
      for (var a = "", r = t; n > r; r++) a += H(e[r]);
      return a
    }

    function _(e, t, n) {
      for (var i = e.slice(t, n), a = "", r = 0; r < i.length; r += 2) a += String.fromCharCode(i[r] + 256 * i[r + 1]);
      return a
    }

    function R(e, t, n) {
      if (e % 1 !== 0 || 0 > e) throw new RangeError("offset is not uint");
      if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
    }

    function D(t, n, i, a, r, o) {
      if (!e.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
      if (n > r || o > n) throw new RangeError("value is out of bounds");
      if (i + a > t.length) throw new RangeError("index out of range")
    }

    function N(e, t, n, i) {
      0 > t && (t = 65535 + t + 1);
      for (var a = 0, r = Math.min(e.length - n, 2); r > a; a++) e[n + a] = (t & 255 << 8 * (i ? a : 1 - a)) >>> 8 * (i ? a : 1 - a)
    }

    function F(e, t, n, i) {
      0 > t && (t = 4294967295 + t + 1);
      for (var a = 0, r = Math.min(e.length - n, 4); r > a; a++) e[n + a] = t >>> 8 * (i ? a : 3 - a) & 255
    }

    function I(e, t, n, i, a, r) {
      if (t > a || r > t) throw new RangeError("value is out of bounds");
      if (n + i > e.length) throw new RangeError("index out of range");
      if (0 > n) throw new RangeError("index out of range")
    }

    function G(e, t, n, i, a) {
      return a || I(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), J.write(e, t, n, i, 23, 4), n + 4
    }

    function z(e, t, n, i, a) {
      return a || I(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), J.write(e, t, n, i, 52, 8), n + 8
    }

    function O(e) {
      if (e = j(e).replace(ee, ""), e.length < 2) return "";
      for (; e.length % 4 !== 0;) e += "=";
      return e
    }

    function j(e) {
      return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
    }

    function H(e) {
      return 16 > e ? "0" + e.toString(16) : e.toString(16)
    }

    function V(e, t) {
      t = t || 1 / 0;
      for (var n, i = e.length, a = null, r = [], o = 0; i > o; o++) {
        if (n = e.charCodeAt(o), n > 55295 && 57344 > n) {
          if (!a) {
            if (n > 56319) {
              (t -= 3) > -1 && r.push(239, 191, 189);
              continue
            }
            if (o + 1 === i) {
              (t -= 3) > -1 && r.push(239, 191, 189);
              continue
            }
            a = n;
            continue
          }
          if (56320 > n) {
            (t -= 3) > -1 && r.push(239, 191, 189), a = n;
            continue
          }
          n = (a - 55296 << 10 | n - 56320) + 65536
        } else a && (t -= 3) > -1 && r.push(239, 191, 189);
        if (a = null, 128 > n) {
          if ((t -= 1) < 0) break;
          r.push(n)
        } else if (2048 > n) {
          if ((t -= 2) < 0) break;
          r.push(n >> 6 | 192, 63 & n | 128)
        } else if (65536 > n) {
          if ((t -= 3) < 0) break;
          r.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
        } else {
          if (!(1114112 > n)) throw new Error("Invalid code point");
          if ((t -= 4) < 0) break;
          r.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
        }
      }
      return r
    }

    function U(e) {
      for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
      return t
    }

    function q(e, t) {
      for (var n, i, a, r = [], o = 0; o < e.length && !((t -= 2) < 0); o++) n = e.charCodeAt(o), i = n >> 8, a = n % 256, r.push(a), r.push(i);
      return r
    }

    function W(e) {
      return K.toByteArray(O(e))
    }

    function Y(e, t, n, i) {
      for (var a = 0; i > a && !(a + n >= t.length || a >= e.length); a++) t[a + n] = e[a];
      return a
    }

    var K = n(10), J = n(11), X = n(12);
    t.Buffer = e, t.SlowBuffer = v, t.INSPECT_MAX_BYTES = 50, e.poolSize = 8192;
    var $ = {};
    e.TYPED_ARRAY_SUPPORT = void 0 !== i.TYPED_ARRAY_SUPPORT ? i.TYPED_ARRAY_SUPPORT : a(), e.TYPED_ARRAY_SUPPORT ? (e.prototype.__proto__ = Uint8Array.prototype, e.__proto__ = Uint8Array) : (e.prototype.length = void 0, e.prototype.parent = void 0), e.isBuffer = function (e) {
      return !(null == e || !e._isBuffer)
    }, e.compare = function (t, n) {
      if (!e.isBuffer(t) || !e.isBuffer(n)) throw new TypeError("Arguments must be Buffers");
      if (t === n) return 0;
      for (var i = t.length, a = n.length, r = 0, o = Math.min(i, a); o > r && t[r] === n[r];) ++r;
      return r !== o && (i = t[r], a = n[r]), a > i ? -1 : i > a ? 1 : 0
    }, e.isEncoding = function (e) {
      switch (String(e).toLowerCase()) {
        case"hex":
        case"utf8":
        case"utf-8":
        case"ascii":
        case"binary":
        case"base64":
        case"raw":
        case"ucs2":
        case"ucs-2":
        case"utf16le":
        case"utf-16le":
          return !0;
        default:
          return !1
      }
    }, e.concat = function (t, n) {
      if (!X(t)) throw new TypeError("list argument must be an Array of Buffers.");
      if (0 === t.length) return new e(0);
      var i;
      if (void 0 === n) for (n = 0, i = 0; i < t.length; i++) n += t[i].length;
      var a = new e(n), r = 0;
      for (i = 0; i < t.length; i++) {
        var o = t[i];
        o.copy(a, r), r += o.length
      }
      return a
    }, e.byteLength = b, e.prototype.toString = function () {
      var e = 0 | this.length;
      return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : y.apply(this, arguments)
    }, e.prototype.equals = function (t) {
      if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t ? !0 : 0 === e.compare(this, t)
    }, e.prototype.inspect = function () {
      var e = "", n = t.INSPECT_MAX_BYTES;
      return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
    }, e.prototype.compare = function (t) {
      if (!e.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t ? 0 : e.compare(this, t)
    }, e.prototype.indexOf = function (t, n) {
      function i(e, t, n) {
        for (var i = -1, a = 0; n + a < e.length; a++) if (e[n + a] === t[-1 === i ? 0 : a - i]) {
          if (-1 === i && (i = a), a - i + 1 === t.length) return n + i
        } else i = -1;
        return -1
      }

      if (n > 2147483647 ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n >>= 0, 0 === this.length) return -1;
      if (n >= this.length) return -1;
      if (0 > n && (n = Math.max(this.length + n, 0)), "string" == typeof t) return 0 === t.length ? -1 : String.prototype.indexOf.call(this, t, n);
      if (e.isBuffer(t)) return i(this, t, n);
      if ("number" == typeof t) return e.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, t, n) : i(this, [t], n);
      throw new TypeError("val must be string, number or Buffer")
    }, e.prototype.get = function (e) {
      return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
    }, e.prototype.set = function (e, t) {
      return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
    }, e.prototype.write = function (e, t, n, i) {
      if (void 0 === t) i = "utf8", n = this.length, t = 0; else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0; else if (isFinite(t)) t = 0 | t, isFinite(n) ? (n = 0 | n, void 0 === i && (i = "utf8")) : (i = n, n = void 0); else {
        var a = i;
        i = t, t = 0 | n, n = a
      }
      var r = this.length - t;
      if ((void 0 === n || n > r) && (n = r), e.length > 0 && (0 > n || 0 > t) || t > this.length) throw new RangeError("attempt to write outside buffer bounds");
      i || (i = "utf8");
      for (var o = !1; ;) switch (i) {
        case"hex":
          return x(this, e, t, n);
        case"utf8":
        case"utf-8":
          return w(this, e, t, n);
        case"ascii":
          return C(this, e, t, n);
        case"binary":
          return S(this, e, t, n);
        case"base64":
          return M(this, e, t, n);
        case"ucs2":
        case"ucs-2":
        case"utf16le":
        case"utf-16le":
          return A(this, e, t, n);
        default:
          if (o) throw new TypeError("Unknown encoding: " + i);
          i = ("" + i).toLowerCase(), o = !0
      }
    }, e.prototype.toJSON = function () {
      return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
    };
    var Z = 4096;
    e.prototype.slice = function (t, n) {
      var i = this.length;
      t = ~~t, n = void 0 === n ? i : ~~n, 0 > t ? (t += i, 0 > t && (t = 0)) : t > i && (t = i), 0 > n ? (n += i, 0 > n && (n = 0)) : n > i && (n = i), t > n && (n = t);
      var a;
      if (e.TYPED_ARRAY_SUPPORT) a = e._augment(this.subarray(t, n)); else {
        var r = n - t;
        a = new e(r, void 0);
        for (var o = 0; r > o; o++) a[o] = this[o + t]
      }
      return a.length && (a.parent = this.parent || this), a
    }, e.prototype.readUIntLE = function (e, t, n) {
      e = 0 | e, t = 0 | t, n || R(e, t, this.length);
      for (var i = this[e], a = 1, r = 0; ++r < t && (a *= 256);) i += this[e + r] * a;
      return i
    }, e.prototype.readUIntBE = function (e, t, n) {
      e = 0 | e, t = 0 | t, n || R(e, t, this.length);
      for (var i = this[e + --t], a = 1; t > 0 && (a *= 256);) i += this[e + --t] * a;
      return i
    }, e.prototype.readUInt8 = function (e, t) {
      return t || R(e, 1, this.length), this[e]
    }, e.prototype.readUInt16LE = function (e, t) {
      return t || R(e, 2, this.length), this[e] | this[e + 1] << 8
    }, e.prototype.readUInt16BE = function (e, t) {
      return t || R(e, 2, this.length), this[e] << 8 | this[e + 1]
    }, e.prototype.readUInt32LE = function (e, t) {
      return t || R(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
    }, e.prototype.readUInt32BE = function (e, t) {
      return t || R(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
    }, e.prototype.readIntLE = function (e, t, n) {
      e = 0 | e, t = 0 | t, n || R(e, t, this.length);
      for (var i = this[e], a = 1, r = 0; ++r < t && (a *= 256);) i += this[e + r] * a;
      return a *= 128, i >= a && (i -= Math.pow(2, 8 * t)), i
    }, e.prototype.readIntBE = function (e, t, n) {
      e = 0 | e, t = 0 | t, n || R(e, t, this.length);
      for (var i = t, a = 1, r = this[e + --i]; i > 0 && (a *= 256);) r += this[e + --i] * a;
      return a *= 128, r >= a && (r -= Math.pow(2, 8 * t)), r
    }, e.prototype.readInt8 = function (e, t) {
      return t || R(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
    }, e.prototype.readInt16LE = function (e, t) {
      t || R(e, 2, this.length);
      var n = this[e] | this[e + 1] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, e.prototype.readInt16BE = function (e, t) {
      t || R(e, 2, this.length);
      var n = this[e + 1] | this[e] << 8;
      return 32768 & n ? 4294901760 | n : n
    }, e.prototype.readInt32LE = function (e, t) {
      return t || R(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
    }, e.prototype.readInt32BE = function (e, t) {
      return t || R(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
    }, e.prototype.readFloatLE = function (e, t) {
      return t || R(e, 4, this.length), J.read(this, e, !0, 23, 4)
    }, e.prototype.readFloatBE = function (e, t) {
      return t || R(e, 4, this.length), J.read(this, e, !1, 23, 4)
    }, e.prototype.readDoubleLE = function (e, t) {
      return t || R(e, 8, this.length), J.read(this, e, !0, 52, 8)
    }, e.prototype.readDoubleBE = function (e, t) {
      return t || R(e, 8, this.length), J.read(this, e, !1, 52, 8)
    }, e.prototype.writeUIntLE = function (e, t, n, i) {
      e = +e, t = 0 | t, n = 0 | n, i || D(this, e, t, n, Math.pow(2, 8 * n), 0);
      var a = 1, r = 0;
      for (this[t] = 255 & e; ++r < n && (a *= 256);) this[t + r] = e / a & 255;
      return t + n
    }, e.prototype.writeUIntBE = function (e, t, n, i) {
      e = +e, t = 0 | t, n = 0 | n, i || D(this, e, t, n, Math.pow(2, 8 * n), 0);
      var a = n - 1, r = 1;
      for (this[t + a] = 255 & e; --a >= 0 && (r *= 256);) this[t + a] = e / r & 255;
      return t + n
    }, e.prototype.writeUInt8 = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 1, 255, 0), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[n] = 255 & t, n + 1
    }, e.prototype.writeUInt16LE = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : N(this, t, n, !0), n + 2
    }, e.prototype.writeUInt16BE = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 2, 65535, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : N(this, t, n, !1), n + 2
    }, e.prototype.writeUInt32LE = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = 255 & t) : F(this, t, n, !0), n + 4
    }, e.prototype.writeUInt32BE = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 4, 4294967295, 0), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : F(this, t, n, !1), n + 4
    }, e.prototype.writeIntLE = function (e, t, n, i) {
      if (e = +e, t = 0 | t, !i) {
        var a = Math.pow(2, 8 * n - 1);
        D(this, e, t, n, a - 1, -a)
      }
      var r = 0, o = 1, s = 0 > e ? 1 : 0;
      for (this[t] = 255 & e; ++r < n && (o *= 256);) this[t + r] = (e / o >> 0) - s & 255;
      return t + n
    }, e.prototype.writeIntBE = function (e, t, n, i) {
      if (e = +e, t = 0 | t, !i) {
        var a = Math.pow(2, 8 * n - 1);
        D(this, e, t, n, a - 1, -a)
      }
      var r = n - 1, o = 1, s = 0 > e ? 1 : 0;
      for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = (e / o >> 0) - s & 255;
      return t + n
    }, e.prototype.writeInt8 = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 1, 127, -128), e.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 0 > t && (t = 255 + t + 1), this[n] = 255 & t, n + 1
    }, e.prototype.writeInt16LE = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8) : N(this, t, n, !0), n + 2
    }, e.prototype.writeInt16BE = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 2, 32767, -32768), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 8, this[n + 1] = 255 & t) : N(this, t, n, !1), n + 2
    }, e.prototype.writeInt32LE = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 4, 2147483647, -2147483648), e.TYPED_ARRAY_SUPPORT ? (this[n] = 255 & t, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24) : F(this, t, n, !0), n + 4
    }, e.prototype.writeInt32BE = function (t, n, i) {
      return t = +t, n = 0 | n, i || D(this, t, n, 4, 2147483647, -2147483648), 0 > t && (t = 4294967295 + t + 1), e.TYPED_ARRAY_SUPPORT ? (this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = 255 & t) : F(this, t, n, !1), n + 4
    }, e.prototype.writeFloatLE = function (e, t, n) {
      return G(this, e, t, !0, n)
    }, e.prototype.writeFloatBE = function (e, t, n) {
      return G(this, e, t, !1, n)
    }, e.prototype.writeDoubleLE = function (e, t, n) {
      return z(this, e, t, !0, n)
    }, e.prototype.writeDoubleBE = function (e, t, n) {
      return z(this, e, t, !1, n)
    }, e.prototype.copy = function (t, n, i, a) {
      if (i || (i = 0), a || 0 === a || (a = this.length), n >= t.length && (n = t.length), n || (n = 0), a > 0 && i > a && (a = i), a === i) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (0 > n) throw new RangeError("targetStart out of bounds");
      if (0 > i || i >= this.length) throw new RangeError("sourceStart out of bounds");
      if (0 > a) throw new RangeError("sourceEnd out of bounds");
      a > this.length && (a = this.length), t.length - n < a - i && (a = t.length - n + i);
      var r, o = a - i;
      if (this === t && n > i && a > n) for (r = o - 1; r >= 0; r--) t[r + n] = this[r + i]; else if (1e3 > o || !e.TYPED_ARRAY_SUPPORT) for (r = 0; o > r; r++) t[r + n] = this[r + i]; else t._set(this.subarray(i, i + o), n);
      return o
    }, e.prototype.fill = function (e, t, n) {
      if (e || (e = 0), t || (t = 0), n || (n = this.length), t > n) throw new RangeError("end < start");
      if (n !== t && 0 !== this.length) {
        if (0 > t || t >= this.length) throw new RangeError("start out of bounds");
        if (0 > n || n > this.length) throw new RangeError("end out of bounds");
        var i;
        if ("number" == typeof e) for (i = t; n > i; i++) this[i] = e; else {
          var a = V(e.toString()), r = a.length;
          for (i = t; n > i; i++) this[i] = a[i % r]
        }
        return this
      }
    }, e.prototype.toArrayBuffer = function () {
      if ("undefined" != typeof Uint8Array) {
        if (e.TYPED_ARRAY_SUPPORT) return new e(this).buffer;
        for (var t = new Uint8Array(this.length), n = 0, i = t.length; i > n; n += 1) t[n] = this[n];
        return t.buffer
      }
      throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
    };
    var Q = e.prototype;
    e._augment = function (t) {
      return t.constructor = e, t._isBuffer = !0, t._set = t.set, t.get = Q.get, t.set = Q.set, t.write = Q.write, t.toString = Q.toString, t.toLocaleString = Q.toString, t.toJSON = Q.toJSON, t.equals = Q.equals, t.compare = Q.compare, t.indexOf = Q.indexOf, t.copy = Q.copy, t.slice = Q.slice, t.readUIntLE = Q.readUIntLE, t.readUIntBE = Q.readUIntBE, t.readUInt8 = Q.readUInt8, t.readUInt16LE = Q.readUInt16LE, t.readUInt16BE = Q.readUInt16BE, t.readUInt32LE = Q.readUInt32LE, t.readUInt32BE = Q.readUInt32BE, t.readIntLE = Q.readIntLE, t.readIntBE = Q.readIntBE, t.readInt8 = Q.readInt8, t.readInt16LE = Q.readInt16LE, t.readInt16BE = Q.readInt16BE, t.readInt32LE = Q.readInt32LE, t.readInt32BE = Q.readInt32BE, t.readFloatLE = Q.readFloatLE, t.readFloatBE = Q.readFloatBE, t.readDoubleLE = Q.readDoubleLE, t.readDoubleBE = Q.readDoubleBE, t.writeUInt8 = Q.writeUInt8, t.writeUIntLE = Q.writeUIntLE, t.writeUIntBE = Q.writeUIntBE, t.writeUInt16LE = Q.writeUInt16LE, t.writeUInt16BE = Q.writeUInt16BE, t.writeUInt32LE = Q.writeUInt32LE, t.writeUInt32BE = Q.writeUInt32BE, t.writeIntLE = Q.writeIntLE, t.writeIntBE = Q.writeIntBE, t.writeInt8 = Q.writeInt8, t.writeInt16LE = Q.writeInt16LE, t.writeInt16BE = Q.writeInt16BE, t.writeInt32LE = Q.writeInt32LE, t.writeInt32BE = Q.writeInt32BE, t.writeFloatLE = Q.writeFloatLE, t.writeFloatBE = Q.writeFloatBE, t.writeDoubleLE = Q.writeDoubleLE, t.writeDoubleBE = Q.writeDoubleBE, t.fill = Q.fill,
        t.inspect = Q.inspect, t.toArrayBuffer = Q.toArrayBuffer, t
    };
    var ee = /[^+\/0-9A-Za-z-_]/g
  }).call(t, n(9).Buffer, function () {
    return this
  }())
}, function (e, t, n) {
  var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  !function (e) {
    "use strict";

    function t(e) {
      var t = e.charCodeAt(0);
      return t === o || t === d ? 62 : t === s || t === f ? 63 : l > t ? -1 : l + 10 > t ? t - l + 26 + 26 : u + 26 > t ? t - u : c + 26 > t ? t - c + 26 : void 0
    }

    function n(e) {
      function n(e) {
        c[d++] = e
      }

      var i, a, o, s, l, c;
      if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var u = e.length;
      l = "=" === e.charAt(u - 2) ? 2 : "=" === e.charAt(u - 1) ? 1 : 0, c = new r(3 * e.length / 4 - l), o = l > 0 ? e.length - 4 : e.length;
      var d = 0;
      for (i = 0, a = 0; o > i; i += 4, a += 3) s = t(e.charAt(i)) << 18 | t(e.charAt(i + 1)) << 12 | t(e.charAt(i + 2)) << 6 | t(e.charAt(i + 3)), n((16711680 & s) >> 16), n((65280 & s) >> 8), n(255 & s);
      return 2 === l ? (s = t(e.charAt(i)) << 2 | t(e.charAt(i + 1)) >> 4, n(255 & s)) : 1 === l && (s = t(e.charAt(i)) << 10 | t(e.charAt(i + 1)) << 4 | t(e.charAt(i + 2)) >> 2, n(s >> 8 & 255), n(255 & s)), c
    }

    function a(e) {
      function t(e) {
        return i.charAt(e)
      }

      function n(e) {
        return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e)
      }

      var a, r, o, s = e.length % 3, l = "";
      for (a = 0, o = e.length - s; o > a; a += 3) r = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], l += n(r);
      switch (s) {
        case 1:
          r = e[e.length - 1], l += t(r >> 2), l += t(r << 4 & 63), l += "==";
          break;
        case 2:
          r = (e[e.length - 2] << 8) + e[e.length - 1], l += t(r >> 10), l += t(r >> 4 & 63), l += t(r << 2 & 63), l += "="
      }
      return l
    }

    var r = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "+".charCodeAt(0), s = "/".charCodeAt(0),
      l = "0".charCodeAt(0), c = "a".charCodeAt(0), u = "A".charCodeAt(0), d = "-".charCodeAt(0), f = "_".charCodeAt(0);
    e.toByteArray = n, e.fromByteArray = a
  }(t)
}, function (e, t) {
  t.read = function (e, t, n, i, a) {
    var r, o, s = 8 * a - i - 1, l = (1 << s) - 1, c = l >> 1, u = -7, d = n ? a - 1 : 0, f = n ? -1 : 1, h = e[t + d];
    for (d += f, r = h & (1 << -u) - 1, h >>= -u, u += s; u > 0; r = 256 * r + e[t + d], d += f, u -= 8) ;
    for (o = r & (1 << -u) - 1, r >>= -u, u += i; u > 0; o = 256 * o + e[t + d], d += f, u -= 8) ;
    if (0 === r) r = 1 - c; else {
      if (r === l) return o ? NaN : (h ? -1 : 1) * (1 / 0);
      o += Math.pow(2, i), r -= c
    }
    return (h ? -1 : 1) * o * Math.pow(2, r - i)
  }, t.write = function (e, t, n, i, a, r) {
    var o, s, l, c = 8 * r - a - 1, u = (1 << c) - 1, d = u >> 1,
      f = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = i ? 0 : r - 1, p = i ? 1 : -1,
      m = 0 > t || 0 === t && 0 > 1 / t ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), t += o + d >= 1 ? f / l : f * Math.pow(2, 1 - d), t * l >= 2 && (o++, l /= 2), o + d >= u ? (s = 0, o = u) : o + d >= 1 ? (s = (t * l - 1) * Math.pow(2, a), o += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, a), o = 0)); a >= 8; e[n + h] = 255 & s, h += p, s /= 256, a -= 8) ;
    for (o = o << a | s, c += a; c > 0; e[n + h] = 255 & o, h += p, o /= 256, c -= 8) ;
    e[n + h - p] |= 128 * m
  }
}, function (e, t) {
  var n = {}.toString;
  e.exports = Array.isArray || function (e) {
    return "[object Array]" == n.call(e)
  }
}, function (e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {"default": e}
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function (e) {
    for (var t = (0, r["default"])(e), n = 4; n >= 0; n--) t.circle("50%", "50%", 0).attr(o);
    return t
  };
  var a = n(6), r = i(a), o = {fill: "none", stroke: "#fff", strokeWidth: 1, opacity: .1, "class": "expanding-circle"}
}, function (e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {"default": e}
  }

  function a() {
    var e = (0, o["default"])("#nav"), t = (0, o["default"])(".nav-toggle");
    t.on("click", function (n) {
      return n.preventDefault(), t.toggleClass("is-close"), e.toggleClass("is-target"), !1
    })
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = a;
  var r = n(2), o = i(r)
}, function (e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {"default": e}
  }

  function a() {
    var e = (0, o["default"])(".accordion"), t = e.find(".accordion__item"), n = !1;
    t.each(function () {
      var e = (0, o["default"])(this), t = e.find(".accordion__item__description");
      e.find(".accordion__item__image");
      t.slideUp(0)
    }), t.find(".accordion__item__title").click(function () {
      var e = (0, o["default"])(this).parent();
      n && (n.removeClass("is-active"), n.find(".accordion__item__description").slideUp(), n.find(".accordion__item__image").addClass("is-hidden")), n && e.is(n) ? n = !1 : (e.addClass("is-active"), e.find(".accordion__item__description").slideDown(), e.find(".accordion__item__image").removeClass("is-hidden"), n = e)
    }), t.find(".accordion__item__title").first().click()
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = a;
  var r = n(2), o = i(r)
}, function (e, t) {
  "use strict";
  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function () {
    var e = document.getElementById("section-3"), t = function () {
      return e.classList.contains("active")
    }, n = document.querySelector(".tangle__diagram"), i = !1;
    document.body.addEventListener("fullpage-slide-enter", function (e) {
      4 != e.detail.id || i ? (clearInterval(i), i = !1) : (n.classList.add("is-animating-in"), i = setInterval(function () {
        t() && (n.classList.remove("is-animating-in"), n.classList.add("is-animating-out"), setTimeout(function () {
          n.classList.add("is-animating-in"), n.classList.remove("is-animating-out")
        }, 4e3))
      }, 16e3))
    }, !1)
  }
}, function (e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {"default": e}
  }

  function a(e) {
    var t = 0, n = (0, o["default"])(e), i = (0, l["default"])(document.getElementById("device-map__background"));
    window.setInterval(function () {
      var e = a[t], r = (0, o["default"])(".device-map__device");
      r.removeClass("is-showing"), r.addClass("is-removing"), setTimeout(function () {
        r.remove()
      }, 3e3);
      for (var s = 0; s < e.labels.length; s++) {
        var l = e.labels[s], c = '<div class="device-map__device is-showing">';
        l.id && (c += '<span class="device-map__device__id">' + l.id + "</span>"), l.pretitle && (c += '<span class="device-map__device__subtitle">' + l.pretitle + "</span>"), l.title && (c += '<span class="device-map__device__title">' + l.title + "</span>"), c += "</div>";
        var p = (0, o["default"])(c);
        p.css({
          top: l.position[0],
          right: l.position[1],
          bottom: l.position[2],
          left: l.position[3]
        }), n.append(p), setTimeout(function () {
          p.removeClass("is-showing")
        }, 1e3)
      }
      var m = (0, o["default"])(".device-map__beacon, .device-map__beacon-pulse, .device-map__icon, .line-connector");
      if (m.fadeOut(700, function () {
          m.remove()
        }), e.beacons) for (var s = e.beacons.length - 1; s >= 0; s--) {
        var g = e.beacons[s];
        i.circle(g.position[0] + "%", g.position[1] + "%", 3).attr(d).animate({opacity: 1}, 700);
        for (var v = 0; 3 > v; v++) i.circle(g.position[0] + "%", g.position[1] + "%", 3).attr(u);
        for (var b = [[g.position[0], g.position[1]]], y = 0; y < g.children; y++) {
          var x = h(g.position[0], g.position[1], b);
          b.push(x), i.circle(x[0] + "%", x[1] + "%", 3).attr(d).animate({opacity: 1}, 700), i.line(x[0] + "%", x[1] + "%", g.position[0] + "%", g.position[1] + "%").attr(f).animate({opacity: 1}, 700)
        }
      }
      if (e.lines) for (var s = e.lines.length - 1; s >= 0; s--) {
        var w = e.lines[s];
        i.line(w.start[0] + "%", w.start[1] + "%", w.end[0] + "%", w.end[1] + "%").attr(f).animate({opacity: 1}, 700)
      }
      if (e.icon) {
        var C = e.icon, S = (0, o["default"])('<img class="device-map__icon" src="' + C.src + '" />');
        S.css({
          top: C.position[0],
          right: C.position[1],
          bottom: C.position[2],
          left: C.position[3]
        }), n.append(S), S.fadeOut(0), S.fadeIn(1e3)
      }
      t++, t >= a.length && (t = 0)
    }, 8e3)
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = a;
  var r = n(2), o = i(r), s = n(6), l = i(s), c = n(8), a = (i(c), [{
      labels: [{
        id: "ID 473264782",
        title: "Processing Center",
        position: ["auto", "auto", "80%", "2%"]
      }, {
        id: "9,875 devices purchasing",
        pretitle: "7 giga iotas",
        title: "of processing power",
        position: ["52%", "auto", "auto", "8%"]
      }, {
        id: "ID 473264782",
        title: "Internet Gateway",
        position: ["auto", "20%", "40%", "auto"]
      }, {
        id: "534 devices purchasing",
        pretitle: "10 terra iotas",
        title: 'of <span class="no-text-transform">LoRaWAN</span>',
        position: ["80%", "2%", "auto", "auto"]
      }],
      beacons: [{position: [10, 30], children: 5}, {position: [70, 75], children: 6}],
      lines: [{start: [10, 30], end: [70, 75]}],
      icon: {src: "./img/transaction-icons/computing.svg", position: ["auto", "50%", "50%", "auto"]}
    }, {
      labels: [{
        id: "Nissan Qashqai",
        pretitle: "3 mega iotas",
        title: "on street parking",
        position: ["50%", "auto", "auto", "20%"]
      }],
      beacons: [{position: [19, 51], children: 0}],
      icon: {src: "./img/transaction-icons/parking.svg", position: ["auto", "82%", "52%", "auto"]}
    }, {
      labels: [{
        id: "ID 102781888",
        title: "Solar grid",
        position: ["50%", "30%", "auto", "auto"]
      }, {
        id: "534 Sensors purchasing",
        pretitle: "6 mega iotas",
        title: "of energy",
        position: ["auto", "auto", "50%", "30%"]
      }],
      beacons: [{position: [50, 50], children: 7}],
      icon: {src: "./img/transaction-icons/smartgrid.svg", position: ["auto", "47%", "52%", "auto"]}
    }, {
      labels: [{
        id: "Tesla Model 3",
        pretitle: "6 mega iotas",
        title: "Electic car charging",
        position: ["80%", "auto", "auto", "60%"]
      }],
      beacons: [{position: [78, 59], children: 0}],
      icon: {src: "./img/transaction-icons/charging.svg", position: ["auto", "auto", "45%", "80%"]}
    }, {
      labels: [{
        id: "ID 489267192",
        title: "Storage Center",
        position: ["auto", "auto", "70%", "10%"]
      }, {
        id: "6.345 sensors purchasing",
        pretitle: "6 mega iotas",
        title: "Data storage",
        position: ["33%", "auto", "auto", "32%"]
      }],
      beacons: [{position: [32, 20], children: 6}],
      icon: {src: "./img/transaction-icons/storage.svg", position: ["auto", "auto", "85%", "33%"]}
    }, {
      labels: [{
        id: "ID 378496220",
        title: "Grocery Store",
        position: ["0%", "57%", "auto", "auto"]
      }, {
        id: "Smartfridge",
        pretitle: "1 mega iota",
        title: "New modular cooling element from factory",
        position: ["81%", "auto", "auto", "62%"]
      }],
      beacons: [{position: [45, 10], children: 0}, {position: [60, 80], children: 0}],
      lines: [{start: [45, 10], end: [60, 80]}],
      icon: {src: "./img/transaction-icons/smartfridge.svg", position: ["auto", "auto", "53%", "53%"]}
    }, {
      labels: [{
        id: "ID 103948973",
        title: "Analytics Center",
        position: ["auto", "50%", "40%", "auto"]
      }, {
        id: "376 devices",
        pretitle: "1 mega iota",
        title: "paid for fitbit data",
        position: ["65%", "auto", "auto", "43%"]
      }],
      beacons: [{position: [53, 58], children: 3}],
      icon: {src: "./img/transaction-icons/bike.svg", position: ["auto", "auto", "50%", "55%"]}
    }, {
      labels: [{
        id: "Apple Watch",
        pretitle: "1 mega iota",
        title: "2 x large americano",
        position: ["80%", "auto", "auto", "80%"]
      }],
      beacons: [{position: [78, 78], children: 0}],
      icon: {src: "./img/transaction-icons/wearable.svg", position: ["auto", "22%", "25%", "auto"]}
    }]),
    u = {fill: "none", stroke: "#fff", strokeWidth: 1, opacity: .1, "class": "beacon__pulse device-map__beacon-pulse"},
    d = {fill: "none", stroke: "#6345b8", strokeWidth: 1, opacity: 0, "class": "device-map__beacon"},
    f = {fill: "#fff", stroke: "#fff", strokeDasharray: "1,5", strokeWidth: 1, opacity: 0, "class": "line-connector"},
    h = function (e, t) {
      for (var n, i, a = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2], r = !0; r;) {
        n = chance.integer({min: e - 10, max: e + 10}), i = chance.integer({min: t - 15, max: t + 15});
        for (var o = 0; o < a.length; o++) {
          var s = n, l = i, c = a[o], u = Math.sqrt((s -= c[0]) * s + (l -= c[1]) * l);
          u > 10 && (r = !1)
        }
      }
      return [n, i]
    }
}, function (e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {"default": e}
  }

  Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = function () {
    var e = document.getElementById("learn-more");
    e.style.cursor = "pointer", e.addEventListener("click", function (e) {
      r["default"].fn.fullpage.moveSectionDown()
    })
  };
  var a = n(2), r = i(a)
}]);
//# sourceMappingURL=app.js.map
