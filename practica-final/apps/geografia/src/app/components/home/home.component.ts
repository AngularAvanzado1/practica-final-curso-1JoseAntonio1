import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WorldbankService } from '../../services/worldbank.service';
import { Observable } from 'rxjs';
import { StoreService } from '../../store/store.service';
import { Region } from '../../store/store.models';

@Component({
  selector: 'ab-geo-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public regiones$:Observable<Region[]>; //Observable

  constructor(
    private regs: WorldbankService,
    private storeServicio: StoreService
  ){}

  buscarRegiones(region:string){
    //this.set(this.regs.getRegionesBuscadas(region))
  }

  ngOnInit(){
    this.regiones$ = this.storeServicio.getRegiones$();

    this.storeServicio.LeerRegiones([
      //this.regs.getRegiones().map(res  => res.json())
    ]);

    //Que esta pasando
    this.regiones$.subscribe(data => {console.log(data)});
  }
}

