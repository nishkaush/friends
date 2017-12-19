<template>
<div class="row">
  <div class="card text-center col-sm-12">

    <div class="card-body">
      <h4 class="card-title">ASHA Training and Capacity Building</h4>
      <hr>
      <p class="card-text">Accredited Social Health Activists (ASHA's) are primarily women selected from their respective villages (one per village/locality) who work as an interface between the community and the public health system. This program aims to develop further
        skills in ASHA's so they can better represent their communities. Friends contributed to the training in Roorkee.</p>
      <button @click="visibleGallery" class="btn btn-warning btn-md showGallery">Show Gallery</button>
    </div>
    <transition enter-active-class="animated slideInUp" leave-active-class="animated fadeOutDown" appear>
      <div v-if="showGallery" class="card-footer">
        <button @click="hideGallery" id="first-close-btn" class="btn btn-danger btn-lg"><i class="fa fa-window-close" aria-hidden="true"></i></button>
        <div class="row gallery">
          <div class="col-md-4 col-sm-6" v-for="file in fileTitles" :key="file.name">
            <a class="lightbox" :href="require(`./Asha-pics/${file.name}`)">
                        <img class="img-responsive rounded" :src="require(`./Asha-pics/${file.name}`)" :alt="file.alt">
                      </a>
          </div>
          <button @click="hideGallery" id="second-btn" class="btn btn-danger btn-lg"><i class="fa fa-window-close" aria-hidden="true"></i></button>
        </div>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
import baguetteBox from 'baguetteBox.js'
import {
  fileTitles
} from './Asha-data.js'
export default {
  data() {
    return {
      showGallery: false,
      fileTitles: fileTitles
    }
  },
  methods: {
    visibleGallery() {
      this.showGallery = true;
      setTimeout(() => {
        baguetteBox.run('.gallery');
        console.log("baguebox running");
      }, 1000);
    },
    hideGallery() {
      this.showGallery = false;
      window.scrollTo(0, 1200);
    }
  }
}
</script>

<style scoped>
.card {
  background: -webkit-linear-gradient(right, #8eb200, #f4ffcc);
  background: -o-linear-gradient(right, #8eb200, #f4ffcc);
  background: -moz-linear-gradient(right, #8eb200, #f4ffcc);
  background: linear-gradient(to right, #8eb200, #f4ffcc);
  border-radius: 10px;
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
  box-shadow: 1px 1px 1px 0.06px #cc9a05;
  font-weight: 500;
  padding-left: 3%;
  padding-right: 3%;
}

.gallery {
  margin-top: 1%;
}


#first-close-btn {
  margin-bottom: 20px;
  cursor: pointer;
}


#second-btn {
  margin: 0 auto;
  cursor: pointer;
}

.baguetteBox-button {
  background-color: transparent !important;
}


@media(max-width: 768px) {
  body {
    padding: 0;
  }

  .container.gallery-container {
    border-radius: 0;
  }
}
</style>
