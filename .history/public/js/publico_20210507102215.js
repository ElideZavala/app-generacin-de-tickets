// Referencias
const mostrarticket1 = document.querySelector('#lblTicket1');
const mostrarticket2 = document.querySelector('#lblTicket2');
const mostrarticket3 = document.querySelector('#lblTicket3');
const mostrarticket4 = document.querySelector('#lblTicket4');
const lblEscritorio1 = document.querySelector('#lblEscritorio1');
const lblEscritorio2 = document.querySelector('#lblEscritorio2');
const lblEscritorio3 = document.querySelector('#lblEscritorio3');
const lblEscritorio4 = document.querySelector('#lblEscritorio4');

const socket = io();

socket.on('estado-actual', ( payload ) => {
     const [ ticket1, ticket2, ticket3, ticket4 ] = payload;
     console.log(ticket1.numero, ticket2.numero, ticket3.numero, ticket4.numero);

     mostrarticket4.innerText = 'Ticket ' + ticket1.numero;
     mostrarticket3.innerText = 'Ticket ' + ticket2.numero;
     mostrarticket2.innerText = 'Ticket ' + ticket3.numero;
     mostrarticket1.innerText = 'Ticket ' + ticket4.numero;  
     lblEscritorio1.innerText = ticket1.escritorio;
     lblEscritorio2.innerText = ticket2.escritorio;
     lblEscritorio3.innerText = ticket3.escritorio;
     lblEscritorio4.innerText = ticket4.escritorio;  


})
