<template>
  <Main>
    <div class="main-menu-container">
      <section>
        <h2 v-if="$mq === 'mobile'">MENU</h2>
        <Header v-if="$mq !== 'mobile'" />
      </section>
      <section class="menu-category-containers">
        <div
          v-for="(value, name) in this.groupedMenu"
          v-bind:key="name"
          class="menu-category-collapsible"
        >
          <input :id="name" class="toggle" type="checkbox" />
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
    allgoogleSheet {
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
    groupedMenu: {}
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  created() {
    let allMenu = this.$static.allgoogleSheet.edges;
    allMenu = allMenu.map(elem => {
      return elem.node;
    });
    allMenu = orderBy(allMenu, ["category"]);
    this.groupedMenu = groupBy(allMenu, "category");
    console.log(this.groupedMenu);
  }
};
</script>

<style lang="scss" scoped>
.main-menu-container {
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

.menu-category-containers {
  @media only screen and (min-width: $tablet-min-breakpoint) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 12px;
  }
}

.menu-category-collapsible {
  @media only screen and (max-width: $mobile-breakpoint) {
    display: grid;
    grid-gap: 10px;
    width: 85vw;
  }
}

input[type="checkbox"] {
  display: none;
}

.lbl-toggle {
  display: block;

  padding: 1rem;

  color: white;
  background: #3d908a;

  cursor: pointer;

  border-radius: 7px;
  transition: all 0.25s ease-out;
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
  max-height: 0px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  transition: max-height 0.25s ease-in-out;
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