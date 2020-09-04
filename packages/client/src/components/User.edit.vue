<template>
    <b-row>
        <b-col>
            <div>
                <b-form @submit="handleSubmit" v-if="show">
                    <b-form-group
                            id="input-group-1"
                            label="Email address:"
                            label-for="input-1"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.email"
                                type="email"
                                placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                            id="input-group-2"
                            label="First name"
                            label-for="input-1"
                    >
                        <b-form-input
                                id="input-1"
                                v-model="form.first_name"
                                type="text"
                                placeholder="Enter email"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Your last name:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.last_name"
                                placeholder="Enter name"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-4" label="avatar URL:" label-for="input-2">
                        <b-form-input
                                id="input-2"
                                v-model="form.avatar"
                                placeholder="Enter name"
                        ></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </div>
        </b-col>
    </b-row>
</template>

<script>
  import CREATE_USER_MUTATION from '../graphql/createUser.graphql';

  export default {
    props: ['id'],

    data() {
      return {
        form: {
          email: '',
          first_name: '',
          last_name: '',
          avatar: '',
        },
        createdUser: {},
        show: true,
      };
    },

    methods: {
      async handleSubmit(e) {
        e.preventDefault();

        const { email, first_name, last_name, avatar } = this.form;


        const { data } = await this.$apollo.mutate({
          mutation: CREATE_USER_MUTATION,
          variables: {
            payload: {
              email,
              first_name,
              last_name,
              avatar,
            },
          },
        });

        this.makeToast(data.createUser);
      },

      makeToast() {
        this.toastCount++;
        this.$bvToast.toast(`Success`, {
          title: `User with id ${this.id} was updated`,
          autoHideDelay: 5000,
          appendToast: true,
        });
      },

    },

  };
</script>

<style>
</style>
