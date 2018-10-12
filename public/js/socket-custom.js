var socket = io();

// Escuchar informacion.
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// Escuchar informacion.
socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// Emit es para enviar informacion.
socket.emit('enviarMensaje', {
    usuario: 'Jovanhys',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor', mensaje);
});