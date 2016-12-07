var app = angular.module('ContactApp', []);
app.controller('MainController', ['$scope', function($scope){
		$scope.title = "Tells us about your new project.",
        $scope.subtitle = 
            {
            description: "We would love to be part of your wonderful projects. First, how can we help?",
            hello: " HELLO! ",
            name: "Who are you?",
            project : "What's your project?",
            email : "Email",
            phone : "Phone",
            service : "What services can we offer?",
            purpose : "What are this project for?",
            budget : "What's your budget?", 
            other : "Comment:",
        }
            
		
    
    $scope.new_site = {
        projectTitle : 'your name or your company name',
        projectSite  : 'https://mysite.com/',
        projectEmail : 'my@email.com',
        projectPhone : 'mobile or land line',
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


