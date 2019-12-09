import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorldbankService } from '../../services/worldbank.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-geo-region',
  templateUrl: './region.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionComponent implements OnInit {
  region:any = {};
  paises$:Observable<any[]>; //Observable

  constructor( private router:ActivatedRoute,
               private regs:WorldbankService,
               private cdr:ChangeDetectorRef ) {}

  getRegion(id:string){
    this.regs.getRegion(id)
             .subscribe(data => {
               this.region = data;
               this.cdr.detectChanges();
             });
  }

  ngOnInit() {
    this.router.params.subscribe( params => {
      this.getRegion(params['code']);
      this.paises$ = this.regs.getPaises(params['code']);
    });
  }
}
