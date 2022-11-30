import { Component, OnInit } from '@angular/core';
import { MapTo } from '@adobe/aem-angular-editable-components';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public logo: string;
  public description: string;
  public titlePage: string;
  public listPage: [];
  public titleUtilPage: string;
  public listUtilPage: [];
  public moreTemplateText: string;
  public moreTemplateLink: string;
  public titleSocialNetwork: string;
  public listSocialNetwork: [];

  constructor() { }

  ngOnInit(): void {
  }

}

const FooterEditConfig = {
  emptyLabel: 'FOOTER',
  isEmpty(componentData) { return !componentData || !componentData.description; }
};

MapTo('aem-sites-developer/components/projects/app-fly/footer')
  (FooterComponent, FooterEditConfig)
