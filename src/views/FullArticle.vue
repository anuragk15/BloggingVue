<template>
  <div>
    <h1>{{ title }}</h1>
    <img :src="imageUrl" alt="Error occured while loading image" />
    <br />
    <p class="text-center">{{ content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.params.id
        ? this.$store.getters.blogsArray[this.$route.params.id].title
        : "",
      content: this.$route.params.id
        ? this.$store.getters.blogsArray[this.$route.params.id].content
        : "",
      imageUrl: this.$route.params.id
        ? this.$store.getters.blogsArray[this.$route.params.id].imageUrl
        : ""
    };
  }
};
</script>

<style scoped>
h1 {
  display: inline;
  padding: 0px;
  margin: 0px;
}
p {
  margin: 50px;
}
img {
  border-radius: 8px;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
