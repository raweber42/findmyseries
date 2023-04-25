<template>
  <div class="container">
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
          <form>
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
              >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  </body>

  <div class="container website-body">
    <div class="container p-3">
      <div class="row align-items-start">
        <div class="card-group">
          <div class="card border-dark text-center shadow-lg ">
            <img class="card-img-top" src="./assets/download.jpeg" alt="movie picture">
            <div class="card-body">
              {{ searchOutput[0] }}
            </div>
          </div>
          <div class="card border-dark text-center shadow-lg">
                <img src="./assets/download.jpeg" alt="movie picture">
                <div class="card-body">
                  {{ searchOutput[1] }}
                </div>
              </div>
              <div class="card border-dark text-center shadow-lg">
                <img src="./assets/download.jpeg" alt="movie picture">
                <div class="card-body">
                  {{ searchOutput[2] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- v-for="output in searchOutput" :key="output MAYBE flex-row!"-->
      <!-- <footer>
        Made with ❤️ by <a href="https://www.linkedin.com/in/ralfdimitrijweber/">Ralf</a>
      </footer> -->
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

    const runSearch = async () => {
      await DataService.runSearch(searchInput.value)
        .then((response: any) => {
          searchOutput.value = response.data;
          searchInput.value = '';
        })
        .catch((e: Error) => {
          console.log(e);
        });
    };
    return {
      store, searchInput, searchOutput, runSearch,
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

footer a:link {
  color: var(--first-highlight-color);
  text-decoration: none;
}

footer a:hover {
  color: var(--first-highlight-color);
  text-decoration: underline;
} */
</style>
