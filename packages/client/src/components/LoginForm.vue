<template>
    <div>
        <b-form @submit="checkForm">
            <b-form-group>
                <b-form-input v-model="login" type="text" required>
                </b-form-input>
            </b-form-group>

            <b-form-group>
                <b-form-input v-model="password" type="password" required>
                </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        <ul v-if="errors.length">
            <li v-for="error in errors" :key="error">{{error}}</li>
        </ul>
    </div>
</template>

<script>
  import LOGIN_MUTATION from '../graphql/login.graphql';

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
        const data = await this.$apollo.mutate({
          mutation: LOGIN_MUTATION,
          variables: {
            loginInput: {
              email: this.login,
              password: this.password,
            },
          },
        });

        console.log(data);
      },
    },
  };

</script>

<style scoped>
</style>
