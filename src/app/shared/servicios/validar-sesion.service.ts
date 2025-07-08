import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidarSesionService {

  constructor() { }
  
  servicioValidarSesion(){
    const token = sessionStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
