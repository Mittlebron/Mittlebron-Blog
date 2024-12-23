import {Component, NgModule} from '@angular/core';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {CommonModule, NgStyle} from '@angular/common';
import {NzTypographyComponent} from 'ng-zorro-antd/typography';
import {NzPopoverDirective} from 'ng-zorro-antd/popover';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzDividerComponent} from 'ng-zorro-antd/divider';
import {NzAvatarComponent} from 'ng-zorro-antd/avatar';

@Component({
  selector: 'app-footer',
  imports: [
    NzIconModule,
    NzFlexDirective,
    NgStyle,
    NzTypographyComponent,
    NzPopoverDirective,
    NzDividerComponent,
    NzAvatarComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  email = 'Mittlebron@gmail.com'

  github(): void {
    window.open('https://github.com/Mittlebron')
  }

  mailto(): void {
    window.open('mailto://Mittlebron@gmail.com')
  }
}
