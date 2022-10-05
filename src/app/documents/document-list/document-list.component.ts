import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1a', 'Day 1', 'File 1 from Day 1', 'hello1.com', null ),
    new Document('2a', 'Day 2', 'File 2 from Day 2', 'hello2.com', null ),
    new Document('3a', 'Day 3', 'File 3 from Day 3', 'hello3.com', null ),
    new Document('4a', 'Day 4', 'File 4 from Day 4', 'hello4.com', null ),
    new Document('5a', 'Day 5', 'File 5 from Day 5', 'hello5.com', null ),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  selectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
