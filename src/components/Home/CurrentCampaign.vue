<template>
<div class="container-fluid current-campaign-div mt-5 pt-5">
  <div class="row">
    <div class="col">
      <h1 class="text-center pb-4">Current Campaign</h1>
    </div>
  </div>
  <!-- <hr> -->

<!-- This is going to be the overlay component for current campaign photo -->
    <div class="py-5 hanging-div campaign-text text-justify d-none d-xl-block">
      <h4 class="text-center">Intensified Mission Indradhanush</h4>
      <hr>
      <p class="">In 2014, The Ministry of Health And Family Welfare in India launched this program to fully immunize children of age up to two years and pregnant women with all available vaccines. To help promote and implement this extremely beneficial program,
        Friends has been organising various vaccination camps in Roorkee.
      </p>
      <div class="text-center mt-4">
        <router-link tag="button" :to="{path:'/events#cc'}" 
        class="btn btn-sm btn-warning px-4 py-3 mb-xl-0">See Our Gallery</router-link>
      </div>
    </div>


  <!-- following image div only shows on large screens -->
  <div class="row no-gutters d-none d-xl-block">
    <div class="col-xl-12">
      <img class="img-fluid" src="./Home-pics/mi-cover.jpg" alt="Indra Dhanush">
    </div>
  </div>


  <!-- following div only shows from medium sized screens and down -->
  <div class="row no-gutters d-xl-none">
    <div class="col-xl-7">
      <img class="img-fluid" src="./Home-pics/mi-cover.jpg" alt="Indra Dhanush">
    </div>
    <div class="col-xl-5 pt-4 pb-4 campaign-text text-justify">
      <h4 class="text-center">Intensified Mission Indradhanush</h4>
      <hr>
      <p class="">In 2014, The Ministry of Health And Family Welfare in India launched this program to fully immunize children of age up to two years and pregnant women with all available vaccines. To help promote and implement this extremely beneficial program,
        Friends has been organising various vaccination camps in Roorkee.
      </p>
      <div class="text-center mt-4">
        <router-link tag="button" :to="{path:'/events#cc'}" 
        class="btn btn-sm btn-warning px-5 py-3 mb-xl-0">See Our Gallery</router-link>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.current-campaign-div {
  position: relative;
}
.current-campaign-div h1 {
  font-family: baskerville;
}
h4 {
  letter-spacing: 1px;
  font-weight: 600;
}
hr {
  background: white;
  width: 90%;
}

.hanging-div {
  width: 27%;
  height: 65%;
  position: absolute;
  z-index: 2000;
  color: white;
  top: 200px;
  left: 100px;
}

.campaign-text {
  background: rgb(204, 84, 144);
  font-family: avenir;
  color: white;
  font-size: 1em;
}

.current-campaign-div p {
  line-height: 1.6;
  letter-spacing: 1px;
  width: 80%;
  margin: auto;
  font-weight: 500;
}

.campaign-text h3 {
  letter-spacing: 1px;
  font-family: avenir;
}

.campaign-text button {
  font-family: avenir;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}
@media only screen and (min-width: 1301px) {
  .hanging-div {
    height: 63%;
    background: linear-gradient(
      7deg,
      transparent 10%,
      rgba(204, 84, 144, 0.8)10.1%
    );
    top: 230px;
  }
  .campaign-text {
    font-size: 0.9em;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1300px) {
  .hanging-div {
    height: 70%;
    background: linear-gradient(
      9deg,
      transparent 10%,
      rgba(204, 84, 144, 0.8)10.1%
    );
  }
  .campaign-text {
    font-size: 0.9em;
  }
}
</style>
