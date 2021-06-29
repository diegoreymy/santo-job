import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CAROUSEL_ITEMS_MENU, ICarouselItemsInfo } from '../../constants/carousel-items.constant';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() activeMenu = 0;
  @Output() onItemMenuSelected = new EventEmitter<number>();

  open = false;
  carouselItemsMenu: ICarouselItemsInfo[] = CAROUSEL_ITEMS_MENU;

  constructor() { }

  ngOnInit(): void {
  }

  onClickLink(itemMenuSelected: number) {
    this.open = false;
    this.onItemMenuSelected.emit(itemMenuSelected);
  }
}
