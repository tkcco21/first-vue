<template>
  <article class="book-detail">
    <div class="book-detail__image">
      <img :src="book.imageUrl" alt="">
      <app-link
        text="Amazonへ"
        :to="book.itemUrl"
        external
        block
        bg-second
        white
        small
        center
      />
    </div>

    <div class="book-detail__body">
      <h3 class="book-detail__title">{{ book.title }}</h3>
      <p class="book-detail__date">
        {{ book.completedYear }}年 {{ book.completedMonth }}月 読了
      </p>
      <p class="book-detail__desc">
        {{ book.description }}
      </p>
    </div>
  </article>
</template>

<script>
import Link from '@Public/components/Atoms/Link';

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
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  &__image {
    width: 28%;
    img {
      margin-bottom: 10px;
    }
  }
  &__body {
    padding: 2% 3%;
    width: 70%;
    border: 2px solid var(--lightGray);
    border-radius: 8px;
    box-sizing: border-box;
  }
  &__title {
    font-size: 22px;
    text-decoration: underline;
  }
  &__date {
    margin-top: 10px;
    color: var(--darkGdray);
    font-size: 14px;
  }
  &__desc {
    margin-top: 10px;
    font-size: 16px;
  }
}
</style>
