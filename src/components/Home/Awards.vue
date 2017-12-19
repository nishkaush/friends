<template>
<section class="container awards-div">
  <div class="row">
    <div class="col-sm-12">
      <h1 class="text-center">Our Achievements</h1>
    </div>
    <hr>
    <div class="media col-sm-11 mx-auto">
      <img class="d-flex mr-3 img-fluid align-self-center" src="./Home-pics/awards-1.jpg" alt="Generic placeholder image">
      <div class="media-body">
        <h5 class="mt-0">Helped Children &amp; Families Stay Healthy</h5> Implemented Urban Reproductive &amp; Child Health Program (RCH) under Uttarakhand Health and Family Welfare Society. Funded by National Health Mission (NHM) as an initiative by Government of India, in this project we focussed on the health needs
        of urban poor slum population and targeted reproductive and child health, children immunisation, family welfare, family planning needs, OPD, basic lab testings and free dispensing of medicines.
      </div>
    </div>

    <div class="media col-sm-11 mx-auto">
      <img class="d-flex mr-3 img-fluid align-self-center" src="./Home-pics/junkies.jpg" alt="Generic placeholder image">
      <div class="media-body">
        <h5 class="mt-0">Saved Lives With AIDS Intervention</h5> Implemented targeted intervention programs under the Uttarakhand State AIDS Control Society (USACS) funded by NACO on the core components like Female Sex Workers (FSW's), Injected Drug Users (IDU's), street children, truckers for more than 10
        years. As a result, we signicantly prevented and contained AIDS transmission in the high risk groups in areas of Haridwar city.
      </div>
    </div>

  </div>
</section>
</template>

<script>
export default {}
</script>

<style scoped>
.col-sm-12 {
  margin-top: 4%;
}

.col-sm-11 {
  margin-top: 2%;
  margin-bottom: 2%;
}

h1 {
  font-family: baskerville;
}

.col-sm-12:first-child {
  padding-bottom: 0%;
}

hr {
  width: 96%;
  margin-bottom: 0;
}

.media {
  border-radius: 15px;
  box-shadow: 10px 10px 10px 0.06px #e2e1e1;
  padding: 3%;
}

.media:first-child {
  margin-top: 0%;
}


.media-body {
  letter-spacing: 1px;
  font-size: 0.9em;
  text-align: justify;
}

img {
  width: 30%;
  height: auto;
}

.media:last-child {
  margin-bottom: 5%;
}

@media only screen and (max-width:800px) {
  h1 {
    margin-top: 3%;
  }
}
</style>
