<template>
  <ul class="month">
    <template v-for="monthly in yearlyBooks">
      <li
        v-for="(monthlyBooks, month) in monthly"
        :key="`month${month}`"
      >
        <div class="month__heading">
          <app-text tag="p" :text="`${month}月`" font-m />
          <app-text tag="p" :text="`${monthlyBooks.count}冊`" font-s />
        </div>
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
import { Text } from '@Public/components/Atoms';
import { Card } from '@Public/components/Molecules';

export default {
  components: {
    appText: Text,
    appCard: Card,
  },
  inheritAttrs: false,
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
  padding: 15px;
  border: solid 1px var(--lightGray);
  border-top: none;
  background-color: var(--superLightGray);
  @mixin tab {
    padding: 2%;
  }
  @mixin mobile {
    padding: 2%;
  }
  & > li {
    margin-top: 10px;
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
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-bottom: 2px solid var(--gray);
  background-color: var(--lightGray);
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
