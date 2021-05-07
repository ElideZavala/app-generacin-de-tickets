// Referencias HTML
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');

const socket = io();



socket.on('connect', () => {
     btnCrear.disabled = false;
});

socket.on('disconnect', () => {
     btnCrear.disabled = true;
});


btnCrear.addEventListener( 'click', () => {
    
    socket.emit( 'siguiente-ticket', payload, ( id ) => {
        console.log('Desde el server', id );
    });

});

console.log('Nuevo Ticket HTML');