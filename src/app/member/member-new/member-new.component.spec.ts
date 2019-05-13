import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; // karma
import { RouterTestingModule } from '@angular/router/testing'; // karma
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; // karma

import { MemberNewComponent } from './member-new.component';

describe('MemberNewComponent', () => {
  let component: MemberNewComponent;
  let fixture: ComponentFixture<MemberNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule], // karma
      declarations: [ MemberNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
