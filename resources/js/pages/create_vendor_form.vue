<template>
  <div id="shelter_form " class="container">
    <div class="row justify-content-center h-100">
      <div class="col-lg-7 col-md-8 col-sm-10 my-auto">
        <FormulateForm
          class="shadow form_area row"
          :errors="inputErrors"
          invalid-message="Not all fields were filled out properly"
          @validation="validation = $event"
        >
          <v-carousel
            dark
            v-model="carusel_current"
            show-arrows-on-hover
            hide-delimiter-background
            :hide-delimiters="carusel_current == 2 ? true : false"
            delimiter-icon="mdi-food-fork-drink"
            progress
            class="pb-5"
            height="fit-content"
             progress-color="success"
            :continuous="false"
          >
            <h4 class="w-100 mx-auto text-center m-3 text-red lighten-1">
              {{
                this.form.name
                  ? this.form.name + "'s Profile"
                  : "Complete your Doubles Shed Profile"
              }}
            </h4>

            <v-carousel-item class="carousel_item">
              <v-img
                contain
                :lazy-src="
                  (this.domain ? this.domain : '') + '/images/doubles1.png'
                "
                :src="
                  (this.domain ? this.domain : '') + '/images/doubles1.png'
                "
                max-height="200"
              ></v-img>
              <v-divider></v-divider>

              <FormulateInput
                class="input_field w-75"
                name="name"
                type="text"
                label="Doubles Shed Name"
                placeholder="Name"
                validation="required|max:255"
                v-model="form.name"
                label-is-valid-class="my-valid-class"
              />
              <v-divider></v-divider>
              <FormulateInput
                class="input_field w-75"
                name="vendor_id"
                type="text"
                label="Food Badge Id/Name"
                placeholder="Enter the Id number of your food badge"
                validation="required|max:255"
                v-model="form.vendor_id"
                label-is-valid-class="my-valid-class"
              />
              <v-divider></v-divider>
              <FormulateInput
                class="input_field w-75"
                name="Location"
                type="text"
                :label="
                  this.location_label ? this.location_label : 'Find Location'
                "
                placeholder="Location"
                validation="required|max:255"
                v-model="location_text"
                @keyup="locationSearch($event)"
                label-is-valid-class="my-valid-class"
              />
              <GmapMap
                :content="this.infoWindow"
                ref="mapRef"
                :center="pos"
                :zoom="10"
                map-type-id="roadmap"
                class="my-auto"
                style="
                  height: 100px;
                  width: 75%;
                  text-align: center;
                  margin: auto;
                "
              >
                <GmapMarker
                  :key="1"
                  :position="pos"
                  :clickable="true"
                  :draggable="true"
                  @click="markerClick"
                />
              </GmapMap>

              <!-- <v-btn
                class="mx-2"
                fab
                dark
                small
                @click="getLocation"
                color="green"
              >
                <v-icon dark> mdi-map-marker </v-icon>
              </v-btn> -->
            </v-carousel-item>
            <v-carousel-item class="carousel_item">
              <v-img
                contain
                :lazy-src="
                  (this.domain ? this.domain : '') +
                  '/images/doubles1.png'
                "
                :src="
                  (this.domain ? this.domain : '') +
                  '/images/doubles1.png'
                "
                max-height="200"
              ></v-img>

              <v-divider></v-divider>
              <div
                v-on:keyup.backspace="clear_phone()"
                v-on:keyup.delete="clear_phone()"
                class="input_field w-75 mb-3"
              >
                <label class="formulate-input-label w-100">Phone</label>

                <vue-tel-input
                  class="input_field w-75 my-2"
                  v-bind="tel_props"
                  v-model="form.phone"
                ></vue-tel-input>
              </div>
              <FormulateInput
                v-model="form.email"
                class="input_field w-75 mb-3"
                name="email"
                type="email"
                :label="
                  (this.form.name ? this.form.name + '\'s ' : '') +
                  'Email Address'
                "
                placeholder="Email Address"
                validation="required|email"
                label-is-valid-class="my-valid-class"
              />

              <FormulateInput
                v-model="form.website"
                class="input_field w-75 mb-3"
                name="website"
                type="url"
                :label="
                  (this.form.name ? this.form.name + '\'s ' : '') +
                  'Website (optional)'
                "
                placeholder="Paste Social Media link (or) Website"
              />
            </v-carousel-item>

            <v-carousel-item class="carousel_item">
              <v-img
                contain
                :lazy-src="
                  (this.domain ? this.domain : '') + '/images/doubles1.png'
                "
                :src="
                  (this.domain ? this.domain : '') + '/images/doubles1.png'
                "
                max-height="200"
              ></v-img>
              <v-spacer></v-spacer>

              <FormulateInput
                name="about"
                v-model="form.about"
                class="input_field w-100 mt-3"
                type="textarea"
                :label="
                  'Tell us a little about ' +
                  (this.form.name ? this.form.name : 'your Doubles Shed')
                "
                validation="required|max:500,length"
                :help="`Try to keep it under 500 characters. ${
                  500 - textarea.length
                } left.`"
                label-is-valid-class="my-valid-class"
              />
              <div class="row my-3">
                <FormulateInput
                  name="password"
                  v-model="form.password"
                  class="input_field col-5 mx-auto"
                  type="password"
                  label="Password"
                  placeholder="Your password"
                  validation="required|min:6,length"
                  label-is-valid-class="my-valid-class"
                />
                <FormulateInput
                  name="password_confirm"
                  v-model="form.password_confirm"
                  class="input_field col-5 mx-auto"
                  type="password"
                  label="Confirm password"
                  placeholder="Confirm password"
                  validation="required|confirm|min:6,length"
                  label-is-valid-class="my-valid-class"
                />
              </div>
            </v-carousel-item>
            <template v-slot:prev="{ on, attrs }">
              <v-btn icon color="red darken-1" v-bind="attrs" v-on="on">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-btn icon color="red darken-1" v-bind="attrs" v-on="on">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </template>
          </v-carousel>

          <div class="row center">
            <div class="col-4 text-center">
              <div></div>
            </div>

            <div v-if="carusel_current == 2" class="col-4 text-center">
              <div>
                <v-btn
                  class="ma-2 text-white"
                  @click.prevent="submitHandler"
                  color="green darken-3"
                  rounded
                  type="submit"
                  >Continue
                </v-btn>
              </div>
            </div>
            <div v-else class="col-4 text-center">
              <div></div>
            </div>

            <div class="col-4 text-center">
              <div></div>
            </div>
          </div>
        </FormulateForm>
        <!-- <v-btn dark @click="snackbar = true">
          Open Snackbar
        </v-btn> -->
      </div>
    </div>
  </div>
</template>
<script>
import Form from "vform";
import { gmapApi } from "vue2-google-maps";

import { mapGetters } from "vuex";

export default {
  name: "shelter_form",
  middleware: "guest",

  metaInfo() {
    return { title: this.$t("register") };
  },
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        password: "",
        password_confirm: "",
        website: "",
        vendor_id: "",
        about: "",
        location: "",
      }),
      mustVerifyEmail: false,
      markers: {},
      phone: "1868",
      carusel_current: 0,
      textarea: "",
      location_label: null,
       alert: "",
      pos: { lat: 10.536421, lng: -61.311951 },
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
          autocomplete: "on",
        },
      },
    };
  },
  watch: {
    carusel_current: function () {
      console.log("carusel_current: " + this.carusel_current);
    },
  },
  computed: mapGetters({
    user: "auth/user",
    domain: "auth/domain",
    google: gmapApi,
  }),

  mounted() {
    this.breed_options = ["Bologna", "Rome", "Florence"];
    this.size_options = [
      "extra-small",
      "small",
      "medium",
      "large",
      "extra-large",
    ];
    this.getLocation();
    this.initMap();
  },
  methods: {
    markerClick() {
      console.log("marker clicked");
       this.geocodePos();
    },
    parseTuple(t) {
      return;
    },
    geocodeAddress() {
      let geocoder = new google.maps.Geocoder();

      geocoder.geocode({ address: this.location_text }, (results, status) => {
        if (status === "OK") {
          let coordinates = String(results[0].geometry.location);
          let coordinates_array = coordinates.toString();
          coordinates_array = coordinates_array.split(",");

          console.log(
            "positon coordinates: " + coordinates_array[0].replace("(", "")
          );
          this.pos.lat = parseFloat(coordinates_array[0].replace("(", ""));
          this.pos.lng = parseFloat(coordinates_array[1].replace(")", ""));
          console.log("positon coordinates: " + JSON.stringify(this.pos));
        } else {
          // alert(
          //   "Geocode was not successful for the following reason: " + status
          // );
        }
      });
    },
    geocodePos() {
      var axios = require("axios");

      var config = {
        method: "get",
        url:
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          this.pos.lat +
          "," +
          this.pos.lng +
          window.config.google_api_key,
        headers: {},
      };

      axios(config)
        .then((response) => {
            console.log(
           JSON.stringify(response.data.results[0].formatted_address)
          );
            console.log(
           JSON.stringify(response.data.results[1].formatted_address)
          );
            console.log(
           JSON.stringify(response.data.results[2].formatted_address)
          );
            console.log(
           JSON.stringify(response.data.results[3].formatted_address)
          );
            console.log(
           JSON.stringify(response.data.results[4].formatted_address)
          );

          // console.log(
          this.location_label = response.data.results[0].formatted_address;
          // JSON.stringify(response.data.results[0].formatted_address)
          // );
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    locationSearch(event) {
      setTimeout(() => {
        this.geocodePos();
        this.geocodeAddress();
      }, 2500);
    },
    initMap() {
      this.$refs.mapRef.$mapPromise.then((map) => {
        console.log(map);
        this.geocodeAddress();
        // let locationButton = document.createElement("button");
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
    handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(
        browserHasGeolocation
          ? "Error: The Geolocation service failed."
          : "Error: Your browser doesn't support geolocation."
      );
      infoWindow.open(map);
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        });
      }
    },
    clear_phone() {
      document.getElementsByClassName("vti__input")[0].value = "";
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    success_response(response) {
      this.$swal.fire("Success!", "Congrats you are all set!", "success");
    },
    fail_response(response) {},

    async submitHandler() {
      // Register the user.
      this.form.location = this.pos;
      const { data } = await this.form.post(
        (this.domain ? this.domain : "") + "/api/register"
      );

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true;
      } else {
        // Log in the user.
        const {
          data: { token },
        } = await this.form.post("/api/login");

        // Save the token.
        this.$store.dispatch("auth/saveToken", { token });

        // Update the user.
        await this.$store.dispatch("auth/updateUser", { user: data });

        // Redirect home.
        this.$router.push({ name: "home" });
      }
    },
    reset() {
      this.clicked = false;
    },

    back() {
      appRouter.push("main");
    },
  },
};
</script>

<style lang='scss'   >
.formulate-input-element--radio {
  display: inline-flex;
  width: 2vw;
  margin: auto !important;
}
.v-carousel__controls__item {
  background: #e57373 !important;
}
.v-carousel__controls {
  position: relative;
  padding-top: 15vh;
}

.alert {
  background: none !important;
  padding: none;
}
.v-input__slot {
  width: auto !important;
  margin: auto !important;
}

.v-snack__content {
  flex-grow: 1 !important;
  font-size: 0.575rem !important;
  font-weight: 400 !important;
  line-height: 1.25rem !important;
  text-align: center !important;
  padding: 1px !important;
}
.input_field {
  text-align: center !important;
  margin: auto !important;
  justify-content: center !important;
  padding: 1vh !important;
  border-radius: 1vh !important;
}

.v-snack__wrapper.theme--dark {
  color: white;
  -webkit-transition: ease-in 1s;
  transition: ease-in 1s;
  background: linear-gradient(45deg, #58b87c, #068768) !important;
  // border: 1px solid green!important;
}
.close_snackbar {
  color: #751714 !important;
  margin: 1px 1px !important;
  // border: 1px solid darkred!important;
}
// #id.formulate-input-wrapper{
//   text-align: center;
//   justify-content: center;
//   margin: auto;

// }

input,
textarea,
option,
select {
  text-align: center !important;
  text-align-last: center !important;
  border-radius: 0.5vh;
  padding: 0.5vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  width: 100%;
  font-size: 2.2vh !important;
  margin: auto !important;
  justify-content: center !important;
}

textarea {
  height: 150px;
}

.formulate-input:hover {
  border: 1px solid rgba(34, 172, 29, 0.7);
  border-radius: 0.5vh;
}
.formulate-input {
  border: 1px solid #e57373;
  border-radius: 0.5vh;
}

.pagination {
  border-radius: 1vh;
  padding: 0vh;
  padding-bottom: 0vh;
  justify-content: center;
}
.img_logo {
  max-height: 45vh;
  max-width: 60vh;
}
a,
a:link,
a:visited,
a:active {
  color: cornflowerblue;
}
.formulate-input-error {
  color: crimson;
  padding: 0.5vh;
}
.formulate-input-errors {
  background: rgba(220, 20, 60, 0.143);
  border-radius: 0.5vh;
  font-size: 1.7vh;
}
.formulate-input-help {
  color: green;
  background: rgba(20, 220, 30, 0.143);

  border-radius: 0.5vh;
  font-size: 1.7vh;
}

// @media only screen and (max-width: 600px) {

// }

.wipay_logo {
  display: none;
}
label {
  text-align: center !important;
  margin: auto !important;
}

.formulate-input-label {
  text-align: center !important;
  margin: auto !important;
  justify-content: center !important;
  font-size: 18px !important;
  font-weight: 500;
  color: #e57373 !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}

.my-valid-class {
  color: green !important;
}
.custom-map-control-button {
  appearance: button;
  background-color: #fff;
  border: 0;
  color: #e57373;
  border-radius: 2px;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin: 10px;
  padding: 0 0.5em;
  height: 40px;
  font: 400 18px Roboto, Arial, sans-serif;
  overflow: hidden;
}
.custom-map-control-button:hover {
  background: #ebebeb;
}
.form_area {
  align-self: center;
  margin: auto;
  border-radius: 1vh;
  background: #ffffff;
  justify-content: center;
  align-items: center;
  padding: 2vh;
}

.form-title {
  margin: auto;
  padding: 1vh;
  text-align: center;
}
</style>
