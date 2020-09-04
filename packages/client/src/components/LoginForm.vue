<template>
    <b-row>
        <b-col align-self="center">
            <b-form @submit="checkForm">
                <b-form-group label="Login">
                    <b-form-input v-model="login" type="text" required>
                    </b-form-input>
                </b-form-group>

                <b-form-group label="Password">
                    <b-form-input v-model="password" type="password" required>
                    </b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
            <ul v-if="errors.length">
                <li v-for="error in errors" :key="error">{{error}}</li>
            </ul>
        </b-col>
    </b-row>
</template>

<script>
  import LOGIN_MUTATION from '../graphql/login.graphql';
  import { onLogin } from '../vue-apollo';

  export default {
    data() {
      return {
        errors: [],
        login: 'eve.holt@reqres.in',
        password: 'citysliscka',
      };
    },

    methods: {
      async checkForm(e) {
        e.preventDefault();
        if (!this.login) {
          this.errors.push('Введите логин');
        }

        if (!this.password) {
          this.errors.push('Введите пароль');
        }

        if (!this.errors.length) {
          await this.handleLogin();
        }

      },

      async handleLogin() {
        const { data: { login: { token } } } = await this.$apollo.mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            loginInput: {
              email: this.login,
              password: this.password,
            },
          },
        });

        if (token) {
          onLogin(this.$apollo, token);
          this.$router.push({ name: 'Home' });
        }
      },
    },
  };

</script>

<style scoped>
</style>
