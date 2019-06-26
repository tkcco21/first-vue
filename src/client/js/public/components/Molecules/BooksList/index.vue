<template lang="html">
  <ul class="books-list">
    <li
      v-for="(date, index) in dateArray"
      :key="index"
    >
      <h3 class="books-list__title">{{ date }}</h3>
      <ul class="books-list__date">
        <li
          v-for="book in books[date]"
          :key="book.id"
        >
          <div class="book-card">
            <p v-html="book.itemUrl" />
            <h4 class="book-card__title">{{ book.title }}</h4>
            <p class="book-card__desc">{{ book.description }}</p>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    dateArray: {
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

<style lang="postcss" scoped>
.books-list {
  margin-top: 20px;
  & > li {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
  }
  &__title {
    padding: 5px 10px;
    font-size: 20px;
    line-height: 1.2;
    /* color: #fff; */
    background-color: var(--superLightGray);
    border-left: 8px solid var(--keycolor);
    border-bottom: 1px solid var(--keycolor);
  }

  &__date {
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: wrap;
    padding: 2%;
    & > li {
      margin-top: 1.2%;
      margin-left: 1.2%;
      width: 24.1%;
      &:nth-child(4n+1) {
        margin-left: 0;
      }
      &:nth-child(-n+4) {
        margin-top: 0;
      }
    }
  }
}
.book-card {
  padding: 5%;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 5px;
  border: 1px solid var(--superLightGray);
  box-sizing: border-box;
  transition: all .5s;
  &:hover {
    background-color: color(var(--keycolor) a(10%));
  }
  &__image {
    width: 50%;
  }
  &__title {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.4;
    text-align: left;
  }
  &__desc {
    margin-top: 10px;
    text-align: left;
    color: var(--darkGray);
    font-size: 12px;
  }
}
</style>
