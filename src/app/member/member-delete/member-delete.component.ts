import { Component, OnInit, Input} from '@angular/core';
import { Member } from '../../member';
import { MemberService } from '../../services/member.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-delete',
  templateUrl: './member-delete.component.html',
  styleUrls: ['../member-edit/member-edit.component.scss']
})
export class MemberDeleteComponent implements OnInit {
  @Input() memberData: any = { id: '', name: '', pass: '' };

　member: any = Member;
  //  member: Member;
  memberForm = this.fb.group({
    id: [''],
    name: [''],
    pass: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private memberService: MemberService,
  ) { }

  ngOnInit() {
    this.getMember(this.route.snapshot.params.id);
//    this.getMember(this.route.snapshot.params['id']);
  }

  getMember(id: number) {
    this.memberService.getMember(id).subscribe((data: {}) => {
      console.log(data);
      // jsonのデータ部だけを格納
      this.member = data;
      console.log(this.member);
      this.memberForm.setValue({
        id:  this.member.id,
        name: this.member.name,
        pass: this.member.pass
      });
    });
  }

  delMember(): void {
//    ////    console.log(this.member);
////    this.router.navigate(['/members']);
    if (this.memberForm.valid) {
      console.log(this.route.snapshot.params.id);
//      console.log(this.route.snapshot.params['id']);

      this.memberService.deleteMember(this.route.snapshot.params.id).subscribe((result) => {
//      this.memberService.deleteMember(this.route.snapshot.params['id']).subscribe((result) => {
          this.router.navigate(['/members']);
      }, (err) => {
        console.log(err);
      });
    }
  }
}
