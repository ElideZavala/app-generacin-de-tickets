const TicketControl = require('../models/ticket-control');


const  ticketControl = new TicketControl();

const socketController = (socket) => {
        
    // Cuando un cliente se conecta 
    socket.emit( 'ultimo-ticket', ticketControl.ultimo );
    socket.emit( 'estado-actual', ticketControl.ultimos4 );
    socket.emit( 'ticket-pendientes',  ticketControl.tickets.length )

    socket.on('siguiente-ticket', ( payload, callback ) => {

        const siguiente = ticketControl.siguiente();
        callback( siguiente );

        // TODO: Notificar que hay un nuevo ticket pendiente de asignar 

    });

    socket.on('atender-ticket', ( {escritorio}, callback ) => {
        
        if( !escritorio ) {
            return callback({
                ok: false,
                msg: 'El escritorio es obligatorio'
            })
        }

        const ticket = ticketControl.atenderTicket( escritorio );

        socket.broadcast.emit( 'estado-actual', ticketControl.ultimos4 );             // Realizamos el cambio a todos. 
        socket.emit( 'ticket-pendientes',  ticketControl.tickets.length );       // realizamos el cambio solo en el que esta. 
        socket.broadcast.emit( 'ticket-pendientes',  ticketControl.tickets.length );  // Realizamos el cambio a todos.

        if ( ticketControl.tickets.length === 0 ) {
            callback({
                msg: 'Ya no hay tickets pendientes'
            })
        }

        if ( !ticket ) {
            callback({
                ok: false,
                msg: 'Ya no hay tickets pendientes'
            })
        } else {
            callback({
                ok: true,
                ticket
            })
        }
    });

}



module.exports = {
    socketController
}

