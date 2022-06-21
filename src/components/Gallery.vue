<template lang="">
  <div>
    <div class="row q-my-xl images">
      <div class="col-3 q-ml-lg">
        <q-img class="mini shadow-20 animate__animated animate__bounceInLeft" src="https://reydemos.b-cdn.net/beijing/wp-content/uploads/sites/7/2019/06/living-room-with-couch-PCX2KY5.jpg"/>
      </div>
      <div class="col-2">
        <q-img class="mini2 shadow-20 animate__animated animate__fadeInDownBig" src="https://reydemos.b-cdn.net/beijing/wp-content/uploads/sites/7/2019/06/living-room-with-couch-PCX2KY5.jpg"/>
        <q-img class="q-my-xl mini3 shadow-20 animate__animated animate__flipInX" src="https://reydemos.b-cdn.net/beijing/wp-content/uploads/sites/7/2019/06/living-room-with-couch-PCX2KY5.jpg"/>
      </div>
      <div class="col-3 q-mt-xl q-ml-xl">
        <q-img class="mini4 shadow-20 animate__animated animate__fadeInUp" src="https://reydemos.b-cdn.net/beijing/wp-content/uploads/sites/7/2019/06/living-room-with-couch-PCX2KY5.jpg"/>
      </div>
      <div class="col-2 q-mx-xl ">
        <q-img class="mini5 shadow-20 animate__animated animate__fadeInRight" src="https://reydemos.b-cdn.net/beijing/wp-content/uploads/sites/7/2019/06/living-room-with-couch-PCX2KY5.jpg"/>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.mini{
  width: 278px;
  height: 400px;
  transition: 0.5s;
}
.mini:hover{
 width: 305px;
 cursor: pointer;
 transition: 0.5s;

}
.large{
  margin-left: 70px;
}
.mini5{
  width: 278px;
  height: 380px;
  transition: 0.5s;
}
.mini5:hover{
 width: 305px;
 cursor: pointer;
 transition: 0.5s;
}
.mini2{
   width: 220px;
   height: 200px;
  transition: 0.5s;
}
.mini2:hover{
  width: 238px;
 cursor: pointer;
 transition: 0.5s;
}
.mini3{
  width: 300px;
  height: 250px;
  cursor: pointer;
 transition: 0.5s;
}
.mini3:hover{
  width: 318px;
 cursor: pointer;
 transition: 0.5s;
}
.mini4{
  width: 285px;
  height: 360px;
  cursor: pointer;
  transition: 0.5s;
  margin-left: 65px;
  margin-top: 140px;
}
.mini4:hover{
  width: 308px;
  cursor: pointer;
  transition: 0.5s;
}
.images{
  /* background: url(../assets/photo_2022-05-13_00-46-20.jpg); */
  /* background-position: center; */
  background-color: cadetblue;

}
.animate__animated.animate__bounceInLeft {
  --animate-duration: 2s;
}
.animate__animated.animate__fadeInDownBig {
  --animate-duration: 2s;
}
.animate__animated.animate__flipInX {
  --animate-duration: 2s;
}
.animate__animated.animate__fadeInUp {
  --animate-duration: 2s;
}
.animate__animated.animate__fadeInRight {
  --animate-duration: 2s;
}

</style>
