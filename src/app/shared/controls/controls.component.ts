import { Component, HostBinding, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css',
  encapsulation: ViewEncapsulation.None,
  // we can add host element class from here without going to put in each of these selection where we used
  host: {
    class: 'control'
  }
})
export class ControlsComponent {

  // @HostBinding('class') className = 'control'; // it will add these property bind with the host element

  label = input.required<string>()

}
