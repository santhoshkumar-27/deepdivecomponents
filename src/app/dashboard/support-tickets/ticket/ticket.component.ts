import { Component, input, signal } from '@angular/core';
import { Ticket, TicketStatus } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  detailsVisible = signal(false);
  status: TicketStatus = 'Open';



  onToggleDetails() {
    this.detailsVisible.update((value) => !value);
  }
}
