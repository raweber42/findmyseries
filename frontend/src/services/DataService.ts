import apiInstance from '../http.common';

class DataService {
  runSearch = (searchInput: string) : Promise<any> => (
    apiInstance.post('/recommend', JSON.stringify({
      data: searchInput,
    })));
}

export default new DataService();
