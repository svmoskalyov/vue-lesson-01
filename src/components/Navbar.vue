<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/about')">
        About
      </my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/store')">
        Store
      </my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 50px;
  box-shadow: 2px 2px 4px gray;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
