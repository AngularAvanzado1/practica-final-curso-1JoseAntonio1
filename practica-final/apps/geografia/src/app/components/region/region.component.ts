import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldbankService } from '../../services/worldbank.service';

@Component({
  selector: 'ab-geo-region',
  templateUrl: './region.component.html',
  styles: []
})
export class RegionComponent implements OnInit {

  region:any = {};
  paises:any[] = [];
  cargando:boolean;

  constructor( private router:ActivatedRoute,
               private regs:WorldbankService ) {
    this.cargando = true;
    this.router.params.subscribe( params => {
      this.getRegion(params['code']);
      this.obtenerPaises(params['code']);
    });
  }

  getRegion(id:string){
    this.regs.getRegion(id)
             .subscribe(data => {
               this.region = data;
             });
  }

  obtenerPaises(codigoRegion:string){
    this.regs.getPaises(codigoRegion)
             .subscribe( (data:any[]) => {
               this.paises = data;
               this.cargando = false;
               console.log(this.paises);
              });
  }

  ngOnInit() {
  }

}
