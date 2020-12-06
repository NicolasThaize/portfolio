<template>
  <div>
    <Header></Header>
    <section class="bgBlank hero mainContent">
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/"><a>NicolasThaize</a></router-link></li>
          <li class="is-active"><a href="#" aria-current="page">Skills</a></li>
        </ul>
      </nav>
      <div class="hero-body">
        <p class="center marginBottom20">Here is all my knowledges in computing, i know how to fully use all the technologies below.</p>
        <!-- DESKTOP -->

        <div class="columns is-marginless center is-hidden-touch">
          <div class="left column">
            <div class="container has-text-centered has-background-white-ter cornerRadius" style="width: 300px; box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);">
              <div class="marginBottom20">
                <img src="../assets/img/logiciel.png" alt="logo logiciel" class="resizeLogos">
                <p class="has-text-weight-bold is-family-secondary">SOFTWARE DEVELOPMENT</p>
              </div>
              <div>
                <p>Python</p>
                <p>C</p>
                <p>C++</p>
                <p>Java</p>
              </div>
            </div>
          </div>

          <div class="center column">
            <div class="container has-text-centered has-background-white-ter cornerRadius" style="width: 300px; box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);">
              <div class="marginBottom20">
                <img src="../assets/img/web.png" alt="logo web" class="resizeLogos">
                <p class="has-text-weight-bold is-family-secondary">WEB DEVELOPMENT</p>
              </div>
              <div>
                <p>HTML / CSS / PHP</p>
                <p>Javascript / Jquery</p>
                <p>Bulma</p>
                <p>Bootstrap</p>
                <p>WordPress</p>
              </div>
            </div>
          </div>

          <div class="right column">
            <div class="container has-text-centered has-background-white-ter cornerRadius" style="width: 300px; box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);">
              <div class="marginBottom20">
                <img src="../assets/img/infra.png" alt="logo infra" class="resizeLogos">
                <p class="has-text-weight-bold is-family-secondary">IT INFRASTRUCTURE</p>
              </div>
              <div>
                <p>SQL</p>
                <p>Linux (debian)</p>
                <p>Windows server</p>
                <p>Apache</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MOBILE -->

      <div class="is-hidden-desktop is-marginless forceMB">
        <div class="center column">
          <div class="container has-text-centered has-background-white-ter cornerRadius" style="width: 300px; box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);">
            <div class="marginBottom20">
              <img src="../assets/img/web.png" alt="logo web" class="resizeLogos">
              <p class="has-text-weight-bold is-family-secondary">WEB DEVELOPMENT</p>
            </div>
            <div>
              <p>HTML / CSS / PHP</p>
              <p>Javascript / Jquery</p>
              <p>Bulma</p>
              <p>Bootstrap</p>
              <p>WordPress</p>
            </div>
          </div>
        </div>

        <div class="left column">
          <div class="container has-text-centered has-background-white-ter cornerRadius" style="width: 300px; box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);">
            <div class="marginBottom20">
              <img src="../assets/img/logiciel.png" alt="logo logiciel" class="resizeLogos">
              <p class="has-text-weight-bold is-family-secondary">SOFTWARE DEVELOPMENT</p>
            </div>
            <div>
              <p>Python</p>
              <p>C</p>
              <p>C++</p>
              <p>Java</p>
            </div>
          </div>
        </div>

        <div class="right column">
          <div class="container has-text-centered has-background-white-ter cornerRadius" style="width: 300px; box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);">
            <div class="marginBottom20">
              <img src="../assets/img/infra.png" alt="logo infra" class="resizeLogos">
              <p class="has-text-weight-bold is-family-secondary">IT INFRASTRUCTURE</p>
            </div>
            <div>
              <p>SQL</p>
              <p>Linux (debian)</p>
              <p>Windows server</p>
              <p>Apache</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot columns">
        <div class="left desktop column">
          <router-link to="/works"><a class="marginLinks">
            <div>
              <p>My works</p>
            </div>
            <div class="left">
              <i class="fas fa-chevron-left animArrowLeft"></i>
            </div>
          </a></router-link>
        </div>
        <div class="right desktop column">
          <router-link to="/contact"><a class="marginLinks">
            <div>
              <p>Contact</p>
            </div>
            <div class="right">
              <i class="fas fa-chevron-right animArrowRight"></i>
            </div>
          </a></router-link>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "skills",
  components: {Footer, Header},
  metaInfo: {
    title: "My Skills - Nicolas THAIZE"
  }
}
</script>

<style scoped>
@import "../assets/css/skills.css";
</style>