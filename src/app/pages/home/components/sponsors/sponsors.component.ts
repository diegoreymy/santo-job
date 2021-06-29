import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import { SwiperComponent } from "swiper/angular";

SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: '[app-sponsors]',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
