import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RidersListComponent } from './components/riders-list/riders-list.component';

const routes: Routes = [{ path: '', component: RidersListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RidersRoutingModule {}
