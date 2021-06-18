import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatDoWeDoComponent } from './what-do-we-do.component';

describe('WhatDoWeDoComponent', () => {
  let component: WhatDoWeDoComponent;
  let fixture: ComponentFixture<WhatDoWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatDoWeDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatDoWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
