<template lang="html">
  <div class="select-wrapper">
    <select
      :class="classes"
      :name="name"
      :value="value"
      @change="handleChange"
    >
      <option value="">--- {{ suffix }}</option>
      <option
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}{{ suffix }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Name',
    },
    value: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '個',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    classes() {
      return {
        select: true,
      };
    },
  },
  methods: {
    handleChange($event) {
      this.$emit('updateValue', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  padding: 2px 25px 2px 10px;
  font-size: 14px;
  line-height: 1.4;
  background-color: $superLightGray;
}

.select-wrapper {
  display: inline-block;
  position: relative;
  border-radius: 5px;
  border: 1px solid #ccc;
  overflow: hidden;
  &:before {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 5px;
    height: 5px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: translateY(-50%) rotate(45deg);
    content: '';
    z-index: 2;
    pointer-events: none;
  }
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 100%;
    background-color: $keycolor;
    content: '';
    z-index: 1;
    pointer-events: none;
  }
}
</style>
