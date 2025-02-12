import { Component } from '@angular/core';

@Component({
  selector: 'app-generated-component',
  templateUrl: './generated-component.component.html',
  styleUrls: ['./generated-component.component.css'], // Fixed property name
  standalone: true, // Add this if using standalone components
  imports: [] // Keep this if you need to import other components or modules
})
export class GeneratedComponentComponent {

}
