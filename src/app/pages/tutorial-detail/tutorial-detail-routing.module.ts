import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialDetailPage } from './tutorial-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TutorialDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialDetailPageRoutingModule {}
