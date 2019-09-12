<template>
  <Main>
    <div class="flex-center-content main-menu-container">
      <section>
        <h2 v-if="$mq === 'mobile'">Gallery</h2>
        <Header v-if="$mq !== 'mobile'" />
      </section>
      <section class="photos-wrapper">
        <div v-for="photo in this.photos" :key="photo.id">
          <g-image :src="photo.photo" fit="contain" quality="100" />
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

.photos-wrapper {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-gap: 20px;
  grid-template-columns: 49% 49%;
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
    width: 600px;
  }

  @media only screen and (min-width: $laptop-min-breakpoint) and (orientation: portrait) {
    width: 750px;
  }
}
</style>