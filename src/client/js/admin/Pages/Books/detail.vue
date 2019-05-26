<template lang="html">
  <div class="books-detail">
    <v-alert
      v-if="errorMessage"
      :value="true"
      type="error"
    >
      {{ errorMessage }}
    </v-alert>

    <template v-else>
      {{ book }}
    </template>
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="css" scoped>
</style>
