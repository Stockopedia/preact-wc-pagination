'use strict';

var jsxRuntime = require('preact/jsx-runtime');
var preact = require('preact');
var hooks = require('preact/hooks');

function r(){return (r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);}return t}).apply(this,arguments)}function i(t){this.getChildContext=function(){return t.context};var e=t.children,n=function(t,e){if(null==t)return {};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e.indexOf(n=i[o])>=0||(r[n]=t[n]);return r}(t,["context","children"]);return preact.cloneElement(e,n)}function a(){var o=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(o),this._vdom=preact.h(i,r({},this._props,{context:o.detail.context}),function e(n,o){if(3===n.nodeType)return n.data;if(1!==n.nodeType)return null;var r=[],i={},a=0,c=n.attributes,l=n.childNodes;for(a=c.length;a--;)"slot"!==c[a].name&&(i[c[a].name]=c[a].value,i[s(c[a].name)]=c[a].value);for(a=l.length;a--;){var p=e(l[a],null),d=l[a].slot;d?i[d]=preact.h(u,{name:d},p):r[a]=p;}var h=o?preact.h(u,null,r):r;return preact.h(o||n.nodeName.toLowerCase(),i,h)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?preact.hydrate:preact.render)(this._vdom,this._root);}function s(t){return t.replace(/-(\w)/g,function(t,e){return e?e.toUpperCase():""})}function c(t,e,r){if(this._vdom){var i={};i[t]=r=null==r?void 0:r,i[s(t)]=r,this._vdom=preact.cloneElement(this._vdom,i),preact.render(this._vdom,this._root);}}function l(){preact.render(this._vdom=null,this._root);}function u(e,n){var o=this;return preact.h("slot",r({},e,{ref:function(t){t?(o.ref=t,o._listener||(o._listener=function(t){t.stopPropagation(),t.detail.context=n;},t.addEventListener("_preact",o._listener))):o.ref.removeEventListener("_preact",o._listener);}}))}function register(t,e,n,o){function r(){var e=Reflect.construct(HTMLElement,[],r);return e._vdomComponent=t,e._root=o&&o.shadow?e.attachShadow({mode:"open"}):e,e}return (r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=a,r.prototype.attributeChangedCallback=c,r.prototype.disconnectedCallback=l,n=n||t.observedAttributes||Object.keys(t.propTypes||{}),r.observedAttributes=n,n.forEach(function(t){Object.defineProperty(r.prototype,t,{get:function(){return this._vdom.props[t]},set:function(e){this._vdom?this.attributeChangedCallback(t,null,e):(this._props||(this._props={}),this._props[t]=e,this.connectedCallback());var n=typeof e;null!=e&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(t,e);}});}),customElements.define(e||t.tagName||t.displayName||t.name,r)}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

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

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

var PAGINATION_DELTA = 2;
var MAX_PAGES = 5;
function StkPagination(_a) {
    var totalPages = _a.totalPages, currentPage = _a.currentPage, onPageChange = _a.onPageChange;
    totalPages = totalPages || MAX_PAGES;
    var buildPageNumber = function (number) { return ({
        number: number,
        selected: number === currentPage,
        separator: false
    }); };
    var handlePageChange = function (number) {
        onPageChange(number);
    };
    var generatePages = function () {
        // Based on simple-pagination.js algorithm
        // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
        var last = totalPages;
        var left = currentPage - PAGINATION_DELTA;
        var right = currentPage + PAGINATION_DELTA + 1;
        var range = Array.from(new Array(last), function (n, index) { return index + 1; }).filter(function (page) {
            return page === 1 || page === last || (left <= page && page < right);
        });
        var results = [];
        var previousPage;
        range.forEach(function (page) {
            if (previousPage) {
                if (page - previousPage === 2) {
                    results.push(buildPageNumber(previousPage + 1));
                }
                else if (page - previousPage !== 1) {
                    results.push({ separator: true });
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
    return (jsxRuntime.jsx(jsxRuntime.Fragment, { children: jsxRuntime.jsxs("nav", __assign({ className: "stk-pagination" }, { children: [hasPreviousPage ? (jsxRuntime.jsx("button", __assign({ onClick: function () { return handlePageChange(currentPage - 1); }, className: classNames('stk-pagination__button', 'stk-pagination__button--prev', 'stk-pagination__button--first') }, { children: "Previous" }), void 0)) : (jsxRuntime.jsx("span", __assign({ className: classNames('stk-pagination__button', 'stk-pagination__button--prev', 'stk-pagination__button--first', 'stk-pagination__button--disabled') }, { children: "Previous" }), void 0)), pages.map(function (page, index) { return (jsxRuntime.jsx(preact.Fragment, { children: page.number ? (jsxRuntime.jsx("button", __assign({ onClick: function () { return handlePageChange(page.number); }, className: classNames('stk-pagination__button', {
                            'stk-pagination__button--selected': page.selected,
                            'stk-pagination__button--first': isSeparatorPrior(page, pages),
                            'stk-pagination__button--last': isSeparatorAfter(page, pages)
                        }) }, { children: page.number }), index)) : (jsxRuntime.jsx("span", __assign({ className: "stk-pagination__separator" }, { children: "\u2026" }), void 0)) }, page)); }), hasNextPage ? (jsxRuntime.jsx("button", __assign({ onClick: function () { return handlePageChange(currentPage + 1); }, className: classNames('stk-pagination__button', 'stk-pagination__button--next', 'stk-pagination__button--last') }, { children: "Next" }), void 0)) : (jsxRuntime.jsx("span", __assign({ className: classNames('stk-pagination__button', 'stk-pagination__button--next', 'stk-pagination__button--last', 'stk-pagination__button--disabled') }, { children: "Next" }), void 0))] }), void 0) }, void 0));
}
function isSeparatorPrior(page, pages) {
    var _a;
    return (_a = pages[pages.indexOf(page) - 1]) === null || _a === void 0 ? void 0 : _a.separator;
}
function isSeparatorAfter(page, pages) {
    var _a;
    return (_a = pages[pages.indexOf(page) + 1]) === null || _a === void 0 ? void 0 : _a.separator;
}

function StkPaginationWC(_a) {
    var currentPage = _a.currentPage, totalPages = _a.totalPages;
    var ref = hooks.useRef(null);
    // Events
    var pageChange = function (pageNumber) {
        var componentElement = ref.current.base.parentElement;
        componentElement.dispatchEvent(new CustomEvent('pageChange', {
            detail: { pageNumber: pageNumber }
        }));
    };
    return (jsxRuntime.jsx(StkPagination, { ref: ref, currentPage: parseNumberProp(currentPage), totalPages: parseNumberProp(totalPages), onPageChange: pageChange }, void 0));
}
function parseNumberProp(prop) {
    return typeof prop === 'string' ? parseInt(prop, 10) : prop;
}
register(StkPaginationWC, 'stk-pagination', ['current-page', 'total-pages', 'data'], { shadow: false });
//# sourceMappingURL=index.js.map
