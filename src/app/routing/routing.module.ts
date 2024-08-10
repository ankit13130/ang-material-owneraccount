import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }