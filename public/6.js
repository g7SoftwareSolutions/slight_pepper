(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/map.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/map.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
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
  components: {},
  mounted: function mounted() {
    this.getVendors();
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
      user: null,
      curr_position: {
        lat: 10.536421,
        lng: -61.311951
      },
      pos: {
        lat: 10.536421,
        lng: -61.311951
      }
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
    filter_name: function filter_name() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      this.vendors = this.all_vendors;
      this.vendors = this.vendors.filter(function (item) {
        if (item.name != null) {
          return item.name.toLowerCase().includes(name.toLowerCase());
        }
      });
    },
    getVendor: function getVendor() {
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
    },
    getVendors: function getVendors() {
      var _this2 = this;

      var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

      var FormData = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");

      var data = new FormData();
      var config = {
        method: "get",
        url: (this.domain ? this.domain : "") + "/users/"
      };
      axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        _this2.vendors = response.data;
        _this2.all_vendors = response.data;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/map.vue?vue&type=template&id=45b930fa&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/map.vue?vue&type=template&id=45b930fa& ***!
  \*************************************************************************************************************************************************************************************************/
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
          _c("div", { staticClass: "row my-1" }, [
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
                            return _vm.filter_name()
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
              { staticClass: "col-10 col-lg-6" },
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
          _c("div", { staticClass: "row w-100 my-1" }, [
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
                            return _vm.filter_name()
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
          _c(
            "div",
            { staticClass: "row w-100 my-1" },
            [
              _c(
                "GmapMap",
                {
                  staticClass: "my-auto",
                  staticStyle: { height: "85vh", width: "inherit" },
                  attrs: { center: _vm.pos, zoom: 10, "map-type-id": "roadmap" }
                },
                _vm._l(this.vendors, function(vendor) {
                  return _c(
                    "span",
                    { key: vendor.id },
                    [
                      _c("GmapMarker", {
                        key: vendor.id,
                        attrs: {
                          position: JSON.parse(vendor.location),
                          clickable: true,
                          icon: "images/doubles_icon.png",
                          draggable: true
                        },
                        on: {
                          click: function($event) {
                            return this.clickMarker(vendor.id)
                          }
                        }
                      })
                    ],
                    1
                  )
                }),
                0
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

/***/ "./resources/js/pages/map.vue":
/*!************************************!*\
  !*** ./resources/js/pages/map.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_vue_vue_type_template_id_45b930fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.vue?vue&type=template&id=45b930fa& */ "./resources/js/pages/map.vue?vue&type=template&id=45b930fa&");
/* harmony import */ var _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.vue?vue&type=script&lang=js& */ "./resources/js/pages/map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map_vue_vue_type_template_id_45b930fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map_vue_vue_type_template_id_45b930fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/map.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/pages/map.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./map.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/map.vue?vue&type=template&id=45b930fa&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/map.vue?vue&type=template&id=45b930fa& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_45b930fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./map.vue?vue&type=template&id=45b930fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/map.vue?vue&type=template&id=45b930fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_45b930fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_45b930fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);