<template>
  <div class="text-center">
    <p>Add articles</p>
    <div class="form-group form-group-lg">
      <label for="title">Title</label>
      <input
        class="form-control input-sm"
        type="text"
        v-model="title"
        placeholder="Enter Title"
        required="true"
        id="title"
      />

      <br />
      <label for="content">Content</label>
      <textarea
        class="form-control"
        type="text"
        v-model="content"
        placeholder="Enter blog"
        required="true"
        rows="10"
        cols="80"
        id="content"
      />

      <br />
      <label for="Image">Image Link</label>
      <input
        type="url"
        class="form-control input-sm"
        v-model="imageUrl"
        placeholder="Enter image link"
        required="true"
        rows="20"
        cols="120"
        id="Image"
      />

      <br />
      <br />
      <div class="container">
        <div class="btn btn-primary" @click="postNewBlog" name="submit">
          Submit
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
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
  },
  methods: {
    postNewBlog() {
      var arr = this.$store.getters.blogsArray;
      if (this.$route.params.id) {
        arr[this.$route.params.id] = {
          title: this.title,
          content: this.content,
          imageUrl: this.imageUrl
        };
      } else
        arr.unshift({
          title: this.title,
          content: this.content,
          imageUrl: this.imageUrl
        });
      var blogs = {
        array: arr
      };

      this.$http.put("data.json", blogs).then(() => {
        console.log("succesful");
        router.replace("/");
      });
    }
  }
};
</script>

<style scoped>
p {
  font-size: 25px;
}
input {
  display: block;
  margin: auto;
  width: 80%;
}
</style>
