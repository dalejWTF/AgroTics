import { TestBed } from '@angular/core/testing';

import { ApiSeguimientoService } from './api-seguimiento.service';

describe('ApiSeguimientoService', () => {
  let service: ApiSeguimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSeguimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
