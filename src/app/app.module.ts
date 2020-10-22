import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './containers/country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './containers/person/person.component';
import { PersonDetailComponent } from './containers/person-detail/person-detail.component';
import { PersonCreateComponent } from './containers/person-create/person-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './containers/user/user.component';
import { NumbersonlyDirective } from './containers/user/numbersonly.directive';
import { CharactersonlyDirective } from './containers/user/charactersonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    PersonComponent,
    PersonDetailComponent,
    PersonCreateComponent,
    UserComponent,
    NumbersonlyDirective,
    CharactersonlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
