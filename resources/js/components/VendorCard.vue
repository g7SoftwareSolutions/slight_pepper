<template>
  <v-card
    @click="$emit('update')"
    :max-height="card_height"
    :max-width="card_width"
    :min-height="card_height - 150"
    :min-width="card_width - 100"
    class="mx-auto w-100"
  >
    <v-carousel
      cycle
      :height="card_height - 100"
      :width="card_width"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item light v-for="(slide, i) in this.images" :key="i">
        <v-img
          :height="card_height - 150"
          :width="card_width"
          :src="slide"
          :lazy-src="slide"
          class="white--text mx-auto"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
    <v-card-subtitle class="mx-auto text-left">
      {{ vendor.phone == null ? "phone" : vendor.phone }}</v-card-subtitle
    >
    <div class="row w-100 mx-auto">
      <v-card-title class="col-8 text-center mx-auto">
        {{ vendor.name == null ? "Vendor Name" : vendor.name }}</v-card-title
      >
      <v-card-subtitle height="inherit" class="mx-auto col-4 text-center">
        {{
          vendor.created_at == null
            ? "created_at"
            : new Date(vendor.created_at).toDateString()
        }}</v-card-subtitle
      >
    </div>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon @click="$emit('delete')" color="teal"
          >mdi-information-outline</v-icon
        >
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon large>
        <v-icon color="purple">mdi-bookmark</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="green">mdi-share</v-icon>
      </v-btn> -->
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    card_height: 450,
    card_width: 350,
    images: null,
  }),
  props: {
    vendor: { type: Object, default: {} },
  },
  computed: mapGetters({
    domain: "auth/domain",
  }),
  mounted() {
    this.images = JSON.parse(this.vendor.images);
  },
};
</script>
