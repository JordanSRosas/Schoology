import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  ID = '';
  constructor(private router:Router, private Ruta:ActivatedRoute) { }

  MostrarProducto(ID: Number)
  {
    this.router.navigate([ 'Productos/Producto1', ID])
    this.router.navigate([ 'Productos/Producto2' ])
  }

  ngOnInit(): void {
      this.ID = this.Ruta.snapshot.params['get']('ID') + '';
  }

}
