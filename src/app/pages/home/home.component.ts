import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import SwiperCore, { Mousewheel, Pagination, Swiper } from "swiper/core";
SwiperCore.use([Mousewheel, Pagination]);

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  isMobile = window.innerWidth < 768;
  resizeObservable$: Observable<Event> = new Observable();
  resizeSubscription$: Subscription = new Subscription();
  visibleHeader: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      const w = evt.target as Window; 
      this.isMobile = w.innerWidth < 768;
    })
  }

  onSlideChange(event: any) {
    const swiper = event as Swiper;
    this.visibleHeader = swiper?.activeIndex >= 3;
    this.changeDetectorRef.detectChanges();
  }

  reload() {
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

}
