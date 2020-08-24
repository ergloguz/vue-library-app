<template>
  <div class="container">
        <div class=" base row">
          <!-- IMAGE -->
          <div class="col ">
            <img class="base-image" :src="bookImage" alt="">
          </div>
          <!-- INFOS -->
          <div class="col base-book">
            <a class="base-book-bookName">{{bookName}}</a>
            <a class="base-book-bookAuthor" >{{bookAuthor}}</a>
          </div>
          <!-- ACTIONS-->
          <div class="col base-button">
            <!--:class="colorArray[status]" button color-->
            <button  class="base-button-btn">STATUS</button>
           <!--<button  @click="deleteBook"class="base-button-btn">DELETE</button>-->
          </div>
        </div>

  </div>
</template>

<script>
export default {
  name:"BookCard",
  props:["index","bookImage","bookName","bookAuthor","bookStatus"],

  data(){
    return {
      colorArray: ["bg-danger","bg-primary"]
    }
  },
  /*methods: {
    deleteBook() {
      this.$router.push({
        name: 'BookList',
        params: {
          id: this.index,
          addBookFormData: {
            index: this.index,
            bookName: this.bookName,
            bookAuthor: this.bookAuthor,
            bookStatus: this.bookStatus,
          }
        }
      })
    }
  },*/
}
</script>

<style scoped>
.base {
  display: flex;
  background-color: #131B23;
  height: 150px;
  align-items: center;
  &-image{
    height: 120px;
    width: 90px;
  }
  &-book {
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin-left: 20px;
    &-bookName{
      color: white;
    }
    &-bookAuthor {
      color: #2DCAD2;
    }
  }
  &-button {
    display:flex;
    flex-direction: column;

    &-btn {
      background-color: #1b262c;
      color: #2dcad2;
      margin-top: 10px;
      min-width: 150px;
      min-height: 50px;
      margin-left: auto;
      font-family: saira;
      &:hover{
        background-color: #2dcad2;
        color: #1b262c;

      }
    }
  }

}
</style>