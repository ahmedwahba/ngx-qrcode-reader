import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQrcodeReaderComponent } from './ngx-qrcode-reader.component';

describe('NgxQrcodeReaderComponent', () => {
  let component: NgxQrcodeReaderComponent;
  let fixture: ComponentFixture<NgxQrcodeReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxQrcodeReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxQrcodeReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
