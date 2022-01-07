// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = _;
exports.Fragment = d;
exports.cloneElement = B;
exports.createContext = D;
exports.h = exports.createElement = v;
exports.createRef = p;
exports.hydrate = q;
exports.options = exports.isValidElement = void 0;
exports.render = S;
exports.toChildArray = A;
var n,
    l,
    u,
    i,
    t,
    r,
    o,
    f,
    e = {},
    c = [],
    s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
exports.isValidElement = i;
exports.options = l;

function a(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function h(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function v(l, u, i) {
  var t,
      r,
      o,
      f = {};

  for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];

  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), "function" == typeof l && null != l.defaultProps) for (o in l.defaultProps) void 0 === f[o] && (f[o] = l.defaultProps[o]);
  return y(l, f, t, r, null);
}

function y(n, i, t, r, o) {
  var f = {
    type: n,
    props: i,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: null == o ? ++u : o
  };
  return null == o && null != l.vnode && l.vnode(f), f;
}

function p() {
  return {
    current: null
  };
}

function d(n) {
  return n.children;
}

function _(n, l) {
  this.props = n, this.context = l;
}

function k(n, l) {
  if (null == l) return n.__ ? k(n.__, n.__.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? k(n) : null;
}

function b(n) {
  var l, u;

  if (null != (n = n.__) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return b(n);
  }
}

function m(n) {
  (!n.__d && (n.__d = !0) && t.push(n) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
}

function g() {
  for (var n; g.__r = t.length;) n = t.sort(function (n, l) {
    return n.__v.__b - l.__v.__b;
  }), t = [], n.some(function (n) {
    var l, u, i, t, r, o;
    n.__d && (r = (t = (l = n).__v).__e, (o = l.__P) && (u = [], (i = a({}, t)).__v = t.__v + 1, j(o, t, i, l.__n, void 0 !== o.ownerSVGElement, null != t.__h ? [r] : null, u, null == r ? k(t) : r, t.__h), z(u, t), t.__e != r && b(t)));
  });
}

function w(n, l, u, i, t, r, o, f, s, a) {
  var h,
      v,
      p,
      _,
      b,
      m,
      g,
      w = i && i.__k || c,
      A = w.length;

  for (u.__k = [], h = 0; h < l.length; h++) if (null != (_ = u.__k[h] = null == (_ = l[h]) || "boolean" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? y(null, _, null, null, _) : Array.isArray(_) ? y(d, {
    children: _
  }, null, null, null) : _.__b > 0 ? y(_.type, _.props, _.key, null, _.__v) : _)) {
    if (_.__ = u, _.__b = u.__b + 1, null === (p = w[h]) || p && _.key == p.key && _.type === p.type) w[h] = void 0;else for (v = 0; v < A; v++) {
      if ((p = w[v]) && _.key == p.key && _.type === p.type) {
        w[v] = void 0;
        break;
      }

      p = null;
    }
    j(n, _, p = p || e, t, r, o, f, s, a), b = _.__e, (v = _.ref) && p.ref != v && (g || (g = []), p.ref && g.push(p.ref, null, _), g.push(v, _.__c || b, _)), null != b ? (null == m && (m = b), "function" == typeof _.type && _.__k === p.__k ? _.__d = s = x(_, s, n) : s = P(n, _, p, w, b, s), "function" == typeof u.type && (u.__d = s)) : s && p.__e == s && s.parentNode != n && (s = k(p));
  }

  for (u.__e = m, h = A; h--;) null != w[h] && ("function" == typeof u.type && null != w[h].__e && w[h].__e == u.__d && (u.__d = k(i, h + 1)), N(w[h], w[h]));

  if (g) for (h = 0; h < g.length; h++) M(g[h], g[++h], g[++h]);
}

function x(n, l, u) {
  for (var i, t = n.__k, r = 0; t && r < t.length; r++) (i = t[r]) && (i.__ = n, l = "function" == typeof i.type ? x(i, l, u) : P(u, i, i, t, i.__e, l));

  return l;
}

function A(n, l) {
  return l = l || [], null == n || "boolean" == typeof n || (Array.isArray(n) ? n.some(function (n) {
    A(n, l);
  }) : l.push(n)), l;
}

function P(n, l, u, i, t, r) {
  var o, f, e;
  if (void 0 !== l.__d) o = l.__d, l.__d = void 0;else if (null == u || t != r || null == t.parentNode) n: if (null == r || r.parentNode !== n) n.appendChild(t), o = null;else {
    for (f = r, e = 0; (f = f.nextSibling) && e < i.length; e += 2) if (f == t) break n;

    n.insertBefore(t, r), o = r;
  }
  return void 0 !== o ? o : t.nextSibling;
}

function C(n, l, u, i, t) {
  var r;

  for (r in u) "children" === r || "key" === r || r in l || H(n, r, null, u[r], i);

  for (r in l) t && "function" != typeof l[r] || "children" === r || "key" === r || "value" === r || "checked" === r || u[r] === l[r] || H(n, r, l[r], u[r], i);
}

function $(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = null == u ? "" : "number" != typeof u || s.test(l) ? u : u + "px";
}

function H(n, l, u, i, t) {
  var r;

  n: if ("style" === l) {
    if ("string" == typeof u) n.style.cssText = u;else {
      if ("string" == typeof i && (n.style.cssText = i = ""), i) for (l in i) u && l in u || $(n.style, l, "");
      if (u) for (l in u) i && u[l] === i[l] || $(n.style, l, u[l]);
    }
  } else if ("o" === l[0] && "n" === l[1]) r = l !== (l = l.replace(/Capture$/, "")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? i || n.addEventListener(l, r ? T : I, r) : n.removeEventListener(l, r ? T : I, r);else if ("dangerouslySetInnerHTML" !== l) {
    if (t) l = l.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");else if ("href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && l in n) try {
      n[l] = null == u ? "" : u;
      break n;
    } catch (n) {}
    "function" == typeof u || (null != u && (!1 !== u || "a" === l[0] && "r" === l[1]) ? n.setAttribute(l, u) : n.removeAttribute(l));
  }
}

function I(n) {
  this.l[n.type + !1](l.event ? l.event(n) : n);
}

function T(n) {
  this.l[n.type + !0](l.event ? l.event(n) : n);
}

function j(n, u, i, t, r, o, f, e, c) {
  var s,
      h,
      v,
      y,
      p,
      k,
      b,
      m,
      g,
      x,
      A,
      P = u.type;
  if (void 0 !== u.constructor) return null;
  null != i.__h && (c = i.__h, e = u.__e = i.__e, u.__h = null, o = [e]), (s = l.__b) && s(u);

  try {
    n: if ("function" == typeof P) {
      if (m = u.props, g = (s = P.contextType) && t[s.__c], x = s ? g ? g.props.value : s.__ : t, i.__c ? b = (h = u.__c = i.__c).__ = h.__E : ("prototype" in P && P.prototype.render ? u.__c = h = new P(m, x) : (u.__c = h = new _(m, x), h.constructor = P, h.render = O), g && g.sub(h), h.props = m, h.state || (h.state = {}), h.context = x, h.__n = t, v = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != P.getDerivedStateFromProps && (h.__s == h.state && (h.__s = a({}, h.__s)), a(h.__s, P.getDerivedStateFromProps(m, h.__s))), y = h.props, p = h.state, v) null == P.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);else {
        if (null == P.getDerivedStateFromProps && m !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(m, x), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(m, h.__s, x) || u.__v === i.__v) {
          h.props = m, h.state = h.__s, u.__v !== i.__v && (h.__d = !1), h.__v = u, u.__e = i.__e, u.__k = i.__k, u.__k.forEach(function (n) {
            n && (n.__ = u);
          }), h.__h.length && f.push(h);
          break n;
        }

        null != h.componentWillUpdate && h.componentWillUpdate(m, h.__s, x), null != h.componentDidUpdate && h.__h.push(function () {
          h.componentDidUpdate(y, p, k);
        });
      }
      h.context = x, h.props = m, h.state = h.__s, (s = l.__r) && s(u), h.__d = !1, h.__v = u, h.__P = n, s = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (t = a(a({}, t), h.getChildContext())), v || null == h.getSnapshotBeforeUpdate || (k = h.getSnapshotBeforeUpdate(y, p)), A = null != s && s.type === d && null == s.key ? s.props.children : s, w(n, Array.isArray(A) ? A : [A], u, i, t, r, o, f, e, c), h.base = u.__e, u.__h = null, h.__h.length && f.push(h), b && (h.__E = h.__ = null), h.__e = !1;
    } else null == o && u.__v === i.__v ? (u.__k = i.__k, u.__e = i.__e) : u.__e = L(i.__e, u, i, t, r, o, f, c);

    (s = l.diffed) && s(u);
  } catch (n) {
    u.__v = null, (c || null != o) && (u.__e = e, u.__h = !!c, o[o.indexOf(e)] = null), l.__e(n, u, i);
  }
}

function z(n, u) {
  l.__c && l.__c(u, n), n.some(function (u) {
    try {
      n = u.__h, u.__h = [], n.some(function (n) {
        n.call(u);
      });
    } catch (n) {
      l.__e(n, u.__v);
    }
  });
}

function L(l, u, i, t, r, o, f, c) {
  var s,
      a,
      v,
      y = i.props,
      p = u.props,
      d = u.type,
      _ = 0;
  if ("svg" === d && (r = !0), null != o) for (; _ < o.length; _++) if ((s = o[_]) && "setAttribute" in s == !!d && (d ? s.localName === d : 3 === s.nodeType)) {
    l = s, o[_] = null;
    break;
  }

  if (null == l) {
    if (null === d) return document.createTextNode(p);
    l = r ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p.is && p), o = null, c = !1;
  }

  if (null === d) y === p || c && l.data === p || (l.data = p);else {
    if (o = o && n.call(l.childNodes), a = (y = i.props || e).dangerouslySetInnerHTML, v = p.dangerouslySetInnerHTML, !c) {
      if (null != o) for (y = {}, _ = 0; _ < l.attributes.length; _++) y[l.attributes[_].name] = l.attributes[_].value;
      (v || a) && (v && (a && v.__html == a.__html || v.__html === l.innerHTML) || (l.innerHTML = v && v.__html || ""));
    }

    if (C(l, p, y, r, c), v) u.__k = [];else if (_ = u.props.children, w(l, Array.isArray(_) ? _ : [_], u, i, t, r && "foreignObject" !== d, o, f, o ? o[0] : i.__k && k(i, 0), c), null != o) for (_ = o.length; _--;) null != o[_] && h(o[_]);
    c || ("value" in p && void 0 !== (_ = p.value) && (_ !== y.value || _ !== l.value || "progress" === d && !_) && H(l, "value", _, y.value, !1), "checked" in p && void 0 !== (_ = p.checked) && _ !== l.checked && H(l, "checked", _, y.checked, !1));
  }
  return l;
}

function M(n, u, i) {
  try {
    "function" == typeof n ? n(u) : n.current = u;
  } catch (n) {
    l.__e(n, i);
  }
}

function N(n, u, i) {
  var t, r;

  if (l.unmount && l.unmount(n), (t = n.ref) && (t.current && t.current !== n.__e || M(t, null, u)), null != (t = n.__c)) {
    if (t.componentWillUnmount) try {
      t.componentWillUnmount();
    } catch (n) {
      l.__e(n, u);
    }
    t.base = t.__P = null;
  }

  if (t = n.__k) for (r = 0; r < t.length; r++) t[r] && N(t[r], u, "function" != typeof n.type);
  i || null == n.__e || h(n.__e), n.__e = n.__d = void 0;
}

function O(n, l, u) {
  return this.constructor(n, u);
}

function S(u, i, t) {
  var r, o, f;
  l.__ && l.__(u, i), o = (r = "function" == typeof t) ? null : t && t.__k || i.__k, f = [], j(i, u = (!r && t || i).__k = v(d, null, [u]), o || e, e, void 0 !== i.ownerSVGElement, !r && t ? [t] : o ? null : i.firstChild ? n.call(i.childNodes) : null, f, !r && t ? t : o ? o.__e : i.firstChild, r), z(f, u);
}

function q(n, l) {
  S(n, l, q);
}

function B(l, u, i) {
  var t,
      r,
      o,
      f = a({}, l.props);

  for (o in u) "key" == o ? t = u[o] : "ref" == o ? r = u[o] : f[o] = u[o];

  return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : i), y(l.type, f, t || l.key, r || l.ref, null);
}

