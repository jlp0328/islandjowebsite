<template>
  <Main>
    <div class="main-menu-container">
      <h2>MENU</h2>
      <Header v-if="$mq !== 'mobile'" />
    </div>
  </Main>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
.main-menu-container {
  padding: $main-container-padding;
  min-height: $main-container-min-height;
}
</style>