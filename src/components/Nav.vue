<template>
  <div>
    <div v-if="$mq !== 'mobile'" class="ij--nav-bar-main">
      <g-link to="/">Home</g-link>
      <g-link class="sub-page" to="/menu">Menu</g-link>
      <g-link class="sub-page" to="/gallery">Gallery</g-link>
      <g-link class="sub-page" to="/contact">Contact</g-link>
    </div>
    <div v-if="$mq === 'mobile'" class="phone-menu">
      <ClientOnly>
        <Slide noOverlay>
          <g-link class to="/">Home</g-link>
          <g-link class to="/menu">Menu</g-link>
          <g-link class to="/gallery">Gallery</g-link>
          <g-link class to="/contact">Contact</g-link>
          <div class="restaurant-details">
            <h3>Open Daily, 8am - 2pm</h3>
            <h3>
              <a href="tel:1-910-250-1677">(910) 250 - 1677</a>
            </h3>
          </div>
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
  grid-template-columns: repeat(4, 1fr);
  background: $island-jo-pink;
  color: white;
  height: $standard-nav-height;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: white !important;
    text-decoration: none;
    @media only screen and (min-width: $laptop-min-breakpoint) {
      font-size: 32px;
    }
  }
  @media only screen and (min-width: $laptop-breakpoint) {
    height: $desktop-nav-height;
  }
}

.phone-menu {
  a {
    color: white;
    text-decoration: none;
  }
}

a:-webkit-any-link,
a:-moz-any-link,
a:any-link {
  font-size: 24px;
  color: white;
  text-decoration: none;
  @media only screen and (min-width: $laptop-min-breakpoint) {
    font-size: 32px;
  }
}

.restaurant-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65px;
  margin: 20px 10px;
  h3,
  h3 a:-webkit-any-link {
    @media only screen and (max-width: $mobile-breakpoint) {
      font-size: 18px;
      color: whitesmoke;
      margin: unset;
    }
  }
}
</style>