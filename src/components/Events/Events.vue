<template>
<transition enter-active-class="animated fadeInRight" appear>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center">Our Campaigns &amp; Events</h1>
      </div>
    </div>

    <Cleaniness></Cleaniness>
    <a id="cc"></a>
    <IndraDhanush></IndraDhanush>
    <a id="mas"></a>
    <Mas></Mas>
    <a id="wad"></a>
    <Wad></Wad>
    <Kishore></Kishore>
    <Asha></Asha>
    <SpecialCamps></SpecialCamps>

  </div>
</transition>
</template>

<script>
import Cleaniness from './Cleaniness/Cleaniness.vue'
import IndraDhanush from './IndraDhanush/IndraDhanush.vue'
import Mas from './Mas/Mas.vue'
import Wad from './Wad/Wad.vue'
import Kishore from './KishoreTraining/Kishore.vue'
import Asha from './AshaTraining/Asha.vue'
import SpecialCamps from './SpecialCamps/SpecialCamps.vue'
export default {
  components: {
    Cleaniness,
    IndraDhanush,
    Mas,
    Wad,
    SpecialCamps,
    Kishore,
    Asha
  }
}
</script>

<style scoped>
.row {
  margin: 3% auto;
}

#mas,
#cc,
#wad {
  display: block;
  position: relative;
  top: -300px;
}

h1 {
  padding-top: 4%;
  padding-bottom: 2%;
}
</style>
