<template>
    <b-nav>
        <b-nav-item>
            <router-link to="/">Home</router-link>
        </b-nav-item>

        <b-nav-item v-if="!isLoggedIn">
            <router-link to="/login">Log in</router-link>
        </b-nav-item>

        <b-nav-item v-if="isLoggedIn">
            <b-link @click="handleLogOut">Log out</b-link>
        </b-nav-item>
    </b-nav>
</template>

<script>
  import { isLoggedIn, onLogout } from '../vue-apollo';

  export default {
    data(){
      return {
        isLoggedIn: false
      }
    },
    async mounted() {
      this.isLoggedIn = await isLoggedIn();
      console.log(await isLoggedIn());
    },
    methods: {
      async handleLogOut(e) {
        e.preventDefault();
        await onLogout(this.$apollo);
        this.$router.push({ name: 'Login' });
      },
    },
  };
</script>
