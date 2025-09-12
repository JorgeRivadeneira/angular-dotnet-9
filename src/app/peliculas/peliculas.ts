import { actorAutoComnpleteDTO } from "../actores/actores";

export interface PeliculaDTO{
    id: number;
    titulo: string;
    poster?: string;
    fechaLanzamiento: Date;
    trailer: string;
}

export interface PeliculaCreacionDTO{
    titulo: string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: File;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorAutoComnpleteDTO[];
}