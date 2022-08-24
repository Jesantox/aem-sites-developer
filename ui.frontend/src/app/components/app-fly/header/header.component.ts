import { Component, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo: string;
  public background: string;
  public optionOne: string;
  public optionTwo: string;
  public optionThree: string;
  public optionFor: string;
  public optionFive: string;

  constructor() { }

  ngOnInit(): void {
  }

}

const HeaderEditConfig = {
  emptyLabel: 'HEADER',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projetos/app-fly/app-fly-header')
(HeaderComponent, HeaderEditConfig)
