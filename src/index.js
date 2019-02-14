import Vue from 'vue';

import MyApp from './Components/App';

new Vue({
  el: '#app',
  //importしたオブジェクトを渡す
  components: {
    MyApp
  },
  template: '<my-app></my-app>',
});