function D(n, l) {
  var u = {
    __c: l = "__cC" + f++,
    __: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var u, i;
      return this.getChildContext || (u = [], (i = {})[l] = this, this.getChildContext = function () {
        return i;
      }, this.shouldComponentUpdate = function (n) {
        this.props.value !== n.value && u.some(m);
      }, this.sub = function (n) {
        u.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          u.splice(u.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Provider.__ = u.Consumer.contextType = u;
}

n = c.slice, exports.options = l = {
  __e: function (n, l) {
    for (var u, i, t; l = l.__;) if ((u = l.__c) && !u.__) try {
      if ((i = u.constructor) && null != i.getDerivedStateFromError && (u.setState(i.getDerivedStateFromError(n)), t = u.__d), null != u.componentDidCatch && (u.componentDidCatch(n), t = u.__d), t) return u.__E = u;
    } catch (l) {
      n = l;
    }

    throw n;
  }
}, u = 0, exports.isValidElement = i = function (n) {
  return null != n && void 0 === n.constructor;
}, _.prototype.setState = function (n, l) {
  var u;
  u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(a({}, u), this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), m(this));
}, _.prototype.forceUpdate = function (n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), m(this));
}, _.prototype.render = d, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
},{}],"../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _preact.Fragment;
  }
});
exports.jsxDEV = exports.jsxs = exports.jsx = e;

