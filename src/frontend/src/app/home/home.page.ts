import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  RefresherCustomEvent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRefresher,
  IonRefresherContent,
  IonList,
} from '@ionic/angular/standalone';
import { ListDeviceComponent } from '../list-device/list-device.component';

import { DataService, IDevice } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonRefresher,
    IonRefresherContent,
    IonList,
    ListDeviceComponent,
  ],
})
export class HomePage implements OnInit {
  private data = inject(DataService);
  devices!: IDevice[];
  constructor() {}

  async ngOnInit() {
    this.devices = await this.getDevices();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  async getDevices(): Promise<IDevice[]> {
    return await this.data.getDevices();
  }
}
