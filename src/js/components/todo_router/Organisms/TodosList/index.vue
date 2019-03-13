<template>
  <div class="todos">
    <ErrorMessage
      v-if="errorMessage"
      wrapper-class="todos__error"
      label-class="todos__error__text"
      :label-text="errorMessage"
    />

    <template v-if="todos.length">
      <ul class="todos__list">
        <li
          v-for="todo in todos"
          :key="todo.id"
          :class="todo.completed ? 'is-completed' : ''"
        >
          <div class="todos__inner">
            <CompleteButton
              wrapper-class-name="todos__completed"
              class-name="todos__completed__btn"
              button-type="button"
              button-name="completeButton"
              :button-text="todo.completed ? '完了' : '未完了'"
              @click="changeCompleted(todo.id)"
            />

            <TodoEditBody
              v-if="isEditing.id === todo.id"
              form-class-name="todos__desc"
              form-id="editorTodo"
              :title-value="todo.title"
              :detail-value="todo.detail"
              :title-exist="false"
              :detail-exist="false"
              title-wrapper-class="todos__desc__title"
              detail-wrapper-class="todos__desc__detail"
              title-type="text"
              title-name="title"
              detail-name="detail"
              @submitEditTodo="editTodo($event, todo.id)"
            />

            <TodoBody
              v-else
              wrapper-class="todos__desc"
              heading-class="todos__desc__title"
              :heading-text="todo.title"
              text-class="todos__desc__detail"
              :text="todo.detail"
            />

            <ChangeButton
              wrapper-class-name="todos__btn"
              edit-class-name="todos__btn__edit"
              edit-target-form="editorTodo"
              :edit-button-type="isEditing.id === todo.id ? 'submit' : 'button'"
              :edit-button-name="isEditing.id === todo.id ?
                'editButton' : 'completeButton'"
              :edit-button-text="isEditing.id === todo.id ? '確定' : '編集'"
              :is-submit="isEditing.id === todo.id ? true : false"
              delete-class-name="todos__btn__delete"
              @editClick="isEditing.id === todo.id ? '' :showEditor(todo.id)"
              @deleteClick="deleteTodo(todo.id)"
            />
          </div>
        </li>
      </ul>
    </template>
    <template v-else>
      <ErrorMessage
        label-class="todos__empty"
        label-text="やることリストには何も登録されていません。"
      />
    </template>
  </div>
</template>

<script>
import ErrorMessage from 'Components/todo_router/Molecules/ErrorMessage';
import CompleteButton from 'Components/todo_router/Molecules/CompleteButton';
import ChangeButton from 'Components/todo_router/Molecules/ChangeButton';
import TodoBody from 'Components/todo_router/Molecules/TodoBody';
import TodoEditBody from 'Components/todo_router/Molecules/TodoEditBody';

export default {
  components: {
    ErrorMessage,
    CompleteButton,
    ChangeButton,
    TodoBody,
    TodoEditBody
  },
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      }
    },
    errorMessage: {
      type: String,
      default() {
        return '';
      }
    },
    isEditing: {
      type: Object,
      default() {
        return {
          id: {
            type: String || null,
            default: null
          }
        };
      }
    },
    addTodo: {
      type: Function,
      default() {
        return () => ({});
      }
    },
    changeCompleted: {
      type: Function,
      default() {
        return () => ({});
      }
    },
    showEditor: {
      type: Function,
      default() {
        return () => ({});
      }
    },
    editTodo: {
      type: Function,
      default() {
        return () => ({});
      }
    },
    deleteTodo: {
      type: Function,
      default() {
        return () => ({});
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.todos {
  margin-top: 20px;
  padding: 10px;
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
      }
    }
  }
  &__inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__desc {
    &__title {
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
}
</style>
