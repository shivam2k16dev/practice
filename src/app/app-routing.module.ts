import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';
import { CreateComponent } from './create/create.component';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';


@Injectable()
export class TeamResolver implements Resolve<any> {
  constructor() {"this.getTopPosts();"}
getTopPosts(){
    console.log('hello');
}
  resolve() {
    return this.getTopPosts();
  }
}

const routes: Routes = [
{ path: '', resolve: { home: TeamResolver }, children: [
{
	path:"home",
	component:HomeComponent 
},
{
	path:"edit/:id",
	component:EditComponent
},
{
	path:"get",
	component:GetComponent
},
{
	path:"create",
	component:CreateComponent
}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[TeamResolver]
})
export class AppRoutingModule { }
