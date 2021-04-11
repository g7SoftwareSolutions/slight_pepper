<template>
  <div>
    <v-dialog
      v-model="dialog"
      max-width="900"
      transition="dialog-bottom-transition"
      class="col-lg-6 col-md-8 col-sm-10"
    >
      <v-card class="justify-content-center p-3">
        <v-card-actions>
          <div class="row justify-content-center">
            <v-btn class="mx-auto" text @click="dialog = false">Close</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="text-center">
      <div class="row my-1">
        <div class="col-1 col-lg-3">
          <v-btn
            v-if="this.vendors != this.all_vendors"
            class="m-auto mt-2 d-none d-lg-block"
            outlined
            large
            color="red lighten-2  "
            @click="filter_name()"
          >
            <v-icon color="red lighten-2  ">mdi-food-fork-drink</v-icon>
            <span class="m-2"> All Vendors</span>
          </v-btn>
        </div>

        <div class="col-10 col-lg-6">
          <v-text-field
            class="m-auto w-100"
            v-model="search"
            outlined
            clearable
          >
            <template v-slot:label>
              <div class="w-100">
                <div class="mx-auto">
                  <v-icon class="m-auto">mdi-magnify</v-icon>
                  Find ah <strong>doubles vendor</strong>
                  <v-icon color="" class="float-right my-auto mx-2">
                    mdi-food-fork-drink
                  </v-icon>
                </div>
              </div>
            </template>
          </v-text-field>
        </div>
        <div class="col-1 col-lg-3"></div>
      </div>
      <div class="row w-100 my-1">
        <div class="col mx-auto">
          <v-btn
            v-if="this.vendors != this.all_vendors"
            class="m-auto mt-2 d-md-none"
            outlined
            large
            color="red lighten-2 "
            @click="filter_name()"
          >
            <v-icon color="red lighten-2  ">mdi-food-fork-drink</v-icon>
            All Vendors
          </v-btn>
        </div>
      </div>
      <div class="row w-100 my-1">
        <GmapMap
          :center="pos"
          :zoom="10"
          map-type-id="roadmap"
          class="my-auto"
          style="height: 85vh; width: inherit"
        >
          <span v-for="vendor in this.vendors" :key="vendor.id">
            <GmapMarker
              :key="vendor.id"
              :position="JSON.parse(vendor.location)"
              :clickable="true"
              icon="images/doubles_icon.png"
              :draggable="true"
              @click="this.clickMarker(vendor.id)"
          /></span>
        </GmapMap>
      </div>
      <v-spacer class="m-5 w-100" style="height: 5vh"></v-spacer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  layout: "basic",
  components: {},
  mounted() {
    this.getVendors();
  },
  metaInfo() {
    return { title: this.$t("home") };
  },

  data: () => ({
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
    curr_position: { lat: 10.536421, lng: -61.311951 },
    pos: { lat: 10.536421, lng: -61.311951 },
  }),
  watch: {
    search: function (val) {
      console.log(val);
      this.filter_name(val);
    },
  },
  computed: mapGetters({
    authenticated: "auth/check",
    domain: "auth/domain",
  }),
  methods: {
    filter_name(name = "") {
      this.vendors = this.all_vendors;
      this.vendors = this.vendors.filter((item) => {
        if (item.name != null) {
          return item.name.toLowerCase().includes(name.toLowerCase());
        }
      });
    },

    getVendor() {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();

      var config = {
        method: "get",
        url: (this.domain ? this.domain : "") + "/users/",
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.vendors = response.data;
          this.all_vendors = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getVendors() {
      var axios = require("axios");
      var FormData = require("form-data");
      var data = new FormData();

      var config = {
        method: "get",
        url: (this.domain ? this.domain : "") + "/users/",
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.vendors = response.data;
          this.all_vendors = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

