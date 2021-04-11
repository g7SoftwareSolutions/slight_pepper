<template>
  <div>
    <Appbar/>

    <div
      class="main-layout"
    >
    <div class="container mt-4">
      <child />

    <BottomNavigation></BottomNavigation>

     </div>
  </div>
  </div>
</template>

<script>
import Appbar from "~/components/Appbar";
import BottomNavigation from "~/components/BottomNavigation";

export default {
  name: "BasicLayout",
  components: {
    Appbar,
        BottomNavigation,

  },
};
</script>

<style lang="scss">
.basic-layout {
  height: 100vh;
  font-weight: 100;
  position: relative;

  .links > a {
    color: #636b6f;
    padding: 0 25px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
