import { Component, OnInit } from '@angular/core';
import { Member } from '../../member';
import { MemberService } from '../../services/member.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
　member: any;
// changed by tutorial
//  member: Member;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,
    private router: Router
  ) { }

// よくわからないが、ngOnInitの外にgetMember()を出したらデータが取れた
  ngOnInit() {
      this.getMember(this.route.snapshot.params.id);
//      this.getMember(this.route.snapshot.params['id']);
  }
  getMember(id: number) {
    this.member = [];
    this.memberService.getMember(id).subscribe((data: {}) => {
      console.log(data);
      this.member = data;
    });
  }

  // changed by tutorial
//
//  ngOnInit() {
//    const id = Number(this.route.snapshot.paramMap.get('id'));
//    this.memberService.getMember(id).subscribe(res => {
//      this.member = res;
//    });
//
// changed by tutorial

//    this.route.params.subscribe((params: Params) => {
//      this.memberService.getMember(params['id']).subscribe((members: Member[]) => {
//        this.members = members.map((member: Member) => {
//          return {
//            ... member,
//          };
//        });
////      this.members = members;
//      });
//    });

  //    this.route.params.subscribe((params: Params) => {
//        this.memberService.getMember().subscribe((members: Member[]) => {
////        this.memberService.get(params['id']).subscribe((member: Member) => {
//        this.member = members;
//      });
//    });
}
