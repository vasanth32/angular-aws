import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  showMessage : boolean = true;
  items: string[] = ['Item 1','Item 2','Item 3','Item 4'];
  textColor: string = 'blue';

  toggleColor() 
  {
    this.textColor = this.textColor === 'blue' ? 'red' : 'blue';
  }

}

