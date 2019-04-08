import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberNewComponent } from './member/member-new/member-new.component';
import { MemberDeleteComponent } from './member/member-delete/member-delete.component';

const routes: Routes = [
  { path: 'members', component: MemberListComponent },
  { path: 'members/new', component: MemberNewComponent }, 
  { path: 'members/:id', component: MemberDetailComponent },
  { path: 'members/:id/edit', component: MemberEditComponent },
  { path: 'members/:id/del', component: MemberDeleteComponent },
  { path: '', redirectTo: '/members', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
