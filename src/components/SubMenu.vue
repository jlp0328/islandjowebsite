<template>
  <div>
    <h3 v-if="this.heading !== ''">{{this.heading}}</h3>
    <div v-if="this.menuCategory === 'beverages'">
      <p>In addition to our coffee and espresso drinks, we offer the following beverages:</p>
      <div class="item-details-bev">
        <div v-for="details in this.itemDetails" :key="details.id">
          <p>{{details.item}}</p>
        </div>
      </div>
    </div>
    <div v-else-if="this.menuCategory === 'sandwiches'">
      <p>
        <span>&#x1f96a;</span> eligible half sandwich
      </p>
      <div v-for="details in this.itemDetails" :key="details.id">
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
  data: function() {
    return {
      heading: ""
    };
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

.sandwich-desc {
  @media only screen and (max-width: $mobile-breakpoint) {
    margin-bottom: 6px;
    margin-top: unset;
  }
}

.item-name {
  font-weight: bold;
}
</style>