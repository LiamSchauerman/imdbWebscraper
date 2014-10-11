angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
// return an object containing the http response

  var get = function(){
    return $http({
      method: 'GET',
      url: '/api/links'
    }).success(function(resp){
      return resp
    });
  };

  var post = function(data){
    console.log('inside post');
    return $http({
      method: 'POST',
      url: '/api/links',
      data: data
    }).success(function(resp){
      return resp
    });
  };

  return {
    get: get,
    post: post
  }

})
.factory('Search', function ($http) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server

/*  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };*/

  // return {
  // };
});
