const path = require('path');
const fs = require('fs');  // Para poder guardar la informacion

class Ticket {

     constructor ( numero, escritorio ) {
          this.numero = numero;
          this.escritorio = escritorio;
     }

}

class TicketControl {

     constructor() {
          this.ultimo   = 0;
          this.hoy      = new Date().getDate();  // Dia actual
          this.tickets  = [];
          this.ultimos4 = [];

          this.init();
     }

     get toJson() {
          return {
               ultimo:   this.ultimo,
               hoy:      this.hoy,
               tickets:  this.tickets,
               ultimos4: this.ultimos4
          }
     }
     // Inicializar la clase
     init() {
          const { hoy, tickets, ultimo, ultimos4 } = require('../db/data.json');
          if ( hoy === this.hoy ) {
               this.tickets  = tickets,
               this.ultimo   = ultimo,
               this.ultimos4 = ultimos4
          } else {
               // Es otro dia 
               this.guardarDB();
          }
     }
     // Guardar en base de datos
     guardarDB() {

          const dbPath = path.join( __dirname, '../db/data.json' );
          fs.writeFileSync( dbPath, JSON.stringify( this.toJson ) );
     }

     siguiente() { 
          this.ultimo += 1   // <== se le hira sumando 1
          const ticket = new Ticket( this.ultimo, null );
          this.tickets.push( ticket );

          this.guardarDB();
          return 'Ticket' + ticket.numero;
     }

     atenderTicket( escritorio ) {

          // No tenemos tickets
          if ( this.tickets.length === 0) {
               return null;
          }

          // Si tenemos tickets 
          const ticket = this.tickets.shift(); // Borrar el primer elemento del arreglo === ( this.tickets[0] )
          ticket.escritorio = escritorio;       // Tickets que recibimos      

          // Añadir un elemento nuevo al arreglo pero al inicio
          this.ultimos4.unshift( ticket );

          if ( this.ultimos4.length > 4 ) {
               this.ultimos4.splice( -1, 1  ) // <== cortarala un elemento y que sea el ultimo 
          }
          
          this.guardarDB();

          return ticket;
     }

}


module.exports = TicketControl;

