<template>
  <div class="container">
        <div class=" base row">
          <!-- IMAGE -->
          <div class="col base-image"></div>
          <!-- INFOS -->
          <div class="col base-book">
            <a href="">Kitap Adı</a>
            <a href="">Yazar Adı</a>
          </div>
          <!-- ACTIONS-->
          <div class="col base-button">
           <button class="base-button-btn">STATUS</button>
            <button class="base-button-btn">DELETE</button>
          </div>
        </div>

  </div>
</template>

<script>
export default {
  name:"BookCard"
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