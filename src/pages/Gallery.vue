<template>
  <div>
    <div v-for="photo in this.photos" :key="photo.id">
      <g-image :src="photo.url" width="photo.dimensions.width" />
    </div>
  </div>
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
export default {
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
.g-image {
  width: 200px;
  height: auto;
}
</style>