import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})

export class LabelUpdateService {
  private labels = ['Grande Ventes D\'entrepôt', 'Ce Samedi', 'Ne ratez pas votre chance'];
  private timerRef: any = null;
  private labelValue = new BehaviorSubject<string>(this.labels[0]);
  public labelValueObs = this.labelValue.asObservable();

  constructor() { }

  public startTimer() {
    let counter = 0
    this.timerRef = setInterval(() => {
      counter++;
      this.changeLabel(counter);
    }, 15000);
  }

  public stopTimer() {
    clearInterval(this.timerRef);
  }

  private changeLabel(pCounter: number) {
    const i = pCounter % this.labels.length;
    this.labelValue.next(this.labels[i]);
  }
}
