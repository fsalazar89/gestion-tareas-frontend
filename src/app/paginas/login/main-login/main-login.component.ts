import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToolsService } from '../../../shared/servicios/tools.service';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-main-login',
  imports: [ReactiveFormsModule],
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.css'
})
export class MainLoginComponent {
  public formularioLogin: FormGroup;
  public mostrarContrasena: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: LoginService,
    private tools: ToolsService
  ){
    this.formularioLogin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.required]],
    });
    sessionStorage.clear();
  }


  submitForm(){
    console.log(this.formularioLogin.value);

    this.authService.inicioSesion(this.formularioLogin.value).subscribe({
      next: (data)=>{
        console.log(data)
        sessionStorage.setItem('id_usuario',data.body.datos.id);
        sessionStorage.setItem('usuario',data.body.datos.usuario);
        sessionStorage.setItem('token',data.body.datos.token);
        this.router.navigate(['tareas/bandeja-tareas']);
      },
      error: (error)=>{
        console.log(error)
        // this.tools.alerta('error', error.error.mensaje);
      }
    })
  }
}
