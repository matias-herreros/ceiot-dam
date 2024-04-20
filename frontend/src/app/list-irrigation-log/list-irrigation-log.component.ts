import { Component, Input, OnInit } from '@angular/core';
import { IIrrigationLog } from '../services/data.service';
import { IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-irrigation-log',
  templateUrl: './list-irrigation-log.component.html',
  styleUrls: ['./list-irrigation-log.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonNote],
})
export class ListIrrigationLogComponent implements OnInit {
  @Input() irrigationLog!: IIrrigationLog;
  constructor() {}

  ngOnInit() {}
}
