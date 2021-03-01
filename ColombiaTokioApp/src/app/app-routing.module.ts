import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportistasComponent} from './deportistas/deportistas.component'
import {DeportistasDetailComponent} from './deportistas-detail/deportistas-detail.component'
import {ParticipacionDetailComponent} from './participacion-detail/participacion-detail.component'

const routes: Routes = [
  { path: 'deportistas', component: DeportistasComponent},
  { path: 'deportistas/:id', component: DeportistasDetailComponent},
  { path: 'deportistas/:id/participaciones/:idP', component: ParticipacionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
