import { Subject } from 'rxjs';

import { Injectable, EventEmitter } from '@angular/core';
import { Document } from "./document.model";
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {
    documents: Document[];
    maxDocumentId: number;
    documentListChangedEvent = new Subject<Document[]>();

    constructor() {
        this.documents = MOCKDOCUMENTS;
        this.maxDocumentId = this.getMaxId();
    }

    getDocuments(): Document[] {
        return this.documents.slice();
    }

    getDocument(id: string): Document {
        for (const document of this.documents) {
            if (document.id === id) {
                return document;
            }
        }
        return null;
    }

    getMaxId(): number {
        let maxId: number = 0;
        this.documents.forEach((document) => {
            let currentId = document.id;
            if (currentId = document.id) {
                maxId = parseInt(currentId);
            }
        });
        return maxId;
    }

    addDocument(newDocument: Document) {
        if (!newDocument) {
            return
        }
        this.maxDocumentId++;
        newDocument.id = this.maxDocumentId.toString();
        let documentsListClone = this.documents.slice();
        this.documentListChangedEvent.next(documentsListClone);
    }

    updateDocument(originalDocument: Document, newDocument: Document) {
        if (!originalDocument || !newDocument) {
            return
        }
        const pos = this.documents.indexOf(originalDocument);
        if (pos < 0) {
            return
        }
        newDocument.id = originalDocument.id;
        this.documents[pos] = newDocument;
        let documentsListClone = this.documents.slice();
        this.documentListChangedEvent.next(documentsListClone)
    }

    
    deleteDocument(document: Document) {
        if (!document) {
            return
        }
        const pos = this.documents.indexOf(document);
        if (pos < 0) {
            return
        }
        this.documents.splice(pos, 1);
        this.documentListChangedEvent.next(this.documents.slice());
    }

}