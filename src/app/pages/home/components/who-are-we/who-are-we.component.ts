import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CAROUSEL_ITEMS_MENU, ICarouselItemsInfo } from 'src/app/shared/constants/carousel-items.constant';

@Component({
  selector: '[app-who-are-we]',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss']
})
export class WhoAreWeComponent implements OnInit {

  @Input() view: string = 'default';
  @Output() onClickSeeMore = new EventEmitter<number>();

  carouselItemMenu: ICarouselItemsInfo[] = CAROUSEL_ITEMS_MENU.filter((carouselItemMenu) => carouselItemMenu.section_name === 'Quem somos');


  constructor() { }

  ngOnInit(): void {
  }

  goToPage(page: number) {
    this.onClickSeeMore.emit(page);
  }

}
