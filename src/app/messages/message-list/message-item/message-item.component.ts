import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../message.model';
import { ContactService } from 'src/app/contacts/contacts.service';
import { Contact } from 'src/app/contacts/contact.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  // contacts: Contact[] = [];
  messageSender: string;
  
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    const contact: Contact = this.contactService.getContact(this.message.sender);
    if (contact) {
      this.messageSender = contact?.name; 
    } else {
      this.messageSender = 'Shayla Mueller'
    }
 }
}

