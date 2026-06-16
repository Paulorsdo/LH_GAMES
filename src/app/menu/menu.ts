import { Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from "../app.routes";

@Component({
  selector: 'app-menu',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, AppRoutingModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
