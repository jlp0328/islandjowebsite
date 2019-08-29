<template>
  <div class="ij-banner-container">
    <img alt="Island Jo logo" src="../assets/IslandJo-Logo-Final.svg" />
    <!-- <div class="ij-banner-info">
      <h1>Coffee-N-Cafe</h1>
      <h2>Oak Island, NC</h2>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.ij-banner-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.ij-banner-info {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 110px;
  right: 40px;
}

img {
  width: 300px;
}

@media only screen and (max-width: 450px) {
  h1 {
    font-size: 1.5em;
  }

  h2 {
    margin-top: 0;
    font-size: 1em;
  }

  .ij-banner-container {
    display: flex;
    justify-content: flex-end;
    padding: 10px 25px;
    position: relative;
    min-height: 175px;
  }

  img {
    width: 245px;
    position: absolute;
    top: 0;
  }
}
</style>