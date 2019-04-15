<template lang="html">
  <div class="signin">
    <h1 class="signin-title">ログイン</h1>
    <InputText
      class-name="signin-input"
      label="ユーザー名"
      name="username"
      inputType="text"
    />
    <InputText
      class-name="signin-input"
      label="パスワード"
      name="password"
      inputType="password"
    />
  </div>
</template>

<script>
import InputText from '@Admin/components/Form/InputText';

export default {
  components: {
    InputText,
  },
};
</script>

<style lang="scss" scoped>
</style>
