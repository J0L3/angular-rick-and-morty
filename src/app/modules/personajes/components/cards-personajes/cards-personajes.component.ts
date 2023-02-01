import { Component, Input, OnInit } from '@angular/core';
import { VwPersonajes } from 'src/app/core/models';
import { ServicioRickAndMorty } from 'src/app/core/services';

@Component({
  selector: 'app-cards-personajes',
  templateUrl: './cards-personajes.component.html',
  styleUrls: ['./cards-personajes.component.scss'],
})
export class CardsPersonajesComponent implements OnInit {
  @Input() vw: VwPersonajes = {} as VwPersonajes;

  constructor() {}

  ngOnInit(): void {}

  clickSobreCard() {
    console.log('hey');
  }
}
