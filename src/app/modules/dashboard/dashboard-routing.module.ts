import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts-table/contacts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:DashboardComponent, children:
[
  {path:'contacts', component:ContactsComponent},
  {path:'home', component:HomeComponent},
  {path:'' , redirectTo:'/dashboard/home', pathMatch:'full'}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
