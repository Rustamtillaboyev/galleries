<template>
  <div>
     <div class="d-f mySwiper1 md">
      <swiper
          :spaceBetween="30"
          :centeredSlides="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
          v-for="card in 5" :key="card"
        >
        <swiper-slide v-for="card in 5" :key="card" class="body">
          <div class="d-f jc-sp_btw w-230px Bonus ">
            <div class="bg-red br-4px text-white text-weight-bold q-ml-sm fs-15px">-10%</div>
            <div class="bg-red br-4px text-white text-weight-bold q-mr-sm fs-15px">New</div>
          </div>

        <q-img class="img" width="245px" height="230px" src="	http://demo.posthemes.com/pos_ecolife_fastfood/382-home_default/benefit-food.jpg">
          <div class="button1 ">
              <q-btn class="btn " icon="search" />
          </div>
        </q-img>

    <div class="iconstar">
      <div class="">
        <div class="q-gutter-y-md column">
          <q-rating
            v-model="ratingModel"
            size="20px"
            color="yellow-5"
            icon="star_border"
            icon-selected="star"
            />
        </div>
       </div>
    </div>
        </swiper-slide>
          <div class="Text text-h6 q-ml-md d-f row">Pizza Mozzarella</div>
            <div class="Break q-ml-md fs-12px d-f row">Break old records and make new goals in the New Balance® Arishi Sport v1.</div>
            <q-btn class=" icon" icon="shopping_bag"></q-btn>
            <div class="Breakk text-p text-weight-bold fs-17px"> $29.00  </div>
      </swiper>
      </div>
      <div class="xs">
        <PhotoGallery/>
      </div>
  </div>
</template>


<script>
import PhotoGallery from "src/components/PhotoGallery.vue";
import { ref } from 'vue'

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PhotoGallery
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      ratingModel: ref(3)
    };
  },
};
</script>


<style scoped>
.body {
  /* position: relative; */
  height: 100%;
}
@media screen and (max-width: 599px){
  .body{
    width: 100%;
    background-color: red;
  }
  .swiper{
    width: 40%;
  }
}
.swiper {
  height: 375px;
  margin-top: 50px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
}
.mySwiper{
  border: 1px solid rgb(184, 180, 180);
  margin: 18px;
  padding: 0;
  border-radius: 4px;
}
.mySwiper:hover{
  border: 1px solid rgb(247, 18, 18);
}
.Bonus{
  position:absolute;
  bottom: 330px;
  z-index: 2;
  margin: 0;
  padding: 0;
}
.icon{
  position:absolute;
  margin-top: 30px;
  background-color: rgb(255, 255, 0);
  left: 170px;
  border-radius: 50%;
  padding: 0;
  height: 30px;
  width: 40px;
  transition: 0.3s;
}
.icon:hover{
  background-color: red;
  color: #fff;
  transition: 0.3s;
}
.iconstar{
  position:absolute;
  bottom: 120px;
  z-index: 2;
  margin: 10px;
}
.Text{
  position:absolute;
  bottom:  80px;
  z-index: 2;
  margin: 1;
}
.Break{
  position:absolute;
  bottom:  20px;
  z-index: 1;
  margin: 10px;
}
.Breakk{
  position:absolute;
  top:  340px;
  z-index: 1;
  margin: 10px;
}
.icon{
  position:absolute;
  top:  330px;
  z-index: 1;
  margin: 10px;
}
.border {
  border: 1px solid rgb(214, 210, 210);
  transition: 0.1s;
}
@media screen and (max-width: 500px){
  .border{
    height: 600px;
    width: 90%;
  }
  .btn{
    margin-left: 50px;
    margin-top: 40px;
  }
}
.border:hover {
  border: 1px solid rgb(223, 44, 44);
  transition: 0.1s;
}
.button1 {
  width: 100%;
  height: 500px;
  position: absolute;
  opacity: 0;
  background: transparent;
  transition: 0.2s;
}
.button1:hover {
  opacity: 1;
  transition: 0.2s;
}
.btn {
  width: 10px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 90px;
  bottom: 130px;
  left: 100px;
  transition: 0.4s;
  background-color: aliceblue;
  color: black;
}
.btn:hover{
  transition: 0.4s;
  background-color: red;
  color: #fff;
}
.img{
  position: relative;
  z-index: 1;
}
</style>
