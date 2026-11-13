import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-quote',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-quote.html',
  styleUrl: './request-quote.css',
})
export class RequestQuote {
  form = {
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: '',
    message: '',
  };

  submitted = false;

  submitRequest(): void {
    const subject = encodeURIComponent(`Quote Request from ${this.form.name || 'Customer'}`);
    const body = encodeURIComponent(
      `Hello Naveen Engineering Technology,\n\n` +
        `Name: ${this.form.name || '-'}\n` +
        `Company: ${this.form.company || '-'}\n` +
        `Email: ${this.form.email || '-'}\n` +
        `Phone: ${this.form.phone || '-'}\n` +
        `Requirement: ${this.form.requirement || '-'}\n\n` +
        `Message:\n${this.form.message || '-'}\n`,
    );

    window.location.href = `mailto:nettechnology2023@gmail.com?subject=${subject}&body=${body}`;
    this.submitted = true;
  }
}
