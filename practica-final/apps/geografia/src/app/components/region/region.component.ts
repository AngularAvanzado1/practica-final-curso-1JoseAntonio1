import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldbankService } from '../../services/worldbank.service';
import { Observable } from 'rxjs';
import { StoreService } from '../../store/store.service';
import { Pais, Region } from '../../store/store.models';



@Component({
  selector: 'ab-geo-region',
  templateUrl: './region.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {
  public region$:Observable<Region>; //Observable
  public paises$:Observable<Pais[]>; //Observable

  constructor(
    private router:ActivatedRoute,
    private regs:WorldbankService,
    private routerN:Router,
    private storeServicio: StoreService,
    ) {}

  buscarPaises(pais:string){
    this.router.params.subscribe( params => {
      this.regs.getPaisesBuscados(params['code'],pais).subscribe(data => {
        this.storeServicio.LeerPaises(data)
      })
    });
  }

  regresarHome(){
    this.routerN.navigate(['/home']);
  }

  ngOnInit() {
    //Selectores
    this.paises$ = this.storeServicio.getPaises$();
    this.region$ = this.storeServicio.getRegion$();

    //Acciones
    this.storeServicio.LeerRegiones([])
    this.storeServicio.LeerPais(null)

    this.router.params.subscribe( params => {
      this.regs.getRegion(params['code']).subscribe(res => {
        this.storeServicio.LeerRegion(res)
      })
      this.regs.getPaises(params['code']).subscribe(res => {
        this.storeServicio.LeerPaises(res)
      })
    });


  }

}

