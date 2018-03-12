<template>
<section class="container awards-div mt-5 pt-5">
  <div class="row">
    <div class="col-12 mt-3">
      <h1 class="text-center pb-0">Our Achievements</h1>
      <!-- <hr> -->
    </div>

    <div class="card first-card col-12 col-md-12 col-lg-6 mt-3 mx-auto">
      <img class="img-fluid" src="./Home-pics/awards-1.jpg" alt="beautiful girl">      
      <div class="card-body text-justify px-4 px-sm-5 px-md-5">
        <h5 class="mt-2 text-center">&nbsp;Healthy Children &amp; Families</h5> 
        <hr class="mb-3">
        <p>
          Implemented Urban Reproductive &amp; Child Health Program (RCH) under Uttarakhand Health and Family Welfare Society. Funded by National Health Mission (NHM) this project helps the urban poor slum population with reproductive and child health, child immunisation, family welfare and planning, OPD, basic lab testings and free dispensing of medicines.
        </p>
      </div>
    </div>

    <div class="card second-card col-12 col-md-12 col-lg-6 mt-3 mx-auto">
      <img class="img-fluid" src="./Home-pics/junkies.jpg" alt="Drug affected children">
      <div class="card-body text-justify px-4 px-sm-5 px-md-5">
        <h5 class="mt-1 text-center">&nbsp;AIDS Prevention &amp; Control</h5> 
        <hr class="mb-3">
        <p>Implemented targeted intervention programs under the Uttarakhand State AIDS Control Society (USACS) funded by NACO on the core components like Female Sex Workers (FSW's), Injected Drug Users (IDU's), street children, truck drivers for more than 10
        years. As a result, we prevented and contained AIDS transmission in the high risk groups in areas of Haridwar city.</p>
      </div>
    </div>

  </div>
</section>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-family: baskerville;
}

.col-sm-12:first-child {
  padding-bottom: 0%;
}

hr {
  width: 98%;
  margin-bottom: 0;
  background: white;
}
.card {
  padding: 2%;
  border: none;
  font-family: avenir;
  font-weight: 500;
  line-height: 2;
}
.first-card {
  border-left: none;
}
.first-card .card-body {
  background: #d47636;
  color: white;
}
.second-card .card-body {
  background: #266086;
  color: white;
}
@media only screen and (max-width: 800px) {
  h1 {
    margin-top: 3%;
  }
}
</style>
