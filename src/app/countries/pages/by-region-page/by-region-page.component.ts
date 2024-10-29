import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  constructor(private countryService: CountriesService) {}
  searchByRegion(term: string) {
    console.log({ term });
    this.countryService.searchRegion(term).subscribe((data) => {
      this.countries = data;
    });
    return '';
  }
}
