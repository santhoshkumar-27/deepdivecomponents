import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, OnInit, output, Output, viewChild, ViewChild, viewChildren, ViewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlsComponent } from "../../../shared/controls/controls.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlsComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  add = output<Ticket>();
  enteredTitle = '';
  enteredRequest = '';

  // @ViewChild('form') form!:  ElementRef<HTMLFormElement> ;
  // private form = viewChild<ElementRef<HTMLFormElement>>('form');
  // template value will definitely found
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  constructor() {
    afterRender(() => {
      // console.log('afterRender');
    });

    afterNextRender(() => {
      // console.log('afterNextRender')
    });
  }

  ngOnInit(): void {
    // console.log(this.form())
  }

  ngAfterViewInit(): void {
    // console.log(this.form())
  }

  onFormSubmit(title: string, request: string) {
    // console.log('form is submitted');
    // console.log(title);
    // console.log(request);

    this.add.emit({
      id: Date.toString(),
      name: this.enteredTitle,
      request: this.enteredRequest,
      status: 'Open'
    })
    // this.form().nativeElement.reset();
    this.enteredRequest = '';
    this.enteredTitle = '';
  }
}
