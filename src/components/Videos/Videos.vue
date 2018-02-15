<template>
  <div class="container projects-div mt-5 pt-5">
    <div class="row">
      <div class="col-sm-12">
        <h1>Our Videos</h1>
      </div>
      <div class="col-sm-6 text-center">
        <iframe src="https://www.youtube.com/embed/1wppPiCZx3Q" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="col-sm-6 text-center">
        <iframe src="https://www.youtube.com/embed/bN63jzY6fMI" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="col-sm-6 text-center">
        <iframe src="https://www.youtube.com/embed/3w9RCzPVUm8" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="col-sm-6 text-center">
        <iframe src="https://www.youtube.com/embed/syFXUq1nKr8" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="col-sm-6 text-center">
        <iframe src="https://www.youtube.com/embed/tCmMm7KPkg8" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="col-sm-6 text-center">
        <iframe src="https://www.youtube.com/embed/7ETaoWZaACA" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
      <div class="col-sm-6 text-center">
        <iframe src="https://www.youtube.com/embed/LRrfJOJ-C5s" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
  </div>



</template>


<style scoped>
h1 {
  padding: 5%;
  padding-bottom: 3%;
  text-align: center;
}
.col-sm-6 {
  position: relative;
  padding-bottom: 35.25%;
  height: 0;
}
.col-sm-6 iframe {
  position: absolute;
  top: 0;
  left: 7.25%;
  width: 85%;
  height: 65%;
}

@media only screen and (max-width: 700px) {
  .col-sm-6 {
    padding-bottom: 50.25%;
  }
  .col-sm-6 iframe {
    height: 90%;
  }
}
</style>
