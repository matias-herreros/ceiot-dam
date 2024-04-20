import { Component, Input, OnInit } from '@angular/core';
import { IMeasurement } from '../services/data.service';
import { IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-measurement',
  templateUrl: './list-measurement.component.html',
  styleUrls: ['./list-measurement.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonNote],
})
export class ListMeasurementComponent implements OnInit {
  @Input() measurement!: IMeasurement;
  constructor() {}

  ngOnInit() {}
}
