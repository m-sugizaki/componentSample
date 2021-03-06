import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; // karma
import { RouterTestingModule } from '@angular/router/testing'; // karma
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; // karma

import { MemberDetailComponent } from './member-detail.component';

describe('MemberDetailComponent', () => {
  let component: MemberDetailComponent;
  let fixture: ComponentFixture<MemberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule], // karma
      declarations: [ MemberDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
