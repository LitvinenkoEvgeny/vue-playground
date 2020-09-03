<template>
  <UsersTable />
</template>

<script>
// @ is an alias to /src
import UsersTable from '@/components/UsersTable';

export default {
  name: 'Home',
  components: {
    UsersTable
  }
}
</script>
