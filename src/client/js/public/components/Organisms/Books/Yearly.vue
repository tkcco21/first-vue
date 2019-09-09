<template>
  <li>
    <template v-for="(yearlyBooks, year, yearlyBooksIndex) in yearly">
      <div :key="`year${year}`" class="year">
        <p class="year__heading">
          {{ year }}年
          <template v-if="shownYearArray.includes(year)">
            <button @click="$emit('toggleCount', year)">本を非表示にする</button>
          </template>
        </p>

        <template v-if="shownYearArray.includes(year)">
          <span class="year__count">{{ yearlyBooksCount[year] }}冊</span>
        </template>
      </div>

      <template v-if="shownYearArray.includes(year)">
        <app-monthly
          :key="`year${yearlyBooksIndex}`"
          :yearly-books="yearlyBooks"
        />
      </template>
      <template v-else>
        <app-yearly-count
          :key="`year${yearlyBooksIndex}`"
          :year="year"
          :books-count="yearlyBooksCount[year]"
          @toggleCount="$emit('toggleCount', year)"
        />
      </template>
    </template>
  </li>
</template>

<script>
import Monthly from './Monthly';
import YearlyCount from './YearlyCount';

export default {
  components: {
    appMonthly: Monthly,
    appYearlyCount: YearlyCount,
  },
  props: {
    yearly: {
      type: Object,
      required: true,
    },
    yearlyBooksCount: {
      type: Object,
      required: true,
    },
    shownYearArray: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.year {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  line-height: 1.2;
  border-left: 8px solid color(var(--keycolor) a(80%));
  border-bottom: 2px solid color(var(--keycolor) a(80%));
  background-color: var(--superLightGray);
  &__heading {
    font-size: 26px;
    @mixin tab {
      font-size: 20px;
    }
    @mixin mobile {
      font-size: 20px;
    }
  }
  &__count {
    font-size: 16px;
    @mixin tab {
      font-size: 14px;
    }
    @mixin mobile {
      font-size: 14px;
    }
  }
}
</style>
