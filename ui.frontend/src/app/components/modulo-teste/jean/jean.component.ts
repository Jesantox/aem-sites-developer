import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jean',
  templateUrl: './jean.component.html',
  styleUrls: ['./jean.component.scss']
})
export class JeanComponent implements OnInit {

  public texto: string;

  constructor() { }

  ngOnInit(): void {
  }

}

const JeanEditConfig = {
	emptyLabel: 'Componente - Jean',

	isEmpty(componentData) {
		return !componentData || !componentData.description;
	}
};

MapTo('aem-sites-developer/components/modulo-teste/jean')(
	JeanComponent,
	JeanEditConfig
);
