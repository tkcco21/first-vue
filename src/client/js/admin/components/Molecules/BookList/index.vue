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
          <v-card>
            <!-- <div v-html="book.itemUrl" />
            {{ book.itemUrl }} -->

            <v-card-title class="pl-2 pr-2 pt-3 pb-0">
              <h3 class="subheading font-weight-bold mb-0">{{ book.title }}</h3>
            </v-card-title>
            <!-- <v-card-text class="pa-2">{{ book.description }}</v-card-text> -->
            <v-card-actions class="pt-0">
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
            <v-card-actions class="pt-0">
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
};
</script>
