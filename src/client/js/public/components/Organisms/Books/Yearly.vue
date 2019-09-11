<template>
  <li>
    <template v-for="(yearlyBooks, year) in yearly">
      <div :key="`year${year}`" class="year">
        <p class="year__heading">{{ year }}年</p>
      </div>

      <app-yearly-count
        :key="`hide${year}`"
        :year="year"
        :books-count="yearlyBooksCount[year]"
        :show="shownYearArray.includes(year)"
        @toggleCount="$emit('toggleCount', year)"
      />

      <transition
        :key="`show${year}`"
        name="slide"
        @enter="enter"
        @leave="leave"
        @before-enter="beforeEnter"
        @before-leave="beforeLeave"
      >
        <app-monthly
          v-show="shownYearArray.includes(year)"
          :yearly-books="yearlyBooks"
          :style="{ height: `${height}px` }"
        />
      </transition>
    </template>
  </li>
</template>

<script>
// import { Text } from '@Public/components/Atoms';
import Monthly from './Monthly';
import YearlyCount from './YearlyCount';

export default {
  components: {
    appMonthly: Monthly,
    appYearlyCount: YearlyCount,
    // appText: Text,
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
  data() {
    return {
      height: 0,
    };
  },
  methods: {
    beforeEnter() {
      this.height = 0;
    },
    enter(el) {
      this.height = el.scrollHeight;
    },
    beforeLeave(el) {
      this.height = el.scrollHeight;
    },
    leave() {
      this.height = 0;
    },
  },
};
</script>

<style lang="postcss" scoped>
.year {
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
}
.slide-enter-active, .slide-leave-active {
  transition: height .5s;
}
</style>
