import { PersonService } from './../../services/person.service';
import { Person } from './../../model/person';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  persons$: Observable<Person[]>;
  personById: Person;
  id: any;

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) {
    this.persons$ = this.personService.getPersons();
  }

  // tslint:disable-next-line: typedef
  onSearch(id: number) {
    this.router.navigate(['persons', id]);
  }



  // tslint:disable-next-line: typedef
  onPersonSearch(id: number) {
    this.id = this.route.snapshot.params.id;

    this.personService.getPersonByid(id)
      .subscribe(data => {

        this.personById = data;
        console.log(data);
      }, error => console.log(error));
  }

}





