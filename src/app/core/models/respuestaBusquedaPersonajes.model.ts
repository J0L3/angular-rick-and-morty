export interface RespuestaBusquedaPersonajesModel {
  count: number;
  pages: number;
  next: string;
  prev: string;

  results: VwPersonajes[];
}

export interface VwPersonajes {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  created: Date;
  origin: {
    name: string;
    url: string;
  };
}
