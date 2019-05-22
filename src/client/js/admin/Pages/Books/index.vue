<template lang="html">
  <section class="books">
    <h1 class="heading-primary">Books</h1>
    <router-view />
  </section>
</template>

<style lang="css" scoped>
.heading-primary {
  margin-bottom: 20px;
  padding: 5px 15px;
  font-size: 26px;
  background-color: #efefef;
  border-left: 5px solid var(--keycolor);
}
</style>
