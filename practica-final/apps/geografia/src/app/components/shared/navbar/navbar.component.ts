import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { WorldbankService } from '../../../services/worldbank.service';
import { StoreService } from '../../../store/store.service';

@Component({
  selector: 'ab-geo-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  constructor(private regs:WorldbankService,
              private storeServicio: StoreService
             ) {}

  cambiarIdioma(idioma:string){
    this.regs.idioma = idioma

    if (location.href.indexOf("/home") != -1){
      this.regs.getRegiones().subscribe(res => {
        this.storeServicio.LeerRegiones(res)
    })
    }else if (location.href.indexOf("/region") != -1){
      console.log(location.href.substring(location.href.lastIndexOf("/")+1))
      this.regs.getRegion(location.href.substring(location.href.lastIndexOf("/")+1)).subscribe(res => {
        this.storeServicio.LeerRegion(res)
      })
      this.regs.getPaises(location.href.substring(location.href.lastIndexOf("/")+1)).subscribe(res => {
        this.storeServicio.LeerPaises(res)
      })
    }else if (location.href.indexOf("/pais") != -1){
      this.regs.getPais(location.href.substring(location.href.lastIndexOf("/")+1)).subscribe(res => {
        this.storeServicio.LeerPais(res)
      })
    }
  }
}
