import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (error) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  getClassCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
