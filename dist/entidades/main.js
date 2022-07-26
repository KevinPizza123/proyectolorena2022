"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let estudiantes = [];
let docentes = [];
let actividades = [];
let libCalificaciones = [];
let calificaciones = [];
let cursos = [];
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
        cedula: leerHtml("cedula_estudiante"),
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
        cedula: leerHtml("cedula_docente"),
        nombre: leerHtml("nombre_docente"),
        edad: parseInt(leerHtml("edad_docente")),
        titulo: leerHtml("titulo_docente"),
        asignatura: leerHtml("asignatura_docente"),
    };
    docentes.push(docenteActual);
    console.log(docentes);
    console.table(docentes);
}
function agregarCurso() {
    let addcurso = {
        nombre: leerHtml("curso_nombre"),
        duracion: leerHtml("curso_duracion")
    };
    cursos.push(addcurso);
    console.log(cursos);
    console.table(cursos);
    seleccionarOpcion();
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
        calificacion: undefined
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
    cursos.forEach((curso) => {
        let opcion = document.createElement("option");
        opcion.value = curso.nombre;
        opcion.text = curso.nombre;
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
class ReporteCalificaciones {
    constructor(estudiantes, actividades, libCalificaciones, calificaciones, docentes) {
        this.estudiantes = estudiantes;
        this.actividades = actividades;
        this.libCalificaciones = libCalificaciones;
        this.calificaciones = calificaciones;
        this.docentes = docentes;
    }
    crearLibroCalificacionesDTO() {
        let reporteLibroCalificacionesDTO = [];
        this.calificaciones.forEach((calificacion) => {
            let libroCalificacionesActual = libCalificaciones.filter((item) => item.valor === calificacion.libroCalificaciones)[0];
            let estudianteActual = estudiantes.filter((estudiante) => estudiante.cedula === calificacion.estudiante)[0];
            let filaCalificaciones = {
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
                notaMaxima: libroCalificacionesActual.notaMaxima,
                //calificaciones
                libroCalificaciones: calificacion.libroCalificaciones,
                nota: calificacion.nota,
                calificacion: calificacion.calificacion
            };
            reporteLibroCalificacionesDTO.push(filaCalificaciones);
        });
        return reporteLibroCalificacionesDTO;
    }
}
function generarReporte() {
    let reporteCalf = new ReporteCalificaciones(estudiantes, actividades, libCalificaciones, calificaciones);
    let filasReporte = ReporteCalificaciones.crearLibroCalificacionesDTO();
}
