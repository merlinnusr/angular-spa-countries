import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{
  public country?: Country;
  constructor(
    private activatedRouter: ActivatedRoute,
    private countryService: CountriesService,
    private router : Router,
  ){

  }
  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap(({id}) => this.countryService.searchCountryByAlphaCode(id) )
    ).subscribe((country) => {
      if(!country){
        return this.router.navigateByUrl('');
      }
      this.country = country;
      console.log("Pais")
      return;
    })
  }
}
