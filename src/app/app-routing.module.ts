import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';
import { DatafilesComponent } from './components/datafiles/datafiles.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'Dashboard' },
  { path: 'mais-vendidos', component: BestsellersComponent, title: 'Mais Vendidos' },
  { path: 'exportar-dados', component: DatafilesComponent, title: 'Exportar Dados' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
