import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAccessComponent } from './admin-access/admin-access.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { TyresComponent } from './tyres/tyres.component';


const routes: Routes = [
  { path: '', component:TyresComponent},
  { path: 'tyres', component:TyresComponent},
  { path: 'login', component: AppLoginComponent },
  { path: 'data-ie',component:AdminAccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
