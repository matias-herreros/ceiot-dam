import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ViewDevicePage } from '../view-device/view-device.page';

import { ListDeviceComponent } from './list-device.component';

describe('MessageComponent', () => {
  let component: ListDeviceComponent;
  let fixture: ComponentFixture<ListDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDeviceComponent, ViewDevicePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ListDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
