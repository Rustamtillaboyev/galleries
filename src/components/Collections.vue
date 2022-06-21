<template>
<div class="body">
    <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide><q-img src="https://i.pinimg.com/originals/25/fc/9e/25fc9ee8908af6fd2dd9b0e95d195cea.jpg"/></swiper-slide>
    <swiper-slide><q-img src="https://oboi-telefon.ru/wallpapers/21030/39509.jpg"/></swiper-slide>
    <swiper-slide><q-img src="https://pbs.twimg.com/profile_images/486925967965687809/ex7ux0hn.jpg"/>загрузка
    </swiper-slide>
    <swiper-slide><q-img src="https://mobimg.b-cdn.net/v3/fetch/a2/a2387d58acaa9bc5e540f78f93652e17.jpeg?h=1200&r=0.5"/></swiper-slide>
    <swiper-slide><q-img src="https://i.pinimg.com/736x/fd/dc/55/fddc551d73d30a2632d85814da64a90e.jpg"/></swiper-slide>
    <swiper-slide><q-img src="https://www.xtrafondos.com/wallpapers/vertical/insane-lamborghini-aventador-2022.jpg"/></swiper-slide>
    <swiper-slide><q-img src="https://zamanilka.ru/wp-content/uploads/2020/01/lamborghinis-black-and-white-4k-28-1080x1920-1.jpg"/></swiper-slide>
    <swiper-slide><q-img src="../assets/1_4967486941793616118.jpg"/></swiper-slide>
    <swiper-slide> <q-img src="../assets/1_4967486941793616118.jpg"/> </swiper-slide>
  </swiper>
</div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCards],
    };
  },
};
</script>

<style scoped>
#app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

html,
body {
  position: relative;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper {
  width: 240px;
  height: 320px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}

</style>
