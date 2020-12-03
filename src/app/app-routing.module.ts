import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourComponent} from './tour/tour.component';
import {TourListComponent} from './tour/tour-list/tour-list.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component:  TourComponent},
    { path: 'tour', pathMatch: 'full', component:  TourComponent},
    { path: 'list', pathMatch: 'full', component:  TourListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
