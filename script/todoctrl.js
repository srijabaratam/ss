mytodo.controller("taskCtrl",['$scope',function($scope){

            $scope.box={
                "background-color": "white",
                "margin-left": "450px",
                "width": "450px",
                "padding" : "20px 20px 20px 10px"
            }
            $scope.maintodo={
                "margin-top" : "-20px",
                "padding-left" : "9px"

            }
            $scope.mytext={
                "height": "30px",
                "width": "400px",
                "background-color": "#F8F8F8",
                "padding-left": "30px"
            }
            $scope.dli={
                "border-left": "none",
                "width": "102.5%",
                "min-height": "30px",
                "padding": "10px",
                "margin-left": "-40px",
                "word-break": "break-all",
                "display": "inline-block",
                "border-top": "0.02px #f1f1f1",
                "border-bottom": "0.02px solid #f1f1f1"
            }
            $scope.edits={
                "width": "18px",
                "height": "18px",
                "right": "482px",
                "position":"fixed"

            }
    $scope.dlt={
        "width": "18px",
        "height": "16px",
        "position": "fixed",
        "right": "459px"
    }
    $scope.todolist = [];
        $scope.i=[true,true,true,true,true];
        $scope.addTask = function(event) {
                if(event.which==13) {
                    if($scope.todolist.length<5){
                        switch($scope.todolist.length)
                        {
                            case 0:document.getElementById("mytext").placeholder="only four more tasks are allowed";break;
                            case 1:document.getElementById("mytext").placeholder="only three more tasks are allowed";break;
                            case 2:document.getElementById("mytext").placeholder="only two more tasks are allowed";break;
                            case 3:document.getElementById("mytext").placeholder="only one more tasks are allowed";break;
                            case 4:document.getElementById("mytext").placeholder="no more tasks are allowed";break;
                        }

                        if ($scope.todoText != undefined && $scope.todoText!="") {

                        $scope.todolist.push({text: $scope.todoText}),
                        $scope.todoText = '';
                        $scope.t=true;
                    }
                    else {
                        alert("enter text");
                        // $scope.todoText = '';
                    }
                }
                    else{
                        alert("only five tasks are allowed");
                        $scope.todoText = '';
                    }
                }

        };
            $scope.remove=function(index){
                $scope.todolist.splice(index,1);
                switch($scope.todolist.length)
                {
                case 1:document.getElementById("mytext").placeholder="only four more tasks are allowed";break;
                case 2:document.getElementById("mytext").placeholder="only three more tasks are allowed";break;
                case 3:document.getElementById("mytext").placeholder="only two more tasks are allowed";break;
                case 4:document.getElementById("mytext").placeholder="only one more tasks are allowed";break;
                case 0:document.getElementById("mytext").placeholder="only five more tasks are allowed";break;
                }
            }
            $scope.editorEnabled=function($index){
                $scope.i[$index]=false
            }
            $scope.taskshow=function($index){
                if(event.which==13) {
                    $scope.i[$index] = true
                }
            }




}]);
