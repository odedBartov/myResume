import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. Import your components
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';

// 2. Define your routes array
const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: 'resume', pathMatch: 'full' },
];

@NgModule({
  // Use forRoot() in the root routing module (AppRoutingModule)
  imports: [RouterModule.forRoot(routes)],
  // Export RouterModule so it's available throughout the application
  exports: [RouterModule]
})
export class AppRoutingModule { }