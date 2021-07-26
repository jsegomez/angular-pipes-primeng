import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  ventasNetas: number = 2567789.55672124;
  porcentajes: number = 0.48;

}
