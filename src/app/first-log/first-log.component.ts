import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-first',
  templateUrl: './first-log.component.html',
  styleUrls: ['./first-log.component.css']
})
export class FirstComponent {
  constructor(private loggingService: LoggingService) {}

  logMessage() {
    this.loggingService.logMessage('Message from First Component');
  }
}
