import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {StateMachineRoutingModule} from '@app/state-machine/state-machine-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    StateMachineRoutingModule
  ],
  declarations: [
  ]
})
export class StateMachineModule { }
