import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogoService } from 'src/app/catalogo.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  lista:any[]=[];


  constructor(private route:Router, private catalogoService:CatalogoService) {
    this.lista=this.catalogoService.getProd();
   }

  MostrarProducto(id:number)
  {
    this.route.navigate(['productos/prod',id]);
  }
  
  ngOnInit(): void {
  }

}
