import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
   templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: string = '';
  @Input() childMessage: string = ""; // Receiving data from parent
  
  @Output() childEvent = new EventEmitter<string>(); // Sending event to parent
  
  sendMessageToParent() {
    this.childEvent.emit("Hello Parent! This is Child.");
  }
  constructor() {
    console.log('ChildComponent: Constructor');
  }

  ngOnInit() {
    console.log('ChildComponent: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ChildComponent: ngOnChanges', changes);
  }

  ngOnDestroy() {
    console.log('ChildComponent: ngOnDestroy');
  }
}
