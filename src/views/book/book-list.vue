<template>
  <div class="container">

    <div class="container" v-if="!bookList.length">
      <div class="table mx-auto">
        <IconNo/>
        <a class="table-alert">Oops! Your List is Empty</a>

        <router-link to="/book-add">
          <button class="table-button">
            <a>Add Now</a>
          </button>
        </router-link>

      </div>

    </div>

    <BookCard
        v-else
        v-for="book in bookList"
        :index="book.index"
        :bookName="book.bookName"
        :bookAuthor="book.bookAuthor"
        :bookImage="book.bookImage"
    />

    <div  class="fixed-bottom justify-content-center pagination">
      <jw-pagination
          :items="getBookList"
          :pageSize="3"
          maxPage="10"
          @changePage="onChangePage">
      </jw-pagination>
    </div>
  </div>
</template>

<script>

import BookCard from "@/components/cards/BookCard";
import Footer from "@/components/generals/Footer";
import IconNo from "@/icons/No.svg";

export default {
  name:"BookList",
  components: { Footer, BookCard,IconNo },


  data() {
    return {
      bookList:[],
    }
  },
  computed: {
    getBookList() {
      return this.$store.getters.getBookList;
    },
  },
  methods: {
    onChangePage(bookList) {
      this.bookList = bookList;
    },
  }
}
</script>

<style scoped>
.container {
  align-items: center;
  margin-top: 20px;
}
.pagination {
  margin-bottom: 20px;
}
.table {
  margin-top: 20px;
  display: flex;
  border-radius: 2px;
  background-color: #131b23;
  min-height: 500px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  padding-bottom: 20px;
  &-button {
    height: 50px;
    width: 200px;
    background-color: #1b262c;
    color: #2DCAD2;
    font-size: 22px;
    margin-top: 50px;

    &:hover {
      background-color: #2DCAD2;
      color: #1b262c;
      cursor: pointer;
    }

  }
  &-alert {
    margin-top: 20px;
    color: #2dcad2;
    font-size: 32px;

  }
}
</style>