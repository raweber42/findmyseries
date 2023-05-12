import { defineStore } from 'pinia';
import type { IMovie } from '@/types/IMovie';

const useUserDataStore = defineStore('store', {
  state: () => ({
    searchInput: '',
    searchOutput: [] as IMovie[],
    searchRunning: false,
    searchFinished: false,
    searchFailed: false,
  }),
  actions: {
  },
});

export default useUserDataStore;
