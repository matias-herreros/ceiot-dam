import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Platform,
  IonItem,
  IonLabel,
  IonNote,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { IDevice } from '../services/data.service';

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink, IonItem, IonLabel, IonNote, IonIcon],
})
export class ListDeviceComponent {
  private platform = inject(Platform);
  @Input() device!: IDevice;
  isIos() {
    return this.platform.is('ios');
  }
  constructor() {
    addIcons({ chevronForward });
  }
}
