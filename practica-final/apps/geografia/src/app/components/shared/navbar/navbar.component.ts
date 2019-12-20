import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WorldbankService } from '../../../services/worldbank.service';

@Component({
  selector: 'ab-geo-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor(private regs:WorldbankService) { }

  cambiarIdioma(idioma:string){

  }

  ngOnInit() {
  }
}
