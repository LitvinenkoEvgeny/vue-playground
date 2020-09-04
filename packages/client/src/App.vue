<template>
    <div id="app">
        <navbar></navbar>

        <b-container>
            <router-view/>
        </b-container>
    </div>
</template>

<script>
  // @ is an alias to /src
  import navbar from '@/components/navbar';

  export default {
    name: 'App',
    components: {
      navbar,
    },
  };
</script>
