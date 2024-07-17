import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: () => import('src/app/tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'tutorials', loadChildren: () => import('src/app/pages/tutorial-list/tutorial-list.module').then(m => m.TutorialListPageModule) },
  { path: 'tutorial/:id', loadChildren: () => import('src/app/pages/tutorial-detail/tutorial-detail.module').then(m => m.TutorialDetailPageModule) },
  {
    path: 'reporte-cuentas',
    loadChildren: () => import('./app/pages/reporte-cuentas/reporte-cuentas.module').then( m => m.ReporteCuentasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
