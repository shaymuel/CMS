import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../documents.service';

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  originalDocument: Document;
  document: Document;
  editMode: boolean = false;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id == null || id == undefined) {
        this.editMode = false;
        return
      }
      this.originalDocument = this.documentService.getDocument(id);
      if (this.originalDocument == null || this.originalDocument === undefined) {
        return
      }
      this.editMode = true;
      this.document = JSON.parse(JSON.stringify(this.originalDocument));
    })
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newDocument = new Document(
      null,
      value.name,
      value.description,
      value.docUrl,
      null
    );
    if (this.editMode) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }
    this.router.navigate(['/documents'], { relativeTo: this.route });
  }

  onCancel() {
    this.router.navigate(['/documents'], { relativeTo: this.route });
  }

}
