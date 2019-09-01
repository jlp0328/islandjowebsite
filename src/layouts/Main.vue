<template>
  <div>
    <Header v-if="$mq === 'mobile'" />
    <Nav />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";

export default {
  components: {
    Header,
    Footer,
    Nav
  }
};
</script>

<style lang="scss">
body {
  font-family: aleo;
  margin: unset;
  @media only screen and (max-width: $mobile-breakpoint) {
    height: calc(100vh - 60px);
  }
}
</style>