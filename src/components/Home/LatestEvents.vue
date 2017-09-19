<template>
<div class="container card-deck-div">
  <h1>Latest Events</h1>
  <hr>
  <div class="card-deck row">
    <div class="card">
      <img class="card-img-top" src="./../Events/Cleaniness/Cleaniness-pics/bright.jpg" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Clean India Mission</h4>
        <p class="card-text d-none d-sm-block">We went above and beyond to fully support the Swachh Bharat Abhiyan introduced by PM Modi.</p>
        <p class="d-none d-sm-block">Organised on 23 Feb 2017.</p>
      </div>
      <div class="card-footer">
        <router-link tag="button" :to="{ path:'/events'}" class="btn btn-warning btn-block btn-large" exact>Show More</router-link>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="./Home-pics/mas-main.jpg" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Mahila Aarogya Samiti</h4>
        <p class="card-text d-none d-sm-block"> A group of local women who focus on helping other women in their respective local areas to raise issues faced in the under-privileged sections of the society.</p>
        <p class="d-none d-sm-block">An ongoing campaign.</p>
      </div>
      <div class="card-footer">
        <router-link tag="button" :to="{ path:'/events#mas'}" class="btn btn-warning btn-block btn-large" exact>Show More</router-link>
      </div>
    </div>
    <div class="card">
      <img class="card-img-top" src="./../Events/Wad/Wad-pics/kids-books.jpg" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">World AIDS Day</h4>
        <p class="card-text d-none d-sm-block">We organised this event to provide books and food to the children living in the slums near Birla Ghat (Haridwar) while spreading awareness about AIDS with the locals.</p>
        <p class="d-none d-sm-block">Carried out on 1 December 2013.</p>
      </div>
      <div class="card-footer">
        <router-link tag="button" :to="{path:'/events#wad'}" class="btn btn-warning btn-block" exact>Show More</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.card-deck-div {
  margin-top: 3%;
}

.card-deck-div h1 {
  padding: 2% 0%;
  text-align: center;
  font-family: baskerville;
  font-size: 2.5em;
}

.card-title {
  text-align: center;
  line-height: 2;
}

.card-body {
  font-size: 1em;
  text-align: center;
}

button {
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
}

.card-footer {
  border: none;
  background: white;
}

@media only screen and (max-width:575px) {
  .card-deck-div h1 {
    margin-top: 10%;
  }
  .card {
    border: none;
  }
  .card-body {
    padding-bottom: 0%;
    padding-top: 1%;
  }
  .card-footer {
    padding-top: 0%;
  }
  button {
    margin-bottom: 10%;
  }
  button:last-child {
    margin-bottom: 6%;
  }
}

@media screen and (min-wdth:577px) and (max-width:767px) {
  .card .card-footer {
    padding: 0 !important;
  }
}
</style>
