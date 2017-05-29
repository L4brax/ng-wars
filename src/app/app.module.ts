import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { PeopleService } from './services/people.service';

const appRoutes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: '**', component: CharactersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
