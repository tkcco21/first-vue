<template>
  <li>
    <template v-for="(yearlyBooks, year) in yearly">
      <div :key="`year${year}`" class="year">
        <app-text tag="p" :text="`${year}年`" font-l />
        <app-button
          type="button"
          :text="`読んだ本を${ shownYearArray.includes(year) ? '非表示' : '表示' }`"
          font-s
          key-color
          bg-white
          round-m
          padding-s
          :class="[shownYearArray.includes(year) && 'is-show', 'year__button']"
          @click="$emit('toggleCount', year)"
        />
      </div>

      <transition
        :key="`show${year}`"
        name="slide"
      >
        <component
          :is="shownYearArray.includes(year) ? 'app-monthly' : 'app-yearly-count'"
          :books-count="yearlyBooksCount[year]"
          :yearly-books="yearlyBooks"
          @toggleCount="$emit('toggleCount', year)"
        />
      </transition>
      <app-button
        v-if="shownYearArray.includes(year)"
        :key="`hide${year}`"
        type="button"
        text="読んだ本を非表示"
        font-s
        key-color
        underline
        @click="$emit('toggleCount', year)"
      />
    </template>
  </li>
</template>

<script>
import { Button, Text } from '@Public/components/Atoms';
import Monthly from './Monthly';
import YearlyCount from './YearlyCount';

export default {
  components: {
    appMonthly: Monthly,
    appYearlyCount: YearlyCount,
    appButton: Button,
    appText: Text,
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  line-height: 1.2;
  border-left: 8px solid color(var(--keyColor) a(80%));
  border-bottom: 2px solid color(var(--keyColor) a(80%));
  background-color: var(--superLightGray);
}
.slide-enter-active, .slide-leave-active {
  transition: height 1s ease;
}
</style>
