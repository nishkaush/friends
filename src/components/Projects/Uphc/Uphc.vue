<template>
<div class="row">
  <div class="card text-center col-sm-12">

    <div class="card-body">
      <h4 class="card-title">Urban Primary Health Centers (UPHC's)</h4>
      <hr>
      <p class="card-text">Launched under the National Urban Health Mission (NUHM), this project provides healthcare and medical services to the urban slum population. We have been running it since August 2010 in the Roorkee Area.</p>
      <button @click="visibleGallery" class="btn btn-warning btn-md showGallery">Show Gallery</button>
    </div>
    <transition enter-active-class="animated slideInUp" leave-active-class="animated fadeOutDown" appear>
      <div v-if="showGallery" class="card-footer">
        <button @click="hideGallery" id="first-close-btn" class="">
          <i class="fa fa-times fa-2x" aria-hidden="true"></i>
       </button>
        <div class="row gallery">
          <div class="col-md-4 col-sm-6" v-for="file in fileTitles" :key="file.name">
            <a class="lightbox" :href="require(`./Uphc-pics/${file.name}`)">
              <img class="img-responsive rounded" :src="require(`./Uphc-pics/${file.name}`)" :alt="file.alt">
            </a>
          </div>
          <button @click="hideGallery" id="second-btn" class="">
            <i class="fa fa-times fa-2x" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
import baguetteBox from "baguetteBox.js";
import { fileTitles } from "./Uphc-data.js";
export default {
  data() {
    return {
      showGallery: false,
      fileTitles: fileTitles
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
      window.scrollTo(0, 70);
    }
  }
};
</script>

<style scoped>
.card {
  border: 5px solid #7d26cd;
  border-radius: 10px 50px;
}

.card-text {
  letter-spacing: 1px;
  font-size: 1em;
}

.card-footer {
  background: none;
  /*box-shadow: 0 10px 15px rgba(0, 0, 0, 0.06);*/
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
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  color: red;
  background: transparent;
}

#second-btn {
  border: none;
  margin: 0 auto;
  cursor: pointer;
  color: red;
  background: transparent;
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
