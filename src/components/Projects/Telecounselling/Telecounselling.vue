<template>
<div class="row">
  <div class="card text-center col-sm-12">

    <div class="card-body">
      <h4 class="card-title">Telecounselling Project</h4>
      <hr>
      <p class="card-text"> Also know as 'Hridaya Project' is aimed at reducing transmission of HIV/AIDS among Injecting Drug Users (IDU's) through awareness campaings and medical support. It is implemented by the India HIV/AIDS Alliance. This project was implemented under
        FCRA category from 2012 - 2016.
      </p>
      <button @click="visibleGallery" class="btn btn-warning showGallery">Show Gallery</button>
    </div>
    <!-- <transition enter-active-class="animated slideInUp" leave-active-class="animated fadeOutDown" appear> -->
      <div v-if="showGallery" class="card-footer">
        <button @click="hideGallery" id="second-btn" class="btn btn-lg">
          <i class="fa fa-times fa-2x" aria-hidden="true"></i></button>
        <h4>No Photos yet, Gallery coming soon!</h4>
      </div>
    <!-- </transition> -->

  </div>
</div>
</div>
</template>

<script>
import baguetteBox from "baguetteBox.js";
// import {
//   fileTitles
// } from './Hridya-data.js'
export default {
  data() {
    return {
      showGallery: false
      // fileTitles: fileTitles
    };
  },
  methods: {
    visibleGallery() {
      this.showGallery = true;

      setTimeout(() => {
        baguetteBox.run(".gallery");
        console.log("baguebox running");
      }, 1500);
    },
    hideGallery() {
      this.showGallery = false;
      window.scrollTo(0, 700);
    }
  }
};
</script>

<style scoped>
.card {
  border: 5px solid #5722ff;
  border-radius: 10px 50px;
}

.card-text {
  letter-spacing: 1px;
}

.card-footer {
  background: none;
  border: none;
  padding: 2%;
}

.img-responsive {
  width: 100%;
  height: auto;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 30px;
}

.img-responsive:hover {
  opacity: 0.7;
}

.showGallery {
  cursor: pointer;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  padding-left: 3%;
  padding-right: 3%;
  box-shadow: 1px 1px 1px 0.06px #cc9a05;
}

.gallery {
  margin-top: 1%;
}

#first-close-btn {
  margin-bottom: 20px;
  cursor: pointer;
  background: transparent;
  color: red;
  border: none;
}

#second-btn {
  margin: 0 auto;
  cursor: pointer;
  background: transparent;
  color: red;
  border: none;
}

.baguetteBox-button {
  background-color: transparent !important;
}

@media (max-width: 768px) {
  body {
    padding: 0;
  }

  .container.gallery-container {
    border-radius: 0;
  }
}
</style>
