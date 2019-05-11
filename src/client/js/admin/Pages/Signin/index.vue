<template lang="html">
  <div class="form-signin">
    <v-text-field label="ユーザー名" type="text" color="green" />
    <v-text-field label="パスワード" type="password" color="green" />
    <div class="form-signin-foot">
      <v-btn
        color="success"
        block
        depressed
      >
        サインイン
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.form-signin {
  margin: 20% auto 0;
  width: 50%;
  min-width: 300px;
  &-foot {
    margin-top: 40px;
    text-align: center;
  }
}
</style>
