import { TestBed } from '@angular/core/testing';

import { MochilasService } from './mochilas.service';

describe('MochilasService', () => {
  let service: MochilasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MochilasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
