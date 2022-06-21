<template lang="">
  <div>
    <div class="body row">
      <div class="container col-2">
        <q-img height="300px" src="https://maps.spravka-region.ru/img/84/8479917312971275.jpg" class="image2 "/>
       <div class="overlay">
        <q-img width="300px" height="300px" class="img" src="../assets/2_5303527729948264663.jpg"/>
        <div class="text">Oldingi holati</div>
       </div>
      </div>
      <div class="container1 col-2 q-mt-xl q-ml-xl">
        <q-img height="300px" src="https://maps.spravka-region.ru/img/84/8479917312971275.jpg" class="image2 "/>
       <div class="overlay1">
        <q-img width="300px" class="img" src="../assets/1_5017558950430638447.jpg"/>
        <div class="text1">Oldingi holati</div>
       </div>
      </div>
      <div class="container2 col-2 q-ml-xl">
        <q-img height="350px" src="https://maps.spravka-region.ru/img/84/8479917312971275.jpg" class="image2 "/>
       <div class="overlay2">
        <q-img width="300px" class="img" src="../assets/2_5303527729948264665.jpg"/>
        <div class="text2">Oldingi holati</div>
       </div>
      </div>
      <div class="container2 col-2 q-ml-xl q-mt-xl">
        <q-img height="300px" src="https://maps.spravka-region.ru/img/84/8479917312971275.jpg" class="image2 "/>
      <div class="overlay2">
        <q-img width="300px" class="img" src="../assets/2_5303527729948264665.jpg"/>
        <div class="text2">Oldingi holati</div>
      </div>
      </div>
      <div class="container2 col-2 q-ml-xl">
        <q-img height="300px" src="https://maps.spravka-region.ru/img/84/8479917312971275.jpg" class="image2 shadow-21"/>
      <div class="overlay2">
        <q-img width="300px" height="300px" class="img" src="../assets/2_5303527729948264665.jpg"/>
        <div class="text2">Oldingi holati</div>
      </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  position: relative;
}
.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
}

.container:hover .overlay {
  bottom: 0px;
  height: 100%;
  cursor: pointer;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.container1 {
  position: relative;
}

.overlay1 {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
}

.container1:hover .overlay1 {
  bottom: 0;
  height: 100%;
  cursor: pointer;
}

.text1 {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.container2 {
  position: relative;
}
.image2 {
  display: block;
  width: 100%;
  height: auto;
  cursor: pointer;
}

.overlay2 {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
}

.container2:hover .overlay2 {
  bottom: 0;
  height: 100%;
  cursor: pointer;
}

.text2 {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
