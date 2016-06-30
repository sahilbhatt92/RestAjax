var RestAjax = function() {


	var xhttp;
	if (window.XMLHttpRequest) {
		// for modern browsers
		xhttp = new XMLHttpRequest();
	} else {
		// for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	this.outHeaders = null;
	this.requestData = null;
	
	this.headers = function(headers) {
		this.outHeaders = headers;
		return this;
	}

	this.send = function(data) {
		this.requestData = data;
		return this;
	}

	this.get = function(url) {

		xhttp.open("GET", url, true);

		for(header in this.outHeaders) {
			xhttp.setRequestHeader(header, this.outHeaders[header]);
		}

		return this;
	}

	this.post = function(url) {
		xhttp.open("POST", url, true);

		for(header in this.outHeaders) {
			xhttp.setRequestHeader(header, this.outHeaders[header]);
		}

		return this;		
	}

	this.done = function(callback) {
		console.log()
		xhttp.send(this.requestData);
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				callback(xhttp.responseText);
			}
		};
		return this;
	}
}