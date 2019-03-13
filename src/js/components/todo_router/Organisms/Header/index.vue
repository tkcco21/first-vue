<template>
  <header class="header">
    <TodoHeader />
  </header>
</template>

<script>
import TodoHeader from 'Components/todo_router/Molecules/TodoHeader';

export default {
  components: {
    TodoHeader
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  color: #fff;
  text-align: center;
  border-radius: 10px 10px 0 0;
  background-color: #54b363;
}
</style>
