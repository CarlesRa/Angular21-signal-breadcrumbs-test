import { Component } from '@angular/core';
import { Header } from '../shared/header/header';
import { RouterOutlet } from '@angular/router';
import { Breadcrumbs } from "../shared/breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Breadcrumbs],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
