import {Injectable} from '@angular/core';

@Injectable()
export class ToastyNotificationsService {
  waitId = -1;

  constructor() {
  }

  parameters: any | undefined;

  error(title: string, message: string) {
    console.log(`error - ${title} - ${message}`);
  }

  success(title: string, message: string) {
    console.log(`success - ${title} - ${message}`);
  }

  info(title: string, message: string) {
    console.log(`info - ${title} - ${message}`);
  }

  default(title: string, message: string) {
    console.log(`default - ${title} - ${message}`);
  }

  warning(title: string, message: string) {
    console.log(`warning - ${title} - ${message}`);
  }

  wait(title: string, message: string) {
    console.log(`wait - ${title} - ${message}`);
  }

  cancelWait() {
    console.log('cancel wait');
  }

  clearAll() {
    console.log('clear all');
  }
}
