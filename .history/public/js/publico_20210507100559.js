// Referencias




const socket = io();

socket.on('estado-actual', ( payload ) => {
     const [ ticket1, ticket2, ticket3, ticket4 ] = payload;
     console.log(ticket1.numero, ticket2.numero, ticket3.numero, ticket4.numero);

})
