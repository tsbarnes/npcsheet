var NPCSheetApp = angular.module("NPCSheet", []);

NPCSheetApp.controller("SheetCtrl", ['$scope', '$filter', function($scope) {
  $scope.name = "";
  $scope.race = "";
  $scope.classes = [];

  var ability_score_index = {
    "Str": 0,
    "Dex": 1,
    "Con": 2,
    "Int": 3,
    "Wis": 4,
    "Cha": 5
  };
  $scope.ability_scores = [
    {
      slug: "Str",
      name: "Strength",
      base: 10,
      misc: 0
    },
    {
      slug: "Dex",
      name: "Dexterity",
      base: 10,
      misc: 0
    },
    {
      slug: "Con",
      name: "Constitution",
      base: 10,
      misc: 0
    },
    {
      slug: "Int",
      name: "Intelligence",
      base: 10,
      misc: 0
    },
    {
      slug: "Wis",
      name: "Wisdom",
      base: 10,
      misc: 0
    },
    {
      slug: "Cha",
      name: "Charisma",
      base: 10,
      misc: 0
    }
  ];
  $scope.skills = [
    {
      name: "Acrobatics",
      ability_score: "Dex",
      ranks: 0,
      bonus: 0
    }
  ];
  $scope.feats = [
    {
      name: "Example",
      description: "An example of a feat."
    }
  ];

  $scope.abilityScoreTotal = function(slug) {
    var total = 0;
    if(slug in ability_score_index) {
      var index = ability_score_index[slug];
      total = $scope.ability_scores[index].base;
      total += $scope.ability_scores[index].misc;
    }
    return total;
  };

  $scope.abilityScoreModifier = function(slug) {
    var total = $scope.abilityScoreTotal(slug);
    return Math.floor((total - 10) / 2);
  };

  $scope.skillTotal = function(skill) {
    var total = skill.ranks;
    total += $scope.abilityScoreModifier(skill.ability_score);
    total += skill.bonus;
    return total;
  };
}]);