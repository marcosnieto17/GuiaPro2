angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('gUAPROGRESAR2019.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('gUAPROGRESAR2019.contacto', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contacto.html',
        controller: 'contactoCtrl'
      }
    }
  })

  .state('gUAPROGRESAR2019.acercaDeLaApp', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('gUAPROGRESAR2019', {
    url: '/side-menu21',
    templateUrl: 'templates/gUAPROGRESAR2019.html',
    controller: 'gUAPROGRESAR2019Ctrl'
  })

  .state('gUAPROGRESAR2019.requisitos', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/requisitos.html',
        controller: 'requisitosCtrl'
      }
    }
  })

  .state('gUAPROGRESAR2019.registroDeUsuario', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registroDeUsuario.html',
        controller: 'registroDeUsuarioCtrl'
      }
    }
  })

  .state('gUAPROGRESAR2019.procesoDeInscripciN', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/procesoDeInscripciN.html',
        controller: 'procesoDeInscripciNCtrl'
      }
    }
  })

  .state('gUAPROGRESAR2019.preguntasFrecuentes', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/preguntasFrecuentes.html',
        controller: 'preguntasFrecuentesCtrl'
      }
    }
  })

  .state('gUAPROGRESAR2019.resultados', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/resultados.html',
        controller: 'resultadosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});