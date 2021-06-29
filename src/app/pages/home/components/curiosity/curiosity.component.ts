import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-curiosity]',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.scss']
})
export class CuriosityComponent implements OnInit {

  @Input() view: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
