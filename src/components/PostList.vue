<template>
  <div v-if="posts.length > 0">
    <h3>Posts list</h3>
    <TransitionGroup name="list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </TransitionGroup>
  </div>
  <h2 v-else style="color: red">Posts list is empty</h2>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  name: "PostList",
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
