import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import { ButtonTheme, ButtonSize } from './../shared/types/types';
import Typed from 'typed.js';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  fixedHeader = false;
  buttonTheme = ButtonTheme.White;
  buttonSize = ButtonSize.Small;
  buttonTitle = 'контакты';
  buttonHref = 'contact-us';
  titles = [
    'Веб-порталы',
    'Мобильные приложения',
    'Выделенные IТ-команды',
    'B2B / B2C решения',
    'Решения для E-commerce',
    'UI/UX Дизайн'
  ];
  isRetina: boolean;
  imagePostFix: string;

  constructor(public el: ElementRef) {
    this.isRetina = window.devicePixelRatio > 1 ||
    (window.matchMedia &&
    window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const headerPosition = this.el.nativeElement.getBoundingClientRect().height;
    const scrollPosition = window.pageYOffset;

    this.fixedHeader = (scrollPosition >= headerPosition - 100);
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event) {
    this.imagePostFix = this.isRetina && window.innerWidth > 768 ? '3x' : '';
  }

  ngOnInit() {
    this.imagePostFix = this.isRetina &&  window.innerWidth > 768 ? '3x' : '';
    let options = {
      strings: this.titles,
      typeSpeed: 100,
      backSpeed: 60,
      loop:true
    };

    let typed = new Typed("h1 span", options);
  }
}
