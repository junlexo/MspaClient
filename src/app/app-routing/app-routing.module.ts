import { StarterComponent } from './../starter/starter.component';
import { AdminLoginComponent } from './../view/login/login.component';
import { AdminRegisterComponent } from './../view/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListUserComponent } from './../view/list/list.component';
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: StarterComponent },
      { path: 'login', component: AdminLoginComponent },
      { path: 'register', component: AdminRegisterComponent },
      { path: 'list', component: ListUserComponent },
    ], {useHash: true})
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
