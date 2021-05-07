const TicketControl = require('../models/ticket-control');


const  ticketControl = new TicketControl();

const socketController = (socket) => {

    socket.on('siguiente-ticket', ( payload, callback ) => {

        const siguiente = ticketControl.siguiente();
        callback( siguiente );

        // TODO: Notificar que hay un nuevo ticket pendiente de asignar 
        
    })

}



module.exports = {
    socketController
}

