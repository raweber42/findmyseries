import apiInstance from '../http.common';

class DataService {
  runSearch = (searchInput: string) : Promise<any> => (
    apiInstance.get(`/recommend?movie=${searchInput}`));
}
export default new DataService();
