<template>
  <div class="main-wrapper">
    <section class="welcome-icon-wrapper">
      <div class="welcome-only">
        <h1>Welcome to Island Jo</h1>
        <h2>Oak Island, NC</h2>
      </div>
      <Header v-if="$mq !== 'mobile'" />
    </section>
    <section>
      <p>
        Island Jo is a locally owned and operated coffee shop and cafe in beautiful Oak Island, NC. Our
        <g-link class to="/menu">menu</g-link>
        <span></span> has a wide variety of options including breakfast, lunch, baked goods, coffee, and more!
      </p>
    </section>
    <section class="image-wrapper">
      <img src="../assets/Island_Jo_ExtandInterior.jpg" />
    </section>
  </div>
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
.main-wrapper {
  padding: $main-container-padding;
  min-height: $main-container-min-height;
  overflow-y: scroll;
}

.welcome-icon-wrapper {
  @media only screen and (min-width: $mobile-breakpoint) {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    margin-top: 60px;
  }
}

.welcome-only {
  @media only screen and (max-width: $mobile-breakpoint) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}

.image-wrapper {
  display: flex;
  justify-content: center;
  img {
    height: auto;
    @media only screen and (max-width: $mobile-breakpoint) {
      width: 300px;
      height: 300px;
    }
  }
}

h1,
h2 {
  @media only screen and (max-width: $mobile-breakpoint) {
    margin: unset;
  }
}
</style>
