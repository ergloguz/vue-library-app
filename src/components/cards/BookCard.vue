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
            <button  :class=" inStore ? 'base-button-btn' : 'base-button-btn'">
              <a>{{inStore ? "In Store" : "At User"}}</a>
            </button>
           <button  type="button"  data-toggle="modal" data-target="#staticBackdrop" class="base-button-btn">DELETE</button>

            <div
                class="modal fade " id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content  custom-modal">
                  <div class="mb-4 custom-modal-header">
                    <a class="custom-modal-header-alert">Are you sure you want to delete ?</a>
                    <a class="custom-modal-header-book">{{bookName}}</a>
                  </div>
                  <div class="row mx-auto pb-3 ">
                    <button class="custom-modal-close" data-dismiss="modal"><a>Close</a></button>
                    <button data-dismiss="modal" @click="bookDelete" class="custom-modal-delete"><a>Delete</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name:"BookCard",

  props:["index","bookImage","bookName","bookAuthor"],

  computed:{
    bookList(){
      return this.$store.state.bookList;
    },
  },
  methods:{
    bookDelete(data){
      this.$store.commit('DELETE_BOOK',data)
    }
  },
  data(){
    return {
      inStore: true
    }
  },
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
.custom-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  background-color: #1b262c;
  &-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    &-alert {
      color: white;
      font-size: 28px;
    }
    &-book{
      font-size: 22px;
      color: #2DCAD2;
    }

  }
  &-delete{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131B23;
    height: 50px;
    width: 100px;
    margin-left: 20px;
    color: white;
    font-size: 22px;
    &:hover{
      background-color: #2dcad2;
      color: #1b262c;
    }
  }
  &-close {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131B23;
    height: 50px;
    width: 100px;
    color: white;
    font-size: 22px;
    &:hover{
      background-color: #2dcad2;
      color: #1b262c;
    }
  }
}


</style>