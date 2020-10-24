import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AuthGuardService } from './services/auth-guard.service';
// Component
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BrowserPageComponent } from './pages/browser-page/browser-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'index', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'browser',
    component: BrowserPageComponent,
    canActivate: [AuthGuardService]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
