// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles
}

interface Detalles {
  autor: string;
  year: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Sunshine',
  detalles: {
    autor: 'Eternal Sunshine',
    year: 2004
  }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;


// console.log('El volumen actual es: ', volumen);
// console.log('El segundo actual es: ', segundo);
// console.log('La cancion es: ', cancion);
// console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = dbz;

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', p3);