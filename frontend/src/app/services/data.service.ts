import { Injectable } from '@angular/core';

export enum IrrigationActionEnum {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}
export interface IIrrigationLog {
  id: string;
  action: IrrigationActionEnum;
  date: Date;
}

export interface IElectrovalve {
  id: string;
  state: boolean;
  irrigationLogs: IIrrigationLog[];
}
export interface IMeasurement {
  id: string;
  date: Date;
  value: number;
}
export interface IDevice {
  name: string;
  location: string;
  id: string;
  electrovalve: IElectrovalve;
  measurements: IMeasurement[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public devices: IDevice[] = [
    {
      name: 'Dispositivo N-1',
      location: 'Huerta',
      id: '0',
      electrovalve: {
        id: '1',
        state: false,
        irrigationLogs: [],
      },
      measurements: [
        {
          id: '1',
          date: new Date(),

          value: 90,
        },
        {
          id: '2',
          date: new Date(),
          value: 40,
        },
        {
          id: '3',
          date: new Date(),
          value: 10,
        },
        {
          id: '4',
          date: new Date(),
          value: 25,
        },
      ],
    },
    {
      name: 'Dispositivo N-432',
      location: 'Casa',
      id: '1',
      electrovalve: {
        id: '1',
        state: true,
        irrigationLogs: [
          {
            id: '1',
            date: new Date(),
            action: IrrigationActionEnum.CLOSE,
          },
          {
            id: '1',
            date: new Date(),
            action: IrrigationActionEnum.CLOSE,
          },
          {
            id: '1',
            date: new Date(),
            action: IrrigationActionEnum.CLOSE,
          },
        ],
      },
      measurements: [
        {
          id: '8',
          date: new Date(),
          value: 20,
        },
      ],
    },
  ];

  constructor() {}

  public getMessages(): IDevice[] {
    return this.devices;
  }

  public getDeviceById(id: string): IDevice | null {
    const foundDevice = this.devices.find((devices) => devices.id === id);
    return !!foundDevice ? foundDevice : null;
  }

  public updateDeviceElectrovalve(id: string): void {
    // TODO: actualizar
    const device = this.getDeviceById(id);
    if (!!device) {
      device.electrovalve.state = !device.electrovalve.state;
      //PUT to backend
      return;
    }
    // El backend deberia devolver el device actualizado y con una ultima medicion añadida (en caso de que la electrovalvula se cierre)
  }
}
