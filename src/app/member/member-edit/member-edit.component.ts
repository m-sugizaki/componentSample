import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../member';
import { MemberService } from '../../services/member.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {

  @Input() memberData:any = { id: '', name: '', pass: '' };

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

  get name() { return this.memberForm.get('name'); }
  get pass() { return this.memberForm.get('pass'); }

  ngOnInit() {
    this.getMember(this.route.snapshot.params['id']);
  }
  getMember(id: number) {
    this.member = [];
    this.memberService.getMember(id).subscribe((data: {}) => {
      console.log(data);
      //jsonのデータ部だけを格納
      this.member = data;
//      this.member = JSON.stringify(data);
      console.log(this.member);

      this.memberForm.setValue({
        id: this.member.id,
        name: this.member.name,
        pass: this.member.pass
      });
    });
  }

//  ngOnInit() {
//    this.memberService.getMember(this.route.snapshot.params['id']).subscribe((data: {}) => {
//      console.log(data);
//      this.memberData = data;
//      });
//  }

///  updateProduct() {
///    this.memberService.updateMember(this.route.snapshot.params['id'], this.memberData).subscribe((result) => {
///      this.router.navigate(['/member-detail/'+result._id]);
///    }, (err) => {
///      console.log(err);
///    });
///  }



//    this.route.params.subscribe((params: Params) => {
//      this.memberService.get(params['id']).subscribe((member: Member) => {
////        this.member = member;
//        this.memberForm.setValue({
//          id:  member.id,
//          name: member.name,
//          pass: member.pass,
//        });
//      });
//    });
//  }

  saveMember(): void {
////    console.log(this.member);
//    this.router.navigate(['/members']);
    if (this.memberForm.valid) {
      console.log(this.route.snapshot.params['id']);
      console.log(this.memberForm.getRawValue());

      this.memberService.updateMember(this.route.snapshot.params['id'], 
        this.memberForm.getRawValue()).subscribe((result) => {
        this.router.navigate(['/members/'+result.id]);
      }, (err) => {
        console.log(err);
      });

//      const { id, name, pass } = this.memberForm.getRawValue();
//      console.log(id, name, pass);
//      this.memberService.updateMember(id, new Member(id, name, pass));
//      console.log(Member);
////      this.router.navigate(['/members', this.memberForm.controls.id.value]);
    }
  }
}


///  updateProduct() {
///    this.memberService.updateMember(this.route.snapshot.params['id'], this.memberData).subscribe((result) => {
///      this.router.navigate(['/member-detail/'+result._id]);
///    }, (err) => {
///      console.log(err);
///    });
///  }
