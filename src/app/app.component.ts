import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {NzFlexDirective} from 'ng-zorro-antd/flex';
import { QuickDown } from './animations/animation';
import {FooterComponent} from './components/website/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NzLayoutModule, NzMenuModule, NzFlexDirective, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [QuickDown]
})
export class AppComponent {
  isCollapsed = false;
}
