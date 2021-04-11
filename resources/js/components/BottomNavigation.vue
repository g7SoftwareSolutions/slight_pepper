<template>
  <v-bottom-navigation class="justify-content-center" dense app fixed>
    <div class="container d-sm-block d-none"></div>
    <v-spacer></v-spacer>

    <v-btn value="b" @click="update('/')">
      <span>Vendors</span>
      <v-icon color="primary ">mdi-food-fork-drink</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn value="c" @click="update('/map')">
      <span>Map</span>
      <v-icon color="primary  ">mdi-earth </v-icon>
    </v-btn>
    <v-spacer></v-spacer>

    <div class="container w-100 d-sm-block d-none"></div>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Card",

  methods: {
    update(url) {
      this.$router.push(url);
    },
  },
};
</script>
