<template>
  <div>
      <div class="fit row wrap justify-center items-start q-mt-xl q-my-xl">
    <div v-for="card in cards" :key="card" class=" white shadow-20 q-mb-xl q-mx-lg" style="width:29%; height:450px">
      <q-img class="content" width="100%"  :src="card.img"/>
      <div class="text-h6 q-ml-xl" style="margin-top: 30px">Belni toraytiradigan joylar<br>marxamat</div> <br><br>
       <div><span class="q-ml-lg">4 year ago</span></div>
    </div>
  </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
       cards: [
         {img: "https://xtrm.foxthemes.me/wp-content/uploads/2018/07/3-1.jpg"},
          {img: "https://onlanta.ru/upload/grain.tables/945/pzfq3hwhwog6r4ph7fbe12887c3km8i5.jpg"},
          {img: "https://rial-soft.ru/upload/iblock/f7c/v10muaoqeh8t4ovi54olbg9bgpaoo1e7.jpg"},
          {img: "https://www.startupbahrain.com/wp-content/uploads/2018/10/Feb-14-1.jpg"},
          {img: "https://xtrm.foxthemes.me/wp-content/uploads/2018/10/groupdd-16.jpg"},
          {img: "	https://xtrm.foxthemes.me/wp-content/uploads/2018/10/groupd-16.jpg"},
          {img: "	https://xtrm.foxthemes.me/wp-content/uploads/2019/01/groupz-16.jpg"},
          {img: "https://xtrm.foxthemes.me/wp-content/uploads/2019/01/groxup-16.jpg"},
          {img: "https://xtrm.foxthemes.me/wp-content/uploads/2019/01/groxup-16.jpg"},
       ]
      }
    },
  }
</script>

<style scoped>

</style>
