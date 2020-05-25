<template>
  <div id="app" name="app">
    <div class="header__main">
      <b-navbar toggleable="lg" type="light" variant>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand class="navbar_brand">
          Blogs
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <router-link to="/" class="nav-item" tag="b-nav-item"
              >Read</router-link
            >
            <router-link to="/edit" class="nav-item" tag="b-nav-item"
              >Add/Edit</router-link
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <br />
    <h2 v-if="blogsCount < 1" class="text-center">You don't have any blogs</h2>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  filters: {
    pluralCheck(value) {
      if (this.blogsCount > 1) value = value + "s";
      return value;
    }
  },
  data() {
    return {
      imageLink: require("@/assets/background_home.jpg"),
      heading_text: ""
    };
  },
  computed: {
    blogsCount() {
      return this.$store.getters.blogsCount;
    }
  }
};
</script>

<style>
#b-nav-item {
  color: black;
}
router-link {
  color: black;
}
.navbar_brand {
  font-size: 2rem;
  color: black;
  font-family: "Permanent Marker";
}
#welcome__text {
  font-family: "Permanent Marker";
}
.header__main {
  background-image: url("./assets/background_home.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 8rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h2 {
  margin-left: 1%;
  font-size: 25px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
