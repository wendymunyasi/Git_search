import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component'; 
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  { path: 'about', component: AboutComponent},


  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
