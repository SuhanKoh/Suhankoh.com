(function(){
  var projects = [
  { name: 'Bomberman Clone', description: "test", image: './css/images/projects/sample.jpg'},
  { name: 'Bomberman Clone2', description: "test2", image: './css/images/projects/sample.jpg'}
  ];


  var app = angular.module('SuhanProject', []);

  app.controller('ProjectController', function(){
    this.product = projects
  });

})();
