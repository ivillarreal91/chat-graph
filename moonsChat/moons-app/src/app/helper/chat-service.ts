import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
  })
export class ChatService {

    constructor(private socket: Socket) { }

    sendMessage(msg: string) {
        this.socket.emit("new_message", { message:msg});
    }
    getMessages() {
      return this.socket
        .fromEvent<any>('new_message')
        .pipe(map( data => data ));
    }

    saveNickname(nickname:string) {
      this.socket.emit("change_username", { username:nickname});
    }

    removeListener(eventName) {
      this.socket.removeListener(eventName);
    }
}