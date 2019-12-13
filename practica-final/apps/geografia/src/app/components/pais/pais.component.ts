import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldbankService } from '../../services/worldbank.service';

@Component({
  selector: 'ab-geo-pais',
  templateUrl: './pais.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisComponent implements OnInit {
  pais:any = {};
  region:string;
  idRegion:string;
  cargado:boolean;

  constructor( private router:ActivatedRoute,
               private regs:WorldbankService,
               private cdr:ChangeDetectorRef,
               private routerN:Router ) {
  }

  getPais(id:string){
    this.regs.getPais(id)
             .subscribe(data => {
               this.pais = data;
               this.informacion(this.pais);
               this.cargado = true;
               //Detectamos el cambio para que se vea en pantalla
               this.cdr.detectChanges();
             });
  }

  informacion(pais:any){
    this.region = this.pais.region.value;
    this.idRegion = this.pais.region.id;
  }

  regresarRegion(){
    this.routerN.navigate(['/region',this.idRegion ]);
  }

  ngOnInit() {
    this.cargado = false;
    this.router.params.subscribe( params => {
      this.getPais(params['code']);
    });
  }

}
