(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_vendor_form.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create_vendor_form.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-google-maps */ "./node_modules/vue2-google-maps/dist/main.js");
/* harmony import */ var vue2_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "shelter_form",
  middleware: "guest",
  metaInfo: function metaInfo() {
    return {
      title: this.$t("register")
    };
  },
  data: function data() {
    return {
      form: new vform__WEBPACK_IMPORTED_MODULE_1___default.a({
        name: "",
        email: "",
        password: "",
        password_confirm: "",
        website: "",
        vendor_id: "",
        about: "",
        location: ""
      }),
      mustVerifyEmail: false,
      markers: {},
      phone: "1868",
      carusel_current: 0,
      textarea: "",
      location_label: null,
      alert: "",
      pos: {
        lat: 10.536421,
        lng: -61.311951
      },
      text: "Sign UP",
      inputErrors: null,
      checkbox: false,
      location_text: "Trinidad",
      validation: null,
      place: "Trinidad",
      clicked: false,
      infoWindow: null,
      tel_props: {
        defaultCountry: "TT",
        mode: "auto",
        autoFormat: true,
        validCharactersOnly: true,
        required: true,
        inputOptions: {
          required: true,
          placeholder: "XXX XXX XXXX",
          maxLen: 25,
          autocomplete: "on"
        }
      }
    };
  },
  watch: {
    carusel_current: function carusel_current() {
      console.log("carusel_current: " + this.carusel_current);
    }
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])({
    user: "auth/user",
    domain: "auth/domain",
    google: vue2_google_maps__WEBPACK_IMPORTED_MODULE_2__["gmapApi"]
  }),
  mounted: function mounted() {
    this.breed_options = ["Bologna", "Rome", "Florence"];
    this.size_options = ["extra-small", "small", "medium", "large", "extra-large"];
    this.getLocation();
    this.initMap();
  },
  methods: {
    markerClick: function markerClick() {
      console.log("marker clicked");
      this.geocodePos();
    },
    parseTuple: function parseTuple(t) {
      return;
    },
    geocodeAddress: function geocodeAddress() {
      var _this = this;

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        address: this.location_text
      }, function (results, status) {
        if (status === "OK") {
          var coordinates = String(results[0].geometry.location);
          var coordinates_array = coordinates.toString();
          coordinates_array = coordinates_array.split(",");
          console.log("positon coordinates: " + coordinates_array[0].replace("(", ""));
          _this.pos.lat = parseFloat(coordinates_array[0].replace("(", ""));
          _this.pos.lng = parseFloat(coordinates_array[1].replace(")", ""));
          console.log("positon coordinates: " + JSON.stringify(_this.pos));
        } else {// alert(
          //   "Geocode was not successful for the following reason: " + status
          // );
        }
      });
    },
    geocodePos: function geocodePos() {
      var _this2 = this;

      var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

      var config = {
        method: "get",
        url: "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + this.pos.lat + "," + this.pos.lng + window.config.google_api_key,
        headers: {}
      };
      axios(config).then(function (response) {
        console.log(JSON.stringify(response.data.results[0].formatted_address));
        console.log(JSON.stringify(response.data.results[1].formatted_address));
        console.log(JSON.stringify(response.data.results[2].formatted_address));
        console.log(JSON.stringify(response.data.results[3].formatted_address));
        console.log(JSON.stringify(response.data.results[4].formatted_address)); // console.log(

        _this2.location_label = response.data.results[0].formatted_address; // JSON.stringify(response.data.results[0].formatted_address)
        // );
      })["catch"](function (error) {
        console.log(error);
      });
    },
    locationSearch: function locationSearch(event) {
      var _this3 = this;

      setTimeout(function () {
        _this3.geocodePos();

        _this3.geocodeAddress();
      }, 2500);
    },
    initMap: function initMap() {
      var _this4 = this;

      this.$refs.mapRef.$mapPromise.then(function (map) {
        console.log(map);

        _this4.geocodeAddress(); // let locationButton = document.createElement("button");
        // locationButton.textContent = "Pan to Current Location";
        // locationButton.classList.add("custom-map-control-button");
        // map.controls[google.maps.ControlPosition.TOP_CENTER].push(
        //   locationButton
        // );
        // locationButton.addEventListener("click", () => {
        //   // Try HTML5 geolocation.
        //   if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition((position) => {
        //       this.pos = {
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude,
        //       };
        //     });
        //   } else {
        //     // Browser doesn't support Geolocation
        //     handleLocationError(false, infoWindow, map.getCenter());
        //   }
        // });

      });
    },
    handleLocationError: function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ? "Error: The Geolocation service failed." : "Error: Your browser doesn't support geolocation.");
      infoWindow.open(map);
    },
    getLocation: function getLocation() {
      var _this5 = this;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          _this5.pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });
      }
    },
    clear_phone: function clear_phone() {
      document.getElementsByClassName("vti__input")[0].value = "";
    },
    resetValidation: function resetValidation() {
      this.$refs.form.resetValidation();
    },
    success_response: function success_response(response) {
      this.$swal.fire("Success!", "Congrats you are all set!", "success");
    },
    fail_response: function fail_response(response) {},
    submitHandler: function submitHandler() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$_this6$form$po, data, _yield$_this6$form$po2, token;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Register the user.
                _this6.form.location = _this6.pos;
                _context.next = 3;
                return _this6.form.post((_this6.domain ? _this6.domain : "") + "/api/register");

              case 3:
                _yield$_this6$form$po = _context.sent;
                data = _yield$_this6$form$po.data;

                if (!data.status) {
                  _context.next = 9;
                  break;
                }

                _this6.mustVerifyEmail = true;
                _context.next = 17;
                break;

              case 9:
                _context.next = 11;
                return _this6.form.post("/api/login");

              case 11:
                _yield$_this6$form$po2 = _context.sent;
                token = _yield$_this6$form$po2.data.token;

                // Save the token.
                _this6.$store.dispatch("auth/saveToken", {
                  token: token
                }); // Update the user.


                _context.next = 16;
                return _this6.$store.dispatch("auth/updateUser", {
                  user: data
                });

              case 16:
                // Redirect home.
                _this6.$router.push({
                  name: "home"
                });

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    reset: function reset() {
      this.clicked = false;
    },
    back: function back() {
      appRouter.push("main");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formulate-input-element--radio {\n  display: inline-flex;\n  width: 2vw;\n  margin: auto !important;\n}\n.v-carousel__controls__item {\n  background: #e57373 !important;\n}\n.v-carousel__controls {\n  position: relative;\n  padding-top: 15vh;\n}\n.alert {\n  background: none !important;\n  padding: none;\n}\n.v-input__slot {\n  width: auto !important;\n  margin: auto !important;\n}\n.v-snack__content {\n  flex-grow: 1 !important;\n  font-size: 0.575rem !important;\n  font-weight: 400 !important;\n  line-height: 1.25rem !important;\n  text-align: center !important;\n  padding: 1px !important;\n}\n.input_field {\n  text-align: center !important;\n  margin: auto !important;\n  justify-content: center !important;\n  padding: 1vh !important;\n  border-radius: 1vh !important;\n}\n.v-snack__wrapper.theme--dark {\n  color: white;\n  transition: ease-in 1s;\n  background: linear-gradient(45deg, #58b87c, #068768) !important;\n}\n.close_snackbar {\n  color: #751714 !important;\n  margin: 1px 1px !important;\n}\ninput,\ntextarea,\noption,\nselect {\n  text-align: center !important;\n  -moz-text-align-last: center !important;\n       text-align-last: center !important;\n  border-radius: 0.5vh;\n  padding: 0.5vh;\n  padding-top: 1vh;\n  padding-bottom: 1vh;\n  width: 100%;\n  font-size: 2.2vh !important;\n  margin: auto !important;\n  justify-content: center !important;\n}\ntextarea {\n  height: 150px;\n}\n.formulate-input:hover {\n  border: 1px solid rgba(34, 172, 29, 0.7);\n  border-radius: 0.5vh;\n}\n.formulate-input {\n  border: 1px solid #e57373;\n  border-radius: 0.5vh;\n}\n.pagination {\n  border-radius: 1vh;\n  padding: 0vh;\n  padding-bottom: 0vh;\n  justify-content: center;\n}\n.img_logo {\n  max-height: 45vh;\n  max-width: 60vh;\n}\na,\na:link,\na:visited,\na:active {\n  color: cornflowerblue;\n}\n.formulate-input-error {\n  color: crimson;\n  padding: 0.5vh;\n}\n.formulate-input-errors {\n  background: rgba(220, 20, 60, 0.143);\n  border-radius: 0.5vh;\n  font-size: 1.7vh;\n}\n.formulate-input-help {\n  color: green;\n  background: rgba(20, 220, 30, 0.143);\n  border-radius: 0.5vh;\n  font-size: 1.7vh;\n}\n.wipay_logo {\n  display: none;\n}\nlabel {\n  text-align: center !important;\n  margin: auto !important;\n}\n.formulate-input-label {\n  text-align: center !important;\n  margin: auto !important;\n  justify-content: center !important;\n  font-size: 18px !important;\n  font-weight: 500;\n  color: #e57373 !important;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif !important;\n}\n.my-valid-class {\n  color: green !important;\n}\n.custom-map-control-button {\n  -webkit-appearance: button;\n     -moz-appearance: button;\n          appearance: button;\n  background-color: #fff;\n  border: 0;\n  color: #e57373;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  margin: 10px;\n  padding: 0 0.5em;\n  height: 40px;\n  font: 400 18px Roboto, Arial, sans-serif;\n  overflow: hidden;\n}\n.custom-map-control-button:hover {\n  background: #ebebeb;\n}\n.form_area {\n  align-self: center;\n  margin: auto;\n  border-radius: 1vh;\n  background: #ffffff;\n  justify-content: center;\n  align-items: center;\n  padding: 2vh;\n}\n.form-title {\n  margin: auto;\n  padding: 1vh;\n  text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./create_vendor_form.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_vendor_form.vue?vue&type=template&id=31e86bc1&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create_vendor_form.vue?vue&type=template&id=31e86bc1& ***!
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
    { staticClass: "container", attrs: { id: "shelter_form " } },
    [
      _c("div", { staticClass: "row justify-content-center h-100" }, [
        _c(
          "div",
          { staticClass: "col-lg-7 col-md-8 col-sm-10 my-auto" },
          [
            _c(
              "FormulateForm",
              {
                staticClass: "shadow form_area row",
                attrs: {
                  errors: _vm.inputErrors,
                  "invalid-message": "Not all fields were filled out properly"
                },
                on: {
                  validation: function($event) {
                    _vm.validation = $event
                  }
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
                        _vm.carusel_current == 2 ? true : false,
                      "delimiter-icon": "mdi-food-fork-drink",
                      progress: "",
                      height: "fit-content",
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
                                  {
                                    attrs: { icon: "", color: "red darken-1" }
                                  },
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
                                  {
                                    attrs: { icon: "", color: "red darken-1" }
                                  },
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
                      value: _vm.carusel_current,
                      callback: function($$v) {
                        _vm.carusel_current = $$v
                      },
                      expression: "carusel_current"
                    }
                  },
                  [
                    _c(
                      "h4",
                      {
                        staticClass:
                          "w-100 mx-auto text-center m-3 text-red lighten-1"
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              this.form.name
                                ? this.form.name + "'s Profile"
                                : "Complete your Doubles Shed Profile"
                            ) +
                            "\n          "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-carousel-item",
                      { staticClass: "carousel_item" },
                      [
                        _c("v-img", {
                          attrs: {
                            contain: "",
                            "lazy-src":
                              (this.domain ? this.domain : "") +
                              "/images/shelter_blue.png",
                            src:
                              (this.domain ? this.domain : "") +
                              "/images/shelter_blue.png",
                            "max-height": "200"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75",
                          attrs: {
                            name: "name",
                            type: "text",
                            label: "Doubles Shed Name",
                            placeholder: "Name",
                            validation: "required|max:255",
                            "label-is-valid-class": "my-valid-class"
                          },
                          model: {
                            value: _vm.form.name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "name", $$v)
                            },
                            expression: "form.name"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75",
                          attrs: {
                            name: "vendor_id",
                            type: "text",
                            label: "Food Badge Id/Name",
                            placeholder:
                              "Enter the Id number of your food badge",
                            validation: "required|max:255",
                            "label-is-valid-class": "my-valid-class"
                          },
                          model: {
                            value: _vm.form.vendor_id,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "vendor_id", $$v)
                            },
                            expression: "form.vendor_id"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75",
                          attrs: {
                            name: "Location",
                            type: "text",
                            label: this.location_label
                              ? this.location_label
                              : "Find Location",
                            placeholder: "Location",
                            validation: "required|max:255",
                            "label-is-valid-class": "my-valid-class"
                          },
                          on: {
                            keyup: function($event) {
                              return _vm.locationSearch($event)
                            }
                          },
                          model: {
                            value: _vm.location_text,
                            callback: function($$v) {
                              _vm.location_text = $$v
                            },
                            expression: "location_text"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "GmapMap",
                          {
                            ref: "mapRef",
                            staticClass: "my-auto",
                            staticStyle: {
                              height: "100px",
                              width: "75%",
                              "text-align": "center",
                              margin: "auto"
                            },
                            attrs: {
                              content: this.infoWindow,
                              center: _vm.pos,
                              zoom: 10,
                              "map-type-id": "roadmap"
                            }
                          },
                          [
                            _c("GmapMarker", {
                              key: 1,
                              attrs: {
                                position: _vm.pos,
                                clickable: true,
                                draggable: true
                              },
                              on: { click: _vm.markerClick }
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
                      { staticClass: "carousel_item" },
                      [
                        _c("v-img", {
                          attrs: {
                            contain: "",
                            "lazy-src":
                              (this.domain ? this.domain : "") +
                              "/images/shelter_purple.png",
                            src:
                              (this.domain ? this.domain : "") +
                              "/images/shelter_purple.png",
                            "max-height": "200"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-divider"),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "input_field w-75 mb-3",
                            on: {
                              keyup: [
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "backspace",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.clear_phone()
                                },
                                function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "delete",
                                      [8, 46],
                                      $event.key,
                                      ["Backspace", "Delete", "Del"]
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.clear_phone()
                                }
                              ]
                            }
                          },
                          [
                            _c(
                              "label",
                              { staticClass: "formulate-input-label w-100" },
                              [_vm._v("Phone")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vue-tel-input",
                              _vm._b(
                                {
                                  staticClass: "input_field w-75 my-2",
                                  model: {
                                    value: _vm.form.phone,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "phone", $$v)
                                    },
                                    expression: "form.phone"
                                  }
                                },
                                "vue-tel-input",
                                _vm.tel_props,
                                false
                              )
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75 mb-3",
                          attrs: {
                            name: "email",
                            type: "email",
                            label:
                              (this.form.name ? this.form.name + "'s " : "") +
                              "Email Address",
                            placeholder: "Email Address",
                            validation: "required|email",
                            "label-is-valid-class": "my-valid-class"
                          },
                          model: {
                            value: _vm.form.email,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "email", $$v)
                            },
                            expression: "form.email"
                          }
                        }),
                        _vm._v(" "),
                        _c("FormulateInput", {
                          staticClass: "input_field w-75 mb-3",
                          attrs: {
                            name: "website",
                            type: "url",
                            label:
                              (this.form.name ? this.form.name + "'s " : "") +
                              "Website (optional)",
                            placeholder: "Paste Social Media link (or) Website"
                          },
                          model: {
                            value: _vm.form.website,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "website", $$v)
                            },
                            expression: "form.website"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-carousel-item",
                      { staticClass: "carousel_item" },
                      [
                        _c("v-img", {
                          attrs: {
                            contain: "",
                            "lazy-src":
                              (this.domain ? this.domain : "") +
                              "/images/shelter_green.png",
                            src:
                              (this.domain ? this.domain : "") +
                              "/images/shelter_green.png",
                            "max-height": "200"
                          }
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
                              (this.form.name
                                ? this.form.name
                                : "your Doubles Shed"),
                            validation: "required|max:500,length",
                            help:
                              "Try to keep it under 500 characters. " +
                              (500 - _vm.textarea.length) +
                              " left.",
                            "label-is-valid-class": "my-valid-class"
                          },
                          model: {
                            value: _vm.form.about,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "about", $$v)
                            },
                            expression: "form.about"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "row my-3" },
                          [
                            _c("FormulateInput", {
                              staticClass: "input_field col-5 mx-auto",
                              attrs: {
                                name: "password",
                                type: "password",
                                label: "Password",
                                placeholder: "Your password",
                                validation: "required|min:6,length",
                                "label-is-valid-class": "my-valid-class"
                              },
                              model: {
                                value: _vm.form.password,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "password", $$v)
                                },
                                expression: "form.password"
                              }
                            }),
                            _vm._v(" "),
                            _c("FormulateInput", {
                              staticClass: "input_field col-5 mx-auto",
                              attrs: {
                                name: "password_confirm",
                                type: "password",
                                label: "Confirm password",
                                placeholder: "Confirm password",
                                validation: "required|confirm|min:6,length",
                                "label-is-valid-class": "my-valid-class"
                              },
                              model: {
                                value: _vm.form.password_confirm,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "password_confirm", $$v)
                                },
                                expression: "form.password_confirm"
                              }
                            })
                          ],
                          1
                        )
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
                  _vm.carusel_current == 2
                    ? _c("div", { staticClass: "col-4 text-center" }, [
                        _c(
                          "div",
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "ma-2 text-white",
                                attrs: {
                                  color: "green darken-3",
                                  rounded: "",
                                  type: "submit"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.submitHandler($event)
                                  }
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

/***/ "./resources/js/pages/create_vendor_form.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/create_vendor_form.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vendor_form_vue_vue_type_template_id_31e86bc1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_vendor_form.vue?vue&type=template&id=31e86bc1& */ "./resources/js/pages/create_vendor_form.vue?vue&type=template&id=31e86bc1&");
/* harmony import */ var _create_vendor_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_vendor_form.vue?vue&type=script&lang=js& */ "./resources/js/pages/create_vendor_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_vendor_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_vendor_form.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_vendor_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vendor_form_vue_vue_type_template_id_31e86bc1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vendor_form_vue_vue_type_template_id_31e86bc1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create_vendor_form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create_vendor_form.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/create_vendor_form.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./create_vendor_form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_vendor_form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./create_vendor_form.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_vendor_form.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/create_vendor_form.vue?vue&type=template&id=31e86bc1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/create_vendor_form.vue?vue&type=template&id=31e86bc1& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_template_id_31e86bc1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./create_vendor_form.vue?vue&type=template&id=31e86bc1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create_vendor_form.vue?vue&type=template&id=31e86bc1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_template_id_31e86bc1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vendor_form_vue_vue_type_template_id_31e86bc1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);