<template>
  <div class="ij-banner-container">
    <img alt="Island Jo logo" src="../assets/IslandJo-Logo-Final.svg" />
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style lang="scss" scoped>
.ij-banner-container {
  @media only screen and (max-width: $mobile-breakpoint) {
    display: flex;
    justify-content: flex-end;
    padding: 10px 25px;
    position: relative;
    min-height: 175px;
    margin: unset;
  }
}

img {
  width: 300px;
  @media only screen and (max-width: $mobile-breakpoint) {
    position: absolute;
    width: 245px;
    top: 0;
  }
}
</style>