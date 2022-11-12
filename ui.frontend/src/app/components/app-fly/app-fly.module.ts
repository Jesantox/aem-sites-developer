import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroBannerComponent } from './intro-banner/intro-banner.component';
import { PresentationChannelsComponent } from './presentation-channels/presentation-channels.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, IntroBannerComponent, PresentationChannelsComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent]
})

export class AppFlyModule { }
