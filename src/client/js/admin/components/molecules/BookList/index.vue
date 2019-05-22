<template lang="html">
  <div class="book-list">
    <v-expansion-panel expand>
      <v-expansion-panel-content
        v-for="date in completedDate"
        :key="date"
      >
        <template v-slot:header>
          <div class="subheading font-weight-bold">
            {{ date }}
            <p class="caption font-weight-regular mt-1 mb-0">
              読んだ冊数 {{ books[date].length }}冊
            </p>
          </div>
        </template>

        <v-layout class="pa-2" row wrap>
          <v-flex
            v-for="book in books[date]"
            :key="book.id"
            class="pa-2"
            align-start
            justify-start
            lg2
            md3
            xs4
          >
            <v-card>
              <v-img
                :src="book.image_url || `https://placehold.jp/231x335.png?text=${book.title}の画像があれば...`"
                aspect-ratio="1.25"
              />
              <v-card-title class="pl-2 pr-2 pt-3 pb-0">
                <h3 class="subheading font-weight-bold mb-0">{{ book.title }}</h3>
              </v-card-title>
              <v-card-text class="pa-2">{{ book.description }}</v-card-text>
              <v-card-actions class="pt-0">
                <v-btn
                  :href="book.item_url"
                  tag="a"
                  color="green"
                  flat
                  target="_blank"
                >
                  商品ページ
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
export default {
  props: {
    completedDate: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>

<style lang="css" scoped>
.book-list {
  &__list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    & > li {
      width: 32%;
      max-width: 280px;
    }
  }
}
</style>
