<template>
  <footer class="footer">
    <TodoFooter :text="`全項目数: ${todos.length}`" />
    <TodoFooter :text="`全項目数: ${getCompletedTodos.length}`" />
    <TodoFooter :text="`全項目数: ${getIncompletedTodos.length}`" />
  </footer>
</template>

<script>
import TodoFooter from 'Components/todo_router/Molecules/TodoFooter';

export default {
  components: {
    TodoFooter
  },
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    getCompletedTodos() {
      const completedTodos = this.todos.filter(todo => {
        return todo.completed;
      });
      return completedTodos;
    },
    getIncompletedTodos() {
      const incompletedTodos = this.todos.filter(todo => {
        return !todo.completed;
      });
      return incompletedTodos;
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  font-size: 14px;
  line-height: 1.2;
  color: #555;
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
}
</style>
