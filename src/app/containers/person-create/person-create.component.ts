import { Observable } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from 'src/app/model/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {

  isEdit = false;

  personForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    countryCode: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    referredBy: new FormControl(''),
    referrelCode: new FormControl(''),

  });

  user: Person;
  persons$: Observable<Person[]>;
  id: number;

  constructor(private personService: PersonService, private router: Router) {

  }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.persons$ = this.personService.getPersons();
  }

  createUser() {
    this.personService.createPerson(this.personForm.value)
      .subscribe(data => {
        this.getPersons();
      });
  }

  updateUser() {
    this.personService.updatePerson(this.id, this.personForm.value).subscribe(data => {
      this.getPersons();
    });
  }

  editUser(id) {
    this.isEdit = true;
    this.id = id;
    this.personService.getPersonByid(id).subscribe(data => {
      this.personForm.patchValue({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        countryCode: data.countryCode,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        referredBy: data.referredBy,
        referrelCode: data.referrelCode,
      });
    });
  }


  deleteUser(id) {
    this.personService.deletePerson(id).subscribe((data) => {
      this.getPersons();
    });
  }

}
