"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./components/shared/Search.tsx":
/*!**************************************!*\
  !*** ./components/shared/Search.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Search: function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ Search auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Search = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const delayDebounceFn = setTimeout(()=>{\n            if (query) {\n                const newUrl = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.formUrlQuery)({\n                    searchParams: searchParams.toString(),\n                    key: \"query\",\n                    value: query\n                });\n                router.push(newUrl, {\n                    scroll: false\n                });\n            } else {\n                const newUrl = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_5__.removeKeysFromQuery)({\n                    searchParams: searchParams.toString(),\n                    keysToRemove: [\n                        \"query\"\n                    ]\n                });\n                router.push(newUrl, {\n                    scroll: false\n                });\n            }\n        }, 300);\n        return ()=>clearTimeout(delayDebounceFn);\n    }, [\n        router,\n        searchParams,\n        query\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                // src=\"/assets/icons/search.svg\"\n                alt: \"search\",\n                width: 24,\n                height: 24\n            }, void 0, false, {\n                fileName: \"/home/leo/Desktop/lo/loprim/components/shared/Search.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                className: \"search-field\",\n                placeholder: \"Search\",\n                onChange: (e)=>setQuery(e.target.value)\n            }, void 0, false, {\n                fileName: \"/home/leo/Desktop/lo/loprim/components/shared/Search.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/leo/Desktop/lo/loprim/components/shared/Search.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Search, \"Hvkfsg/0aRQekmBJdwFrQUwz2So=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL1NlYXJjaC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUM4QjtBQUNqQjtBQUVFO0FBQ2tCO0FBRXpELE1BQU1RLFNBQVM7O0lBQ3BCLE1BQU1DLFNBQVNSLDBEQUFTQTtJQUN4QixNQUFNUyxlQUFlUixnRUFBZUE7SUFDcEMsTUFBTSxDQUFDUyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGtCQUFrQkMsV0FBVztZQUNqQyxJQUFJSCxPQUFPO2dCQUNULE1BQU1JLFNBQVNULHdEQUFZQSxDQUFDO29CQUMxQkksY0FBY0EsYUFBYU0sUUFBUTtvQkFDbkNDLEtBQUs7b0JBQ0xDLE9BQU9QO2dCQUNUO2dCQUVBRixPQUFPVSxJQUFJLENBQUNKLFFBQVE7b0JBQUVLLFFBQVE7Z0JBQU07WUFDdEMsT0FBTztnQkFDTCxNQUFNTCxTQUFTUiwrREFBbUJBLENBQUM7b0JBQ2pDRyxjQUFjQSxhQUFhTSxRQUFRO29CQUNuQ0ssY0FBYzt3QkFBQztxQkFBUTtnQkFDekI7Z0JBRUFaLE9BQU9VLElBQUksQ0FBQ0osUUFBUTtvQkFBRUssUUFBUTtnQkFBTTtZQUN0QztRQUNGLEdBQUc7UUFFSCxPQUFPLElBQU1FLGFBQWFUO0lBQzVCLEdBQUc7UUFBQ0o7UUFBUUM7UUFBY0M7S0FBTTtJQUVoQyxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN4QixrREFBS0E7Z0JBQ0osaUNBQWlDO2dCQUNqQ3lCLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Ozs7OzswQkFHViw4REFBQ3RCLHVEQUFLQTtnQkFDSm1CLFdBQVU7Z0JBQ1ZJLGFBQVk7Z0JBQ1pDLFVBQVUsQ0FBQ0MsSUFBTWxCLFNBQVNrQixFQUFFQyxNQUFNLENBQUNiLEtBQUs7Ozs7Ozs7Ozs7OztBQUloRCxFQUFFO0dBNUNXVjs7UUFDSVAsc0RBQVNBO1FBQ0hDLDREQUFlQTs7O0tBRnpCTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NoYXJlZC9TZWFyY2gudHN4P2Y4ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgZm9ybVVybFF1ZXJ5LCByZW1vdmVLZXlzRnJvbVF1ZXJ5IH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2ggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRlbGF5RGVib3VuY2VGbiA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IGZvcm1VcmxRdWVyeSh7XG4gICAgICAgICAgc2VhcmNoUGFyYW1zOiBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKSxcbiAgICAgICAgICBrZXk6IFwicXVlcnlcIixcbiAgICAgICAgICB2YWx1ZTogcXVlcnksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJvdXRlci5wdXNoKG5ld1VybCwgeyBzY3JvbGw6IGZhbHNlIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3VXJsID0gcmVtb3ZlS2V5c0Zyb21RdWVyeSh7XG4gICAgICAgICAgc2VhcmNoUGFyYW1zOiBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKSxcbiAgICAgICAgICBrZXlzVG9SZW1vdmU6IFtcInF1ZXJ5XCJdLFxuICAgICAgICB9KTtcblxuICAgICAgICByb3V0ZXIucHVzaChuZXdVcmwsIHsgc2Nyb2xsOiBmYWxzZSB9KTtcbiAgICAgIH1cbiAgICB9LCAzMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChkZWxheURlYm91bmNlRm4pO1xuICB9LCBbcm91dGVyLCBzZWFyY2hQYXJhbXMsIHF1ZXJ5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgPEltYWdlXG4gICAgICAgIC8vIHNyYz1cIi9hc3NldHMvaWNvbnMvc2VhcmNoLnN2Z1wiXG4gICAgICAgIGFsdD1cInNlYXJjaFwiXG4gICAgICAgIHdpZHRoPXsyNH1cbiAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgIC8+XG5cbiAgICAgIDxJbnB1dFxuICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtZmllbGRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbnB1dCIsImZvcm1VcmxRdWVyeSIsInJlbW92ZUtleXNGcm9tUXVlcnkiLCJTZWFyY2giLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJxdWVyeSIsInNldFF1ZXJ5IiwiZGVsYXlEZWJvdW5jZUZuIiwic2V0VGltZW91dCIsIm5ld1VybCIsInRvU3RyaW5nIiwia2V5IiwidmFsdWUiLCJwdXNoIiwic2Nyb2xsIiwia2V5c1RvUmVtb3ZlIiwiY2xlYXJUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/Search.tsx\n"));

/***/ })

});