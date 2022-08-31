// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//

function queTipoSoy<T>( argumento: T ) {
  return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(1);
let soyArray = queTipoSoy([1,2,3,4,5,6,7,8]);

let soyExplicito = queTipoSoy<number>(  100 );