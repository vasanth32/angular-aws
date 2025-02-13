import { Component, ViewChild } from '@angular/core';
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
  @ViewChild(ChildComponent) child!: ChildComponent; // Reference to ChildComponent

  ngAfterViewInit() {
    console.log("Child Message:", this.child.childDataMessage); // Access child property after view initialization
  }

  callChildMethod() {
    this.child.showAlert(); // Calling child method from parent
  }


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
