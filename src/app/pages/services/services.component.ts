import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  slug: string;

  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    console.log(this.slug)
   }

  ngOnInit(): void {
  }

  onClickButton() {
    this.viewportScroller.scrollToAnchor('footer');
  }

}
