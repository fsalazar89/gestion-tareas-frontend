export const environment = {
  production: false,
  ambiente: 'LOCAL',
  urlMsAutenticacion: 'http://localhost:8099/api/v1',
  urlMsTareas: 'http://localhost:8098/api/v1',
  login: {
    rutaLogin: '/admin/autenticacion',
  },
  registro: {
    rutaRegistro: '/admin/registrar_usuario',
  },
  tareasa:{
    rutaListaTareas: '/tareas/listar_tarea',
    rutaCrearTarea: '/tareas/registrar_tarea',
  },
};
