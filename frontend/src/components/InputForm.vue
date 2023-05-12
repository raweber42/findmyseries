<template>
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
          v-model=store.searchInput
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useUserDataStore from '../stores/userDataStore';
import DataService from '../services/DataService';

export default defineComponent({
  setup() {
    const store = useUserDataStore();

    const runSearch = async () => {
      store.searchFinished = false;
      store.searchRunning = true;
      store.searchFailed = false;
      await DataService.runSearch(store.searchInput)
        .then((response: any) => {
          store.searchOutput = response.data;
          store.searchInput = '';
        })
        .catch((e: Error) => {
          store.searchOutput = [{ id: -1, poster_path: './assets/placeholder.jpeg', title: 'Unknown movie' }];
          store.searchInput = '';
          store.searchFailed = true;
        });
      store.searchFinished = true;
      store.searchRunning = false;
    };

    return {
      store, runSearch,
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
</style>
