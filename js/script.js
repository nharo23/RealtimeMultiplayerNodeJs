(function() {

	// Let's self contain our demo within a CAATHelloWorld object
	var CAATHelloWorld = function() {
		return this;
	}

	// Callback for when browse is ready
	var onDocumentReady = function() {
		message({ message: ['Client', 'domReady'] });

		var clientGame = new DemoApp.DemoClientGame();
		console.log('ClientGame', clientGame);
	}

	var message = function(obj){
        var el = document.createElement('p');
        if ('announcement' in obj) el.innerHTML = '<em>' + esc(obj.announcement) + '</em>';
        else if ('message' in obj) el.innerHTML = '<b>' + esc(obj.message[0]) + ':</b> ' + esc(obj.message[1]);

		// Log if possible
        if( obj.message && window.console && console.log ) console.log(obj.message[0], obj.message[1]);

        document.getElementsByTagName('aside')[0].appendChild(el);
        document.getElementsByTagName('aside')[0].scrollTop = 1000000;
	};

	var esc = function (msg){
        return msg.replace(/</g, '&lt;').replace(/>/g, '&gt;');
     };


	// Listen for ready
	window.addEventListener('load', onDocumentReady, false);
})();
