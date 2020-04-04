var socket = io();

//Escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Emmit envían información
socket.emit('enviarMensaje', {
    usuario: 'Vanina',
    mensaje: 'Hola Mundo'
}, function(response) {
    console.log('Respuesta server:', response);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});