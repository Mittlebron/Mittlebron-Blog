import { Component } from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {NgStyle} from '@angular/common';
import {NzSpinComponent} from 'ng-zorro-antd/spin';
import {QuickUp} from '../../animations/animation';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  imports: [NzButtonModule, NzFlexDirective, NgStyle, NzSpinComponent],
  styleUrl: './welcome.component.css',
  animations: [QuickUp]
})
export class WelcomeComponent {
  constructor() {}
}
