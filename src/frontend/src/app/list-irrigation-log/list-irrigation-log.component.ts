import { Component, Input, OnInit } from '@angular/core';
import { IIrrigationLog } from '../services/data.service';
import { IonItem, IonLabel, IonNote } from '@ionic/angular/standalone';
import { DateConverter } from '../pipes/date.pipe';

@Component({
  selector: 'app-list-irrigation-log',
  templateUrl: './list-irrigation-log.component.html',
  styleUrls: ['./list-irrigation-log.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonNote, DateConverter],
})
export class ListIrrigationLogComponent implements OnInit {
  @Input() irrigationLog!: IIrrigationLog;
  constructor() {}

  ngOnInit() {}
}
