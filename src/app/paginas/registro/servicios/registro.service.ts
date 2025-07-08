import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private registroUrl: string;

  constructor(private http: HttpClient) {
    this.registroUrl = `${environment.urlMsAutenticacion}${environment.login.rutaRegistro}`;
  }

  registrarUsuario(datos: any): Observable<any> {
    const header = {
      'Content-Type': 'application/json'
    }
    return this.http.post(`${this.registroUrl}`, datos, {headers: header, observe: 'response', withCredentials: true});
  }
  
}
