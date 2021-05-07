// Referencias HTML 
const lblEscritorio = document.querySelector('h1');
const btnAtender    = document.querySelector('button');
const lblTicket     = document.querySelector('small');
const divAlerta     = document.querySelector('.alerta');

// Leer los parametros del Url 
const searchParams = new URLSearchParams( window.location.search );

// si no existe existe el parametro de escritorio
if ( !searchParams.has('escritorio') ) {
     window.location = 'index.html';  // sacamos al usuario al index.html si no existe
     throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = escritorio;

divAlerta.getElementsByClassName.display = 'none';

const socket = io();

socket.on('connect', () => {
     btnAtender.disabled = false;
});

socket.on('disconnect', () => {
     btnAtender.disabled = true;
});

socket.on('ultimo-ticket', ( ultimo ) => {
     // lblNuevoTicket.innerText = 'Ticket ' + ultimo ;
})


btnAtender.addEventListener( 'click', () => {
    


     socket.emit( 'atender-ticket', { escritorio }, ( { ok, msg, ticket } ) => {
          
          if ( !ok ) {
               return;
          }

     })
//     socket.emit( 'siguiente-ticket', null, ( ticket ) => {
//         lblNuevoTicket.innerText = ticket; 
//     });

});