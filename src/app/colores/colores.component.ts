import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css']
})
export class ColoresComponent implements OnInit {

  public colorLocal: string = "Hola";
  

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  generarAleatorio(): string {

    return Math.floor(Math.random() * 255).toString(16);

  }

  colorHex(): string {
    this.colorLocal =  '#' + this.generarAleatorio() + this.generarAleatorio() + this.generarAleatorio();
    return this.colorLocal;
  }

}
