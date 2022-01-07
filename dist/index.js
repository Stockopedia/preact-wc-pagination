'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('preact/jsx-runtime');
var preact = require('preact');

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
var StkPagination = /** @class */ (function (_super) {
    __extends(StkPagination, _super);
    function StkPagination(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    StkPagination.prototype.logSomething = function () {
        console.log('LOG FROM THE PAGINATION');
    };
    StkPagination.prototype.render = function (_a) {
        var totalPages = _a.totalPages, currentPage = _a.currentPage, onPageChange = _a.onPageChange;
        this.logSomething();
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
    };
    return StkPagination;
}(preact.Component));
// export function StkPagination2({ totalPages, currentPage, onPageChange }: PaginationProps) {
//   totalPages = totalPages || MAX_PAGES;
//
//   const buildPageNumber = (number: number): PageData => ({
//     number,
//     selected: number === currentPage,
//     separator: false,
//   })
//
//   const handlePageChange = (number: number) => {
//     onPageChange(number);
//   }
//
//   const generatePages = (): ReadonlyArray<PageData> => {
//     // Based on simple-pagination.js algorithm
//     // https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
//     const last = totalPages
//     const left = currentPage - PAGINATION_DELTA
//     const right = currentPage + PAGINATION_DELTA + 1
//
//     const range = Array.from(new Array(last), (n, index) => index + 1).filter(
//       (page) => {
//         return page === 1 || page === last || (left <= page && page < right)
//       },
//     )
//
//     const results: PageData[] = []
//
//     let previousPage: number
//     range.forEach((page) => {
//       if (previousPage) {
//         if (page - previousPage === 2) {
//           results.push(buildPageNumber(previousPage + 1))
//         } else if (page - previousPage !== 1) {
//           results.push({ separator: true })
//         }
//       }
//       results.push(buildPageNumber(page))
//       previousPage = page
//     })
//
//     return results
//   }
//
//   const pages = generatePages()
//   const hasPreviousPage = 0 < currentPage - 1
//   const hasNextPage = currentPage + 1 <= totalPages
//
//   return (
//     <>
//       <nav className="stk-pagination">
//         {hasPreviousPage ? (
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             className={classNames(
//               'stk-pagination__button',
//               'stk-pagination__button--prev',
//               'stk-pagination__button--first',
//             )}
//           >
//             Previous
//           </button>
//         ) : (
//           <span
//             className={classNames(
//               'stk-pagination__button',
//               'stk-pagination__button--prev',
//               'stk-pagination__button--first',
//               'stk-pagination__button--disabled',
//             )}
//           >
//             Previous
//           </span>
//         )}
//         {pages.map((page, index) => (
//           <Fragment key={page}>
//             {page.number ? (
//               <button
//                 onClick={() => handlePageChange(page.number)}
//                 className={classNames('stk-pagination__button', {
//                   'stk-pagination__button--selected': page.selected,
//                   'stk-pagination__button--first': isSeparatorPrior(
//                     page,
//                     pages,
//                   ),
//                   'stk-pagination__button--last': isSeparatorAfter(page, pages),
//                 })}
//                 key={index}
//               >
//                 {page.number}
//               </button>
//             ) : (
//               <span className="stk-pagination__separator">&hellip;</span>
//             )}
//           </Fragment>
//         ))}
//         {hasNextPage ? (
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             className={classNames(
//               'stk-pagination__button',
//               'stk-pagination__button--next',
//               'stk-pagination__button--last',
//             )}
//           >
//             Next
//           </button>
//         ) : (
//           <span
//             className={classNames(
//               'stk-pagination__button',
//               'stk-pagination__button--next',
//               'stk-pagination__button--last',
//               'stk-pagination__button--disabled',
//             )}
//           >
//             Next
//           </span>
//         )}
//       </nav>
//     </>
//   )
// }
function isSeparatorPrior(page, pages) {
    var _a;
    return (_a = pages[pages.indexOf(page) - 1]) === null || _a === void 0 ? void 0 : _a.separator;
}
function isSeparatorAfter(page, pages) {
    var _a;
    return (_a = pages[pages.indexOf(page) + 1]) === null || _a === void 0 ? void 0 : _a.separator;
}

exports.StkPagination = StkPagination;
//# sourceMappingURL=index.js.map
