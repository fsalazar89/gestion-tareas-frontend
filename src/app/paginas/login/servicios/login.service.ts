import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = `${environment.urlMsAutenticacion}${environment.login.rutaLogin}`;
  }

  inicioSesion(dataLogin: any): Observable<any> {
    const header = {
      'Content-Type': 'application/json'
    }
    return this.http.post(`${this.loginUrl}`, dataLogin, {headers: header, observe: 'response', withCredentials: true});
  }
  
  cerrarSesion(): Observable<any> {
    const header = {
      'Content-Type': 'application/json',
      // // 'Authorization': this.tokenSession
    }
    return this.http.post(``, {}, {headers: header, observe: 'response', withCredentials: true});
  }
}
