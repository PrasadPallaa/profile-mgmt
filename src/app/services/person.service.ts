import { Person } from './../model/person';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = 'http://localhost:8080/api/person/persons';
  private postUrl = 'http://localhost:8080/api/person';
  private deleteOrUpdateUrl = 'http://localhost:8080/api/person/person';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  getPersonByid(id): Observable<Person> {
    return this.http.get<Person>(this.url + '/' + id);
  }

  createPerson(person): Observable<Person> {
    console.log(person);

    return this.http.post<Person>(this.postUrl, person);
  }


  updatePerson(id, person): Observable<Person> {
    return this.http.put<Person>(this.deleteOrUpdateUrl + '/' + id, person);
  }

  deletePerson(id) {
    return this.http.delete<Person>(this.deleteOrUpdateUrl + '/' + id);
  }








  // tslint:disable-next-line: typedef
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(errorMessage);
  }
}


