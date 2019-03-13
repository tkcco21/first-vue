<template lang="html">
  <div class="todo__wrapper">
    <div class="todo__inner">
      <Header />

      <main class="main">
        <TodoRegister
          :add-todo="addTodo"
        />

        <TodosList
          :todos="todos"
          :error-message="errorMessage"
          :is-editing="isEditing"
          :change-completed="changeCompleted"
          :show-editor="showEditor"
          :edit-todo="editTodo"
          :delete-todo="deleteTodo"
        />
      </main>

      <Footer :todos="todos" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from 'Components/todo_router/Organisms/Header';
import Footer from 'Components/todo_router/Organisms/Footer';
import TodoRegister from 'Components/todo_router/Organisms/TodoRegister';
import TodosList from 'Components/todo_router/Organisms/TodosList';

export default {
  components: {
    Header,
    Footer,
    TodoRegister,
    TodosList
  },
  data() {
    return {
      todos: [],
      errorMessage: '',
      isEditing: {
        id: null
      }
    }
  },
  created() {
    this.hideError();
    axios.get('http://localhost:3000/api/todos/').then(({ data }) => {
      this.todos = data.todos.reverse();
    }).catch(err => {
      this.errorMessage = err.response.data.message;
    });
  },
  methods: {
    hideError() {
      this.errorMessage = '';
    },
    addTodo(event) {
      this.hideError();
      const target = event.target;
      const title = target.title.value;
      const detail = target.detail.value.replace(/\r?\n/g, ' ');
      axios.post('http://localhost:3000/api/todos/', {
        title,
        detail
      }).then(({ data }) => {
        target.title.value = '';
        target.detail.value = '';
        this.todos.unshift(data);
      }).catch(err => {
        this.errorMessage = err.response.data.message;
      });
    },
    changeCompleted(id) {
      this.hideError();
      const targetTodo = this.todos.find(todo => {
        return todo.id === id;
      });
      targetTodo.completed = !targetTodo.completed;
      axios.patch(`http://localhost:3000/api/todos/${id}`, {
        completed: targetTodo.completed
      }).catch(err => {
        this.errorMessage = err.response.data.message;
      });
    },
    showEditor(id) {
      this.hideError();
      this.isEditing.id = id;
    },
    editTodo(event, id) {
      this.hideError();
      const targetTodo = this.todos.find(todo => {
        return todo.id === id;
      });
      const target = event.target;
      const title = target.title.value;
      const detail = target.detail.value.replace(/\r?\n/g, ' ');
      if ( targetTodo.title === title && targetTodo.detail === detail ) {
        this.isEditing.id = null;
        return;
      }
      axios.patch(`http://localhost:3000/api/todos/${id}`, {
        title, detail
      }).then(({ data }) => {
        this.isEditing.id = null;
        this.todos = this.todos.map(todo => {
          if (todo.id === id) {
            return data;
          }
          return todo;
        });
      }).catch(err => {
        this.errorMessage = err.response.data.message;
      });
    },
    deleteTodo(id) {
      this.hideError();
      axios.delete(`http://localhost:3000/api/todos/${id}`).then(({ data }) => {
        this.todos = data.todos.reverse();
      }).catch(err => {
        this.errorMessage = err.response.data.message;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.todo {
  &__wrapper {
    margin: 0 auto;
    padding: 20px 0;
    width: 700px;
    max-height: 100vh;
  }
  &__inner {
    position: relative;
    max-height: calc(100vh - 40px);
    border-radius: 10px;
    box-shadow: #aaa 0 0 20px 1px;
  }
}

.main {
  padding: 78px 0 56px;
  max-height: calc(100vh - 40px);
  overflow: scroll;
  border-radius: 10px;
  background-color: #fff;
}
</style>
