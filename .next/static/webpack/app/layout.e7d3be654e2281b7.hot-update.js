"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1d12f8496100\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZjRmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjFkMTJmODQ5NjEwMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ChatbotButton.tsx":
/*!******************************************!*\
  !*** ./src/components/ChatbotButton.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatbotButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Bot_Send_X_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Send,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/bot.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Send_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Send,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Bot_Send_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Bot,Send,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/send.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ChatbotButton() {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            content: \"Hi! I'm BLA's AI Assistant. I can help you understand loan processes, calculate payments, and answer questions about our lending for your business. How can I assist you today?\",\n            isUser: false\n        }\n    ]);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!input.trim() || isLoading) return;\n        const userMessage = input;\n        setInput(\"\");\n        setIsLoading(true);\n        // Add user message to chat\n        setMessages((prev)=>[\n                ...prev,\n                {\n                    content: userMessage,\n                    isUser: true\n                }\n            ]);\n        try {\n            // Prepare messages for API\n            const apiMessages = messages.map((msg)=>({\n                    role: msg.isUser ? \"user\" : \"assistant\",\n                    content: msg.content\n                }));\n            apiMessages.push({\n                role: \"user\",\n                content: userMessage\n            });\n            // Call our API endpoint\n            const response = await fetch(\"/api/chat\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    messages: apiMessages\n                })\n            });\n            if (!response.ok) throw new Error(\"API request failed\");\n            const data = await response.json();\n            // Add AI response to chat\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        content: data.content,\n                        isUser: false\n                    }\n                ]);\n        } catch (error) {\n            console.error(\"Chat error:\", error);\n            setMessages((prev)=>[\n                    ...prev,\n                    {\n                        content: \"I apologize, but I'm having trouble connecting right now. Please try again later.\",\n                        isUser: false\n                    }\n                ]);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setIsOpen(true),\n                className: \"fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50 group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Send_X_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        className: \"w-6 h-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-sm font-medium\",\n                        children: \"Ask BLA AI\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl flex flex-col z-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 border-b flex items-center justify-between bg-blue-600 text-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Send_X_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        className: \"w-6 h-6\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"font-semibold\",\n                                                children: \"BLA AI Assistant\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-xs text-blue-100\",\n                                                children: \"Powered by Business Lending Advocate\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setIsOpen(false),\n                                className: \"p-1 hover:bg-blue-700 rounded-full transition-colors\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Send_X_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    className: \"w-5 h-5\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50\",\n                        children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex \".concat(message.isUser ? \"justify-end\" : \"justify-start\"),\n                                children: [\n                                    !message.isUser && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2 flex-shrink-0\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Send_X_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            className: \"w-5 h-5 text-white\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                            lineNumber: 104,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"max-w-[80%] rounded-lg p-3 \".concat(message.isUser ? \"bg-blue-600 text-white rounded-br-none\" : \"bg-white text-gray-900 rounded-bl-none shadow-sm\"),\n                                        children: message.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"p-4 border-t bg-white flex gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: input,\n                                onChange: (e)=>setInput(e.target.value),\n                                placeholder: isLoading ? \"AI is thinking...\" : \"Ask me anything about business loans...\",\n                                disabled: isLoading,\n                                className: \"flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: isLoading,\n                                className: \"bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:bg-blue-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bot_Send_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"w-4 h-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"hidden sm:inline\",\n                                        children: isLoading ? \"Sending...\" : \"Send\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jonathanaranda/Projects/blabolt/src/components/ChatbotButton.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ChatbotButton, \"7KcNg9ccTAuoI7C1xEu3eJ5qa8c=\");\n_c = ChatbotButton;\nvar _c;\n$RefreshReg$(_c, \"ChatbotButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRib3RCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV3QztBQUNJO0FBTzdCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFZO1FBQ2xEO1lBQUVTLFNBQVM7WUFBbUxDLFFBQVE7UUFBTTtLQUM3TTtJQUNELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWUsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJLENBQUNOLE1BQU1PLElBQUksTUFBTUwsV0FBVztRQUVoQyxNQUFNTSxjQUFjUjtRQUNwQkMsU0FBUztRQUNURSxhQUFhO1FBRWIsMkJBQTJCO1FBQzNCTixZQUFZWSxDQUFBQSxPQUFRO21CQUFJQTtnQkFBTTtvQkFBRVgsU0FBU1U7b0JBQWFULFFBQVE7Z0JBQUs7YUFBRTtRQUVyRSxJQUFJO1lBQ0YsMkJBQTJCO1lBQzNCLE1BQU1XLGNBQWNkLFNBQVNlLEdBQUcsQ0FBQ0MsQ0FBQUEsTUFBUTtvQkFDdkNDLE1BQU1ELElBQUliLE1BQU0sR0FBRyxTQUFTO29CQUM1QkQsU0FBU2MsSUFBSWQsT0FBTztnQkFDdEI7WUFDQVksWUFBWUksSUFBSSxDQUFDO2dCQUFFRCxNQUFNO2dCQUFRZixTQUFTVTtZQUFZO1lBRXRELHdCQUF3QjtZQUN4QixNQUFNTyxXQUFXLE1BQU1DLE1BQU0sYUFBYTtnQkFDeENDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFekIsVUFBVWM7Z0JBQVk7WUFDL0M7WUFFQSxJQUFJLENBQUNLLFNBQVNPLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07WUFFbEMsTUFBTUMsT0FBTyxNQUFNVCxTQUFTVSxJQUFJO1lBRWhDLDBCQUEwQjtZQUMxQjVCLFlBQVlZLENBQUFBLE9BQVE7dUJBQUlBO29CQUFNO3dCQUFFWCxTQUFTMEIsS0FBSzFCLE9BQU87d0JBQUVDLFFBQVE7b0JBQU07aUJBQUU7UUFDekUsRUFBRSxPQUFPMkIsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZUFBZUE7WUFDN0I3QixZQUFZWSxDQUFBQSxPQUFRO3VCQUFJQTtvQkFBTTt3QkFDNUJYLFNBQVM7d0JBQ1RDLFFBQVE7b0JBQ1Y7aUJBQUU7UUFDSixTQUFVO1lBQ1JJLGFBQWE7UUFDZjtJQUNGO0lBRUEscUJBQ0U7OzBCQUVFLDhEQUFDeUI7Z0JBQ0NDLFNBQVMsSUFBTWxDLFVBQVU7Z0JBQ3pCbUMsV0FBVTs7a0NBRVYsOERBQUN4QyxzRkFBR0E7d0JBQUN3QyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNDO3dCQUFLRCxXQUFVO2tDQUFzQjs7Ozs7Ozs7Ozs7O1lBSXZDcEMsd0JBQ0MsOERBQUNzQztnQkFBSUYsV0FBVTs7a0NBRWIsOERBQUNFO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUlGLFdBQVU7O2tEQUNiLDhEQUFDeEMsc0ZBQUdBO3dDQUFDd0MsV0FBVTs7Ozs7O2tEQUNmLDhEQUFDRTs7MERBQ0MsOERBQUNDO2dEQUFHSCxXQUFVOzBEQUFnQjs7Ozs7OzBEQUM5Qiw4REFBQ0k7Z0RBQUVKLFdBQVU7MERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR3pDLDhEQUFDRjtnQ0FDQ0MsU0FBUyxJQUFNbEMsVUFBVTtnQ0FDekJtQyxXQUFVOzBDQUVWLDRFQUFDdEMsc0ZBQUNBO29DQUFDc0MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBS2pCLDhEQUFDRTt3QkFBSUYsV0FBVTtrQ0FDWmxDLFNBQVNlLEdBQUcsQ0FBQyxDQUFDd0IsU0FBU0Msc0JBQ3RCLDhEQUFDSjtnQ0FFQ0YsV0FBVyxRQUF5RCxPQUFqREssUUFBUXBDLE1BQU0sR0FBRyxnQkFBZ0I7O29DQUVuRCxDQUFDb0MsUUFBUXBDLE1BQU0sa0JBQ2QsOERBQUNpQzt3Q0FBSUYsV0FBVTtrREFDYiw0RUFBQ3hDLHNGQUFHQTs0Q0FBQ3dDLFdBQVU7Ozs7Ozs7Ozs7O2tEQUduQiw4REFBQ0U7d0NBQ0NGLFdBQVcsOEJBSVYsT0FIQ0ssUUFBUXBDLE1BQU0sR0FDViwyQ0FDQTtrREFHTG9DLFFBQVFyQyxPQUFPOzs7Ozs7OytCQWZic0M7Ozs7Ozs7Ozs7a0NBc0JYLDhEQUFDQzt3QkFBS0MsVUFBVWxDO3dCQUFjMEIsV0FBVTs7MENBQ3RDLDhEQUFDOUI7Z0NBQ0N1QyxNQUFLO2dDQUNMQyxPQUFPeEM7Z0NBQ1B5QyxVQUFVLENBQUNwQyxJQUFNSixTQUFTSSxFQUFFcUMsTUFBTSxDQUFDRixLQUFLO2dDQUN4Q0csYUFBYXpDLFlBQVksc0JBQXNCO2dDQUMvQzBDLFVBQVUxQztnQ0FDVjRCLFdBQVU7Ozs7OzswQ0FFWiw4REFBQ0Y7Z0NBQ0NXLE1BQUs7Z0NBQ0xLLFVBQVUxQztnQ0FDVjRCLFdBQVU7O2tEQUVWLDhEQUFDdkMsc0ZBQUlBO3dDQUFDdUMsV0FBVTs7Ozs7O2tEQUNoQiw4REFBQ0M7d0NBQUtELFdBQVU7a0RBQW9CNUIsWUFBWSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU83RTtHQXBJd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRib3RCdXR0b24udHN4P2M0YjQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3QsIFNlbmQsIFggfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5pbnRlcmZhY2UgTWVzc2FnZSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgaXNVc2VyOiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0Ym90QnV0dG9uKCkge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlPE1lc3NhZ2VbXT4oW1xuICAgIHsgY29udGVudDogXCJIaSEgSSdtIEJMQSdzIEFJIEFzc2lzdGFudC4gSSBjYW4gaGVscCB5b3UgdW5kZXJzdGFuZCBsb2FuIHByb2Nlc3NlcywgY2FsY3VsYXRlIHBheW1lbnRzLCBhbmQgYW5zd2VyIHF1ZXN0aW9ucyBhYm91dCBvdXIgbGVuZGluZyBmb3IgeW91ciBidXNpbmVzcy4gSG93IGNhbiBJIGFzc2lzdCB5b3UgdG9kYXk/XCIsIGlzVXNlcjogZmFsc2UgfVxuICBdKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWlucHV0LnRyaW0oKSB8fCBpc0xvYWRpbmcpIHJldHVybjtcblxuICAgIGNvbnN0IHVzZXJNZXNzYWdlID0gaW5wdXQ7XG4gICAgc2V0SW5wdXQoJycpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIC8vIEFkZCB1c2VyIG1lc3NhZ2UgdG8gY2hhdFxuICAgIHNldE1lc3NhZ2VzKHByZXYgPT4gWy4uLnByZXYsIHsgY29udGVudDogdXNlck1lc3NhZ2UsIGlzVXNlcjogdHJ1ZSB9XSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gUHJlcGFyZSBtZXNzYWdlcyBmb3IgQVBJXG4gICAgICBjb25zdCBhcGlNZXNzYWdlcyA9IG1lc3NhZ2VzLm1hcChtc2cgPT4gKHtcbiAgICAgICAgcm9sZTogbXNnLmlzVXNlciA/ICd1c2VyJyA6ICdhc3Npc3RhbnQnLFxuICAgICAgICBjb250ZW50OiBtc2cuY29udGVudFxuICAgICAgfSkpO1xuICAgICAgYXBpTWVzc2FnZXMucHVzaCh7IHJvbGU6ICd1c2VyJywgY29udGVudDogdXNlck1lc3NhZ2UgfSk7XG5cbiAgICAgIC8vIENhbGwgb3VyIEFQSSBlbmRwb2ludFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jaGF0Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZXM6IGFwaU1lc3NhZ2VzIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkJyk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBcbiAgICAgIC8vIEFkZCBBSSByZXNwb25zZSB0byBjaGF0XG4gICAgICBzZXRNZXNzYWdlcyhwcmV2ID0+IFsuLi5wcmV2LCB7IGNvbnRlbnQ6IGRhdGEuY29udGVudCwgaXNVc2VyOiBmYWxzZSB9XSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NoYXQgZXJyb3I6JywgZXJyb3IpO1xuICAgICAgc2V0TWVzc2FnZXMocHJldiA9PiBbLi4ucHJldiwge1xuICAgICAgICBjb250ZW50OiBcIkkgYXBvbG9naXplLCBidXQgSSdtIGhhdmluZyB0cm91YmxlIGNvbm5lY3RpbmcgcmlnaHQgbm93LiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgICAgICBpc1VzZXI6IGZhbHNlXG4gICAgICB9XSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBDaGF0IEJ1dHRvbiB3aXRoIExhYmVsICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS02IHJpZ2h0LTYgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweC00IHB5LTMgcm91bmRlZC1mdWxsIHNoYWRvdy1sZyBob3ZlcjpiZy1ibHVlLTcwMCB0cmFuc2l0aW9uLWFsbCB6LTUwIGdyb3VwXCJcbiAgICAgID5cbiAgICAgICAgPEJvdCBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPkFzayBCTEEgQUk8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAgey8qIFNpZGUgUGFuZWwgQ2hhdCBNb2RhbCAqL31cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXktMCByaWdodC0wIHctZnVsbCBzbTp3LVs0MDBweF0gYmctd2hpdGUgc2hhZG93LTJ4bCBmbGV4IGZsZXgtY29sIHotNTBcIj5cbiAgICAgICAgICB7LyogTW9kYWwgSGVhZGVyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJvcmRlci1iIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgIDxCb3QgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj5CTEEgQUkgQXNzaXN0YW50PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmx1ZS0xMDBcIj5Qb3dlcmVkIGJ5IEJ1c2luZXNzIExlbmRpbmcgQWR2b2NhdGU8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBob3ZlcjpiZy1ibHVlLTcwMCByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE1lc3NhZ2VzIEFyZWEgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgb3ZlcmZsb3cteS1hdXRvIHAtNCBzcGFjZS15LTQgYmctZ3JheS01MFwiPlxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCAke21lc3NhZ2UuaXNVc2VyID8gJ2p1c3RpZnktZW5kJyA6ICdqdXN0aWZ5LXN0YXJ0J31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyFtZXNzYWdlLmlzVXNlciAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBoLTggcm91bmRlZC1mdWxsIGJnLWJsdWUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1yLTIgZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Qm90IGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC13aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1heC13LVs4MCVdIHJvdW5kZWQtbGcgcC0zICR7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuaXNVc2VyXG4gICAgICAgICAgICAgICAgICAgICAgPyAnYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWJyLW5vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgOiAnYmctd2hpdGUgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWJsLW5vbmUgc2hhZG93LXNtJ1xuICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21lc3NhZ2UuY29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBJbnB1dCBBcmVhICovfVxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInAtNCBib3JkZXItdCBiZy13aGl0ZSBmbGV4IGdhcC0yXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aXNMb2FkaW5nID8gXCJBSSBpcyB0aGlua2luZy4uLlwiIDogXCJBc2sgbWUgYW55dGhpbmcgYWJvdXQgYnVzaW5lc3MgbG9hbnMuLi5cIn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlciByb3VuZGVkLWxnIHB4LTQgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgZGlzYWJsZWQ6YmctZ3JheS01MFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHB4LTQgcHktMiBob3ZlcjpiZy1ibHVlLTcwMCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBkaXNhYmxlZDpiZy1ibHVlLTQwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxTZW5kIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4gc206aW5saW5lXCI+e2lzTG9hZGluZyA/ICdTZW5kaW5nLi4uJyA6ICdTZW5kJ308L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJvdCIsIlNlbmQiLCJYIiwiQ2hhdGJvdEJ1dHRvbiIsImlzT3BlbiIsInNldElzT3BlbiIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJjb250ZW50IiwiaXNVc2VyIiwiaW5wdXQiLCJzZXRJbnB1dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJ1c2VyTWVzc2FnZSIsInByZXYiLCJhcGlNZXNzYWdlcyIsIm1hcCIsIm1zZyIsInJvbGUiLCJwdXNoIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJzcGFuIiwiZGl2IiwiaDMiLCJwIiwibWVzc2FnZSIsImluZGV4IiwiZm9ybSIsIm9uU3VibWl0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ChatbotButton.tsx\n"));

/***/ })

});