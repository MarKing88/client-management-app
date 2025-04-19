import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  name = '';
  email = '';
  company = '';
  phone = '';

  constructor(private clientService: ClientService) {}

  onSubmit() {
    const clientData = {
      name: this.name,
      email: this.email,
      company: this.company,
      phone: this.phone
    };

    this.clientService.addClient(clientData).subscribe(response => {
      console.log('Client successfully saved!', response);
    });
  }
}
