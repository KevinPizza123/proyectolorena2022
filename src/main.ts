import { IEstudiante } from "./entidades/estudiante";
import { IDocente } from "./entidades/docente";
import { IActividades } from "./entidades/Actividades";
import { ILibroCalificaciones } from "./entidades/libroCalificaciones";
import { ICalificaciones } from "./entidades/calificaciones";
import { ICurso } from "./entidades/curso"
import { IReporteCalificacionesDTO } from "./entidades/ReporteCalificacionesDTO";
let estudiantes: IEstudiante[] = [];
let docentes: IDocente[] = [];
let actividades: IActividades[] = [];
let libCalificaciones: ILibroCalificaciones[] = [];
let calificaciones: ICalificaciones[] = [];
let cursos: ICurso[] = [];





//Agregar Estudiante

function agregarEstudiante(): void {

  let estudianteActual: IEstudiante = {
    //id:Number(),

    cedula:leerHtml("cedula_estudiante"),
    nombre: leerHtml("nombre_estudiante"),
    edad: parseInt(leerHtml("edad_estudiante")),
    codigoMatricula: leerHtml("codigoMatricula_estudiante"),
    nivel: leerHtml("nivel_estudiante"),
  }


  estudiantes.push(estudianteActual);
  console.log(estudiantes);
  console.table(estudiantes);
  seleccionaOpcion();


}

function leerHtml(id: string): string {
  return (<HTMLInputElement>document.getElementById(id)).value;
}
// Agregar docente

function agregarDocente(): void {
  let docenteActual: IDocente = {
    cedula: leerHtml("cedula_docente"),
    nombre: leerHtml("nombre_docente"),
    edad: parseInt(leerHtml("edad_docente")),
    titulo: leerHtml("titulo_docente"),
    asignatura: leerHtml("asignatura_docente") as "Programacion " | "Metodologias" | "Analisis",
  }
  docentes.push(docenteActual);
  console.log(docentes);
  console.table(docentes);
}

//Agregar nombre actividad

function agregarActividad(): void {
  let actividadActual: IActividades = {
    nombre: leerHtml("nombre_actividad"),
  };
  actividades.push(actividadActual);
  console.table(actividades);
  console.log(actividades);
  seleccionaOpcion()
}
//Agregar Curso

function agregarCurso(): void {
  let cursoActual: ICurso = {
    nombre: leerHtml("nombre_curso"),
    duracion: leerHtml("duracion_curso"),
  }
  cursos.push(cursoActual);
  console.log(cursos);
  console.table(cursos);
  seleccionaOpcion()
}

//Agreagar libro calificaciones

function agregarCalificaciones(): void {
  let libroCalfActual: ILibroCalificaciones = {
    valor: leerHtml("valor_libroCalf"),
    curso: leerHtml("curso_libroCalf"),
    actividad: leerHtml("actividad_libroCalf"),
    notaMaxima: parseInt(leerHtml("notaMaxima_libroCalf")),
  };
  libCalificaciones.push(libroCalfActual);
  console.table(libCalificaciones);
  console.log(libCalificaciones);
  seleccionaOpcion();
}
//Asignacion calificaciones
function asignacionCalificaciones(): void {
  let asignacionesCalificaciones: ICalificaciones = {
      estudiante: leerHtml("estudiante_asignacionCalif"),
      libroCalificaciones: leerHtml("libroCalf_asignacionCalf"),
      calificacion: parseInt(leerHtml("nota_asignacionCalf")),
      nota: 0
  };
  calificaciones.push(asignacionesCalificaciones);
  console.table(calificaciones);
  console.log(calificaciones);
}



