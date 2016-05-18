export default class MainService {
  constructor($http) {
    this.$http = $http
  }

  update() {
    return this.$http.get('http://localhost:5984/')
      .then(res => res.data.couchdb)
  }
}
