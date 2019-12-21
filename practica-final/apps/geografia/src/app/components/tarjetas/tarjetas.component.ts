import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-geo-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TarjetasComponent implements OnInit{

  //Recibiremos los Items
  @Input()
  items:any[] = [];

  constructor(private router:Router) {}

  verSeleccion(item:any){
    //Si el "Item" posee la propiedad "longitude" significara que es un PAIS, si no sera una region
    if (!item.hasOwnProperty('longitude')) {
      this.router.navigate(['/region', item.code]);
    }else{
      this.router.navigate(['/pais', item.id]);
    }
  }

  ngOnInit(){}
}

