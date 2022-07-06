import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})

export class UseradminService {

  private userUrl = 'https://afcrud.herokuapp.com/users/';
  public id = '';
  public errorMessage = '';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.userUrl).pipe(catchError((response: Response) => response.json()));
    
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user).pipe(catchError(this.handleError))
  }

  deleteUser(id: string): Observable<Object>{
  return this.http.delete(this.userUrl + id)
  }
/*
  editUser(id: string, user: User){
    return this.http.put<User>(this.userUrl + id, user)
    .subscribe({
      next: data => {
          this.id = data.id;
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  });
}
  */  
  
  
private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }






}
