import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation-channels',
  templateUrl: './presentation-channels.component.html',
  styleUrls: ['./presentation-channels.component.scss']
})
export class PresentationChannelsComponent implements OnInit {

  public text: string;
  public listChannel: [];

  constructor() { }

  ngOnInit(): void {
  }
}

const PresentationChannelsEditConfig = {
  emptyLabel : 'Presentation Channels',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projects/app-fly/landing-page/presentation-channels')
(PresentationChannelsComponent, PresentationChannelsEditConfig)
