export interface InfoVideo{
    id: number;
    url: String;
    categoria: String;
    titulo: String;
    descripcion: String;
    vistas: number;
    meGusta: number;
    noMeGusta: number;
    estrellas: number[];
    eliminado: boolean;
}