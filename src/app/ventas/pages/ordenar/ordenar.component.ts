import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saludo: string = 'Hola mundo';
  tipoTexto: boolean = false;

  convertir(){
    this.tipoTexto = !this.tipoTexto;
  }

  ordenarPor: string = 'nombre';

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      color: Color.azul,
      vuela: true
    },
    {
      nombre: 'Batman',
      color: Color.negro,
      vuela: true
    },
    {
      nombre: 'Robin',
      color: Color.verde,
      vuela: false
    },
    {
      nombre: 'Daredevil',
      color: Color.negro,
      vuela: false
    },
    {
      nombre: 'Literna verde',
      color: Color.verde,
      vuela: false
    }
  ]

}
