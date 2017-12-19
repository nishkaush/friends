<template>
<transition enter-active-class="animated fadeInRight" appear>
  <div class="container projects-div mt-5 pt-4">
    <div class="row" key="1">
      <div class="col-sm-12">
        <h1 class="text-center">Our Projects</h1>
      </div>
      <hr>
    </div>
    <Uphc></Uphc>
    <Hridya></Hridya>
    <Ti></Ti>
    <Telecounselling></Telecounselling>

  </div>
</transition>
</template>

<script>
import Hridya from "./Hridya/Hridya.vue";
import Telecounselling from "./Telecounselling/Telecounselling.vue";
import Ti from "./Ti/Ti.vue";
import Uphc from "./Uphc/Uphc.vue";
export default {
  components: {
    Hridya,
    Telecounselling,
    Ti,
    Uphc
  }
};
</script>

<style scoped>
.row {
  margin: 3% auto;
}

.row:first-child {
  margin: 0 auto;
}

.row:nth-child(2) {
  margin-top: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.fade-enter-active {
  animation-name: fadeIn 10s;
}

h1 {
  padding: 5%;
  padding-bottom: 3%;
}
</style>
