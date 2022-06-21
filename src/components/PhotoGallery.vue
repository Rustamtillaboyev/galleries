<template>
<div>
  <div class="fit row wrap justify-start items-start">
    <div v-for="i in 5" :key="i" class="w-235px h-500px q-mx-md border br-4px" style="margin-bottom:100px; margin-top:100px;">

        <div class="d-f jc-sp_btw q-mt-md">
          <div class="bg-red br-4px text-white text-weight-bold q-ml-md">-10%</div>
          <div class="bg-red br-4px text-white text-weight-bold w-50px  text-center q-mr-md">Yangi</div>
        </div>
        <!-- Images -->
        <q-img class="img" src="http://demo.posthemes.com/pos_ecolife_fastfood/427-home_default/pizza-primavera.jpg"><div class="button1О"><q-btn class="btn bg-red" icon="search"/></div>
       </q-img>
        <!-- Images over -->
      <div class="q-pa-md">
        <div class="q-gutter-y-md column">
          <q-rating
            v-model="ratingModel"
            size="24px"
            color="yellow-6"
            icon="star_border"
            icon-selected="star"
          />

        </div>
      </div>
        <div class="text-h6 q-ml-md">Pizza Mozzarella</div>
        <div class="q-ml-md">Yangi Mozzarela ni xoxlovchilarni <br> tatib ko'ringlar</div> <br>
        <div class="text-italic q-ml-md d-f"><del class="fs-19px text-weight-light">$11.90</del><span class="text-red q-ml-md text-weight-bolder fs-20px">$10.12</span>
        <div class="borderradius bg-yellow-6 q-ml-lg"> <q-icon class="d-f jc-center " size="15px" name="fas fa-shopping-bag"/></div>
        </div>
      <div class="d-f hover1 q-mt-mb">
          <div> <q-icon name="search" class="q-ml-md"/><div class="text-p q-ml-md">Taqqoslang</div></div>
          <div> <q-icon name="search" class="q-ml-md"/><div class="text-p q-ml-md">Taqqoslang</div></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      ratingModel: ref(3),
      ratingModell: ref(1)
    }
  }
}
</script>


<style scoped>
.border{
  border: 1px solid rgb(214, 210, 210);
}
.border:hover{
  border: 1px solid rgb(223, 44, 44);

}
.position{
  position: absolute;
  top: 3460px;
  margin: 80px;

}
.but .position{
  opacity: 0;
}
.but .position:hover{
  opacity: 1;
}
.borderradius{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.hover1{
  opacity: 0;
  transition: 0.1s;

}
.hover1:hover{
  opacity: 1;
  transition: 0.1s;
  color: red;
  cursor: pointer;
}










.button1{
  width: 100%;
  height: 500px;
  position: absolute;
  opacity: 0;
  background: transparent;
  transition: 0.2s;
}
.button1:hover{
  opacity: 1;
  transition: 0.2s;

}
.btn{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 100px;
  bottom: 130px;
  left: 100px;
}
.img{
  position: relative;
  z-index: 1;
}



</style>
