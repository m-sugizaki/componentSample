import { Component, OnInit } from '@angular/core';
import { Member } from '../../member';
import { MemberService } from '../../services/member.service';

class MemberListElement extends Member {
  hovered: boolean;
}

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  members: any = [];
// changed by tutorial
//  members: Member[] = null;

  constructor(
    private memberService: MemberService,
  ) {}

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.members = [];
    this.memberService.getMembers().subscribe((data: {}) => {
      console.log(data);
      this.members = data;
    });
  }

// changed by tutorial
//
//  ngOnInit() {
//    this.memberService.list().subscribe((members: Member[]) => {
//      this.members = members.map((member: Member) => {
//        return { // <= 変更
//          ... member,
//          hovered: false,
//        };
//      });
////      this.members = members;
//    });
//  }
//
// changed by tutorial

  hovered(member: MemberListElement): void { member.hovered = true; }
  unhovered(member: MemberListElement): void { member.hovered = false; }
}
