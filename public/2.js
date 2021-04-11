(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_animal_form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create_animal_form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _name$middleware$prop;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = (_name$middleware$prop = {
  name: "animal_form",
  middleware: "auth",
  props: {
    selected_id: {
      Type: String,
      "default": null
    }
  },
  watch: {
    selected_id: function selected_id(newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.$formulate.reset("animal");
  },
  components: {},
  data: function data() {
    return {
      id: null,
      snackbar: false,
      timeout: 3000,
      update: false,
      formValues: {},
      file_number: 1,
      carousel_current: 0,
      textarea: "",
      alert: "",
      animal_id: null,
      validation: null,
      name: "",
      age: null,
      age_type: null,
      breed_options: {},
      size_options: {},
      animal_options: {},
      inputErrors: null
    };
  }
}, _defineProperty(_name$middleware$prop, "watch", {
  carousel_current: function carousel_current() {
    console.log("carousel_current: " + this.carousel_current);
  }
}), _defineProperty(_name$middleware$prop, "computed", Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
  user: "auth/user",
  domain: "auth/domain"
})), _defineProperty(_name$middleware$prop, "mounted", function mounted() {
  if (this.selected_id) {
    this.id = this.selected_id;
    this.update = true;
    console.log("id: " + this.id);
    console.log("selected_id: " + this.selected_id);
  } else {
    this.initAnimal();
  }

  this.breed_options = ["Pure Breed", "Local Breed", "Chunks"];
  this.size_options = ["extra-small", "small", "medium", "large", "extra-large"];
  this.animal_options = ["Dog", "Cat", "Bird", "Rabbit", "Hamster", "Fish", "lizard", "frog", "Insect"]; // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     this.curr_position = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     };
  //   });
  // }
}), _defineProperty(_name$middleware$prop, "methods", {
  getAnimal: function getAnimal(id) {
    var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

    var FormData = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");

    var data = new FormData();
    var config = {
      method: "get",
      url: (this.domain ? this.domain : "") + "/animal?id=" + id
    };
    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    })["catch"](function (error) {
      console.log(error);
    });
  },
  initAnimal: function initAnimal() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var axios, FormData, data, config;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("initAnimal");
              axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
              FormData = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
              data = new FormData();
              config = {
                method: "get",
                url: (_this.domain ? _this.domain : "") + "/animal/create?user_id=" + _this.user.id,
                data: data
              };
              axios(config).then(function (response) {
                console.log(JSON.stringify(response.data));

                if (response.data.status === "success") {
                  _this.$emit("refresh_animals");

                  _this.id = response.data.animal.id;
                  _this.name = response.data.animal.name;
                }
              })["catch"](function (error) {
                console.log(error);
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  file_selected: function file_selected(file_number) {
    console.log(file_number);
    this.file_number = file_number;
  },
  toBase64: function toBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  },
  uploadFile: function uploadFile(file, progress, error, option) {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var axios, FormData, data, config;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
              FormData = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
              data = new FormData(); // var encoded_file = await this.toBase64(file);

              data.append("file", file);
              data.append("id", _this2.id);
              data.append("file_number", _this2.file_number);
              data.append("user_id", _this2.user.id);
              data.append("name", _this2.name);
              config = {
                method: "post",
                url: (_this2.domain ? _this2.domain : "") + "/store_animal_image",
                data: data
              };
              axios(config).then(function (response) {
                console.log(JSON.stringify(response.data));

                if (response.data.status === "success") {
                  _this2.$swal.fire("Success!", "Profile image saved!", "success");
                } else {
                  _this2.$swal.fire("Opps!", "Network error, please try again later", "error");
                }
              })["catch"](function (error) {
                this.$swal.fire("Opps!", "Network error, please try again later", "error");
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  success_response: function success_response(response) {
    this.$emit("refresh_animals");
    this.$swal.fire("Success!", response.msg, "success");
  },
  fail_response: function fail_response(response) {
    this.$swal.fire("Error", response.msg, "error");
  },
  submitHandler: function submitHandler(data) {
    var _this3 = this;

    //   alert(`Thank you, ${data}`);
    console.log("Form data: " + data);
    console.log("age: " + data.age_group.age);

    var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

    var FormData = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");

    var params = new FormData();
    params.append("about", data.about);
    params.append("id", this.id);
    params.append("size", data.size);
    params.append("breed", data.breed);
    params.append("gender", data.gender);
    params.append("user_id", this.user.id);
    params.append("age", this.age + " " + this.age_type);
    params.append("animal_type", data.animal_type);
    params.append("name", data.name);
    console.log("Form data: " + JSON.stringify(params));
    var method = "post";

    if (this.update) {// method = "patch";
    }

    var config = {
      method: method,
      url: (this.domain ? this.domain : "") + "/animal",
      data: params
    };
    axios(config).then(function (response) {
      console.log("Form response: " + response.data);

      if (response.data.status === "success") {
        _this3.success_response(response.data);
      } else {
        _this3.fail_response(response.data);
      }
    })["catch"](function (error) {
      console.log(error);
    });
  },
  back: function back() {
    appRouter.push("main");
  }
}), _name$middleware$prop);

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formulate-input-element--radio {\n  display: inline-flex;\n  width: 2vw;\n  margin: auto !important;\n}\n.v-carousel__controls__item {\n  background: #1976d2 !important;\n}\n.alert {\n  background: none !important;\n  padding: none;\n}\n.v-input__slot {\n  width: auto !important;\n  margin: auto !important;\n}\n.v-snack__content {\n  flex-grow: 1 !important;\n  font-size: 0.575rem !important;\n  font-weight: 400 !important;\n  line-height: 1.25rem !important;\n  text-align: center !important;\n  padding: 1px !important;\n}\n.input_field {\n  text-align: center !important;\n  margin: auto !important;\n  justify-content: center !important;\n  padding: 1vh !important;\n  border-radius: 1vh !important;\n}\n.v-snack__wrapper.theme--dark {\n  color: white;\n  transition: ease-in 1s;\n  background: linear-gradient(45deg, #58b87c, #068768) !important;\n}\n.close_snackbar {\n  color: #751714 !important;\n  margin: 1px 1px !important;\n}\ninput,\ntextarea,\noption,\nselect {\n  text-align: center !important;\n  -moz-text-align-last: center !important;\n       text-align-last: center !important;\n  border-radius: 0.5vh;\n  padding: 0.5vh;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  width: 100%;\n  font-size: 2.2vh !important;\n  margin: auto !important;\n  justify-content: center !important;\n}\ntextarea {\n  height: 175px;\n}\n.formulate-input:hover {\n  border: 1px solid rgba(29, 141, 172, 0.7);\n  border-radius: 0.5vh;\n}\n#formulate--form-6_first_label {\n  color: rgba(29, 141, 172, 0.7) !important;\n}\n#formulate--form-6_second_label {\n  color: rgba(172, 29, 113, 0.7) !important;\n}\n#formulate--form-6_third_label {\n  color: rgba(141, 172, 29, 0.705) !important;\n}\n.pagination {\n  border-radius: 1vh;\n  padding: 0vh;\n  padding-bottom: 0vh;\n  justify-content: center;\n}\n.img_logo {\n  max-height: 45vh;\n  max-width: 60vh;\n}\na,\na:link,\na:visited,\na:active {\n  color: cornflowerblue;\n}\n.formulate-input-error {\n  color: crimson;\n  padding: 0.5vh;\n}\n.formulate-input-errors {\n  background: rgba(220, 20, 60, 0.143);\n  border-radius: 0.5vh;\n  font-size: 1.7vh;\n}\n.formulate-input-help {\n  color: green;\n  background: rgba(20, 220, 30, 0.143);\n  border-radius: 0.5vh;\n  font-size: 1.7vh;\n}\n.wipay_logo {\n  display: none;\n}\nlabel {\n  text-align: center !important;\n  margin: auto !important;\n}\n.formulate-input-label {\n  text-align: center !important;\n  margin: auto !important;\n  justify-content: center !important;\n  font-size: 18px !important;\n  font-weight: 500;\n  color: #1976d2 !important;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif !important;\n}\n.my-valid-class {\n  color: green !important;\n}\n.form_area {\n  align-self: center;\n  margin: auto;\n  border-radius: 1vh;\n  background: #ffffff;\n  justify-content: center;\n  align-items: center;\n  padding: 2vh;\n}\n.form-title {\n  margin: auto;\n  padding: 1vh;\n  text-align: center;\n}", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./create_animal_form.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_animal_form.vue?vue&type=template&id=fbabe4e6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create_animal_form.vue?vue&type=template&id=fbabe4e6& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container", attrs: { id: "animal_form " } },
    [
      _c("div", { staticClass: "row justify-content-center h-100" }, [
        _c(
          "div",
          { staticClass: "w-100 m-auto" },
          [
            _c(
              "FormulateForm",
              {
                staticClass: "shadow form_area row",
                attrs: {
                  name: "animal",
                  errors: _vm.inputErrors,
                  "invalid-message": "Not all fields were filled out properly"
                },
                on: {
                  submit: _vm.submitHandler,
                  validation: function($event) {
                    _vm.validation = $event
                  }
                },
                model: {
                  value: _vm.formValues,
                  callback: function($$v) {
                    _vm.formValues = $$v
                  },
                  expression: "formValues"
                }
              },
              [
                _c(
                  "v-carousel",
                  {
                    staticClass: "pb-5",
                    attrs: {
                      dark: "",
                      "show-arrows-on-hover": "",
                      "hide-delimiter-background": "",
                      "hide-delimiters":
                        _vm.carousel_current == 3 ? true : false,
                      "delimiter-icon": "mdi-paw",
                      progress: "",
                      height: "600",
                      "progress-color": "success",
                      continuous: false
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "prev",
                        fn: function(ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-btn",
                              _vm._g(
                                _vm._b(
                                  { attrs: { icon: "", color: "primary" } },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                              1
                            )
                          ]
                        }
                      },
                      {
                        key: "next",
                        fn: function(ref) {
                          var on = ref.on
                          var attrs = ref.attrs
                          return [
                            _c(
                              "v-btn",
                              _vm._g(
                                _vm._b(
                                  { attrs: { icon: "", color: "primary" } },
                                  "v-btn",
                                  attrs,
                                  false
                                ),
                                on
                              ),
                              [_c("v-icon", [_vm._v("mdi-arrow-right")])],
                              1
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.carousel_current,
                      callback: function($$v) {
                        _vm.carousel_current = $$v
                      },
                      expression: "carousel_current"
                    }
                  },
                  [
                    _c(
                      "h4",
                      {
                        staticClass:
                          "w-100 mx-auto text-center m-3 text-primary"
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              this.name
                                ? this.name + "'s Profile"
                                : "Please complete the Animal Profile"
                            ) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-carousel-item",
                      {
                        staticClass:
                          "carousel_item justify-content-center w-100"
                      },
                      [
                        _c("div", { staticClass: "caption" }, [
                          _vm._v("click image to upload photo")
                        ]),
                        _vm._v(" "),
                        _c("v-hover", {
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-img",
                                    {
                                      staticClass: "w-100 mx-auto",
                                      attrs: {
                                        contain: "",
                                        src:
                                          (_vm.domain ? _vm.domain : "") +
                                          "/images/animals_blue.png",
                                        "lazy-src":
                                          (_vm.domain ? _vm.domain : "") +
                                          "/images/animals_blue.png",
                                        "max-height": "220"
                                      }
                                    },
                                    [
                                      _c("v-fade-transition", [
                                        hover
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-50 mx-auto transition-fast-in-fast-out white v-card--reveal display-3 white--text rounded"
                                              },
                                              [
                                                _c("FormulateInput", {
                                                  directives: [
                                                    {
                                                      name: "hover",
                                                      rawName: "v-hover",
                                                      value: _vm.file_selected(
                                                        "file_1"
                                                      ),
                                                      expression:
                                                        "file_selected('file_1')"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "input_field text-dark overflow-auto",
                                                  attrs: {
                                                    "label-is-valid-class":
                                                      "my-valid-class",
                                                    type: "image",
                                                    height: "150",
                                                    width: "150",
                                                    uploader: _vm.uploadFile,
                                                    name: "file_1",
                                                    color: "primary",
                                                    label:
                                                      _vm.name +
                                                      (_vm.name ? "'s" : "") +
                                                      " Profile Image 1",
                                                    help:
                                                      "Select a png, jpg or gif to upload.",
                                                    validation:
                                                      "required|mime:image/jpeg,image/png,image/gif"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75",
                          attrs: {
                            name: "name",
                            type: "text",
                            label: "Animal Name",
                            placeholder: "Name",
                            validation: "required",
                            "label-is-valid-class": "my-valid-class"
                          },
                          model: {
                            value: _vm.name,
                            callback: function($$v) {
                              _vm.name = $$v
                            },
                            expression: "name"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75 mb-3",
                          attrs: {
                            label:
                              "What kind of animal " +
                              (_vm.name ? "is " + _vm.name : ""),
                            type: "select",
                            name: "animal_type",
                            validation: "required",
                            options: _vm.animal_options
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-carousel-item",
                      {
                        staticClass:
                          "carousel_item justify-content-center w-100"
                      },
                      [
                        _c("div", { staticClass: "caption" }, [
                          _vm._v("click image to upload photo")
                        ]),
                        _vm._v(" "),
                        _c("v-hover", {
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-img",
                                    {
                                      staticClass: "w-100 mx-auto",
                                      attrs: {
                                        contain: "",
                                        "lazy-src":
                                          (_vm.domain ? _vm.domain : "") +
                                          "/images/animals_purple.png",
                                        src:
                                          (_vm.domain ? _vm.domain : "") +
                                          "/images/animals_purple.png",
                                        "max-height": "220"
                                      }
                                    },
                                    [
                                      _c("v-fade-transition", [
                                        hover
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-50 mx-auto transition-fast-in-fast-out white v-card--reveal display-3 white--text rounded"
                                              },
                                              [
                                                _c("FormulateInput", {
                                                  directives: [
                                                    {
                                                      name: "hover",
                                                      rawName: "v-hover",
                                                      value: _vm.file_selected(
                                                        "file_2"
                                                      ),
                                                      expression:
                                                        "file_selected('file_2')"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "input_field text-dark overflow-auto",
                                                  attrs: {
                                                    "label-is-valid-class":
                                                      "my-valid-class",
                                                    type: "image",
                                                    height: "150",
                                                    width: "150",
                                                    uploader: _vm.uploadFile,
                                                    name: "file_2",
                                                    color: "primary",
                                                    label:
                                                      _vm.name +
                                                      (_vm.name ? "'s" : "") +
                                                      " Profile Image 2",
                                                    help:
                                                      "Select a png, jpg or gif to upload.",
                                                    validation:
                                                      "required|mime:image/jpeg,image/png,image/gif"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c(
                          "FormulateInput",
                          {
                            staticClass: "input_field w-75 mx-auto p-3 m-3",
                            attrs: { type: "group", name: "age_group" }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _c("FormulateInput", {
                                  staticClass: "m-3 col-6",
                                  attrs: {
                                    type: "number",
                                    label:
                                      _vm.name +
                                      (_vm.name ? "'s" : "") +
                                      " Age",
                                    name: "age",
                                    placeholder:
                                      _vm.name +
                                      (_vm.name ? "'s" : "") +
                                      " age",
                                    validation: "required|number|between:0,100",
                                    min: "0",
                                    max: "100"
                                  },
                                  model: {
                                    value: _vm.age,
                                    callback: function($$v) {
                                      _vm.age = $$v
                                    },
                                    expression: "age"
                                  }
                                }),
                                _vm._v(" "),
                                _c("FormulateInput", {
                                  staticClass: "input_field col-4",
                                  attrs: {
                                    label: "Format",
                                    type: "select",
                                    name: "age_type",
                                    validation: "required",
                                    options: [
                                      _vm.age <= 1 ? "day" : "days",
                                      _vm.age <= 1 ? "month" : "months",
                                      _vm.age >= 2 ? "years" : "year"
                                    ]
                                  },
                                  model: {
                                    value: _vm.age_type,
                                    callback: function($$v) {
                                      _vm.age_type = $$v
                                    },
                                    expression: "age_type"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row" },
                          [
                            _c("FormulateInput", {
                              staticClass:
                                "d-inline-block w-50 mx-auto p-2 mt-3 text-center",
                              attrs: {
                                name: "gender",
                                placeholder:
                                  "Select " +
                                  _vm.name +
                                  (_vm.name ? "'s" : "") +
                                  " Gender",
                                options: {
                                  Boy: "Boy",
                                  Girl: "Girl",
                                  Unsure: "Unsure"
                                },
                                type: "radio",
                                validation: "required",
                                label:
                                  _vm.name + (_vm.name ? "'s" : "") + " Gender",
                                "label-is-valid-class": "my-valid-class"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-carousel-item",
                      {
                        staticClass:
                          "carousel_item justify-content-center w-100"
                      },
                      [
                        _c("div", { staticClass: "caption" }, [
                          _vm._v("click image to upload photo")
                        ]),
                        _vm._v(" "),
                        _c("v-hover", {
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-img",
                                    {
                                      staticClass: "w-100 mx-auto",
                                      attrs: {
                                        contain: "",
                                        "lazy-src":
                                          (_vm.domain ? _vm.domain : "") +
                                          "/images/animals_grey.png",
                                        src:
                                          (_vm.domain ? _vm.domain : "") +
                                          "/images/animals_grey.png",
                                        "max-height": "220"
                                      }
                                    },
                                    [
                                      _c("v-fade-transition", [
                                        hover
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-50 mx-auto transition-fast-in-fast-out white v-card--reveal display-3 white--text rounded"
                                              },
                                              [
                                                _c("FormulateInput", {
                                                  directives: [
                                                    {
                                                      name: "hover",
                                                      rawName: "v-hover",
                                                      value: _vm.file_selected(
                                                        "file_3"
                                                      ),
                                                      expression:
                                                        "file_selected('file_3')"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "input_field text-dark overflow-auto",
                                                  attrs: {
                                                    "label-is-valid-class":
                                                      "my-valid-class",
                                                    type: "image",
                                                    height: "150",
                                                    width: "150",
                                                    uploader: _vm.uploadFile,
                                                    name: "file_3",
                                                    color: "primary",
                                                    label:
                                                      _vm.name +
                                                      (_vm.name ? "'s" : "") +
                                                      " Profile Image 3",
                                                    help:
                                                      "Select a png, jpg or gif to upload.",
                                                    validation:
                                                      "required|mime:image/jpeg,image/png,image/gif"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75 mb-3",
                          attrs: {
                            type: "select",
                            name: "breed",
                            validation: "required",
                            options: _vm.breed_options,
                            placeholder:
                              "Select " +
                              _vm.name +
                              (_vm.name ? "'s" : "") +
                              " breed",
                            label: _vm.name + (_vm.name ? "'s" : "") + " Breed",
                            "label-is-valid-class": "my-valid-class"
                          }
                        }),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75",
                          attrs: {
                            type: "select",
                            name: "size",
                            validation: "required",
                            options: _vm.size_options,
                            placeholder:
                              "Select " +
                              _vm.name +
                              (_vm.name ? "'s" : "") +
                              " size",
                            label: _vm.name + (_vm.name ? "'s" : "") + " Size",
                            "label-is-valid-class": "my-valid-class"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-carousel-item",
                      {
                        staticClass:
                          "carousel_item justify-content-center w-100"
                      },
                      [
                        _c("div", { staticClass: "caption" }, [
                          _vm._v("click image to upload photo")
                        ]),
                        _vm._v(" "),
                        _c("v-hover", {
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(ref) {
                                var hover = ref.hover
                                return [
                                  _c(
                                    "v-img",
                                    {
                                      staticClass: "w-100 mx-auto",
                                      attrs: {
                                        contain: "",
                                        "lazy-src":
                                          (_vm.domain ? _vm.domain : "") +
                                          "/images/animals_green.png",
                                        src:
                                          (_vm.domain ? _vm.domain : "") +
                                          "/images/animals_green.png",
                                        "max-height": "220"
                                      }
                                    },
                                    [
                                      _c("v-fade-transition", [
                                        hover
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "w-50 mx-auto transition-fast-in-fast-out white v-card--reveal display-3 white--text rounded"
                                              },
                                              [
                                                _c("FormulateInput", {
                                                  staticClass:
                                                    "input_field text-dark overflow-auto",
                                                  attrs: {
                                                    "label-is-valid-class":
                                                      "my-valid-class",
                                                    type: "image",
                                                    height: "150",
                                                    width: "150",
                                                    uploader: _vm.uploadFile,
                                                    "v-hover": _vm.file_selected(
                                                      "file_4"
                                                    ),
                                                    name: "file_4",
                                                    color: "primary",
                                                    label:
                                                      _vm.name +
                                                      (_vm.name ? "'s" : "") +
                                                      " Profile Image 4",
                                                    help:
                                                      "Select a png, jpg or gif to upload.",
                                                    validation:
                                                      "required|mime:image/jpeg,image/png,image/gif"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ])
                                    ],
                                    1
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-100 mt-3",
                          attrs: {
                            name: "about",
                            type: "textarea",
                            label:
                              "Tell us a little about " +
                              (this.name ? this.name : "your Animal"),
                            validation: "required|max:1000,length",
                            help:
                              "Keep it under 1000 characters. " +
                              (1000 - _vm.textarea.length) +
                              " left.",
                            "label-is-valid-class": "my-valid-class"
                          },
                          model: {
                            value: _vm.textarea,
                            callback: function($$v) {
                              _vm.textarea = $$v
                            },
                            expression: "textarea"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row center" }, [
                  _c("div", { staticClass: "col-4 text-center" }, [_c("div")]),
                  _vm._v(" "),
                  _vm.carousel_current == 3
                    ? _c("div", { staticClass: "col-4 text-center" }, [
                        _c(
                          "div",
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-2",
                                attrs: {
                                  color: "primary",
                                  rounded: "",
                                  type: "submit"
                                }
                              },
                              [_vm._v("Continue\n              ")]
                            )
                          ],
                          1
                        )
                      ])
                    : _c("div", { staticClass: "col-4 text-center" }, [
                        _c("div")
                      ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4 text-center" }, [_c("div")])
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center shadow" },
              [
                _c(
                  "v-snackbar",
                  {
                    staticClass: "alert",
                    attrs: { timeout: _vm.timeout },
                    model: {
                      value: _vm.snackbar,
                      callback: function($$v) {
                        _vm.snackbar = $$v
                      },
                      expression: "snackbar"
                    }
                  },
                  [_c("h2", [_vm._v(_vm._s(_vm.alert))])]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/create_animal_form.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/create_animal_form.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_animal_form_vue_vue_type_template_id_fbabe4e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_animal_form.vue?vue&type=template&id=fbabe4e6& */ "./resources/js/pages/create_animal_form.vue?vue&type=template&id=fbabe4e6&");
/* harmony import */ var _create_animal_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_animal_form.vue?vue&type=script&lang=js& */ "./resources/js/pages/create_animal_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_animal_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_animal_form.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_animal_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_animal_form_vue_vue_type_template_id_fbabe4e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_animal_form_vue_vue_type_template_id_fbabe4e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create_animal_form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create_animal_form.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/create_animal_form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./create_animal_form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_animal_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./create_animal_form.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_animal_form.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/create_animal_form.vue?vue&type=template&id=fbabe4e6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/create_animal_form.vue?vue&type=template&id=fbabe4e6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_template_id_fbabe4e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./create_animal_form.vue?vue&type=template&id=fbabe4e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_animal_form.vue?vue&type=template&id=fbabe4e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_template_id_fbabe4e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_animal_form_vue_vue_type_template_id_fbabe4e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);