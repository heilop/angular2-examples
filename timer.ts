import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'timer',
  template: `
    <div class="text-center">
      <img src="assets/img/reloj.png" alt="Reloj">
      <h1> {{ mins }}:{{ segs | number: '2.0' }} </h1>
      <p>
        <button (click)="togglePause()" class="btn btn-danger">
          {{ buttonLabel }}
        </button>
      </p>
    </div>
  `
})

class TimerComponent {
  mins: number;
  segs: number;
  isPaused: boolean;
  buttonLabel: string;


  constructor() {
    this.resetTimer();
    setInterval(() => this.tick(), 1000);
  }

  resetTimer(): void {
    this.mins = 24;
    this.segs = 59;
    this.buttonLabel = 'Iniciar';
    this.togglePause();
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Detener';

      if (--this.segs < 0) {
        this.segs = 59;
        if (--this.mins < 0) {
          this.resetTimer();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.mins < 24 || this.segs < 59) {
      this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
    }
  }
}


bootstrap(TimerComponent);
