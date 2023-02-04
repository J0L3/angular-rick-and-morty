import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { VwPersonajes } from 'src/app/core/models';
import { ServicioRickAndMortyCharacters } from 'src/app/core/services';

@Component({
  selector: 'app-cards-personajes',
  templateUrl: './cards-personajes.component.html',
  styleUrls: ['./cards-personajes.component.scss'],
})
export class CardsPersonajesComponent implements OnInit {
  dataSource: VwPersonajes[] = [];
  totalBusqueda!: number;
  paginaActual: number = 1;
  paginasTotales: number = 2;
  windowScrolled!: boolean;

  constructor(private servicio: ServicioRickAndMortyCharacters) {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });

    this.cargarPersonajes(this.paginaActual);
  }

  onScroll() {
    this.cargarPersonajes(this.paginaActual + 1);
  }

  public cargarPersonajes(page: number) {
    if (this.paginasTotales >= page) {
      this.servicio.getAllCharacters(page).subscribe({
        next: (v) => {
          this.dataSource.push(...v.results);
          this.totalBusqueda = v.info.count;
          this.paginaActual = page;
          this.paginasTotales = v.info.pages;
        },
        error: (e) => console.error(e),
      });
    }
  }

  public getClassStatus(status: string): string {
    if (status == 'Alive') return 'green';
    if (status == 'Dead') return 'red';
    return 'gray';
  }

  public getAvatar(especie: string, genero: string) {
    if (especie == 'Human' && genero == 'Male') return 'avatar-male';
    if (especie == 'Human' && genero == 'Female') return 'avatar-female';
    if (especie == 'Alien') return 'avatar-alien';
    if (especie == 'Humanoid') return 'avatar-humanoid';
    if (especie == 'Robot') return 'avatar-robot';
    if (especie == 'Animal') return 'avatar-animal';
    if (especie == 'Disease') return 'avatar-virus';
    if (especie == 'Cronenberg') return 'avatar-cronenberg';
    if (especie == 'Poopybutthole') return 'avatar-poopybutthole';
    if (especie == 'Mythological Creature')
      return 'avatar-mythological-creature';

    return 'avatar-unknown';
  }

  public getClassStatusForAvatar(status: string): string {
    if (status == 'Alive') return 'bg-green';
    if (status == 'Dead') return 'bg-red';
    return 'bg-gray';
  }

  clickSobreNombrePersonaje() {
    console.log('hey');
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
