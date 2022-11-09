import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-delete-all',
  templateUrl: './button-delete-all.component.html',
  styleUrls: ['./button-delete-all.component.scss']
})
export class ButtonDeleteAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const ButtonDeleteAllEditConfig = {
  emptyLabel: 'BUTTON DELETE ALL',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projetos/to-do-list/button-delete-all')
(ButtonDeleteAllComponent, ButtonDeleteAllEditConfig)
