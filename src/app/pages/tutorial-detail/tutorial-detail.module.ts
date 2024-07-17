import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialDetailPageRoutingModule } from './tutorial-detail-routing.module';

import { TutorialDetailPage } from './tutorial-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialDetailPageRoutingModule
  ],
  declarations: [TutorialDetailPage]
})
export class TutorialDetailPageModule {}
