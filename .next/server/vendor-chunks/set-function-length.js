"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/set-function-length";
exports.ids = ["vendor-chunks/set-function-length"];
exports.modules = {

/***/ "(ssr)/./node_modules/set-function-length/index.js":
/*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\nvar define = __webpack_require__(/*! define-data-property */ \"(ssr)/./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(ssr)/./node_modules/has-property-descriptors/index.js\")();\nvar gOPD = __webpack_require__(/*! gopd */ \"(ssr)/./node_modules/gopd/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(ssr)/./node_modules/es-errors/type.js\");\nvar $floor = GetIntrinsic(\"%Math.floor%\");\n/** @typedef {(...args: unknown[]) => unknown} Func */ /** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */ module.exports = function setFunctionLength(fn, length) {\n    if (typeof fn !== \"function\") {\n        throw new $TypeError(\"`fn` is not a function\");\n    }\n    if (typeof length !== \"number\" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {\n        throw new $TypeError(\"`length` must be a positive 32-bit integer\");\n    }\n    var loose = arguments.length > 2 && !!arguments[2];\n    var functionLengthIsConfigurable = true;\n    var functionLengthIsWritable = true;\n    if (\"length\" in fn && gOPD) {\n        var desc = gOPD(fn, \"length\");\n        if (desc && !desc.configurable) {\n            functionLengthIsConfigurable = false;\n        }\n        if (desc && !desc.writable) {\n            functionLengthIsWritable = false;\n        }\n    }\n    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {\n        if (hasDescriptors) {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length, true, true);\n        } else {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length);\n        }\n    }\n    return fn;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2V0LWZ1bmN0aW9uLWxlbmd0aC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBQzNCLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlFLGlCQUFpQkYsbUJBQU9BLENBQUM7QUFDN0IsSUFBSUcsT0FBT0gsbUJBQU9BLENBQUM7QUFFbkIsSUFBSUksYUFBYUosbUJBQU9BLENBQUM7QUFDekIsSUFBSUssU0FBU04sYUFBYTtBQUUxQixvREFBb0QsR0FFcEQsaUZBQWlGLEdBQ2pGTyxPQUFPQyxPQUFPLEdBQUcsU0FBU0Msa0JBQWtCQyxFQUFFLEVBQUVDLE1BQU07SUFDckQsSUFBSSxPQUFPRCxPQUFPLFlBQVk7UUFDN0IsTUFBTSxJQUFJTCxXQUFXO0lBQ3RCO0lBQ0EsSUFBSSxPQUFPTSxXQUFXLFlBQVlBLFNBQVMsS0FBS0EsU0FBUyxjQUFjTCxPQUFPSyxZQUFZQSxRQUFRO1FBQ2pHLE1BQU0sSUFBSU4sV0FBVztJQUN0QjtJQUVBLElBQUlPLFFBQVFDLFVBQVVGLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQ0UsU0FBUyxDQUFDLEVBQUU7SUFFbEQsSUFBSUMsK0JBQStCO0lBQ25DLElBQUlDLDJCQUEyQjtJQUMvQixJQUFJLFlBQVlMLE1BQU1OLE1BQU07UUFDM0IsSUFBSVksT0FBT1osS0FBS00sSUFBSTtRQUNwQixJQUFJTSxRQUFRLENBQUNBLEtBQUtDLFlBQVksRUFBRTtZQUMvQkgsK0JBQStCO1FBQ2hDO1FBQ0EsSUFBSUUsUUFBUSxDQUFDQSxLQUFLRSxRQUFRLEVBQUU7WUFDM0JILDJCQUEyQjtRQUM1QjtJQUNEO0lBRUEsSUFBSUQsZ0NBQWdDQyw0QkFBNEIsQ0FBQ0gsT0FBTztRQUN2RSxJQUFJVCxnQkFBZ0I7WUFDbkJELE9BQU8sa0NBQWtDLEdBQUlRLElBQUssVUFBVUMsUUFBUSxNQUFNO1FBQzNFLE9BQU87WUFDTlQsT0FBTyxrQ0FBa0MsR0FBSVEsSUFBSyxVQUFVQztRQUM3RDtJQUNEO0lBQ0EsT0FBT0Q7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2xvcHJpbS8uL25vZGVfbW9kdWxlcy9zZXQtZnVuY3Rpb24tbGVuZ3RoL2luZGV4LmpzPzkzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1kYXRhLXByb3BlcnR5Jyk7XG52YXIgaGFzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdoYXMtcHJvcGVydHktZGVzY3JpcHRvcnMnKSgpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzL3R5cGUnKTtcbnZhciAkZmxvb3IgPSBHZXRJbnRyaW5zaWMoJyVNYXRoLmZsb29yJScpO1xuXG4vKiogQHR5cGVkZWYgeyguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd259IEZ1bmMgKi9cblxuLyoqIEB0eXBlIHs8VCBleHRlbmRzIEZ1bmMgPSBGdW5jPihmbjogVCwgbGVuZ3RoOiBudW1iZXIsIGxvb3NlPzogYm9vbGVhbikgPT4gVH0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0RnVuY3Rpb25MZW5ndGgoZm4sIGxlbmd0aCkge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BmbmAgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicgfHwgbGVuZ3RoIDwgMCB8fCBsZW5ndGggPiAweEZGRkZGRkZGIHx8ICRmbG9vcihsZW5ndGgpICE9PSBsZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGxlbmd0aGAgbXVzdCBiZSBhIHBvc2l0aXZlIDMyLWJpdCBpbnRlZ2VyJyk7XG5cdH1cblxuXHR2YXIgbG9vc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAhIWFyZ3VtZW50c1syXTtcblxuXHR2YXIgZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IHRydWU7XG5cdHZhciBmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgPSB0cnVlO1xuXHRpZiAoJ2xlbmd0aCcgaW4gZm4gJiYgZ09QRCkge1xuXHRcdHZhciBkZXNjID0gZ09QRChmbiwgJ2xlbmd0aCcpO1xuXHRcdGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoZGVzYyAmJiAhZGVzYy53cml0YWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgfHwgZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIHx8ICFsb29zZSkge1xuXHRcdGlmIChoYXNEZXNjcmlwdG9ycykge1xuXHRcdFx0ZGVmaW5lKC8qKiBAdHlwZSB7UGFyYW1ldGVyczxkZWZpbmU+WzBdfSAqLyAoZm4pLCAnbGVuZ3RoJywgbGVuZ3RoLCB0cnVlLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVmaW5lKC8qKiBAdHlwZSB7UGFyYW1ldGVyczxkZWZpbmU+WzBdfSAqLyAoZm4pLCAnbGVuZ3RoJywgbGVuZ3RoKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZuO1xufTtcbiJdLCJuYW1lcyI6WyJHZXRJbnRyaW5zaWMiLCJyZXF1aXJlIiwiZGVmaW5lIiwiaGFzRGVzY3JpcHRvcnMiLCJnT1BEIiwiJFR5cGVFcnJvciIsIiRmbG9vciIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXRGdW5jdGlvbkxlbmd0aCIsImZuIiwibGVuZ3RoIiwibG9vc2UiLCJhcmd1bWVudHMiLCJmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlIiwiZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIiwiZGVzYyIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/set-function-length/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/set-function-length/index.js":
/*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(action-browser)/./node_modules/get-intrinsic/index.js\");\nvar define = __webpack_require__(/*! define-data-property */ \"(action-browser)/./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(action-browser)/./node_modules/has-property-descriptors/index.js\")();\nvar gOPD = __webpack_require__(/*! gopd */ \"(action-browser)/./node_modules/gopd/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(action-browser)/./node_modules/es-errors/type.js\");\nvar $floor = GetIntrinsic(\"%Math.floor%\");\n/** @typedef {(...args: unknown[]) => unknown} Func */ /** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */ module.exports = function setFunctionLength(fn, length) {\n    if (typeof fn !== \"function\") {\n        throw new $TypeError(\"`fn` is not a function\");\n    }\n    if (typeof length !== \"number\" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {\n        throw new $TypeError(\"`length` must be a positive 32-bit integer\");\n    }\n    var loose = arguments.length > 2 && !!arguments[2];\n    var functionLengthIsConfigurable = true;\n    var functionLengthIsWritable = true;\n    if (\"length\" in fn && gOPD) {\n        var desc = gOPD(fn, \"length\");\n        if (desc && !desc.configurable) {\n            functionLengthIsConfigurable = false;\n        }\n        if (desc && !desc.writable) {\n            functionLengthIsWritable = false;\n        }\n    }\n    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {\n        if (hasDescriptors) {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length, true, true);\n        } else {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length);\n        }\n    }\n    return fn;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9zZXQtZnVuY3Rpb24tbGVuZ3RoL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsZUFBZUMsbUJBQU9BLENBQUM7QUFDM0IsSUFBSUMsU0FBU0QsbUJBQU9BLENBQUM7QUFDckIsSUFBSUUsaUJBQWlCRixtQkFBT0EsQ0FBQztBQUM3QixJQUFJRyxPQUFPSCxtQkFBT0EsQ0FBQztBQUVuQixJQUFJSSxhQUFhSixtQkFBT0EsQ0FBQztBQUN6QixJQUFJSyxTQUFTTixhQUFhO0FBRTFCLG9EQUFvRCxHQUVwRCxpRkFBaUYsR0FDakZPLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxrQkFBa0JDLEVBQUUsRUFBRUMsTUFBTTtJQUNyRCxJQUFJLE9BQU9ELE9BQU8sWUFBWTtRQUM3QixNQUFNLElBQUlMLFdBQVc7SUFDdEI7SUFDQSxJQUFJLE9BQU9NLFdBQVcsWUFBWUEsU0FBUyxLQUFLQSxTQUFTLGNBQWNMLE9BQU9LLFlBQVlBLFFBQVE7UUFDakcsTUFBTSxJQUFJTixXQUFXO0lBQ3RCO0lBRUEsSUFBSU8sUUFBUUMsVUFBVUYsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDRSxTQUFTLENBQUMsRUFBRTtJQUVsRCxJQUFJQywrQkFBK0I7SUFDbkMsSUFBSUMsMkJBQTJCO0lBQy9CLElBQUksWUFBWUwsTUFBTU4sTUFBTTtRQUMzQixJQUFJWSxPQUFPWixLQUFLTSxJQUFJO1FBQ3BCLElBQUlNLFFBQVEsQ0FBQ0EsS0FBS0MsWUFBWSxFQUFFO1lBQy9CSCwrQkFBK0I7UUFDaEM7UUFDQSxJQUFJRSxRQUFRLENBQUNBLEtBQUtFLFFBQVEsRUFBRTtZQUMzQkgsMkJBQTJCO1FBQzVCO0lBQ0Q7SUFFQSxJQUFJRCxnQ0FBZ0NDLDRCQUE0QixDQUFDSCxPQUFPO1FBQ3ZFLElBQUlULGdCQUFnQjtZQUNuQkQsT0FBTyxrQ0FBa0MsR0FBSVEsSUFBSyxVQUFVQyxRQUFRLE1BQU07UUFDM0UsT0FBTztZQUNOVCxPQUFPLGtDQUFrQyxHQUFJUSxJQUFLLFVBQVVDO1FBQzdEO0lBQ0Q7SUFDQSxPQUFPRDtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG9wcmltLy4vbm9kZV9tb2R1bGVzL3NldC1mdW5jdGlvbi1sZW5ndGgvaW5kZXguanM/OTM5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG52YXIgZGVmaW5lID0gcmVxdWlyZSgnZGVmaW5lLWRhdGEtcHJvcGVydHknKTtcbnZhciBoYXNEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpKCk7XG52YXIgZ09QRCA9IHJlcXVpcmUoJ2dvcGQnKTtcblxudmFyICRUeXBlRXJyb3IgPSByZXF1aXJlKCdlcy1lcnJvcnMvdHlwZScpO1xudmFyICRmbG9vciA9IEdldEludHJpbnNpYygnJU1hdGguZmxvb3IlJyk7XG5cbi8qKiBAdHlwZWRlZiB7KC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdW5rbm93bn0gRnVuYyAqL1xuXG4vKiogQHR5cGUgezxUIGV4dGVuZHMgRnVuYyA9IEZ1bmM+KGZuOiBULCBsZW5ndGg6IG51bWJlciwgbG9vc2U/OiBib29sZWFuKSA9PiBUfSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXRGdW5jdGlvbkxlbmd0aChmbiwgbGVuZ3RoKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGZuYCBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHR9XG5cdGlmICh0eXBlb2YgbGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBsZW5ndGggPCAwIHx8IGxlbmd0aCA+IDB4RkZGRkZGRkYgfHwgJGZsb29yKGxlbmd0aCkgIT09IGxlbmd0aCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgbGVuZ3RoYCBtdXN0IGJlIGEgcG9zaXRpdmUgMzItYml0IGludGVnZXInKTtcblx0fVxuXG5cdHZhciBsb29zZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmICEhYXJndW1lbnRzWzJdO1xuXG5cdHZhciBmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlID0gdHJ1ZTtcblx0dmFyIGZ1bmN0aW9uTGVuZ3RoSXNXcml0YWJsZSA9IHRydWU7XG5cdGlmICgnbGVuZ3RoJyBpbiBmbiAmJiBnT1BEKSB7XG5cdFx0dmFyIGRlc2MgPSBnT1BEKGZuLCAnbGVuZ3RoJyk7XG5cdFx0aWYgKGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlKSB7XG5cdFx0XHRmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmIChkZXNjICYmICFkZXNjLndyaXRhYmxlKSB7XG5cdFx0XHRmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRpZiAoZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSB8fCBmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgfHwgIWxvb3NlKSB7XG5cdFx0aWYgKGhhc0Rlc2NyaXB0b3JzKSB7XG5cdFx0XHRkZWZpbmUoLyoqIEB0eXBlIHtQYXJhbWV0ZXJzPGRlZmluZT5bMF19ICovIChmbiksICdsZW5ndGgnLCBsZW5ndGgsIHRydWUsIHRydWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZWZpbmUoLyoqIEB0eXBlIHtQYXJhbWV0ZXJzPGRlZmluZT5bMF19ICovIChmbiksICdsZW5ndGgnLCBsZW5ndGgpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZm47XG59O1xuIl0sIm5hbWVzIjpbIkdldEludHJpbnNpYyIsInJlcXVpcmUiLCJkZWZpbmUiLCJoYXNEZXNjcmlwdG9ycyIsImdPUEQiLCIkVHlwZUVycm9yIiwiJGZsb29yIiwibW9kdWxlIiwiZXhwb3J0cyIsInNldEZ1bmN0aW9uTGVuZ3RoIiwiZm4iLCJsZW5ndGgiLCJsb29zZSIsImFyZ3VtZW50cyIsImZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUiLCJmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUiLCJkZXNjIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/set-function-length/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/set-function-length/index.js":
/*!***************************************************!*\
  !*** ./node_modules/set-function-length/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(rsc)/./node_modules/get-intrinsic/index.js\");\nvar define = __webpack_require__(/*! define-data-property */ \"(rsc)/./node_modules/define-data-property/index.js\");\nvar hasDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(rsc)/./node_modules/has-property-descriptors/index.js\")();\nvar gOPD = __webpack_require__(/*! gopd */ \"(rsc)/./node_modules/gopd/index.js\");\nvar $TypeError = __webpack_require__(/*! es-errors/type */ \"(rsc)/./node_modules/es-errors/type.js\");\nvar $floor = GetIntrinsic(\"%Math.floor%\");\n/** @typedef {(...args: unknown[]) => unknown} Func */ /** @type {<T extends Func = Func>(fn: T, length: number, loose?: boolean) => T} */ module.exports = function setFunctionLength(fn, length) {\n    if (typeof fn !== \"function\") {\n        throw new $TypeError(\"`fn` is not a function\");\n    }\n    if (typeof length !== \"number\" || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {\n        throw new $TypeError(\"`length` must be a positive 32-bit integer\");\n    }\n    var loose = arguments.length > 2 && !!arguments[2];\n    var functionLengthIsConfigurable = true;\n    var functionLengthIsWritable = true;\n    if (\"length\" in fn && gOPD) {\n        var desc = gOPD(fn, \"length\");\n        if (desc && !desc.configurable) {\n            functionLengthIsConfigurable = false;\n        }\n        if (desc && !desc.writable) {\n            functionLengthIsWritable = false;\n        }\n    }\n    if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {\n        if (hasDescriptors) {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length, true, true);\n        } else {\n            define(/** @type {Parameters<define>[0]} */ fn, \"length\", length);\n        }\n    }\n    return fn;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2V0LWZ1bmN0aW9uLWxlbmd0aC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLGVBQWVDLG1CQUFPQSxDQUFDO0FBQzNCLElBQUlDLFNBQVNELG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlFLGlCQUFpQkYsbUJBQU9BLENBQUM7QUFDN0IsSUFBSUcsT0FBT0gsbUJBQU9BLENBQUM7QUFFbkIsSUFBSUksYUFBYUosbUJBQU9BLENBQUM7QUFDekIsSUFBSUssU0FBU04sYUFBYTtBQUUxQixvREFBb0QsR0FFcEQsaUZBQWlGLEdBQ2pGTyxPQUFPQyxPQUFPLEdBQUcsU0FBU0Msa0JBQWtCQyxFQUFFLEVBQUVDLE1BQU07SUFDckQsSUFBSSxPQUFPRCxPQUFPLFlBQVk7UUFDN0IsTUFBTSxJQUFJTCxXQUFXO0lBQ3RCO0lBQ0EsSUFBSSxPQUFPTSxXQUFXLFlBQVlBLFNBQVMsS0FBS0EsU0FBUyxjQUFjTCxPQUFPSyxZQUFZQSxRQUFRO1FBQ2pHLE1BQU0sSUFBSU4sV0FBVztJQUN0QjtJQUVBLElBQUlPLFFBQVFDLFVBQVVGLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQ0UsU0FBUyxDQUFDLEVBQUU7SUFFbEQsSUFBSUMsK0JBQStCO0lBQ25DLElBQUlDLDJCQUEyQjtJQUMvQixJQUFJLFlBQVlMLE1BQU1OLE1BQU07UUFDM0IsSUFBSVksT0FBT1osS0FBS00sSUFBSTtRQUNwQixJQUFJTSxRQUFRLENBQUNBLEtBQUtDLFlBQVksRUFBRTtZQUMvQkgsK0JBQStCO1FBQ2hDO1FBQ0EsSUFBSUUsUUFBUSxDQUFDQSxLQUFLRSxRQUFRLEVBQUU7WUFDM0JILDJCQUEyQjtRQUM1QjtJQUNEO0lBRUEsSUFBSUQsZ0NBQWdDQyw0QkFBNEIsQ0FBQ0gsT0FBTztRQUN2RSxJQUFJVCxnQkFBZ0I7WUFDbkJELE9BQU8sa0NBQWtDLEdBQUlRLElBQUssVUFBVUMsUUFBUSxNQUFNO1FBQzNFLE9BQU87WUFDTlQsT0FBTyxrQ0FBa0MsR0FBSVEsSUFBSyxVQUFVQztRQUM3RDtJQUNEO0lBQ0EsT0FBT0Q7QUFDUiIsInNvdXJjZXMiOlsid2VicGFjazovL2xvcHJpbS8uL25vZGVfbW9kdWxlcy9zZXQtZnVuY3Rpb24tbGVuZ3RoL2luZGV4LmpzPzkzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xudmFyIGRlZmluZSA9IHJlcXVpcmUoJ2RlZmluZS1kYXRhLXByb3BlcnR5Jyk7XG52YXIgaGFzRGVzY3JpcHRvcnMgPSByZXF1aXJlKCdoYXMtcHJvcGVydHktZGVzY3JpcHRvcnMnKSgpO1xudmFyIGdPUEQgPSByZXF1aXJlKCdnb3BkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gcmVxdWlyZSgnZXMtZXJyb3JzL3R5cGUnKTtcbnZhciAkZmxvb3IgPSBHZXRJbnRyaW5zaWMoJyVNYXRoLmZsb29yJScpO1xuXG4vKiogQHR5cGVkZWYgeyguLi5hcmdzOiB1bmtub3duW10pID0+IHVua25vd259IEZ1bmMgKi9cblxuLyoqIEB0eXBlIHs8VCBleHRlbmRzIEZ1bmMgPSBGdW5jPihmbjogVCwgbGVuZ3RoOiBudW1iZXIsIGxvb3NlPzogYm9vbGVhbikgPT4gVH0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0RnVuY3Rpb25MZW5ndGgoZm4sIGxlbmd0aCkge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2BmbmAgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0fVxuXHRpZiAodHlwZW9mIGxlbmd0aCAhPT0gJ251bWJlcicgfHwgbGVuZ3RoIDwgMCB8fCBsZW5ndGggPiAweEZGRkZGRkZGIHx8ICRmbG9vcihsZW5ndGgpICE9PSBsZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGxlbmd0aGAgbXVzdCBiZSBhIHBvc2l0aXZlIDMyLWJpdCBpbnRlZ2VyJyk7XG5cdH1cblxuXHR2YXIgbG9vc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiAhIWFyZ3VtZW50c1syXTtcblxuXHR2YXIgZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IHRydWU7XG5cdHZhciBmdW5jdGlvbkxlbmd0aElzV3JpdGFibGUgPSB0cnVlO1xuXHRpZiAoJ2xlbmd0aCcgaW4gZm4gJiYgZ09QRCkge1xuXHRcdHZhciBkZXNjID0gZ09QRChmbiwgJ2xlbmd0aCcpO1xuXHRcdGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc0NvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZiAoZGVzYyAmJiAhZGVzYy53cml0YWJsZSkge1xuXHRcdFx0ZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0aWYgKGZ1bmN0aW9uTGVuZ3RoSXNDb25maWd1cmFibGUgfHwgZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIHx8ICFsb29zZSkge1xuXHRcdGlmIChoYXNEZXNjcmlwdG9ycykge1xuXHRcdFx0ZGVmaW5lKC8qKiBAdHlwZSB7UGFyYW1ldGVyczxkZWZpbmU+WzBdfSAqLyAoZm4pLCAnbGVuZ3RoJywgbGVuZ3RoLCB0cnVlLCB0cnVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGVmaW5lKC8qKiBAdHlwZSB7UGFyYW1ldGVyczxkZWZpbmU+WzBdfSAqLyAoZm4pLCAnbGVuZ3RoJywgbGVuZ3RoKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZuO1xufTtcbiJdLCJuYW1lcyI6WyJHZXRJbnRyaW5zaWMiLCJyZXF1aXJlIiwiZGVmaW5lIiwiaGFzRGVzY3JpcHRvcnMiLCJnT1BEIiwiJFR5cGVFcnJvciIsIiRmbG9vciIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXRGdW5jdGlvbkxlbmd0aCIsImZuIiwibGVuZ3RoIiwibG9vc2UiLCJhcmd1bWVudHMiLCJmdW5jdGlvbkxlbmd0aElzQ29uZmlndXJhYmxlIiwiZnVuY3Rpb25MZW5ndGhJc1dyaXRhYmxlIiwiZGVzYyIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/set-function-length/index.js\n");

/***/ })

};
;