<template lang="html">
  <signin-form
    :loading="loading"
    :error-message="errorMessage"
    :username="username"
    :password="password"
    @updateValue="updateValue"
    @clearMessage="clearMessage"
    @applySignin="applySignin"
    @signin="signin"
  />
</template>

<script>
import { SigninForm } from '@Admin/components/Molecules';

export default {
  components: { SigninForm },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    loading() {
      return this.$store.state.auth.loading;
    },
    token() {
      return this.$store.state.auth.token;
    },
    errorMessage() {
      return this.$store.state.auth.errorMessage;
    },
  },
  watch: {
    token() {
      this.$router.push(this.$route.query.redirect || '/admin');
    },
  },
  methods: {
    updateValue(target) {
      this[target.name] = target.value;
    },
    clearMessage() {
      this.$store.dispatch('clearMessage');
    },
    applySignin() {
      this.$store.dispatch('applySignin');
    },
    signin(auth) {
      this.$store.dispatch('signin', auth);
    },
  },
};
</script>
