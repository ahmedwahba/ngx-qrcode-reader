import { TestBed } from '@angular/core/testing';

import { NgxQrcodeReaderService } from './ngx-qrcode-reader.service';

describe('NgxQrcodeReaderService', () => {
  let service: NgxQrcodeReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxQrcodeReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
