<template>
  <Main>
    <div class="flex-center-content main-menu-container">
      <section class="header-grid">
        <div class="flex-center-content">
          <h2 v-if="$mq === 'mobile'">Gallery</h2>
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FIslandJoCoffeeNCafe%2Fvideos%2F903258623386164%2F&width=250&show_text=false&autoplay=true&appId=177459640055&height=250"
            style="border:none;overflow:hidden"
            scrolling="no"
            frameborder="0"
            height="250"
            width="250"
            allowtransparency="true"
            allow="encrypted-media"
            allowfullscreen="true"
          ></iframe>
        </div>
        <div class="follow-us" v-if="$mq !== 'mobile'">
          <p>
            Follow us on
            <a
              href="https://www.facebook.com/IslandJoCoffeeNCafe/"
              target="_blank"
            >Facebook</a> and
            <a href="https://www.instagram.com/islandjo_oki/" target="_blank">Instagram</a> for updates on what's brewing!
          </p>
        </div>
        <Header v-if="$mq !== 'mobile'" />
      </section>
      <section class="photos-wrapper">
        <div class="photos-div" v-for="photo in this.photos" :key="photo.id">
          <g-image class="ij-img" :src="photo.photo" quality="100" />
        </div>
      </section>
    </div>
  </Main>
</template>

<static-query>
query Photo {
    allGallery {
  edges {
    node {
      photo
    }
  }
}
}
</static-query>

<script>
import Header from "../components/Header";

export default {
  components: {
    Header
  },
  data: function() {
    return {
      photos: []
    };
  },
  created() {
    let pic = this.$static.allGallery.edges;
    this.photos = pic.map((elem, index) => {
      return {
        photo: elem.node.photo,
        id: index
      };
    });
  },
  mounted() {
    // window.addEventListener("resize", this.resizeAllGridItems);
    // this.resizeAllGridItems();
  },
  methods: {
    reSizeGridItem(item) {
      let grid = document.getElementsByClassName("photos-wrapper")[0];
      let rowHeight = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
      );
      let rowGap = parseInt(
        window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
      );
      let rowSpan = Math.ceil(
        (item.querySelector(".ij-img").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = "span " + rowSpan;
    },
    resizeAllGridItems() {
      let allItems = document.getElementsByClassName("photos-div");
      for (let x = 0; x < allItems.length; x++) {
        this.reSizeGridItem(allItems[x]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main-menu-container {
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
.header-grid {
  display: grid;
  align-items: center;
  width: 100%;
  justify-items: center;
  @media only screen and (min-width: $tablet-min-breakpoint) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 20px 0px;
  }
}

iframe {
  border-radius: 10px;
  @media only screen and (max-width: $mobile-breakpoint) {
    width: 300px;
    height: 300px;
    margin-bottom: 15px;
  }
}

.follow-us {
  text-align: center;
  word-break: wrap;
  font-weight: bold;
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
  a:-webkit-any-link {
    color: unset;
    text-decoration: none;
  }
}
.photos-wrapper {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 15px;
  //   grid-auto-rows: 20px;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 100px;
  @media only screen and (max-width: $mobile-breakpoint) {
    grid-template-columns: 100%;
    padding-bottom: 65px;
  }
}

.g-image {
  width: 300px;
  border-radius: 10px;
  height: auto;
  @media only screen and (orientation: portrait) and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
    width: 350px;
  }

  @media only screen and (orientation: landscape) and (min-width: $tablet-min-breakpoint) and (max-width: $tablet-breakpoint) {
    width: 400px;
  }

  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    width: 450px;
  }

  @media only screen and (min-width: $desktop-min-breakpoint) {
    width: 550px;
  }
}
</style>