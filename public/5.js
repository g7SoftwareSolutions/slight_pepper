(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/animals_display.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/animals_display.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    animals: {
      Type: Object,
      "default": null
    }
  },
  data: function data() {
    return {
      reveal: false,
      selected_id: null,
      card_height: 350,
      dialog: false,
      card_width: 250
    };
  },
  mounted: function mounted() {
    console.log("Animals " + this.animals);
  },
  methods: {
    generate_img: function generate_img(animal) {
      user_id = animal.user_id;
      id = animal.id;
      files = animal.images.split("|");
      console.log("files: ", files); //  $file_path = "animal_images/$user_id/$id/$file_number." . $file->getClientOriginalExtension();

      $url = "storage/animal_images/" + user_id + "/" + id + "/" + files[0];
      return $url;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/animals_display.vue?vue&type=template&id=b13ba1be&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/animals_display.vue?vue&type=template&id=b13ba1be& ***!
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
    "v-container",
    { attrs: { fluid: "", "justify-center": "" } },
    [
      this.animals
        ? _c(
            "v-row",
            { attrs: { dense: "" } },
            _vm._l(this.animals, function(animal) {
              return _c(
                "v-col",
                { key: animal.id, staticClass: "my-3" },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "m-auto m-3",
                      attrs: { height: _vm.card_height, width: _vm.card_width }
                    },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text mx-auto",
                          attrs: {
                            height: _vm.card_height - 100,
                            width: _vm.card_width,
                            src: _vm.generate_img(animal),
                            "lazy-src": _vm.generate_img(animal),
                            gradient:
                              "to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          },
                          on: {
                            click: function($event) {
                              return _vm.update(animal.id)
                            }
                          }
                        },
                        [
                          _c(
                            "v-card-subtitle",
                            { staticClass: "mx-auto text-left" },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    animal.breed == null
                                      ? "breed"
                                      : animal.breed
                                  )
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row w-100 mx-auto" },
                        [
                          _c(
                            "v-card-title",
                            { staticClass: "col-8 text-center mx-auto" },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    animal.name == null
                                      ? "Animal Name"
                                      : animal.name
                                  )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-subtitle",
                            {
                              staticClass: "mx-auto col-3 text-center",
                              attrs: { height: "inherit" }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    animal.size == null ? "size" : animal.size
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
                          animal.gender === "Boy"
                            ? _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [
                                  _c("v-icon", { attrs: { color: "blue" } }, [
                                    _vm._v("mdi-gender-male")
                                  ])
                                ],
                                1
                              )
                            : animal.gender === "Girl"
                            ? _c(
                                "v-btn",
                                { attrs: { icon: "" } },
                                [
                                  _c("v-icon", { attrs: { color: "pink" } }, [
                                    _vm._v("mdi-gender-female")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { icon: "" } },
                            [
                              _c("v-icon", { attrs: { color: "teal" } }, [
                                _vm._v("mdi-information-outline")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          !_vm.user
                            ? _c(
                                "v-btn",
                                { attrs: { icon: "", large: "" } },
                                [
                                  _c("v-icon", { attrs: { color: "purple" } }, [
                                    _vm._v("mdi-bookmark")
                                  ])
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { icon: "" } },
                            [
                              _c("v-icon", { attrs: { color: "green" } }, [
                                _vm._v("mdi-share")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.user
                            ? _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.delete_animal(animal.id)
                                    }
                                  }
                                },
                                [
                                  _c("v-icon", { attrs: { color: "red" } }, [
                                    _vm._v("mdi-delete")
                                  ])
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
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
            [_vm._v("\n    Sorry I cant find any available pets right now\n  ")]
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/animals_display.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/animals_display.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animals_display_vue_vue_type_template_id_b13ba1be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animals_display.vue?vue&type=template&id=b13ba1be& */ "./resources/js/pages/animals_display.vue?vue&type=template&id=b13ba1be&");
/* harmony import */ var _animals_display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animals_display.vue?vue&type=script&lang=js& */ "./resources/js/pages/animals_display.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _animals_display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _animals_display_vue_vue_type_template_id_b13ba1be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _animals_display_vue_vue_type_template_id_b13ba1be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/animals_display.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/animals_display.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/animals_display.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animals_display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./animals_display.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/animals_display.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_animals_display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/animals_display.vue?vue&type=template&id=b13ba1be&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/animals_display.vue?vue&type=template&id=b13ba1be& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animals_display_vue_vue_type_template_id_b13ba1be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./animals_display.vue?vue&type=template&id=b13ba1be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/animals_display.vue?vue&type=template&id=b13ba1be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animals_display_vue_vue_type_template_id_b13ba1be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_animals_display_vue_vue_type_template_id_b13ba1be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);