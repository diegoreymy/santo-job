import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardsCarouselComponent } from './components/cards-carousel/cards-carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    ServicesComponent,
    CardsCarouselComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    FontAwesomeModule,
    SwiperModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class ServicesModule { }
