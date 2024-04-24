import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IMeasurement } from '../services/data.service';
import { IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';
import { HighlightDirective } from '../directives/underline.directive';

@Component({
  selector: 'app-list-measurement',
  templateUrl: './list-measurement.component.html',
  styleUrls: ['./list-measurement.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonNote, HighlightDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListMeasurementComponent implements OnInit {
  @Input() measurement!: IMeasurement;
  constructor() {}

  ngOnInit() {}
}
