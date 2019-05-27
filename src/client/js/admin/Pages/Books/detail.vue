<template lang="html">
  <book-form :book-detail="book" @handleSubmit="handleSubmit" />
</template>

<script>
import BookForm from '@Admin/components/Molecules';

export default {
  components: { BookForm },
  computed: {
    errorMessage() {
      return this.$store.state.errorMessage;
    },
    book() {
      return this.$store.state.targetBook;
    },
  },
  created() {
    this.$store.dispatch('getBook', { id: this.$route.params.id });
  },
  methods: {
    handleSubmit() {
      // console.log('edit book');
    },
  },
};
</script>
