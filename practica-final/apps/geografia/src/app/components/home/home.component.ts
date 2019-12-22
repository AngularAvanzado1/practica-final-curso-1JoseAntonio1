import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorldbankService } from '../../services/worldbank.service';
import { Observable  } from 'rxjs';
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
    this.regs.getRegionesBuscadas(region).subscribe(data => {
      this.storeServicio.LeerRegiones(data)
    })
  }

  ngOnInit(){
    //SELECTORES
    this.regiones$ = this.storeServicio.getRegiones$();

    //ACCIONES
    //this.storeServicio.LeerPaises([])

    this.regs.getRegiones().subscribe(res => {
        this.storeServicio.LeerRegiones(res)
    })
  }
}

