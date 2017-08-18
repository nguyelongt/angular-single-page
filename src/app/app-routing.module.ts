import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { TechnologyComponent } from './technology/technology.component';
import { AboutComponent } from './about/about.component';

// Set the path of the page
// localhost:4200/home
// localhost:4200/resume
// localhost:4200/about

const routes: Routes = [
    // Nothing enter, goes back to home page
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // Go to home page  
    { path: 'home', component: HomeComponent },
    // Resume page
    { path: 'resume', component: ResumeComponent },
    // Technology Page
    { path: 'technology', component: TechnologyComponent },
    // About page
    { path: 'about', component: AboutComponent },
    // Go to a page that doesn't exsist, goes back to home page    
    { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
