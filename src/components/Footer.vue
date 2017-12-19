<template>
<footer class="container-fluid">
  <div class="row">
    <div class="col-sm-4">
      <p class="h5">Resources</p>
      <hr>

      <div><a target="_blank" href="http://www.who.int/countries/ind/en/">WHO</a></div>
      <div><a target="_blank" href="http://www.ukhfws.org/index.php ">UKHFWS</a></div>
      <div><a target="_blank" href="http://naco.gov.in/">NACO</a></div>
    </div>

    <div class="col-sm-4">
      <p class="h5">Miscellaneous</p>
      <hr>
      <div><a target="_blank" href="http://nhm.gov.in">National Health Mission</a></div>
      <div><a target="_blank" href="https://www.nhp.gov.in/">National Health Portal</a></div>
    </div>

    <div class="col-sm-4">
      <p class="h5">About</p>
      <hr>
      <router-link class="locations-quicklink" tag="div" :to="{ path: '/contact#our-centers'}">Our Locations</router-link>
      <router-link :to="{ path: '/projects'}">Galleries</router-link>
      <router-link class="locations-quicklink" tag="div" :to="{ path: '/reports'}">Annual Reports</router-link>

    </div>
    <div class="col-sm-12">
      &copy; Copyright 2017 | Friends NGO | All Rights Reserved
    </div>
  </div>

</footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background: #323232;
  color: white;
  padding-top: 4%;
  margin-top: 10%;
  font-family: avenir;
  letter-spacing: 1px;
}

footer .col-sm-4 {
  padding-bottom: 3%;
  text-align: center;
}

footer .col-sm-4 div {
  margin: 1% auto;
}

footer .col-sm-4 a {
  font-size: 0.9em;
  color: white;
}

footer .col-sm-4 a:hover {
  color: yellow;
}

footer .col-sm-12 {
  text-align: center;
  padding: 1%;
  font-size: 0.7em;
  letter-spacing: 2px;
}

.locations-quicklink {
  font-size: 0.9em;
  cursor: pointer;
}

.locations-quicklink:hover {
  text-decoration: underline;
  color: yellow;
}
hr {
  border-color: white;
}
</style>
