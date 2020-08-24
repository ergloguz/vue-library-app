<template>
  <div class="home">
    <GetUserForm/>
    <UserCard/>
  </div>
</template>

<script>

import GetUserForm from "@/components/forms/GetUserForm";
import UserCard from "@/components/cards/UserCard";

export default {
  name: 'GetUser',
  components: {
    UserCard,
    GetUserForm
  }
}
</script>
