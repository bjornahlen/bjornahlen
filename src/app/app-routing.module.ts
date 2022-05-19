import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'user', component: UserComponent },
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
