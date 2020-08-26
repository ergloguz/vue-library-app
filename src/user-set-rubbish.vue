<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }" >
      <form class="container" @submit.prevent="handleSubmit(submitForm)">

        <div class="table mx-auto" >
          <div class="table-head">
            <a class="table-head-day">SET TO USER</a>
          </div>

          <div class="group mt-4">
            <div class="form-group">
              <label class="group-label">Select a book</label>


              <select v-model="userFormModel.userBookName" class="form-control">
                <template v-for="book in getBookList">
                  <option >{{book.bookName}}</option>
                </template>
              </select>

            </div>
            <div class="form-group">
              <label class="group-label">Id Number</label>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input name="Id Number" v-model="userFormModel.userId" class="form-control custom">
                <a class="group-error">{{ errors[0] }}</a>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label class="group-label" >Name / Surname</label>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input v-model="userFormModel.userName" name="Name/ Surname" class="form-control" >
                <a class="group-error">{{ errors[0] }}</a>
              </ValidationProvider>
            </div>
            <div class="form-group">
              <label class="group-label">Adress</label>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <textarea name="Adress" v-model="userFormModel.userAdress" class="form-control" rows="3"></textarea>
                <a class="group-error">{{ errors[0] }}</a>
              </ValidationProvider>

            </div>
          </div>

          <button  type="submit"  class="table-button"><a>SET TO USER</a></button>

        </div>

      </form>
    </ValidationObserver>
  </div>
</template>


<script>


import { ValidationProvider, ValidationObserver } from 'vee-validate';


export default {
  name:"NewSetUser",
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  computed:{
    userList(){
      return this.$store.state.userList;
    }
  },

  data(){
    return{
      userFormModel:{
        userBookName:"",
        userId:"",
        userName:"",
        userAdress:"",
      }
    }
  },
  methods:{
    submitForm(){
      this.clearForm();

    },
    clearForm(){
      this.userFormModel = {
        userBookName: "",
        userAdress: "",
        userName: "",
        userId:"",
      }
    },
  },
  mounted(){
    if ( this.setUserFormData ) {
      this.userFormModel = this.setUserFormData;
    }
  },

}
</script>

<style scoped>
.table {
  margin-top: 20px;
  display: flex;
  border-radius: 2px;
  background-color: #131b23;
  min-height: 500px;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  padding-bottom: 20px;
  &-button {
    height: 50px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color:#1b262c;
    color:#2DCAD2;
    font-size: 22px;
    &:hover{
      background-color:#2DCAD2;
      color:#1b262c;
      cursor:pointer;
    }
  }
  &-head {
    display: flex;
    flex-direction: column;
    align-items: center;

    &-day {
      font-family: saira;
      font-size: 38px;
      color: white;
      margin-top: 20px;
      text-decoration: none;
    }

    &-degree {
      font-size: 120px;
      font-family: saira;
      color: #2dcad2;
      text-decoration: none;
    }

  }

  &-date {
    display: flex;
    flex-direction: row;

    &-day {
      font-family: saira;
      font-size: 38px;
      color: white;
      text-decoration: none;
    }
    &-month {
      text-decoration: none;
      color: white;
      font-size: 38px;
      font-family: saira;
    }
    &-year {
      text-decoration: none;
      color: white;
      font-size: 38px;
      font-family: saira;
      margin-top: 50px;
    }
  }
  &-country {
    text-decoration: none;
    color: white;
    font-size: 22px;
    font-family: saira;
  }
  &-status {
    font-size: 25px;
    font-family: saira;
    color: #2dcad2;
  }
}
.group {
  margin-top: auto;
  &-label{
    font-size: 22px;
    font-family: saira;
    color: #2DCAD2;
  }
  &-error{
    color: red;
    font-size: 20px;
    text-decoration: none;
  }
}
.custom{
  min-width: 300px;
}
</style>
