import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: '[app-cards-carousel]',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardsCarouselComponent implements OnInit {

  @Input() imagesList: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