var _preact = require("preact");

var o = 0;

function e(_, e, n, t, f) {
  var l,
      s,
      u = {};

  for (s in e) "ref" == s ? l = e[s] : u[s] = e[s];

  var a = {
    type: _,
    props: u,
    key: n,
    ref: l,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --o,
    __source: t,
    __self: f
  };
  if ("function" == typeof _ && (l = _.defaultProps)) for (s in l) void 0 === u[s] && (u[s] = l[s]);
  return _preact.options.vnode && _preact.options.vnode(a), a;
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact-custom-element/dist/preact-custom-element.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _preact = require("preact");

function r() {
  return (r = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }

    return t;
  }).apply(this, arguments);
}

function i(t) {
  this.getChildContext = function () {
    return t.context;
  };

  var e = t.children,
      n = function (t, e) {
    if (null == t) return {};
    var n,
        o,
        r = {},
        i = Object.keys(t);

    for (o = 0; o < i.length; o++) e.indexOf(n = i[o]) >= 0 || (r[n] = t[n]);

    return r;
  }(t, ["context", "children"]);

  return (0, _preact.cloneElement)(e, n);
}

function a() {
  var o = new CustomEvent("_preact", {
    detail: {},
    bubbles: !0,
    cancelable: !0
  });
  this.dispatchEvent(o), this._vdom = (0, _preact.h)(i, r({}, this._props, {
    context: o.detail.context
  }), function e(n, o) {
    if (3 === n.nodeType) return n.data;
    if (1 !== n.nodeType) return null;
    var r = [],
        i = {},
        a = 0,
        c = n.attributes,
        l = n.childNodes;

    for (a = c.length; a--;) "slot" !== c[a].name && (i[c[a].name] = c[a].value, i[s(c[a].name)] = c[a].value);

    for (a = l.length; a--;) {
      var p = e(l[a], null),
          d = l[a].slot;
      d ? i[d] = (0, _preact.h)(u, {
        name: d
      }, p) : r[a] = p;
    }

    var h = o ? (0, _preact.h)(u, null, r) : r;
    return (0, _preact.h)(o || n.nodeName.toLowerCase(), i, h);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? _preact.hydrate : _preact.render)(this._vdom, this._root);
}

function s(t) {
  return t.replace(/-(\w)/g, function (t, e) {
    return e ? e.toUpperCase() : "";
  });
}

function c(t, e, r) {
  if (this._vdom) {
    var i = {};
    i[t] = r = null == r ? void 0 : r, i[s(t)] = r, this._vdom = (0, _preact.cloneElement)(this._vdom, i), (0, _preact.render)(this._vdom, this._root);
  }
}

function l() {
  (0, _preact.render)(this._vdom = null, this._root);
}

function u(e, n) {
  var o = this;
  return (0, _preact.h)("slot", r({}, e, {
    ref: function (t) {
      t ? (o.ref = t, o._listener || (o._listener = function (t) {
        t.stopPropagation(), t.detail.context = n;
      }, t.addEventListener("_preact", o._listener))) : o.ref.removeEventListener("_preact", o._listener);
    }
  }));
}

function _default(t, e, n, o) {
  function r() {
    var e = Reflect.construct(HTMLElement, [], r);
    return e._vdomComponent = t, e._root = o && o.shadow ? e.attachShadow({
      mode: "open"
    }) : e, e;
  }

  return (r.prototype = Object.create(HTMLElement.prototype)).constructor = r, r.prototype.connectedCallback = a, r.prototype.attributeChangedCallback = c, r.prototype.disconnectedCallback = l, n = n || t.observedAttributes || Object.keys(t.propTypes || {}), r.observedAttributes = n, n.forEach(function (t) {
    Object.defineProperty(r.prototype, t, {
      get: function () {
        return this._vdom.props[t];
      },
      set: function (e) {
        this._vdom ? this.attributeChangedCallback(t, null, e) : (this._props || (this._props = {}), this._props[t] = e, this.connectedCallback());
        var n = typeof e;
        null != e && "string" !== n && "boolean" !== n && "number" !== n || this.setAttribute(t, e);
      }
    });
  }), customElements.define(e || t.tagName || t.displayName || t.name, r);
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/preact/hooks/dist/hooks.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallback = A;
exports.useContext = F;
exports.useDebugValue = T;
exports.useEffect = y;
exports.useErrorBoundary = q;
exports.useImperativeHandle = _;
exports.useLayoutEffect = h;
exports.useMemo = d;
exports.useReducer = p;
exports.useRef = s;
exports.useState = l;

var _preact = require("preact");

var t,
    u,
    r,
    o = 0,
    i = [],
    c = _preact.options.__b,
    f = _preact.options.__r,
    e = _preact.options.diffed,
    a = _preact.options.__c,
    v = _preact.options.unmount;

function m(t, r) {
  _preact.options.__h && _preact.options.__h(u, t, o || r), o = 0;
  var i = u.__H || (u.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({}), i.__[t];
}

function l(n) {
  return o = 1, p(w, n);
}

function p(n, r, o) {
  var i = m(t++, 2);
  return i.t = n, i.__c || (i.__ = [o ? o(r) : w(void 0, r), function (n) {
    var t = i.t(i.__[0], n);
    i.__[0] !== t && (i.__ = [t, i.__[1]], i.__c.setState({}));
  }], i.__c = u), i.__;
}

function y(r, o) {
  var i = m(t++, 3);
  !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__H.__h.push(i));
}

function h(r, o) {
  var i = m(t++, 4);
  !_preact.options.__s && k(i.__H, o) && (i.__ = r, i.__H = o, u.__h.push(i));
}

function s(n) {
  return o = 5, d(function () {
    return {
      current: n
    };
  }, []);
}

function _(n, t, u) {
  o = 6, h(function () {
    "function" == typeof n ? n(t()) : n && (n.current = t());
  }, null == u ? u : u.concat(n));
}

function d(n, u) {
  var r = m(t++, 7);
  return k(r.__H, u) && (r.__ = n(), r.__H = u, r.__h = n), r.__;
}

function A(n, t) {
  return o = 8, d(function () {
    return n;
  }, t);
}

function F(n) {
  var r = u.context[n.__c],
      o = m(t++, 9);
  return o.c = n, r ? (null == o.__ && (o.__ = !0, r.sub(u)), r.props.value) : n.__;
}

function T(t, u) {
  _preact.options.useDebugValue && _preact.options.useDebugValue(u ? u(t) : t);
}

function q(n) {
  var r = m(t++, 10),
      o = l();
  return r.__ = n, u.componentDidCatch || (u.componentDidCatch = function (n) {
    r.__ && r.__(n), o[1](n);
  }), [o[0], function () {
    o[1](void 0);
  }];
}

function x() {
  var t;

  for (i.sort(function (n, t) {
    return n.__v.__b - t.__v.__b;
  }); t = i.pop();) if (t.__P) try {
    t.__H.__h.forEach(g), t.__H.__h.forEach(j), t.__H.__h = [];
  } catch (u) {
    t.__H.__h = [], _preact.options.__e(u, t.__v);
  }
}

_preact.options.__b = function (n) {
  u = null, c && c(n);
}, _preact.options.__r = function (n) {
  f && f(n), t = 0;
  var r = (u = n.__c).__H;
  r && (r.__h.forEach(g), r.__h.forEach(j), r.__h = []);
}, _preact.options.diffed = function (t) {
  e && e(t);
  var o = t.__c;
  o && o.__H && o.__H.__h.length && (1 !== i.push(o) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function (n) {
    var t,
        u = function () {
      clearTimeout(r), b && cancelAnimationFrame(t), setTimeout(n);
    },
        r = setTimeout(u, 100);

    b && (t = requestAnimationFrame(u));
  })(x)), u = null;
}, _preact.options.__c = function (t, u) {
  u.some(function (t) {
    try {
      t.__h.forEach(g), t.__h = t.__h.filter(function (n) {
        return !n.__ || j(n);
      });
    } catch (r) {
      u.some(function (n) {
        n.__h && (n.__h = []);
      }), u = [], _preact.options.__e(r, t.__v);
    }
  }), a && a(t, u);
}, _preact.options.unmount = function (t) {
  v && v(t);
  var u,
      r = t.__c;
  r && r.__H && (r.__H.__.forEach(function (n) {
    try {
      g(n);
    } catch (n) {
      u = n;
    }
  }), u && _preact.options.__e(u, r.__v));
};
var b = "function" == typeof requestAnimationFrame;

function g(n) {
  var t = u,
      r = n.__c;
  "function" == typeof r && (n.__c = void 0, r()), u = t;
}

function j(n) {
  var t = u;
  n.__c = n.__(), u = t;
}

function k(n, t) {
  return !n || n.length !== t.length || t.some(function (t, u) {
    return t !== n[u];
  });
}

function w(n, t) {
  return "function" == typeof t ? t(n) : t;
}
},{"preact":"../node_modules/preact/dist/preact.module.js"}],"../node_modules/classnames/index.js":[function(require,module,exports) {
var define;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],"pagination/pagination.tsx":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StkPagination = void 0;

var jsx_runtime_1 = require("preact/jsx-runtime");

var classnames_1 = __importDefault(require("classnames"));

var preact_1 = require("preact");

var PAGINATION_DELTA = 2;
var MAX_PAGES = 5;

function StkPagination(_a) {
  var totalPages = _a.totalPages,
      currentPage = _a.currentPage,
      onPageChange = _a.onPageChange;
  totalPages = totalPages || MAX_PAGES;

  var buildPageNumber = function buildPageNumber(number) {
    return {
      number: number,
      selected: number === currentPage,
      separator: false
    };
  };

  var handlePageChange = function handlePageChange(number) {
    onPageChange(number);
  };

  var generatePages = function generatePages() {
    // Based on simple-pagination.js algorithm
    // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
    var last = totalPages;
    var left = currentPage - PAGINATION_DELTA;
    var right = currentPage + PAGINATION_DELTA + 1;
    var range = Array.from(new Array(last), function (n, index) {
      return index + 1;
    }).filter(function (page) {
      return page === 1 || page === last || left <= page && page < right;
    });
    var results = [];
    var previousPage;
    range.forEach(function (page) {
      if (previousPage) {
        if (page - previousPage === 2) {
          results.push(buildPageNumber(previousPage + 1));
        } else if (page - previousPage !== 1) {
          results.push({
            separator: true
          });
        }
      }

      results.push(buildPageNumber(page));
      previousPage = page;
    });
    return results;
  };

  var pages = generatePages();
  var hasPreviousPage = 0 < currentPage - 1;
  var hasNextPage = currentPage + 1 <= totalPages;
  return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {
    children: (0, jsx_runtime_1.jsxs)("nav", __assign({
      className: "stk-pagination"
    }, {
      children: [hasPreviousPage ? (0, jsx_runtime_1.jsx)("button", __assign({
        onClick: function onClick() {
          return handlePageChange(currentPage - 1);
        },
        className: (0, classnames_1.default)('stk-pagination__button', 'stk-pagination__button--prev', 'stk-pagination__button--first')
      }, {
        children: "Previous"
      }), void 0) : (0, jsx_runtime_1.jsx)("span", __assign({
        className: (0, classnames_1.default)('stk-pagination__button', 'stk-pagination__button--prev', 'stk-pagination__button--first', 'stk-pagination__button--disabled')
      }, {
        children: "Previous"
      }), void 0), pages.map(function (page, index) {
        return (0, jsx_runtime_1.jsx)(preact_1.Fragment, {
          children: page.number ? (0, jsx_runtime_1.jsx)("button", __assign({
            onClick: function onClick() {
              return handlePageChange(page.number);
            },
            className: (0, classnames_1.default)('stk-pagination__button', {
              'stk-pagination__button--selected': page.selected,
              'stk-pagination__button--first': isSeparatorPrior(page, pages),
              'stk-pagination__button--last': isSeparatorAfter(page, pages)
            })
          }, {
            children: page.number
          }), index) : (0, jsx_runtime_1.jsx)("span", __assign({
            className: "stk-pagination__separator"
          }, {
            children: "\u2026"
          }), void 0)
        }, page);
      }), hasNextPage ? (0, jsx_runtime_1.jsx)("button", __assign({
        onClick: function onClick() {
          return handlePageChange(currentPage + 1);
        },
        className: (0, classnames_1.default)('stk-pagination__button', 'stk-pagination__button--next', 'stk-pagination__button--last')
      }, {
        children: "Next"
      }), void 0) : (0, jsx_runtime_1.jsx)("span", __assign({
        className: (0, classnames_1.default)('stk-pagination__button', 'stk-pagination__button--next', 'stk-pagination__button--last', 'stk-pagination__button--disabled')
      }, {
        children: "Next"
      }), void 0)]
    }), void 0)
  }, void 0);
}

