/**
 * @class RestAjax: A Ajax class for REST calls in valina javscript
 * @description RestAjax is a simple HTTP library for in Javascript used to make restful ajax calls.
 * @version 0.0.1
 * @author Sahil Bhattacharya <me@imsahil.com> 
 */

var RestAjax = function() {

	var xhttp;
	if (window.XMLHttpRequest) {
		// for modern browsers
		xhttp = new XMLHttpRequest();
	} else {
		// for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var outHeaders = null;
	var requestData = null;
	
	/**
	 * Public headers(): Set Extra Headers
	 * @param {Object} headers 
	 * @return {Null} this
	 */
 	this.headers = function(headers) {
		outHeaders = headers;
		return this;
	}

	/**
	 * Public send(): Send request data
	 * @param {Object} data 
	 * @return {Null} this
	 */
	this.send = function(data) {
		requestData = data;
		return this;
	}

	/**
	 * Private transformRequest(): convert json object to url form encoded
	 * @param {Object} obj 
	 * @return {Null} this
	 */
	var transformRequest = function(obj) {
        var str = [];
        for(var key in obj)
        	str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
        return str.join("&");
    }

	/**
	 * Private SendServerRequest(): convert json object to url form encoded
	 * @param {String} type 
	 * @param {String} url
	 * @return {Null} this
	 */
    var SendServerRequest = function(type, url) {
		xhttp.open(type, url, true);

		if(type == "POST" || type == "PUT")
			outHeaders['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

		for(header in outHeaders) {
			xhttp.setRequestHeader(header, outHeaders[header]);
		}
    }

	/**
	 * Public get(): Ajax Get request
	 * @param {Object} url 
	 * @return {Null} this
	 */
	this.get = function(url) {
		SendServerRequest('GET', url);
		return this;
	}

	/**
	 * Public post(): Ajax POST request
	 * @param {Object} url 
	 * @return {Null} this
	 */
 	this.post = function(url) {
		SendServerRequest('POST', url);
		return this;		
	}

	/**
	 * Public put(): Ajax PUT request
	 * @param {Object} url 
	 * @return {Null} this
	 */
 	this.put = function(url) {
		SendServerRequest('PUT', url);
		return this;		
	}

	/**
	 * Public delete(): Ajax DELETE request
	 * @param {Object} url 
	 * @return {Null} this
	 */
 	this.delete = function(url) {
		SendServerRequest('DELETE', url);
		return this;
	}

	/**
	 * Public done(): capturing response and sending it through callback
	 * @param {Function} callback 
	 * @return {Null} this
	 */
 	this.done = function(callback) {
		xhttp.send(transformRequest(requestData));
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4) {
				var response = {message:xhttp.responseText, status:xhttp.status};
				callback(response);
			}
		};
	}
}