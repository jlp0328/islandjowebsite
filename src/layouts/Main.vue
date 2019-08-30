<template>
  <div>
    <Nav />
    <Header v-if="$mq === 'mobile'" />
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
}
</style>