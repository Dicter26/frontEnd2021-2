import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from '../app/modules/exchange-rate/component/exchange-rate/exchange-rate.component';

const routes: Routes = [
  {path: 'exchange-rate', component: ExchangeRateComponent} //sera el agregado que le daremos a la direccion de internet que aparece en el navegador
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
