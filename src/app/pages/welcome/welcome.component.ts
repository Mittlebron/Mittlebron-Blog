import { Component } from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  imports: [ NzButtonModule ],
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor() {}
}
