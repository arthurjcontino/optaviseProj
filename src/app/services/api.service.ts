import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/v2'; 

  constructor(private http: HttpClient) {}

  getEmployees(p0: boolean): Observable<any> {
    return this.http.get(`${this.apiUrl}/employees`).pipe(
      catchError(this.handleEmpError)
    );;
  }

  getDepartments(p0: boolean): Observable<any> {
    return this.http.get(`${this.apiUrl}/departments`)
    .pipe(
      catchError(this.handleDeptError)
    );;
    
  }
  private handleDeptError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error('Something went wrong in Departments'));
  }

  private handleEmpError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error('Something went wrong in Employees'));
  }
}
