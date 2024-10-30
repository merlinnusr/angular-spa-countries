import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
type Region =  'Africa'| 'Asia'|'America'| 'Europe'| 'Oceania';
@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public regions:Region[] = ['Africa', 'Asia','America', 'Europe', 'Oceania'];
  public selectedRegion: Region | undefined | '' ;
  
  constructor(private countryService: CountriesService) {}
  
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region;
  }
  
  searchByRegion(term: Region) {
    console.log({ term });
    this.selectedRegion = term;
    this.countryService.searchRegion(term).subscribe((data) => {
      this.countries = data;
    });
    return '';
  }
}
