import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WorldbankService } from '../../services/worldbank.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ab-geo-home',
  templateUrl: './home.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private regiones$:Observable<any[]>; //Observable
  private subject$ = new BehaviorSubject(this.get());

  constructor( private regs: WorldbankService) {
    this.set(this.regs.getRegiones())
  }

  buscarRegiones(region:string){
    this.set(this.regs.getRegionesBuscadas(region))
  }

  ngOnInit(){
    //ARRAY
    //this.regs.getRegiones().subscribe((data:any[]) => {
    //  this.regiones =  data
    //  //this.regiones = [...this.regiones]
    //  console.log(this.regiones);
    //});

    //OBSERVABLE  -> No hace falta subcribirse con los observables
    //this.regiones$ = this.regs.getRegiones();
  }

  public select$(){
    return this.subject$.asObservable();
  }

  private set(nuevoArray:Observable<any[]>){
    this.regiones$ = nuevoArray;
    this.subject$.next(this.get());
  }

  private get():Observable<any[]>{
    return this.regiones$
  }
}


