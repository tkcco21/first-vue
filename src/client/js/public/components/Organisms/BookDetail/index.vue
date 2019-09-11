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
      <h3 class="book-detail__title">{{ book.title }}</h3>
      <p class="book-detail__date">
        {{ book.completedYear }}年 {{ book.completedMonth }}月 読了
      </p>
      <p class="book-detail__desc">{{ book.description }}</p>
    </div>
  </article>
</template>

<script>
import { Link } from '@Public/components/Atoms';

export default {
  components: {
    appLink: Link,
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
        width: 60%;
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
  &__title {
    font-size: 22px;
    text-decoration: underline;
  }
  &__date {
    margin-top: 10px;
    color: var(--darkGray);
    font-size: 14px;
  }
  &__desc {
    margin-top: 10px;
    font-size: 16px;
    white-space: pre-line;
  }
}
</style>
