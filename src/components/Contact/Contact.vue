<template>
<transition enter-active-class="animated fadeInRight" appear>
  <div class="container mt-5 pt-5">
    <my-map></my-map>

    <div class="row location-text" id="our-centers">
      <div class="col-sm-12">
        <h1 class="text-center">Our Locations</h1>
      </div>

      <transition enter-active-class="animated fadeInRight" appear>
        <div class="col-sm-6">
          <div class="card bg-light mb-3">
            <div class="card-header bg-warning">Registered Office</div>
            <div class="card-body">
              <h4 class="card-title">Haridwar Main Office</h4>
              <p><span>Address:</span> 344 MIG, Vivek Vihar Colony, Ranipur More, Haridwar</p>
              <p><span>Phone:</span> +91 9412073651</p>
              <p><span>Email:</span> friendshwr@gmail.com</p>
            </div>
          </div>
        </div>
      </transition>

      <div class="col-sm-6" v-for="center in centersArr">
        <transition enter-active-class="animated fadeInRight" appear>
          <div class="card bg-light mb-3">
            <div class="card-header bg-warning">Urban Primary Health Center</div>
            <div class="card-body">
              <h4 class="card-title">{{center.centerName}}</h4>
              <p><span>Address:</span> {{center.address}}</p>
              <p><span>Phone:</span> +91 9412073651</p>
              <p><span>Email:</span> friendshwr@gmail.com</p>
            </div>
          </div>
        </transition>
      </div>


    </div>

  </div>
</transition>
</template>

<script>
import GoogleMap from "./GoogleMap.vue";
import { centersArr } from "./Data/Locations.js";
export default {
  data() {
    return {
      centersArr
    };
  },
  components: {
    "my-map": GoogleMap
  }
};
</script>

<style scoped>
/*@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.fade-enter-active {
  animation: fadeInRight 2s forwards;
}*/

h1 {
  margin-top: 4%;
}

.card {
  margin-top: 5%;
}

.card-header {
  text-align: center;
}

.card-title {
  text-align: center;
  padding: 2%;
}

.card-body {
}

.card span {
  font-weight: bold;
}
</style>
