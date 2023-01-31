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
  episode: string[];
  created: Date;
  // origin: {
  //   name: 'Earth (C-137)';
  //   url: 'https://rickandmortyapi.com/api/location/1';
  // };
  // location: {
  //   name: 'Citadel of Ricks';
  //   url: 'https://rickandmortyapi.com/api/location/3';
  // };
}
