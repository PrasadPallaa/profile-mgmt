import { UserComponent } from './containers/user/user.component';
import { PersonCreateComponent } from './containers/person-create/person-create.component';
import { PersonDetailComponent } from './containers/person-detail/person-detail.component';
import { PersonComponent } from './containers/person/person.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'persons', pathMatch: 'full' },

  {
    path: 'persons', component: PersonComponent
  },

  {
    path: 'persons/:id',
    component: PersonDetailComponent,
  },
  {
    path: 'person/create',
    component: PersonCreateComponent
  },
  {
    path: 'user',
    component: UserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
