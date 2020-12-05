<template>
  <div class="home">
    <section class="bgFull hero is-fullheight borderBottom">
      <div class="hero-head">
        <div class="columns is-mobile is-marginless">
          <div class="column left">
            <figure class="image">
              <a href="/"><img src="../assets/img/logo.png" style="width: 5rem;" alt="Logo"></a>
            </figure>
          </div>
          <div class="column center desktop has-text-weight-bold is-family-secondary navShow">
            <a href="/" class="navbar-item has-text-black leftAnim">ABOUT ME</a>
            <i class="fas fa-circle has-text-black" style="font-size: 0.3rem"></i>
            <a href="pages/works" class="navbar-item has-text-black midAnim">MY WORKS</a>
            <i class="fas fa-circle has-text-black" style="font-size: 0.3rem;"></i>
            <a href="pages/skills" class="navbar-item has-text-black rightAnim">MY SKILLS</a>
          </div>
          <div class="column right">
            <div class="right desktop navShow">
              <a class="navbar-item" style="color: rgb(33,33,33);" href="pages/contact">Contact</a>
              <a class="navbar-item" style="color: rgb(33,33,33);"
                 href="https://www.linkedin.com/in/nicolas-thaize-130912193" target="_blank">LinkedIn</a>
            </div>

            <a
                role="button" class="navbar-burger " data-target="navMenu"
                aria-label="menu" aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>
        </div>
      </div>
      <div class="has-background-black-bis is-marginless navbar-menu is-hidden-desktop navCustom">
        <div class="column center">
          <ul class="alignText">
            <li>
              <a href="/" class="navbar-item has-text-white has-text-weight-bold">ABOUT ME</a>
            </li>
            <div class="divider"></div>
            <li>
              <a href="pages/works" class="navbar-item has-text-white has-text-weight-bold">MY WORKS</a>
            </li>
            <div class="divider"></div>
            <li>
              <a href="pages/skills" class="navbar-item has-text-white has-text-weight-bold">MY SKILLS</a>
            </li>
            <div class="divider"></div>
            <li class="column">
              <a href="pages/contact" class="has-text-white">Contact</a>
              <a href="https://www.linkedin.com/in/nicolas-thaize-130912193"
                 class="navbar-item has-text-white" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="columns is-mobile">
            <div class="column marginTxt">
              <p class="has-text-black-bis has-text-weight-bold center is-family-secondary" style="font-size: 2em">Nicolas THAIZE</p>
              <p class="has-text-grey-light center">
                IT STUDENT | Web Designer & Developper
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-foot columns">
        <div class="center is-mobile is-centered column desktop">
          <figure class="image is-64x64" id="imgScrollerIndex">
            <img src="../assets/img/scroll.png" alt="Icone scroll" class="animMouse">
          </figure>
        </div>
        <div class="center column"></div>
        <div class="right desktop column">
          <a href="pages/works" class="marginLinks">
            <div>
              <p>My Works</p>
            </div>
            <div class="right">
              <i class="fas fa-chevron-right animArrowRight"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
    <AboutMe></AboutMe>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    AboutMe,
    Footer
  },
  metaInfo: {
    title: "About me - Nicolas THAIZE"
  }
}
</script>
