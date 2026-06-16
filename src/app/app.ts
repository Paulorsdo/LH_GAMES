import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/*Importações Angular Material*/
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

/*Importações de componentes*/
import { AppRoutingModule } from './app.routes';
import { Inicio } from './inicio/inicio';
import { Login } from './login/login';
import { Menu } from './menu/menu';
import { Rodape } from './rodape/rodape';

@NgModule({
  declarations: [],
  imports: [
    Login,
    Menu,
    Inicio,
    Rodape,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [
],
  bootstrap: [AppModule]
})
export class AppModule { }

@Component({
  selector: 'app-root',
  imports: [Menu, Rodape, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LH GAMES');
}