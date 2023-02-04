import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPersonajesComponent } from './components/detail-personajes/detail-personajes.component';
import { PersonajesComponent } from './personajes.component';

const routes: Routes = [
  { path: '', component: PersonajesComponent },
  {
    path: '{id}',
    component: DetailPersonajesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonajesRoutingModule {}
