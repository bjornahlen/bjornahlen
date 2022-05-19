import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UseradminService {
  
  

  constructor(
    private http: HttpClient
  ) { }




}
