<template>
  <div class="main-wrapper">
    <section class="welcome-wrapper">
      <h1>Welcome to Island Jo</h1>
      <h2>Oak Island, NC</h2>
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
export default {};
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding: 10px 25px 65px 25px;
  overflow-y: scroll;
}

.welcome-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  img {
    height: auto;
    @media only screen and (max-width: 450px) {
      width: 350px;
      height: 350px;
    }
  }
}

h1,
h2 {
  @media only screen and (max-width: 450px) {
    margin: unset;
  }
}
</style>
