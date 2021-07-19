import { TestBed } from '@angular/core/testing';

import { ApiPlantasService } from './api-planta.service';

describe('ApiService', () => {
  let service: ApiPlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
