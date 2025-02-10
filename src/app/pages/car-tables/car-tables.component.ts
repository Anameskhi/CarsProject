import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CarList, CarListCols, SpecificModelCols } from './carList.const';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-car-tables',
  standalone: true,
  imports: [TableModule, CommonModule,ButtonModule,DialogModule],
  templateUrl: './car-tables.component.html',
  styleUrl: './car-tables.component.scss',
})
export class CarTablesComponent {
  carsList = this.processCarList(CarList);
  carListCols = CarListCols;
  specificCarCols = SpecificModelCols;
  fordCars = this.carsList.filter((car) => car.brand === 'Ford');
  vwCars = this.carsList.filter((car) => car.brand === 'VW');
  carBrands = ['VW', 'Ford']; 
  selectedCar: any = null; 
  displayDialog: boolean = false

  processCarList(data: any[][]) {
    let lastBrand = '';
    let lastModel = '';
    let lastTransmission = '';

    return data.map((row) => {
      const [brand, model, transmission, price, priceFlag, code] = row;

      if (brand) lastBrand = brand;
      if (model) lastModel = model;
      if (transmission) lastTransmission = transmission;

      return {
        brand: lastBrand,
        model: lastModel,
        transmission: lastTransmission,
        price: price,
        priceFlag: priceFlag,
        code: code,
      };
    });
  }
  showCode(car: any) {
    this.selectedCar = car; 
    this.displayDialog = true; 
    console.log('Button clicked for car:', car.code);
  }
  getCarsByBrand(brand: string) {
    return this.carsList.filter((car) => car.brand === brand);
  }

  getPriceStyle(priceFlag: number) {
    switch (priceFlag) {
      case 1:
        return { color: 'green' };
      case 0:
        return { color: 'black' };
      case -1:
        return { color: 'yellow' };
      default:
        return { color: 'black' }; 
    }
  }
}
