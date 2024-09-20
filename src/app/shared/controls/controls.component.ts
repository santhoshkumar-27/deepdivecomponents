import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css',
  encapsulation: ViewEncapsulation.None,
  // we can add host element class from here without going to put in each of these selection where we used
  host: { // but the property values are static if you want to change dynamically we use hostbinding
    class: 'control', // replacement for host binding
    // '(click)': 'onClick()' // replacement for host listener
  }
})
export class ControlsComponent {
  // @HostBinding('class') className = 'control'; // it will add these property bind with the host element

  label = input.required<string>()

  // it will add the listner to the host element using the host listener
  // @HostListener('click')
  // onClick() {
  //   console.log('clicked')
  // }

}
