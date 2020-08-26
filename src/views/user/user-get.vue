<template>
  <div class="home">
    <GetUserForm/>
  </div>
</template>

<script>

import GetUserForm from "@/components/forms/user-get-form";

export default {
  name: 'GetUser',
  components: {
    GetUserForm
  },
}
</script>
