<template>
  <nav class="navbar custom">
    <a class="title" >
      <img src="@/assets/logo.png" width="30" height="30"  alt="" loading="lazy">
      Bootstrap
    </a>
    <router-link to="/">
      <a href="">Go Home</a>
    </router-link>

  </nav>
</template>

<script>
export default {
  name:"Header"
}
</script>

<style scoped>
.custom{
  background-color:#1B262C;
  &-title {
    font-size: 28px;
  }
}
</style>