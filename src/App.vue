<template>
  <Navbar></Navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default { components: { Navbar } };
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

body {
  margin: 0;
  background: #f9f9f9;
  font-family: "Roboto Condensed", sans-serif;
}

main {
  max-width: 600px;
  margin: auto;
}
</style>
