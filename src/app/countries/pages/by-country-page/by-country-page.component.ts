import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor(private countryService: CountriesService) {}
  searchByCountry(term: string) {
    console.log({ term });
    this.countryService.searchCountry(term).subscribe((data) => {
      this.countries = data;
    });
    return '';
  }
}
