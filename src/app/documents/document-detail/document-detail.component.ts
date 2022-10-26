import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../documents.service';
import { WindRefService } from 'src/app/wind-ref.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  nativeWindow: any;

  constructor(private documentService: DocumentService, private router: Router, private route: ActivatedRoute, private windowRefService: WindRefService) {
    this.nativeWindow = windowRefService.getNativeWindow();

   }

  ngOnInit() : void {
        this.route.params.subscribe((params: Params) => {
      this.document = this.documentService.getDocument(params['id']);
    })
   }

   onView() {
    let url = this.document.url;
    if (url) {
      this.nativeWindow.open(url);
    }
   }

   onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['documents'])
 }

}
