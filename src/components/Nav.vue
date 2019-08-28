<template>
  <div>
    <div class="ij--nav-bar-main">
      <h3>About</h3>
      <h3>Menu</h3>
      <h3>Contact & Location</h3>
    </div>
    <div class="phone-menu">
      <ClientOnly>
        <Slide noOverlay>
          <h3>About</h3>
          <h3>Menu</h3>
          <h3>Contact & Location</h3>
        </Slide>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
// import { Slide } from "vue-burger-menu";
export default {
  name: "NavBar",
  components: {
    Slide: () =>
      import("vue-burger-menu")
        .then(m => m.Slide)
        .catch()
  },
  data: () => ({
    menuVisible: false
  }),
  methods: {}
};
</script>

<style lang="scss" scoped>
.ij--nav-bar-main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #e24665;
  color: white;
}
</style>