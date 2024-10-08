import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onNewTicket(data: Ticket) {
    this.tickets.push(data);
  }

  onTicketClose(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      
      if (ticket.id == id) {
        return {
          ...ticket,
          status:'Closed'
        }
      }

      return ticket;
    })
  }
}
