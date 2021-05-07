

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
               ultimo: this.ultimo,
               hoy: this.hoy,
               tickets: this.tickets,
               ultimos4: this.ultimos4
          }
     }
     // Inicializar la clase
     init() {
          const data = require('../db/data.json');
          console.log(data);
     }
     // Guardar en base de datos
     guardarDB() {

     }


}


