import { Injectable } from '@angular/core';
import { StockService, Stock } from './stock.service';
import { LoggerService } from './logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AnotherStockService implements StockService {
  getStock(): Stock {
    this.logger.getLogger('AnotherStockService被调用')
    return new Stock(2, '微软');
  }



  constructor(public logger: LoggerService) { }
}
