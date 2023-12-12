<template>
  <div>
    <!-- <h2>{{ likes }}</h2>
    <button @click="addLike">add like</button> -->

    <h1>Posts page</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Find..." />
    <div class="app__btns">
      <my-button> Add </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form />
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />

    <div v-else>Loading...</div>

    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MySelect from "@/components/UI/MySelect.vue";
// import { ref } from "vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  name: "PostPageCompositionApi",
  components: {
    PostForm,
    PostList,
    MySelect,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "Title" },
        { value: "body", name: "Description" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };

    // const likes = ref(2);

    // const addLike = () => {
    //   likes.value += 1;
    // };

    // return {
    //   likes,
    //   addLike,
    // };
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid #000;
  padding: 10px;
}

.current-page {
  border: 2px solid tomato;
}

.observer {
  height: 30px;
  background: green;
}
</style>
