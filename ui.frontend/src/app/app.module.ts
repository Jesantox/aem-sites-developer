/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { SpaAngularEditableComponentsModule } from '@adobe/aem-angular-editable-components';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import './components/import-components';
import { ModelManagerService } from './components/model-manager.service';
import { PageComponent } from './components/page/page.component';
import { FormsModule } from '@angular/forms';

import { AemAngularCoreWcmComponentsTabsV1 } from '@adobe/aem-core-components-angular-spa/containers/tabs/v1';

import { AemAngularCoreWcmComponentsTitleV2 } from '@adobe/aem-core-components-angular-base/authoring/title/v2';
import { AemAngularCoreWcmComponentsBreadCrumbV2 } from '@adobe/aem-core-components-angular-base/layout/breadcrumb/v2';
import { AemAngularCoreWcmComponentsNavigationV1 } from '@adobe/aem-core-components-angular-base/layout/navigation/v1';
import { AemAngularCoreWcmComponentsButtonV1 } from '@adobe/aem-core-components-angular-base/authoring/button/v1';
import { AemAngularCoreWcmComponentsImageV2 } from '@adobe/aem-core-components-angular-base/authoring/image/v2';

import { AemAngularCoreWcmComponentsDownloadV1 } from '@adobe/aem-core-components-angular-base/authoring/download/v1';

import { AemAngularCoreWcmComponentsListV2 } from '@adobe/aem-core-components-angular-base/authoring/list/v2';
import { AemAngularCoreWcmComponentsSeparatorV1 } from '@adobe/aem-core-components-angular-base/authoring/separator/v1';
import { AemAngularCoreWcmComponentsAccordionV1 } from '@adobe/aem-core-components-angular-spa/containers/accordion/v1';
import { AemAngularCoreWcmComponentsLanguageNavigationV1 } from '@adobe/aem-core-components-angular-base/layout/language-navigation/v1';

import { HeaderComponent } from './fylo/header/header.component';
import { StructureContainerComponent } from './fylo/structure-container/structure-container.component';

import { AppFlyModule } from './components/app-fly/app-fly.module';
import { HeaderToDoListComponent } from './components/to-do-list/header/header-to-do-list.component';
import { BodyToDoListComponent } from './components/to-do-list/body/body-to-do-list.component';
import { ButtonDeleteAllComponent } from './components/to-do-list/button-delete-all/button-delete-all.component';
import { InputAddItensComponent } from './components/to-do-list/input-add-itens/input-add-itens.component';

@NgModule({
  imports: [
    BrowserModule,
    SpaAngularEditableComponentsModule,
    AppRoutingModule,
    AemAngularCoreWcmComponentsTabsV1,
    AemAngularCoreWcmComponentsTitleV2,
    AemAngularCoreWcmComponentsBreadCrumbV2,
    AemAngularCoreWcmComponentsNavigationV1,
    AemAngularCoreWcmComponentsButtonV1,
    AemAngularCoreWcmComponentsImageV2,
    AemAngularCoreWcmComponentsDownloadV1,
    AemAngularCoreWcmComponentsListV2,
    AemAngularCoreWcmComponentsAccordionV1,
    AemAngularCoreWcmComponentsSeparatorV1,
    AemAngularCoreWcmComponentsLanguageNavigationV1,
    AppFlyModule,
    FormsModule
  ],
  providers: [ModelManagerService,
    { provide: APP_BASE_HREF, useValue: '/' }],
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    StructureContainerComponent,
    HeaderToDoListComponent,
    BodyToDoListComponent,
    ButtonDeleteAllComponent,
    InputAddItensComponent],
  entryComponents: [PageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
