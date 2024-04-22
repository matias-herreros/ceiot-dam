import { Injectable } from '@angular/core';
import axios from 'axios';

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
  name: string;
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
  private uri = 'http://localhost:3000';

  public devices!: IDevice[];

  constructor() {}

  public async getDevices(): Promise<IDevice[]> {
    const res = await axios.get<IDevice[]>(`${this.uri}/device/details`);
    return res.data;
  }

  public async getDeviceById(id: string): Promise<IDevice> {
    const res = await axios.get<IDevice>(`${this.uri}/device/${id}`);
    return res.data;
  }

  public async updateDeviceElectrovalve(id: string): Promise<IDevice> {
    const res = await axios.put<IDevice>(`${this.uri}/device/${id}`);
    return res.data;
  }
}
