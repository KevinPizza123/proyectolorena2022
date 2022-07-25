"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let estudiantes = [];
let docentes = [];
let actividades = [];
let calificaciones = [];
var Curso;
(function (Curso) {
    Curso["Programacion"] = "Programacion Visual";
    Curso["Algebra"] = "Algebra";
    Curso["Base"] = "Base de Datos";
})(Curso || (Curso = {}));
var Actividad;
(function (Actividad) {
    Actividad["Ciencias"] = "Ciencias";
    Actividad["Naturales"] = "Naturales";
    Actividad["Lengua"] = "Lengua";
})(Actividad || (Actividad = {}));
function agregarEstudiante() {
    // console.log((<HTMLInputElement>document.getElementById("cedula"))!.value
    let estudianteActual = {
        //id:Number(),
        cedula: parseInt(leerHtml("cedula_estudiante")),
        nombre: leerHtml("nombre_estudiante"),
        edad: parseInt(leerHtml("edad_estudiante")),
        codigoMatricula: leerHtml("codigoMatricula_estudiante"),
        nivel: leerHtml("nivel_estudiante"),
    };
    estudiantes.push(estudianteActual);
    console.log(estudiantes);
    console.table(estudiantes);
}
function agregarDocente() {
    let docenteActual = {
        cedula: parseInt(leerHtml("cedula_docente")),
        nombre: leerHtml("nombre_docente"),
        edad: parseInt(leerHtml("edad_docente")),
        titulo: leerHtml("titulo_docente"),
        asignatura: leerHtml("asignatura_docente"),
    };
    docentes.push(docenteActual);
    console.log(docentes);
    console.table(docentes);
}
function agregarActiviades() {
    let actividadActual = {
        nombre: leerHtml("nombre_actividad"),
    };
    actividades.push(actividadActual);
    console.log(actividades);
    console.table(actividades);
}
seleccionarOpcion();
function agregarlibroCalificaciones() {
    let libroCalActual = {
        valor: leerHtml("valor_libroCalf"),
        curso: leerHtml("curso_libroCalf"),
        actividad: leerHtml("actividad_libroCalf"),
        notaMaxima: parseInt(leerHtml("notaMaxima_libroCalf")),
    };
    calificaciones.push(libroCalActual);
    console.log(calificaciones);
    console.table(calificaciones);
}
function leerHtml(id) {
    return document.getElementById(id).value;
}
function seleccionarOpcion() {
    let cursolibroCalf = document.getElementById("curso_libroCalf");
    document.querySelectorAll("#curso_libroCalf option").forEach(option => option.remove());
    let cursos = Object.values(Curso);
    cursos.forEach((dato) => {
        let opcion = document.createElement("option");
        opcion.value = dato;
        opcion.text = dato;
        cursolibroCalf.add(opcion);
    });
    //cursolibroCalf.add(Option);
    let actividadlibroCalf = document.getElementById("actividad_libroCalf");
    document.querySelectorAll("#actividad_libroCalf option").forEach(option => option.remove());
    let actividad = Object.values(Actividad);
    actividades.forEach((actividad) => {
        let opcion = document.createElement("option");
        opcion.value = actividad.nombre;
        opcion.text = actividad.nombre;
        actividadlibroCalf.add(opcion);
    });
    //cursolibroCalf.add(Option);
}
