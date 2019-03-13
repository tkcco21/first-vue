<template>
  <div :class="wrapperClass">
    <HigherHeading
      :heading-class="headingClass"
      :heading-text="headingText"
    />

    <PlaneText
      :text-class="textClass"
      :text="text"
    />
  </div>
</template>

<script>
import { HigherHeading } from 'Components/todo_router/Atoms/Heading/index.js';
import { PlaneText } from 'Components/todo_router/Atoms/Text/index.js';

export default {
  components: {
    HigherHeading,
    PlaneText
  },
  props: {
    wrapperClass: {
      type: String,
      default: ''
    },
    headingClass: {
      type: String,
      default: ''
    },
    headingText: {
      type: String,
      default: ''
    },
    textClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.todos__desc {
  width: 70%;
  min-width: 450px;
  &__title {
    transition: all .3s;
  }
  &__detail {
    margin-top: 5px;
    color: #777;
    transition: all .3s;
  }
  .is-completed &__title,
  .is-completed &__detail {
    color: #ccc;
  }
}

</style>
