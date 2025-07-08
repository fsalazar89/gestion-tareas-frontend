import { Injectable } from '@angular/core';
import moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  public color: string;

  constructor() { this.color = ''; }
  
  obtenerFechas(){
    const hoy = new Date(); // Fecha actual
    // Colombia tiene una diferencia horaria de UTC-5 (durante el horario estándar).
    const horaColombia = hoy.getHours() - 5; // Ajuste de la hora local a la hora de Colombia
    hoy.setHours(horaColombia);

    // Clonamos la fecha actual y le sumamos 1 día
    const fechaConUnDiaMas = new Date(hoy);
    fechaConUnDiaMas.setDate(hoy.getDate() + 1);

    return { fechaActual: (hoy.toISOString()).split('T')[0], fechaConUnDiaMas: (fechaConUnDiaMas.toISOString()).split('T')[0] };
  }

  validarRangoFechas(rango: number, fechas: any){
   
    // Validación: ni fechainicio ni fechafin deben estar en ''
    if (fechas.fechainicio === '' || fechas.fechafin === '') {
      return true;
    }

    // Validación: fechafin no puede ser mayor a fechainicio
    if (fechas.fechafin < fechas.fechainicio) {
      // this.alerta('error', 'La fecha fin no puede ser mayor a la fecha inicio');
      return true;
    }

    // Convertir las fechas a objetos Date para facilitar la manipulación
    const inicio = new Date(fechas.fechainicio);
    const fin = new Date(fechas.fechafin);

    // Validación: entre fechainicio y fechafin deben haber solo 5 días
    const diffTiempo = Math.abs(fin.getTime() - inicio.getTime());
    const diffDias = Math.ceil(diffTiempo / (1000 * 60 * 60 * 24)); // Convertir diferencia de tiempo a días

    if (diffDias > rango) {
      // this.alerta('error', `No se permite seleccionar un rango de fecha mayor a ${rango} dias`);
      return true;
    }

    // Si todas las validaciones son exitosas, retornar true
    return false;

  }

  obtenerPrimerUltimoDiaMes(fecha: Date) {
    // Clonamos la fecha para no modificar la original
    let primerDiaMes = new Date(fecha.getFullYear(), fecha.getMonth(), 1);
    let ultimoDiaMes = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0);

    let fechas = {
      fechainicio: primerDiaMes.toISOString().split('T')[0], 
      fechafin: ultimoDiaMes.toISOString().split('T')[0]
    };
    return fechas;
  }

  polititicasNuevaClave(clave: string){
    const minLength = 10;
    const hasUpperCase = /[A-Z]/.test(clave);
    const hasLowerCase = /[a-z]/.test(clave);
    const hasNumber = /\d/.test(clave);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(clave);
    const isValidLength = clave.length >= minLength;

    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;
  }

  fechaHoraColombia(fecha: any) {
    
    return moment(fecha).tz('America/Bogota').format('YYYY-MM-DD');

  }
}
