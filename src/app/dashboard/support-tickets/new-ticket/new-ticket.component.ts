import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlsComponent } from "../../../shared/controls/controls.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlsComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {


  onFormSubmit(title: string, request: string, form: HTMLFormElement) {
    console.log('form is submitted');
    console.log(title);
    console.log(request);

    form.reset()
  }
}
