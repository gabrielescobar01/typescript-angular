// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

//

interface SuperHeroe {
  nombre: string;
  edad: number;
  direccion: Direccion,
  mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
  nombre: 'Spiderman',
  edad: 30,
  direccion: {
    calle: 'Main St',
    pais: 'USA',
    ciudad: 'NY'
  },
  mostrarDireccion() {
    return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
  }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );
