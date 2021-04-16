<template>
  <div class="">
    <v-dialog
      v-model="dialog"
      max-width="900"
      transition="dialog-bottom-transition"
      class="col-lg-6 col-md-8 col-sm-10"
    >
      <v-card>
        <FormulateInput
          label-is-valid-class="my-valid-class"
          type="image"
          height="150"
          width="150"
          class="input_field text-dark overflow-auto"
          :uploader="uploadFile"
          name="file"
          color="primary"
          :label="this.user.name + (this.user.name ? '\'s' : '') + ' Images'"
          help="Select a png, jpg or gif to upload."
          validation="required|mime:image/jpeg,image/png,image/gif"
        />
        <v-card-actions>
          <div class="row justify-content-center">
            <v-btn class="mx-auto" text @click="dialog = false">Close</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card class="mx-auto w-100">
      <v-card-title class="mx-auto text-primary heading">
        Manage Your Profile</v-card-title
      >
      <v-btn
       filled
       @click="add_new()"
      color="primary"
      class="m-3"
    >
      Add Image
    </v-btn>


      <v-container fluid justify-center>
        <v-alert outlined type="warning" prominent border="bottom">
          You have not added any images yet
        </v-alert>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  watch: {

  },
  data: () => ({
    reveal: false,
    selected_id: null,
     card_height: 350,
    dialog: false,
    card_width: 250,
  }),
  computed: mapGetters({
    user: "auth/user",
    domain: "auth/domain",
  }),
  created() {
   },

  methods: {
    async uploadFile(file, progress, error, option) {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();
      // var encoded_file = await this.toBase64(file);
      let file_number =
        parseInt(
          this.user.images == null ? 0 : Object.keys(this.user.images).length
        ) + 1;
      data.append("file", file);
      data.append("file_number", file_number);
      data.append("user_id", this.user.id);

      var config = {
        method: "post",
        url: (this.domain ? this.domain : "") + "/api/store_user_image",
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
        .catch((error) => {
          this.$swal.fire(
            "Opps!",
            "Network error, please try again later",
            "error"
          );
        });
    },

    delete_image(id) {
      var axios = require("axios");

      var config = {
        method: "delete",
        url:
          (this.domain ? this.domain : "") +
          "/users?id=" +
          this.user.id +
          "/" +
          id,
        headers: {},
      };

      axios(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          if (response.data.status === "success") {
            this.get_vendors();
            this.$swal.fire("Success!", "Your image was deleted!", "success");
          } else {
            this.$swal.fire(
              "Opps!",
              "Network error, please try again later",
              "error"
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    add_new() {
      this.dialog = true;
    },
    update(id) {
      console.log("clicked update");
      this.selected_id = id;
      this.dialog = true;
    },
    file_selected(file_number) {
      console.log(file_number);
      this.file_number = file_number;
    },
  },
};
</script>
