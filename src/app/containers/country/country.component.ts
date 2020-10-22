import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countries$: Observable<Country[]>;

  constructor(private countryService: CountryService) {
    this.countries$ = this.countryService.getCountries();
   }

  ngOnInit(): void {
  }

}
