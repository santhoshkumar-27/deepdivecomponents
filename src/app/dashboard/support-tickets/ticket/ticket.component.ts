import { Component, input, output, signal } from '@angular/core';
import { Ticket, TicketStatus } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // input configurations alias, transform
  ticket = input.required<Ticket>();
  // ouput configurations alias
  markComplete = output();
  detailsVisible = signal(false);
  ticketStatusOpen: TicketStatus = 'Open';



  onToggleDetails() {
    this.detailsVisible.update((value) => !value);
  }

  onMarkUsCompleted() {
    this.markComplete.emit();
  }
}
