import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IServiceList, SERVICES_LIST } from 'src/app/shared/constants/services-list.constant';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  slug: string;
  servicesList: IServiceList[] = SERVICES_LIST;
  serviceItem: IServiceList = {} as IServiceList;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private router: Router
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
