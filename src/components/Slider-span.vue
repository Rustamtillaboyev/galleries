<template>
  <div>
    <div class="bodyy">
      <div class="slide-containerr">
        <span class="slider-span-n1" id="slider-span1"></span>
        <span class="slider-span-n1" id="slider-span2"></span>
        <span class="slider-span-n1" id="slider-span3"></span>
        <span class="slider-span-n1" id="slider-span4"></span>
        <span class="slider-span-n1" id="slider-span5"></span>
        <span class="slider-span-n1" id="slider-span6"></span>
        <span class="slider-span-n1" id="slider-span7"></span>

        <div class="image-sliderr">
          <div class="slide-divv" id="slide-q">
            <img class="img-img" id="img1" src="../assets/1_4967486941793616118.jpg">
            <a href="#slider-span1" class="button-but" id="button-1"></a>
          </div>
          <div class="slide-divv" id="slide-w">
            <img class="img-img" id="img2" src="../assets/1_5017558950430638447.jpg">
            <a href="#slider-span2" class="button-but" id="button-2"></a>
          </div>
          <div class="slide-divv" id="slide-e">
            <img class="img-img" id="img3" src="../assets/2022-03-01-19-46-45.png">
            <a href="#slider-span3" class="button-but" id="button-3"></a>
          </div>
          <div class="slide-divv" id="slide-r">
            <img class="img-img" id="img4" src="../assets/2_5282739581429483270.jpg">
            <a href="#slider-span4" class="button-but" id="button-4"></a>
          </div>
          <div class="slide-divv" id="slide-t">
            <img class="img-img" id="img5" src="../assets/2_5298640344928225559.jpg">
            <a href="#slider-span5" class="button-but" id="button-5"></a>
          </div>
          <div class="slide-divv" id="slide-y">
            <img class="img-img" id="img6" src="../assets/2_5303527729948264663.jpg">
            <a href="#slider-span6" class="button-but" id="button-6"></a>
          </div>
          <div class="slide-divv" id="slide-u">
            <img class="img-img" id="img7" src="../assets/5_6120566535556694513.jpg">
            <a href="#slider-span7" class="button-but" id="button-7"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

</script>


<style scoped>
.bodyy{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  background-color: black;
  overflow: hidden;
}
.slide-containerr{
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(to right, rgb(255,65,108), rgb(255,75,43));
}
.image-sliderr{
  width: 100%;
  height: 600px;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .7s;
}
.slide-divv{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px 0 30px;
}
.img-img{
  position: relative;
  width: 240px;
  height: 370px;
  transition: .5s;
  filter: saturate(10%);
}
.button-but{
  position: absolute;
  width: 240px;
  height: 370px;
  transition: .5s;
  background-color: rgba(0, 0, 0, .4);
}
.button-but:hover{
  background-color: rgba(0, 0, 0, .2);
}
#slider-span1:target ~ .image-sliderr #img1,
#slider-span1:target ~ .image-sliderr #button-1{
  width: 300px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span2:target ~ .image-sliderr #img2,
#slider-span2:target ~ .image-sliderr #button-2{
  width: 300px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span3:target ~ .image-sliderr #img3,
#slider-span3:target ~ .image-sliderr #button-3{
  width: 300px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span4:target ~ .image-sliderr #img4,
#slider-span4:target ~ .image-sliderr #button-4{
  width: 300px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span5:target ~ .image-sliderr #img5,
#slider-span5:target ~ .image-sliderr #button-5{
  width: 300px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span6:target ~ .image-sliderr #img6,
#slider-span6:target ~ .image-sliderr #button-6{
  width: 300px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span7:target ~ .image-sliderr #img7,
#slider-span7:target ~ .image-sliderr #button-7{
  width: 300px;
  height: 585px;
  background-color: transparent;
  filter: saturate(100%);
}
#slider-span1:target ~ .image-sliderr{left: 70%;}
#slider-span2:target ~ .image-sliderr{left: 50%;}
#slider-span3:target ~ .image-sliderr{left: 25%;}

#slider-span5:target ~ .image-sliderr{left: -25%;}
#slider-span6:target ~ .image-sliderr{left: -50%;}
#slider-span7:target ~ .image-sliderr{left: -70%;}
</style>
