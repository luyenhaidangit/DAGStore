// Register controller
var index = angular.module('DAGStoreHome.index');
index.controller('indexController', indexController);

// Controller
function indexController($scope, apiService, sliderService, $rootScope, $timeout, $state) {
    //Load Page
    $rootScope.LoadPageSuccess = false;
    
    // Get Slider
    $scope.sliders = [];
    apiService.get("/index/showslider", null, function (result) {
        $scope.sliders = result.data;  
    }, function (error) {
        console.log("Get data fail");
    })

    //Get Event
    $scope.events = [];
    apiService.get("/index/getevents", null, function (result) {
        $scope.events = result.data;
        console.log($scope.events)
        var config = {
            selector: ".event__swiper",
            prebutton: ".event__button-prev",
            nextbutton: ".event__button-next",
        }

        sliderService.createSliderEvent(config)
    }, function (error) {
        console.log("Get data fail");
    })                                        

    // Get Suggest
    $scope.suggests = [];
    apiService.get("/index/getsuggests", null, function (result) {
        $scope.suggests = result.data;
        let setup = $scope.suggests.map((item) => {
            var config = {
                selector: ".suggest__swiper.suggest__swiper__" + item.ID,
                prebutton: ".suggest__button-prev__" + item.ID,
                nextbutton: ".suggest__button-next__" + item.ID,
            }

            sliderService.createSliderProduct(config)
        })
    }, function (error) {
        console.log("Get data fail");
    })

    // Get Product News
    $scope.productsNew = [];
    apiService.get("/index/GetProductsNewShowHomePage", null, function (result) {
       
        $scope.productsNew = result.data;
        
    }, function (error) {
        console.log("Get data fail");
    })

    //Load Page
    angular.element(function () {
        $timeout(function () {
            $rootScope.LoadPageSuccess = true;
        }, 700);
    });
}
