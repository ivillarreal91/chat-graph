import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListMessages {
  messages:Array<Object> = [];
}
