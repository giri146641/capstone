import { TestBed } from '@angular/core/testing';

import { EmpUploadService } from './emp-upload.service';

describe('EmpUploadService', () => {
  let service: EmpUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
