<template>
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
          <v-card class="pa-2">
            <v-img
              class="text-lg-center text-md-center text-sm-center"
              height="180"
              v-html="sanitizeHtml(book.itemUrl, {
                allowedTags: ['a', 'img']
              })"
            />

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
      </v-layout>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import sanitizeHtml from 'sanitize-html';

export default {
  props: {
    completedDate: {
      type: Array,
      default: () => [],
    },
    books: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    sanitizeHtml() {
      return sanitizeHtml;
    },
  },
};
</script>
