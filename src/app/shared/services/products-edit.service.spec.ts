import { TestBed } from '@angular/core/testing';
import { ProductResolver } from './products-resolver.service';

describe('ProductResolver', () => {
  let service: ProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
