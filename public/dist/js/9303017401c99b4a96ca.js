(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {},
  data: function data() {
    return {
      reveal: false,
      selected_id: null,
      card_height: 350,
      dialog: false,
      card_width: 250
    };
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    user: "auth/user",
    domain: "auth/domain"
  }),
  created: function created() {},
  methods: {
    uploadFile: function uploadFile(file, progress, error, option) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var axios, FormData, data, file_number, config;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
                FormData = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
                data = new FormData(); // var encoded_file = await this.toBase64(file);

                file_number = parseInt(_this.user.images == null ? 0 : Object.keys(_this.user.images).length) + 1;
                data.append("file", file);
                data.append("file_number", file_number);
                data.append("user_id", _this.user.id);
                config = {
                  method: "post",
                  url: (_this.domain ? _this.domain : "") + "/api/store_user_image",
                  data: data
                };
                axios(config).then(function (response) {
                  console.log(JSON.stringify(response.data));

                  if (response.data.status === "success") {
                    _this.$swal.fire("Success!", "Profile image saved!", "success");
                  } else {
                    _this.$swal.fire("Opps!", "Network error, please try again later", "error");
                  }
                })["catch"](function (error) {
                  _this.$swal.fire("Opps!", "Network error, please try again later", "error");
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    delete_image: function delete_image(id) {
      var _this2 = this;

      var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

      var config = {
        method: "delete",
        url: (this.domain ? this.domain : "") + "/users?id=" + this.user.id + "/" + id,
        headers: {}
      };
      axios(config).then(function (response) {
        // console.log(JSON.stringify(response.data));
        if (response.data.status === "success") {
          _this2.get_vendors();

          _this2.$swal.fire("Success!", "Your image was deleted!", "success");
        } else {
          _this2.$swal.fire("Opps!", "Network error, please try again later", "error");
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    add_new: function add_new() {
      this.dialog = true;
    },
    update: function update(id) {
      console.log("clicked update");
      this.selected_id = id;
      this.dialog = true;
    },
    file_selected: function file_selected(file_number) {
      console.log(file_number);
      this.file_number = file_number;
    }
  }
});

/***/ }),

/***/ "./node_modules/form-data/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/form-data/lib/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {},
    [
      _c(
        "v-dialog",
        {
          staticClass: "col-lg-6 col-md-8 col-sm-10",
          attrs: { "max-width": "900", transition: "dialog-bottom-transition" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("FormulateInput", {
                staticClass: "input_field text-dark overflow-auto",
                attrs: {
                  "label-is-valid-class": "my-valid-class",
                  type: "image",
                  height: "150",
                  width: "150",
                  uploader: _vm.uploadFile,
                  name: "file",
                  color: "primary",
                  label:
                    this.user.name + (this.user.name ? "'s" : "") + " Images",
                  help: "Select a png, jpg or gif to upload.",
                  validation: "required|mime:image/jpeg,image/png,image/gif"
                }
              }),
              _vm._v(" "),
              _c("v-card-actions", [
                _c(
                  "div",
                  { staticClass: "row justify-content-center" },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mx-auto",
                        attrs: { text: "" },
                        on: {
                          click: function($event) {
                            _vm.dialog = false
                          }
                        }
                      },
                      [_vm._v("Close")]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mx-auto w-100" },
        [
          _c("v-card-title", { staticClass: "mx-auto text-primary heading" }, [
            _vm._v("\n      Manage Your Profile")
          ]),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "m-3",
              attrs: { filled: "", color: "primary" },
              on: {
                click: function($event) {
                  return _vm.add_new()
                }
              }
            },
            [_vm._v("\n    Add Image\n  ")]
          ),
          _vm._v(" "),
          _c(
            "v-container",
            { attrs: { fluid: "", "justify-center": "" } },
            [
              _c(
                "v-alert",
                {
                  attrs: {
                    outlined: "",
                    type: "warning",
                    prominent: "",
                    border: "bottom"
                  }
                },
                [_vm._v("\n        You have not added any images yet\n      ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/home.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=bb7a9770& */ "./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/pages/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/home.vue?vue&type=template&id=bb7a9770& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=bb7a9770& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/home.vue?vue&type=template&id=bb7a9770&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_bb7a9770___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);