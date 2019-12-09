import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()  //Este servicio se podra injectar en otros componentes
export class WorldbankService {
  regiones:any[] = [];
  paises:any[] = [];

  constructor(private http:HttpClient) {
    console.log('Servicio de WorldBank Listo');
  }

  //Cada metodo lleva su console.log, para controlar el numero de llamadas
  getQuery(query:string){
    //console.count(`Entra en GetQuery`);
    const url = `http://api.worldbank.org/v2/${query}`;
    console.log(url)
    return this.http.get<any[]>(url);
  }

  getRegiones(){
    return this.getQuery('region/?format=json')
               .pipe( map( (data:any[]) => {
                console.log(data[1])
                return data[1]
              }));
  }

  getRegion( id:string ){
    return this.getQuery(`region/${id}/?format=json`)
               .pipe( map( data => {
                console.log(data[1][0]);
                return data[1][0];
                }));
  }

  getPaises(codigoRegion:string){
    return this.getQuery(`region/${codigoRegion}/country?per_page=1000&format=json`)
               .pipe( map( data => {
                console.log(data[1])
                return data[1]
                }));
  }

  getPais( id:string ){
    return this.getQuery(`country/${id}/?format=json`)
               .pipe( map( data => {
                console.log(data[1][0])
                return data[1][0]
              }));
  }
}

