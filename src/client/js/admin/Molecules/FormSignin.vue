<template lang="html">
  <div class="form-signin">
    <div class="form-signin-content">
      <atoms-input
        class-name="signin-input"
        label="ユーザー名"
        name="username"
        inputType="text"
      />
    </div>

    <div class="form-signin-content">
      <atoms-input
        class-name="signin-input"
        label="パスワード"
        name="password"
        inputType="password"
      />
    </div>

    <div class="form-signin-foot">
      <atoms-button
        class-name="signin-button"
        text="サインイン"
        name="signinButton"
        buttonType="button"
      />
    </div>
  </div>
</template>

<script>
import AtomsInput from '@Admin/Atoms/InputText';
import AtomsButton from '@Admin/Atoms/Button';

export default {
  components: {
    AtomsInput,
    AtomsButton,
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
