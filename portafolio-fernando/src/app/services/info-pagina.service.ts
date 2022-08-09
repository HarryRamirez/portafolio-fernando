import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

   info: InfoPagina = {};// usamos el interface InfoPagina
   cargada = false;

  // aqui llamamos el httpClient
  constructor(private http: HttpClient) {
    //console.log("servicio cargado");

      //  LEER ARCHIVO JSON
      this.http.get('assets/data/data-pagina.json')//ponemos la direccion por que como es local 
      // subscribe se encarga de ejecutar
      .subscribe( (resp: InfoPagina) =>{// aqui es para que cuando ponga el . en resp me de las opciones de la data
         this.cargada = true;
         this.info = resp;
        console.log(resp);// aqui muestro los datos del json en consola
      });
  }



}
