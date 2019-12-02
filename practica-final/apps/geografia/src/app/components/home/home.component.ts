import { Component, OnInit } from '@angular/core';
import { WorldbankService } from '../../services/worldbank.service';

@Component({
  selector: 'ab-geo-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  regiones:any[] = [];
  cargando:boolean;

  constructor( private regs: WorldbankService) {
    this.cargando = true;
    this.obtenerRegiones();
  }

  obtenerRegiones(){
    this.regs.getRegiones()
             .subscribe( (data:any[]) => {
               this.regiones = data
               //console.log(this.regiones);
               this.cargando = false;
              });
  }

  buscarRegiones(region:string){
    this.cargando = true;
    this.regiones = this.regs.buscarRegiones(region);
    this.cargando = false;
  }

  ngOnInit(){}



}
