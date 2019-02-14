<template>
  <div>
    <h1 class="hello-title">
      {{ msg }}
    </h1>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'HelloVue',
  props: {
    title: String
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App!!'
    }
  }
}
</script>

<style scoped lang="scss">
.hello {
  &-title {
    color: #00f;
    display: grid;
    display: flex;
    justify-content: center;
  }
}
</style>