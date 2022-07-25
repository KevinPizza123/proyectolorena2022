import { IPersona} from "./persona";
export interface IDocente extends IPersona{
    titulo:string;
    asignatura:string;
}