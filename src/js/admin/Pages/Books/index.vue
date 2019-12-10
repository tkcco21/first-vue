<template lang="html">
  <section class="books">
    <h1 class="heading-primary">Books</h1>
    <v-container class="pa-0 mt-4">
      <router-view />
    </v-container>
  </section>
</template>

<style lang="postcss" scoped>
.heading-primary {
  padding: 5px 15px;
  font-size: 26px;
  background-color: #efefef;
  border-left: 5px solid var(--keyColor);
}
</style>
