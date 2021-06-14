import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstBannerComponent } from './components/first-banner/first-banner.component';
import { SecondBannerComponent } from './components/second-banner/second-banner.component';
import { ThirdBannerComponent } from './components/third-banner/third-banner.component';
import { WhoAreWeComponent } from './components/who-are-we/who-are-we.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';


@NgModule({
  declarations: [
    HomeComponent,
    FirstBannerComponent,
    SecondBannerComponent,
    ThirdBannerComponent,
    WhoAreWeComponent,
    SponsorsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    SharedModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class HomeModule { }
