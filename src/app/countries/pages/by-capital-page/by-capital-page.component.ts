import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading = false;
  public initialSearch = '';
  constructor(
    private countryService: CountriesService,
  ){

  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialSearch = this.countryService.cacheStore.byCapital.term;

  }
  searchByCapital(term: string){
      this.isLoading = true;
      console.log({term})
      this.countryService.searchCapital(term)
      .subscribe((data) => {
        this.countries = data;
        this.isLoading = false;
      });
      return '';
  }
}
