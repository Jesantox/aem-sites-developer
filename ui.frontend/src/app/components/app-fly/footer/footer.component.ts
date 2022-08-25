import { Component, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public logo: string;
  public listPage: [];
  public titlePage: string;
  public description: string;
  public titleUtilPage: string;

  constructor() { }

  ngOnInit(): void {
  }

}

const FooterEditConfig = {
  emptyLabel: 'FOOTER',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projetos/app-fly/footer')
  (FooterComponent, FooterEditConfig)
