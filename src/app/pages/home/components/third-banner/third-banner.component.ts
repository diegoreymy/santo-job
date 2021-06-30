import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-third-banner]',
  templateUrl: './third-banner.component.html',
  styleUrls: ['./third-banner.component.scss']
})
export class ThirdBannerComponent implements OnInit {

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
