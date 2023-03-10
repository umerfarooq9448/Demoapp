import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowdetailsComponent } from './showdetails/showdetails.component';
import { MainbodyComponent } from './mainbody/mainbody.component'; 
import { CrudPageComponent } from './crud-page/crud-page.component';


const routes: Routes = [{path: 'showdetailscomp',component:ShowdetailsComponent},
{path: 'mymainbody',component:MainbodyComponent},
{path:'crud',component:CrudPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
