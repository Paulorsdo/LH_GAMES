import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCard, MatCardTitle, MatCardHeader, MatCardActions, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-inicio',
  imports: [MatGridListModule, MatCard, MatCardTitle, MatCardHeader, MatCardActions, MatCardContent],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {} 
