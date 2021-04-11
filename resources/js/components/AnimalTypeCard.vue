<template>
  <v-card
    elevation="4"
    shaped
    outlined
    @click="$emit('card_clicked')"
    :max-height="card_height - 150"
    :max-width="card_width - 50"
    min-height="75"
    min-width="75"
    class="m-3"
  >
    
  </v-card>
</template>

<script>
export default {
  data: () => ({
    search_icon_xy: 80,
  }),
  name: "Card",
  props: {
    title: { type: String, default: "Title" },
    image: { type: String, default: "#" },
    hover_image: {
      type: String,
      default: "https://img.icons8.com/dusk/264/000000/search--v1.png",
    },
    card_height: { type: Number, default: 350 },
    card_width: { type: Number, default: 250 },
  },
};
</script>
