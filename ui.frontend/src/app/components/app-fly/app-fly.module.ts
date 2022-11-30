
// MÓDULOS ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTES APP FLY
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroBannerComponent } from './landing-page/intro-banner/intro-banner.component';
import { PresentationChannelsComponent } from './landing-page/presentation-channels/presentation-channels.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    IntroBannerComponent,
    PresentationChannelsComponent
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent]
})

export class AppFlyModule { }
