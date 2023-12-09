<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: none;
  color: tomato;
  border: 1px solid tomato;
  cursor: pointer;

  &:hover {
    background: tomato;
    color: #fff;
  }
}
</style>
