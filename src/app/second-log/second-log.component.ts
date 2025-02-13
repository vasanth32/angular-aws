import { Component } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-second-log',
  imports: [],
  templateUrl: './second-log.component.html',
  styleUrl: './second-log.component.css'
})
export class SecondLogComponent {
  constructor(private loggingService: LoggingService) {}

  logMessage() {
    this.loggingService.logMessage('Message from Second Component');
  }
}
