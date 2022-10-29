import { Component, OnDestroy, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../documents.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  private docsChangeSub: Subscription;


  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
    this.docsChangeSub = this.documentService.documentListChangedEvent.subscribe(
      (documents: Document[]) => {
        this.documents = documents
      }
    )
  }

  ngOnDestroy() {
    this.docsChangeSub.unsubscribe();
  }

}
