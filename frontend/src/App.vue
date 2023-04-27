<template>
  <div class="container content">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">findmyseries.com</a>
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
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <form @submit.prevent>
            <div class="input-group mb-3">
              <input
              type="text"
              class="form-control form-control-sm border border-grey"
              placeholder="You're looking for a movie like..."
              aria-label="Search Input"
              aria-describedby="search-btn"
              @keyup.enter="runSearch()"
              v-model="searchInput"
              />
              <button
              class="btn btn-outline-secondary btn-sm"
              type="button"
              id="search-btn"
              @click="runSearch()"
              >
              Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="container">
        <div class="text-center">
          <div class="spinner-border mt-5" role="status" v-if="searchRunning == true">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="container p-3">
          <div class="row row-cols-1 row-cols-md-3 align-items-start justify-content-center"
          id="card-row">
            <div v-for="output in searchOutput" :key="output">
              <div class="col" v-if="searchFinished != false">
                <div class="card-container">
                  <div class="card border-dark text-center shadow-lgcenter-content">
                    <img class="card-img-top" src="./assets/download.jpeg" alt="movie picture">
                    <div class="card-body">
                      {{ output }}
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
import { defineComponent, ref } from 'vue';
import useUserDataStore from './stores/userDataStore';
import DataService from './services/DataService';

export default defineComponent({
  setup() {
    const store = useUserDataStore();
    const searchInput = ref('');
    const searchOutput = ref([]);
    const searchFinished = ref(false);
    const searchRunning = ref(false);

    const runSearch = async () => {
      searchFinished.value = false;
      searchRunning.value = true;
      await DataService.runSearch(searchInput.value)
        .then((response: any) => {
          searchOutput.value = response.data;
          searchInput.value = '';
        })
        .catch((e: Error) => {
          console.log(e);
        });
      searchFinished.value = true;
      searchRunning.value = false;
    };

    // SAME HEIGHT CARDS
    function setEqualHeight() {
      const cardContainers = document.querySelectorAll('#card-row .card-container');
      let maxHeight = 0;
      cardContainers.forEach((cardContainer: Element) => {
        const { height } = cardContainer.getBoundingClientRect();
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
      cardContainers.forEach((cardContainer: Element) => {
        (cardContainer as HTMLElement).style.height = `${maxHeight}px`; // eslint-disable-line no-param-reassign
      });
    }

    window.addEventListener('load', setEqualHeight);
    window.addEventListener('resize', setEqualHeight);
    // SAME HEIGHT CARDS

    return {
      store, searchInput, searchOutput, searchRunning, searchFinished, runSearch,
    };
  },
});
</script>

<style>
.input-group {
  margin-top: 2rem;
}

/* input[type=text] {
  padding: 4px 8px;
} */
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
