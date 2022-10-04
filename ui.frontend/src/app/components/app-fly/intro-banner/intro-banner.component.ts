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

  constructor() { }

  ngOnInit(): void {
  }

}

const IntroBannerEditConfig = {
  emptyLabel: 'IntroBanner',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projetos/app-fly/intro-banner')
(IntroBannerComponent, IntroBannerEditConfig)