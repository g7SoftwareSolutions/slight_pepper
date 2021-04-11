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
      <div class="row">
        <div class="col-1 col-lg-3">
          <v-btn
            v-if="this.vendors != this.all_vendors"
            class="m-auto mt-2 d-none d-lg-block"
            outlined
            large
            color="red lighten-2  "
            @click="filter_name('reset')"
          >
            <v-icon color="red lighten-2  ">mdi-food-fork-drink</v-icon>
            <span class="m-2"> All Vendors</span>
          </v-btn>
        </div>

        <div class="col-10 col-lg-8">
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
      <div class="row w-100">
        <div class="col mx-auto">
          <v-btn
            v-if="this.vendors != this.all_vendors"
            class="m-auto mt-2 d-md-none"
            outlined
            large
            color="red lighten-2 "
            @click="filter_name('reset')"
          >
            <v-icon color="red lighten-2  ">mdi-food-fork-drink</v-icon>
            All Vendors
          </v-btn>
        </div>
      </div>

      <v-spacer height="200px"></v-spacer>

      <v-container contain fluid justify-center class="mt-5 w-100">
        <v-row dense v-if="this.vendors.length > 0">
          <v-col
            v-for="vendor in this.vendors"
            :key="vendor.id"
            class="my-3 mx-auto"
          >
            <VendorCard
              @click="update(vendor.id)"
              v-bind:vendor="vendor"
            ></VendorCard>
          </v-col>
        </v-row>
        <v-alert v-else outlined type="warning" prominent border="bottom">
          Sorry I cant find any available vendors right now
        </v-alert>
      </v-container>
            <v-spacer class="m-5 w-100" style="height: 5vh"></v-spacer>

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VendorCard from "~/components/VendorCard";

export default {
  layout: "basic",
  components: {
    VendorCard,
  },
  mounted() {
    this.getAllVendors();
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
    filter_name(name) {
      this.vendors = this.all_vendors;
      this.vendors = this.vendors.filter((item) => {
        if (item.name != null) {
          return item.name.toLowerCase().includes(name.toLowerCase());
        }
      });
    },
    getAllVendors() {
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


