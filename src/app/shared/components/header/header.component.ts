import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() activeMenu = 3;
  @Output() onItemMenuSelected = new EventEmitter<number>();

  open = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickLink(itemMenuSelected: number) {
    this.open = false;
    this.onItemMenuSelected.emit(itemMenuSelected);
  }
}
