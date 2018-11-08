var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
  $scope.Warrior = {Class: "Warrior",Sthrength: 10,Agility: 2, Mana: 0};
  $scope.Druid = {Class: "Druid",Sthrength: 5,Agility: 10, Mana: 5};
  $scope.Mage = {Class: "Mage",Sthrength: 2,Agility: 2, Mana: 10};
});

app.directive("role", function(){
  var directive = {};
  directive.restrict = 'E';
  directive.template = "{{role.Class}} has {{role.Strength}} Sthrength, {{role.Agility}} agility and {{role.Mana}} mana points";
  directive.scope = { role: "=class" };

  directive.compile = function(element, attributes){
    var ExplainFunc = function($scope, element, attributes){
      element.bind('click', function() {
        element.html('This is a non playable character');
      });
    }
    return ExplainFunc;
  }
  return directive;
});