exports.StkPagination = StkPagination;

function isSeparatorPrior(page, pages) {
  var _a;

  return (_a = pages[pages.indexOf(page) - 1]) === null || _a === void 0 ? void 0 : _a.separator;
}

function isSeparatorAfter(page, pages) {
  var _a;

  return (_a = pages[pages.indexOf(page) + 1]) === null || _a === void 0 ? void 0 : _a.separator;
}
},{"preact/jsx-runtime":"../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js","classnames":"../node_modules/classnames/index.js","preact":"../node_modules/preact/dist/preact.module.js"}],"pagination/pagination-wc.tsx":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StkPaginationWC = void 0;

var jsx_runtime_1 = require("preact/jsx-runtime");

var preact_custom_element_1 = __importDefault(require("preact-custom-element"));

var hooks_1 = require("preact/hooks");

var pagination_1 = require("./pagination");

function StkPaginationWC(_a) {
  var currentPage = _a.currentPage,
      totalPages = _a.totalPages;
  var ref = (0, hooks_1.useRef)(null); // Events

  var pageChange = function pageChange(pageNumber) {
    var componentElement = ref.current.base.parentElement;
    componentElement.dispatchEvent(new CustomEvent('pageChange', {
      detail: {
        pageNumber: pageNumber
      }
    }));
  };

  return (0, jsx_runtime_1.jsx)(pagination_1.StkPagination, {
    ref: ref,
    currentPage: parseNumberProp(currentPage),
    totalPages: parseNumberProp(totalPages),
    onPageChange: pageChange
  }, void 0);
}

exports.StkPaginationWC = StkPaginationWC;

function parseNumberProp(prop) {
  return typeof prop === 'string' ? parseInt(prop, 10) : prop;
}

(0, preact_custom_element_1.default)(StkPaginationWC, 'stk-pagination', ['current-page', 'total-pages', 'data'], {
  shadow: false
});
},{"preact/jsx-runtime":"../node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js","preact-custom-element":"../node_modules/preact-custom-element/dist/preact-custom-element.esm.js","preact/hooks":"../node_modules/preact/hooks/dist/hooks.module.js","./pagination":"pagination/pagination.tsx"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56168" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","pagination/pagination-wc.tsx"], null)
//# sourceMappingURL=/pagination-wc.bc916dc8.js.map