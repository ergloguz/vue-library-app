<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>


<script>

import Header from "@/components/generals/Header";

export default {
  name:"App",
  components: {Header},

}

</script>