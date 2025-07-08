import { Component } from '@angular/core';
import { ToolsService } from '../../servicios/tools.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public usuario: any;

  constructor(
    private tools: ToolsService,
  ) {}

  ngOnInit() {
    const dataUsuario = {
      idUsuario: sessionStorage.getItem('id_usuario'),
      usuario: sessionStorage.getItem('usuario'),
      token: sessionStorage.getItem('token'),
    }
    this.usuario = dataUsuario;
  }

  borrarDatosSesion() {
    sessionStorage.clear();
    localStorage.clear();
  }

}
