import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const HeaderEditConfig = {
	emptyLabel: 'Fylo: Header',

	isEmpty(componentData) {
		return !componentData || !componentData.description;
	}
};

MapTo('aem-sites-developer/components/fylo/header')(
	HeaderComponent,
	HeaderEditConfig
);
