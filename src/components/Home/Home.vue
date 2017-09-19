<template>
<div class="">
  <my-carousel></my-carousel>
  <my-latestevents></my-latestevents>
  <my-current-campaign></my-current-campaign>
  <my-awards></my-awards>
</div>
</template>

<script>
import Carousel from "./Carousel.vue"
import LatestEvents from "./LatestEvents.vue"
import CurrentCampaign from "./CurrentCampaign.vue"
import Awards from "./Awards.vue"
export default {
  components: {
    "my-carousel": Carousel,
    "my-latestevents": LatestEvents,
    "my-current-campaign": CurrentCampaign,
    "my-awards": Awards
  }
}
</script>

<style scoped>

</style>
