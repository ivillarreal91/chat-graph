import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { InputMessageComponent } from './input-message/input-message.component';
import { WrapperChatInputComponent } from './wrapper-chat-input/wrapper-chat-input.component';
import { NicknameComponent } from './nickname/nickname.component';
import { ChatService } from './helper/chat-service';
import { ListMessages } from './helper/list-messages';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

const config: SocketIoConfig = { url: 'http://localhost:1234', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatComponent,
    InputMessageComponent,
    WrapperChatInputComponent,
    NicknameComponent,
    DonutChartComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    FormsModule
  ],
  providers: [ChatService,ListMessages],
  bootstrap: [AppComponent]
})
export class AppModule { }
