var mytodo = angular.module("mytodo",[]);

mytodo.controller("navCtrl",function($scope) {
    $scope.mainnav={

        "height" :"50%",
        "width" : "1368px",
        "vertical-align": "middle",
        "text-align": "center",
        "overflow" : "hidden",
        "display":"inline-block",
        "background-color" : "#708090",
        "margin-left":"-10px",


    }
    $scope.style ={
        "width" : "100%",
        "height" : "100%",
        "vertical-align": "middle",
        "text-align": "center",
        "overflow" : "hidden",
        "height" : "44px",
        "display":"block"
    }
    $scope.mytask = {
        "vertical-align": "middle",
        "text-align": "center",
        "display":"inline-block",
        "margin-left":"350px",
        "color":"white",
        "font-size" : "16px",
        "padding-top": "13px",
        "text-decoration": "none",
        "height" : "50px",



    }
    $scope.focus = {
        "vertical-align": "middle",
        "text-align": "center",
        "display":"inline-block",
        "color":"white",
        "margin-left" : "80px",
        "text-decoration-line": "none",
        "margin-top" : "-16px",
        "padding" : "1px"

    }
    $scope.history = {
        "vertical-align": "middle",
        "text-align": "center",
        "display":"inline-block",
        "color":"white",
        "margin-left" : "80px",
        "margin-top" : "-16px",
        "text-decoration-line": "none"

    }
    $scope.settings = {
        "vertical-align": "middle",
        "text-align": "center",
        "display":"inline-block",
        "color":"white",
        "margin-left" : "80px",
        "margin-top" : "-16px",
        "text-decoration-line": "none"

    }
    $scope.login = {
        "vertical-align": "middle",
        "text-align": "center",
        "display":"inline-block",
        "color":"white",
        "margin-left" : "250px",
        "margin-top" : "-16px",
        "text-decoration-line": "none"

    }

});