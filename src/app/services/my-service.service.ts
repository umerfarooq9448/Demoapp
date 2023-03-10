import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Movie } from '../model/movie';
import { catchError, Observable, throwError } from 'rxjs';
import { employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService{

  url="http://localhost:3000/Employee";
  constructor(private httpclient: HttpClient) { }
  

  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured', error.error.message)
    }
    else{
      console.error(
        `backedn returned code ${error.status},`+
        `body was: ${error.error}`)

    }
    return throwError('something happened ; please try later');
  };

  public getList(){
    return this.httpclient.get(this.url);
  }

  public addData(data:any):Observable<any>{  
    return this.httpclient.post(this.url,data).pipe(catchError(this.handleError));

  }
  public delete(id:any):Observable<any>{
    let api_url = `${this.url}/${id}`;
    return this.httpclient.delete(api_url).pipe(
      catchError(this.handleError)
    )
  }

  public update(id:any,data:any):Observable<any>{
    let api_url = `${this.url}/${id}`;
    return this.httpclient.put(api_url,data).pipe(
      catchError(this.handleError)

    )
  }

  
}
