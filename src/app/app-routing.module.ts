import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, title: 'Dashboard' },
  { path: 'mais-vendidos', component: BestsellersComponent, title: 'Mais Vendidos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
