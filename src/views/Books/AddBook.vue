<template>
  <div class="container">
    <AddBookForm @onSubmit="save" />
  </div>
</template>

<script>
import AddBookForm from "@/components/forms/AddBookForm";
export default {
  name:"AddBook",
  data() {
    return {
      bookList:[],
    }
  },
  components: {
    AddBookForm
  },
  methods: {
    save(data) {
      this.$store.commit('addNewBook', data);

      this.$bvToast.toast(`${data.bookName}`, {
        title: 'New Book Added',
        autoHideDelay: 2000,
      });
      /*setTimeout( () => this.$router.push({ path: '/'}), 2200);*/
    },

  }
}



</script>

<style scoped>

</style>