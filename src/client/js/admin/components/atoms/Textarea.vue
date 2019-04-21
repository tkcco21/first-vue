<template lang="html">
  <div class="textarea">
    <p class="textarea-label">{{ label }}</p>
    <textarea
      :class="['textarea-textarea', className]"
      :name="name"
      value=""
      rows="8"
      cols="80"
      :placeholder="placeholder"
      :value="inputValue"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    className: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'Name',
    },
    placeholder: {
      type: String,
      default: '',
    },
    inputValue: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue($event) {
      this.$emit('updateValue', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  &-label {
    font-size: 18px;
  }
  &-textarea {
    padding: 10px;
    width: 100%;
    font-size: 18px;
  }
}

.books-textarea {
  border: 1px solid #ccc;
  transition: all .5s;
  background-color: #f8f8f8;
  &:focus {
    border-color: #00a381;
  }
}
</style>
