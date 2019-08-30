<template>
  <div class="footer">
    <a href="https://www.facebook.com/IslandJoCoffeeNCafe/" target="_blank" class="facebook icon"></a>
    <a href="https://www.instagram.com/islandjo_oki/" target="_blank" class="instagram icon"></a>
    <a href="https://goo.gl/maps/bDvVzm8J2enWqq5X8" target="_blank" class="google icon"></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e24665;
  color: white;
  height: 60px;
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

@media only screen and (max-width: 600px) {
  .icon {
    height: 25px;
    width: 25px;
  }
}
</style>