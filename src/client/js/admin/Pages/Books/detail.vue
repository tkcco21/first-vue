<template lang="html">
  <book-form
    :target-book="targetBook"
    :done-message="doneMessage"
    :error-message="errorMessage"
    @updateValue="updateValue"
    @clear="clear"
    @invalidateSubmit="invalidateSubmit"
    @handleSubmit="handleSubmit"
  />
</template>

<script>
import { BookForm } from '@Admin/components/Molecules';

export default {
  components: { BookForm },
  computed: {
    doneMessage() {
      return this.$store.state.doneMessage;
    },
    errorMessage() {
      return this.$store.state.errorMessage;
    },
    targetBook() {
      return this.$store.state.targetBook;
    },
  },
  created() {
    this.$store.dispatch('getBook', { id: this.$route.params.id });
  },
  methods: {
    updateValue(target) {
      this.$store.dispatch('updateValue', target);
    },
    clear() {
      this.$store.dispatch('clearMessage');
    },
    invalidateSubmit() {
      this.$store.dispatch('invalidate', '必須項目が未入力か、ちゃんとした値が入力されてないよ。');
    },
    handleSubmit(book) {
      this.$store.dispatch('editBook', book).then(() => {
        this.$store.dispatch('resetForm');
      });
    },
  },
};
</script>
