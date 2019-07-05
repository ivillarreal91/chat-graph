import { Component, OnInit } from '@angular/core';
import { ChatService } from '../helper/chat-service';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.css']
})
export class InputMessageComponent implements OnInit {

  message:string = '';

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
  }
  sendMessage() {
    if(this.message) {
      this._chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
