<template>
  <div>
    <h1 class="hello-title">
      {{ msg }}
    </h1>
    <!-- <button-counter />
    <button-counter />
    <button-counter />
    <button-counter /> -->
    <blog-post />
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue';

export default {
  name: 'HelloVue',
  props: {
    title: String
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App!!'
    }
  }
}
// button-counter と呼ばれる新しいコンポーネントを定義します
// Vue.component('button-counter', {
//   data: function() {
//     return {
//       count: 0
//     }
//   },
//   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
// })
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
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