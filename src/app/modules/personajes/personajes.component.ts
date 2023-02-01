import { Component, OnInit } from '@angular/core';
import { VwPersonajes } from 'src/app/core/models';
import { ServicioRickAndMorty } from 'src/app/core/services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  vw: VwPersonajes[] = [];

  constructor(private servicio: ServicioRickAndMorty) {}

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  private cargarPersonajes() {
    this.servicio.getAllCharacters(1).subscribe({
      next: (v) => (this.vw = v.results),
      error: (e) => console.error(e),
    });
  }
}
