import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'results-summary-component';
  // On inject le service
  private readonly dataService = inject(DataService);

  // On converti l'observable en signal:
  readonly data = toSignal(this.dataService.getData(), {initialValue:[]})

  // Afficher le score moyen
  readonly averageScore = computed(()=> {
    const scores = this.data().map((item) => item.score);
    return scores
    .reduce ((accumulator, score ) => accumulator + score, 0) / scores.length;
  })
}
