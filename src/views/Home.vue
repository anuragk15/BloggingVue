<template>
  <div class="home">
    <div v-if="blogs.length > 0">
      <div class="container">
        <div class="row">
          <div v-for="(blog, i) in blogs" :key="blog.title">
            <blogs-box
              :title="blog.title"
              :content="blog.content"
              :imageUrl="blog.imageUrl"
              :id="i"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",

  created() {
    this.$http
      .get("data.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const array = [];
        for (let i = 0; i < data["array"].length; i++) {
          var title = data["array"][i].title;
          var content = data["array"][i].content;
          var imageUrl = data["array"][i].imageUrl;
          array.push({ title: title, content: content, imageUrl: imageUrl });
        }
        console.log(array);
        var heading_text = "";
        if (array.length > 0) {
          heading_text = "You have " + array.length + " blog";
          if (array.length > 1) heading_text = heading_text + "s";
        }
        this.heading_text = heading_text;
        this.blogs = array;
        this.$store.commit("setBlogCount", { count: this.blogs.length });
        this.$store.commit("setBlogsArray", { array: this.blogs });
      });
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
