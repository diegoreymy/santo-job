import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-influencers]',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit {

  @Output() onClickBtn = new EventEmitter<number>();

  isMobile = window.innerHeight < 768;
  isTablet = window.innerWidth < 1024 && window.innerWidth >= 768;

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    this.onClickBtn.emit(this.isMobile ? 9 : 7);
  }

}
