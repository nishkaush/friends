<template>
<nav class="navbar navbar-expand-lg sticky-top">
  <!-- menu items start here -->
  <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
    <router-link tag="img" :to="{ path:'/' }" src="/static/my-logo-v1.png" alt="Friends" class="align-top img-fluid my-logo d-none d-md-block float-md-left float-lg-none"></router-link>

    <ul class="navbar-nav justify-content-center">
      <li class="nav-item active">
        <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        <router-link :to="{path:'/'}" class="nav-link" active-class="active" exact>Home</router-link>
      </li>
      <li class="nav-item">
        <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
          </svg>
        <router-link :to="{path:'/projects'}" class="nav-link" exact active-class="active">Projects</router-link>
      </li>
      <li class="nav-item">
        <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
         </svg>
        <router-link :to="{path:'/about'}" class="nav-link" exact active-class="active">About</router-link>
      </li>
      <li class="nav-item">
        <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        <router-link :to="{path:'/contact'}" class="nav-link" exact active-class="active">Contact</router-link>
      </li>
      <li class="nav-item">
        <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
          </svg>
        <router-link :to="{path:'/reports'}" class="nav-link" exact active-class="active">Reports</router-link>
      </li>

      <li class="nav-item">
        <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <router-link :to="{path:'/events'}" class="nav-link" exact active-class="active">Events</router-link>
      </li>
    </ul>
  </div>

  <!--  icons for smaller screens starts here-->
  <div class="menu-icon-div">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          <svg fill="#fff" height="40" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </span>
      </button>
  </div>

</nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  /* background: rgba(0, 0, 0, 0.7); */
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.7) 15%,
    rgba(0, 0, 0, 0.7) 15.5%
  );
  box-shadow: 0px 0.8px 5px 1px rgba(0, 0, 0, 0.8);
  position: absolute;
  font-family: avenir;
}

.navbar-collapse {
  margin: 0;
  padding: 0.5% 0%;
}

.navbar-brand:hover {
  color: yellow;
}

.navbar {
  padding: 0;
}

.navbar-nav {
  width: 100%;
}

.my-logo {
  margin-left: 3%;
  margin-bottom: 1%;
  width: 10%;
  height: auto;
}

.nav-item {
  padding-left: 4%;
}

.nav-link {
  color: white;
  font-weight: bold;
  font-size: 1em;
  letter-spacing: 2px;
  font-family: palatino;
}

.nav-link:hover {
  color: yellow;
  cursor: pointer;
}

.router-link-exact-active {
  color: yellow;
  font-weight: bold;
}

.navbar-toggler {
  cursor: pointer;
}

.navbar-toggler:active {
  outline: none;
}

.navbar-toggler:focus {
  outline: none;
}

.navbar-toggler-icon {
  padding: 4%;
}

nav div {
  width: 10%;
  margin: 1%;
  padding: 1%;
  font-size: 0.8em;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  text-align: center;
}

nav div:hover {
  color: #ffc107;
  cursor: pointer;
}

.navbar {
  padding: 0;
}

/*@media only screen and (max-width: 600px) {
  .hidden-md-down {
    display: none;
  }
}*/
</style>
