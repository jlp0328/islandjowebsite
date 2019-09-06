<template>
  <Main>
    <div>
      <section>
        <h2 v-if="$mq === 'mobile'">GALLERY</h2>
        <Header v-if="$mq !== 'mobile'" />
      </section>
      <section class="photos-wrapper">
        <div v-for="photo in this.photos" :key="photo.id">
          <g-image :src="photo.url" width="photo.dimensions.width" />
        </div>
      </section>
    </div>
  </Main>
</template>

<static-query>
query Photos{ 
    allInstagramPhoto {
    edges {
      node {
        display_url
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
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
    let insta = this.$static.allInstagramPhoto.edges;
    this.photos = insta.map((elem, index) => {
      console.log(elem);
      return {
        url: elem.node.display_url,
        dimensions: elem.node.dimensions,
        id: index
      };
    });
    console.log(insta);
  }
};
</script>

<style lang="scss" scoped>
.photos-wrapper {
  display: grid;
  justify-items: center;
  align-items: center;
  @media only screen and (max-width: $mobile-breakpoint) {
    grid-template-columns: 100%;
    grid-gap: 12px;
  }
}
.g-image {
  width: 200px;
  height: auto;
  @media only screen and (max-width: $tablet-breakpoint) {
    width: 300px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (max-width: $laptop-breakpoint) {
    width: 500px;
  }

  @media only screen and (min-width: $desktop-min-breakpoint) {
    width: 600px;
  }

  @media only screen and (orientation: portrait) and (min-width: $tablet-min-breakpoint) {
    width: 450px;
  }
  @media only screen and (min-width: $laptop-min-breakpoint) and (orientation: portrait) {
    width: 750px;
  }
}
</style>