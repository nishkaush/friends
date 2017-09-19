<template>
<transition enter-active-class="animated fadeInRight" appear>
  <div class="container" enter-active-area="animated fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center about-us-heading">Reports</h1>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-12">
        <a target="_blank" href="https://drive.google.com/open?id=0Bx8HCAUydkPkOEk2YlA2RDdQLU0">Click Here for our Annual Report 2013-2014</a>
      </div>
    </div>

    <hr>
  </div>
</transition>
</template>

<script>
export default {}
</script>

<style scoped>
body {
  font-family: avenir;
}

.about-us-heading {
  padding: 2%;
  margin-top: 5%;
}


.text-tile {
  padding-top: 6%;
}

.text-tile:first-child {
  padding-top: 4%;
}

.col-xl-6 img {
  max-width: 100%;
  height: auto;
}

.col-xl-6 h5 {
  text-transform: capitalize;
  letter-spacing: 1px;
  text-align: center;
}

.col-xl-6 p {
  margin-top: 3%;
  line-height: 2;
}
</style>
