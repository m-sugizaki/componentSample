import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { MemberService } from '../../services/member.service';
import { Member } from '../../member';

@Component({
  selector: 'app-member-newj',
  templateUrl: './member-new.component.html',
  styleUrls: ['../member-edit/member-edit.component.scss']
})
export class MemberNewComponent implements OnInit {
  memberForm = this.fb.group({
    id:  [''],
    name: [''],
    pass: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private memberService: MemberService,
  ) {}

  get id() { return this.memberForm.get('id'); }
  get name() { return this.memberForm.get('name'); }
  get pass() { return this.memberForm.get('pass'); }

  ngOnInit() {}

  saveMember(): void {
    if (this.memberForm.valid) {
      const { id, name, pass } = this.memberForm.getRawValue();
      this.memberService.create(new Member( id, name, pass)).subscribe(() => {
        this.router.navigate(['/members/']);
      });
    }
  }
}