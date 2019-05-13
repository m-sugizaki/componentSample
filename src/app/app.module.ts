import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// RestAPIコールに利用するモジュール追加
// @angular/httpは非推奨になった
// import { HttpModule,JsonpModule} from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
// @angular/materialのバージョン違い
// import {MdCheckboxModule,MdRadioModule,MdCardModule,MdInputModule,MdButtonModule} from '@angular/material';
import {MatCheckboxModule, MatRadioModule, MatCardModule, MatInputModule, MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

// import { DashboardComponent } from './dashboard/dashboard.component';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// メンバー一覧取得用サービス
import { MemberService } from './services/member.service';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberNewComponent } from './member/member-new/member-new.component';
import { MemberDeleteComponent } from './member/member-delete/member-delete.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
//// DashboardComponentを読み込めるように追加
//    DashboardComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberEditComponent,
    MemberNewComponent,
    MemberDeleteComponent,
  ],
  imports: [
    BrowserModule,
// RestAPIコールに利用するモジュール追加
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
// 商品情報取得用serviceをDIできるように追加
//    MemberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
