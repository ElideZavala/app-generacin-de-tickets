// Referencias
const ticket1 = document.querySelector('#lblTicket1')
const ticket2 = document.querySelector('#lblTicket2')
const ticket3 = document.querySelector('#lblTicket3')
const ticket4 = document.querySelector('#lblTicket4')

const socket = io();

socket.on('estado-actual', ( payload ) => {
     const [ ticket1, ticket2, ticket3, ticket4 ] = payload;
     console.log(ticket1.numero, ticket2.numero, ticket3.numero, ticket4.numero);

     ticket1.innerText = ticket1.numero;
     ticket2.innerText = ticket2.numero;
     ticket3.innerText = ticket3.numero;
     ticket4.innerText = ticket4.numero;     


})
