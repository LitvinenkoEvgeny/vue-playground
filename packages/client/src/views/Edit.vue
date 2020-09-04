<template>
    <EditUser :id="id"></EditUser>
</template>

<script>
  // @ is an alias to /src
  import EditUser from '@/components/User.edit';

  export default {
    name: 'Edit',
    props: ['id'],
    components: {
      EditUser,
    },
  };
</script>
