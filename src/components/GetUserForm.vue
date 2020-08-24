<template>
  <div class="container">
    <div class="table mx-auto">
      <div class="table-head">
        <a class="table-head-title">GET FROM USER</a>
      </div>

      <div class="group mt-4">
        <div class="form-group">
          <label class="group-label">Select a book</label>
          <select class="form-control custom" id="exampleFormControlSelect1">
            <option>Sefiller</option>
            <option>Suç ve Ceza</option>
            <option>Sineklerin Tanrısı</option>
            <option>Hayvan Çiftliği</option>
            <option>Savaş ve Barış</option>
          </select>
        </div>
      </div>
<UserCard/>
      <button class="table-button"><a>GET FROM USER</a></button>

    </div>
  </div>

</template>

<script>
import UserCard from "@/components/UserCard";
export default {
  name: 'GetUserForm',
  components: {UserCard},
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
    margin-top: auto;
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

    &-title {
      font-family: saira;
      font-size: 38px;
      color: white;
      margin-top: 20px;
      text-decoration: none;
    }
  }
}
.group {
  margin-top: auto;
  &-label{
    font-size: 22px;
    font-family: saira;
    color: #2DCAD2;
  }
}

.custom{
  min-width: 300px;
}
</style>
