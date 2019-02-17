import {Injectable} from '@angular/core';
import { LoggerService } from './logger/logger.service';


@Injectable({providedIn: 'root'})
export class StockService {

  constructor(public logger:LoggerService) { }
  getStock(): Stock {
    this.logger.getLogger('getStock方法被调用');
    return new Stock(1, 'IBM');
  }
}
export class Stock {
  constructor(public id: number, public name: string) {}
}
