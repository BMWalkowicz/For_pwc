var app = angular.module('app', []);
 
app.controller('mainCtrl', function() {

  this.postac = "Zyje";
  this.chod = "chodzi";

  this.getPlayerInfo = function(){
    alert("Npc " + this.postac + " i " + this.chod);
  };
 
});
 

app.controller('warriorCtrl', function($controller) {
 
  var childCtrl = this;

  childCtrl.child = $controller('mainCtrl', {});

  childCtrl.child.punch = "Bije";

  childCtrl.child.warriorInfo = function(){
     alert("Wojownik " + this.postac + " i " + this.chod + " i " + this.punch);
  }
 
});

//Szukam jeszcze sposobu jak zrobic aby healer dziedziczyl juz z dziedziczącego warriora

app.controller('healerCtrl', function($controller) {
 
  var child2Ctrl = this;

  child2Ctrl.child = $controller('mainCtrl', {});

  child2Ctrl.child.punch = "Leczy";

  child2Ctrl.child.healerInfo = function(){
     alert("healer " + this.postac + " i " + this.chod + " i " + this.punch);
  }
 
});