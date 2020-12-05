<template>
  <div>
    <Header></Header>
    <section class="bgBlank hero mainContent">
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/">NicolasThaize</a></li>
          <li class="is-active"><a href="#" aria-current="page">Works</a></li>
        </ul>
      </nav>
      <div class="hero-body center">
        <div class="container columns marginBottomLess noShadow" id="cardContainer">
          <div class="card column is-6 animCard noShadow marginRightWorks">
            <a href="https://raphiatome.github.io/projects/daedz/index.html" target="_blank">
              <div class="absolute px-3">
                <div class="cardTxtCustom txtSlide has-text-centered is-vcentered">
                  <h2 class="has-text-weight-bold is-family-secondary">Des Ailes et des Z</h2>
                  <i class="fas fa-circle" style="font-size: 0.3rem"></i>
                  <p>Development Front-End</p>
                  <p>HTML / CSS</p>
                </div>
              </div>
              <div class="card-image cardBgCustom">
                <figure class="image has-ratio">
                  <img src="../assets/img/daedz.jpg" alt="logo des ailes et des z">
                </figure>
              </div>
            </a>
          </div>
          <div class="card column is-6 animCard noShadow">
            <a href="under-construction">
              <div class="absolute px-3">
                <div class="cardTxtCustom txtSlide has-text-centered is-vcentered">
                  <h2 class="has-text-weight-bold is-family-secondary">StephiPlace</h2>
                  <i class="fas fa-circle" style="font-size: 0.3rem"></i>
                  <p>Development Front-End & Back-End</p>
                  <p>HTML / CSS / PHP</p>
                </div>
              </div>
              <div class="card-image cardBgCustom">
                <figure class="image has-ratio">
                  <img src="../assets/img/stephiplace.jpg" alt="page d'acceuil stephiplace">
                </figure>
              </div>
            </a>
          </div>
        </div>
        <!--<div class="container columns noShadow">
            <div class="card column is-6 animCard noShadow">
                <a href="">
                    <div class="absolute px-3">
                        <div class="cardTxtCustom txtSlide has-text-centered is-vcentered">
                            <h2 class="has-text-weight-bold is-family-secondary">Des Ailes et des Z</h2>
                            <i class="fas fa-circle" style="font-size: 0.3rem"></i>
                            <p>Development Front-End</p>
                            <p>HTML / CSS</p>
                        </div>
                    </div>
                    <div class="card-image cardBgCustom">
                        <figure class="image has-ratio">
                            <img src="/img/daedz.jpg" alt="logo des ailes et des z">
                        </figure>
                    </div>
                </a>
            </div>
            <div class="card column is-6 animCard noShadow">
                <a href="">
                    <div class="absolute px-3">
                        <div class="cardTxtCustom txtSlide has-text-centered is-vcentered">
                            <h2 class="has-text-weight-bold is-family-secondary">StephiPlace</h2>
                            <i class="fas fa-circle" style="font-size: 0.3rem"></i>
                            <p>Development Front-End & Back-End</p>
                            <p>HTML / CSS / PHP</p>
                        </div>
                    </div>
                    <div class="card-image cardBgCustom">
                        <figure class="image has-ratio">
                            <img src="/img/stephiplace.png" alt="page d'acceuil stephiplace">
                        </figure>
                    </div>
                </a>
            </div>
        </div>-->
      </div>
      <div class="hero-foot columns">
        <div class="left desktop column">
          <a href="/" class="marginLinks">
            <div>
              <p>About me</p>
            </div>
            <div class="left">
              <i class="fas fa-chevron-left animArrowLeft"></i>
            </div>
          </a>
        </div>
        <div class="right desktop column">
          <a href="skills" class="marginLinks">
            <div>
              <p>My Skills</p>
            </div>
            <div class="right">
              <i class="fas fa-chevron-right animArrowRight"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer";

export default {
  name: 'Works',
  components: {
    Header,
    Footer
  },
  metaInfo: {
    title: "My works - Nicolas THAIZE"
  }
}
</script>

<style scoped>
@import "../assets/css/works.css";
</style>
