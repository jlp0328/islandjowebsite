<template>
  <Main>
    <Contact />
    <Menu />
  </Main>
</template>

<script>
import Contact from "./Contact.vue";
import Menu from "./Menu.vue";
import About from "./About.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
