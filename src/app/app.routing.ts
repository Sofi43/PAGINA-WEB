import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {AgregarComponent} from "./components/agregar/agregar.component";
import {EditarComponent} from "./components/editar/editar.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'editar/:id', component: EditarComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
