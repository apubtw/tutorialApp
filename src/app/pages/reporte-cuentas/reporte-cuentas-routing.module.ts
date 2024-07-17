import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteCuentasPage } from './reporte-cuentas.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteCuentasPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteCuentasPageRoutingModule {}
