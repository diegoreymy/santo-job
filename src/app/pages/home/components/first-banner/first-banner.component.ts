import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-first-banner]',
  templateUrl: './first-banner.component.html',
  styleUrls: ['./first-banner.component.scss']
})
export class FirstBannerComponent implements OnInit {

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
