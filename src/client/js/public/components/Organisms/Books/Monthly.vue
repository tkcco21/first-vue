<template>
  <ul class="month">
    <template v-for="monthly in yearlyBooks">
      <li
        v-for="(monthlyBooks, month) in monthly"
        :key="`month${month}`"
      >
        <p class="month__heading">
          {{ month }}月
          <span>{{ monthlyBooks.count }} 冊</span>
        </p>
        <ul class="month__books">
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

<script>
import { Card } from '@Public/components/Molecules';

export default {
  components: { appCard: Card },
  props: {
    yearlyBooks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.month {
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
}

.month__heading {
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

.month__books {
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
