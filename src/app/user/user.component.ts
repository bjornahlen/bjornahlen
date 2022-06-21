import { Component, OnInit } from '@angular/core';
import { Subject, Observable, takeUntil } from 'rxjs';
import { User } from '../user';
import { UseradminService } from '../useradmin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})



export class UserComponent implements OnInit {

  constructor(private userAdminservice: UseradminService) { }
  destroy$: Subject<boolean> = new Subject<boolean>()
  user$: Observable<User[]> = this.userAdminservice.getUsers();
 
  displayedColumns = ['firstName', 'lastName', 'dateOfBirth', 'gender', 'isMarried', 'role', 'actions'];


  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  deleteUser(id: string) {
    -    this.userAdminservice.deleteUser(id).subscribe();
       }



}



