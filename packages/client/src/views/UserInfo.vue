<template>
    <User :id="id"></User>
</template>

<script>
  // @ is an alias to /src
  import User from '@/components/User';

  export default {
    name: 'UserInfo',
    props: ['id'],
    components: {
      User
    }
  };
</script>
