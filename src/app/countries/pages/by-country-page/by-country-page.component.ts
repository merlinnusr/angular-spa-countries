import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] = [];
  public initialSearch = '';

  constructor(private countryService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialSearch = this.countryService.cacheStore.byCountries.term;
  }
  
  searchByCountry(term: string) {
    console.log({ term });
    this.countryService.searchCountry(term).subscribe((data) => {
      this.countries = data;
    });
    return '';
  }
}
