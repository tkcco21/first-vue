<template lang="html">
  <div class="books-inner">
    <div
      v-for="(yearly, yearIndex) in bookList"
      :key="yearIndex"
      class="books-list"
    >
      <template v-for="(everyBooks, year, everyBooksIndex) in yearly">
        <div :key="`year${year}`" class="books-list__year">
          <h3 class="books-list__year__text">{{ year }}年</h3>
          <!--
            // TODO: 冊数入れたいな
          -->
          <!-- <span>{{ }}冊</span> -->
        </div>

        <ul :key="`year${everyBooksIndex}`" class="books-list__month">
          <template v-for="monthly in everyBooks">
            <li
              v-for="(monthlyBooks, month) in monthly"
              :key="`month${month}`"
            >
              <h4 class="books-list__month__title">{{ month }}月</h4>
              <ul class="books-list__month__books">
                <li
                  v-for="book in monthlyBooks"
                  :key="book.id"
                >
                  <div class="book-card">
                    <div class="book-card__btn">
                      <app-link
                        text="Amazonのページ"
                        :to="book.itemUrl"
                        external
                        block
                        bg-second
                        white
                        small
                      />
                    </div>
                    <div class="book-card__btn">
                      <app-link
                        text="詳細"
                        :to="`/books/${book.id}`"
                        block
                        bg-key
                        white
                        small
                      />
                    </div>
                    <!-- TODO: ここのif文あとでなくす -->
                    <!-- TODO: pタグで囲うのもやめて、スタイルの調整もする -->
                    <template v-if="book.imageUrl">
                      <p class="book-card__link">
                        <a :href="book.itemUrl" target="_blank">
                          <img :src="book.imageUrl" :alt="book.title">
                        </a>
                      </p>
                    </template>
                    <template v-else>
                      <p
                        class="book-card__link"
                        v-html="sanitizeHtml(book.itemUrl, {
                          allowedTags: ['a', 'img']
                        })"
                      />
                    </template>
                    <h5 class="book-card__title">{{ book.title }}</h5>
                  </div>
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
import sanitizeHtml from 'sanitize-html';
import Link from '@Public/components/Atoms/Link';

export default {
  components: {
    appLink: Link,
  },
  props: {
    bookList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sanitizeHtml() {
      return sanitizeHtml;
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
}
.books-list__year {
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

.books-list__month {
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
.books-list__month__books {
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

.book-card {
  padding: 5%;
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 5px;
  border: 1px solid var(--lightGray);
  box-sizing: border-box;
  &__link {
    margin-top: 10px;
    font-size: 0;
  }
  &__title {
    margin-top: 10px;
    font-size: 16px;
    line-height: 1.4;
    text-align: left;
    @mixin tab {
      margin-top: 3%;
    }
    @mixin mobile {
      margin-top: 2%;
      font-size: 14px;
    }
  }
  /* &__desc {
    margin-top: 10px;
    text-align: left;
    color: var(--darkGray);
    font-size: 12px;
    @mixin tab {
      margin-top: 3%;
    }
    @mixin mobile {
      display: none;
    }
  } */
  &__btn {
    margin-top: 5px;
  }
}
</style>

<style lang="postcss">
.book-card__link {
  a {
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    @mixin pc {
      &:hover {
        img {
          box-shadow: 0 10px 7px 1px #aaa;
          transform: scale(1.03);
        }
      }
    }
    img {
      width: 70%;
      border: 1px solid var(--lightGray);
      transition: .5s;
      @mixin tab {
        width: 75%;
      }
      @mixin mobile {
        width: 80%;
      }
    }
  }
}
</style>
