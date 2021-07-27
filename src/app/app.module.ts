import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/master/layouts.component';
import { NavbarComponent } from './components/layouts/master/navbar/navbar.component';
import { SidebarComponent } from './components/layouts/master/sidebar/sidebar.component';
import { LoginComponent } from './components/layouts/pages/login/login.component';
import { RegisterComponent } from './components/layouts/pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
