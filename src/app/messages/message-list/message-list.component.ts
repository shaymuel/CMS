import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1b', 'Day 1', 'Do Day 1 Things', 'Boss'),
    new Message('1b', 'Day 2', 'Do Day 2 Things', 'Boss'),
    new Message('1b', 'Day 3', 'Do Day 3 Things', 'Boss'),
    new Message('1b', 'Day 4', 'Do Day 4 Things', 'Boss'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}
