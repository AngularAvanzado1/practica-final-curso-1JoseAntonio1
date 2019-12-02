import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()  //Este servicio se podra injectar en otros componentes
export class WorldbankService {
  regiones:any[] = [];
  paises:any[] = [];

  constructor(private http:HttpClient) {
    console.log('Servicio de Regiones Listo');
    this.obtenerRegiones()
  }

  getQuery(query:string){
    const url = `http://api.worldbank.org/v2/${query}`;
    console.log(url);
    return this.http.get(url);
  }

  getRegiones(){
    return this.getQuery('/region/?format=json')
               .pipe( map( data => data[1] ));
  }

  getRegion( id:string ){
    return this.getQuery(`/region/${id}/?format=json`)
               .pipe( map( data => data[1][0] ));
  }

  obtenerRegiones(){
    this.getRegiones()
        .subscribe((data:any[]) => this.regiones = data );

  }

  buscarRegiones(regionBuscada:string){
    this.obtenerRegiones();
    let regionesBuscadas :any[] = [];
    regionBuscada = regionBuscada.toLowerCase();

    for(let region of this.regiones){
      let nombreReg:string = region.name.toLowerCase();
      if(nombreReg.indexOf(regionBuscada) >= 0){
        regionesBuscadas.push(region);
      }
    }
    return regionesBuscadas;
  }

  getPaises(codigoRegion:string){
    return this.getQuery(`region/${codigoRegion}/country?per_page=1000&format=json`)
               .pipe( map( data => data[1]));
  }

  obtenerPaises(codigoRegion:string){
    this.getRegiones()
        .subscribe((data:any[]) => this.regiones = data );
  }

  buscarPaises(){

  }

}

