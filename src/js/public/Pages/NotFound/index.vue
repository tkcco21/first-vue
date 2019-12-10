<template>
  <p>not found</p>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push('/');
  },
};
</script>
