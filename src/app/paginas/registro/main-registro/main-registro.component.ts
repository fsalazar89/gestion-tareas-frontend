import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToolsService } from '../../../shared/servicios/tools.service';
import { LoginService } from '../../login/servicios/login.service';
import { RegistroService } from '../servicios/registro.service';

@Component({
  selector: 'app-main-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './main-registro.component.html',
  styleUrl: './main-registro.component.css',
})
export class MainRegistroComponent {
  public formularioRegistro: FormGroup;
  public mostrarContrasena: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private registroService: RegistroService,
    private tools: ToolsService
  ) {
    this.formularioRegistro = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      confirma_clave: ['', [Validators.required]],
    });
    sessionStorage.clear();
  }

  submitForm() {
    const datos = this.formularioRegistro.value;
    if (datos.clave != datos.confirma_clave) {
      console.log('claves no son iguales');
    } else {
      delete datos.confirma_clave;
      console.log(datos);
      this.registroService
        .registrarUsuario(datos)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.router.navigate(['login']);
          },
          error: (error) => {
            console.log(error);
            // this.tools.alerta('error', error.error.mensaje);
          },
        });
    }
  }
}
