export interface Ticket {
    id: string;
    name: string;
    request: string;
    status: TicketStatus;
}

export type TicketStatus = 'Online' | 'Offline';
// interface is shape of object