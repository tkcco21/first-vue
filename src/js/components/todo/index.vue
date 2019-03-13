<template lang="html">
  <div class="todo__wrapper">
    <div class="todo__inner">
      <header class="header">
        <h1 class="header__title">
          やることリスト
        </h1>
      </header>

      <main class="main">
        <form class="register" @submit.prevent="addTodo">
          <div class="register__input">
            <p class="register__input__title">
              やることのタイトル
            </p>
            <input
              type="text"
              name="title"
              placeholder="ここにTODOのタイトルを記入してください"
            >
          </div>
          <div class="register__input">
            <p class="register__input__title">
              やることの内容
            </p>
            <textarea
              name="detail"
              rows="3"
              placeholder="ここにTODOの内容を記入してください。改行は半角スペースに変換されます。"
            />
          </div>
          <div class="register__submit">
            <button class="register__submit__btn" type="submit" name="button">
              登録する
            </button>
          </div>
        </form>

        <div v-if="errorMessage" class="error">
          <p class="error__text">
            {{ errorMessage }}
          </p>
        </div>

        <div class="todos">
          <template v-if="todos.length">
            <ul class="todos__list">
              <li
                v-for="todo in todos"
                :key="todo.id"
                :class="todo.completed ? 'is-completed' : ''"
              >
                <div class="todos__inner">
                  <div class="todos__completed">
                    <button
                      class="todos__completed__btn"
                      type="button"
                      @click="changeCompleted($event, todo.id)"
                    >
                      <template v-if="todo.completed">
                        完了
                      </template>
                      <template v-else>
                        未完了
                      </template>
                    </button>
                  </div>
                  <form
                    v-if="isEditing.id === todo.id"
                    id="editorTodo"
                    class="todos__desc"
                    @submit.prevent="editTodo($event, todo.id)"
                  >
                    <div class="todos__desc__title">
                      <input
                        type="text"
                        name="title"
                        :value="todo.title"
                      >
                    </div>
                    <div class="todos__desc__detail">
                      <textarea
                        name="detail"
                        rows="3"
                        :value="todo.detail"
                      />
                    </div>
                  </form>
                  <div v-else class="todos__desc">
                    <h2 class="todos__desc__title">
                      {{ todo.title }}
                    </h2>
                    <p class="todos__desc__detail">
                      {{ todo.detail }}
                    </p>
                  </div>
                  <div class="todos__btn">
                    <template v-if="isEditing.id === todo.id">
                      <button
                        class="todos__btn__edit"
                        form="editorTodo"
                        type="submit"
                        name="editButton"
                      >
                        確定
                      </button>
                    </template>
                    <template v-else>
                      <button
                        class="todos__btn__edit"
                        type="button"
                        @click.prevent="showEditor(todo.id)"
                      >
                        編集
                      </button>
                    </template>
                    <button
                      class="todos__btn__delete"
                      type="button"
                      @click="deleteTodo($event, todo.id)"
                    >
                      削除
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </template>
          <template v-else>
            <p class="todos__empty">
              やることリストには何も登録されていません。
            </p>
          </template>
        </div>
      </main>

      <footer class="footer">
        <p>全項目数: {{ todos.length }}</p>
        <p>完了済: {{ getCompletedTodos.length }}</p>
        <p>未完了: {{ getIncompletedTodos.length }}</p>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      errorMessage: '',
      isEditing: {
        id: null
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
        title, detail
      }).then(({ data }) => {
        target.title.value = '';
        target.detail.value = '';
        this.todos.unshift(data);
      }).catch(err => {
        this.errorMessage = err.response.data.message;
      });
    },
    changeCompleted(event, id) {
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
    deleteTodo(event, id) {
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

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  color: #fff;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  border-radius: 10px 10px 0 0;
  background-color: #54b363;
}

.main {
  padding: 78px 0 56px;
  max-height: calc(100vh - 40px);
  overflow: scroll;
  border-radius: 10px;
  background-color: #fff;
}

.register {
  padding: 10px 20px;
  padding-bottom: 0;
  &__inner {
    width: 80%;
  }
  &__input {
    & + & {
      margin-top: 10px;
    }
    &__title {
      font-weight: bold;
      font-size: 14px;
    }
    input, textarea {
      padding: 10px;
      width: 100%;
      font-size: 14px;
      border: 1px solid #ddd;
    }
  }
  &__submit {
    margin-top: 10px;
    text-align: right;
    &__btn {
      padding: 10px 25px;
      color: #fff;
      font-size: 12px;
      border-radius: 7px;
      background-color: #54b363;
    }
  }
}

.error {
  padding: 0 20px;
  text-align: center;
  &__text {
    margin-top: 10px;
    padding: 5px;
    color: #f00;
    font-size: 14px;
    background-color: #efefef;
  }
}

.todos {
  margin-top: 20px;
  padding: 10px;
  &__empty {
    font-size: 14px;
    text-align: center;
  }
  &__list {
    & > li {
      padding: 15px 10px;
      border-top: 1px solid #ddd;
      transition: all .3s;
      &:first-child {
        border-top: none;
      }
      &.is-completed {
        color: #ccc;
        background-color: #f3f3f3;
        .todos__completed__btn {
          text-decoration: line-through;
          color: #ccc;
          border: 2px solid #eaeaea;
          background-color: #eaeaea;
        }
        .todos__desc__title,
        .todos__desc__detail {
          color: #ccc;
        }
      }
    }
  }
  &__inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__completed {
    width: 15%;
    min-width: 100px;
    &__btn {
      padding: 5px 10px;
      color: #ff1919;
      font-weight: bold;
      font-size: 12px;
      border-radius: 7px;
      border: 2px solid #ff1919;
      background-color: #fff;
      transition: all .3s;
    }
  }
  &__desc {
    width: 70%;
    min-width: 450px;
    &__title {
      color: #000;
      font-weight: bold;
      font-size: 16px;
      line-height: 1.2;
      transition: all .3s;
      input {
        padding: 5px 10px;
        width: 100%;
        color: #000;
        font-size: 16px;
        border: 1px solid #ddd;
        transition: all .3s;
      }
    }
    &__detail {
      margin-top: 5px;
      color: #777;
      font-size: 14px;
      line-height: 1.2;
      transition: all .3s;
      textarea {
        padding: 5px 10px;
        width: 100%;
        color: #000;
        font-size: 14px;
        border: 1px solid #ddd;
        transition: all .3s;
      }
    }
  }
  &__btn {
    width: 10%;
    min-width: 70px;
    text-align: center;
    &__edit,
    &__delete {
      padding: 5px 10px;
      border-radius: 7px;
      color: #fff;
      font-size: 12px;
    }
    &__edit {
      background-color: #148cfa;
    }
    &__delete {
      margin-top: 5px;
      background-color: #ff1919;
    }
  }
}

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
