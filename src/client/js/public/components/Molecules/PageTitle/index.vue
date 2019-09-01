<template>
  <div class="page-title">
    <app-text tag="h2" :text="title" />
    <template v-if="text">
      <app-text tag="p" :text="text" />
    </template>
  </div>
</template>

<script>
import { Text } from '@Public/components/Atoms';

export default {
  components: { appText: Text },
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
