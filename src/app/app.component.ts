import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import {NzAvatarComponent} from 'ng-zorro-antd/avatar';
import { QuickDown } from './animations/animation';
import {NzTypographyComponent} from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule, NzFlexDirective, NzAvatarComponent, NzTypographyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [QuickDown]
})
export class AppComponent {
  isCollapsed = false;
}
