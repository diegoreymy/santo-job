import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CAROUSEL_ITEMS_MENU, ICarouselItemsInfo } from 'src/app/shared/constants/carousel-items.constant';

@Component({
  selector: '[app-influencers]',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit {

  @Output() onClickBtn = new EventEmitter<number>();

  isMobile = window.innerHeight < 768;
  isTablet = window.innerWidth < 1024 && window.innerWidth >= 768;

  faleConoscoItem: ICarouselItemsInfo[] = CAROUSEL_ITEMS_MENU.filter((carouselItemMenu) => carouselItemMenu.section_name === 'Fale conosco');

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    this.onClickBtn.emit(this.isMobile ? this.faleConoscoItem[0].mobile_position : this.faleConoscoItem[0].desktop_position);
  }

}
