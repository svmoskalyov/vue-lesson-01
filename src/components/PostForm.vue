<template>
  <form @submit.prevent>
    <h3>Created post</h3>
    <input v-model="post.title" class="input" type="text" placeholder="Name" />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Description"
    />
    <!-- <input
      v-bind:value="post.title"
      @input="post.title = $event.target.value"
      class="input"
      type="text"
      placeholder="Name"
    />
    <input
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
      class="input"
      type="text"
      placeholder="Description"
    /> -->
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
    >
      Add
    </my-button>
  </form>
</template>

<script>


export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },

};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 1px solid tomato;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
