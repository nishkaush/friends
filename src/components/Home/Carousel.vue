<template>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="./Home-pics/kids-group-1.jpg" alt="Friends Forever">
      <div class="carousel-caption" id="first-caption">
        <h1 class="display-4">FRIENDS</h1>
        <p class="d-none d-md-block">Making A Better Society One Friend At A Time</p>
        <router-link tag="button" :to="{path:'/about'}" class="btn btn-md btn-warning" exact>Discover More</router-link>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="./Home-pics/upsc-main.jpg" alt="Children in Slums">
      <div class="carousel-caption" id="second-caption">
        <h1 class="display-4">UPSC</h1>
        <p class="d-none d-md-block">Our current project involves running Urban Primary Health Centers</p>
        <router-link tag="button" :to="{path:'/projects'}" class="btn btn-md btn-warning" exact>Get More details</router-link>
      </div>
    </div>
    <div class="carousel-item">
      <img class="w-100 d-none d-md-block" src="./Home-pics/doc-kid-closeup-2.jpg" alt="Special Health Camps">
      <img class="w-100 d-block d-md-none" src="./Home-pics/camps-carousel.jpg" alt="Special Health Camps">
      <div class="carousel-caption" id="third-caption">
        <h1 class="display-4">CAMPS</h1>
        <p class="d-none d-md-block">To further support the slums</p>
        <router-link tag="button" :to="{path:'/events#specialCamps'}" class="btn btn-md btn-warning" exact>View our gallery</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    $(".carousel").carousel({
      interval: 10000
    });
  }
}
</script>

<style scoped>
.carousel-inner {
  background: rgb(10, 10, 10);
}

.carousel-inner img {
  opacity: 0.6;
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
  font-weight: 600;
  padding-left: 2%;
  padding-right: 2%;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.carousel-caption button:hover {
  color: white;
}

@media only screen and (min-width: 700px) {
  #first-caption {
    top: 35%;
  }
  #second-caption {
    top: 40%;
  }
  #third-caption {
    top: 45%;
  }
}

@media only screen and (max-width:800px) {
  .carousel-caption button {
    padding-left: 6%;
    padding-right: 6%;
  }
  .carousel-caption h1 {
    font-size: 2.5em;
  }
}
</style>
