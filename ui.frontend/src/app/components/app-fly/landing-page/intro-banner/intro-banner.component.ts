import { Component, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-intro-banner',
  templateUrl: './intro-banner.component.html',
  styleUrls: ['./intro-banner.component.scss']
})
export class IntroBannerComponent implements OnInit {

  image: string;
  title: string;
  description: string;
  titleBtnApple: string;
  titleBtnAndroid: string;
  btnAppleLink: string;
  btnAndroidLink: string;
  btnIconApple: string;
  btnIconAndroid: string;

  constructor() { }

  ngOnInit(): void {
  }

}

const IntroBannerEditConfig = {
  emptyLabel: 'IntroBanner',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projects/app-fly/landing-page/intro-banner')
(IntroBannerComponent, IntroBannerEditConfig)