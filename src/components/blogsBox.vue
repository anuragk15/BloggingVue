<template>
  <div data-aos="fade-right" class="col">
    <div class="card text-center" style="width: 20rem;">
      <img class="card-img-top" :alt="imageUrl" :src="imageUrl" />
      <div class="card-body">
        <h5 class="card-title max-lines">{{ title }}</h5>
        <p class="card-text max-lines">{{ content }}</p>
      </div>

      <div v-if="edit">
        <div class="row d-flex justify-content-center">
          <router-link
            :to="{
              path: '/add/' + id
            }"
            class="btn btn-success"
            >Edit</router-link
          >
          <div class="btn btn-danger" @click="deleteEle">Delete</div>
        </div>
      </div>
      <div v-else>
        <router-link
          class="btn"
          :to="{
            path: '/article/' + id,
            params: { id: id }
          }"
          >Read more</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "blogsBox",
  created() {
    AOS.init({ mirror: "true" });
    console.log(this.id);
  },
  methods: {
    deleteEle() {
      if (!confirm("Are you sure?")) {
        return;
      }

      var arr = this.$store.getters.blogsArray;
      var index = arr.findIndex(e => e.title == this.title);
      console.log(index);
      arr.splice(index, 1);
      this.$store.commit("setBlogsArray", { array: arr });
      var blogs = {
        array: arr
      };

      this.$http.put("data.json", blogs).then(() => {
        console.log("succesful");
      });
    }
  },
  props: ["title", "content", "edit", "imageUrl", "id"]
};
</script>

<style scoped>
.card {
  margin: auto;
  margin-bottom: 2rem;
}
.btn {
  margin: 5px;
}
.max-lines {
  display: block; /* or inline-block */
  text-overflow: overflow;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}
</style>
