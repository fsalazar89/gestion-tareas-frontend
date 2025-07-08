import { CanActivateFn, Router } from '@angular/router';
import { ValidarSesionService } from '../shared/servicios/validar-sesion.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const validarSesionService = inject(ValidarSesionService);
  const router = inject(Router);

  try {
    
    const response = validarSesionService.servicioValidarSesion()
    if (response) {
      return response;
    } else {
      router.navigate(['/login']);
      return false;
    }
  } catch (error) {
    router.navigate(['/login']);
    return false;
  }
};
