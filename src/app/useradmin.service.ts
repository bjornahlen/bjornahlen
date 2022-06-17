import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UseradminService {

  private userUrl = 'https://afcrud.herokuapp.com/users/';

  constructor(private http: HttpClient) { }

  getUsers() {
  return this.http.get<User[]>(this.userUrl);
}

createUser(user: User): Observable<User> {
  return this.http.post<User>(this.userUrl, user)
}

}





