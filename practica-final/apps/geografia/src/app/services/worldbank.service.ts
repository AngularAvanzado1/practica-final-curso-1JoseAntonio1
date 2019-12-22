import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()  //Este servicio se podra injectar en otros componentes
export class WorldbankService {
  public idioma = "en";

  constructor(private http:HttpClient
              )
  {
    //console.log('Servicio de WorldBank Listo');
  }

  //Cada metodo lleva su console.log, para controlar el numero de llamadas
  getQuery(query:string){
    //console.count(`Entra en GetQuery`);
    const url ='http://api.worldbank.org/v2/'+ this.idioma + '/' + query;
    console.log(url)
    return this.http.get<any[]>(url);
  }

  getRegionesBuscadas( nombre:string ){
    return this.getQuery('region/?format=json')
               .pipe( map( (data:any) => {
                let regiones:any[] = [];
                nombre = nombre.toLowerCase();
                for (let region of data[1]){
                  let nombreReg:string = region.name.toLowerCase();
                  if( nombreReg.indexOf(nombre) >= 0){
                    regiones.push(region);
                  }
                }
                console.log(regiones);
                return regiones;
              }));
  }

  getRegiones(){
    return this.getQuery('region/?format=json')
               .pipe( map( (data:any) => {
                let regiones:any[] = [];
                for (let region of data[1]){
                  if( region.name != ""){
                    regiones.push(region);
                  }
                }
                console.log(regiones);
                return regiones;
              }));
  }

  getRegion( id:string ){
    return this.getQuery(`region/${id}/?format=json`)
               .pipe( map( (data:any) => {
                console.log(data[1][0]);
                return data[1][0];
                }));
  }

  getPaisesBuscados(codigoRegion:string, nombre:string ){
    return this.getQuery(`region/${codigoRegion}/country?per_page=1000&format=json`)
               .pipe( map( (data:any) => {
                let paises:any[] = [];
                nombre = nombre.toLowerCase();
                for (let pais of data[1]){
                  let nombrePai:string = pais.name.toLowerCase();
                  if( nombrePai.indexOf(nombre) >= 0){
                    paises.push(pais);
                  }
                }
                console.log(paises);
                return paises;
                }));
  }

  getPaises(codigoRegion:string){
    return this.getQuery(`region/${codigoRegion}/country?per_page=1000&format=json`)
               .pipe( map( (data:any) => {
                console.log(data[1])
                return data[1]
                }));
  }

  getPais( id:string ){
    return this.getQuery(`country/${id}/?format=json`)
               .pipe( map( (data:any) => {
                console.log(data[1][0])
                return data[1][0]
              }));
  }
}

