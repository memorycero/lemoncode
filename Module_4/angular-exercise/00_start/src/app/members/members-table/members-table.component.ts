import { Component } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[];
  organization: '';

  constructor(private membersApi: MembersApiService) { }

  loadMembers() {
    console.log(this.organization);
    this.membersApi.getAllMembers(this.getOrganizationName())
      .subscribe((ms) => this.members = ms);
  }

  private getOrganizationName(): string {
    return this.organization === '' || this.organization === undefined
      ? 'lemoncode'
      : this.organization;
  }

}
