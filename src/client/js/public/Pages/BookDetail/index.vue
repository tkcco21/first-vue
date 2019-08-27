<template>
  <div class="">
    <div class="">本の詳細</div>
    {{ book }}
  </div>
</template>

<script>
export default {
  computed: {
    book() {
      return this.$store.state.book;
    },
  },
  created() {
    this.$store.dispatch('getBook', this.$route.params);
  },
};
</script>
