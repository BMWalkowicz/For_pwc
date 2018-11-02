var app = angular.module('app' , []);

app.controller('FCon',function($scope)
{

	$scope.wrt1 = Math.floor(Math.random()*20+1);
	$scope.wrt2 = Math.floor(Math.random()*20+1);

	$scope.refresh = function()
	{
		$scope.licz = $scope.wrt1 + ' + ' + $scope.wrt2 + " = " + (+$scope.wrt1 + + $scope.wrt2)
	};

$scope.food = [
{owoc: "Bamam"},
{owoc: "Agrest"},
{owoc: "Granat"},
{owoc: "Mandarynka"}
];

	$scope.zmienListe = function()
	{
		return $scope.pokazListe ? "ul.html" : "ol.html";
	};

$scope.blur = 0;
$scope.click = 0;
$scope.dblclick = 0;
$scope.copy = 0;
$scope.paste = 0;
$scope.cut = 0;
$scope.focus = 0;
$scope.change = 0;
$scope.mouseenter = 0;
$scope.mouseleave = 0;

$scope.filmy = [
{film: "Szybcy i wsciekli", Obejzany: false},
{film: "Krol lew", Obejzany: false},
{film: "Kiler 2", Obejzany: false},
{film: "Maczeta 2", Obejzany: false}
];

$scope.dodajFilm = function(nowyFilm)
{
	if(!(nowyFilm == undefined || nowyFilm == ""))
	{
		$scope.filmy.push({
			film: nowyFilm, Obejzany: false
		});
	}
	else
	$scope.blad = "Wprowadz tytul filmu";
};

});



