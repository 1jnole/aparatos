import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RidersFacade } from '../../data-access/store/facade/riders.facade';
import { Observable } from 'rxjs';
import { RiderModel } from '../../domain/interfaces/rider-model.interface';

@Component({
  selector: 'app-riders-list',
  templateUrl: './riders-list.component.html',
  styleUrl: './riders-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RidersListComponent {
  riders$: Observable<RiderModel[]> = this.ridersFacade.riders$;

  constructor(private ridersFacade: RidersFacade) {
    this.ridersFacade.loadRiders();
  }

  public trackByItems(index: number, _item: any): number {
    return index;
  }
}
