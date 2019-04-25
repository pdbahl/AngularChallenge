import { TestBed } from '@angular/core/testing';

import { EmployeeHolderService } from './employee-holder.service';

describe('EmployeeHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeHolderService = TestBed.get(EmployeeHolderService);
    expect(service).toBeTruthy();
  });
});
