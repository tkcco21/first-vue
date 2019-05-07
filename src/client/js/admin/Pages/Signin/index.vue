<template lang="html">
  <div class="form-signin">
    <div class="form-signin-content">
      <atoms-input
        placeholder="ユーザー名"
        name="username"
        input-type="text"
      />
    </div>

    <div class="form-signin-content">
      <atoms-input
        placeholder="パスワード"
        name="password"
        input-type="password"
      />
    </div>

    <div class="form-signin-foot">
      <atoms-button
        name="signinButton"
        button-type="button"
      >
        サインイン
      </atoms-button>
    </div>
  </div>
</template>

<script>
import { Button, Input } from '@Admin/components/atoms';

export default {
  components: {
    atomsInput: Input,
    atomsButton: Button,
  },
};
</script>

<style lang="scss" scoped>
.form-signin {
  margin: 20% auto 0;
  width: 50%;
  min-width: 300px;
  &-content {
    & + & {
      margin-top: 20px;
    }
  }
  &-foot {
    margin-top: 40px;
    text-align: center;
  }
}
</style>
