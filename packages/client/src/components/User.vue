<template>
    <b-row>
        <b-col>
            <b-icon v-if="$apollo.queries.user.loading" icon="arrow-clockwise" animation="spin-pulse"
                    font-scale="4"></b-icon>

            <div v-if="!$apollo.queries.user.loading">
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img :src="user.avatar" alt="Image" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body :title="user.first_name + user.last_name">
                                <b-card-text>
                                    This is a wider card with supporting text as a natural lead-in to additional
                                    content.
                                    This content is a little bit longer.
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </div>
        </b-col>
    </b-row>
</template>

<script>
  import USER from '../graphql/user.graphql';

  export default {
    props: ['id'],

    data() {
      return {
        user: {},
      };
    },

    apollo: {
      user: {
        query: USER,

        variables() {
          return {
            id: +this.id,
          };
        },

        error(error) {
          if (error.message.includes('wrong user id')) {
            this.$router.push({ name: 'Home' });
          }
        },

        update({ user }) {
          return user;
        },
      },
    },
  };
</script>

<style>
</style>
