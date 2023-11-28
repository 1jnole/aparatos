import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RidersFacade } from '../../../riders/data-access/facade/riders.facade';

@Component({
  selector: 'app-riders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './riders.component.html',
  styleUrl: './riders.component.scss'
})
export class RidersComponent {
  private _riders$ = this.ridersFacade.riders$;
  constructor(private ridersFacade: RidersFacade) {}

  ngOnInit() {
    this.ridersFacade.loadRiders();
  }
}