seleccionaOpcion();
function seleccionaOpcion(): void {
  //Agregar curso

  let cursoLibroCalf = document.getElementById("curso_libroCalf") as HTMLSelectElement;
  document.querySelectorAll("#curso_libroCalf option").forEach(option => option.remove());
  cursos.forEach((Curso) => {
    let opcion = document.createElement("option");
    opcion.value = Curso.nombre;
    opcion.text = Curso.nombre;
    cursoLibroCalf.add(opcion);
  })
  //Agregar Actividad
  let actividad_libroCalf = document.getElementById("actividad_libroCalf") as HTMLSelectElement;
  document.querySelectorAll("#actividad_libroCalf option").forEach(option => option.remove());
  actividades.forEach((Actividad) => {
    let opcion = document.createElement("option");
    opcion.value = Actividad.nombre;
    opcion.text = Actividad.nombre;
    actividad_libroCalf.add(opcion);
  })
  //Agregar Estudiantes

  let estudianteAsignacionCalif = document.getElementById("estudiante_asignacionCalif") as HTMLSelectElement;
  document.querySelectorAll("#estudiante_asignacionCalif option").forEach(option => option.remove());
  estudiantes.forEach((estudiante) => {
    let opcion = document.createElement("option");
    opcion.value = estudiante.nombre;
    opcion.text = estudiante.nombre;
    estudianteAsignacionCalif.add(opcion);
  })
  //Agregar libro Calificaciones

  let libroCalf_asignacionCalf = document.getElementById("libroCalf_asignacionCalf") as HTMLSelectElement;
  document.querySelectorAll("#libroCalf_asignacionCalf option").forEach(option => option.remove());
  libCalificaciones.forEach((config) => {
    let opcion = document.createElement("option");
    opcion.value = config.valor;
    opcion.text = config.valor;
    libroCalf_asignacionCalf.add(opcion);
  })

}
class RepoteCalificaciones {

  constructor(
    public estudiantes: IEstudiante[],
    public actividades: IActividades[],
    public libCalificaciones: ILibroCalificaciones[],
    public calificaciones: ICalificaciones[],
    public docentes?: IDocente[]) {

  }

  public crearLibroCalificacionesDTO(): IReporteCalificacionesDTO[] {

    let reporteLibroCalificacionesDTO: IReporteCalificacionesDTO[] = [];

    this.calificaciones.forEach((calificacion) => {

      let notaLibroCalificacionesActual = libCalificaciones.filter((item) => item.valor === calificacion.libroCalificaciones)[0];
      let estudianteActual = this.estudiantes.filter((estudiante) => estudiante.nombre === calificacion.estudiante)[0];

      let filaCalificaciones: IReporteCalificacionesDTO = {
          //* Reporte calificaciones
          curso: notaLibroCalificacionesActual.curso,
          //* Propiedades Estudiante
          codigoMatricula: estudianteActual.codigoMatricula,
          nivel: estudianteActual.nivel,
          cedula: estudianteActual.cedula,
          nombre: estudianteActual.nombre,
          edad: estudianteActual.edad,
          //* Libro calificaciones
          valor: notaLibroCalificacionesActual.valor,
          actividad: notaLibroCalificacionesActual.actividad,
          notaMaxima: notaLibroCalificacionesActual.notaMaxima,
          //* Calificaciones
          estudiante: calificacion.estudiante,
          calificacion: calificacion.calificacion,
          libroCalificaciones: calificacion.libroCalificaciones,
          nota: 0
      }
      reporteLibroCalificacionesDTO.push(filaCalificaciones);
    });

    return reporteLibroCalificacionesDTO;
  }

}


function generarReporte(): void {

  let reporteCalf: RepoteCalificaciones = new RepoteCalificaciones(estudiantes, actividades, libCalificaciones, calificaciones);

  //let reporteCalificacionesDTO = reporteCalf.crearLibroCalificacionesDTO();


  let filasReportes: IReporteCalificacionesDTO[] = reporteCalf.crearLibroCalificacionesDTO();
  let reporteTabla: HTMLTableElement = document.getElementById("reporte_tabla") as HTMLTableElement;
  filasReportes.forEach((fila) => {

    let tr: HTMLTableRowElement;
    let td: HTMLTableCellElement;

    tr = reporteTabla.insertRow(0);
    td = tr.insertCell(0);
    td.innerHTML = fila.estudiante;

    td = tr.insertCell(1);
    td.innerHTML = fila.nivel;

    td = tr.insertCell(2);
    td.innerHTML = fila.curso;

    td = tr.insertCell(3);
    td.innerHTML = fila.actividad;

    td = tr.insertCell(4);
    td.innerHTML = fila.valor;
    reporteTabla.appendChild(tr);
    
  });

}