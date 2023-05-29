import apiInstance from '../http.common';

class DataService {
  runSearch = async (searchInput: string) => {
    const data = await apiInstance.get(`/recommend?movie=${searchInput}`);
    return data;
  }

  // runSearchNoQuery = async () => {
  //   const data = await apiInstance.get('/recommend');
  //   return data;
  // }
}
export default new DataService();
