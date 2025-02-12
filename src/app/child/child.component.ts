import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
   templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: string = '';

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
