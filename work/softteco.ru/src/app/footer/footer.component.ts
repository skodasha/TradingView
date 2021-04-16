import { LogoTheme, SocialIcon } from './../shared/types/types';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('copyRight') copyRight: ElementRef;

  socialicons: SocialIcon[] = [
    {
      icon: 'assets/social/linkedin.svg',
      iconHovered: 'assets/social/linkedin-blue.svg',
      link: 'https://www.linkedin.com/company/softteco/',
      title: 'LinkedIn'
    },
    {
      icon: 'assets/social/xing.svg',
      iconHovered: 'assets/social/xing-blue.svg',
      link: 'https://www.xing.com/companies/softteco',
      title: 'Xing'
    },
    {
      icon: 'assets/social/twitter.svg',
      iconHovered: 'assets/social/twitter-blue.svg',
      link: 'https://twitter.com/softteco',
      title: 'Twitter'
    },
    {
      icon: 'assets/social/facebook.svg',
      iconHovered: 'assets/social/facebook-blue.svg',
      link: 'https://www.facebook.com/softteco',
      title: 'FaceBook'
    }
  ];

  currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

  getLogoTheme() {
    return LogoTheme.White;
  }

  visitSocial(socialIcon: SocialIcon) {
    window.open(socialIcon.link);
  }
}
