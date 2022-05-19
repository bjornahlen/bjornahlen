import { Component, OnInit} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  user$: BehaviorSubject<User[]> = new BehaviorSubject<User[]> ([]) ;

  private userUrl = 'https://young-savannah-65688.herokuapp.com/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.getUsers(); 
  }  
  getUsers() {
  this.http.get<User[]>(this.userUrl + '/users').subscribe
  }

}



