import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ab-geo-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  //Recibiremos los Items
  @Input() items:any[] = [];

  constructor(private router:Router) { }

  verSeleccion(item:any){
    this.router.navigate(['/region', item.code]);
  }

}
