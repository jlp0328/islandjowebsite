<template>
  <div class="main-wrapper">
    <section class="welcome-icon-wrapper">
      <div class="welcome-only">
        <h1>Welcome to Island Jo</h1>
        <h2>Oak Island, NC</h2>
      </div>
      <Header v-if="$mq !== 'mobile'" />
    </section>
    <section class="restaurant-summary">
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
  margin-top: $standard-nav-height;
  @media only screen and (max-width: $mobile-breakpoint) {
    margin-top: unset;
  }
  @media only screen and (min-width: $desktop-min-breakpoint) {
    margin-top: $desktop-nav-height;
  }
}

.welcome-icon-wrapper {
  @media only screen and (min-width: $mobile-breakpoint) {
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
  }
}

.welcome-only {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: $mobile-breakpoint) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
}

.restaurant-summary {
  @media only screen and (min-width: $tablet-min-breakpoint) and (max-width: $laptop-breakpoint) {
    font-size: 28px;
    padding: 0 40px;
  }
  @media only screen and (min-width: $desktop-min-breakpoint) {
    font-size: 32px;
    padding: 0 40px;
  }
}

.image-wrapper {
  display: flex;
  justify-content: center;
  img {
    @media only screen and (max-width: $mobile-breakpoint) {
      width: 300px;
      height: 300px;
    }
    @media only screen and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
      width: 600px;
      height: 600px;
    }
    @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
      width: 900px;
      height: 900px;
    }
    @media only screen and (min-width: $desktop-min-breakpoint) {
      width: 1000px;
      height: 1000px;
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
