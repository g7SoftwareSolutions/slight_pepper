(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VendorCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VendorCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
  data: function data() {
    return {
      card_height: 450,
      card_width: 350,
      images: null
    };
  },
  props: {
    vendor: {
      type: Object,
      "default": {}
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    domain: "auth/domain"
  }),
  mounted: function mounted() {
    this.images = JSON.parse(this.vendor.images);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_VendorCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components/VendorCard */ "./resources/js/components/VendorCard.vue");
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
  layout: "basic",
  components: {
    VendorCard: _components_VendorCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.getAllVendors();
  },
  metaInfo: function metaInfo() {
    return {
      title: this.$t("home")
    };
  },
  data: function data() {
    return {
      title: window.config.appName,
      vendors: {},
      all_vendors: {},
      search: "",
      reveal: false,
      selected_id: null,
      card_height: 350,
      dialog: false,
      card_width: 250,
      user: null
    };
  },
  watch: {
    search: function search(val) {
      console.log(val);
      this.filter_name(val);
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    authenticated: "auth/check",
    domain: "auth/domain"
  }),
  methods: {
    filter_name: function filter_name(name) {
      this.vendors = this.all_vendors;
      this.vendors = this.vendors.filter(function (item) {
        if (item.name != null) {
          return item.name.toLowerCase().includes(name.toLowerCase());
        }
      });
    },
    getAllVendors: function getAllVendors() {
      var _this = this;

      var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

      var FormData = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");

      var data = new FormData();
      var config = {
        method: "get",
        url: (this.domain ? this.domain : "") + "/users/"
      };
      axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        _this.vendors = response.data;
        _this.all_vendors = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VendorCard.vue?vue&type=template&id=2ee76123&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VendorCard.vue?vue&type=template&id=2ee76123& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "v-card",
    {
      staticClass: "mx-auto w-100",
      attrs: {
        "max-height": _vm.card_height,
        "max-width": _vm.card_width,
        "min-height": _vm.card_height - 150,
        "min-width": _vm.card_width - 100
      },
      on: {
        click: function($event) {
          return _vm.$emit("update")
        }
      }
    },
    [
      _c(
        "v-carousel",
        {
          attrs: {
            cycle: "",
            height: _vm.card_height - 100,
            width: _vm.card_width,
            "hide-delimiter-background": "",
            "show-arrows-on-hover": ""
          }
        },
        _vm._l(this.images, function(slide, i) {
          return _c(
            "v-carousel-item",
            { key: i, attrs: { light: "" } },
            [
              _c("v-img", {
                staticClass: "white--text mx-auto",
                attrs: {
                  height: _vm.card_height - 150,
                  width: _vm.card_width,
                  src: slide,
                  "lazy-src": slide,
                  gradient: "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                }
              })
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c("v-card-subtitle", { staticClass: "mx-auto text-left" }, [
        _vm._v(
          "\n    " +
            _vm._s(_vm.vendor.phone == null ? "phone" : _vm.vendor.phone)
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row w-100 mx-auto" },
        [
          _c("v-card-title", { staticClass: "col-8 text-center mx-auto" }, [
            _vm._v(
              "\n      " +
                _vm._s(
                  _vm.vendor.name == null ? "Vendor Name" : _vm.vendor.name
                )
            )
          ]),
          _vm._v(" "),
          _c(
            "v-card-subtitle",
            {
              staticClass: "mx-auto col-4 text-center",
              attrs: { height: "inherit" }
            },
            [
              _vm._v(
                "\n      " +
                  _vm._s(
                    _vm.vendor.created_at == null
                      ? "created_at"
                      : new Date(_vm.vendor.created_at).toDateString()
                  )
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-spacer")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee& ***!
  \*****************************************************************************************************************************************************************************************************/
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
            { staticClass: "justify-content-center p-3" },
            [
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
        "div",
        { staticClass: "text-center" },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-1 col-lg-3" },
              [
                this.vendors != this.all_vendors
                  ? _c(
                      "v-btn",
                      {
                        staticClass: "m-auto mt-2 d-none d-lg-block",
                        attrs: {
                          outlined: "",
                          large: "",
                          color: "red lighten-2  "
                        },
                        on: {
                          click: function($event) {
                            return _vm.filter_name("reset")
                          }
                        }
                      },
                      [
                        _c("v-icon", { attrs: { color: "red lighten-2  " } }, [
                          _vm._v("mdi-food-fork-drink")
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "m-2" }, [
                          _vm._v(" All Vendors")
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-10 col-lg-8" },
              [
                _c("v-text-field", {
                  staticClass: "m-auto w-100",
                  attrs: { outlined: "", clearable: "" },
                  scopedSlots: _vm._u([
                    {
                      key: "label",
                      fn: function() {
                        return [
                          _c("div", { staticClass: "w-100" }, [
                            _c(
                              "div",
                              { staticClass: "mx-auto" },
                              [
                                _c("v-icon", { staticClass: "m-auto" }, [
                                  _vm._v("mdi-magnify")
                                ]),
                                _vm._v("\n                Find ah "),
                                _c("strong", [_vm._v("doubles vendor")]),
                                _vm._v(" "),
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "float-right my-auto mx-2",
                                    attrs: { color: "" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  mdi-food-fork-drink\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ])
                        ]
                      },
                      proxy: true
                    }
                  ]),
                  model: {
                    value: _vm.search,
                    callback: function($$v) {
                      _vm.search = $$v
                    },
                    expression: "search"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-1 col-lg-3" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row w-100" }, [
            _c(
              "div",
              { staticClass: "col mx-auto" },
              [
                this.vendors != this.all_vendors
                  ? _c(
                      "v-btn",
                      {
                        staticClass: "m-auto mt-2 d-md-none",
                        attrs: {
                          outlined: "",
                          large: "",
                          color: "red lighten-2 "
                        },
                        on: {
                          click: function($event) {
                            return _vm.filter_name("reset")
                          }
                        }
                      },
                      [
                        _c("v-icon", { attrs: { color: "red lighten-2  " } }, [
                          _vm._v("mdi-food-fork-drink")
                        ]),
                        _vm._v("\n          All Vendors\n        ")
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("v-spacer", { attrs: { height: "200px" } }),
          _vm._v(" "),
          _c(
            "v-container",
            {
              staticClass: "mt-5 w-100",
              attrs: { contain: "", fluid: "", "justify-center": "" }
            },
            [
              this.vendors.length > 0
                ? _c(
                    "v-row",
                    { attrs: { dense: "" } },
                    _vm._l(this.vendors, function(vendor) {
                      return _c(
                        "v-col",
                        { key: vendor.id, staticClass: "my-3 mx-auto" },
                        [
                          _c("VendorCard", {
                            attrs: { vendor: vendor },
                            on: {
                              click: function($event) {
                                return _vm.update(vendor.id)
                              }
                            }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                : _c(
                    "v-alert",
                    {
                      attrs: {
                        outlined: "",
                        type: "warning",
                        prominent: "",
                        border: "bottom"
                      }
                    },
                    [
                      _vm._v(
                        "\n        Sorry I cant find any available vendors right now\n      "
                      )
                    ]
                  )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer", {
            staticClass: "m-5 w-100",
            staticStyle: { height: "5vh" }
          })
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

/***/ "./resources/js/components/VendorCard.vue":
/*!************************************************!*\
  !*** ./resources/js/components/VendorCard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VendorCard_vue_vue_type_template_id_2ee76123___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorCard.vue?vue&type=template&id=2ee76123& */ "./resources/js/components/VendorCard.vue?vue&type=template&id=2ee76123&");
/* harmony import */ var _VendorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorCard.vue?vue&type=script&lang=js& */ "./resources/js/components/VendorCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VendorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorCard_vue_vue_type_template_id_2ee76123___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VendorCard_vue_vue_type_template_id_2ee76123___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VendorCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VendorCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/VendorCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VendorCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VendorCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VendorCard.vue?vue&type=template&id=2ee76123&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/VendorCard.vue?vue&type=template&id=2ee76123& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorCard_vue_vue_type_template_id_2ee76123___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VendorCard.vue?vue&type=template&id=2ee76123& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VendorCard.vue?vue&type=template&id=2ee76123&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorCard_vue_vue_type_template_id_2ee76123___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorCard_vue_vue_type_template_id_2ee76123___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.vue?vue&type=template&id=cdd8e9ee& */ "./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&");
/* harmony import */ var _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.vue?vue&type=script&lang=js& */ "./resources/js/pages/welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/welcome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./welcome.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./welcome.vue?vue&type=template&id=cdd8e9ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);