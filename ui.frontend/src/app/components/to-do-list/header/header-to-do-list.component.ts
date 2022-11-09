import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-to-do-list.component.html',
  styleUrls: ['./header-to-do-list.component.scss']
})
export class HeaderToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const HeaderToDoListEditConfig = {
  emptyLabel: 'HEADER -> TO-DO-LIST',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projetos/to-do-list/header')
(HeaderToDoListComponent, HeaderToDoListEditConfig)
