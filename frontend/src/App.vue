<template>
  <div class="app">
    <div class="content-wrap">
      <header>
        <div class="title">
          <h1>findmeaseries.com</h1>
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
            <input placeholder="Please enter a movie that you like"/>
          </div>
          <div class="input-submit">
            <button>Start recommending</button>
          </div>
        </div>
      </div>
      <footer>
        Made with ❤️ raweber42
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
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
</style>
