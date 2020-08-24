<template>
  <div class="home">
    <GetUserForm/>
    <UserCard/>
  </div>
</template>

<script>

import GetUserForm from "@/components/GetUserForm";
import UserCard from "@/components/UserCard";

export default {
  name: 'GetUser',
  components: {
    UserCard,
    GetUserForm
  }
}
</script>
