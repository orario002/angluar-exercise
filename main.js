var app = angular.module('ContactApp', []);
app.controller('MainController', ['$scope', function($scope){
		$scope.title = "Tells us about your new project.",
        $scope.subtitle = 
            {
            name: "Who are you?",
            project : "What's your project?",
            service : "What services can we offer?",
            purpose : "What are this project for?",
            budget : "What's your budget?", 
            other : "Comment:",
        }
            
		
    
    $scope.new_site = {
        projectTitle : 'your name or your company name',
        projectSite  : 'https://mysite.com/',
      services : [{
			service : "Consulting",
            selected : false,
		},
		{
        	service : "UI (User Interface)",
            selected : true,
		},
        {
            service : "UX (User Experience)",
            selected : false,
		},         
               {
            service : "Engineering",
                   selected : false,
		},  
                        {
            service : "Testing",
                            selected : false,
		}  
                       ],
              purposes : [{
			purpose : "Adobe Experience Manager (i.e AEM mobile, AEM forms)",
            selected : false,
		},
		{
        	purpose : "Mobile APP Development",
            selected : false,
		},
        {
            purpose : "TV & Set Top Box",
            selected : false,
		},         
                ]
    };
    
    $scope.submit = function() {
        console.log(JSON.stringify($scope.new_site,null, 2));
    }
    
}]);


