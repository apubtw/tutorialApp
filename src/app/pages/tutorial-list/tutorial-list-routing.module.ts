import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialListPage } from './tutorial-list.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialListPageRoutingModule {}
