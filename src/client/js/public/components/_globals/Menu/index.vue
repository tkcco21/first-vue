<template lang="html">
  <nav class="menu">
    <div class="menu__list">
      <transition name="slide">
        <menu-list v-show="isOpen" />
      </transition>
    </div>
    <a
      :class="['menu__button', isOpen ? 'active' : '']"
      @click.prevent="toggleMenu"
    >
      <template v-if="isOpen">
        <span>CLOSE MENU</span>
      </template>
      <template v-else>
        <span>OPEN MENU</span>
      </template>
    </a>
  </nav>
</template>

<script>
import List from './List';

export default {
  components: {
    MenuList: List,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="css" scoped>
.menu {
  margin: 0 auto;
  padding: 0 20px;
  max-width: var(--publicMaxWidth);
  text-align: right;
  &__list {
    overflow: hidden;
    position: relative;
    padding-top: 31px;
    border-bottom: 1px solid var(--keycolor);
    .slide-enter, .slide-leave-to {
      top: 31px;
    }
    .slide-enter-active, .slide-leave-active {
      transition: top .5s;
    }
  }
  &__button {
    display: inline-block;
    padding: 2px 15px;
    color: var(--keycolor);
    color: #fff;
    font-weight: var(--black);
    font-size: 12px;
    background-color: var(--keycolor);
    cursor: pointer;
    transition: all .5s;
    &.active {
      background-color: $gray;
    }
  }
}
</style>
