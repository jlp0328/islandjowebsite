<template>
  <div>
    <h3 v-if="this.heading !== ''">{{this.heading}}</h3>
    <div class="main-item-details-wrapper" v-if="this.menuCategory === 'beverages'">
      <p>In addition to our coffee and espresso drinks, we offer the following beverages:</p>
      <div class="item-details-bev">
        <div v-for="details in this.itemDetails" :key="details.id">
          <p>{{details.item}}</p>
        </div>
      </div>
    </div>
    <div
      class="main-item-details-wrapper"
      v-else-if="this.menuCategory === 'sandwiches' || this.menuCategory === 'wraps' || this.menuCategory === 'salads'"
    >
      <p v-if="this.menuCategory === 'sandwiches'" class="half-sandwich">
        <span>&#x1f96a;</span> eligible half sandwich
      </p>
      <div class="main-item-details-wrapper" v-for="details in this.itemDetails" :key="details.id">
        <div class="item-details-main">
          <p class="item-name">
            <span v-if="details.half === 'TRUE'">&#x1f96a;</span>
            {{details.item}}
          </p>
          <p>{{details.price}}</p>
        </div>
        <p class="sandwich-desc">
          <span>{{details.description}}</span>
        </p>
      </div>
    </div>
    <div class="main-item-details-wrapper" v-else-if="this.menuCategory === 'soups'">
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
    <div class="main-item-details-wrapper" v-else>
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
  data: function() {
    return {
      heading: "",
      sandSides: ""
    };
  },
  props: ["menuCategory", "itemDetails"],
  methods: {
    determineHeading() {
      return MenuHeadings[this.menuCategory.toUpperCase()];
    }
  },
  created() {
    this.heading = this.determineHeading();
    this.sandSides = MenuHeadings.SANDWICHES_SIDES;
  }
};
</script>

<style lang="scss" scoped>
.main-item-details-wrapper {
  @media only screen and (min-width: $tablet-min-breakpoint) {
    margin: 5px;
  }
}
h3 {
  margin: 5px auto;
  text-align: center;
  @media only screen and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
    font-size: 20px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    font-size: 24px;
  }
  @media only screen and (min-width: $desktop-min-breakpoint) {
    font-size: 28px;
  }
}

p {
  @media only screen and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
    font-size: 18px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    font-size: 22px;
  }
  @media only screen and (min-width: $desktop-min-breakpoint) {
    font-size: 26px;
  }
}

.item-details-bev {
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
}

.item-details-main {
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
  justify-items: start;
}

.item-details-soup {
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

.sandwich-desc {
  margin: 0px 0px 10px 0px;
  @media only screen and (max-width: $mobile-breakpoint) {
    margin-bottom: 6px;
    margin-top: unset;
  }
}

.half-sandwich {
  @media only screen and (max-width: $mobile-breakpoint) {
    font-size: 14px;
  }
}

.item-name {
  font-weight: bold;
  margin: unset;
}
</style>