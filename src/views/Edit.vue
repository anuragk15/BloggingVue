<template>
  <div class="home">
    <router-link to="/add">
      <div class="text-center">
        <div class="btn btn-primary">Add article</div>
      </div>
    </router-link>
    <br />
    <div v-if="blogs.length > 0">
      <div class="container">
        <div class="row">
          <div v-for="(blog, i) in blogs" :key="blog.title">
            <blogsBox
              :title="blog.title"
              :content="blog.content"
              :edit="true"
              :imageUrl="blog.imageUrl"
              :id="i"
            ></blogsBox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogsBox from "../components/blogsBox";
export default {
  created() {
    this.blogs = this.$store.getters.blogsArray;
  },
  components: {
    blogsBox
  },
  data() {
    return {
      imageLink: require("@/assets/background_home.jpg"),
      blogs: [],
      heading_text: ""
    };
  }
};
</script>

<style>
.container {
  /* ... */
  justify-items: center;
}
h1 {
  height: 300px;
}
</style>
