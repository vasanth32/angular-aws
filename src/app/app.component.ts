import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratedComponentComponent } from "./generated-component/generated-component.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from "./directives/directives.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GeneratedComponentComponent,
    HeaderComponent, FooterComponent, FormsModule, DataBindingComponent, CommonModule, 
    DirectivesComponent, ParentComponent,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-net';
  selectedTab: string = 'generated'; 
}
