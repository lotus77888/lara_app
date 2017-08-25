  var app = angular.module("myApp", ["ngRoute"]);
                    app.config(['$routeProvider', '$locationProvider','$qProvider',
function($routeProvider, $locationProvider) {
                        $routeProvider
                        .when("/", {
                           templateUrl: 'main.php'
                        })
                        .when("/london", {
                            templateUrl : "london.php",
                            controller : "londonCtrl"
                        })
                        .when("/paris", {
                            templateUrl : "paris.php",
                            controller : "parisCtrl"
                        }).otherwise({
                            redirectTo: '/'
                          });
                    }]);
                    app.controller("londonCtrl", function ($scope,$http,$location) {
                        $scope.msg = "I love London";
                            
                        $scope.myFunc = function() {
                            var data = {
                                fName: $scope.firstName,
                                lName: $scope.lastName
                            };

                             $http.post("userinfo",data).then(function(response) {
                                $location.path('/');
                                      $scope.myWelcome = response.data;
                                  });
                        };
                    });
                    app.controller("parisCtrl", function ($scope) {
                        $scope.msg = "I love Paris";
                    });