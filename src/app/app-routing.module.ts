import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'Cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, { path: 'CarDetails', loadChildren: () => import('./car-details/car-details.module').then(m => m.CarDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
