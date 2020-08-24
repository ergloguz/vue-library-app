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
      this.$router.push('/');
    },

  }
}
</script>

<style scoped>

</style>