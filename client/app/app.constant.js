(function(angular, undefined) {
  angular.module("openshiftBasicApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);