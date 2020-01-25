<template>
  <v-form class="form-signin" @submit.prevent="signin">
    <v-text-field
      v-validate="'required'"
      data-vv-name="ユーザー名"
      :error-messages="errors.collect('ユーザー名')"
      label="ユーザー名"
      name="username"
      type="text"
      color="green"
      :value="username"
      @input="updateValue($event, 'username')"
    />
    <v-text-field
      v-validate="'required'"
      data-vv-name="パスワード"
      :error-messages="errors.collect('パスワード')"
      label="パスワード"
      name="password"
      type="password"
      color="green"
      :value="password"
      @input="updateValue($event, 'password')"
    />

    <div class="form-signin-foot">
      <v-btn
        color="success"
        type="submit"
        block
        depressed
        :disabled="loading"
      >
        {{ loading ? 'サインイン中' : 'サインイン' }}
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
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      default: '',
    },
    password: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateValue(value, name) {
      this.$emit('updateValue', { value, name });
    },
    signin() {
      this.$emit('clearMessage');

      this.$validator.validate().then(valid => {
        if (valid) {
          this.$emit('applySignin');
          this.$emit('signin', {
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

<style lang="postcss" scoped>
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
