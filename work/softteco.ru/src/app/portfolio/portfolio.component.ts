import { Component, OnInit, HostListener } from '@angular/core';
import { PortfolioItems} from './portfolio-items';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  title = ['Портфолио'];
  subTitle = 'Познакомьтесь с нашими клиентами. Связажитесь с нами.';
  portfolioItems = PortfolioItems;
  isRetina: boolean;
  imagePostFix: string;
  constructor() {
    this.isRetina = window.devicePixelRatio > 1 ||
      (window.matchMedia &&
      window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)").matches);
    this.imagePostFix = this.isRetina ? '3x' : '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event) {
    this.imagePostFix = this.isRetina && window.innerWidth > 650 ? '3x' : '';
  }

  ngOnInit() {
    this.imagePostFix = this.isRetina &&  window.innerWidth > 650 ? '3x' : '';
  }

  showDescription(item: any) {
    if (window.innerWidth < 1001) {
      const itemClosedProp = item.closed;
      this.portfolioItems.forEach(portfolioItem => portfolioItem.closed = true);
      if (itemClosedProp) {
        item.closed = false;
      }
    }
  }

}
