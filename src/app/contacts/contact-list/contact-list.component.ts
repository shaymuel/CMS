import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../contact.model'
import { ContactService } from '../contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  private contactsChangeSub: Subscription;


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactsChangeSub = this.contactService.contactListChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts
      }
    )
  }

  ngOnDestroy() {
    this.contactsChangeSub.unsubscribe();
  }
}
