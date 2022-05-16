import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  lista:any[]=[
    {
      id:1,
      nombre:'manzana',
      precio:'50',
      imagen:'./assets/manzana.png'
    },
    {
      id:2,
      nombre:'pera',
      precio:'15',
      imagen:'./assets/pera.jpg'
    },
    {
      id:3,
      nombre:'plátano',
      precio:'35',
      imagen:'./assets/platano.jpg'
    },
    {
      id:4,
      nombre:'uva',
      precio:'50',
      imagen:'./assets/uva.jpg'
    },
    {
      id:5,
      nombre:'sandía',
      precio:'80',
      imagen:'./assets/sandia.jpg'
    }
  ];

  constructor() { }

  getProd(){
    return this.lista
  }
  
  getProdId(clave:number){
    return this.lista[clave];
  }
}
