import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '',
   canActivate: [AuthGuard],
   component: ChatComponent
  },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
