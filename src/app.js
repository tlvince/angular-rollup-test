import angular from 'angular'

import MainCtrl from './main.controller'
import MainService from './main.service'

angular.module('app', [
])
  .controller('MainCtrl', MainCtrl)
  .service('MainService', MainService)
