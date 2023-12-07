import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['PT', 'EN', 'ES' ]);
    translate.setDefaultLang('PT');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
