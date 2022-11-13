import { Subject } from 'rxjs';

import { Injectable, EventEmitter } from '@angular/core';
import {Contact} from './contact.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    contactListChangedEvent = new Subject<Contact[]>();
    private contacts: Contact[] = [];
    maxContactId: number;

    constructor() {
        this.contacts = MOCKCONTACTS;
        this.maxContactId = this.getMaxId();

    }

    getContacts() {
        return this.contacts.slice();
    }
    
    getContact(id: string): Contact {
        for (const contact of this.contacts) {
            if (contact.id === id) {
                return contact;
            }
        }
        return null;
    }

    getMaxId(): number {
        let maxId: number = 0;
        this.contacts.forEach((contact) => {
            let currentId = contact.id;
            if (currentId = contact.id) {
                maxId = parseInt(currentId);
            }
        });
        return maxId;
    }

    addContact(newContact: Contact) {
        if (!newContact) {
            return
        }
        this.maxContactId++;
        newContact.id = this.maxContactId.toString();
        let contactsListClone = this.contacts.slice();
        this.contactListChangedEvent.next(contactsListClone);
    }

    updateContact(originalContact: Contact, newContact: Contact) {
        if (!originalContact || !newContact) {
            return
        }
        const pos = this.contacts.indexOf(originalContact);
        if (pos < 0) {
            return
        }
        newContact.id = originalContact.id;
        this.contacts[pos] = newContact;
        let contactsListClone = this.contacts.slice();
        this.contactListChangedEvent.next(contactsListClone)
    }

    deleteContact(contact: Contact) {
        if (!contact) {
            return;
        }
        const pos = this.contacts.indexOf(contact);
        if (pos < 0) {
            return;
        }
        this.contacts.splice(pos, 1);
        this.contactListChangedEvent.next(this.contacts.slice());
    }
}