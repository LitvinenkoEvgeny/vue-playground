<template>
    <b-row>
        <div v-if="$apollo.queries.getUsers.loading">Loading</div>
        <b-table striped hover :items="users"></b-table>
        <b-button v-if="!$apollo.queries.getUsers.loading" @click="prevPage">prev page</b-button>
        <b-button v-if="!$apollo.queries.getUsers.loading" @click="nextPage">next page</b-button>
    </b-row>
</template>

<script>
  import USERS_QUERY from '../graphql/users.graphql';

  export default {
    apollo: {
      getUsers: {
        query: USERS_QUERY,

        variables() {
          return {
            page: this.page,
          };
        },

        update(data){
          this.users = data.users
        }
      },
    },
    data() {
      return {
        page: 1,
        users: []
      };
    },

    methods: {
      prevPage(){
        if(this.page - 1 !== 0){
          this.page = this.page - 1;
        }
      },

      nextPage(){
        this.page = this.page + 1;
      }
    }
  };
</script>
