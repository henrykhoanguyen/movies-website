import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Component
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'index', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
