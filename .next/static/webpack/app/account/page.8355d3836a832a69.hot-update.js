"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/account/page",{

/***/ "(app-pages-browser)/./src/app/account/account-form.tsx":
/*!******************************************!*\
  !*** ./src/app/account/account-form.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AccountForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/supabase/client */ \"(app-pages-browser)/./utils/supabase/client.ts\");\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar */ \"(app-pages-browser)/./src/app/account/avatar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AccountForm(param) {\n    let { user } = param;\n    _s();\n    const supabase = (0,_utils_supabase_client__WEBPACK_IMPORTED_MODULE_2__.createClient)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [fullname, setFullname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [website, setWebsite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [avatar_url, setAvatarUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const getProfile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{\n        if (!user) {\n            setLoading(false);\n            return;\n        }\n        try {\n            setLoading(true);\n            const { data, error, status } = await supabase.from(\"profiles\").select(\"full_name, username, website, avatar_url\").eq(\"id\", user.id).single();\n            if (error && status !== 406) {\n                console.error(\"Error fetching profile:\", error);\n                throw error;\n            }\n            if (data) {\n                setFullname(data.full_name);\n                setUsername(data.username);\n                setWebsite(data.website);\n                setAvatarUrl(data.avatar_url);\n            }\n        } catch (error) {\n            alert(\"You need to login to access this page\");\n        } finally{\n            setLoading(false);\n        }\n    }, [\n        user,\n        supabase\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getProfile();\n    }, [\n        user,\n        getProfile\n    ]);\n    async function updateProfile(param) {\n        let { username, fullname, website, avatar_url } = param;\n        if (!user) return;\n        try {\n            setLoading(true);\n            const { error } = await supabase.from(\"profiles\").upsert({\n                id: user.id,\n                full_name: fullname,\n                username,\n                website,\n                avatar_url,\n                updated_at: new Date().toISOString()\n            });\n            if (error) throw error;\n            alert(\"Profile updated!\");\n        } catch (error) {\n            alert(\"Error updating the data!\");\n        } finally{\n            setLoading(false);\n        }\n    }\n    var _user_id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-widget\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_avatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                uid: (_user_id = user === null || user === void 0 ? void 0 : user.id) !== null && _user_id !== void 0 ? _user_id : null,\n                url: avatar_url,\n                size: 150,\n                onUpload: (url)=>{\n                    setAvatarUrl(url);\n                    updateProfile({\n                        fullname,\n                        username,\n                        website,\n                        avatar_url: url\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"email\",\n                        type: \"text\",\n                        value: user === null || user === void 0 ? void 0 : user.email,\n                        disabled: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"fullName\",\n                        children: \"Full Name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"fullName\",\n                        type: \"text\",\n                        value: fullname || \"\",\n                        onChange: (e)=>setFullname(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: \"Anonymous Username\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"username\",\n                        type: \"text\",\n                        value: username || \"\",\n                        onChange: (e)=>setUsername(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"website\",\n                        children: \"Website\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"website\",\n                        type: \"url\",\n                        value: website || \"\",\n                        onChange: (e)=>setWebsite(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"button primary block\",\n                    onClick: ()=>updateProfile({\n                            fullname,\n                            username,\n                            website,\n                            avatar_url\n                        }),\n                    disabled: loading,\n                    children: loading ? \"Loading ...\" : \"Update\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                    lineNumber: 129,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    action: \"/auth/signout\",\n                    method: \"post\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button block\",\n                        type: \"submit\",\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                    lineNumber: 139,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\niade\\\\safe-space\\\\src\\\\app\\\\account\\\\account-form.tsx\",\n        lineNumber: 86,\n        columnNumber: 5\n    }, this);\n}\n_s(AccountForm, \"SYx+j6zAl36yiG3NvUV8gNIJlvg=\");\n_c = AccountForm;\nvar _c;\n$RefreshReg$(_c, \"AccountForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYWNjb3VudC9hY2NvdW50LWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3dEO0FBQ0s7QUFFaEM7QUFFZCxTQUFTSyxZQUFZLEtBQStCO1FBQS9CLEVBQUVDLElBQUksRUFBeUIsR0FBL0I7O0lBQ2xDLE1BQU1DLFdBQVdKLG9FQUFZQTtJQUM3QixNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFnQjtJQUN4RCxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQWdCO0lBQ3hELE1BQU0sQ0FBQ1ksU0FBU0MsV0FBVyxHQUFHYiwrQ0FBUUEsQ0FBZ0I7SUFDdEQsTUFBTSxDQUFDYyxZQUFZQyxhQUFhLEdBQUdmLCtDQUFRQSxDQUFnQjtJQUUzRCxNQUFNZ0IsYUFBYWxCLGtEQUFXQSxDQUFDO1FBQzdCLElBQUksQ0FBQ00sTUFBTTtZQUNURyxXQUFXO1lBQ1g7UUFDRjtRQUVBLElBQUk7WUFDRkEsV0FBVztZQUVYLE1BQU0sRUFBRVUsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1kLFNBQ25DZSxJQUFJLENBQUMsWUFDTEMsTUFBTSxDQUFFLDRDQUNSQyxFQUFFLENBQUMsTUFBTWxCLEtBQUttQixFQUFFLEVBQ2hCQyxNQUFNO1lBRVQsSUFBSU4sU0FBU0MsV0FBVyxLQUFLO2dCQUMzQk0sUUFBUVAsS0FBSyxDQUFDLDJCQUEyQkE7Z0JBQ3pDLE1BQU1BO1lBQ1I7WUFFQSxJQUFJRCxNQUFNO2dCQUNSUixZQUFZUSxLQUFLUyxTQUFTO2dCQUMxQmYsWUFBWU0sS0FBS1AsUUFBUTtnQkFDekJHLFdBQVdJLEtBQUtMLE9BQU87Z0JBQ3ZCRyxhQUFhRSxLQUFLSCxVQUFVO1lBQzlCO1FBQ0YsRUFBRSxPQUFPSSxPQUFPO1lBQ2RTLE1BQU07UUFDUixTQUFVO1lBQ1JwQixXQUFXO1FBQ2I7SUFDRixHQUFHO1FBQUNIO1FBQU1DO0tBQVM7SUFFbkJOLGdEQUFTQSxDQUFDO1FBQ1JpQjtJQUNGLEdBQUc7UUFBQ1o7UUFBTVk7S0FBVztJQUVyQixlQUFlWSxjQUFjLEtBVTVCO1lBVjRCLEVBQzNCbEIsUUFBUSxFQUNSRixRQUFRLEVBQ1JJLE9BQU8sRUFDUEUsVUFBVSxFQU1YLEdBVjRCO1FBVzNCLElBQUksQ0FBQ1YsTUFBTTtRQUVYLElBQUk7WUFDRkcsV0FBVztZQUVYLE1BQU0sRUFBRVcsS0FBSyxFQUFFLEdBQUcsTUFBTWIsU0FBU2UsSUFBSSxDQUFDLFlBQVlTLE1BQU0sQ0FBQztnQkFDdkROLElBQUluQixLQUFLbUIsRUFBRTtnQkFDWEcsV0FBV2xCO2dCQUNYRTtnQkFDQUU7Z0JBQ0FFO2dCQUNBZ0IsWUFBWSxJQUFJQyxPQUFPQyxXQUFXO1lBQ3BDO1lBQ0EsSUFBSWQsT0FBTyxNQUFNQTtZQUNqQlMsTUFBTTtRQUNSLEVBQUUsT0FBT1QsT0FBTztZQUNkUyxNQUFNO1FBQ1IsU0FBVTtZQUNScEIsV0FBVztRQUNiO0lBQ0Y7UUFLV0g7SUFIWCxxQkFDRSw4REFBQzZCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDaEMsK0NBQU1BO2dCQUNMaUMsS0FBSy9CLENBQUFBLFdBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTW1CLEVBQUUsY0FBUm5CLHNCQUFBQSxXQUFZO2dCQUNqQmdDLEtBQUt0QjtnQkFDTHVCLE1BQU07Z0JBQ05DLFVBQVUsQ0FBQ0Y7b0JBQ1RyQixhQUFhcUI7b0JBQ2JSLGNBQWM7d0JBQUVwQjt3QkFBVUU7d0JBQVVFO3dCQUFTRSxZQUFZc0I7b0JBQUk7Z0JBQy9EOzs7Ozs7MEJBRUYsOERBQUNIOztrQ0FDQyw4REFBQ007d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUFNbEIsSUFBRzt3QkFBUW1CLE1BQUs7d0JBQU9DLEtBQUssRUFBRXZDLGlCQUFBQSwyQkFBQUEsS0FBTXdDLEtBQUs7d0JBQUVDLFFBQVE7Ozs7Ozs7Ozs7OzswQkFFNUQsOERBQUNaOztrQ0FDQyw4REFBQ007d0JBQU1DLFNBQVE7a0NBQVc7Ozs7OztrQ0FDMUIsOERBQUNDO3dCQUNDbEIsSUFBRzt3QkFDSG1CLE1BQUs7d0JBQ0xDLE9BQU9uQyxZQUFZO3dCQUNuQnNDLFVBQVUsQ0FBQ0MsSUFBTXRDLFlBQVlzQyxFQUFFQyxNQUFNLENBQUNMLEtBQUs7Ozs7Ozs7Ozs7OzswQkFHL0MsOERBQUNWOztrQ0FDQyw4REFBQ007d0JBQU1DLFNBQVE7a0NBQVc7Ozs7OztrQ0FDMUIsOERBQUNDO3dCQUNDbEIsSUFBRzt3QkFDSG1CLE1BQUs7d0JBQ0xDLE9BQU9qQyxZQUFZO3dCQUNuQm9DLFVBQVUsQ0FBQ0MsSUFBTXBDLFlBQVlvQyxFQUFFQyxNQUFNLENBQUNMLEtBQUs7Ozs7Ozs7Ozs7OzswQkFHL0MsOERBQUNWOztrQ0FDQyw4REFBQ007d0JBQU1DLFNBQVE7a0NBQVU7Ozs7OztrQ0FDekIsOERBQUNDO3dCQUNDbEIsSUFBRzt3QkFDSG1CLE1BQUs7d0JBQ0xDLE9BQU8vQixXQUFXO3dCQUNsQmtDLFVBQVUsQ0FBQ0MsSUFBTWxDLFdBQVdrQyxFQUFFQyxNQUFNLENBQUNMLEtBQUs7Ozs7Ozs7Ozs7OzswQkFJOUMsOERBQUNWOzBCQUNDLDRFQUFDZ0I7b0JBQ0NmLFdBQVU7b0JBQ1ZnQixTQUFTLElBQU10QixjQUFjOzRCQUFFcEI7NEJBQVVFOzRCQUFVRTs0QkFBU0U7d0JBQVc7b0JBQ3ZFK0IsVUFBVXZDOzhCQUVUQSxVQUFVLGdCQUFnQjs7Ozs7Ozs7Ozs7MEJBSS9CLDhEQUFDMkI7MEJBQ0MsNEVBQUNrQjtvQkFBS0MsUUFBTztvQkFBZ0JDLFFBQU87OEJBQ2xDLDRFQUFDSjt3QkFBT2YsV0FBVTt3QkFBZVEsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96RDtHQTVJd0J2QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FjY291bnQvYWNjb3VudC1mb3JtLnRzeD83NzI3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zdXBhYmFzZS9jbGllbnQnXHJcbmltcG9ydCB7IHR5cGUgVXNlciB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcclxuaW1wb3J0IEF2YXRhciBmcm9tICcuL2F2YXRhcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY291bnRGb3JtKHsgdXNlciB9OiB7IHVzZXI6IFVzZXIgfCBudWxsIH0pIHtcclxuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudCgpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbZnVsbG5hbWUsIHNldEZ1bGxuYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG4gIGNvbnN0IFt3ZWJzaXRlLCBzZXRXZWJzaXRlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbiAgY29uc3QgW2F2YXRhcl91cmwsIHNldEF2YXRhclVybF0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG5cclxuICBjb25zdCBnZXRQcm9maWxlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCF1c2VyKSB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuXHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIHN0YXR1cyB9ID0gYXdhaXQgc3VwYWJhc2VcclxuICAgICAgICAuZnJvbSgncHJvZmlsZXMnKVxyXG4gICAgICAgIC5zZWxlY3QoYGZ1bGxfbmFtZSwgdXNlcm5hbWUsIHdlYnNpdGUsIGF2YXRhcl91cmxgKVxyXG4gICAgICAgIC5lcSgnaWQnLCB1c2VyLmlkKVxyXG4gICAgICAgIC5zaW5nbGUoKVxyXG5cclxuICAgICAgaWYgKGVycm9yICYmIHN0YXR1cyAhPT0gNDA2KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZmlsZTonLCBlcnJvcilcclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHNldEZ1bGxuYW1lKGRhdGEuZnVsbF9uYW1lKVxyXG4gICAgICAgIHNldFVzZXJuYW1lKGRhdGEudXNlcm5hbWUpXHJcbiAgICAgICAgc2V0V2Vic2l0ZShkYXRhLndlYnNpdGUpXHJcbiAgICAgICAgc2V0QXZhdGFyVXJsKGRhdGEuYXZhdGFyX3VybClcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoJ1lvdSBuZWVkIHRvIGxvZ2luIHRvIGFjY2VzcyB0aGlzIHBhZ2UnKVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH1cclxuICB9LCBbdXNlciwgc3VwYWJhc2VdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UHJvZmlsZSgpXHJcbiAgfSwgW3VzZXIsIGdldFByb2ZpbGVdKVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9maWxlKHtcclxuICAgIHVzZXJuYW1lLFxyXG4gICAgZnVsbG5hbWUsXHJcbiAgICB3ZWJzaXRlLFxyXG4gICAgYXZhdGFyX3VybCxcclxuICB9OiB7XHJcbiAgICB1c2VybmFtZTogc3RyaW5nIHwgbnVsbFxyXG4gICAgZnVsbG5hbWU6IHN0cmluZyB8IG51bGxcclxuICAgIHdlYnNpdGU6IHN0cmluZyB8IG51bGxcclxuICAgIGF2YXRhcl91cmw6IHN0cmluZyB8IG51bGxcclxuICB9KSB7XHJcbiAgICBpZiAoIXVzZXIpIHJldHVyblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuXHJcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ3Byb2ZpbGVzJykudXBzZXJ0KHtcclxuICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICBmdWxsX25hbWU6IGZ1bGxuYW1lLFxyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHdlYnNpdGUsXHJcbiAgICAgICAgYXZhdGFyX3VybCxcclxuICAgICAgICB1cGRhdGVkX2F0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgIH0pXHJcbiAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3JcclxuICAgICAgYWxlcnQoJ1Byb2ZpbGUgdXBkYXRlZCEnKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoJ0Vycm9yIHVwZGF0aW5nIHRoZSBkYXRhIScpXHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS13aWRnZXRcIj5cclxuICAgICAgPEF2YXRhclxyXG4gICAgICAgIHVpZD17dXNlcj8uaWQgPz8gbnVsbH1cclxuICAgICAgICB1cmw9e2F2YXRhcl91cmx9XHJcbiAgICAgICAgc2l6ZT17MTUwfVxyXG4gICAgICAgIG9uVXBsb2FkPXsodXJsKSA9PiB7XHJcbiAgICAgICAgICBzZXRBdmF0YXJVcmwodXJsKVxyXG4gICAgICAgICAgdXBkYXRlUHJvZmlsZSh7IGZ1bGxuYW1lLCB1c2VybmFtZSwgd2Vic2l0ZSwgYXZhdGFyX3VybDogdXJsIH0pXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcj8uZW1haWx9IGRpc2FibGVkIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZnVsbE5hbWVcIj5GdWxsIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJmdWxsTmFtZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZnVsbG5hbWUgfHwgJyd9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZ1bGxuYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+QW5vbnltb3VzIFVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lIHx8ICcnfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3ZWJzaXRlXCI+V2Vic2l0ZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cIndlYnNpdGVcIlxyXG4gICAgICAgICAgdHlwZT1cInVybFwiXHJcbiAgICAgICAgICB2YWx1ZT17d2Vic2l0ZSB8fCAnJ31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2Vic2l0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBwcmltYXJ5IGJsb2NrXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVByb2ZpbGUoeyBmdWxsbmFtZSwgdXNlcm5hbWUsIHdlYnNpdGUsIGF2YXRhcl91cmwgfSl9XHJcbiAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICdMb2FkaW5nIC4uLicgOiAnVXBkYXRlJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIi9hdXRoL3NpZ25vdXRcIiBtZXRob2Q9XCJwb3N0XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBibG9ja1wiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgU2lnbiBvdXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDbGllbnQiLCJBdmF0YXIiLCJBY2NvdW50Rm9ybSIsInVzZXIiLCJzdXBhYmFzZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ3ZWJzaXRlIiwic2V0V2Vic2l0ZSIsImF2YXRhcl91cmwiLCJzZXRBdmF0YXJVcmwiLCJnZXRQcm9maWxlIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwiZnJvbSIsInNlbGVjdCIsImVxIiwiaWQiLCJzaW5nbGUiLCJjb25zb2xlIiwiZnVsbF9uYW1lIiwiYWxlcnQiLCJ1cGRhdGVQcm9maWxlIiwidXBzZXJ0IiwidXBkYXRlZF9hdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsInVpZCIsInVybCIsInNpemUiLCJvblVwbG9hZCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInZhbHVlIiwiZW1haWwiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwiYWN0aW9uIiwibWV0aG9kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/account/account-form.tsx\n"));

/***/ })

});