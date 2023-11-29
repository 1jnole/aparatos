import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoutesFacade } from '../../data-access/store/facade/routes.facade';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrl: './route-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteListComponent implements OnInit {
  routes$ = this.routesFacade.routes$;

  constructor(private routesFacade: RoutesFacade) {}

  ngOnInit(): void {
    this.routesFacade.loadAllRoutes();
  }

  public trackByItems(index: number, _item: any): number {
    return index;
  }
}
