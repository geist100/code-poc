import axios from 'axios';

export default class AxiosConfigurationService {

  constructor() {
    let BASE_URL = "https://randomuser.me/api"

    this.httpClient  = axios.create({
      baseURL : BASE_URL
    });

  }
}
