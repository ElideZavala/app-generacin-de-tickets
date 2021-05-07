
// Leer los parametros del Url 
const searchParams = new URLSearchParams( window.location.search );

// si no existe existe el parametro de escritorio
if ( !searchParams.has('escritorio') ) {
     window.location = 'index.html';  // sacamos al usuario al index.html si no existe
     throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');

const socket = io();

socket.on('connect', () => {
     btnCrear.disabled = false;
});

socket.on('disconnect', () => {
     btnCrear.disabled = true;
});

socket.on('ultimo-ticket', ( ultimo ) => {
     lblNuevoTicket.innerText = 'Ticket ' + ultimo ;
})


btnCrear.addEventListener( 'click', () => {
    
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        lblNuevoTicket.innerText = ticket; 
    });

});