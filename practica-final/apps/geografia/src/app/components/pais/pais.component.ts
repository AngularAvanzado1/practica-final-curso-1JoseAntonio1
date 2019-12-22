import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldbankService } from '../../services/worldbank.service';
import { StoreService } from '../../store/store.service';
import { Observable } from 'rxjs';
import { Pais, Region } from '@practica-final/domain';

@Component({
  selector: 'ab-geo-pais',
  templateUrl: './pais.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaisComponent implements OnInit {
  pais$:Observable<Pais>;
  region$:Observable<Region>;

  constructor( private router:ActivatedRoute,
               private regs:WorldbankService,
               private routerN:Router,
               private storeServicio: StoreService ) {}

  regresarRegion(){
    this.region$.subscribe(data => {
      this.routerN.navigate(['/region',data.code]);
    })
  }

  ngOnInit() {
     //Selectores
    this.pais$ = this.storeServicio.getPais$();
    this.region$ = this.storeServicio.getRegion$();

    //Acciones
    //this.storeServicio.LeerPaises([])

    this.router.params.subscribe( params => {
      this.regs.getPais(params['code']).subscribe(data => {
        this.storeServicio.LeerPais(data)
        })
    });
  }

}
