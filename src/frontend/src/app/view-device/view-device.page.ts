import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {
  Platform,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonNote,
  IonToggle,
  IonList,
  IonListHeader,
  IonButton,
  IonAccordionGroup,
  IonAccordion,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { DataService, IDevice, IMeasurement } from '../services/data.service';
import { GraphComponent } from '../graph/graph.component';
import { ListMeasurementComponent } from '../list-measurement/list-measurement.component';
import { ListIrrigationLogComponent } from '../list-irrigation-log/list-irrigation-log.component';

@Component({
  selector: 'app-view-device',
  templateUrl: './view-device.page.html',
  styleUrls: ['./view-device.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent,
    IonItem,
    IonIcon,
    IonLabel,
    IonNote,
    IonToggle,
    IonList,
    IonListHeader,
    IonButton,
    IonAccordionGroup,
    IonAccordion,
    GraphComponent,
    ListMeasurementComponent,
    ListIrrigationLogComponent,
  ],
})
export class ViewDevicePage implements OnInit {
  public device!: IDevice | null;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  public measurements!: IMeasurement[] | null;

  constructor() {
    addIcons({ personCircle });
  }

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.device = await this.data.getDeviceById(id);
    this.measurements = !!this.device ? this.device.measurements : null;
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios');
    return isIos ? 'Inbox' : '';
  }

  async updateDevice(device: IDevice) {
    await this.data.updateDeviceElectrovalve(device.id);
  }
}
