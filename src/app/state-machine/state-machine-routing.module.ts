import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '@app/core';
import {WorkflowComponent} from 'nova-workflow';

const routes: Routes = Route.withShell([
  {path: ':wf', component: WorkflowComponent},
  {path: ':wf/:act', component: WorkflowComponent}
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StateMachineRoutingModule { }



