<template>
<nav class="navbar sticky-top">

  <!-- menu items start here -->
  <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
    <router-link tag="img" :to="{ path:'/' }" src="/static/my-logo-v1.png" alt="Friends" class="align-top img-fluid my-logo d-none d-md-block float-lg-none"></router-link>

    <ul class="navbar-nav justify-content-end">
      <li class="nav-item active pt-3">
        <router-link :to="{path:'/'}" class="nav-link" active-class="active" exact>
        <i class="fa fa-home fa-lg fa-fw" aria-hidden="true"></i>
        Home</router-link>
      </li>
      <li class="nav-item pt-3">
        <router-link :to="{path:'/projects'}" class="nav-link" exact active-class="active">
        <i class="fa fa-briefcase fa-fw fa-lg" aria-hidden="true"></i>
        Projects</router-link>
      </li>
      <li class="nav-item pt-3">
        <router-link :to="{path:'/about'}" class="nav-link" exact active-class="active">
        <i class="fa fa-users fa-fw fa-lg" aria-hidden="true"></i>
        About</router-link>
      </li>
      <li class="nav-item pt-3">
        <router-link :to="{path:'/contact'}" class="nav-link" exact active-class="active">
        <i class="fa fa-envelope fa-fw fa-lg" aria-hidden="true"></i>
        Contact</router-link>
      </li>
      <li class="nav-item pt-3">
        <router-link :to="{path:'/reports'}" class="nav-link" exact active-class="active">
        <i class="fa fa-folder-open fa-fw fa-lg" aria-hidden="true"></i>
        Reports</router-link>
      </li>
      <li class="nav-item pt-3">
        <router-link :to="{path:'/events'}" class="nav-link" exact active-class="active">
        <i class="fa fa-calendar fa-fw fa-lg" aria-hidden="true"></i>
        Events</router-link>
      </li>
    </ul>
  </div>

  <!--  icons for smaller screens starts here-->
  <div class="menu-icon-div" @click="addBgColor">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <!-- <i class="fa fa-bars fa-2x fa-fw navbar-toggler-icon" aria-hidden="true" d-none d-sm-blo></i> -->
      <i class="fa fa-bars fa-3x fa-fw navbar-toggler-icon" aria-hidden="true" d-block d-sm-none></i>
      </button>
  </div>

</nav>

</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      addColor: true
    };
  },
  methods: {
    iconLink(path) {
      this.$router.push({ path: path });
    },
    addBgColor() {
      console.log("bgcolor is running");
      $("nav").toggleClass("favBgColor");
      // document.querySelector("nav").classList.toggle("favBgColor");
    }
  }
};
</script>

<style scoped>
nav {
  width: 100%;
  position: absolute;
  font-family: avenir;
}

.favBgColor {
  background: rgba(0, 0, 0, 0.95);
  /* background: rgba(0, 25, 51, 0.95); */
}

.navbar-collapse {
  width: 10%;
  margin: 0;
  text-align: center;
  padding: 0.5% 0%;
}

.navbar-brand:hover {
  color: yellow;
}

.navbar-nav {
  width: 100%;
}

.my-logo {
  margin: 0 auto;
  margin-bottom: 2%;
  width: 15%;
  height: auto;
}

.nav-item {
  font-size: 1em;
  margin-right: 2%;
}

.nav-link {
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  letter-spacing: 2px;
  font-family: palatino;
  width: 20%;
  margin: 0 auto;
}

.nav-link:after {
  content: "";
  display: block;
  margin: 0 auto;
  width: 0%;
  padding-top: 5px;
  border-bottom: 1px solid transparent;
}

.nav-link:hover {
  color: yellow;
  cursor: pointer;
  transition: 0.3s color;
}
.nav-link:hover:after {
  content: "";
  display: block;
  margin: 0 auto;
  width: 100%;
  padding-top: 5px;
  border-bottom: 1px solid yellow;
  transition: 0.4s width;
}

.router-link-exact-active {
  color: yellow;
  font-weight: bold;
}

.navbar-toggler {
  cursor: pointer;
  margin: 1% auto;
}

.navbar-toggler:active {
  outline: none;
}

.navbar-toggler:focus {
  outline: none;
}

.navbar-toggler-icon {
  /* color: rgb(255, 204, 53); */
  color: #ffc107;
}

nav div {
  width: 10%;
  margin: 1%;
  padding: 1%;
  font-size: 0.8em;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: white;
  text-align: right;
}

nav div:hover {
  color: #ffc107;
  cursor: pointer;
}

.navbar {
  padding: 3%;
}

@media screen and (max-width: 700px) {
  .nav-link {
    width: 100%;
  }
}
</style>
