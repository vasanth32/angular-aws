import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logMessage(message: string) {
    console.log(`LOG: ${message}`);
  }
}
