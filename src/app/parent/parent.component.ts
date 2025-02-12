import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent',
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  showChild = true;
  childData = 'Initial Data';
  parentMessage = "Hello from Parent!";


  toggleChild() {
    this.showChild = !this.showChild;
  }

  changeData() {
    this.childData = 'Updated Data ' + Math.random();
  }
  handleChildEvent(message: string) {
    alert("Received from Child: " + message);
  }

}
