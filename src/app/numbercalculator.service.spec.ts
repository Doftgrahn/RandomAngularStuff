import { TestBed } from '@angular/core/testing';

import { NumbercalculatorService } from './numbercalculator.service';

describe('NumbercalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumbercalculatorService = TestBed.get(NumbercalculatorService);
    expect(service).toBeTruthy();
  });
});
