<template>
<div class="container-fluid current-campaign-div mt-5 pt-5">
  <div class="row">
    <div class="col">
      <h1 class="text-center pb-0 mb-0">Current Campaign</h1>
    </div>
  </div>
  <hr>
  <div class="row no-gutters">
    <div class="col-xl-6">
      <img class="img-fluid" src="./Home-pics/mi-cover.jpg" alt="Indra Dhanush">
    </div>
    <div class="col-xl-6 campaign-text">
      <h4 class="text-center mt-4">Intensified Mission Indradhanush</h4>
      <hr>
      <p class="">In 2014, The Ministry of Health And Family Welfare in India launched this program to fully immunize children of age up to two years and pregnant women with all available vaccines. To help promote and implement this extremely beneficial program,
        Friends has been organising various vaccination camps in Roorkee.
      </p>
      <div class="text-center mt-0 pt-0">
        <router-link tag="button" :to="{path:'/events#cc'}" class="btn btn-md btn-warning pl-5 pr-5 pt-3 pb-3 mt-5 mb-5 mb-xl-0">See Our Gallery</router-link>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style>
.current-campaign-div h1 {
  font-family: baskerville;
}

h4 {
  letter-spacing: 1px;
  font-weight: 600;
}

.campaign-text {
  background: #cc5490;
  font-family: avenir;
}

.current-campaign-div p {
  line-height: 1.5;
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
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
