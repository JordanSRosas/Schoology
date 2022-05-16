import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.css']
})
export class GuardarProductoComponent implements OnInit {

  datos: any;

  inicializaDatos(){
    this.datos = new FormGroup({
      nombre: new FormControl('prueba',[Validators.required, Validators.email]),
      password: new FormControl("password")
    })
  }

  constructor() {
    this.inicializaDatos()
  }

  ngOnInit(): void {
  }

}
