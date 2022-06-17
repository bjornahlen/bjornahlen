import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { UseradminService } from '../useradmin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})



export class UserComponent implements OnInit {

  constructor(private userAdminservice: UseradminService) { }

  user$: Observable<User[]> = this.userAdminservice.getUsers();
  displayedColumns = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'isMarried', 'role', 'actions'];


  ngOnInit(): void {
  }

  deleteUser(id: string) {
    this.userAdminservice.deleteUser(id).subscribe();
  }
}



