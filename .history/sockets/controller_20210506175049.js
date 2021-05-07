const TicketControl = require('../models/ticket-control');


const  ticketControl = new TicketControl();

const socketController = (socket) => {

    socket.on('siguiente-ticket', ( payload, callback ) => {

        const siguiente = ticketControl.siguiente();
    })

}



module.exports = {
    socketController
}

