import AxiosConfigurationService from "./axios.configuration.service"

export default class BaseService extends AxiosConfigurationService {

  findAll = () => {
    return this.httpClient.get(this.endpoint, this.headers).then(res => res.data).catch(error => {
      return error.message
    })
  }

  findById = (id) => {
    return this.httpClient.get(this.endpoint + '/' + id, this.headers).then(res => res.data).catch(error => {
      return error.message
    })
  }

  create = (data) => {
    return this.httpClient.post(this.endpoint + '/Create', data, this.headers).then(res => {
      return res.data;
    })
  }

  createWithoutToken = (data) => {
    return this.httpClient.post(this.endpoint, data, null).then(res => {
      return res.data;
    }).catch(error => {

    })
  }

  deleteById = (id) => {
    return this.httpClient.delete(this.endpoint + '/Delete/' + id, this.headers).then(res => res.data).catch(error => {
      return error.message
    })
  }

  update = (data) => {
    return this.httpClient.put(this.endpoint + "/Update/" + data.id, data, this.headers).then(res => {
      return res.data;
    })
  }

  findByPagination = (data) => {
    data.privilege = this.privilege;
    return this.httpClient.post(this.endpoint + "/findByPagination", data, this.headers).then(res => res.data).catch(error => {

    })
  }

}
