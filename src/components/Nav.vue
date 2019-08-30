<template>
  <div>
    <div v-if="$mq !== 'mobile'" class="ij--nav-bar-main">
      <g-link class to="/">About</g-link>
      <g-link class to="/menu">Menu</g-link>
      <g-link class to="/contact">Contact & Location</g-link>
    </div>
    <div v-if="$mq === 'mobile'" class="phone-menu">
      <ClientOnly>
        <Slide noOverlay>
          <g-link class to="/">About</g-link>
          <g-link class to="/menu">Menu</g-link>
          <g-link class to="/contact">Contact & Location</g-link>
        </Slide>
      </ClientOnly>
    </div>
  </div>
</template>

<script>
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
  height: $nav-height;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

a:-webkit-any-link {
  font-size: 24px;
  color: white;
  text-decoration: none;
}
</style>