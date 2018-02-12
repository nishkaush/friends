<template>
<section class="container awards-div mt-5 pt-5">
  <div class="row">
    <div class="col-12 mt-0">
      <h1 class="text-center pb-0">Our Achievements</h1>
      <hr>
    </div>

    <div class="card first-card col-10 col-md-12 col-lg-6 mt-3 mx-auto">
      <img class="img-fluid rounded" src="./Home-pics/awards-1.jpg" alt="Generic placeholder image">      
      <div class="card-body text-justify">
        <h5 class="mt-3">&nbsp;Helped Children &amp; Families Stay Healthy</h5> 
        <hr class="mb-3">
        <p>
          Implemented Urban Reproductive &amp; Child Health Program (RCH) under Uttarakhand Health and Family Welfare Society. Funded by National Health Mission (NHM) as an initiative by Government of India, in this project we focussed on the health needs
        of urban poor slum population and targeted reproductive and child health, children immunisation, family welfare, family planning needs, OPD, basic lab testings and free dispensing of medicines.
        </p>
      </div>
    </div>

    <div class="card second-card col-10 col-md-12 col-lg-6 mt-3 mx-auto">
      <img class="img-fluid rounded" src="./Home-pics/junkies.jpg" alt="Generic placeholder image">
      <div class="card-body text-justify">
        <h5 class="mt-1">&nbsp;Saved Lives Through AIDS Intervention</h5> 
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
  width: 96%;
  margin-bottom: 0;
}
.card {
  padding: 2%;
  border-color: #969696;
  border-radius: none;
  border-top: none;
  border-bottom: none;
}
.first-card {
  border-left: none;
}
.second-card {
  border-right: none;
}
@media only screen and (max-width: 800px) {
  h1 {
    margin-top: 3%;
  }
}
@media screen and (max-width: 1000px) {
  .first-card {
    border-right: none;
  }
  .second-card {
    border-left: none;
  }
}
</style>
