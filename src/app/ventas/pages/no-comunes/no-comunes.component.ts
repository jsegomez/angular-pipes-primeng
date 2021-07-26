import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'; 

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  isFemenino: boolean = true;
  name: string = this.isFemenino ? 'Karla' : 'Josué';
  genre: string  = this.isFemenino ? 'femenino' : 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla',
  }

  clientes: string[] = ['María', 'José', 'Karla', 'Josué', 'Saúl', 'Victor'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'un ciente esperando',
    '=2': 'dos clientes esperando',
    'other': '# clientes esperando.' 
  }

  cambiarPersona(){
    this.isFemenino = !this.isFemenino;
    this.genre = this.isFemenino ? 'femenino' : 'masculino';
    this.name = this.isFemenino ? 'Karla' : 'Josué';
  }

  eliminarPersona(){
    const position = this.clientes.length;
    
    if(position == 0) return;
    this.clientes = this.clientes.slice(1, position);
    console.log(this.clientes.length);
    
  }

}
