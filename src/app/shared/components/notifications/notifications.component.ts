import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-notifications]',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() message: string = '';
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
