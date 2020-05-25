import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blog_count: 0,
    blogs_arr: []
  },
  getters: {
    blogsCount: state => {
      return state.blog_count;
    },
    blogsArray: state => {
      return state.blogs_arr;
    }
  },
  mutations: {
    setBlogCount: (state, { count }) => {
      state.blog_count = count;
    },
    setBlogsArray: (state, { array }) => {
      state.blogs_arr = array;
    },
    printSomething: (state, { args }) => {
      console.log("hello " + args);
    }
  },
  modules: {}
});
