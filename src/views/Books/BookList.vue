<template>
  <div class="container">
      <BookCard
          v-for="book in getBookList"
          :index="book.index"
          :bookName="book.bookName"
          :bookAuthor="book.bookAuthor"
          :bookImage="book.bookImage"
      />
  </div>
</template>

<script>
import BookCard from "@/components/cards/BookCard";
export default {
  name:"BookList",
  components: {BookCard},
  data() {
    return {
      bookList:[],
    }
  },
  computed: {
    getBookList() {
      return this.$store.getters.getBookList;
    },
  }
}
</script>

<style scoped>
.container {
  margin-top: 50px;
}
</style>