<template>
  <div>
    <Header></Header>
    <section class="bgBlank hero mainContent">
      <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><router-link to="/"><a>NicolasThaize</a></router-link></li>
          <li class="is-active"><a href="#" aria-current="page">Contact</a></li>
        </ul>
      </nav>
      <div class="container columns marginContact">
        <div class="column">
          <h1 class="is-family-secondary has-text-black-bis has-text-weight-bold is-size-1">CONTACT ME.</h1>
          <p class="is-size-7 has-text-grey-light">All fields are required.</p>
          <div>
            <form method="post" action="#">
              <div class="field">
                <label class="label" for="name">Your name</label>
                <div class="control">
                  <input class="input" type="text" id="name">
                </div>
              </div>

              <div class="field">
                <label class="label" for="email">Your Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="email" id="email">
                  <span class="icon is-small is-left centerLetter">
                            <i class="fas fa-envelope center"></i>
                        </span>
                </div>
                <p class="help is-danger"></p>
              </div>

              <div class="field">
                <label class="label" for="message">Your message</label>
                <div class="control">
                  <textarea class="textarea" id="message"></textarea>
                </div>
              </div>

              <div class="control right">
                <button class="button styleButton" type="submit" disabled>Submit (soon)</button>
              </div>
            </form>
          </div>
        </div>
        <div class="column">
          <p>
            If you want to contact me for work or any questions, you are free to fill the form beside or sending
            me an email thanks to the button below.
          </p>
          <a href="mailto:nico.thaize@outlook.fr"><button class="button styleButton marginContact">nico.thaize@outlook.fr</button></a>
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
  name: "contact",
  components: {Footer, Header}
}
</script>

<style scoped>

</style>