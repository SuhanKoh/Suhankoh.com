(function() {
  var app = angular.module('SuhanProjects', []);

  app.controller('ProjectController', function(){
    this.projects = projectLists;
  });

  var projectLists = [
  { name: 'Bomberman Clone', description: "test", image: './css/images/projects/sample.jpg'},
  { name: 'Bomberman Clone2', description: "test2", image: './css/images/projects/sample.jpg'},
  { name: 'Bomberman Clone2', description: "test2", image: './css/images/projects/sample.jpg'}

  ];
})();
