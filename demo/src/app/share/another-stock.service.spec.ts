import { TestBed } from '@angular/core/testing';
import { AnotherStockService } from './another-stock.service';


describe('AnotherStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnotherStockService = TestBed.get(AnotherStockService);
    expect(service).toBeTruthy();
  });
});
