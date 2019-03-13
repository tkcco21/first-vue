<template>
  <PlaneText :text="text" />
</template>

<script>
import { PlaneText } from 'Components/todo_router/Atoms/Text/index.js';

export default {
  components: {
    PlaneText
  },
  props: {
    text: {
      type: String,
      default: 'text'
    }
  }
}
</script>
