import { IActividades } from "./Actividades";
import { IEstudiante } from "./estudiante";
import { ILibroCalificaciones } from "./libroCalificaciones";

export interface IReporteCalificacionesDTO extends IEstudiante , IActividades,ILibroCalificaciones,ICalificaciones{
curso:string;
estudiante:string;
}