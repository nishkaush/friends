<template>
<transition enter-active-class="animated fadeInRight" appear>
  <div class="container mt-5 pt-3" enter-active-area="animated fadeIn">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="text-center about-us-heading">Who We Are</h1>
        <h5 class="text-center">Forum for Rural Infrastructural, Environmental &amp; National Development Society (FRIENDS)</h5>
      </div>
    </div>
    <hr>
    <div class="row">

      <div class="col-xl-6 text-tile">
        <h5>Working With Our Mission</h5>
        <p> We are dedicated to promoting empowerment of people, protection of the environment, service to Humanity in health care &amp; support and respect for cultural diversity. Our commitment lies in implementing governmental schemes with the help of
          volunteer efforts so as to induce a significant change at the much needed grass roots levels of the society. </p>
      </div>
      <div class="col-xl-6">
        <img class="img-fluid" src="./About-pics/community-awareness.jpg" alt="Helping create a better society">
      </div>


      <div class="col-xl-6">
        <img class="img-fluid" src="./About-pics/chinese-doc.jpg" alt="Pioneers in social service">
      </div>
      <div class="col-xl-6 text-tile">
        <h5>Staying Focussed With Our Vision</h5>
        <p>Our organization will distinguish itself as a pioneer in rendering social welfare services. It will further be recognized for the passion of its work in providing quality, innovative care to the betterment of all the communities it will be involved
          with.
        </p>
      </div>


      <div class="col-xl-6 text-tile">
        <h5>Making a better society one friend at a time</h5>
        <p>Formed in 2000, we are a Non-Governmental Organisation (NGO) based in Haridwar, Uttarakhand. Through our continuous involvement at the grass-root levels of the society, we have been successfully addressing the health related &amp; socio-economic
          needs of the deprived sections of our society. </p>
      </div>
      <div class="col-xl-6">
        <img class="img-fluid" src="./About-pics/doc-kid-ranjana.jpg" alt="Making Friends">
      </div>


      <div class="col-xl-6">
        <img class="img-fluid" src="./About-pics/doc-bp.jpg" alt="Helping people in the slums">
      </div>
      <div class="col-xl-6 text-tile">
        <h5>Healthcare and medical services for the slums</h5>
        <p>With 15 years of experience, we have undertaken various projects targeting core issues of the urban slums like women &amp; child development, social welfare, health &amp; hygiene, family planning, Ante Natal Care (ANC), Post Natal Care (PNC) &amp;
          child immunization. We have further partnered on targeted intervention projects with focus on HIV AIDS. </p>
      </div>


      <div class="col-xl-6 text-tile">
        <h5>Dedicated and Well Trained Teams</h5>
        <p>We have experienced teams of doctors, nurses, Auxiliary Nurse Midwifery (ANM's) and General Nursing and Midwifery (GNM's). Further supporting us are Accredited Social Health Activists (ASHA's) who help in organising camps and spreading the word.
          Together, we have changed lives by bringing awareness on different health related issues. </p>
      </div>
      <div class="col-xl-6">
        <img class="img-fluid" src="./About-pics/our-team.jpg" alt="Our People">
      </div>

    </div>

    <hr>
  </div>
</transition>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  font-family: avenir;
}

.about-us-heading {
  padding: 2%;
  margin-top: 5%;
}

.text-tile {
  padding-top: 6%;
}

.text-tile:first-child {
  padding-top: 4%;
}

.col-xl-6 img {
  max-width: 100%;
  height: auto;
}

.col-xl-6 h5 {
  text-transform: capitalize;
  letter-spacing: 1px;
  text-align: center;
}

.col-xl-6 p {
  margin-top: 3%;
  line-height: 2;
}
</style>
