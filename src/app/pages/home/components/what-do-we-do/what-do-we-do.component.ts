import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CAROUSEL_ITEMS_MENU, ICarouselItemsInfo } from 'src/app/shared/constants/carousel-items.constant';
import { IServiceList, SERVICES_LIST } from 'src/app/shared/constants/services-list.constant';

@Component({
  selector: '[app-what-do-we-do]',
  templateUrl: './what-do-we-do.component.html',
  styleUrls: ['./what-do-we-do.component.scss']
})
export class WhatDoWeDoComponent implements OnInit {

  @Input() view: string = 'default';
  @Output() onClickSeeMore = new EventEmitter<number>();

  servicesList: IServiceList[] = SERVICES_LIST;
  carouselItemMenu: ICarouselItemsInfo[] = CAROUSEL_ITEMS_MENU.filter((carouselItemMenu) => carouselItemMenu.section_name === 'O que fazemos');

  constructor() { }

  ngOnInit(): void {
  }

  goToPage(page: number) {
    this.onClickSeeMore.emit(page);
  }

}
