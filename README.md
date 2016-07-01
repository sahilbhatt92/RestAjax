# RestAjax
RestAjax is a simple HTTP library for in Javascript used to make restful ajax calls.

## Usage
```javascript
var restAjax = new RestAjax();
restAjax.get('http://localhost:8000/users')
.headers({'Accept': 'application/json'})
.done(function(res) {
  // res.message will fetch data from server.
  console.log(res.message);
  
  // res.status will get the http status of the request
  console.log(res.status);
});
```

## Methods

### `get()`
Ajax Get request

#### Example
```javascript
var restAjax = new RestAjax();
restAjax.get('http://localhost:8000/users')
.headers({'Accept': 'application/json'})
.done(function(res) {
  // res.message will fetch data from server.
  console.log(res.message);
  
  // res.status will get the http status of the request
  console.log(res.status);
});
```

### `post()`
Ajax POST request

#### Example
```javascript
var restAjax = new RestAjax();
restAjax.post('http://localhost:8000/users')
.headers({'Accept': 'application/json'})
.send({"name":"test user", "age": 13})
.done(function(res) {
  // res.message will fetch data from server.
  console.log(res.message);
  
  // res.status will get the http status of the request
  console.log(res.status);
});
```

### `put()`
Ajax PUT request

#### Example
```javascript
var restAjax = new RestAjax();
restAjax.put('http://localhost:8000/users/1')
.headers({'Accept': 'application/json'})
.send({"name":"test user", "age": 15})
.done(function(res) {
  // res.message will fetch data from server.
  console.log(res.message);
  
  // res.status will get the http status of the request
  console.log(res.status);
});
```

### `delete()`
Ajax DELETE request

#### Example
```javascript
var restAjax = new RestAjax();
restAjax.delete('http://localhost:8000/users/1')
.headers({'Accept': 'application/json'})
.done(function(res) {
  // res.message will fetch data from server.
  console.log(res.message);
  
  // res.status will get the http status of the request
  console.log(res.status);
});
```
