<template>
  <div class="container">
    <SetUserForm  @onSubmit="saveUserInfo"/>
  </div>
</template>

<script>
import SetUserForm from "@/components/forms/SetUserForm";
export default {
  name:"SetUser",
  components: { SetUserForm },
  data() {
    return {
      userList:[],
    }
  },
  methods: {
    saveUserInfo(data) {
      this.$store.commit('setNewUser', data);
      this.$bvToast.toast(`${data.userName}`, {
        title: 'Book has been setted',
        autoHideDelay: 2000,
      });
      setTimeout( () => this.$router.push({ path: '/'}), 2200);
    },

  }
}
</script>

<style scoped>

</style>