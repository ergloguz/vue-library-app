<template>
  <div>
  <ValidationObserver v-slot="{ handleSubmit }">
  <form class="container" @submit.prevent="handleSubmit(submitForm)">
    <div class="table mx-auto" >
      <div class="table-head">
        <a class="table-head-day">ADD A NEW BOOK</a>
      </div>

      <div class="group">
        <div class="form-group">
          <label class="group-label">Book Name</label>
          <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
            <input v-model="formModel.bookName" class="form-control custom" >
            <a class="group-error">{{ errors[0] }}</a>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label class="group-label">Author</label>
          <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
            <input  v-model="formModel.author"class="form-control">
            <a class="group-error">{{ errors[0] }}</a>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label class="group-label" >Book Image</label>
          <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
            <input  v-model="formModel.image" class="form-control" >
            <a class="group-error">{{ errors[0] }}</a>
          </ValidationProvider>
        </div>

      </div>

      <button type="submit" class="table-button"><a>SAVE</a></button>

    </div>
  </form>
  </ValidationObserver>
  </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  name: 'AddBookForm',
  props:{
    addBookFormData: {
      type:Object,
      default:null,
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data(){
    return{
      formModel:{
        bookName:"",
        author:"",
        image:"",
      }
    }
  },
  methods:{
    submitForm(){
      this.$emit('onSubmit',this.formModel);
      this.clearForm();
    },
    clearForm(){
      this.formModel = {
        bookName: "",
        author: "",
        image:"",
      }
    }
  },

  mounted(){
    if ( this.addBookFormData ) {
      this.formModel = this.addBookFormData;
    }
  }

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
