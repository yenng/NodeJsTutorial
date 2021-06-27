const fs = require('fs');

// Read dir synchronized
const files = fs.readdirSync('./');
console.log(files);

// Read dir Asynchronized
fs.readdir('./', function(err,files) {
	if(err) console.log('Error', err);
	else console.log('Result', files);
});

// Event example.
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener.
emitter.on('messageLogged', function(){
	console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');