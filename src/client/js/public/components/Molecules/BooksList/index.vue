<template lang="html">
  <div class="books-inner">
    <div
      v-for="(yearly, yearIndex) in books"
      :key="yearIndex"
      class="books-list"
    >
      <template v-for="(everyBooks, year, everyBooksIndex) in yearly">
        <div :key="year" class="books-list__year">
          <h3 class="books-list__year__text">{{ year }}年</h3>
          <!--
            // TODO: 冊数入れたいな
          -->
          <!-- <span>{{ }}冊</span> -->
        </div>

        <ul :key="everyBooksIndex" class="books-list__month">
          <li
            v-for="(monthlyBooks, month, monthIndex) in everyBooks"
            :key="monthIndex"
          >
            <h4 class="books-list__month__title">{{ month }}月</h4>
            <ul class="books-list__month__books">
              <li
                v-for="book in monthlyBooks"
                :key="book.id"
              >
                <div class="book-card">
                  <p
                    class="book-card__link"
                    v-html="sanitizeHtml(book.itemUrl, {
                      allowedTags: ['a', 'img']
                    })"
                  />
                  <h5 class="book-card__title">{{ book.title }}</h5>
                  <p class="book-card__desc">{{ book.description }}</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import sanitizeHtml from 'sanitize-html';

export default {
  props: {
    books: {
      type: Array,
      default: () => [],
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
  border-left: 8px solid color(var(--keycolor) a(70%));
  border-bottom: 1px solid color(var(--keycolor) a(70%));
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
    border-bottom: 1px solid var(--gray);
    background-color: var(--superLightGray);
    @mixin tab {
      font-size: 17px;
    }
    @mixin mobile {
      font-size: 17px;
    }
  }
  &__books {
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
  &__desc {
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
