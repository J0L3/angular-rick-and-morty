import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { CardsPersonajesComponent } from './components';
import { SharedModule } from 'src/app/shared';
import { DetailPersonajesComponent } from './components/detail-personajes/detail-personajes.component';

@NgModule({
  declarations: [
    PersonajesComponent,
    CardsPersonajesComponent,
    DetailPersonajesComponent,
  ],
  imports: [CommonModule, PersonajesRoutingModule, SharedModule],
})
export class PersonajesModule {}
