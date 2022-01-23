"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_EditCustomer_js"],{

/***/ "./resources/js/Pages/EditCustomer.js":
/*!********************************************!*\
  !*** ./resources/js/Pages/EditCustomer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2-react-content'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Row'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Col'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var MySwal = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2-react-content'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

function EditCustomer() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      customerInput = _useState4[0],
      setCustomer = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      errorInput = _useState6[0],
      setError = _useState6[1];

  var navigate = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  var _useParams = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
      id = _useParams.id;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var isMounted = true;
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("api/customers/".concat(id, "/edit")).then(function (res) {
      if (isMounted && res.data.status === 200) {
        setCustomer(res.data.customer);
        setLoading(false);
      } else if (res.data.status === 404) {
        MySwal.fire({
          title: "".concat(res.data.message),
          icon: 'warning',
          confirmButtonColor: '#facea8',
          confirmButtonText: 'Ok',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate('/', {
          replace: true
        });
      }
    });
    return function () {
      isMounted = false;
    };
  }, [id, navigate]);

  var handleInput = function handleInput(e) {
    e.persist();
    setCustomer(_objectSpread(_objectSpread({}, customerInput), {}, _defineProperty({}, e.target.name, e.target.value)));
  };

  var submit = function submit(e) {
    e.preventDefault();
    var data = {
      first_name: customerInput.first_name,
      last_name: customerInput.last_name,
      email: customerInput.email
    };
    axios__WEBPACK_IMPORTED_MODULE_2___default().put("api/customers/".concat(id), data).then(function (res) {
      if (res.data.status === 200) {
        MySwal.fire({
          title: 'Success!',
          html: "".concat(res.data.message),
          icon: 'success',
          confirmButtonColor: '#a5dc86',
          confirmButtonText: 'Ok',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        setError([]);
        navigate('/customers', {
          replace: true
        });
      } else if (res.data.status === 422) {
        if (res.data.errors) {
          if (res.data.errors) {
            MySwal.fire({
              title: "".concat(Object.values(res.data.errors)[0]),
              icon: 'warning',
              confirmButtonColor: '#facea8',
              confirmButtonText: 'Ok',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
          }
        }

        setError(res.data.errors);
      } else if (res.data.status === 404) {
        if (res.data.errors) {
          MySwal.fire({
            title: "".concat(res.data.message),
            icon: 'warning',
            confirmButtonColor: '#facea8',
            confirmButtonText: 'Ok',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        }

        navigate('/customers', {
          replace: true
        });
      }
    });
  };

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Row'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Col'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          md: 9,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-center",
              children: "Loading..."
            })
          })
        })
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Container'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Row'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      className: "justify-content-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Col'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        md: 9,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
              children: ["Edit ", customerInput.first_name, " ", customerInput.last_name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                to: '/customers',
                className: "btn btn-secondary btn-sm float-end",
                children: "Back"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Card'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              onSubmit: submit,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                className: "mb-3",
                controlId: "exampleForm.ControlInput1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  type: "text",
                  name: "first_name",
                  onChange: handleInput,
                  value: customerInput.first_name,
                  placeholder: "First name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-danger",
                  children: errorInput.first_name
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                className: "mb-3",
                controlId: "exampleForm.ControlInput1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  type: "text",
                  name: "last_name",
                  onChange: handleInput,
                  value: customerInput.last_name,
                  placeholder: "Last name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-danger",
                  children: errorInput.last_name
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                className: "mb-3",
                controlId: "exampleForm.ControlInput1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  type: "email",
                  name: "email",
                  onChange: handleInput,
                  value: customerInput.email,
                  placeholder: "Email address"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "text-danger",
                  children: errorInput.email
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap/Button'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  type: "submit",
                  variant: "success btn-sm",
                  children: "Submit"
                })
              })]
            })
          })]
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditCustomer);

/***/ })

}]);