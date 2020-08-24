<template>
  <div>

    <div class="row row-cols-2">
      <div class="col">


        <div class="table">
          <a class="table-title">BOOK OPERATIONS</a>
          <router-link to="/book-add">
            <button class="table-button">
              <a>Add New Book</a>
            </button >
          </router-link>

          <router-link to="/book-list">
            <button class="table-button">
              <a>Book List</a>
            </button>
          </router-link>

        </div>
      </div>
      <div class="col">

        <div class="table">
          <a class="table-title">USER OPERATIONS</a>
        <router-link to="/user-set">
          <button class="table-button">
            <a>
              Set to User
            </a>
          </button>
        </router-link>
          <router-link to="/user-get">
            <button class="table-button">
              <a>Get from User</a>
            </button>
          </router-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Divider"
}
</script>

<style scoped>

.table {
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-direction: column;
  background-color: #131B23;
  margin-top: 20px;
  border-radius: 2px;
  height: 500px;
  justify-content: center;
  align-items: center;
  &-title {
    color: white;
    font-size: 36px;
    font-family: saira;
    text-decoration: none;
    margin-bottom: 50px;

  }
  &-button {
    height: 50px;
    width: 200px;
    margin-top: 10px;
    background-color:#1b262c;
    color:#2DCAD2;
    font-size: 22px;
    &:hover{
      background-color:#2DCAD2;
      color:#1b262c;
      cursor:pointer;
    }
  }
}
</style>