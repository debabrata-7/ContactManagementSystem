import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddConatacComponent } from './components/add-conatac/add-conatac.component';
import { UpdateComponentsComponent } from './components/update-components/update-components.component';


const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"add-contact",component:AddConatacComponent},
  {path:"list",component:HomePageComponent},
  {path:"update/:id",component:UpdateComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
