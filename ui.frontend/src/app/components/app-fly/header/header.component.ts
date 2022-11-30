import { Component, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logo: string;
  public options: object[];
  public background: string;

  constructor() { }

  ngOnInit(): void {
  }

}

const HeaderEditConfig = {
  emptyLabel: 'HEADER',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projects/app-fly/app-fly-header')
(HeaderComponent, HeaderEditConfig)
