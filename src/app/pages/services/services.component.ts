import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { IServiceList, SERVICES_LIST } from 'src/app/shared/constants/services-list.constant';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ServicesComponent implements OnInit {

  slug: string;
  servicesList: IServiceList[] = SERVICES_LIST;
  serviceItem: IServiceList = {} as IServiceList;

  isMobile = window.innerWidth < 768;

  icons = {
    arrowLeft: faArrowLeft
  };

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.serviceItem = this.servicesList.find((service: IServiceList) => service.link.split('/')[2] === this.slug) || {} as IServiceList;
   }

  ngOnInit(): void {
  }

  goToFooter() {
    this.viewportScroller.scrollToAnchor('footer');
  }

}
