<template>
  <div class="app">
    <div class="content-wrap">
      <header>
        <div class="title">
          <h1>findmyseries.com</h1>
        </div>
        <div class="top-nav">
          <a class="menuOption" id="number1">more</a>
          <a class="menuOption" id="number2">stuff</a>
          <a class="menuOption" id="number3">soon</a>
        </div>
      </header>
      <!-- popups go here!-->
      <!-- <LoginPopup /> -->
      <div class="website-body">
        <div class="recommender">
          <div class="input-wrapper">
              <input
              id="inputField"
              type="text"
              @keyup.enter="runSearch(searchInput)"
              placeholder="Please enter a movie that you like"
              v-model="searchInput"
              aria-label="inputField"
            />
          </div>
          <div class="input-submit">
            <button>Start recommending</button>
          </div>
        </div>
      </div>
      <footer>
        Made with ❤️ by <a href="https://www.linkedin.com/in/ralfdimitrijweber/">Ralf</a>
      </footer>
    </div>
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
    const searchOutput = ref('');

    const runSearch = async (input: string) => {
      await DataService.runSearch(input)
        .then((response: any) => {
          searchOutput.value = response.data;
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
header {
  text-align: center;
}

.top-nav {
  overflow: hidden;
  background-color: var(--second-bg-color);
  /* margin: 0 0 1em 0; */
  padding: 10px;
  left:0px;
  right:0px;
}

.top-nav a {
  /* display: block; */
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

.input-wrapper {
  /* margin-top: 50px; */
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
}
</style>
