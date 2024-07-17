import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialListPageRoutingModule } from './tutorial-list-routing.module';

import { TutorialListPage } from './tutorial-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialListPageRoutingModule
  ],
  declarations: [TutorialListPage]
})
export class TutorialListPageModule {}
