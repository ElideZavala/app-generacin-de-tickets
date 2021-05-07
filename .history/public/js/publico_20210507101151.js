// Referencias
const mostrarticket1 = document.querySelector('#lblTicket1')
const mostrarticket2 = document.querySelector('#lblTicket2')
const mostrarticket3 = document.querySelector('#lblTicket3')
const mostrarticket4 = document.querySelector('#lblTicket4')

const socket = io();

socket.on('estado-actual', ( payload ) => {
     const [ ticket1, ticket2, ticket3, ticket4 ] = payload;
     console.log(ticket1.numero, ticket2.numero, ticket3.numero, ticket4.numero);

     mostrarticket1.innerText = ticket1.numero;
     mostrarticket2.innerText = ticket2.numero;
     mostrarticket3.innerText = ticket3.numero;
     mostrarticket4.innerText = ticket4.numero;     


})
