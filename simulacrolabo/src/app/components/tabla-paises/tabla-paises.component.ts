import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaisesService } from '../../servicios/paises.service';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { RestcountriesService } from '../../servicios/restcountries.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, DatePipe, FormsModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.css'
})
export class TablaPaisesComponent implements OnInit {
  countries: any[] = [];
  filteredCountries: any[] = [];
  searchTerm: string = '';
  selectedCountry: any = null;
  listWidth: number = 0;

  @Output() paisSeleccionado = new EventEmitter<string>(); // Cambio de 'country' a 'paisSeleccionado'

  constructor(private restcountriesService: RestcountriesService) {}

  ngOnInit() {
    this.restcountriesService.getAllCountries().subscribe((data: any) => {
      this.countries = data;
      this.filteredCountries = data;
      this.listWidth = data.length * 320;
    });
  }

  filterCountries() {
    this.filteredCountries = this.countries.filter((country) =>
      country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectCountry(country: any) {
    if (this.selectedCountry === country) {
      this.selectedCountry = null;
    } else {
      this.selectedCountry = country;
    }
    this.OnSelectCountry();
  }

  public OnSelectCountry() {
    this.paisSeleccionado.emit(this.selectedCountry.name.common); // Emitir solo el nombre del país
  }
}
