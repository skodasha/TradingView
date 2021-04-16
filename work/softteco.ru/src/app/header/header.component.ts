import { Component, OnInit, Input } from '@angular/core';
import { ButtonTheme, ButtonSize, LogoTheme } from './../shared/types/types';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() fixedHeader;
  buttonTheme = ButtonTheme.White;
  buttonSize = ButtonSize.Small;
  buttonTitle = 'контакты';
  buttonHref = 'contact-us';

  constructor() {}

  ngOnInit() {}

  getLogoTheme() {
    return this.fixedHeader ? LogoTheme.Blue : LogoTheme.White;
  }

  getButtonTheme() {
    return this.fixedHeader ? ButtonTheme.Blue : ButtonTheme.White;
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
}
