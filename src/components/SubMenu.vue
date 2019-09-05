<template>
  <div>
    <h3 v-if="this.heading !== ''">{{this.heading}}</h3>
    <div class="item-details-bev" v-if="this.menuCategory === 'beverages'">
      <div v-for="details in this.itemDetails" :key="details.id">
        <p>Additionally we offer the following beverages:</p>
        <p>{{details.item}}</p>
      </div>
    </div>
    <div v-else-if="this.menuCategory === 'sandwiches'">
      <div v-for="details in this.itemDetails" :key="details.id">
        <p class="item-name">{{details.item}}</p>
        <p>
          <span>{{details.description}}</span>...
          <span>{{details.price}}</span>
        </p>
      </div>
    </div>
    <div v-else-if="this.menuCategory === 'soups'">
      <div class="item-details-soup" v-for="details in this.itemDetails" :key="details.id">
        <p class="item-name">{{details.item}}</p>
        <p class="size-center">
          <span class="underline">Cup:</span>
          {{details.cup}}
        </p>
        <p class="size-center">
          <span class="underline">Bowl:</span>
          {{details.bowl}}
        </p>
      </div>
    </div>
    <div v-else>
      <div class="item-details-main" v-for="details in this.itemDetails" :key="details.id">
        <p class="item-name">{{details.item}}</p>
        <p>{{details.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuHeadings from "../menu_headings";

export default {
  date: {
    heading: ""
  },
  props: ["menuCategory", "itemDetails"],
  methods: {
    determineHeading() {
      return MenuHeadings[this.menuCategory.toUpperCase()];
    }
  },
  created() {
    // if (this.menuCategory === "bagels") {
    //   this.itemDetails.reverse();
    // }
    this.heading = this.determineHeading();
    console.log(this.itemDetails);
  }
};
</script>

<style lang="scss" scoped>
.item-details-bev {
  @media only screen and (max-width: $mobile-breakpoint) {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    justify-items: center;
  }
}
.item-details-main {
  @media only screen and (max-width: $mobile-breakpoint) {
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;
    justify-items: start;
  }
}

.item-details-soup {
  @media only screen and (max-width: $mobile-breakpoint) {
    display: grid;
    grid-template-columns: 60% 20% 20%;
    align-items: center;
    justify-items: start;
    .size-center {
      text-align: center;
      .underline {
        text-decoration: underline;
      }
    }
  }
}

.item-name {
  font-weight: bold;
}
</style>