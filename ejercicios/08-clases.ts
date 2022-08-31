// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//
class PersonaNormal {

  constructor(
    public nombre: string,
    public direccion: string

  ) {}
}


class Heroe extends PersonaNormal {
  // alterEgo: string;
  // edad: number;
  // nombreReal: string;

  // imprimirNombre() {
  //   return this.alterEgo + ' ' + this.nombreReal;
  // }

  constructor(
    public alterEgo: string,
    public edad?: number, 
    public nombreReal?: string
     ) {
       super( nombreReal, 'New York, USA' );
     }
}

// interface Personaje {
//   alterEgo: string;
//   edad: number;
//   nombreReal: string;

//   imprimirNombre: () => string;
// }

const ironman = new Heroe('Ironman', 45, 'Tony');
// const spiderman: Personaje = {};


console.log(ironman)
