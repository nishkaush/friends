<template>
<div class="container card-deck-div mt-5 pt-5">
  <h1 class="pb-3">Latest Events</h1>
  <!-- <hr> -->
  <div class="card-deck flex-sm-column flex-lg-row">
    <div class="card mb-5 mb-lg-0 col-11 col-sm-9 col-md-10 col-lg-12">
      <img class="card-img-top" src="./../Events/Cleaniness/Cleaniness-pics/bright.jpg" alt="Our Team supports Clean India Mission">
      <div class="card-body text-justify">
        <h4 class="card-title">Clean India Mission</h4>
        <hr class="d-none d-sm-block">
        <p class="card-text d-none d-sm-block">We went above and beyond to fully support the Swachh Bharat Abhiyan introduced by Prime Minister Modi.</p>
        <p class="d-none d-sm-block text-center">Organised on 23 Feb 2017.</p>
      </div>
      <div class="card-footer text-center">
        <router-link tag="button" :to="{ path:'/events'}" class="btn btn-warning btn-sm py-3 px-5" exact>Show More</router-link>
      </div>
    </div>
    <div class="card mb-5 mb-lg-0 col-11 col-sm-9 col-md-10 col-lg-12">
      <img class="card-img-top" src="./Home-pics/mas-main.jpg" alt="Card image cap">
      <div class="card-body text-justify">
        <h4 class="card-title">Mahila Aarogya Samiti</h4>
        <hr class="d-none d-sm-block">
        <p class="card-text d-none d-sm-block"> A group of local women who focus on helping other women in their respective local areas to raise issues faced in the under-privileged sections of the society.</p>
        <p class="d-none d-sm-block text-center">An ongoing campaign.</p>
      </div>
      <div class="card-footer text-center">
        <router-link tag="button" :to="{ path:'/events#mas'}" class="btn btn-warning btn-sm py-3 px-5" exact>Show More</router-link>
      </div>
    </div>
    <div class="card mb-0 mb-lg-0 col-11 col-sm-9 col-md-10 col-lg-12">
      <img class="card-img-top" src="./../Events/Wad/Wad-pics/kids-books.jpg" alt="Card image cap">
      <div class="card-body text-justify">
        <h4 class="card-title">World AIDS Day</h4>
        <hr class="d-none d-sm-block">        
        <p class="card-text d-none d-sm-block">We organised this event to provide books and food to the children living in the slums near Birla Ghat (Haridwar) while spreading awareness about AIDS with the locals.</p>
        <p class="d-none d-sm-block text-center">Carried out on 1 December 2013.</p>
      </div>
      <div class="card-footer text-center">
        <router-link tag="button" :to="{path:'/events#wad'}" class="btn btn-warning btn-sm py-3 px-5" exact>Show More</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-deck-div h1 {
  padding: 0%;
  text-align: center;
  font-family: baskerville;
  font-size: 2.5em;
}
.card {
  padding: 0;
}
.card-title {
  text-align: center;
  line-height: 1.5;
}

.card-body {
  font-size: 1em;
  text-align: center;
}

button {
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.card-footer {
  border: none;
  background: white;
}

@media only screen and (max-width: 575px) {
  .card-deck-div h1 {
    margin-top: 10%;
  }
  .card-body {
    padding-bottom: 0%;
    padding-top: 1%;
  }
}
@media screen and (max-width: 1000px) {
  .card {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
