<template lang="html">
  <v-form class="form-signin" @submit.prevent="signin">
    <v-text-field
      v-model="username"
      v-validate="'required'"
      data-vv-name="ユーザー名"
      :error-messages="errors.collect('ユーザー名')"
      label="ユーザー名"
      name="username"
      type="text"
      color="green"
    />
    <v-text-field
      v-model="password"
      v-validate="'required'"
      data-vv-name="パスワード"
      :error-messages="errors.collect('パスワード')"
      label="パスワード"
      name="password"
      type="password"
      color="green"
    />

    <div class="form-signin-foot">
      <v-btn
        color="success"
        type="submit"
        block
        depressed
      >
        サインイン
      </v-btn>
    </div>

    <v-alert
      v-if="errorMessage"
      :value="true"
      type="error"
    >
      {{ errorMessage }}
    </v-alert>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    errorMessage() {
      return this.$store.state.auth.errorMessage;
    },
  },
  methods: {
    signin() {
      this.$store.dispatch('clearMessage');
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$store.dispatch('signin', {
            username: this.username,
            password: this.password,
          });
          this.$validator.reset();
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
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
