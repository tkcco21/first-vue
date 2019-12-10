<template lang="html">
  <div class="home">
    <h1>First Vueの管理画面</h1>
    <v-container class="pa-0 mt-4">
      <v-card
        class="pa-3"
        :to="{ path: 'admin/books' }"
        color="blue darken-4"
        dark
      >
        <v-card-title primary-title class="pa-0">
          <h2 class="headline mb-0">本の管理</h2>
        </v-card-title>
        <v-card-text class="pa-0 mt-2">
          <p class="mb-0">
            何年の何月に何を読んだのかの保存<br>
            アマゾンのリンクと画像をアフィリリンク生成のところからコピペする<br>
            感想として軽く載せられたらいいな。。
          </p>
        </v-card-text>
      </v-card>

      <v-card class="pa-3 mt-5" color="grey lighten-2" dark>
        <v-card-title primary-title class="pa-0">
          <h2 class="headline mb-0">ドラマの管理...（未定）</h2>
        </v-card-title>
      </v-card>

      <v-card class="pa-3 mt-3" color="grey lighten-2" dark>
        <v-card-title primary-title class="pa-0">
          <h2 class="headline mb-0">映画の管理...（未定）</h2>
        </v-card-title>
      </v-card>

      <v-card class="pa-3 mt-3" color="grey lighten-2" dark>
        <v-card-title primary-title class="pa-0">
          <h2 class="headline mb-0">アニメの管理...（未定）</h2>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="postcss" scoped>
</style>
