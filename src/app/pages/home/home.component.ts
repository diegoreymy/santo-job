import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { CAROUSEL_ITEMS_MENU, ICarouselItemsInfo } from 'src/app/shared/constants/carousel-items.constant';
import SwiperCore, { Mousewheel, Pagination, Swiper } from 'swiper/core';
SwiperCore.use([Mousewheel, Pagination]);

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  isMobile = window.innerWidth < 768;
  isTablet = window.innerWidth < 1024 && window.innerWidth >= 768;
  resizeObservable$: Observable<Event> = new Observable();
  resizeSubscription$: Subscription = new Subscription();
  visibleHeader = false;
  activeSlide = 0;
  swiper: any;
  fragmentObj: ICarouselItemsInfo = {} as ICarouselItemsInfo;
  carouselItemsMenu: ICarouselItemsInfo[] = CAROUSEL_ITEMS_MENU;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.fragment.subscribe( fragment => {
      this.fragmentObj =  this.carouselItemsMenu.find((item: ICarouselItemsInfo) => item.fragment === fragment) || {} as ICarouselItemsInfo;
    })
   }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      const w = evt.target as Window;
      this.isMobile = w.innerWidth < 768;
    });
  }

  onSwiper(swiper: Swiper) {
    this.swiper = swiper;
    if (this.fragmentObj) {
      this.swiper.slideTo(this.isMobile ? this.fragmentObj.mobile_position : this.fragmentObj.desktop_position, 1000);
      this.router.navigate(['/']);
    }
  }

  onSlideChange(event: any) {
    const swiper = event as Swiper;
    this.visibleHeader = swiper?.activeIndex >= 3;
    this.activeSlide = swiper?.activeIndex;
    this.changeDetectorRef.detectChanges();
  }

  reload() {
    this.changeDetectorRef.detectChanges();
  }

  onSelectedSlide(event: number) {
    this.swiper.slideTo(event, 1000);
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

}
