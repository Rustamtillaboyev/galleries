<template lang="">
  <div>
    <gallery/>
    <gallery1/>
    <slider/>
    <sliderspan/>
    <Swiper/>
    <Collections/>

  </div>
</template>

<script>
import Gallery from "src/components/Gallery.vue";
import Gallery1 from "src/components/Gallery1.vue";
import Slider from "src/components/Slider.vue";
import Sliderspan from "src/components/Slider-span.vue";
import Swiper from "src/components/Swiper.vue";
import Collections from "src/components/Collections.vue";
export default{
   components:{
  Gallery,
  Gallery1,
  Slider,
  Swiper,
  Collections,
  Sliderspan,

}
}

</script>
