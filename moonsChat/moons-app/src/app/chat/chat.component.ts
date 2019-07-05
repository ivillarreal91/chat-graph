import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from '../helper/chat-service';
import { ListMessages } from '../helper/list-messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit,OnDestroy {
  @ViewChild('chatroom') chatroom:ElementRef;
  constructor(private _chatService: ChatService, private _listMessages: ListMessages) { }

  ngOnInit() {
    this.afterAddMessage();
    this._chatService
      .getMessages()
      .subscribe((message:any) => {
        this._listMessages.messages.push(message);
        this.afterAddMessage();
      });
  }
  ngOnDestroy() {
    this._chatService.removeListener('new_message');
  }
  afterAddMessage() {
    setTimeout(()=> {
      this.chatroom.nativeElement.scrollTop = this.chatroom.nativeElement.scrollHeight;
    });
  }
}
