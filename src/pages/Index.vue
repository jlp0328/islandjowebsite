<template>
  <Main>
    <About />
    <!-- <Contact />
    <Menu />-->
  </Main>
</template>

<script>
import Contact from "./Contact.vue";
import Menu from "./Menu.vue";
import About from "./About.vue";

export default {
  components: {
    About,
    Contact,
    Menu
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
