import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WorldbankService } from '../../services/worldbank.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-geo-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  regiones$:Observable<any[]>; //Observable

  constructor( private regs: WorldbankService) {}

  buscarRegiones(region:string){
  this.regiones$ = this.regs.getRegionesBuscadas(region);
  }

  ngOnInit(){
    //ARRAY
    //this.regs.getRegiones().subscribe((data:any[]) => {
    //  this.regiones =  data
    //  //this.regiones = [...this.regiones]
    //  console.log(this.regiones);
    //});

    //OBSERVABLE  -> No hace falta subcribirse con los observables
    this.regiones$ = this.regs.getRegiones();
  }



}
