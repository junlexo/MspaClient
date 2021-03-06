import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './view/login/login.component';
import { AdminRegisterComponent } from './view/register/register.component';
import { ListUserComponent } from './view/list/list.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { ShopComponent } from './starter/shop/shop.component';
import { ShopDetailComponent } from './starter/shop-detail/shop-detail.component';
import { ShopImageComponent } from './starter/shop-image/shop-image.component';
import { ShopInfoComponent } from './starter/shop-info/shop-info.component';
import { AuthService } from './view/auth.service';
import { MyDatePickerModule } from 'mydatepicker';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    ListUserComponent,
    ShopComponent,
    ShopDetailComponent,
    ShopImageComponent,
    ShopInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule, 
    MyDatePickerModule,
    AngularDateTimePickerModule   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
