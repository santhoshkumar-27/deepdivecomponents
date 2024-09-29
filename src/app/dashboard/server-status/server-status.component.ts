import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<SERVERSTATUS>(SERVERSTATUS.ONLINE);
  // intervalID!: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  constructor() {
    console.log(this.currentStatus());

    effect((cleanUP) => {
      console.log(this.currentStatus());

      cleanUP(() => {
        console.log('clean up happend first')
      })
    })
  }

  ngOnInit() {
    const intervalID = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set(SERVERSTATUS.ONLINE);
      } else if (rnd < 0.9) {
        this.currentStatus.set(SERVERSTATUS.OFFLINE);
      } else {
        this.currentStatus.set(SERVERSTATUS.UNKNOWN);
      }

    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(intervalID);
    })
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.intervalID);
  // }
}



enum SERVERSTATUS {
  ONLINE = 'online',
  OFFLINE = 'offline',
  UNKNOWN = 'unknown'
}