(function() {
  var app = angular.module('SuhanProjects', []);

  app.controller('ProjectController', function(){
    this.projects = projectLists;
  });

  var projectLists = [
  { name: 'Tank vs Tank', description: "A Java 2d sprite game built on swing", image: './css/images/projects/tankvstank.png', url: 'https://github.com/SuhanKoh/Tank_game'},
  { name: 'Simple Calculator', description: "A simple calculator app wrote in Java", image: './css/images/projects/simplecalculator.png', url: 'https://github.com/SuhanKoh/SimpleCalculator'},
  { name: 'Bomberman Clone', description: "A bomberman clone website written with Ruby on Rails MVC.", image: './css/images/projects/bombermanclone.png', url: 'http://team-b.herokuapp.com'},
  { name: 'Encryption modes', description: "DES Encryption modes, included CBC, ECB, ORB etc", image: './css/images/projects/java.png', url: 'https://github.com/SuhanKoh/DESEncryption'}

  ];
})();
