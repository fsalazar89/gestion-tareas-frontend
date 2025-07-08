import { Component } from '@angular/core';
import { ToolsService } from '../../../../shared/servicios/tools.service';
import { MenuComponent } from '../../../../shared/componentes/menu/menu.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'app-main-bandeja-tareas',
  imports: [MenuComponent, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './main-bandeja-tareas.component.html',
  styleUrl: './main-bandeja-tareas.component.css'
})
export class MainBandejaTareasComponent {
  public usuario: any = {};
  public listaTareas: any = [];
  public formularioEstados: FormGroup;
  public formularioCrearTarea: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private tools: ToolsService,
    private tareasService: TareasService
  ) {

    this.formularioCrearTarea = this.formBuilder.group({
      titulo_tarea: ['', [Validators.required]],
      descripcion_tarea: ['', [Validators.required]],
      fecha_vencimiento: ['', [Validators.required]],
      


    });
    this.formularioEstados = this.formBuilder.group({
      estado: ['', [Validators.required]],
    });
    this.usuario = {};
  }

  
  ngOnInit(){
    this.srvListarTareas();
  }
  guardarTarea(estado: any) {
    console.log(estado);
    console.log(this.formularioCrearTarea.value);

  }
  srvListarTareas(){
    this.tareasService.servicioListarTareas().subscribe({
      next: (evento) => {
        this.listaTareas= evento.body.datos;
        console.log(evento)
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  
  srvCrearTarea(){
    console.log(this.formularioCrearTarea.value);
    let datos = this.formularioCrearTarea.value
    datos.id_estado = 1;
    datos.id_usuario = sessionStorage.getItem('id_usuario');
    this.tareasService.servicioCrearTareas(datos).subscribe({
      next: (evento) => {
        this.listaTareas= evento.body.datos;
        console.log(evento)
        this.srvListarTareas();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
