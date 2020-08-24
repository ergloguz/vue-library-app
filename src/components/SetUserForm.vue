<template>
  <div class="container">
    <div class="table mx-auto">
      <div class="table-head">
        <a class="table-head-day">SET TO USER</a>
      </div>

      <div class="group mt-4">
        <div class="form-group">
          <label class="group-label">Select a book</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Sefiller</option>
            <option>Suç ve Ceza</option>
            <option>Sineklerin Tanrısı</option>
            <option>Hayvan Çiftliği</option>
            <option>Savaş ve Barış</option>
          </select>
        </div>
        <div class="form-group">
          <label class="group-label">Author</label>
          <input class="form-control custom">
        </div>
        <div class="form-group">
          <label class="group-label" >Name / Surname</label>
          <input  class="form-control" >
        </div>
        <div class="form-group">
          <label class="group-label">Adress</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>

      <button class="table-button"><a>SET TO USER</a></button>

    </div>
  </div>

</template>

<script>
export default {
  name: 'SetUserForm',
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
}
.custom{
  min-width: 300px;
}
</style>
