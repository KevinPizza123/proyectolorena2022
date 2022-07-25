import {IEstudiante} from "./entidades/estudiante";
import {IDocente} from "./entidades/docente";
import { IActividades } from "./entidades/Actividades";
import { ILibroCalificaciones } from "./entidades/libroCalificaciones";
import { ICalificaciones } from "./entidades/calificaciones";

let estudiantes:IEstudiante[]=[];
let docentes:IDocente[]=[];
let actividades:IActividades[]=[];
let libCalificaciones:ILibroCalificaciones[]=[];
let calificaciones:ICalificaciones[]=[];

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

        cedula:parseInt(leerHtml("cedula_estudiante")),
        nombre:leerHtml("nombre_estudiante"),
        edad:parseInt(leerHtml("edad_estudiante")),
        codigoMatricula:leerHtml("codigoMatricula_estudiante"),
        nivel:leerHtml("nivel_estudiante"),
    }


    estudiantes.push(estudianteActual);
    console.log(estudiantes);
    console.table(estudiantes);
    seleccionaOpcion();

   
}

function leerHtml(id:string):string{
    return (<HTMLInputElement> document.getElementById(id)).value;
}
// Agregar docente

function agregarDocente():void{
    let docenteActual:IDocente={
        cedula:parseInt(leerHtml("cedula_docente")),
        nombre:leerHtml("nombre_docente"),
        edad:parseInt(leerHtml("edad_docente")),
       titulo:leerHtml("titulo_docente"),
       asignatura:leerHtml("asignatura_docente") as "Programacion " | "Metodologias" | "Analisis" ,
    }
    docentes.push(docenteActual);
    console.log(docentes);
    console.table(docentes);


}


//Agregar nombre

function agregarActividad(): void {
    let actividadActual: IActividades = {
      nombre: leerHtml("nombre_actividad"),
    };
    actividades.push(actividadActual);
    console.table(actividades);
    console.log(actividades);
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
  }
  function asignarCalificaciones(): void {
    let asignacionCalificaciones:ICalificaciones = {
      estudiante:leerHtml("estudiante_asignacionCalf"),
      libroCalificaciones: leerHtml("libroCalf_asignacionCalf"),
      nota: parseInt(leerHtml("nota_asignacionCalf")),
    };
    calificaciones.push(asignacionCalificaciones);
    console.table(libCalificaciones);
    console.log(libCalificaciones);
  }

//Agregar curso

seleccionaOpcion();
  function seleccionaOpcion(): void{
    let cursoLibroCalf = document.getElementById("curso_libroCalf") as HTMLSelectElement;
    document.querySelectorAll("#curso_libroCalf option").forEach(option =>option.remove());
    let cursos = Object.values(Curso);  
    cursos.forEach((val)=>{
      let opcion = document.createElement("option");
      opcion.value = val;
      opcion.text = val;
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
    let estudiante_asignacionCalif = document.getElementById("estudiante_asignacionCalif") as HTMLSelectElement;
    document.querySelectorAll("#estudiante_asignacionCalif option").forEach(option =>option.remove());
    estudiantes.forEach((estudiante)=>{
      let opcion = document.createElement("option");
      opcion.value = estudiante.nombre;
      opcion.text = estudiante.nombre;
      estudiante_asignacionCalif.add(opcion);
    })
    let libroCalf_asignacionCalf = document.getElementById("libroCalf_asignacionCalf") as HTMLSelectElement;
    document.querySelectorAll("#libroCalf_asignacionCalf option").forEach(option =>option.remove());
    libCalificaciones.forEach((config)=>{
      let opcion = document.createElement("option");
      opcion.value = config.valor;
      opcion.text = config.valor;
      libroCalf_asignacionCalf.add(opcion);
    })

}









