import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {PaperModule} from 'nova-paper';
import {DynamicFormModule, DynamicFormService, NovaTranslatorService} from 'nova-forms';
import {
  WorkflowModule,
  NotificationsService,
  NovaFormService, WorkflowProviderService,
} from 'nova-workflow';
import {ToastyNotificationsService} from '@app/state-machine/services/ToastyNotificationsService';
import {NgTranslateTranslatorService} from '@app/state-machine/services/NgTranslateTranslatorService';
import {MobileWorkflowProviderService} from '@app/state-machine/services/MobileWorkflowProviderService';
import {StateMachineModule} from '@app/state-machine/state-machine.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    DynamicFormModule.forRoot(
      {
        provide: NovaTranslatorService,
        useClass: NgTranslateTranslatorService
      }
    ),
    PaperModule,
    WorkflowModule.forRoot(
      {
        provide: NotificationsService,
        useClass: ToastyNotificationsService
      },
      {
        provide: NovaFormService,
        useClass: DynamicFormService
      },
      {
        provide: WorkflowProviderService,
        useClass: MobileWorkflowProviderService
      },
    ),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    StateMachineModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
    Keyboard,
    StatusBar,
    SplashScreen
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    WorkflowProviderService.setUrl('http://192.168.1.3/api/workflow/[name]');
    DynamicFormModule.registerComponents();
    DynamicFormModule.addModules(PaperModule.getComponents());
  }
}
