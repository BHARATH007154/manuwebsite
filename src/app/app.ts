import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Navbar } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, RouterOutlet],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
