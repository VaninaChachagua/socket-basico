const { io } = require('../server');
//Saber cuando un usuario se conecta al server
// client trae toda la inf de la computadora que se conecto
io.on('connection', (client) => {

    console.log('Usuario conectado');

    //Enviar mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);
        //Enviar a todos
        client.broadcast.emit('enviarMensaje', mensaje);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal!'
        //     });
        // }

    });


});