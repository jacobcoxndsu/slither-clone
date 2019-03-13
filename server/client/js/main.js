var socket = io();
var ID;
var DEBUG = false;

socket.on('connected', function (data) {

    ID = data.id;
    DEBUG = data.debug;

    if (DEBUG) {
        console.log("Connected, Your ID: " + ID);
    }
});
