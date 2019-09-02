<template>
  <div class="footer">
    <a href="https://www.facebook.com/IslandJoCoffeeNCafe/" target="_blank" class="facebook icon"></a>
    <a href="https://www.instagram.com/islandjo_oki/" target="_blank" class="instagram icon"></a>
    <a href="https://g.page/IslandJo/review" target="_blank" class="google icon"></a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: $island-jo-pink;
  color: white;
  height: $standard-nav-height;
  @media only screen and (max-width: $mobile-breakpoint) {
    height: $mobile-nav-height;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) {
    height: $desktop-nav-height;
  }
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.icon {
  height: 40px;
  width: 40px;
  margin: 0 15px;
  filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(338deg)
    brightness(108%) contrast(100%);
  @media only screen and (max-width: $mobile-breakpoint) {
    height: 25px;
    width: 25px;
  }
}

.facebook {
  background: transparent url("../assets/facebook.svg") no-repeat;
}

.instagram {
  background: transparent url("../assets/instagram.svg") no-repeat;
}

.google {
  background: transparent url("../assets/google.svg") no-repeat;
}
</style>