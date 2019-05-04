<template lang="html">
  <div>
    <h1>First Vue Public Home</h1>
    <app-components />
  </div>
</template>

<script>
import App from '@Public/components/App';

export default {
  components: {
    appComponents: App,
  },
};
</script>

<style lang="scss" scoped>
</style>
