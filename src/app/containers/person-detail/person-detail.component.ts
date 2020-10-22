import { Person } from './../../model/person';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  personById: Person;

  constructor(private personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.personById = this.route.snapshot.params.id;

    this.personService.getPersonByid(this.personById)
      .subscribe(data => {
        console.log(data);
        this.personById = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line: typedef
  backToList() {
    this.router.navigate(['/persons']);
  }

}


