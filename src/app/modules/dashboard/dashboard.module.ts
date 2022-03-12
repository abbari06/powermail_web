import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts-table/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardZorroModule } from './dasboard-zorro.module';
import { ChooseProfileComponent } from './components/choose-profile/choose-profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    ContactsComponent,
    HomeComponent,
    ChooseProfileComponent
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardZorroModule
  ]
})
export class DashboardModule { }
