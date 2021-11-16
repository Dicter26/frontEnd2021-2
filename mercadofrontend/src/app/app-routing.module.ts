import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from '../app/modules/exchange-rate/component/exchange-rate/exchange-rate.component';
import { RegionComponent } from '../app/modules/customer/component/region/region.component';
import { HomeComponent } from './modules/home/component/home/home.component';

const routes: Routes = [
  {path: 'exchange-rate', component: ExchangeRateComponent}, //sera el agregado que le daremos a la direccion de internet que aparece en el navegador
  {path: 'region', component: RegionComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
