<template lang="html">
  <div>
    <component
      :is="tag"
      :class="[ className || defaultClass]"
    >
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    tag() {
      return `h${this.level}`;
    },
    defaultClass() {
      switch (this.level) {
        case 1:
          return 'heading-primary';
        case 2:
          return 'heading-secondary';
        case 3:
          return 'heading-tertiary';
        case 4:
          return 'heading-quaternary';
        case 5:
          return 'heading-quinary';
        case 6:
          return 'heading-senary';
        default:
          return 'invalid-level';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.heading-primary {
  padding: 5px 15px;
  font-size: 26px;
  background-color: #efefef;
  border-left: 5px solid $keycolor;
}
.heading-secondary {
  padding: 5px 20px;
  font-size: 24px;
  border-bottom: 3px solid $keycolor;
}
.heading-tertiary {
  padding: 5px 30px;
  font-size: 22px;
  position: relative;
  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #ccc;
    border-right: 2px solid #ccc;
    transform: translateY(-50%) rotate(-45deg);
    content: "";
  }
}
.heading-quaternary {}
.heading-quinary {}
.heading-senary {}

.sidebar__title {
  color: #fff;
  font-size: 24px;
  text-align: center;
}
</style>
