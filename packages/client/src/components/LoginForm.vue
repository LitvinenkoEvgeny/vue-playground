<template>
    <div>
        <form
                @submit="checkForm"
        >

            <label>
                Login: <input type="text" v-model="login">
            </label>

            <label>
                Password: <input type="text" v-model="password">
            </label>

            <button type="submit">Submit</button>

        </form>

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
