import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private listarTareasUrl
  private crearTareasUrl
  constructor(private http: HttpClient) {
    this.listarTareasUrl = `${environment.urlMsTareas}${environment.tareasa.rutaListaTareas}`;
    this.crearTareasUrl = `${environment.urlMsTareas}${environment.tareasa.rutaCrearTarea}`;
  }

  servicioListarTareas(): Observable<any> {
    const header = {
      'Content-Type': 'application/json',
    }
    return this.http.get(`${this.listarTareasUrl}`, {headers: header, observe: 'response'});
  }

  servicioCrearTareas(datos: any): Observable<any> {
    const header = {
      'Content-Type': 'application/json',
    }
    return this.http.post(`${this.crearTareasUrl}`, datos, {headers: header, observe: 'response'});
  }
}
