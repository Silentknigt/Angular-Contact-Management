// contact resource

// angular.module('contactListService', ['ngResource']).
    // factory('Contact', function($resource){
  // return $resource('/contacts', {}, {
    // query: {method:'GET', isArray:true}
  // });
// });

var servicesModule = angular.module('contactapp');

	servicesModule.factory('Contacts', function($resource) {		
		
		var ContactsService = $resource('/contacts/:contact_id', {}, {
			'create'  : { method: 'POST' },
			'index'   : { method: 'GET', isArray: true },
			'show'    : { method: 'GET' },
			'update'  : { method: 'PUT' },
			'destroy' : {method: 'DELETE' }
		});
		return ContactsService;
});
