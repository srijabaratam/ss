mytodo.controller('dateCtrl',['$scope',function($scope) {
    $scope.today =  new moment().format("ddd,MMM Do");
    var date1=new moment();
    $scope.previous=function(){
        $scope.today = date1.subtract('1', 'd').format("ddd,MMM Do");
    };

    $scope.next=function(){
        $scope.today = date1.add('1', 'd').format("ddd,MMM Do");
    };
}]);
