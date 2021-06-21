import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import SwiperCore, { Mousewheel, Pagination } from "swiper/core";
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

  constructor() { }

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      const w = evt.target as Window; 
      this.isMobile = w.innerWidth < 768;
    })
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
  }

}
