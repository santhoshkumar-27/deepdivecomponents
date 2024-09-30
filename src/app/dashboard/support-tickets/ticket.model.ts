export interface Ticket {
    id: string;
    name: string;
    request: string;
    status: TicketStatus;
}

export type TicketStatus = 'Open' | 'Closed';
// interface is shape of object