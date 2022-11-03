import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-add-itens',
  templateUrl: './input-add-itens.component.html',
  styleUrls: ['./input-add-itens.component.scss']
})
export class InputAddItensComponent implements OnInit {

  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList = '';

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();

    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  };
}

const InputAddItensEditConfig = {
  emptyLabel: 'BUTTON DELETE ALL',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projetos/to-do-list/input-add-itens')
(InputAddItensComponent, InputAddItensEditConfig)
