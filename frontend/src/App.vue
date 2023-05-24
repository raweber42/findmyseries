<template>
  <div class="container content">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">findmyseries.xyz</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">More</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Stuff</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Soon</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <body>
      <InputForm></InputForm>
      <div class="container">
        <div class="text-center">
          <div class="spinner-border mt-5" role="status" v-if="store.searchRunning == true">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="container p-3">
          <div class="row row-cols-1 row-cols-md-3 align-items-start justify-content-center"
          id="card-row">
            <div v-for="(output) in store.searchOutput" :key="output.id">
              <div class="col" v-if="store.searchFinished != false && store.searchFailed != true">
                <div class="card-container">
                  <div class="card border-dark text-center shadow-lgcenter-content">
                    <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500/' + output.poster_path" alt="movie picture">
                    <div class="card-body">
                      {{ output.title }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col" v-if="store.searchFailed == true">
                <div class="card-container">
                  <div class="card border-dark text-center shadow-lgcenter-content">
                    <img class="card-img-top" src="./assets/unknown_movie.jpg" alt="movie picture">
                    <div class="card-body">
                      Sorry, I don't know this movie (yet)!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    <footer class="fixed-bottom bg-dark text-light">
      <div class="container">
        <p class="text-center mb-0">
          Made with ❤️ by <a href="https://www.linkedin.com/in/ralfdimitrijweber/">Ralf</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUserDataStore from './stores/userDataStore';
import InputForm from './components/InputForm.vue';

export default defineComponent({

  components: { InputForm },

  setup() {
    const store = useUserDataStore();

    return {
      store,
    };
  },
});
</script>

<style>
.input-group {
  margin-top: 2rem;
}

.input-group > input:focus,
.input-group > button:focus {
  box-shadow: 0 0 0 1px grey;
}

.navbar-nav li:hover {
  background-color: grey !important;
  color: white !important; /*WHY NOT WORKING??*/
  transition: .6s;
}

.card-container {
  width: 85%;
  margin: 1rem auto;
}

/* header {
  text-align: center;
}

.top-nav {
  overflow: hidden;
  background-color: var(--second-bg-color);
  padding: 10px;
  left:0px;
  right:0px;
}

.top-nav a {
  color: var(--main-font-color);
  text-align: center;
  padding: 14px 18px;
  margin: 30px 30px;
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;
  transition: .4s;
}

.top-nav a:hover {
  background-color: var(--first-highlight-color) !important;
  color: black;
}

.recommender {
  text-align: center;
  margin: 25% 0;
}

.input-wrapper input {
  margin: 1rem;
  width: 50%;
  font-family: monospace;
  text-align: center;
}

footer {
  text-align: center;
  padding-top: 4px;
  padding-bottom: 4px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
*/
footer {
  opacity: 0.97;
}

footer a:link {
  color: var(--first-highlight-color);
  text-decoration: none;
}

footer a:hover {
  color: var(--first-highlight-color);
  text-decoration: underline;
}

footer a:visited {
  color: var(--first-highlight-color);
  text-decoration: none;
}
</style>
