import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {}
