<template>
<div class="container-fluid current-campaign-div">
  <div class="row">
    <div class="col">
      <h1 class="campaign-heading">Current Campaign</h1>
    </div>
  </div>
  <hr>
  <div class="row no-gutters">
    <div class="col-lg-6 align-self-center">
      <img class="img-fluid current-campaign-img" src="./Home-pics/mi-cover.jpg" alt="Indra Dhanush">
    </div>
    <div class="col-lg-6 campaign-text">
      <h4>Intensified Mission Indradhanush</h4>
      <hr class="my-3">
      <p>In 2014, The Ministry of Health And Family Welfare in India launched this program to fully immunize children of age up to two years and pregnant women with all available vaccines. To help promote and implement this extremely beneficial program,
        Friends has been organising various vaccination camps in Roorkee.
      </p>
      <router-link tag="button" :to="{path:'/events#cc'}" class="btn btn-md btn-warning">See Our Gallery</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
.current-campaign-div {
  margin-top: 3%;
  padding: 4%;
  font-family: avenir;
  color: white;
}

.campaign-heading {
  color: black;
  font-family: baskerville;
  text-align: center;
  margin-bottom: 2%;
}

h4 {
  letter-spacing: 1px;
  font-weight: 600;
}

.current-campaign-img {
  max-width: 100%;
  height: auto;
}

.campaign-text {
  text-align: center;
  background: #cc5490;
  padding-top: 2%;
  padding-bottom: 4%;
  font-family: avenir;
}

.current-campaign-div p {
  line-height: 1.5;
  letter-spacing: 1px;
  width: 85%;
  margin: auto;
  font-weight: 500;
}

.campaign-text h3 {
  letter-spacing: 1px;
  font-family: avenir;
}

.campaign-text button {
  margin-top: 3%;
  font-family: avenir;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  padding-left: 2%;
  padding-right: 2%;
  box-shadow: 1px 1px 1px 0.06px #cc9a05;
}

.campaign-text button:hover {
  color: white;
}

@media only screen and (max-width:800px) {
  .campaign-text button {
    padding-left: 6%;
    padding-right: 6%;
    margin-top: 6%;
    margin-bottom: 4%;
  }
  .campaign-heading {
    margin-top: 0%;
  }
}
</style>
