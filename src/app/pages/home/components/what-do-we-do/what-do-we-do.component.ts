import { Component, OnInit } from '@angular/core';
import { IServiceList, SERVICES_LIST } from 'src/app/shared/constants/services-list.constant';

@Component({
  selector: '[app-what-do-we-do]',
  templateUrl: './what-do-we-do.component.html',
  styleUrls: ['./what-do-we-do.component.scss']
})
export class WhatDoWeDoComponent implements OnInit {

  servicesList: IServiceList[] = SERVICES_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
