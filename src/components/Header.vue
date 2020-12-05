<template>
  <section class="hero">
    <div class="hero-head">
      <div class="columns is-mobile is-marginless bgBlank">
        <div class="column left">
          <figure class="image">
            <a href="/"><img src="../assets/img/logo.png" style="width: 5rem;" alt="Logo"></a>
          </figure>
        </div>
        <div class="column center desktop has-text-weight-bold is-family-secondary navShow">
          <a href="/" class="navbar-item has-text-black leftAnim">ABOUT ME</a>
          <i class="fas fa-circle has-text-black" style="font-size: 0.3rem"></i>
          <a href="works" class="navbar-item has-text-black midAnim">MY WORKS</a>
          <i class="fas fa-circle has-text-black" style="font-size: 0.3rem;"></i>
          <a href="skills" class="navbar-item has-text-black rightAnim">MY SKILLS</a>
        </div>
        <div class="column right">
          <div class="right desktop navShow">
            <a class="navbar-item" style="color: rgb(33,33,33);" href="contact">Contact</a>
            <a class="navbar-item" style="color: rgb(33,33,33);"
               href="https://www.linkedin.com/in/nicolas-thaize-130912193" target="_blank">LinkedIn</a>
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
          <li><a href="/" class="navbar-item has-text-white has-text-weight-bold">ABOUT ME</a></li>
          <div class="divider"></div>
          <li><a href="works" class="navbar-item has-text-white has-text-weight-bold">MY WORKS</a></li>
          <div class="divider"></div>
          <li><a href="skills" class="navbar-item has-text-white has-text-weight-bold">MY SKILLS</a></li>
          <div class="divider"></div>
          <li class="column">
            <a href="contact" class="has-text-white">Contact</a>
            <a href="https://www.linkedin.com/in/nicolas-thaize-130912193"
               class="navbar-item has-text-white" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>