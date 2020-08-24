<template>
  <div class="container">
      <BookCard/>
  </div>
</template>

<script>
import BookCard from "@/components/BookCard";
export default {
  name:"BookList",
  components: {BookCard}
}
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>