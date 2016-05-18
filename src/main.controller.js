export default class MainCtrl {
  constructor(MainService) {
    this.hello = 'hello world'
    this.MainService = MainService
  }

  greet() {
    this.MainService.update()
      .then(res => { this.hello = res })
  }
}
