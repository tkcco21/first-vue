<template lang="html">
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
              :src="book.imageUrl || `https://placehold.jp/300x250.png?text=${book.title}の画像があれば...`"
              aspect-ratio="1.25"
              max-height="100"
              :contain="book.imageUrl ? true : false"
            />
            <v-card-title class="pl-2 pr-2 pt-3 pb-0">
              <h3 class="subheading font-weight-bold mb-0">{{ book.title }}</h3>
            </v-card-title>
            <!-- <v-card-text class="pa-2">{{ book.description }}</v-card-text> -->
            <v-card-actions>
              <v-btn
                class="font-weight-bold"
                :to="{ path: `books/${book.id}` }"
                color="green"
                block
                dark
              >
                詳細
              </v-btn>
            </v-card-actions>
            <v-card-actions class="pt-0">
              <v-btn
                class="font-weight-bold caption"
                tag="a"
                :href="book.itemUrl"
                target="_blank"
                color="blue"
                block
                dark
              >
                アマゾン
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  computed: {
    completedDate() {
      return this.$store.getters.completedDate;
    },
    books() {
      return this.$store.state.books;
    },
  },
  created() {
    if (!this.$store.state.books.length) {
      this.$store.dispatch('getAllBooks');
    }
  },
};
</script>
