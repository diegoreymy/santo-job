import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-second-banner]',
  templateUrl: './second-banner.component.html',
  styleUrls: ['./second-banner.component.scss']
})
export class SecondBannerComponent implements OnInit {

  @Output() onClickArrow = new EventEmitter<number>();

  icons = {
    chevronDown: faChevronDown
  };

  constructor() { }

  ngOnInit(): void {
  }

  goToNextSlide(nextSlide: number) {
    this.onClickArrow.emit(nextSlide);
  }

}
