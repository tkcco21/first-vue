<template>
  <article class="book-detail">
    <div class="book-detail__image">
      <img :src="book.imageUrl" alt="">
      <app-link
        text="Amazonの詳細へ"
        :to="book.itemUrl || ''"
        external
        bg-second
        white
        small
        padding-m
        round-s
      />
    </div>

    <div class="book-detail__body">
      <app-text
        tag="h3"
        :text="book.title"
        font-m
        underline
      />
      <app-text
        tag="p"
        :text="`${book.completedYear}年 ${book.completedMonth}月 読了`"
        font-xs
        dark-gray
        class="book-detail__date"
      />
      <app-text
        tag="p"
        :text="book.description"
        font-s
        class="book-detail__desc"
      />
    </div>
  </article>
</template>

<script>
import { Link, Text } from '@Public/components/Atoms';

export default {
  components: {
    appLink: Link,
    appText: Text,
  },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.book-detail {
  margin-top: 20px;
  @mixin pc {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__image {
    text-align: center;
    @mixin pc {
      width: 28%;
    }
    @mixin tab {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @mixin mobile {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      @mixin pc {
        margin-bottom: 10px;
      }
      @mixin tab {
        margin-right: 5%;
        width: 30%;
      }
      @mixin mobile {
        margin-right: 5%;
        width: 30%;
      }
    }
  }
  &__body {
    padding: 2% 3%;
    border: 2px solid var(--lightGray);
    border-radius: 8px;
    box-sizing: border-box;
    @mixin pc {
      width: 70%;
    }
    @mixin tab {
      margin-top: 5%;
    }
    @mixin mobile {
      margin-top: 5%;
    }
  }
  &__date {
    margin-top: 10px;
  }
  &__desc {
    margin-top: 10px;
    white-space: pre-line;
  }
}
</style>
