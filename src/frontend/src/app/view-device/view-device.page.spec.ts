import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ViewDevicePage } from './view-device.page';

describe('ViewDevicePage', () => {
  let component: ViewDevicePage;
  let fixture: ComponentFixture<ViewDevicePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ViewDevicePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
