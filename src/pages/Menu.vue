<template>
  <Main>
    <div class="main-menu-container">
      <section class="header-photo-container">
        <div class="menu-header-wrapper">
          <div class="flex-center-content">
            <h2>Menu</h2>
            <p class="dessert-info">{{this.dessert}}</p>
          </div>
          <Header v-if="$mq !== 'mobile'" />
        </div>
        <div class="food-pics">
          <g-image src="../assets/island_jo_fruit.jpg"></g-image>
          <g-image src="../assets/coffee_bagel.jpg"></g-image>
          <g-image src="../assets/three_bagels.jpg"></g-image>
          <g-image src="../assets/drink_croissant.jpg"></g-image>
        </div>
      </section>
      <section class="menu-category-containers">
        <div
          v-for="(value, name) in this.groupedMenu"
          v-bind:key="name"
          v-bind:class="isMobile"
          class
        >
          <input v-if="$mq === 'mobile'" :id="name" class="toggle" type="checkbox" />
          <label :for="name" class="lbl-toggle">{{name | capitalize }}</label>
          <div class="collapsible-content">
            <div class="content-inner">
              <SubMenu :menuCategory="name" :itemDetails="value" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Main>
</template>

<static-query>
  query Menu {
    allMenu {
      edges {
        node {
            category
            item
            description
            price
            cup
            bowl
            id
            half
        }
      }
    }
  }
</static-query>

<script>
import MenuHeadings from "../menu_headings";
const { groupBy } = require("lodash");
const { orderBy } = require("lodash");

import Header from "../components/Header";
import SubMenu from "../components/SubMenu";
export default {
  components: {
    Header,
    SubMenu
  },
  data: {
    groupedMenu: {},
    dessert: ""
  },
  computed: {
    isMobile() {
      return this.$mq === "mobile" ? "menu-category-collapsible" : "";
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  created() {
    let allMenu = this.$static.allMenu.edges;
    allMenu = allMenu.map(elem => {
      return elem.node;
    });
    allMenu = orderBy(allMenu, ["category"]);
    this.groupedMenu = groupBy(allMenu, "category");
    this.dessert = MenuHeadings.DESSERTS;
  }
};
</script>

<style lang="scss" scoped>
.main-menu-container {
  @media only screen and (max-width: $mobile-breakpoint) {
    padding: $main-container-padding-mobile;
  }
  padding: $main-container-padding;
  min-height: $main-container-min-height;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: $tablet-min-breakpoint) {
    margin-top: $desktop-nav-height;
  }
  h2 {
    @media only screen and (max-width: $mobile-breakpoint) {
      margin: 20px 0px;
      text-align: center;
    }
  }
}

.dessert-info {
  font-weight: bold;
  text-align: center;
  margin: 0px 0px 20px 0px;
  @media only screen and (max-width: $mobile-breakpoint) {
    font-size: 18px;
  }
  @media only screen and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
    font-size: 20px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    font-size: 22px;
  }
  @media only screen and (min-width: $desktop-min-breakpoint) {
    font-size: 24px;
  }
}

.header-photo-container {
  width: 100%;
  .menu-header-wrapper {
    @media only screen and (min-width: $tablet-min-breakpoint) {
      width: 100%;
      display: grid;
      grid-template-columns: 60% 40%;
      align-items: center;
      justify-items: center;
    }
  }
  .food-pics {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    grid-gap: 10px;
    margin-bottom: 20px;
    img {
      border-radius: 10px;
      @media only screen and (max-width: $small-mobile-breakpoint) {
        width: 55px;
        height: 55px;
      }
      @media only screen and (min-width: $mobile-min-breakpoint) and (max-width: $mobile-breakpoint) {
        width: 70px;
        height: 70px;
      }
      @media only screen and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
        width: 150px;
        height: 150px;
      }
      @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
        width: 200px;
        height: 200px;
      }
      @media only screen and (min-width: $desktop-min-breakpoint) {
        width: 275px;
        height: 275px;
      }
    }
  }
}

.menu-category-containers {
  display: grid;
  grid-gap: 12px;
  @media only screen and (min-width: $tablet-min-breakpoint) {
    grid-template-columns: 50% 50%;
    div:nth-child(7) {
      grid-row: 1 / 6;
    }
  }
}

.menu-category-collapsible {
  display: grid;
  grid-gap: 10px;
  width: 85vw;
}

input[type="checkbox"] {
  display: none;
}

.lbl-toggle {
  display: block;
  padding: 1rem;
  color: white;
  background: $island-jo-teal;
  cursor: pointer;
  transition: all 0.25s ease-out;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  @media only screen and (max-width: $mobile-breakpoint) {
    border-radius: 7px;
  }
  @media only screen and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
    font-size: 25px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    font-size: 30px;
  }
  @media only screen and (min-width: $desktop-min-breakpoint) {
    font-size: 35px;
  }
}

.lbl-toggle:hover {
  color: white;
}

.lbl-toggle::before {
  content: " ";
  display: inline-block;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;

  vertical-align: middle;
  margin-right: 0.7rem;
  transform: translateY(-2px);

  transition: transform 0.2s ease-out;
}

.collapsible-content .content-inner {
  background: rgba(250, 224, 66, 0.2);
  border-bottom: 1px solid rgba(250, 224, 66, 0.45);

  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 0.5rem 1rem;

  margin-bottom: 10px;
}

.collapsible-content {
  @media only screen and (max-width: $mobile-breakpoint) {
    overflow-y: scroll;
    max-height: 0px;
    -webkit-overflow-scrolling: touch;
    transition: max-height 0.25s ease-in-out;
  }
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 350px;
  @media only screen and (max-width: $mobile-breakpoint) {
    transform: translateY(-10px);
  }
}

.toggle:checked + .lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.toggle:checked + .lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>