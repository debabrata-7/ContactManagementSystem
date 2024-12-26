import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { UpdateComponentsComponent } from './components/update-components/update-components.component';


const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"add-contact",component:AddContactComponent},
  {path:"list",component:HomePageComponent},
  {path:"update/:id",component:UpdateComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
