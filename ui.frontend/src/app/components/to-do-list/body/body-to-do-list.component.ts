import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../../model/task-list';

@Component({
  selector: 'app-body',
  templateUrl: './body-to-do-list.component.html',
  styleUrls: ['./body-to-do-list.component.scss']
})
export class BodyToDoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');
  constructor() { }

  ngDoCheck() {
    this.setLocalStorage()
  }

  public setEmitTaskList(event: string) {
    return this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    return this.taskList.splice(event, 1);
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Tem certeza que deseja Deletar tudo?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {

    if (!event.length) {
      const confirm = window.confirm('Task está sem vazia, deseja deletar?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }

  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}

const BodyToDoListEditConfig = {
  emptyLabel: 'BODY',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projetos/to-do-list/body')
(BodyToDoListComponent, BodyToDoListEditConfig)
