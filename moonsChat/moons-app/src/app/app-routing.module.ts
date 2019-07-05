import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperChatInputComponent } from './wrapper-chat-input/wrapper-chat-input.component'
import { NicknameComponent } from './nickname/nickname.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

const routes: Routes = [
  {
    path: '',
    component: WrapperChatInputComponent
  },
  {
    path: 'nickname',
    component: NicknameComponent
  },
  {
    path: 'graph',
    component: DonutChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
