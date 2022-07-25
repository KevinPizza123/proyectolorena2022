"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let estudiantes = [];
let docentes = [];
let actividades = [];
let libCalificaciones = [];
let calificaciones = [];
var Actividad;
(function (Actividad) {
    Actividad["Programacion"] = "dise\u00F1o";
    Actividad["Algebra"] = "ejercicios de ecuaciones";
    Actividad["Base"] = "modelo normalizado";
})(Actividad || (Actividad = {}));
var Curso;
(function (Curso) {
    Curso["Programacion"] = "Programacion Visual";
    Curso["Algebra"] = "Algebra";
    Curso["Base"] = "base de datos";
})(Curso || (Curso = {}));
//Agregar Estudiante
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
    seleccionarOpcion();
}
function leerHtml(id) {
    return document.getElementById(id).value;
}
// Agregar docente
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
//Agregar nombre
function agregarActividad() {
    let actividadActual = {
        nombre: leerHtml("nombre_actividad"),
    };
    actividades.push(actividadActual);
    console.table(actividades);
    console.log(actividades);
    seleccionarOpcion();
}
//Agreagar libro calificaciones
seleccionarOpcion();
function agregarCalificaciones() {
    let libroCalfActual = {
        valor: leerHtml("valor_libroCalf"),
        curso: leerHtml("curso_libroCalf"),
        actividad: leerHtml("actividad_libroCalf"),
        notaMaxima: parseInt(leerHtml("notaMaxima_libroCalf")),
    };
    libCalificaciones.push(libroCalfActual);
    console.table(libCalificaciones);
    console.log(libCalificaciones);
}
function asignarCalificaciones() {
    let asignacionCalificaciones = {
        estudiante: leerHtml("estudiante_asignacionCalf"),
        libroCalificaciones: leerHtml("libroCalf_asignacionCalf"),
        nota: parseInt(leerHtml("nota_asignacionCalf")),
    };
    calificaciones.push(asignacionCalificaciones);
    console.table(libCalificaciones);
    console.log(libCalificaciones);
}
//Agregar curso
seleccionarOpcion();
function seleccionarOpcion() {
    let cursoLibroCalf = document.getElementById("curso_libroCalf");
    document.querySelectorAll("#curso_libroCalf option").forEach(option => option.remove());
    let cursos = Object.values(Curso);
    cursos.forEach((val) => {
        let opcion = document.createElement("option");
        opcion.value = val;
        opcion.text = val;
        cursoLibroCalf.add(opcion);
    });
    let actividad_libroCalf = document.getElementById("actividad_libroCalf");
    document.querySelectorAll("#actividad_libroCalf option").forEach(option => option.remove());
    actividades.forEach((Actividad) => {
        let opcion = document.createElement("option");
        opcion.value = Actividad.nombre;
        opcion.text = Actividad.nombre;
        actividad_libroCalf.add(opcion);
    });
    let estudianteAsignacionCalf = document.getElementById("estudiante_asignacionCalf");
    document.querySelectorAll("#estudiante_asignacionCalf option").forEach(option => option.remove());
    estudiantes.forEach((estudiante) => {
        let opcion = document.createElement("option");
        opcion.value = estudiante.nombre;
        opcion.text = estudiante.nombre;
        estudianteAsignacionCalf.add(opcion);
    });
    let libroCalf_asignacionCalf = document.getElementById("libroCalf_asignacionCalf");
    document.querySelectorAll("#libroCalf_asignacionCalf option").forEach(option => option.remove());
    libCalificaciones.forEach((config) => {
        let opcion = document.createElement("option");
        opcion.value = config.valor;
        opcion.text = config.valor;
        libroCalf_asignacionCalf.add(opcion);
    });
}
