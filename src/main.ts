import {IEstudiante} from "./entidades/estudiante";
import {IDocente} from "./entidades/docente";
import { IActividades } from "./entidades/Actividades";
import { ILibroCalificaciones } from "./entidades/libroCalificaciones";
import {IReporteCalificacionesDTO} from "./entidades/ReporteCalificacionesDTO"

let estudiantes:IEstudiante[]=[];
let docentes:IDocente[]=[];
let actividades:IActividades[]=[];
let libCalificaciones:ILibroCalificaciones[]=[];
let calificaciones:ICalificaciones[]=[];
let cursos:Icurso[]=[];

enum Actividad{
    Programacion="diseño",
    Algebra="ejercicios de ecuaciones",
    Base="modelo normalizado"
}
enum Curso{
    Programacion="Programacion Visual",
    Algebra ="Algebra",
    Base="base de datos"
  }

//Agregar Estudiante

function agregarEstudiante():void{
    
   // console.log((<HTMLInputElement>document.getElementById("cedula"))!.value

    let estudianteActual :IEstudiante ={
        //id:Number(),

        cedula:leerHtml("cedula_estudiante"),
        nombre:leerHtml("nombre_estudiante"),
        edad:parseInt(leerHtml("edad_estudiante")),
        codigoMatricula:leerHtml("codigoMatricula_estudiante"),
        nivel:leerHtml("nivel_estudiante"),
    }


    estudiantes.push(estudianteActual);
    console.log(estudiantes);
    console.table(estudiantes);
    seleccionarOpcion();

   
}

function leerHtml(id:string):string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}
// Agregar docente

function agregarDocente():void{
    let docenteActual:IDocente={
        cedula:leerHtml("cedula_docente"),
        nombre:leerHtml("nombre_docente"),
        edad:parseInt(leerHtml("edad_docente")),
       titulo:leerHtml("titulo_docente"),
       asignatura:leerHtml("asignatura_docente") as "Programacion " | "Metodologias" | "Analisis" ,
    }
    docentes.push(docenteActual);
    console.log(docentes);
    console.table(docentes);


}
function agregarCurso():void{
  let addcurso:Icurso={
  nombre:leerHtml("curso_nombre"),
  duracion:leerHtml("curso_duracion")
}
   
cursos.push(addcurso);
console.log(cursos);
console.table(cursos);
seleccionarOpcion();
}

//Agregar nombre

function agregarActividad(): void {
    let actividadActual: IActividades = {
      nombre: leerHtml("nombre_actividad"),
    };
    actividades.push(actividadActual);
    console.table(actividades);
    console.log(actividades);
    seleccionarOpcion()
  }

//Agreagar libro calificaciones
seleccionarOpcion();
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
  }
 
  function asignarCalificaciones(): void {
    let asignacionCalificaciones:ICalificaciones = {
      estudiante: leerHtml("estudiante_asignacionCalf"),
      libroCalificaciones: leerHtml("libroCalf_asignacionCalf"),
      nota: parseInt(leerHtml("nota_asignacionCalf")),
      calificacion: undefined
    };
    calificaciones.push(asignacionCalificaciones);
    console.table(libCalificaciones);
    console.log(libCalificaciones);
  }

//Agregar curso

seleccionarOpcion();
  function seleccionarOpcion(): void{
    let cursoLibroCalf = document.getElementById("curso_libroCalf") as HTMLSelectElement;
    document.querySelectorAll("#curso_libroCalf option").forEach(option =>option.remove());
    cursos.forEach((curso)=>{
      let opcion = document.createElement("option");
      opcion.value = curso.nombre;
      opcion.text = curso.nombre;
      cursoLibroCalf.add(opcion);
    })
    
    let actividad_libroCalf = document.getElementById("actividad_libroCalf") as HTMLSelectElement;
    document.querySelectorAll("#actividad_libroCalf option").forEach(option =>option.remove());
    actividades.forEach((Actividad)=>{
      let opcion = document.createElement("option");
      opcion.value = Actividad.nombre;
      opcion.text = Actividad.nombre;
      actividad_libroCalf.add(opcion);
    })
    let estudianteAsignacionCalf = document.getElementById("estudiante_asignacionCalf") as HTMLSelectElement;
    document.querySelectorAll("#estudiante_asignacionCalf option").forEach(option =>option.remove());
    estudiantes.forEach((estudiante)=>{
      let opcion = document.createElement("option");
      opcion.value = estudiante.nombre;
      opcion.text = estudiante.nombre;
      estudianteAsignacionCalf.add(opcion);
    })
    let libroCalf_asignacionCalf = document.getElementById("libroCalf_asignacionCalf") as HTMLSelectElement;
    document.querySelectorAll("#libroCalf_asignacionCalf option").forEach(option =>option.remove());
    libCalificaciones.forEach((config)=>{
      let opcion = document.createElement("option");
      opcion.value = config.valor;
      opcion.text = config.valor;
      libroCalf_asignacionCalf.add(opcion);
    })
/*
}
class ReporteCalificaciones{
 
constructor(public estudiantes:IEstudiante[],
 public actividades:IActividades[],
 public libCalificaciones:ILibroCalificaciones[],
 public calificaciones:ICalificaciones[],
 public docentes?:IDocente[]){
  
  }
  public crearLibroCalificacionesDTO():IReporteCalificacionesDTO[]{
    let reporteLibroCalificacionesDTO:IReporteCalificacionesDTO[]=[];
    
    this.calificaciones.forEach(
      (calificacion) =>{
        let libroCalificacionesActual = libCalificaciones.filter((item)=>item.valor === calificacion.libroCalificaciones)[0];
        let estudianteActual = estudiantes.filter((estudiante)=>estudiante.cedula === calificacion.estudiante)[0];
        let filaCalificaciones:IReporteCalificacionesDTO=
    
    {
      //reporte calf
      curso: libroCalificacionesActual.curso,
      estudiante: estudianteActual.nombre,
      // estudiante
      codigoMatricula: estudianteActual.codigoMatricula,
      nivel: estudianteActual.nivel,
      cedula: estudianteActual.cedula,
      nombre: estudianteActual.nombre,
      edad: estudianteActual.edad,
      // libro de calificaciones
      valor: libroCalificacionesActual.valor,
      actividad: libroCalificacionesActual.actividad,
      notaMaxima:libroCalificacionesActual.notaMaxima,
      //calificaciones
      libroCalificaciones: calificacion.libroCalificaciones,
      nota: calificacion.nota,
      calificacion: calificacion.calificacion
    }
   
    reporteLibroCalificacionesDTO.push(filaCalificaciones);
    
  
  })
  return reporteLibroCalificacionesDTO;
}
}

    
  
  
function  generarReporte():void{
let reporteCalf : ReporteCalificaciones = new ReporteCalificaciones(
estudiantes,actividades,libCalificaciones,calificaciones);
let filasReporte:IReporteCalificacionesDTO[] = ReporteCalificaciones.crearLibroCalificacionesDTO()
}
*/
  

