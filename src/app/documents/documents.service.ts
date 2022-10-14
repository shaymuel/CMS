import { Injectable, EventEmitter } from '@angular/core';
import { Document } from "./document.model";
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable()
export class DocumentService {
    private documents: Document[] = [];
    documentSelectedEvent = new EventEmitter<Document>();

    constructor() {    
        this.documents = MOCKDOCUMENTS;
    }

    getDocuments() {
        return this.documents.slice();
    }
    
    getDocument(id: string): Document {
        this.documents.forEach((document) => {
            if (document.id === id) {
                return document;
            }
            else {
                return null;
            }
        })
        return 
       } 
}