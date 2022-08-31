// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor:
) {
  return class extends constructor {
    newPropety = "new propety";
    hello = "override";
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = 'ABC123';

  imprimir() {
    console.log('Hola Mundo');
  }
}

