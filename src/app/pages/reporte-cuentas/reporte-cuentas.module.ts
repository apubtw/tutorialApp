import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReporteCuentasPageRoutingModule } from './reporte-cuentas-routing.module';
import { ReporteCuentasPage } from './reporte-cuentas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteCuentasPageRoutingModule
  ],
  declarations: [ReporteCuentasPage]
})
export class ReporteCuentasPageModule {}
