import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
  currentStatus: SERVERSTATUS = SERVERSTATUS.ONLINE;
  // intervalID!: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);
  constructor() {
  }

  ngOnInit() {
    const intervalID = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = SERVERSTATUS.ONLINE;
      } else if (rnd < 0.9) {
        this.currentStatus = SERVERSTATUS.OFFLINE;
      } else {
        this.currentStatus = SERVERSTATUS.UNKNOWN;
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