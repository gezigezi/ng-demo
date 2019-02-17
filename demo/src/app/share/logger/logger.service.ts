import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { 
  }
  getLogger(message: string) {
    console.log('############' + message + '################')
  }
}
