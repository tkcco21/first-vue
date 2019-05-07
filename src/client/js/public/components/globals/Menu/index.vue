<template lang="html">
  <div class="menu">
    <mole-menu-list />
  </div>
</template>

<script>
import MenuList from '@Public/components/molecules';

export default {
  components: {
    moleMenuList: MenuList,
  },
};
</script>

<style lang="scss" scoped>
.menu {
  margin: 0 auto;
  padding: 0 20px;
  max-width: $publicMaxWidth;
}
</style>
