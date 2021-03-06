import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; // karma
import { RouterTestingModule } from '@angular/router/testing'; // karma
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; // karma

import { MemberListComponent } from './member-list.component';
import { Member } from '../../member';
import { MemberService } from '../../services/member.service';

describe('MemberListComponent', () => {
  let component: MemberListComponent;
  let fixture: ComponentFixture<MemberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule], // karma
      declarations: [ MemberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('get members', () => {
    expect(component).toBeTruthy();
  });

  it('getMembers 関数', () => {
    expect(component).toBeTruthy();
//    const target = new MemberListComponent();
  });

});
