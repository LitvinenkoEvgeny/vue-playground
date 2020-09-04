<template>
    <b-row align-h="center" align-v="center">
        <b-icon v-if="$apollo.queries.getUsers.loading" icon="arrow-clockwise" animation="spin-pulse"
                font-scale="4"></b-icon>


        <b-col md="12" v-if="!$apollo.queries.getUsers.loading">

            <b-pagination
                    v-model="page"
                    :total-rows="totalPages"
                    :per-page="1"
                    aria-controls="my-table"
                    class="align-self-center"
            ></b-pagination>

            <b-card-group columns>
                <b-card
                        v-for="user in users"
                        :key="user.id"
                        :title="user.first_name + ' ' + user.last_name"
                        :img-src="user.image"
                        img-alt="User image"
                        img-top
                        tag="h3"
                        class="mb-2"
                >
                    <template v-slot:footer>
                        <b-card-text class="small d-flex justify-content-sm-between">
                            <b-icon @click="handleSelect(user)"  v-b-tooltip.hover title="View" icon="person-check" role="button"></b-icon>
                            <b-icon @click="handleEdit(user)" v-b-tooltip.hover title="Edit" icon="pencil-square" role="button"></b-icon>
                            <b-icon @click="handleRemove(user)" v-b-tooltip.hover title="Delete" icon="x"
                                    role="button"></b-icon>
                        </b-card-text>
                    </template>
                </b-card>
            </b-card-group>


        </b-col>
    </b-row>
</template>

<script>
  import USERS_QUERY from '../graphql/users.graphql';
  import DELETE_USER_MUTATION from '../graphql/delete.graphql';

  export default {
    apollo: {
      getUsers: {
        query: USERS_QUERY,

        variables() {
          return {
            page: this.page,
          };
        },

        update(data) {
          this.totalPages = data.users.total_pages;
          this.users = data.users.users;
        },
      },
    },

    data() {
      return {
        fieldsToShow: ['first_name', 'last_name', 'email'],
        page: 1,
        totalPages: null,
        users: [],
      };
    },

    methods: {
      handleEdit(user) {
        this.$router.push({name: 'edit', params: {id: user.id}})
      },

      handleSelect(user) {
        this.$router.push({name: 'view', params: {id: user.id}})
      },

      async handleRemove(user) {

        await this.$apollo.mutate({
          mutation: DELETE_USER_MUTATION,
          variables: {
            id: user.id,
          },
        });

        await this.$apollo.queries.getUsers.refetch();
      },
    },
  };
</script>
