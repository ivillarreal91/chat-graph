import { Component, OnInit } from '@angular/core';
import { ChatService } from '../helper/chat-service';

@Component({
  selector: 'app-nickname',
  templateUrl: './nickname.component.html',
  styleUrls: ['./nickname.component.css']
})
export class NicknameComponent implements OnInit {

  nickname:string = '';

  constructor(private _chatService: ChatService) { }

  ngOnInit() {
  }

  saveNickname(){
    if(this.nickname) {
      this._chatService.saveNickname(this.nickname);
      this.nickname = '';
    }
  }
}
