import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-container',
  templateUrl: './structure-container.component.html',
  styleUrls: ['./structure-container.component.scss']
})
export class StructureContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const StructureContainerEditConfig = {
	emptyLabel: 'Fylo: Header',

	isEmpty(componentData) {
		return !componentData || !componentData.description;
	}
};

MapTo('aem-sites-developer/components/fylo/structure-container')(
	StructureContainerComponent,
	StructureContainerEditConfig
);
