import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { VwPersonajes } from 'src/app/core/models';
import { ServicioRickAndMorty } from 'src/app/core/services';

@Component({
  selector: 'app-cards-personajes',
  templateUrl: './cards-personajes.component.html',
  styleUrls: ['./cards-personajes.component.scss'],
})
export class CardsPersonajesComponent implements OnInit {
  dataSource: VwPersonajes[] = [];
  totalBusqueda!: number;
  paginaActual: number = 1;

  constructor(private servicio: ServicioRickAndMorty, cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.cargarPersonajes(this.paginaActual);
  }

  public cargarPersonajes(page: number) {
    this.servicio.getAllCharacters(page).subscribe({
      next: (v) => {
        this.dataSource = v.results;
        this.totalBusqueda = v.count;
        this.paginaActual = page;
      },
      error: (e) => console.error(e),
    });
  }
  clickSobreCard() {
    console.log('hey');
  }
}
