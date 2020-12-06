<template>
  <section class="hero">
    <div class="hero-head">
      <div class="columns is-mobile is-marginless bgBlank">
        <div class="column left">
          <figure class="image">
            <router-link to="/"><a><img src="../assets/img/logo.png" style="width: 5rem;" alt="Logo"></a></router-link>
          </figure>
        </div>
        <div class="column center desktop has-text-weight-bold is-family-secondary navShow">
          <router-link to="/"><a class="navbar-item has-text-black leftAnim">ABOUT ME</a></router-link>
          <i class="fas fa-circle has-text-black" style="font-size: 0.3rem"></i>
          <router-link to="/works"><a class="navbar-item has-text-black midAnim">MY WORKS</a></router-link>
          <i class="fas fa-circle has-text-black" style="font-size: 0.3rem;"></i>
          <router-link to="/skills"><a class="navbar-item has-text-black rightAnim">MY SKILLS</a></router-link>
        </div>
        <div class="column right">
          <div class="right desktop navShow">
            <router-link to="/contact"><a class="navbar-item" style="color: rgb(33,33,33);">Contact</a></router-link>
            <a class="navbar-item" style="color: rgb(33,33,33);"
               href="https://www.linkedin.com/in/nicolas-thaize" target="_blank">LinkedIn</a>
          </div>

          <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>

        </div>
      </div>
    </div>
    <div class="has-background-black-bis is-marginless navbar-menu is-hidden-desktop">
      <div class="column center">
        <ul class="alignText">
          <li><router-link to="/"><a class="navbar-item has-text-white has-text-weight-bold">ABOUT ME</a></router-link></li>
          <div class="divider"></div>
          <li><router-link to="/works"><a class="navbar-item has-text-white has-text-weight-bold">MY WORKS</a></router-link></li>
          <div class="divider"></div>
          <li><router-link to="/skills"><a class="navbar-item has-text-white has-text-weight-bold">MY SKILLS</a></router-link></li>
          <div class="divider"></div>
          <li class="column">
            <router-link to="/contact"><a class="has-text-white">Contact</a></router-link>
            <a href="https://www.linkedin.com/in/nicolas-thaize"
               class="navbar-item has-text-white" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>