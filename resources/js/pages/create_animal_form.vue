<template>
  <div id="animal_form " class="container">
    <div class="row justify-content-center h-100">
      <div class="w-100 m-auto">
        <!-- <GmapMap
          :center="pos"
          :zoom="9"
          map-type-id="roadmap"
          style="width: inherit; height: 300px"
        >
          <GmapMarker
            :key="index"
            :position="curr_position"
            :clickable="true"
            :draggable="true"
            @click="center = curr_position"
          />
        </GmapMap> -->

        <FormulateForm
          name="animal"
          class="shadow form_area row"
          :errors="inputErrors"
          v-model="formValues"
          @submit="submitHandler"
          invalid-message="Not all fields were filled out properly"
          @validation="validation = $event"
        >
          <v-carousel
            dark
            v-model="carousel_current"
            show-arrows-on-hover
            hide-delimiter-background
            :hide-delimiters="carousel_current == 3 ? true : false"
            delimiter-icon="mdi-paw"
            progress
            class="pb-5"
            height="600"
            progress-color="success"
            :continuous="false"
          >
            <h4 class="w-100 mx-auto text-center m-3 text-primary">
              {{
                this.name
                  ? this.name + "'s Profile"
                  : "Please complete the Animal Profile"
              }}
            </h4>

            <v-carousel-item class="carousel_item justify-content-center w-100">
              <div class="caption">click image to upload photo</div>

              <v-hover v-slot="{ hover }">
                <v-img
                  contain
                  :src="
                    (domain ? domain : '') +
                    '/images/animals_blue.png'
                  "
                  :lazy-src="
                    (domain ? domain : '') +
                    '/images/animals_blue.png'
                  "
                  class="w-100 mx-auto"
                  max-height="220"
                >
                  <v-fade-transition>
                    <div
                      v-if="hover"
                      class="w-50 mx-auto transition-fast-in-fast-out white v-card--reveal display-3 white--text rounded"
                    >
                      <FormulateInput
                        label-is-valid-class="my-valid-class"
                        type="image"
                        height="150"
                        width="150"
                        class="input_field text-dark overflow-auto"
                        :uploader="uploadFile"
                        v-hover="file_selected('file_1')"
                        name="file_1"
                        color="primary"
                        :label="name + (name ? '\'s' : '') + ' Profile Image 1'"
                        help="Select a png, jpg or gif to upload."
                        validation="required|mime:image/jpeg,image/png,image/gif"
                      />
                    </div>
                  </v-fade-transition>
                </v-img>
              </v-hover>

              <v-divider></v-divider>

              <FormulateInput
                class="input_field w-75"
                name="name"
                type="text"
                label="Animal Name"
                placeholder="Name"
                validation="required"
                v-model="name"
                label-is-valid-class="my-valid-class"
              />
              <v-divider></v-divider>
              <FormulateInput
                :label="'What kind of animal ' + (name ? 'is ' + name : '')"
                type="select"
                class="input_field w-75 mb-3"
                name="animal_type"
                validation="required"
                :options="animal_options"
              />
            </v-carousel-item>

            <v-carousel-item class="carousel_item justify-content-center w-100">
              <div class="caption">click image to upload photo</div>

              <v-hover v-slot="{ hover }">
                <v-img
                  contain
                  :lazy-src="
                    (domain ? domain : '') +
                    '/images/animals_purple.png'
                  "
                  :src="
                    (domain ? domain : '') +
                    '/images/animals_purple.png'
                  "
                  class="w-100 mx-auto"
                  max-height="220"
                >
                  <v-fade-transition>
                    <div
                      v-if="hover"
                      class="w-50 mx-auto transition-fast-in-fast-out white v-card--reveal display-3 white--text rounded"
                    >
                      <FormulateInput
                        label-is-valid-class="my-valid-class"
                        type="image"
                        height="150"
                        width="150"
                        class="input_field text-dark overflow-auto"
                        :uploader="uploadFile"
                        v-hover="file_selected('file_2')"
                        name="file_2"
                        color="primary"
                        :label="name + (name ? '\'s' : '') + ' Profile Image 2'"
                        help="Select a png, jpg or gif to upload."
                        validation="required|mime:image/jpeg,image/png,image/gif"
                      />
                    </div>
                  </v-fade-transition>
                </v-img>
              </v-hover>
              <v-divider></v-divider>

              <FormulateInput
                type="group"
                name="age_group"
                class="input_field w-75 mx-auto p-3 m-3"
              >
                <div class="row">
                  <FormulateInput
                    type="number"
                    :label="name + (name ? '\'s' : '') + ' Age'"
                    name="age"
                    class="m-3 col-6"
                    v-model="age"
                    :placeholder="name + (name ? '\'s' : '') + ' age'"
                    validation="required|number|between:0,100"
                    min="0"
                    max="100"
                  />
                  <FormulateInput
                    label="Format"
                    type="select"
                    class="input_field col-4"
                    v-model="age_type"
                    name="age_type"
                    validation="required"
                    :options="[
                      age <= 1 ? 'day' : 'days',
                      age <= 1 ? 'month' : 'months',
                      age >= 2 ? 'years' : 'year',
                    ]"
                  />
                </div>
              </FormulateInput>
              <div class="row">
                <FormulateInput
                  class="d-inline-block w-50 mx-auto p-2 mt-3 text-center"
                  name="gender"
                  :placeholder="
                    'Select ' + name + (name ? '\'s' : '') + ' Gender'
                  "
                  :options="{
                    Boy: 'Boy',
                    Girl: 'Girl',
                    Unsure: 'Unsure',
                  }"
                  type="radio"
                  validation="required"
                  :label="name + (name ? '\'s' : '') + ' Gender'"
                  label-is-valid-class="my-valid-class"
                />
              </div>
            </v-carousel-item>
            <v-carousel-item class="carousel_item justify-content-center w-100">
              <div class="caption">click image to upload photo</div>

              <v-hover v-slot="{ hover }">
                <v-img
                  contain
                  :lazy-src="
                    (domain ? domain : '') +
                    '/images/animals_grey.png'
                  "
                  :src="
                    (domain ? domain : '') +
                    '/images/animals_grey.png'
                  "
                  class="w-100 mx-auto"
                  max-height="220"
                >
                  <v-fade-transition>
                    <div
                      v-if="hover"
                      class="w-50 mx-auto transition-fast-in-fast-out white v-card--reveal display-3 white--text rounded"
                    >
                      <FormulateInput
                        label-is-valid-class="my-valid-class"
                        type="image"
                        height="150"
                        width="150"
                        class="input_field text-dark overflow-auto"
                        :uploader="uploadFile"
                        v-hover="file_selected('file_3')"
                        name="file_3"
                        color="primary"
                        :label="name + (name ? '\'s' : '') + ' Profile Image 3'"
                        help="Select a png, jpg or gif to upload."
                        validation="required|mime:image/jpeg,image/png,image/gif"
                      />
                    </div>
                  </v-fade-transition>
                </v-img>
              </v-hover>
              <v-divider></v-divider>
              <FormulateInput
                type="select"
                name="breed"
                class="input_field w-75 mb-3"
                validation="required"
                :options="breed_options"
                :placeholder="'Select ' + name + (name ? '\'s' : '') + ' breed'"
                :label="name + (name ? '\'s' : '') + ' Breed'"
                label-is-valid-class="my-valid-class"
              />
              <FormulateInput
                type="select"
                name="size"
                class="input_field w-75"
                validation="required"
                :options="size_options"
                :placeholder="'Select ' + name + (name ? '\'s' : '') + ' size'"
                :label="name + (name ? '\'s' : '') + ' Size'"
                label-is-valid-class="my-valid-class"
              />
            </v-carousel-item>
            <v-carousel-item class="carousel_item justify-content-center w-100">
              <div class="caption">click image to upload photo</div>

              <v-hover v-slot="{ hover }">
                <v-img
                  contain
                  :lazy-src="
                    (domain ? domain : '') +
                    '/images/animals_green.png'
                  "
                  :src="
                    (domain ? domain : '') +
                    '/images/animals_green.png'
                  "
                  class="w-100 mx-auto"
                  max-height="220"
                >
                  <v-fade-transition>
                    <div
                      v-if="hover"
                      class="w-50 mx-auto transition-fast-in-fast-out white v-card--reveal display-3 white--text rounded"
                    >
                      <FormulateInput
                        label-is-valid-class="my-valid-class"
                        type="image"
                        height="150"
                        width="150"
                        class="input_field text-dark overflow-auto"
                        :uploader="uploadFile"
                        :v-hover="file_selected('file_4')"
                        name="file_4"
                        color="primary"
                        :label="name + (name ? '\'s' : '') + ' Profile Image 4'"
                        help="Select a png, jpg or gif to upload."
                        validation="required|mime:image/jpeg,image/png,image/gif"
                      />
                    </div>
                  </v-fade-transition>
                </v-img>
              </v-hover>
              <v-spacer></v-spacer>

              <FormulateInput
                name="about"
                class="input_field w-100 mt-3"
                type="textarea"
                :label="
                  'Tell us a little about ' +
                  (this.name ? this.name : 'your Animal')
                "
                v-model="textarea"
                validation="required|max:1000,length"
                :help="`Keep it under 1000 characters. ${
                  1000 - textarea.length
                } left.`"
                label-is-valid-class="my-valid-class"
              />
            </v-carousel-item>
            <template v-slot:prev="{ on, attrs }">
              <v-btn icon color="primary" v-bind="attrs" v-on="on">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </template>
            <template v-slot:next="{ on, attrs }">
              <v-btn icon color="primary" v-bind="attrs" v-on="on">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </template>
          </v-carousel>

          <div class="row center">
            <div class="col-4 text-center">
              <div></div>
            </div>

            <div v-if="carousel_current == 3" class="col-4 text-center">
              <div>
                <v-btn class="ma-2" color="primary" rounded type="submit"
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
        <div class="text-center shadow">
          <v-snackbar v-model="snackbar" :timeout="timeout" class="alert">
            <h2>{{ alert }}</h2>
          </v-snackbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "animal_form",
  middleware: "auth",
  props: {
    selected_id: {
      Type: String,
      default: null,
    },
  },
  watch: {
    selected_id: function (newVal, oldVal) {
      // watch it
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
    },
  },
  beforeDestroy() {
    this.$formulate.reset("animal");
  },
  components: {},
  data() {
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
      inputErrors: null,
    };
  },
  watch: {
    carousel_current: function () {
      console.log("carousel_current: " + this.carousel_current);
    },
  },
  computed: mapGetters({
    user: "auth/user",
    domain: "auth/domain",
  }),

  mounted() {
    if (this.selected_id) {
      this.id = this.selected_id;
      this.update = true;
      console.log("id: " + this.id);
      console.log("selected_id: " + this.selected_id);
    } else {
      this.initAnimal();
    }
    this.breed_options = ["Pure Breed", "Local Breed", "Chunks"];
    this.size_options = [
      "extra-small",
      "small",
      "medium",
      "large",
      "extra-large",
    ];
    this.animal_options = [
      "Dog",
      "Cat",
      "Bird",
      "Rabbit",
      "Hamster",
      "Fish",
      "lizard",
      "frog",
      "Insect",
    ];
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     this.curr_position = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     };
    //   });
    // }
  },
  methods: {
    getAnimal(id) {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();

      var config = {
        method: "get",
        url: (this.domain ? this.domain : "") + "/animal?id=" + id,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async initAnimal() {
      console.log("initAnimal");

      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();

      var config = {
        method: "get",
        url:
          (this.domain ? this.domain : "") +
          "/animal/create?user_id=" +
          this.user.id,
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if (response.data.status === "success") {
            this.$emit("refresh_animals");

            this.id = response.data.animal.id;
            this.name = response.data.animal.name;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    file_selected(file_number) {
      console.log(file_number);
      this.file_number = file_number;
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    async uploadFile(file, progress, error, option) {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      // var encoded_file = await this.toBase64(file);
      data.append("file", file);
      data.append("id", this.id);
      data.append("file_number", this.file_number);
      data.append("user_id", this.user.id);
      data.append("name", this.name);

      var config = {
        method: "post",
        url: (this.domain ? this.domain : "") + "/store_animal_image",
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if (response.data.status === "success") {
            this.$swal.fire("Success!", "Profile image saved!", "success");
          } else {
            this.$swal.fire(
              "Opps!",
              "Network error, please try again later",
              "error"
            );
          }
        })
        .catch(function (error) {
          this.$swal.fire(
            "Opps!",
            "Network error, please try again later",
            "error"
          );
        });
    },

    success_response(response) {
      this.$emit("refresh_animals");
      this.$swal.fire("Success!", response.msg, "success");
    },
    fail_response(response) {
      this.$swal.fire("Error", response.msg, "error");
    },

    submitHandler(data) {
      //   alert(`Thank you, ${data}`);
      console.log("Form data: " + data);
      console.log("age: " + data.age_group.age);
      var axios = require("axios");
      var FormData = require("form-data");
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
      let method = "post";
      if (this.update) {
        // method = "patch";
      }
      var config = {
        method: method,
        url: (this.domain ? this.domain : "") + "/animal",
        data: params,
      };

      axios(config)
        .then((response) => {
          console.log("Form response: " + response.data);
          if (response.data.status === "success") {
            this.success_response(response.data);
          } else {
            this.fail_response(response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
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
  background: #1976d2 !important;
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
  height: 175px;
}

.formulate-input:hover {
  border: 1px solid rgba(29, 141, 172, 0.7);
  border-radius: 0.5vh;
}
#formulate--form-6_first_label {
  color: rgba(29, 141, 172, 0.7) !important;
}
#formulate--form-6_second_label {
  color: rgba(172, 29, 113, 0.7) !important;
}
#formulate--form-6_third_label {
  color: rgba(141, 172, 29, 0.705) !important;
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
  color: #1976d2 !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif !important;
}

.my-valid-class {
  color: green !important;
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
