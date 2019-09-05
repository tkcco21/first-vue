<template lang="html">
  <div>
    <div
      v-for="(yearly, yearIndex) in bookList"
      :key="yearIndex"
      class="book-list"
    >
      <template v-for="(everyBooks, year, everyBooksIndex) in yearly">
        <div :key="`year${year}`" class="book-list__year">
          <p class="book-list__year__text">{{ year }}年</p>
          <!--
            // TODO: 冊数入れたいな
          -->
          <!-- <span>{{ }}冊</span> -->
        </div>

        <ul :key="`year${everyBooksIndex}`" class="book-list__month">
          <template v-for="monthly in everyBooks">
            <li
              v-for="(monthlyBooks, month) in monthly"
              :key="`month${month}`"
            >
              <p class="book-list__month__title">
                {{ month }}月
                <span>{{ monthlyBooks.count }} 冊</span>
              </p>
              <ul class="book-list__month__books">
                <li
                  v-for="book in monthlyBooks.books"
                  :key="book.id"
                >
                  <app-card :item="book" detail="books" />
                </li>
              </ul>
            </li>
          </template>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import { Card } from '@Public/components/Molecules';

export default {
  components: {
    appCard: Card,
  },
  props: {
    bookList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.book-list {
  margin-top: 20px;
  & > li {
    margin-top: 30px;
    &:first-child {
      margin-top: 0;
    }
  }
}
.book-list__year {
  padding: 10px;
  line-height: 1.2;
  border-left: 8px solid color(var(--keycolor) a(80%));
  border-bottom: 2px solid color(var(--keycolor) a(80%));
  background-color: var(--superLightGray);
  &__text {
    font-size: 26px;
    @mixin tab {
      font-size: 20px;
    }
    @mixin mobile {
      font-size: 20px;
    }
  }
}

.book-list__month {
  margin-top: 15px;
  @mixin tab {
    margin-top: 2%;
  }
  @mixin mobile {
    margin-top: 2%;
  }
  & > li {
    margin-top: 10px;
    padding: 0 2%;
    &:first-child {
      margin-top: 0;
    }
    @mixin tab {
      margin-top: 2%;
    }
    @mixin mobile {
      margin-top: 2%;
    }
  }
  &__title {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    font-size: 20px;
    border-bottom: 2px solid var(--gray);
    background-color: var(--lightGray);
    @mixin tab {
      font-size: 17px;
    }
    @mixin mobile {
      font-size: 17px;
    }
  }
}
.book-list__month__books {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  margin-top: 10px;
  @mixin tab {
    margin-top: 2%;
  }
  @mixin mobile {
    margin-top: 2%;
  }
  & > li {
    @mixin pc {
      margin-top: 1.2%;
      margin-left: 1.2%;
      width: 24.1%;
      &:nth-child(-n+4) {
        margin-top: 0;
      }
      &:nth-child(4n+1) {
        margin-left: 0;
      }
    }
    @mixin tab {
      margin-top: 1.2%;
      margin-left: 1.2%;
      width: 24.1%;
      &:nth-child(-n+4) {
        margin-top: 0;
      }
      &:nth-child(4n+1) {
        margin-left: 0;
      }
    }
    @mixin mobile {
      margin-top: 1.4%;
      margin-left: 1.4%;
      width: 32.4%;
      &:nth-child(-n+3) {
        margin-top: 0;
      }
      &:nth-child(3n+1) {
        margin-left: 0;
      }
    }
  }
}
</style>
