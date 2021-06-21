import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-who-are-we]',
  templateUrl: './who-are-we.component.html',
  styleUrls: ['./who-are-we.component.scss']
})
export class WhoAreWeComponent implements OnInit {

  @Input() view: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
