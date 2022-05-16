import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bandera:boolean = false
  search:boolean = false

  constructor() { }

  mostrar(){
    return this.bandera = true;
  }

  buscar(){
    if (this.search == false){
      this.search = true;
    }else{
      this.search = false;
    }
  }

  ngOnInit(): void {
  }

}
