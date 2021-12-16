import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockyService {

  constructor(private _http: HttpClient) { }

  public getData(): Observable<any>{
    return this._http.get("https://run.mocky.io/v3/5afa2da6-f82c-4cc1-a66b-3b255191d24c");
  }
  }
