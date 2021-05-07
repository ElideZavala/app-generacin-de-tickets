
// Leer los parametros del Url 
const searchParams = new URLSearchParams( window.location.search );

// si no existe existe el parametro de escritorio
if ( !searchParams.has('escritorio') ) {
     window.location = 'index.html';  // sacamos al usuario al index.html si no existe
     throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
console.log({ escritorio })