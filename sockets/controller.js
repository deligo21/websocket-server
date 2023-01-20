const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback)=>{

        const msgServer = 'Confirmacion del server'
        callback(msgServer);

        socket.broadcast.emit('enviar-mensaje', payload); //Enviando a todos los usuarios conectados la información que uno envie
    })
}

export {
    socketController,
}