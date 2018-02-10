<template>
<div>
  <!-- carousel as fixed image for smallest screen -->
  <div class="d-flex flex-column d-md-none small-screen-div justify-content-end align-items-center">
    <h1 class="text-white display-3">FRIENDS</h1>
    <h1 class="text-white display-4">NGO</h1>
    <router-link 
    tag="button" 
    :to="{path:'/about'}" 
    class="btn-block btn btn-lg btn-warning btn-lg pt-3 pb-3 font-weight-bold" 
    style="cursor:pointer" 
    exact
    >Discover Us</router-link>
  </div>

  <div id="carouselExampleIndicators" class="carousel slide d-none d-md-block" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./Home-pics/change-1.jpg" alt="Friends Forever">
      <div class="carousel-caption" id="first-caption">
        <h1 class="display-2">FRIENDS NGO</h1>
        <p class="d-none d-md-block">Making A Better Society</p>
        <router-link 
        tag="button" 
        :to="{path:'/about'}" 
        class="btn btn-md btn-warning btn-md pl-5 pr-5 pt-3 pb-3 mb-2" 
        exact
        >Discover More</router-link>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./Home-pics/change-2.jpg" alt="Children in Slums">
      <div class="carousel-caption" id="second-caption">
        <h1 class="display-2">UPHC</h1>
        <p class="d-none d-md-block">Managing Urban Primary Health Centers</p>
        <router-link 
        tag="button" 
        :to="{path:'/projects'}" 
        class="btn btn-md btn-warning btn-md pl-5 pr-5 pt-3 pb-3 mb-2" 
        exact
        >Get More details</router-link>
      </div>
    </div>
    <div class="carousel-item">
      <img class="w-100 d-block" src="./Home-pics/doc-kid-closeup-2.jpg" alt="Special Health Camps">
      <div class="carousel-caption" id="third-caption">
        <h1 class="display-2">CAMPS</h1>
        <p class="d-none d-md-block">Child Health Care For Slums</p>
        <router-link 
        tag="button" 
        :to="{path:'/events#specialCamps'}" 
        class="btn btn-md btn-warning btn-md pl-5 pr-5 pt-3 pb-3 mb-2" 
        exact
        >View our gallery</router-link>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  mounted() {
    $(".carousel").carousel({
      interval: 6000
    });
  }
};
</script>

<style scoped>
.small-screen-div {
  height: 600px;
  background: linear-gradient(rgba(0, 51, 102, 0.5), rgba(0, 51, 103, 0.5)),
    url("./Home-pics/sm-sc.jpg");
}
.small-screen-div h1 {
  font-weight: bold;
}

.carousel-inner {
  background: rgb(0, 51, 102);
}

.carousel-inner img {
  opacity: 0.6;
}

.carousel-item {
  max-height: 700px;
  width: auto;
}

li[data-target="#carouselExampleIndicators"] {
  height: 10px;
  background: #323232;
  cursor: pointer;
}

.carousel-indicators li.active {
  background: white;
}

.carousel-caption {
  letter-spacing: 2px;
  font-family: avenir;
}

.carousel-caption h1 {
  letter-spacing: 4px;
  font-family: avenir;
  font-weight: bold;
}

.carousel-caption p {
  font-weight: 600;
  font-size: 1.25em;
}

.carousel-caption button {
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media screen and (min-width: 577px) and (max-width: 767px) {
  .small-screen-div {
    height: 600px;
    background: linear-gradient(rgba(0, 51, 102, 0.5), rgba(0, 51, 103, 0.5)),
      url("./Home-pics/small-screen-2.jpg") center;
  }
}

@media only screen and (min-width: 750px) and (max-width: 1000px) {
  .carousel-caption h1 {
    font-size: 3em !important;
    font-weight: bold;
  }
}

@media (min-width: 1001px) and (max-width: 1200px) {
  .carousel-item {
    max-height: 580px;
  }
}

@media (min-width: 800px) and (max-width: 1000px) {
  .carousel-item {
    max-height: 450px;
    width: auto;
  }
}

@media (min-width: 600px) and (max-width: 799px) {
  .carousel-item {
    max-height: 375px;
    width: auto;
  }
}
</style>
