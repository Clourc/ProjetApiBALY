import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accessProfileGuard } from './access-profile.guard';

describe('accessProfileGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accessProfileGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
