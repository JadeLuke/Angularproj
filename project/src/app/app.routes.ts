import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'home', component: HomeComponent}
];
