<template>
  <v-expansion-panel expand>
    <template
      v-for="yearly in books"
    >
      <v-expansion-panel-content
        v-for="(everyBooks, year) in yearly"
        :key="`${year}year`"
      >
        <template v-slot:header class="grey lighten-3">
          <div class="title font-weight-bold">
            {{ year }}年
            <!-- <p class="caption font-weight-regular mt-1 mb-0">
              読んだ冊数 {{ }}冊
            </p> -->
          </div>
        </template>

        <v-layout class="pa-2 grey lighten-3" row wrap>
          <template v-for="monthly in everyBooks">
            <template v-for="(monthlyBooks, month) in monthly">
              <v-flex :key="`${month}month`" xs12>
                <v-card
                  class="green lighten-2 pa-2"
                  flat
                  dark
                >
                  <v-card-title class="subheading font-weight-bold pa-0">
                    {{ month }}月（{{ monthlyBooks.count }}冊）
                  </v-card-title>
                </v-card>
              </v-flex>

              <v-flex
                v-for="book in monthlyBooks.books"
                :key="book.id"
                class="pa-2"
                align-start
                justify-start
                lg2
                md3
                xs4
              >
                <v-card class="pa-2">
                  <a :href="book.itemUrl" target="_blank">
                    <img :src="book.imageUrl" :alt="book.title">
                  </a>

                  <v-card-title class="pa-0 mt-2">
                    <h3 class="subheading font-weight-bold mb-0">{{ book.title }}</h3>
                  </v-card-title>
                  <v-card-text class="pa-0 mt-1">{{ book.description }}</v-card-text>
                  <v-card-actions class="pa-0 mt-2">
                    <v-btn
                      class="font-weight-bold"
                      :to="{ path: `books/${book.id}` }"
                      color="green"
                      block
                      dark
                      small
                    >
                      詳細
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions class="pa-0 mt-1">
                    <v-btn
                      class="font-weight-bold caption"
                      tag="button"
                      type="button"
                      target="_blank"
                      color="red"
                      block
                      dark
                      small
                    >
                      削除
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </template>
          </template>
        </v-layout>
      </v-expansion-panel-content>
    </template>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
};
</script>
