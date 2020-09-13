import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  //TODO add endpoint into enviroment file
  private localidadesBaseURL = 'https://apis.datos.gob.ar/georef/api/localidades';

  constructor(
    private http: HttpClient
  ) { }

  private getLocalidadesURL( provincia: string ){
    return this.localidadesBaseURL + `?provincia=${ provincia.toLocaleLowerCase() }&max=1000`
  }

  public getLocalidadesByProvincia( provincia: string )  : Observable<any> {
    return this.http.get(this.getLocalidadesURL(provincia));
  }
}
