import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'results-summary-component';
  // On inject le service
  private readonly dataService = inject(DataService);

  // On converti l'observable en signal:
  readonly data = toSignal(this.dataService.getData(), {initialValue:[]})
}
