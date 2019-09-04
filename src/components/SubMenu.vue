<template>
  <div>
    <div
      v-if="this.menuCategory === 'bagels' || this.menuCategory === 'breakfast' || this.menuCategory === 'kids'"
    >
      <div class="item-details" v-for="details in this.itemDetails" :key="details.id">
        <p class="item-name">{{details.item}}</p>
        <p>{{details.price}}</p>
      </div>
    </div>
    <div v-else-if="this.menuCategory === 'beverages'">
      <div v-for="details in this.itemDetails" :key="details.id">
        <p>{{details.item}}</p>
      </div>
    </div>
    <div v-else-if="this.menuCategory === 'sandwiches'">
      <div v-for="details in this.itemDetails" :key="details.id">
        <p>{{details.item}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["menuCategory", "itemDetails"],
  created() {
    this.itemDetails.reverse();
    console.log(this.itemDetails);
  }
};
</script>

<style lang="scss" scoped>
.item-details {
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
  justify-items: start;
}

.item-name {
  font-weight: bold;
}
</style>