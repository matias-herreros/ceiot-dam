import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'DateConverter', standalone: true })
export class DateConverter implements PipeTransform {
  transform(value: Date): string {
    const date = new Date(value);
    return date.toDateString();
  }
}
