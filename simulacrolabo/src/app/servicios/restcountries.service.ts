import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestcountriesService 
{
  private baseUrl = 'https://restcountries.com/v3.1/all';
  private countryUrl = 'https://restcountries.com/v3.1/name/';

  constructor(private http: HttpClient) { }

  getAllCountries() 
  {
    return this.http.get(this.baseUrl);
  }
  async getCountryByName(countryName : string)
  {
    return this.http.get(this.countryUrl + countryName);
  }
}
