import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { RespuestaBusquedaPersonajesModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ServicioRickAndMorty {
  urlApi: string = 'https://rickandmortyapi.com/api';
  urlGetAllCharacters: string = '/character';

  // Cabecera
  headers = new HttpHeaders().set('Content-type', 'appliaction/json');

  constructor(private httpClient: HttpClient) {
    console.log('Servicio Rick And Morty');
  }

  public getAllCharacters(
    pagina: number
  ): Observable<RespuestaBusquedaPersonajesModel> {
    const endpoint = this.urlApi + this.urlGetAllCharacters;

    console.log('Petición a: ' + endpoint);

    let queryParams = new HttpParams().append('page', pagina);

    return this.httpClient.get<RespuestaBusquedaPersonajesModel>(endpoint, {
      headers: this.headers,
      params: queryParams,
    });
  }
}
