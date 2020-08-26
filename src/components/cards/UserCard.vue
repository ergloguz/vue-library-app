<template>
    <div class="customCard">
        <a class="customCard-userId">{{userId}}</a>
        <a class="customCard-userName" >{{userName}}</a>
        <a class="customCard-userAdress" >{{userAdress}}</a>
    </div>
</template>

<script>
export default {
  name:"UserCard",
  props:["index","userName","userId","userAdress"],

}
</script>

<style scoped>
.customCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #1b262c;
  height: 110px;
  border-radius: 2px;
  min-width: 300px;
  padding: 20px;
   &-userName {
     font-size: 22px;
   }
   &-userId {
     font-size: 22px;
   }
   &-userAdress {
     font-size: 22px;
   }

}

</style>