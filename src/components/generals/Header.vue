<template>
  <nav class="navbar custom">
    <a class="title" >ALEXANDRIA LIBRARY</a>

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
    margin-left: 20px;
  }
}
</style>