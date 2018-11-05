var app = angular.module('app', []);

app.controller('mainCtrl', function($scope, $rootScope){
	
	$scope.pracownik = [
	{Imie: "Pawel", Nazwisko: "Trocinski", dzial: "PR"},
	{Imie: "Marcin", Nazwisko: "Dalekopolski", dzial: "Kierownik"},
	{Imie: "Basia", Nazwisko: "Kucharczuk", dzial: "Ksiegowy"},
	{Imie: "Piotr", Nazwisko: "Sfrosty", dzial: "Kadrowy"},
	{Imie: "Janusz", Nazwisko: "Tracz", dzial: "Prezes"},
	];

	$scope.ZnajdzPracownikow = function(){
		Wyszukaj($scope.dzial);
	};

	function Wyszukaj(nazwaDzial)
	{
		$scope.InfoPracownika = "Nie znaleziono takiego pracownika";
		for(var i = 0;i < $scope.pracownik.length;i++)
		{
			if($scope.pracownik[i].dzial === nazwaDzial)
			{
				$scope.InfoPracownika = $scope.pracownik[i].Imie +" "+ $scope.pracownik[i].Nazwisko + " pracuje jako " + $scope.pracownik[i].dzial; 
			}
		}
	}

	$scope.$on("pracownikDodany", function(event, args)
	{
		console.log("Imie: "+ args.Imie + "Nazwisko: "+ args.Nazwisko + "Dzial: "+ args.dzial);
		$scope.pracownik.push({
			Imie: args.Imie, Nazwisko: args.Nazwisko, dzial: args.dzial
		});
	});

	$scope.dodajPracownika = function(Imie, Nazwisko, dzial)
	{
		$rootScope.$broadcast("pracownikDodany",
			{
				Imie: Imie, Nazwisko: Nazwisko, dzial: dzial
			});
		console.log("Imie: "+ Imie + "Nazwisko: "+ Nazwisko + "Dzial: "+ dzial);
	};

});

//Jeszcze dzisiaj postaram sie wrczucic kolejny projekt gdzie przedstawie dziedziczenie controllerow. Jezeli nie dzis to jutro do 9 rano
